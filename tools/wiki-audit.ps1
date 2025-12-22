<#
  ARK Wiki audit script (PowerShell)
  - Parses settings-data.js for { name, default, type }
  - Downloads https://ark.wiki.gg/wiki/Server_configuration?action=render
  - Extracts option -> default mappings from table rows
  - Generates wiki-audit-report.md

  Usage (from repo root):
    Set-ExecutionPolicy -Scope Process Bypass -Force
    .\tools\wiki-audit.ps1
#>

[CmdletBinding()]
param(
  [string]$RepoRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

function Strip-Tags {
  param([Parameter(Mandatory=$true)][string]$Html)
  $noScript = [regex]::Replace($Html, '<script[\s\S]*?</script>', '', 'IgnoreCase')
  $noStyle  = [regex]::Replace($noScript, '<style[\s\S]*?</style>',  '', 'IgnoreCase')
  $noTags   = [regex]::Replace($noStyle, '<[^>]+>', ' ')
  $decoded  = [System.Net.WebUtility]::HtmlDecode($noTags)
  return ([regex]::Replace($decoded, '\s+', ' ').Trim())
}

function Normalize-Default {
  param(
    [AllowNull()][string]$Value,
    [AllowNull()][string]$Type
  )

  if ($null -eq $Value) { return '' }
  $v = $Value.Trim()
  if ([string]::IsNullOrWhiteSpace($v)) { return '' }

  # Remove surrounding quotes if present
  if ($v.Length -ge 2) {
    if (($v.StartsWith('"') -and $v.EndsWith('"')) -or ($v.StartsWith("'") -and $v.EndsWith("'"))) {
      $v = $v.Substring(1, $v.Length - 2)
    }
  }

  switch ($Type) {
    'boolean' {
      if ($v -match '^(?i:true)$')  { return 'true' }
      if ($v -match '^(?i:false)$') { return 'false' }
      return $v
    }
    'integer' {
      if ($v -match '^-?\d+(?:\.0+)?$') {
        try { return [string][int]([double]$v) } catch { return $v }
      }
      return $v
    }
    'float' {
      if ($v -match '^-?\d+(?:\.\d+)?$') {
        try { return [string][double]$v } catch { return $v }
      }
      return $v
    }
    default {
      return $v
    }
  }
}

function Compare-Defaults {
  param(
    [string]$OursRaw,
    [string]$WikiRaw,
    [string]$Type
  )

  $ours = Normalize-Default -Value $OursRaw -Type $Type
  $wiki = Normalize-Default -Value $WikiRaw -Type $Type

  if ([string]::IsNullOrWhiteSpace($wiki)) {
    return [pscustomobject]@{ Match = $true; Ours = $ours; Wiki = $wiki; Reason = 'wiki_default_empty' }
  }
  if ([string]::IsNullOrWhiteSpace($ours)) {
    return [pscustomobject]@{ Match = $false; Ours = $ours; Wiki = $wiki; Reason = 'ours_default_empty' }
  }

  if ($Type -eq 'boolean') {
    $ok = ($ours -eq $wiki)
    return [pscustomobject]@{ Match = $ok; Ours = $ours; Wiki = $wiki; Reason = $(if ($ok) { 'equal' } else { 'boolean_mismatch' }) }
  }

  if ($Type -eq 'integer' -or $Type -eq 'float') {
    $a = $null; $b = $null
    if ([double]::TryParse($ours, [ref]$a) -and [double]::TryParse($wiki, [ref]$b)) {
      $ok = ([math]::Abs($a - $b) -lt 1e-9)
      return [pscustomobject]@{ Match = $ok; Ours = $ours; Wiki = $wiki; Reason = $(if ($ok) { 'equal_numeric' } else { 'numeric_mismatch' }) }
    }
  }

  $ok2 = ($ours -eq $wiki)
  return [pscustomobject]@{ Match = $ok2; Ours = $ours; Wiki = $wiki; Reason = $(if ($ok2) { 'equal' } else { 'string_mismatch' }) }
}

$settingsPath = Join-Path $RepoRoot 'settings-data.js'
if (!(Test-Path $settingsPath)) {
  throw "settings-data.js not found at: $settingsPath"
}

$raw = Get-Content -LiteralPath $settingsPath -Raw

# Capture file type (GameUserSettings/Game.ini) by which const object we're currently inside.
# We'll do a simple heuristic: find all setting objects in order and then infer file type based on position.
# Since settings-data.js has two const blocks (gameUserSettings then gameIniSettings), we can split.
$splitToken = 'const gameIniSettings'
$idx = $raw.IndexOf($splitToken)
if ($idx -lt 0) {
  throw "Could not locate '$splitToken' in settings-data.js"
}

$rawGUS = $raw.Substring(0, $idx)
$rawGI  = $raw.Substring($idx)

$settingRegex = [regex]"\{\s*name:\s*'([^']+)'\s*,\s*default:\s*'([^']*)'\s*,\s*type:\s*'([^']+)'";

function Extract-Settings {
  param(
    [Parameter(Mandatory=$true)][string]$Text,
    [Parameter(Mandatory=$true)][string]$FileType
  )

  $matches = $settingRegex.Matches($Text)
  $list = New-Object System.Collections.Generic.List[object]
  foreach ($m in $matches) {
    $name = $m.Groups[1].Value
    $def  = $m.Groups[2].Value
    $type = $m.Groups[3].Value
    $list.Add([pscustomobject]@{ Name = $name; Default = $def; Type = $type; FileType = $FileType })
  }
  return $list
}

$settings = @()
$settings += Extract-Settings -Text $rawGUS -FileType 'GameUserSettings.ini'
$settings += Extract-Settings -Text $rawGI  -FileType 'Game.ini'

# Deduplicate by name (first wins)
$byName = @{}
$duplicates = New-Object System.Collections.Generic.HashSet[string]
foreach ($s in $settings) {
  if ($byName.ContainsKey($s.Name)) {
    $null = $duplicates.Add($s.Name)
    continue
  }
  $byName[$s.Name] = $s
}

$uniqueSettings = $byName.Values | Sort-Object Name

$wikiUrl = 'https://ark.wiki.gg/wiki/Server_configuration?action=render'
Write-Host "Downloading wiki page: $wikiUrl"

# Use Invoke-WebRequest for better compatibility
$resp = Invoke-WebRequest -Uri $wikiUrl -UseBasicParsing
$html = $resp.Content
Write-Host ("Downloaded {0} KB" -f [math]::Round($html.Length / 1024))

# Parse table rows
$rows = [regex]::Matches($html, '<tr[\s\S]*?</tr>', 'IgnoreCase')

$wikiMap = @{}
foreach ($rowMatch in $rows) {
  $row = $rowMatch.Value
  $cells = New-Object System.Collections.Generic.List[string]
  $cellMatches = [regex]::Matches($row, '<t[dh][^>]*>([\s\S]*?)</t[dh]>', 'IgnoreCase')
  foreach ($cm in $cellMatches) {
    $cells.Add($cm.Groups[1].Value)
  }
  if ($cells.Count -lt 2) { continue }

  $optionName = Strip-Tags -Html $cells[0]
  if ([string]::IsNullOrWhiteSpace($optionName)) { continue }

  # Skip obvious header rows
  if ($optionName -match '^(?i:option|setting|name)$') { continue }

  $defaultValue = Strip-Tags -Html $cells[1]

  if (-not $wikiMap.ContainsKey($optionName)) {
    $wikiMap[$optionName] = $defaultValue
  } elseif ([string]::IsNullOrWhiteSpace($wikiMap[$optionName]) -and -not [string]::IsNullOrWhiteSpace($defaultValue)) {
    $wikiMap[$optionName] = $defaultValue
  }
}

Write-Host ("Parsed {0} option rows from wiki" -f $wikiMap.Count)

$mismatches = New-Object System.Collections.Generic.List[object]
$missingOnWiki = New-Object System.Collections.Generic.List[object]
$matchedCount = 0

foreach ($s in $uniqueSettings) {
  if (-not $wikiMap.ContainsKey($s.Name)) {
    $missingOnWiki.Add($s)
    continue
  }

  $result = Compare-Defaults -OursRaw $s.Default -WikiRaw $wikiMap[$s.Name] -Type $s.Type
  if (-not $result.Match) {
    $mismatches.Add([pscustomobject]@{
      Name = $s.Name
      File = $s.FileType
      Type = $s.Type
      GeneratorDefault = $result.Ours
      WikiDefault = $result.Wiki
      Reason = $result.Reason
    })
  } else {
    $matchedCount++
  }
}

$mismatches = $mismatches | Sort-Object Name
$missingOnWiki = $missingOnWiki | Sort-Object Name

$report = New-Object System.Collections.Generic.List[string]
$report.Add('# ARK Wiki Discrepancy Report')
$report.Add('')
$report.Add(('Generated: {0}' -f (Get-Date).ToString('o')))
$report.Add('')
$report.Add('## Summary')
$report.Add(('- Settings in generator (unique names): {0}' -f $uniqueSettings.Count))
$report.Add(('- Wiki options parsed: {0}' -f $wikiMap.Count))
$report.Add(('- Found on wiki: {0}' -f ($matchedCount + $mismatches.Count)))
$report.Add(('- Not found on wiki: {0}' -f $missingOnWiki.Count))
$report.Add(('- Default mismatches (found on wiki): {0}' -f $mismatches.Count))
$report.Add(('- Duplicate names in generator: {0}' -f $duplicates.Count))
$report.Add('')

if ($mismatches.Count -gt 0) {
  $report.Add('## Default mismatches')
  $report.Add('These settings exist on the wiki, but `default` differs.')
  $report.Add('')
  $report.Add('| Setting | File | Type | Generator default | Wiki default |')
  $report.Add('|---|---|---|---:|---:|')
  foreach ($m in $mismatches) {
    $gd = ($m.GeneratorDefault -replace '\|', '\\|')
    $wd = ($m.WikiDefault -replace '\|', '\\|')
    $report.Add("| $($m.Name) | $($m.File) | $($m.Type) | $gd | $wd |")
  }
  $report.Add('')
}

if ($missingOnWiki.Count -gt 0) {
  $report.Add('## Not found on the wiki')
  $report.Add('These settings are present in the generator but were not found in the wiki table (could be ASA-only / patch-notes-only, or the wiki uses a different name).')
  $report.Add('')
  $report.Add('| Setting | File | Type | Generator default |')
  $report.Add('|---|---|---|---:|')
  foreach ($m in $missingOnWiki) {
    $gd2 = ($m.Default -replace '\|', '\\|')
    $report.Add("| $($m.Name) | $($m.FileType) | $($m.Type) | $gd2 |")
  }
  $report.Add('')
}

if ($duplicates.Count -gt 0) {
  $report.Add('## Duplicate setting names (generator)')
  foreach ($d in ($duplicates | Sort-Object)) {
    $report.Add("- $d")
  }
  $report.Add('')
}

$reportPath = Join-Path $RepoRoot 'wiki-audit-report.md'
$reportText = ($report -join "`n")
Set-Content -LiteralPath $reportPath -Value $reportText -Encoding UTF8

Write-Host ''
Write-Host 'Done. Report written to:'
Write-Host $reportPath
Write-Host ''
Write-Host ("Mismatches: {0}" -f $mismatches.Count)
Write-Host ("Missing on wiki: {0}" -f $missingOnWiki.Count)
