# Instruksi Update Website Axel Ariel

Kerjakan semua tahap berikut secara berurutan.

# DESIGN SYSTEM — GAKUYEN INSPIRED

Background utama : #f0efeb  (off-white/cream hangat)
Background surface: #e8e7e2 (cream lebih gelap untuk card)
Background navbar : #f0efeb dengan border bawah tipis
Teks heading     : #2d2d2d  (hitam soft)
Teks body        : #666666  (abu medium)
Teks muted       : #999999  (abu terang)
Accent/CTA       : #1a1a1a  (hitam pekat)
Border           : #e0deda  (cream gelap)
Dot available    : #22c55e  (hijau)
Bayangan         : 0 2px 12px rgba(0,0,0,0.08)

HAPUS semua warna gold #C9A84C
Ganti semua tombol gold menjadi hitam #1a1a1a
dengan teks putih #ffffff

Typography:
Heading : Inter atau Plus Jakarta Sans
          weight 300-400 (tipis tapi besar)
          BUKAN bold/heavy
Body    : Inter weight 400
          ukuran 15-16px, line-height 1.7

Tombol CTA style:
- Pill shape (border-radius 100px)
- Background hitam #1a1a1a
- Teks putih
- Padding 14px 28px

Badge "Menerima Project":
- Background putih
- Border tipis #e0deda
- Border-radius pill
- Dot hijau #22c55e animate pulse
- Teks #2d2d2d ukuran kecil

Foto hero:
- Tampilkan dengan efek tumpukan/rotasi
- Foto pertama rotate -3deg
- Foto kedua rotate +2deg
- Shadow subtle di bawah foto
- Border-radius 12px

## TAHAP 1 — Update data.json

Buat atau update file data.json dengan struktur berikut.
Bagian videos berisi array video dengan field:
id, judul, kategori, youtube_id, youtube_preview_id, 
tahun, lokasi, durasi, deskripsi, featured.

Kategori video yang tersedia:
wedding, prewedding, corporate, event, documentary, socialmedia

Bagian albums berisi array album foto dengan field:
id, judul, kategori, tahun, lokasi, klien, deskripsi,
cover, featured, dan array foto yang masing-masing punya
field file dan caption.

Kategori foto yang tersedia:
wedding, prewedding, portrait, event, product, graduation

Isi dengan data placeholder untuk masing-masing 
1 item per kategori dulu. YouTube ID pakai placeholder
teks YOUTUBE_ID_DISINI. File foto pakai path
assets/images/photos/nama-file.jpg

## TAHAP 2 — Update work.html

Ubah work.html menjadi halaman dengan 2 tab utama
yaitu VIDEO dan FOTO.

Jika tab VIDEO aktif:
Tampilkan 6 card kategori dalam grid.
Kategori: Wedding, Prewedding, Corporate, 
Event dan Aftermovie, Documentary, Social Media.
Setiap card klik navigasi ke video-wedding.html
atau video-prewedding.html dst.

Jika tab FOTO aktif:
Tampilkan 6 card kategori dalam grid.
Kategori: Wedding, Prewedding, Portrait, 
Event, Product, Graduation.
Setiap card klik navigasi ke foto-wedding.html dst.

Semua card punya judul kategori, jumlah konten,
dan background gelap dengan hover effect.

## TAHAP 3 — Buat halaman kategori video

Buat 6 file HTML untuk kategori video:
video-wedding.html
video-prewedding.html
video-corporate.html
video-event.html
video-documentary.html
video-socialmedia.html

Semua halaman pakai template yang sama.
Konten diambil dari data.json berdasarkan kategori.

Struktur tiap halaman:
- Breadcrumb: Karya lalu Video lalu Nama Kategori
- Judul kategori besar
- Grid 2 kolom berisi video cards

Setiap video card berisi:
- Thumbnail dari YouTube menggunakan format URL
  https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg
- Judul video
- Durasi di pojok thumbnail
- Tahun dan lokasi

