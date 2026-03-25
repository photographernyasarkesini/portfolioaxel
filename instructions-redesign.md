# INSTRUCTIONS REDESIGN — Axel Ariel Portfolio Website
> File ini dibuat untuk Claude Code. Jalankan semua instruksi ini secara berurutan.
> Project folder: D:\Tes Website

---

## 1. IDENTITAS PROYEK

**Nama:** Axel Ariel  
**Tagline:** Freelance Fotografer & Videografer *(BUKAN "Frame by Frame" — hapus dari semua file)*  
**Instagram:** @shotbyaxell  
**WhatsApp:** +62 812-6619-0123  
**Email:** axelarielmuhammad@gmail.com  
**Lokasi:** Batam, Kepulauan Riau, Indonesia  
**Server:** `node serve.mjs` di port 3000

---

## 2. DESIGN SYSTEM GLOBAL (`style.css`)

### CSS Variables
```css
:root {
  /* WARNA */
  --bg:           #F4EFE6;   /* krem warm — background halaman terang */
  --bg-alt:       #EDE5D8;   /* krem lebih gelap — surface alt */
  --bg-dark:      #0D0805;   /* gelap utama — hero, homepage */
  --surface:      #FDFAF6;   /* putih krem — card, form */
  --text:         #1C1612;   /* coklat tua — teks utama */
  --text-muted:   #8C7B6B;   /* coklat muda — teks sekunder */
  --accent:       #C17A3C;   /* amber/tembaga — highlight, CTA */
  --footer-bg:    #1A1410;   /* gelap footer */

  /* FONT */
  --font-display: 'DM Serif Display', serif;
  --font-body:    'Inter', sans-serif;
  --font-mono:    'Space Mono', monospace;
  --font-quote:   'Cormorant Garamond', serif;
}
```

### Google Fonts (load di semua halaman)
```html
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Cormorant+Garamond:ital,wght@1,300;1,400&family=Inter:wght@300;400&family=Space+Mono&display=swap" rel="stylesheet">
```

### Prinsip Typography
- **Judul besar:** DM Serif Display, italic untuk bagian aksen (warna accent)
- **Body:** Inter weight 300–400
- **Label/meta:** Space Mono uppercase, letter-spacing besar
- **Quote:** Cormorant Garamond italic

---

## 3. STRUKTUR DATA (`data.json`)

```json
{
  "site": {
    "name": "Axel Ariel",
    "tagline": "Freelance Fotografer & Videografer",
    "bio": "Videografer dan fotografer berbasis di Batam. Mengabadikan momen terbaik dengan sentuhan sinematik yang bercerita.",
    "whatsapp": "+6281266190123",
    "email": "axelarielmuhammad@gmail.com",
    "instagram": "@shotbyaxell",
    "location": "Batam, Indonesia",
    "jam_kerja": "Senin–Sabtu, 09.00–21.00 WIB"
  },
  "videos": [
    {
      "id": "rizky-dira-wedding",
      "title": "Rizky & Dira — Wedding Cinematic",
      "category": "wedding",
      "youtube_id": "YOUTUBE_ID_DI_SINI",
      "thumbnail": "",
      "year": "2024",
      "location": "Batam",
      "duration": "4:32",
      "featured": true,
      "description": "Pernikahan Rizky & Dira diabadikan dengan pendekatan sinematik yang natural.",
      "tools": ["Sony A7SII", "DaVinci Resolve", "Premiere Pro", "Gimbal"]
    }
  ],
  "albums": [
    {
      "id": "rizky-dira-wedding-foto",
      "title": "Rizky & Dira — Wedding Day",
      "category": "wedding",
      "year": "2024",
      "location": "Batam",
      "client": "Rizky & Dira",
      "featured": true,
      "cover": "assets/images/albums/rizky-dira/cover.jpg",
      "photos": [
        "assets/images/albums/rizky-dira/01.jpg",
        "assets/images/albums/rizky-dira/02.jpg"
      ],
      "description": "Dokumentasi pernikahan penuh kebahagiaan di Batam."
    }
  ]
}
```

**Kategori video:** wedding, prewedding, corporate, event, documentary, socialmedia  
**Kategori foto:** wedding, prewedding, portrait, event, product, graduation

