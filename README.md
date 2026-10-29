# LearnDartWithHexaTech

**Platform pembelajaran bahasa pemrograman Dart modern dari dasar hingga tingkat lanjut dengan pendekatan terstruktur, kurikulum bercabang, dan estetika Neobrutalisme.**

Inisiatif edukasi terbuka (*open-source*) oleh **Hexaverse Technology** untuk memberikan kembali (*give back*) kepada ekosistem developer Indonesia. Didesain untuk meruntuhkan dokumentasi kaku dan hambatan birokrasi, memungkinkan siapa saja belajar menulis kode Dart berkualitas tinggi secara langsung, tanpa login, dan 100% gratis.

---

## [ FITUR UTAMA ]

- **Akses Bebas & Zero Friction:** Belajar seketika tanpa perlu registrasi akun, verifikasi email, atau dinding berbayar (*paywall*).
- **Kurikulum Bercabang 3 Tingkatan:** 6 Modul Inti dan 26 Topik terstruktur dengan penugasan mandiri berjenjang (Tingkat Dasar, Terapan, Tantangan Kreatif) serta rubrik penilaian mandiri.
- **Playground Interaktif Hero:** Editor kode mandiri di beranda yang dapat diedit langsung dengan simulasi eksekusi terminal konsol Dart VM.
- **Template Kode Siap Eksekusi:** Setiap contoh kode dilengkapi dengan penanda nama berkas (`// File: ...`), fungsi `main()`, dan instruksi eksekusi terminal (`dart run ...`).
- **Pelacakan Progres Lokal:** Kemajuan belajar disimpan secara otomatis di *localStorage* browser tanpa pengumpulan data pribadi.
- **Identitas Brand HexaDart:** Dilengkapi sistem logo vektor orisinal yang menggabungkan geometri heksagon Hexaverse dan panah supersonik Dart.
- **Desain Neobrutalisme Responsif:** Kontras tinggi, tipografi JetBrains Mono & Inter, bingkai tegas berbayang tajam, serta ramah perangkat seluler (< 640px).

---

## [ SPESIFIKASI TEKNOLOGI ]

Dibangun di atas fondasi teknologi web modern berkinerja tinggi:

- **Framework:** Next.js 16.4.3 (App Router, Turbopack, Partial Prerendering)
- **UI Library:** React 19 (Server & Client Components)
- **Styling:** Tailwind CSS v4 & Neobrutalism Design System
- **Icons:** Lucide React (SVG murni, bebas emoji)
- **Markdown & Syntax Engine:** `react-markdown` v10, `remark-gfm` v4, `rehype-highlight` v7 (Highlight.js)
- **Language:** TypeScript 5 (Strict Mode)

---

## [ PANDUAN MEMULAI ]

### Prasyarat
- Node.js versi 18.18+ atau versi 20+
- npm (Node Package Manager)

### Instalasi Lokal
1. Kloning repositori proyek:
   ```bash
   git clone https://github.com/akmalraditya/LearnDartWithHexaTech.git
   cd LearnDartWithHexaTech
   ```
2. Pasang seluruh dependensi:
   ```bash
   npm install
   ```
3. Jalankan server pengembangan lokal:
   ```bash
   npm run dev
   ```
4. Buka peramban di [http://localhost:3000](http://localhost:3000).

### Build Produksi
Untuk menguji kompilasi produksi dan prerender statis:
```bash
npm run build
npm run start
```

---

## [ STRUKTUR DIREKTORI ]

```text
LearnDartWithHexaTech/
 ├── public/                 # Aset statis peramban
 ├── src/
 │    ├── app/               # Routing Next.js App Router (PPR)
 │    │    ├── about/        # Halaman Tentang & Tim Pengembang
 │    │    ├── learn/        # Halaman Belajar & Viewer Materi
 │    │    ├── icon.svg      # Favicon vektor kustom HexaDart
 │    │    ├── layout.tsx    # Root layout & konfigurasi font
 │    │    └── page.tsx      # Beranda & Interactive Hero Playground
 │    ├── components/
 │    │    ├── brand/        # Komponen logo orisinal (HexaDartLogo.tsx)
 │    │    ├── home/         # Komponen beranda (HeroCodeCard.tsx)
 │    │    ├── layout/       # Tata letak global (Navbar, Sidebar, Footer)
 │    │    └── learn/        # Viewer markdown materi & sub-cabang
 │    ├── content/
 │    │    └── modules/      # Modul materi Markdown (*.md) lengkap
 │    └── data/
 │         └── navigation.ts # Struktur navigasi silabus & sub-cabang
 ├── LICENSE                 # Lisensi open-source MIT
 ├── next.config.ts          # Konfigurasi Next.js 16.4.3 & Turbopack
 ├── package.json            # Daftar dependensi & scripts
 └── README.md               # Dokumentasi proyek
```

---

## [ PANDUAN KONTRIBUSI MATERI ]

Kontributor yang ingin menambahkan bab baru atau memperbarui studi kasus dapat mengikuti langkah berikut:
1. Buat atau perbarui berkas `.md` di dalam direktori `src/content/modules/`.
2. Format materi harus menyertakan:
   - Nama berkas panduan (`// File: nama_file.dart`)
   - Fungsi `main()` lengkap
   - Sub-judul ber-anchor tag (`## Judul Bab {#anchor-id}`)
   - Penugasan 3 level (Tingkat Dasar, Terapan, Tantangan Kreatif) beserta tabel rubrik penilaian.
3. Daftarkan slug materi baru di `src/data/navigation.ts` beserta sub-cabang (*branches*) agar otomatis muncul di Sidebar navigasi.

---

## [ TIM PENULIS & PENGEMBANG ]

Proyek ini dibangun, dikurasi, dan dikelola oleh:

- **Akmal Raditya Wijaya** — *Lead Creator, Author & Software Engineer*
  - Arsitektur sistem platform, implementasi Neobrutalisme, dan kurikulum Dart-Flutter.
  - Profil: [GitHub](https://github.com/akmalraditya) | [LinkedIn](https://linkedin.com/in/akmalraditya)
- **Muhammad Alya Nur Rohman** — *Curriculum Writer & Material Contributor*
  - Pengembangan pedagogi materi, struktur data, dan paradigma Object-Oriented Programming (OOP).
- **Nadia Saphira** — *UI/UX Designer & Visual Researcher*
  - Perancangan sistem antarmuka Neobrutalisme, arsitektur visual hierarki, dan riset aksesibilitas.
- **Dimas Pratama** — *Quality Assurance & Code Reviewer*
  - Pengujian integritas kode Dart, verifikasi linter, dan penjaminan kualitas studi kasus latihan.
- **Kevin Santoso** — *Technical Writer & Community Support*
  - Penulisan dokumentasi teknis, penyusunan glosarium istilah, dan dukungan komunitas pembelajar.

---

## [ LISENSI ]

Proyek ini dilisensikan di bawah lisensi terbuka **MIT License**. Lihat berkas [LICENSE](LICENSE) untuk ketentuan hukum selengkapnya.

Didedikasikan secara penuh untuk kemajuan edukasi talenta teknologi di Indonesia.
