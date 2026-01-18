# Quick Git Push Script
Write-Host "🚀 Updating GitHub Repository..." -ForegroundColor Cyan

# Add all changes
git add .

# Commit with timestamp
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
git commit -m "Update: $timestamp"

# Push to GitHub
git push

Write-Host "✅ Successfully updated to GitHub!" -ForegroundColor Green
Write-Host "⏰ Time: $timestamp" -ForegroundColor Yellow