---

## 4. NAVBAR GLOBAL (semua halaman)

### Struktur
```
[Logo kiri] ........... [Menu tengah] ........... [Hire Me kanan]
```

### Spec
- **Logo kiri:** "Axel Ariel" (DM Serif Display 18px) + "FREELANCE FOTOGRAFER & VIDEOGRAFER" (Space Mono 7px, muted) + badge hijau "● MENERIMA PROJECT"
- **Menu tengah:** Karya · Tentang · Layanan · Kontak — Inter 300, underline hover (accent)
- **Kanan:** tombol "HIRE ME" outline amber, border-radius 100px
- **Behavior:** transparan di atas hero, solid blur (`rgba(13,8,5,0.92)` + `backdrop-filter: blur(12px)`) saat scroll
- **Active state:** underline accent di menu item yang sesuai halaman

---

## 5. FOOTER GLOBAL (semua halaman)

### Warna: `#1A1410` (gelap)

### Struktur
1. **Mini CTA box** — "Punya project yang ingin diceritakan?" + tombol "CHAT DI WHATSAPP →"
2. **4 kolom:**
   - Brand: logo + tagline italic + bio singkat + watermark "AA"
   - Navigasi: Karya, Tentang, Layanan, Kontak
   - Sosial media: IG @shotbyaxell, YT, TikTok, LinkedIn
   - Kontak: WA, email, lokasi, jam kerja
3. **Bottom:** copyright + "Batam, Indonesia"

---

## 6. HALAMAN: `index.html` (Homepage)

### Section 1 — Hero (Three.js 3D Gallery)
- **Phase 1:** Layar gelap kosong, hint "SCROLL" di bawah
- **Phase 2:** Scroll 15% → 20 foto melayang masuk dari kiri dan kanan ke tengah (2 baris berlawanan arah), gallery fade in
- **Phase 3:** Scroll 35% → nama "Axel Ariel" + tagline muncul di tengah, gallery terus bergerak
- **Phase 4:** Scroll 55% → gallery berhenti total (frozen)
- **Phase 5:** Progress bar muncul, scroll untuk isi
- **Phase 6:** Progress 100% → snap ke section bawah

**Teks Hero:**
- Label: `VIDEOGRAFER & FOTOGRAFER · BATAM` (Space Mono)
- Nama: `Axel Ariel` (DM Serif Display 80px)
- Sub: `Freelance Fotografer & Videografer` (Cormorant Garamond italic)
- Tombol: "Lihat Karya" (amber solid) + "Hire Me" (outline)

**Navbar:** badge "● MENERIMA PROJECT" (green pulse)

### Section 2 — Split Ticker
Dua marquee berlawanan arah, background `#110A05`:
- **Baris atas (→ kanan):** WEDDING · EVENT · BRAND · DOCUMENTARY · PORTRAIT · PREWEDDING · FRAME BY FRAME
- **Baris bawah (← kiri):** angka: 47+ WEDDING FILMS · 500K+ VIRAL VIEWS · 5+ TAHUN · 8K+ FOLLOWERS · 50+ BRAND VIDEOS

### Section 3 — Karya Pilihan (Staggered Layout)
Background: `#0D0805`

**VIDEO sub-section:**
- Layout: 1 card besar kiri (span lebih lebar) + 2 card kecil kanan (stacked)
- Rasio: 16:9
- Hover: play button muncul

**FOTO sub-section:**
- Layout: 3 card sejajar, tinggi berbeda (masonry feel)
- Hover: "Lihat Album" pill muncul

**Tombol bawah:** "LIHAT SEMUA KARYA →" outline amber, center

### Section 4 — Testimonial
- 3 card offset vertikal (card ke-2 turun 24px, card ke-3 naik 12px)
- Background card: `#110A05`
- Quote mark besar Cormorant Garamond, teks italic
- Nama + role di bawah dengan divider

### Section 5 — Services Preview (Grid 2x2)
- Background: `#0A0603`
- Nomor dekoratif besar (Cormorant 100px, opacity 5%) di background setiap card
- Icon box border amber
- List layanan kecil + "TANYA HARGA →" arrow hover

