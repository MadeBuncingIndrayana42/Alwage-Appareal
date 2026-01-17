# ⚡ QUICK START - Alwage Appareal Landing Page

## 🎯 3 Langkah Cepat untuk Mulai

### 1️⃣ Upload Gambar Anda

Masukkan gambar ke folder ini:

```
📁 images/
├── 📁 logo/
│   └── logo-alwage.png (Logo brand Anda)
│
├── 📁 hero/
│   ├── hero-jersey.jpg (Gambar utama/hero)
│   └── about-image.jpg (Gambar about section)
│
├── 📁 products/
│   ├── jersey-futsal.jpg
│   ├── jersey-sepakbola.jpg
│   ├── jersey-basket.jpg
│   └── jersey-komunitas.jpg
│
└── 📁 gallery/
    ├── gallery-1.jpg
    ├── gallery-2.jpg
    ├── gallery-3.jpg
    ├── gallery-4.jpg
    ├── gallery-5.jpg
    ├── gallery-6.jpg
    ├── avatar-1.jpg (Foto customer 1)
    ├── avatar-2.jpg (Foto customer 2)
    └── avatar-3.jpg (Foto customer 3)
```

### 2️⃣ Setting Nomor WhatsApp

Buka file: **`script.js`**

Cari baris ini (line 2):
```javascript
const WHATSAPP_NUMBER = '6281234567890';
```

Ganti dengan nomor WhatsApp Anda:
```javascript
const WHATSAPP_NUMBER = '6281234567890'; // Format: 62 + nomor tanpa 0 di depan
```

**Contoh:**
- Nomor Anda: `0812-3456-7890`
- Di script jadi: `6281234567890`

### 3️⃣ Buka di Browser

**Via XAMPP:**
```
http://localhost/AlwageAppareal/landing/
```

**Atau double-click:**
```
index.html
```

---

## ✏️ Customize Konten (Opsional)

### Ganti Teks Hero Section

Buka `index.html`, cari line ~95:

```html
<h1 class="hero__title">
    CUSTOM JERSEY<br>
    <span class="hero__title-accent">YOUR STYLE</span>
</h1>
```

### Ganti Informasi Kontak

Buka `index.html`, cari section footer (~line 556):

```html
<li class="footer__contact-item">
    <i class="fa-brands fa-whatsapp"></i>
    <span>+62 812-3456-7890</span> <!-- Ganti ini -->
</li>
```

### Tambah Link Social Media

Cari footer social media (~line 538):

```html
<a href="https://instagram.com/alwageappareal" ...>
<a href="https://facebook.com/alwageappareal" ...>
```

---

## 🎨 Ganti Warna Brand (Opsional)

Buka `styles.css`, cari line ~5:

```css
:root {
  --color-primary-blue: #1E40AF;  /* Warna biru utama */
  --color-orange: #F97316;         /* Warna orange CTA */
}
```

Ganti kode warna sesuai brand Anda!

---

## ❓ Masalah Umum

### Gambar Tidak Muncul?
✅ Pastikan nama file sama persis dengan yang di HTML  
✅ Cek huruf besar/kecil (case-sensitive)  
✅ File ada di folder yang benar

### WhatsApp Tidak Berfungsi?
✅ Cek format nomor: `628xxxxx` (tanpa + atau spasi)  
✅ Pastikan file `script.js` ter-load  
✅ Coba buka Console browser (F12) untuk cek error

### Mobile Menu Tidak Keluar?
✅ Pastikan JavaScript aktif di browser  
✅ File `script.js` sudah di-link di HTML  
✅ Cek Console browser (F12) untuk error

---

## 📱 Test Checklist

Sebelum launch, cek ini:

- [ ] Logo sudah diganti dengan logo brand Anda
- [ ] Nomor WhatsApp sudah benar
- [ ] Semua gambar sudah di-upload
- [ ] Konten teks sudah disesuaikan
- [ ] Link social media sudah benar
- [ ] Test di mobile phone
- [ ] Test di tablet
- [ ] Test klik semua button WhatsApp
- [ ] Test gallery lightbox
- [ ] Test smooth scroll

---

## 🚀 Siap Launch!

Setelah semua OK, landing page Anda siap digunakan!

**Need help?** Baca `README.md` untuk dokumentasi lengkap.

---

**Good luck! 🎉**
