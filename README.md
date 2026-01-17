# 🎨 Alwage Appareal Landing Page

Landing page premium untuk brand custom jersey **Alwage Appareal** dengan design minimalist terinspirasi dari Adidas.

## ✨ Features

- ✅ **Adidas-Inspired Design** - Clean, minimalist, dan professional
- ✅ **60-30-10 Color Rule** - Blue dominant dengan orange accent
- ✅ **Fully Responsive** - Perfect di mobile, tablet, dan desktop
- ✅ **WhatsApp Integration** - Multiple CTA points + floating button
- ✅ **Smooth Animations** - Fade-in, hover effects, scroll reveals
- ✅ **SEO Optimized** - Complete meta tags & semantic HTML
- ✅ **Lightbox Gallery** - Interactive portfolio showcase
- ✅ **Performance Optimized** - Lazy loading & debounced scroll

## 📁 File Structure

```
landing/
├── index.html          # Main HTML file
├── styles.css          # CSS styling with design system
├── script.js           # JavaScript for interactivity
├── images/             # Image assets folder
│   ├── logo/          # Logo files
│   ├── hero/          # Hero section images
│   ├── products/      # Product images
│   ├── gallery/       # Portfolio gallery images
│   └── icons/         # Custom icons (if any)
└── README.md          # This file
```

## 🚀 Quick Start

### 1. Upload Images

Masukkan gambar-gambar Anda ke folder yang sesuai:

- **Logo**: `images/logo/logo-alwage.png`
- **Hero Image**: `images/hero/hero-jersey.jpg`
- **About Image**: `images/hero/about-image.jpg`
- **Products**: 
  - `images/products/jersey-futsal.jpg`
  - `images/products/jersey-sepakbola.jpg`
  - `images/products/jersey-basket.jpg`
  - `images/products/jersey-komunitas.jpg`
- **Gallery**: `images/gallery/gallery-1.jpg` sampai `gallery-6.jpg`
- **Testimonials**: `images/gallery/avatar-1.jpg` sampai `avatar-3.jpg`

### 2. Configure WhatsApp Number

Edit file `script.js` di line 2-3:

```javascript
const WHATSAPP_NUMBER = '6281234567890'; // ⚠️ GANTI dengan nomor WA Anda
const WHATSAPP_MESSAGE = 'Halo Alwage Appareal, saya tertarik dengan custom jersey. Bisa bantu saya?';
```

**Format nomor:**
- Gunakan kode negara tanpa +
- Contoh: `6281234567890` (Indonesia)
- Jangan gunakan: `081234567890` atau `+6281234567890`

### 3. Customize Content

Edit konten di `index.html` sesuai kebutuhan:

- **Line 8**: Ganti meta description
- **Line 73-82**: Update navigation links (jika perlu)
- **Line 95-98**: Edit hero title & description
- **Line 128-148**: Update about section text
- **Line 153-158**: Edit statistics numbers
- **Line 556-572**: Update kontak di footer

### 4. Open in Browser

#### Via XAMPP:
```
http://localhost/AlwageAppareal/landing/
```

#### Via File Explorer:
Double-click `index.html`

## 🎨 Color Scheme (60-30-10 Rule)

### 60% - Neutral Base
- White: `#FFFFFF`
- Light Gray: `#F8F9FA`

### 30% - Blue Brand
- Primary Blue: `#1E40AF`
- Deep Blue: `#1E3A8A`
- Medium Blue: `#3B82F6`
- Light Blue: `#DBEAFE`

### 10% - Accent
- Orange: `#F97316` (CTA)
- WhatsApp Green: `#25D366`

## 📱 Sections Overview

1. **Hero Section** - Full-width dengan dual CTAs
2. **About Section** - Brand story + statistics
3. **Products Section** - 4 product showcases
4. **Features Section** - 6 keunggulan brand
5. **Process Section** - 4-step order timeline
6. **Gallery Section** - Portfolio dengan lightbox
7. **Testimonials Section** - Customer reviews
8. **CTA Section** - Final WhatsApp call-to-action
9. **Footer** - Links, contact, social media

## 🔧 Customization Guide

### Change Brand Colors

Edit CSS variables di `styles.css` (line 5-25):

```css
:root {
  --color-primary-blue: #1E40AF;  /* Change this */
  --color-orange: #F97316;         /* Change this */
}
```

### Add Social Media Links

Edit footer di `index.html` (line 538-549):

```html
<div class="footer__social">
  <a href="https://instagram.com/alwageappareal" ...>
  <a href="https://facebook.com/alwageappareal" ...>
  <a href="https://tiktok.com/@alwageappareal" ...>
</div>
```

### Add More Products

Copy product card template di `index.html` (line 180-194) dan sesuaikan.

### Add More Gallery Images

Copy gallery item template di `index.html` (line 413-422) dan sesuaikan.

## ⚙️ JavaScript Features

### WhatsApp Integration
- 3 CTA buttons (Hero, Footer, Floating)
- Product-specific messages
- Customizable default message

### Scroll Effects
- Active navigation highlighting
- Scroll to top button
- Smooth scroll behavior
- Scroll reveal animations

### Gallery
- Click to enlarge images
- ESC key to close
- Click outside to close
- Prevent body scroll when open

### Mobile Menu
- Toggle hamburger menu
- Auto-close on link click
- Smooth animations

## 📊 Performance Tips

1. **Optimize Images**
   - Compress images (use TinyPNG or similar)
   - Recommended max size: 500KB per image
   - Use WebP format for better compression

2. **Lazy Loading**
   - Already implemented for better performance
   - Images load as user scrolls

3. **Caching**
   - Add .htaccess for browser caching (if needed)

## 🐛 Troubleshooting

### Images Not Showing
- Check file paths in HTML
- Ensure images are in correct folders
- Check file names (case-sensitive)

### WhatsApp Not Working
- Verify number format in `script.js`
- Must use country code (62 for Indonesia)
- No + or spaces in number

### Mobile Menu Not Working
- Check if script.js is loaded
- Open browser console for errors
- Ensure all JavaScript is at bottom of HTML

## 📝 SEO Checklist

- ✅ Title tag optimized
- ✅ Meta description added
- ✅ Open Graph tags for social sharing
- ✅ Semantic HTML5 structure
- ✅ Alt text for all images
- ✅ Heading hierarchy (H1, H2, H3)
- ✅ Fast loading time
- ✅ Mobile-friendly

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📞 Support & Contact

Untuk bantuan lebih lanjut, hubungi developer atau buka issue di repository.

## 📄 License

© 2024 Alwage Appareal. All rights reserved.

---

**Built with ❤️ using HTML, CSS, and Vanilla JavaScript**