### Section 6 — Alur Kerja
- 4 langkah horizontal
- Garis connector antar lingkaran
- Nomor italic Cormorant di lingkaran

### Section 7 — CTA
- Background gelap + radial glow amber di center
- Tombol: "Chat di WhatsApp" (amber solid) + "Lihat Layanan" (outline putih)

---

## 7. HALAMAN: `work.html`

### Hero
- Background: `#0D0805`, tinggi 320px
- Watermark "KARYA" sangat besar di background
- Judul: "Karya & Cerita" (DM Serif Display, italic accent)

### Strip Transisi
- Gradient 3px: `#0D0805` → `#C17A3C` → `#F4EFE6`

### Konten (background: `#F4EFE6`)

**VIDEO section:**
- 6 card kategori, rasio 16:9, 3 kolom
- Klik → ke `video-[kategori].html`
- Hover: nama melebar pelan, panah muncul

**FOTO section:**
- Background: `#EDE5D8`
- 6 card kategori, rasio 3:4, 3 kolom
- Klik → ke `foto-[kategori].html`

---

## 8. HALAMAN: `video-[kategori].html` (6 file)

*wedding, prewedding, corporate, event, documentary, socialmedia*

### Spec
- **Tidak ada hero** — langsung konten, background `#F4EFE6`
- Breadcrumb: Karya / Video / [Kategori]
- Page header: judul + count + sort dropdown

### Filter Kategori — Segmented Control
```css
/* Opsi 3: background amber subtle, active amber solid */
.seg-wrap {
  background: rgba(193,122,60,0.1);
  border: 1px solid rgba(193,122,60,0.2);
  border-radius: 5px;
  padding: 3px;
}
.seg-btn.active {
  background: #C17A3C;
  color: #1A0F08;
}
```
- Klik tab → filter dengan fade animation
- Semua tab saling terhubung (klik di halaman mana pun bisa pindah kategori)

### Grid Video
- 3 kolom, rasio 16:9
- Hover: play button + overlay subtle
- Klik → `video-detail.html?id=[video-id]`

---

## 9. HALAMAN: `video-detail.html`

### Spec
- Background: `#F4EFE6`
- Breadcrumb: Karya / Video / [Kategori] / [Judul]
- Judul besar + meta (tahun, lokasi, durasi, kategori)
- YouTube embed 16:9 — placeholder gelap dengan play button, klik → embed muncul
- Layout 2 kolom: deskripsi kiri + info box kanan (klien, tahun, lokasi, durasi, format, tools)
- CTA dark box: "Suka hasilnya? Chat di WhatsApp"
- Prev/Next navigation cards

---

## 10. HALAMAN: `foto-[kategori].html` (6 file)

*wedding, prewedding, portrait, event, product, graduation*

### Spec
- Tidak ada hero, background `#F4EFE6`
- Breadcrumb + page header
- Segmented filter (sama dengan video)
- Masonry 3 kolom — tinggi setiap card mengikuti rasio foto asli
- Hover: "LIHAT ALBUM →" pill muncul
- Klik → buka halaman detail album `foto-detail.html?id=[album-id]`

---

## 11. HALAMAN: `foto-detail.html`

### Spec
- Background: `#F4EFE6`
- Breadcrumb: Karya / Foto / [Kategori] / [Judul Album]
- Header: judul + meta (tahun, lokasi, klien, jumlah foto) + tombol WA kanan
- Masonry 3 kolom — semua foto album
- Hover setiap foto: zoom icon muncul + nomor foto
- Klik foto → **Lightbox:**
  - Full screen background `rgba(5,2,1,0.97)`
  - Navigasi prev/next (tombol + keyboard arrow)
  - Dots navigator di bawah (klik untuk lompat)
  - Counter "FOTO X / Y"
  - Tutup dengan ESC atau tombol ✕
- Prev/Next album navigation di bawah

---

## 12. HALAMAN: `about.html`

### Hero
- Background: `#0D0805`, tinggi 340px
- Foto Axel di kanan (file: `Asset/CV Axel 2025.jpg`)
- Judul kiri: "Saya Axel, Visual Storyteller"

### Konten (background: `#F4EFE6`)

