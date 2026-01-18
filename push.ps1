param(
    [string]$message = "Update code"
)

Write-Host "🚀 Pushing to GitHub..." -ForegroundColor Cyan
Write-Host "📝 Message: $message" -ForegroundColor Yellow

# Add all changes
git add .

# Commit with custom message
git commit -m "$message"

# Push to GitHub
git push

Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
Write-Host "⏰ Time: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')" -ForegroundColor Yellow