Hover behavior pada card:
- Thumbnail hilang dengan fade out
- YouTube iframe muncul dengan autoplay muted
  gunakan parameter autoplay=1 mute=1 controls=0
  start=10 end=25 rel=0
- Saat mouse keluar WAJIB remove iframe dari DOM
  agar tidak ada video jalan di background

Klik card navigasi ke:
video-detail.html dengan URL parameter id
contoh: video-detail.html?id=v001

## TAHAP 4 — Buat halaman detail video

Buat 1 file video-detail.html yang membaca
URL parameter id lalu fetch data.json untuk
menampilkan data video yang sesuai.

Struktur halaman:
1. Breadcrumb navigasi
2. Judul video besar dengan font Cormorant Garamond
3. Info: tahun, lokasi, durasi
4. YouTube embed full width 16:9 responsive
   gunakan format https://www.youtube.com/embed/VIDEO_ID
   dengan parameter rel=0 modestbranding=1
5. Deskripsi project dalam paragraf
6. Navigasi ke video sebelumnya dan berikutnya
   dalam kategori yang sama
7. CTA dengan tombol WhatsApp

## TAHAP 5 — Buat halaman kategori foto

Buat 6 file HTML untuk kategori foto:
foto-wedding.html
foto-prewedding.html
foto-portrait.html
foto-event.html
foto-product.html
foto-graduation.html

Semua halaman pakai template yang sama.
Konten diambil dari data.json berdasarkan kategori.

Struktur tiap halaman:
- Breadcrumb: Karya lalu Foto lalu Nama Kategori
- Judul kategori besar
- Grid 3 kolom berisi album cards

Setiap album card berisi:
- Kotak persegi aspect ratio 1 banding 1
- Slideshow otomatis di dalam kotak
  Foto berganti tiap 2.5 detik
  Transisi crossfade smooth 0.5 detik
  Loop terus menerus
  Preload foto saat card masuk viewport
- Judul album di bawah
- Tahun dan jumlah foto
- Hover: border gold tipis muncul

Klik album card buka MODAL di halaman yang sama.

Struktur modal:
- Tombol tutup di pojok kanan atas
- Judul album dan tahun di header
- Foto besar di bagian atas modal
- Deskripsi album, klien, lokasi di bawah foto besar
- Grid semua foto kecil statis di bagian bawah
- Klik foto kecil maka foto besar update dengan crossfade
- Tombol WhatsApp di paling bawah modal

Behavior modal:
- Background overlay hitam 80 persen opacity
- Modal putih bersih dengan rounded corners
- Animasi muncul scale up dari 0.9 ditambah fade in
- Tutup dengan klik tombol X atau klik overlay
  atau tekan tombol Escape
- Slideshow berhenti saat modal terbuka
- Di mobile modal tampil fullscreen

## TAHAP 6 — Update admin panel

Update file admin/photos.html menjadi admin/albums.html
untuk kelola album bukan foto individual.

Form tambah album baru:
- Judul album
- Kategori dengan dropdown 6 pilihan foto
- Tahun
- Lokasi
- Nama klien
- Deskripsi
- Upload multiple foto sekaligus dengan drag and drop
- Foto pertama otomatis jadi cover album
- Setiap foto ada field caption
- Toggle featured

Update admin/videos.html tambah field baru:
- youtube_preview_id untuk video hover preview
- durasi dengan format contoh 3:45

## INSTRUKSI TEKNIS

Semua halaman baca konten dari data.json via fetch.
Tidak ada konten yang hardcode di HTML.
Semua file pakai navbar dan footer yang sama.
Semua halaman mobile responsive.
Hover YouTube preview wajib remove iframe saat mouse keluar.
Slideshow album pakai CSS transition bukan library eksternal.

Setelah semua selesai jalankan server dan screenshot:
- work.html tab video
- work.html tab foto
- video-wedding.html
- video-detail.html
- foto-wedding.html
- admin/albums.html
```

---

Setelah file disimpan, jalankan di Claude Code:
```
> Baca file instructions.md dan kerjakan semua tahap 
  yang ada di dalamnya secara berurutan