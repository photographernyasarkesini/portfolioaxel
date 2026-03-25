# CLAUDE.md — Axel Ariel Portfolio Website

## Always Do First
- Invoke the frontend-design skill before writing
  any frontend code, every session, no exceptions.
- Baca CLAUDE.md ini sepenuhnya sebelum mulai kerja.
- Selalu cek design system sebelum menulis CSS apapun.

## Brand Identity
Nama      : Axel Ariel
Tagline   : "Frame by Frame"
Sub       : "Visual storyteller untuk brand dan momen 
             yang ingin diabadikan secara sinematik"
Profesi   : Videografer & Fotografer
Lokasi    : Batam, Indonesia
Instagram : @shotbyaxell
  URL     : https://www.instagram.com/shotbyaxell/
WA        : +62 855-4220-0957
Email     : axelarielmuhammad@gmail.com
LinkedIn  : axel-ariel-108bb017a

Personality:
- Tenang, elegan, penuh perasaan
- Seperti Wong Kar-wai — setiap frame punya makna
- Introvert yang berbicara lewat karyanya
- Creative partner, bukan sekadar vendor

Target klien:
- Brand fashion & lifestyle lokal
- Kafe & hospitality
- Event brand activation
- Prewedding & intimate wedding
- Startup yang mau terlihat premium

Bukan target:
- Wedding massal yang butuh fast autofocus
- Content TikTok yang hectic
- Project dokumentasi murah

## Design System

### Warna
--bg          : #F4EFE6  (krem film lama, warm)
--surface     : #EDE5D8  (krem gelap)
--surface-2   : #E3D9CA  (krem lebih gelap)
--text        : #1C1612  (coklat tua, bukan hitam pekat)
--text-2      : #8C7B6B  (coklat abu, muted)
--muted       : #B5A898  (sangat muted)
--accent      : #C17A3C  (oranye tembaga/amber)
--accent-bold : #8B3A1A  (merah bata, sparingly)
--border      : #DDD5C8
--dark        : #1A1410  (untuk footer dan elemen gelap)
--white       : #FDFAF6  (putih warm)

### Typography
Display : Cormorant Garamond
          style italic, sangat besar
          untuk headline yang dreamy dan emosional
          Google Fonts: Cormorant+Garamond:ital,wght@
          0,300;0,400;0,600;1,300;1,400;1,600

Heading : DM Serif Display
          bold, editorial, bersih
          Google Fonts: DM+Serif+Display:ital@0;1

Body    : Inter
          weight 300-500, line-height 1.8
          Google Fonts: Inter:wght@300;400;500

Label   : Space Mono
          uppercase kecil, untuk tag, label teknis,
          nomor, metadata
          Google Fonts: Space+Mono:wght@400;700

### Spacing & Shape
--radius    : 4px   (hampir tidak rounded, editorial)
--radius-md : 8px
--radius-lg : 16px
Filosofi spacing: generous whitespace, tidak crowded
Gunakan padding besar — konten harus bisa bernapas

