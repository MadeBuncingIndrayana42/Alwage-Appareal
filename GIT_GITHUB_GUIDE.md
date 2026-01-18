# 🚀 Panduan Git & GitHub - Alwage Appareal Landing Page

## 📋 Setup Awal (Hanya Sekali)

### 1. Install Git (Jika Belum)
Download dari: https://git-scm.com/downloads

Cek instalasi:
```bash
git --version
```

### 2. Setup Config Git (Pertama Kali)
```bash
git config --global user.name "Nama Anda"
git config --global user.email "email@anda.com"
```

---

## 🎯 Setup Repository (Pertama Kali)

### Step 1: Buat Repository di GitHub
1. Login ke GitHub (https://github.com)
2. Klik tombol **"New"** atau **"+"** → **"New repository"**
3. Isi:
   - Repository name: `alwage-appareal-landing`
   - Description: `Landing page untuk Alwage Appareal - Custom Jersey Brand`
   - Pilih **Public** atau **Private**
   - **JANGAN** centang "Initialize with README" (karena kita sudah punya code)
4. Klik **"Create repository"**

### Step 2: Initialize Git di Local
Buka terminal/PowerShell di folder project:
```bash
cd c:\xampp\htdocs\AlwageAppareal\landing
```

Initialize Git:
```bash
git init
git add .
git commit -m "Initial commit: Alwage Appareal Landing Page"
```

### Step 3: Connect ke GitHub
Ganti `USERNAME` dan `REPO-NAME` dengan milik Anda:
```bash
git branch -M main
git remote add origin https://github.com/USERNAME/REPO-NAME.git
git push -u origin main
```

**Contoh:**
```bash
git remote add origin https://github.com/johndoe/alwage-appareal-landing.git
git push -u origin main
```

---

## 🔄 Update Code ke GitHub (Setiap Kali Ada Perubahan)

### Cara Manual (Command by Command)

#### 1. Cek Status File
```bash
git status
```

#### 2. Add File yang Berubah
```bash
# Add semua file
git add .

# Atau add file spesifik
git add index.html
git add styles.css
```

#### 3. Commit dengan Pesan
```bash
git commit -m "Deskripsi perubahan yang Anda buat"
```

**Contoh:**
```bash
git commit -m "Update hero section dengan full background"
git commit -m "Optimasi loading gambar dan lazy loading"
git commit -m "Redesign about, products, dan gallery section"
```

#### 4. Push ke GitHub
```bash
git push
```

---

## ⚡ Quick Update Script (Auto)

Saya buatkan script untuk update cepat!

### Untuk Windows (PowerShell)
Simpan file: `update-github.ps1`

```powershell
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
```

**Cara pakai:**
```bash
.\update-github.ps1
```

### Script dengan Custom Message
Simpan file: `push.ps1`

```powershell
param(
    [string]$message = "Update code"
)

Write-Host "🚀 Pushing to GitHub..." -ForegroundColor Cyan
Write-Host "Message: $message" -ForegroundColor Yellow

git add .
git commit -m "$message"
git push

Write-Host "✅ Done!" -ForegroundColor Green
```

**Cara pakai:**
```bash
# Dengan pesan default
.\push.ps1

# Dengan pesan custom
.\push.ps1 "Update hero section design"
```

---

## 📝 Git Workflow Sehari-hari

### Scenario 1: Update Kecil (CSS, Text, etc)
```bash
git add .
git commit -m "Update styling hero section"
git push
```

### Scenario 2: Fitur Baru
```bash
git add .
git commit -m "Tambah section testimonials dengan slider"
git push
```

### Scenario 3: Bug Fix
```bash
git add .
git commit -m "Fix: WhatsApp button tidak responsive di mobile"
git push
```

---

## 🎯 Best Practices Commit Messages

### ✅ Good Examples:
```bash
git commit -m "Add lazy loading untuk semua gambar"
git commit -m "Update color scheme ke 60-30-10 blue"
git commit -m "Fix: Gallery lightbox tidak muncul"
git commit -m "Redesign CTA section dengan gradient background"
git commit -m "Optimize: Compress gambar hero dari 3MB ke 200KB"
```

### ❌ Bad Examples:
```bash
git commit -m "update"
git commit -m "fix"
git commit -m "changes"
git commit -m "asdfasdf"
```

---

## 🔍 Useful Git Commands

### Cek History
```bash
git log --oneline
```

### Cek Remote URL
```bash
git remote -v
```

### Undo Last Commit (Belum di-push)
```bash
git reset --soft HEAD~1
```

### Pull Latest dari GitHub
```bash
git pull
```

### Cek Branch
```bash
git branch
```

---

## 🚨 Troubleshooting

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/USERNAME/REPO-NAME.git
```

### Error: "Permission denied (publickey)"
Gunakan HTTPS instead SSH, atau setup SSH key di GitHub.

### Error: "Your branch is behind"
```bash
git pull
# Resolve conflicts jika ada
git push
```

### Forgot to Pull Before Edit
```bash
git stash
git pull
git stash pop
# Resolve conflicts
git add .
git commit -m "Merge changes"
git push
```

---

## 📊 GitHub Features

### View Your Code Online
```
https://github.com/USERNAME/REPO-NAME
```

### Enable GitHub Pages (Free Hosting!)
1. Go to repository Settings
2. Scroll ke "Pages"
3. Source: Deploy from branch `main`
4. Folder: `/ (root)`
5. Save

Your site akan live di:
```
https://USERNAME.github.io/REPO-NAME/
```

---

## 🎉 Quick Reference

```bash
# First time setup
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <URL>
git push -u origin main

# Regular updates
git add .
git commit -m "Your message"
git push
```

---

**🔥 Pro Tip:** Gunakan script `push.ps1` untuk update cepat tanpa ketik command berulang!
