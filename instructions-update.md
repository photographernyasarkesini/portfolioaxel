# Instruksi Update Website Axel Ariel
# PENTING: Jangan ubah struktur dan tampilan yang sudah ada.
# Hanya lakukan perubahan yang disebutkan di bawah ini saja.

## UPDATE 1 — HERO SECTION

Ganti foto hero dengan foto dari CV Axel yang sudah ada di project.
Cari file foto CV di folder project (kemungkinan nama filenya
CV_Axel_2025.jpg atau sejenisnya).

Layout hero tetap sama seperti sebelumnya.
Foto ditampilkan dengan efek tumpukan rotasi seperti Gakuyen:
- Foto utama sedikit rotate -3deg
- Tambah 1 elemen dekoratif di belakangnya rotate +4deg
  dengan background cream #e8e7e2
- Shadow subtle di bawah foto
- Border-radius 12px pada foto

## UPDATE 2 — BAGIAN VIDEO DI HALAMAN KARYA

Video card di halaman kategori video sekarang pakai
aspect ratio 16:9 landscape (bukan 1:1 square).

Ubah semua video card dari aspect-ratio 1/1 menjadi 16/9.
Grid video: 1 kolom penuh di mobile, 2 kolom di desktop.
Setiap card lebih lebar dari tingginya, cocok untuk video landscape.
Thumbnail YouTube tetap menggunakan format:
https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg

Hover preview YouTube iframe juga pakai aspect ratio 16:9.

## UPDATE 3 — ARTISTIC DAN PLAYFUL VIBES

Tambahkan elemen-elemen berikut ke seluruh website
tanpa mengubah struktur layout yang sudah ada:

WARNA ACCENT BARU:
Tambahkan satu warna accent hidup ke design system:
Warm terracotta: #E07B54
Gunakan warna ini untuk:
- Garis dekoratif kecil
- Dot/titik aksen
- Underline pada kata tertentu di heading
- Badge dan tag kategori
- Hover state beberapa elemen
Warna hitam dan cream tetap dominan,
terracotta hanya sebagai accent sparingly.

FONT MIXING:
Heading utama (nama, judul section besar):
  Gunakan Playfair Display dari Google Fonts
  style: italic untuk beberapa kata kunci
  weight: 400-700

Sub heading dan body tetap Inter seperti sekarang.

Contoh penerapan di hero:
"Mengabadikan momen," — Playfair Display italic
"menciptakan cerita." — Playfair Display bold

ANIMASI TEKS PLAYFUL:
Di hero section, judul masuk dengan animasi:
- Setiap kata muncul satu per satu
- Efek: slide up dari bawah + fade in
- Delay antar kata: 0.15 detik
- Durasi per kata: 0.6 detik
- Gunakan CSS animation, bukan library eksternal

ELEMEN DEKORATIF ARTISTIK:
Tambahkan elemen-elemen kecil ini:

1. Di hero section:
   - Garis diagonal tipis terracotta di pojok
   - 3-4 titik kecil tersebar (#E07B54, opacity 0.4)
   - Teks kecil vertikal di sisi kiri:
     "VIDEOGRAFER & FOTOGRAFER" 
     rotated -90deg, sangat kecil, warna muted

2. Di setiap section heading:
   - Garis pendek terracotta di bawah kata pertama
   - Bukan underline penuh, hanya 40px lebar

3. Di footer area atas:
   - Ornamen garis horizontal tipis dengan titik di tengah

4. Background texture sangat subtle:
   - Tambahkan noise texture CSS di background utama
   - Opacity sangat rendah: 0.02-0.03
   - Biar terasa seperti kertas/film grain

LAYOUT ASIMETRIS:
Di section "Karya Pilihan" di homepage:
- Grid tidak seragam
- Card pertama lebih besar (span 2 kolom)
- Card lainnya normal
- Sedikit offset vertikal antar card

Di section "Kata Mereka" (testimonials):
- Card tidak semua sejajar
- Card tengah sedikit lebih tinggi dari yang lain
- Efek seperti kartu yang ditumpuk tidak rata

## UPDATE 4 — INSTAGRAM LINK

Ganti semua link Instagram di seluruh website
dari @axelarielm menjadi @shotbyaxell

URL Instagram: https://www.instagram.com/shotbyaxell/

Update di:
- Navbar (jika ada link IG)
- Footer
- Contact page
- Semua tombol atau link yang mengarah ke Instagram

## UPDATE 5 — 3D GALLERY COMPONENT

Pasang komponen 3D gallery Three.js di halaman
foto-[kategori].html sebagai pengganti slideshow
di album cards.

Karena website ini vanilla HTML bukan React,
buat versi vanilla JavaScript dari konsep yang sama
menggunakan Three.js langsung (tanpa React):

Import Three.js dari CDN:
https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js

Implementasi di halaman kategori foto:
- Di atas grid album cards, tambahkan canvas 3D
- Tinggi canvas: 400px, full width
- Tampilkan foto-foto dari album di kategori tersebut
  sebagai texture pada plane 3D
- Foto melayang dari jauh ke dekat secara otomatis
- Foto sedikit miring-miring (rotasi acak kecil)
- Background canvas: transparent (terlihat background cream)
- Scroll atau hover untuk interact
- Setelah foto melewati kamera, loop kembali dari jauh
- Efek fade in saat foto datang dari jauh
- Efek fade out saat foto terlalu dekat

Load foto dari array album yang sudah ada di data.json.
Karena Three.js r128 tidak punya useTexture,
gunakan THREE.TextureLoader untuk load foto.

Jika WebGL tidak tersedia di browser,
sembunyikan canvas dan tampilkan grid foto biasa.

Tambahkan teks kecil di bawah canvas:
"Scroll untuk menjelajahi • Klik untuk membuka album"

Grid album cards tetap ada di bawah canvas 3D.

## INSTRUKSI PENTING

1. Jangan ubah struktur HTML yang sudah ada
2. Jangan ubah warna background, layout utama, 
   atau komponen yang tidak disebutkan di atas
3. Hanya tambah atau modifikasi yang disebutkan
4. Test semua perubahan tidak merusak halaman lain
5. Setelah selesai jalankan server dan screenshot:
   - index.html (hero dengan foto dan elemen dekoratif)
   - work.html tab foto (dengan 3D canvas)
   - foto-wedding.html (dengan 3D gallery)
   - video-wedding.html (dengan card landscape)
```

---

Setelah file disimpan, jalankan di Claude Code:
```
> Baca file instructions-update.md dan kerjakan 
  semua update yang disebutkan. Jangan ubah 
  tampilan yang tidak disebutkan. Kerjakan 
  satu per satu dan konfirmasi setiap update 
  sebelum lanjut ke berikutnya.