1. **Bio** — grid 2 kolom: 3 paragraf kiri + quote italic kanan + skills badges
2. **Skills badges:** Premiere Pro, DaVinci Resolve, Lightroom, After Effects, CapCut, Photoshop, Sony A7SII, Drone & Gimbal, Color Grading, Audio Mixing
3. **Timeline pengalaman:**
   - 2024–2025: PT. Kinema Systrans Multimedia — Photo & Video Editor
   - 2023–2024: PT. SoCreative Mediaworks — Social Media Specialist + Videografer
   - 2022: PT. Visi Jadi Aksi (Selaksa) — Videographer + Video Editor
   - 2020–2021: Oneclick.id Studio — Wedding Cinematic Videographer
   - 2019–2020: Darunnajah Production House — Videographer + Video Editor
4. **Sertifikasi** (4 card):
   - 2019: Fotografi Dasar — Darwis Triadi School of Photography
   - 2020: Content Creator — Nusa Talks
   - 2021: Photopreneur — PT. File Studio Indonesia
   - 2024: Divisi Terfavorit — Infinite Learning Awards
5. **FAQ accordion** (5 item)
6. **CTA dark box** di bawah

---

## 13. HALAMAN: `services.html`

### Hero
- Background: `#0D0805`, tinggi 280px
- Watermark "LAYANAN" di background
- Judul: "Layanan & Kolaborasi"

### Konten (background: `#F4EFE6`)

1. **Intro** — 2 kolom: judul kiri + deskripsi kanan
2. **Grid 2x2** — 4 layanan:
   - Videografi Wedding
   - Video Korporat & Brand
   - Fotografi (wedding, prewedding, portrait, event, product, graduation)
   - Konten Media Sosial (TikTok, Reels, Shorts)
   - Setiap card: icon box + nomor dekoratif besar + list include + "TANYA HARGA →"
3. **Pricing note** — quote italic + tombol WA
4. **Alur kerja** — 4 langkah horizontal

---

## 14. HALAMAN: `contact.html`

### Hero
- Background: `#0D0805`, tinggi 260px
- Judul: "Ayo Ngobrol Tentang Projectmu"

### Konten (background: `#F4EFE6`)

**Layout 2 kolom:**
- **Kiri — Info kontak:**
  - WA: +62 812-6619-0123
  - Email: axelarielmuhammad@gmail.com
  - Lokasi: Batam, Kepulauan Riau, Indonesia
  - Availability box: "Senin – Sabtu · 09.00 – 21.00 WIB" + "Tersedia untuk project di seluruh Indonesia"
  - Tombol WA (background gelap, hover amber)

- **Kanan — Form:**
  - Nama Lengkap
  - Email / WhatsApp
  - Jenis Project (dropdown: Videografi Wedding, Video Korporat/Brand, Fotografi, Konten Media Sosial, Dokumenter, Lainnya)
  - Estimasi Tanggal
  - Ceritakan Projectmu (textarea)
  - **Tombol "KIRIM PESAN →"** — background `#C17A3C`, color `#1A0F08` *(BUKAN putih)*

**Instagram Section:**
- Judul: "Temukan di @shotbyaxell"
- SnapWidget embed — 6 foto grid dari @shotbyaxell
- Tombol "IKUTI @SHOTBYAXELL"
- Note setup SnapWidget di bawah grid

---

## 15. HALAMAN: `admin/index.html` (Login)

### Layout Split Screen
- **Kiri (50%):** background `#0D0805`
  - Logo "Axel Ariel" + "ADMIN PANEL"
  - Quote: *"Setiap frame yang kamu tambahkan adalah cerita yang akan dikenang."*
  - Watermark "AA" besar di background
- **Kanan (50%):** background `#F4EFE6`
  - Label "ADMIN PANEL"
  - Judul "Selamat Datang"
  - Username: `axelariel` (prefilled, readonly)
  - Password: input + toggle show/hide
  - Tombol "MASUK →" (gelap, hover amber)
  - Error state bila password salah
  - Password: `axelariel2025`

---

## 16. HALAMAN: `admin/dashboard.html`

