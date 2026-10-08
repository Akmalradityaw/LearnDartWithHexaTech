# LEARNDARTWITHEXATECH

**Platform pembelajaran bahasa pemrograman Dart modern yang dirancang khusus untuk pemula hingga menengah.**

Berawal dari sebuah inisiatif untuk memberikan kembali (giveback) kepada komunitas developer, platform ini mendobrak gaya dokumentasi kaku yang membosankan. Dibuat dengan gaya desain **Brutalist** yang khas, materi yang ada dirancang tidak hanya untuk dibaca, tapi **diketik langsung** melalui sistem *Anti-Copy* yang unik.

---

## 🌟 Fitur Utama

- **Sistem Anti-Copy & Anti-Select:** Memaksa proses belajar yang sesungguhnya. Seluruh *snippet* kode di platform ini diamankan sedemikian rupa agar pengguna tidak bisa sekadar *copy-paste*. Anda harus mengetiknya sendiri agar memori otot (muscle memory) Anda terbentuk!
- **Modul Berbasis Markdown:** Semua materi ditulis dalam format Markdown, sehingga sangat ringan, mudah dibaca, dan mudah diperbarui oleh kontributor.
- **Progress Tracking Lokal:** Melacak sejauh mana Anda telah belajar secara lokal tanpa perlu repot mendaftar akun atau *login*.
- **Desain Brutalist Modern:** Antarmuka dengan kontras tinggi, garis tegas, font tebal, dan tipografi mencolok untuk menghadirkan pengalaman belajar yang tak terlupakan.

---

## 🛠️ Tech Stack

Platform ini dibangun di atas teknologi pengembangan web modern yang cepat dan efisien:

- **Framework:** Next.js 16 (App Router, Turbopack, SSG)
- **UI & Styling:** React 19 + Tailwind CSS v4 (Vanilla CSS untuk styling inti)
- **Icons:** Lucide React
- **Markdown Parser:** `react-markdown` dilengkapi dengan `remark-gfm` (GitHub Flavored Markdown) dan `rehype-highlight` (Syntax Highlighting via Highlight.js)
- **Language:** TypeScript

---

## 🚀 Panduan Instalasi (Getting Started)

Untuk menjalankan platform ini di mesin lokal Anda, ikuti langkah-langkah berikut:

1. **Persyaratan:** Pastikan Anda telah menginstal **Node.js** (versi 18+) dan **npm**.
2. **Kloning Repositori:**
   *(Jika Anda telah mengunduh / melakukan kloning repositori ini, buka folder project melalui terminal)*
3. **Instalasi Dependensi:**
   ```bash
   npm install
   ```
4. **Jalankan Server Development:**
   ```bash
   npm run dev
   ```
5. Buka **[http://localhost:3000](http://localhost:3000)** di browser Anda.

---

## 📂 Struktur Direktori

Berikut adalah penjelasan struktur folder proyek untuk memudahkan navigasi kode:

```text
LearnDartWithHexaTech/
 ├── public/             # Aset statis seperti gambar dan logo
 ├── src/
 │    ├── app/           # Sistem Routing dari Next.js (App Router)
 │    ├── components/    # Komponen antarmuka React yang dapat digunakan ulang (Navbar, Sidebar, dll)
 │    ├── content/       # Kumpulan direktori materi
 │    │    └── modules/  # File-file Markdown (*.md) berisi materi pembelajaran
 │    └── data/          # File berisi data navigasi daftar isi materi (navigation.ts)
 └── globals.css         # Styling CSS utama dan konfigurasi anti-copy mutlak
```

---

## 💻 Panduan Menambah Materi

Bagi kontributor yang ingin menambahkan atau memperbarui materi:
1. Buat atau edit file dengan ekstensi `.md` di dalam folder `src/content/modules/`.
2. Format penulisan kode di dalam markdown akan secara otomatis ditangkap oleh sistem *CodeBlock* anti-copy.
3. Daftarkan file materi tersebut (slug-nya) di dalam file `src/data/navigation.ts` agar muncul di *Sidebar* daftar isi.

---

## 👥 Penulis & Pembuat

Proyek ini dibangun dan dikelola dengan bangga oleh:
- **Akmal Raditya Wijaya** (Lead Creator, Author & Software Engineer)
- **Muhammad Alya Nur Rohman** (Content Writer & Material Contributor)

*Didedikasikan sebesar-besarnya untuk masa depan edukasi developer di Indonesia.*