### Tombol
Primary CTA:
- Background --dark (#1A1410)
- Teks --white
- Padding 14px 32px
- Border-radius 100px (pill)
- Hover: background --accent

Secondary:
- Background transparent
- Border 1px --border
- Teks --text
- Hover: border --accent, teks --accent

### Navbar
- Background --bg, border bawah 1px --border
- Logo kiri: "AXEL ARIEL" DM Serif Display
- Badge: "● Menerima Project" 
  (dot hijau #22c55e pulse, pill shape putih)
- Menu tengah atau kanan: Inter 400
- Tombol "Hire Me" pojok kanan: pill dark
- Sticky, blur backdrop saat scroll

### Footer
- Background --dark (#1A1410)
- Teks --white dan --muted (warm version)
- 3 kolom: brand · navigasi · sosmed
- Copyright bawah

## Visual Style

Mood: Warm film grain · Golden hour · 
      Quiet drama · Editorial stillness · 
      Sinematik Indonesia

Referensi:
- Gakuyen.com: navbar, badge, foto tumpukan rotasi,
  layout split hero
- Govinda Rumi: whitespace ekstrem, elemen melayang,
  quote besar, foto BW + berwarna dicampur
- Wong Kar-wai films: warm tones, slow moments,
  setiap frame punya perasaan

Elemen wajib di setiap halaman:
1. Label kecil Space Mono untuk metadata
   (tahun, lokasi, kategori)
2. Whitespace yang disengaja dan generous
3. Tipografi dengan size contrast ekstrem
   (sangat besar vs sangat kecil)
4. Minimal satu elemen melayang/asimetris
5. Accent --accent (#C17A3C) sparingly,
   hanya untuk highlight penting

Elemen dekoratif yang boleh dipakai:
- Garis tipis horizontal/vertikal sebagai separator
- Titik kecil --accent sebagai bullet dekoratif  
- Angka/counter besar muted sebagai background dekor
- Teks "FRAME BY FRAME" sangat kecil uppercase
  sebagai watermark atau elemen berulang
- Film grain texture sangat subtle (opacity 0.03)

Yang TIDAK boleh:
- Grid kotak yang terlalu rapi dan seragam
- Warna cerah neon atau terlalu saturated
- Animasi yang berlebihan atau mengganggu
- Elemen yang tidak punya tujuan
- Terlalu banyak warna sekaligus

## Bahasa
Mix Indonesia + Inggris:
- Konten utama, bio, deskripsi: Bahasa Indonesia
- Label kecil, tag, metadata: Bahasa Inggris
  (contoh: "WEDDING · 2024 · BATAM")
- Tombol CTA: Indonesia
  ("Lihat Karya", "Hubungi Saya", "Hire Me")
- Tagline & quote: bisa keduanya

## Project Structure
D:/Tes Website/
  index.html              — Homepage
  work.html               — Karya (tab Video & Foto)
  about.html              — Tentang Axel
  services.html           — Layanan
  contact.html            — Kontak
  video-wedding.html      — Kategori video wedding
  video-prewedding.html
  video-corporate.html
  video-event.html
  video-documentary.html
  video-socialmedia.html
  video-detail.html       — Detail video
  foto-wedding.html       — Kategori foto
  foto-prewedding.html
  foto-portrait.html
  foto-event.html
  foto-product.html
  foto-graduation.html
  admin/
    index.html            — Login (pw: axelariel2025)
    dashboard.html        — Dashboard
    videos.html           — Kelola video
    albums.html           — Kelola album foto
  data.json               — Source of truth konten
  style.css               — CSS global
  main.js                 — JS global
  serve.mjs               — Dev server port 3000
  screenshot.mjs          — Screenshot tool
  Asset/
    CV Axel 2025.jpg      — Foto Axel sementara
  assets/
    images/               — Foto portfolio
    videos/               — Video preview

## Data System
- Semua konten dari data.json via fetch()
- Tidak ada konten hardcode di HTML
- Admin panel: localhost:3000/admin

Kategori VIDEO:
wedding · prewedding · corporate · 
event · documentary · socialmedia

Kategori FOTO:
wedding · prewedding · portrait · 
event · product · graduation

## Local Server & Screenshot
- Server: node serve.mjs (port 3000)
- Jangan start instance kedua
- Puppeteer: C:/Users/nateh/AppData/Local/Temp/
  puppeteer-test/
- Screenshot: node screenshot.mjs http://localhost:3000
- Simpan di: ./temporary screenshots/
- Minimal 2 round perbandingan sebelum selesai

## Hard Rules
- Selalu ikuti design system di atas
- Jangan improvisasi warna di luar palette
- Jangan ubah struktur halaman yang tidak diminta
- Jangan pakai transition-all
- Jangan pakai warna default Tailwind
- Jangan stop setelah 1 screenshot pass
- Setiap elemen klikable harus ada hover & 
  focus state
- Mobile responsive selalu
- Whitespace adalah elemen desain, bukan ruang 
  yang perlu diisi