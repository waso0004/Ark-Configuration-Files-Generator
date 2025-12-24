# Compare all language translations against English settings-data.js

$dataFile = "c:\Users\krisa\OneDrive\Documents\Ark-Configuration-Files-Generator\settings-data.js"
$transFile = "c:\Users\krisa\OneDrive\Documents\Ark-Configuration-Files-Generator\settings-translations.js"

# Extract all setting names from settings-data.js
$dataContent = Get-Content $dataFile -Raw
$allSettings = [regex]::Matches($dataContent, "name:\s*'([^']+)'") | ForEach-Object { $_.Groups[1].Value } | Sort-Object -Unique

Write-Host "============================================" -ForegroundColor Cyan
Write-Host "Total unique settings in settings-data.js: $($allSettings.Count)" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan

# Read translations file
$transContent = Get-Content $transFile -Raw

# Define language sections
$languages = @{
    'es' = 'Spanish'
    'fr' = 'French'
    'de' = 'German'
    'pt' = 'Portuguese'
    'ru' = 'Russian'
    'zh' = 'Chinese'
    'ja' = 'Japanese'
    'ko' = 'Korean'
}

$results = @{}

foreach ($lang in $languages.Keys) {
    # Extract the language section content
    if ($transContent -match "(?s)$lang`:\s*\{(.*?)\n    \},") {
        $langContent = $Matches[1]
        
        # Extract setting names (handles both regular and quoted keys like 'PerLevelStats[0]')
        $langSettings = @()
        $langSettings += [regex]::Matches($langContent, "^\s{8}(\w+):", [System.Text.RegularExpressions.RegexOptions]::Multiline) | ForEach-Object { $_.Groups[1].Value }
        $langSettings += [regex]::Matches($langContent, "^\s{8}'([^']+)':", [System.Text.RegularExpressions.RegexOptions]::Multiline) | ForEach-Object { $_.Groups[1].Value }
        
        $langSettings = $langSettings | Sort-Object -Unique
        
        # Find missing settings
        $missing = $allSettings | Where-Object { $_ -notin $langSettings }
        
        $results[$lang] = @{
            'count' = $langSettings.Count
            'missing' = $missing
        }
    }
}

# Display results
foreach ($lang in $languages.Keys | Sort-Object) {
    $r = $results[$lang]
    Write-Host ""
    Write-Host "=== $($languages[$lang]) ($lang) ===" -ForegroundColor Yellow
    Write-Host "  Translated: $($r.count) settings" -ForegroundColor Cyan
    
    if ($r.missing.Count -eq 0) {
        Write-Host "  Missing: 0 - COMPLETE!" -ForegroundColor Green
    } else {
        Write-Host "  Missing: $($r.missing.Count) settings" -ForegroundColor Red
        foreach ($m in $r.missing) {
            Write-Host "    - $m" -ForegroundColor Red
        }
    }
}

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "Analysis Complete" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
