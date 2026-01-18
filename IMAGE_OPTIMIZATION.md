# 🚀 Cara Optimasi Gambar untuk Web

Gambar Anda loading lambat karena ukuran file terlalu besar. Ikuti langkah ini:

## 1. Compress Gambar Online (Gratis)

### Pilih Tool:
- **TinyPNG** - https://tinypng.com (Rekomendasi!)
- **Squoosh** - https://squoosh.app (by Google)
- **Compressor.io** - https://compressor.io

### Langkah:
1. Buka TinyPNG
2. Upload gambar Anda (drag & drop)
3. Download hasil compress (biasanya 70-80% lebih kecil!)
4. Replace gambar lama dengan yang baru

## 2. Target Ukuran File

| Jenis Gambar | Max Size | Rekomendasi |
|--------------|----------|-------------|
| Hero Image   | 300 KB   | 150-200 KB  |
| Product Image| 150 KB   | 80-120 KB   |
| Gallery Image| 150 KB   | 80-120 KB   |
| Logo         | 50 KB    | 20-30 KB    |

## 3. Resize Dimensi

Jangan gunakan gambar terlalu besar:

```
Hero: Max 1920x1080px
Products: Max 800x800px
Gallery: Max 1000x1000px
Logo: Max 500x500px
```

## 4. Format Gambar

**Rekomendasi:**
- `.jpg` / `.jpeg` → Untuk foto produk (kompresi tinggi)
- `.png` → Untuk logo (perlu transparansi)
- `.webp` → Format modern (70% lebih kecil, support browser modern)

## 5. Convert ke WebP (Optional tapi sangat direkomendasikan!)

**Online Tools:**
- https://cloudconvert.com/jpg-to-webp
- https://convertio.co/jpg-webp/

**Atau gunakan Squoosh:**
1. Upload gambar
2. Pilih format WebP
3. Adjust quality (75-85%)
4. Download

Lalu ganti di HTML:
```html
<!-- Dari: -->
<img src="images/products/product.jpg">

<!-- Jadi: -->
<img src="images/products/product.webp">
```

## 6. Batch Processing (Banyak Gambar)

Jika punya banyak gambar, gunakan:
- **XnConvert** (Desktop, gratis) - https://www.xnview.com/en/xnconvert/
- **ImageMagick** (Command line)

## ⚡ Quick Checklist:

- [ ] Compress semua gambar dengan TinyPNG
- [ ] Resize dimensi gambar sesuai kebutuhan
- [ ] Convert ke WebP jika memungkinkan
- [ ] Replace gambar lama dengan yang sudah dioptimasi
- [ ] Test loading speed lagi

## 📊 Expected Results:

**Sebelum:**
- Hero image: ~3MB → Loading 5-10 detik

**Sesudah:**
- Hero image: ~150KB → Loading <1 detik ⚡

---

**Tips Tambahan:**
- Upload gambar ke CDN (Cloudflare, Imgur) untuk loading lebih cepat
- Gunakan format WebP untuk hasil terbaik
- Always compress sebelum upload ke hosting!