### Layout
- **Sidebar kiri** (200px, background `#1C1612`):
  - Logo + "ADMIN PANEL"
  - Badge "● LOGGED IN"
  - Menu: Dashboard, Kelola Video, Kelola Album, Pengaturan
  - Tombol "LIHAT WEBSITE →"
  - Tombol "KELUAR"

- **Main content (background `#F8F5F0`):**
  - 4 stat cards: Total Video, Total Album, Kategori Video, Kategori Foto
  - Video terbaru (3 item dengan thumbnail)
  - Aksi cepat: Tambah Video, Tambah Album, Pengaturan

---

## 17. HALAMAN: `admin/videos.html`

- Form tambah video (toggle show/hide):
  - Judul, Kategori, YouTube ID, Preview thumbnail, Tahun, Lokasi, Durasi
  - Checkbox "Tampil di Beranda"
  - Deskripsi
- Search box
- Tabel: Judul (+ thumbnail kecil), Kategori, Tahun, Featured badge, tombol Edit/Hapus

---

## 18. HALAMAN: `admin/albums.html`

- Form tambah album:
  - Judul, Kategori, Tahun, Lokasi, Nama Klien
  - Checkbox "Tampil di Beranda"
  - Deskripsi
  - Drag & drop upload foto (foto pertama = cover otomatis)
- Search box
- Tabel: Judul (+ thumbnail), Kategori, Tahun, Jumlah Foto, Featured badge, tombol Edit/Hapus

---

## 19. HALAMAN: `admin/settings.html`

3 section:
1. **Info Website:** Nama, Tagline, Bio singkat
2. **Info Kontak:** WhatsApp, Email, Instagram, Lokasi
3. **Ganti Password:** Password lama + password baru

---

## 20. `main.js` — BEHAVIOR GLOBAL

```javascript
// 1. Navbar scroll behavior
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('solid');
  } else {
    navbar.classList.remove('solid');
  }
});

// 2. Load data dari data.json
async function loadData() {
  const res = await fetch('/data.json');
  return await res.json();
}

// 3. Segmented filter dengan fade animation
function initSegmentedFilter(items, cards) {
  items.forEach(btn => {
    btn.addEventListener('click', () => {
      items.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      cards.forEach(card => {
        if (cat === 'semua' || card.dataset.category === cat) {
          card.style.opacity = '0';
          card.style.display = 'block';
          setTimeout(() => card.style.opacity = '1', 50);
        } else {
          card.style.opacity = '0';
          setTimeout(() => card.style.display = 'none', 300);
        }
      });
    });
  });
}
```

---

## 21. CATATAN PENTING

### Yang harus dilakukan setelah install:
1. **Foto Axel** — sudah ada di `Asset/CV Axel 2025.jpg` → gunakan untuk about page
2. **YouTube ID** — isi di `data.json` setelah upload video ke YouTube (unlisted)
3. **Foto album** — simpan di `assets/images/albums/[nama-album]/`
4. **SnapWidget** — daftar di snapwidget.com, connect @shotbyaxell, paste embed code ke contact.html
5. **Domain** — beli axelariel.id di Niagahoster
6. **Deploy** — drag & drop folder ke Netlify

### Yang TIDAK boleh dilakukan:
- Jangan gunakan "Frame by Frame" sebagai tagline — sudah diganti "Freelance Fotografer & Videografer"
- Jangan gunakan "Dipercaya Oleh" atau logo brand lain
- Jangan tulis "biasanya balas dalam 1 jam" di halaman manapun
- Tombol "Kirim Pesan" di contact.html HARUS amber `#C17A3C`, bukan putih

### Warna segmented filter:
```css
/* GUNAKAN OPSI 3 — amber subtle background, amber solid active */
.seg-wrap {
  background: rgba(193,122,60,0.1);
  border: 1px solid rgba(193,122,60,0.2);
  border-radius: 5px;
  padding: 3px;
  gap: 2px;
}
.seg-btn {
  background: transparent;
  color: rgba(139,58,26,0.4);
}
.seg-btn.active {
  background: #C17A3C;
  color: #1A0F08;
}
```

---

*File ini dibuat berdasarkan sesi desain lengkap pada Maret 2026.*  
*Semua keputusan visual sudah dipreview dan disetujui oleh Axel Ariel.*
