# PROGRAM PERTAMA: ANATOMI MAIN() & PRINT()

Dalam dunia pemrograman, sudah menjadi tradisi sakral bagi setiap programmer untuk mengawali perjalanan belajarnya dengan program legendaris yang mencetak kalimat **"Hello, World!"** ke layar konsol. Tradisi ini pertama kali dipopulerkan oleh Brian Kernighan dalam buku panduan bahasa pemrograman B dan C di Bell Labs pada tahun 1970-an.

Di modul ini, kita tidak hanya akan mencetak teks sederhana, tetapi juga membedah anatomi kode Dart secara mendalam, memahami aturan tata kelola proyek, serta menyelesaikan rangkaian **tugas terstruktur** yang telah dikategorikan dengan jelas.

---

## 1. TATA KELOLA FOLDER & STANDAR PENAMAAN FILE

Sebagai calon pengembang profesional di **HexaTech**, kebiasaan menulis kode yang rapi harus dimulai dari manajemen file di komputer Anda.

### Aturan Baku Penamaan File di Dart (Style Guide Resmi Google)
* Gunakan format **`snake_case`**: Semua huruf wajib kecil (*lowercase*) dan kata dipisahkan dengan tanda garis bawah (*underscore* `_`).
* **Contoh Benar:** `hello_world.dart`, `biodata_mahasiswa.dart`, `kalkulator_mini.dart`
* **Contoh Salah:** `HelloWorld.dart` (CamelCase), `hello-world.dart` (kebab-case), `program pertama.dart` (mengandung spasi).

### Rekomendasi Struktur Folder Belajar
Buat satu folder kerja utama di komputer Anda, misalnya `belajar_dart_hexatech`. Di dalamnya, bagi materi ke dalam sub-folder bertahap:

```text
belajar_dart_hexatech/
 ├── 01_dasar/
 │    ├── 01_hello_world.dart
 │    ├── 02_escape_sequence.dart
 │    └── tugas/
 │         ├── tugas1_biodata.dart
 │         ├── tugas2_struk_belanja.dart
 │         └── tugas3_ascii_art.dart
 ├── 02_tipe_data/
 └── 03_percabangan/
```

> **Langkah Praktik:**  
> Buatlah folder `01_dasar` di komputer Anda, buka folder tersebut menggunakan VS Code (`File > Open Folder...`), lalu buat file baru bernama `hello_world.dart`.

---

## 2. ANATOMI PROGRAM DART: MEMBEDAH `main()` {#cabang-teori-main}

Ketiklah kode program pertama Anda di dalam file `hello_world.dart`:

```dart
// File: 01_dasar/01_hello_world.dart
void main() {
  print("Hello, World!");
  print("Selamat datang di kelas Dart HexaTech!");
}
```

Mari kita bedah setiap bagian dari kode di atas:

1. **`void` (Tipe Nilai Balik / Return Type):**
   Kata kunci ini memberitahu kompiler Dart bahwa fungsi `main` ini hanya bertugas menjalankan serangkaian instruksi dan **tidak menghasilkan nilai balik** (*return value*) ke sistem operasi setelah selesai dieksekusi.
2. **`main()` (Pintu Masuk Utama / Entry Point):**
   `main()` adalah fungsi paling penting dalam ekosistem Dart. Kapan pun program Dart dijalankan, mesin Dart VM akan mencari fungsi bernama `main()` sebagai titik awal eksekusi. Tanpa fungsi `main()`, program Dart tidak akan bisa berjalan.
   *(Tanda kurung `()` menunjukkan bahwa ini adalah sebuah fungsi)*.
3. **Kurung Kurawal `{ ... }` (Body / Blok Fungsi):**
   Semua baris kode instruksi yang ingin dieksekusi harus berada di antara kurung kurawal pembuka `{` dan kurung kurawal penutup `}`.
4. **`print(...)` (Fungsi Output Konsol):**
   Fungsi bawaan (*built-in function*) dari pustaka inti Dart (`dart:core`) yang bertugas mencetak teks atau nilai yang ada di dalam tanda kurungnya ke layar terminal atau konsol pengguna.
5. **Tanda Petik Dua `"` atau Petik Satu `'` (String Literal):**
   Teks yang ingin dicetak harus diapit oleh tanda petik. Di Dart, Anda bebas menggunakan tanda petik tunggal (`'...'`) maupun ganda (`"..."`). Rekomendasi resmi Dart adalah konsisten menggunakan tanda petik tunggal (`'`).
6. **Titik Koma `;` (Statement Terminator):**
   Setiap baris pernyataan (*statement*) di Dart **HARUS** diakhiri dengan tanda titik koma (`;`). Jika lupa, kode akan mengalami *Syntax Error* saat kompilasi.

---

## 3. MENAMBAHKAN KOMENTAR PADA KODE

Komentar adalah catatan yang ditulis programmer untuk menjelaskan maksud kode. Komentar **tidak akan dieksekusi** oleh Dart compiler.

Di Dart, ada 3 jenis komentar:

```dart
// 1. Single-line comment: untuk penjelasan singkat satu baris

/* 
 2. Multi-line comment:
 Digunakan untuk penjelasan panjang
 yang membutuhkan beberapa baris.
*/

/// 3. Documentation comment:
/// Digunakan di atas fungsi atau class untuk menghasilkan dokumentasi resmi
/// yang akan muncul sebagai tooltip bantuan di VS Code.
void main() {
  print('Komentar tidak akan muncul di layar konsol!');
}
```

---

## 4. FORMATTING TEKS DENGAN ESCAPE SEQUENCES & MULTILINE STRING {#cabang-teori-formatting}

Fungsi `print()` menjadi jauh lebih bertenaga ketika Anda menguasai karakter khusus (*escape sequences*) dan string multi-baris.

### A. Karakter Khusus (*Escape Sequences*)
Gunakan simbol *backslash* (`\`) untuk menghasilkan efek teks tertentu:

* `\n` : Pindah baris baru (*Newline*)
* `\t` : Menambahkan spasi tab horizontal (*Tabulasi/Indentasi*)
* `\'` : Menampilkan tanda petik satu di dalam string berpetik satu
* `\"` : Menampilkan tanda petik dua di dalam string berpetik dua
* `\\` : Menampilkan karakter garis miring terbalik (*Backslash*) itu sendiri

Contoh kode:
```dart
void main() {
  print("Baris Pertama\nBaris Kedua");
  print("Nama:\tAkmal Raditya");
  print("Dia berkata: \"Belajar Dart itu menyenangkan!\"");
}
```

### B. Multiline String (Petik Tiga)
Jika Anda ingin mencetak teks panjang atau paragraf yang memiliki banyak baris tanpa harus mengetik `\n` berulang kali, gunakan **tanda petik tiga** (`'''` atau `"""`):

```dart
void main() {
  print('''
==============================
      HEXATECH ACADEMY        
==============================
Materi: Belajar Dart Dasar
Status: Aktif Belajar
Selamat mencoba!
==============================
''');
}
```

---

## 5. CARA MENJALANKAN PROGRAM MELALUI TERMINAL

Untuk menjalankan program yang telah Anda buat:

1. Buka panel terminal terintegrasi di VS Code dengan menekan shortcut:
   * **Windows / Linux:** `` Ctrl + ` `` (tombol kutip terbalik di bawah tombol Esc)
   * **macOS:** `` Cmd + ` ``
2. Pastikan posisi direktori terminal Anda berada di folder yang memuat file `.dart`. Gunakan perintah navigasi jika belum:
   ```bash
   # Masuk ke folder 01_dasar
   cd 01_dasar
   ```
3. Eksekusi kode menggunakan perintah resmi Dart CLI:
   ```bash
   dart run hello_world.dart
   ```
4. **Hasil Output di Layar:**
   ```text
   Hello, World!
   Selamat datang di kelas Dart HexaTech!
   ```

---

## 6. SISTEM KATEGORISASI TUGAS & LATIHAN MANDIRI {#cabang-tugas-mandiri}

Di akademi **HexaTech**, setiap akhir modul dilengkapi dengan latihan terarah. Tugas dirancang bertingkat (*scaffolded learning*) agar pemahaman Anda terbangun secara kokoh.

Berikut adalah standar pembagian kategori tugas yang wajib Anda pahami:

```text
┌─────────────────────────────────────────────────────────────┐
│                 PIRAMIDA TUGAS HEXATECH                     │
├─────────────────────────────────────────────────────────────┤
│  [Level 3] TANTANGAN KREATIF  ➔ Eksplorasi & Mini Project   │
│  [Level 2] TUGAS TERAPAN      ➔ Logika & Kasus Dunia Nyata  │
│  [Level 1] TUGAS DASAR        ➔ Penguasaan Sintaks & Format │
└─────────────────────────────────────────────────────────────┘
```

---

### KATEGORI 1: TUGAS DASAR (LEVEL: BASIC)
* **Tujuan:** Melatih kebiasaan mengetik (*muscle memory*), menghindari kesalahan sintaks (seperti lupa titik koma), dan membiasakan penggunaan `main()` serta `print()`.
* **Nama File:** `01_dasar/tugas/tugas1_biodata.dart`
* **Instruksi Soal:**
  Buatlah program yang menampilkan kartu biodata diri Anda ke konsol dengan format yang rapi dan menarik.
* **Kebutuhan Wajib:**
  1. Menampilkan Nama Lengkap.
  2. Menampilkan Asal Institusi / Sekolah / Pekerjaan.
  3. Menampilkan Alasan ingin belajar Dart & Flutter.
  4. Menampilkan Target keahlian yang ingin dicapai dalam 3 bulan ke depan.
* **Contoh Ekspektasi Output:**
  ```text
  ========================================
             BIODATA PESERTA
  ========================================
  Nama Lengkap : Budi Pratama
  Profesi      : Mahasiswa Teknik Informatika
  Motivasi     : Ingin menjadi Mobile App Developer
  Target 3 Bln : Menguasai Flutter & Rilis 1 Aplikasi
  ========================================
  ```

---

### KATEGORI 2: TUGAS TERAPAN (LEVEL: INTERMEDIATE)
* **Tujuan:** Menerapkan karakter *escape sequence* (`\n`, `\t`, pemisah garis) untuk merapikan data tabular tanpa menggunakan tabel HTML/GUI.
* **Nama File:** `01_dasar/tugas/tugas2_struk_belanja.dart`
* **Instruksi Soal:**
  Buatlah program simulasi pencetakan **Struk Pembayaran Kafe / Toko Buku**.
* **Kebutuhan Wajib:**
  1. Menggunakan tabulasi `\t` agar kolom nama barang, jumlah, dan harga tersusun rata ke kanan atau tengah.
  2. Memuat header toko, tanggal transaksi, minimal 3 daftar item barang, subtotal, diskon, dan total bayar.
  3. Memuat footer kalimat ucapan terima kasih dengan tanda kutip ganda menggunakan *escape quote* (`\"`).
* **Contoh Ekspektasi Output:**
  ```text
  --------------------------------------------------
                  HEXA COFFEE & ROASTERY
               Jl. Teknologi No. 42, Jakarta
  --------------------------------------------------
  ITEM                 QTY      HARGA         TOTAL
  Americano Hot         2       Rp 22.000     Rp 44.000
  Croissant Butter      1       Rp 28.000     Rp 28.000
  Matcha Latte Ice      1       Rp 32.000     Rp 32.000
  --------------------------------------------------
  Subtotal                            : Rp 104.000
  Diskon Promo HexaTech (10%)         : -Rp 10.400
  Total Pembayaran                    : Rp 93.600
  --------------------------------------------------
  "Terima kasih atas kunjungan Anda di Hexa Coffee!"
  --------------------------------------------------
  ```

---

### KATEGORI 3: TANTANGAN KREATIF (LEVEL: ADVANCED / MINI PROJECT)
* **Tujuan:** Menguji kreativitas eksplorasi visual teks menggunakan *Triple-Quotes Multiline String* (`'''`) untuk menciptakan karya seni teks (*ASCII Art*).
* **Nama File:** `01_dasar/tugas/tugas3_ascii_art.dart`
* **Instruksi Soal:**
  Buatlah spanduk digital (*digital banner*) atau logo maskot menggunakan karakter keyboard (ASCII Art) yang merepresentasikan tulisan **"HEXATECH"** atau logo robot/komputer disertai pesan motivasi belajar coding.
* **Contoh Ekspektasi Output:**
  ```text
    _   _ _______   __       _______ ______ _____ _    _ 
   | | | |  ___\ \ / /    /\|__   __|  ____/ ____| |  | |
   | |_| | |__  \ V /    /  \  | |  | |__ | |    | |__| |
   |  _  |  __|  > <    / /\ \ | |  |  __|| |    |  __  |
   | | | | |___ / . \  / ____ \| |  | |___| |____| |  | |
   |_| |_|_____/_/ \_\/_/    \_\_|  |______\_____|_|  |_|
  ========================================================
         "Transforming Lines of Code into Masterpieces"
  ========================================================
  ```

---

## 7. RUBRIK EVALUASI MANDIRI (SELF-CHECKLIST)

Sebelum Anda melanjutkan ke bab berikutnya, gunakan tabel rubrik penilaian berikut untuk memeriksa kualitas kode tugas Anda:

| Aspek Penilaian | Kriteria Berhasil (Lulus) | Kriteria Perlu Perbaikan |
| :--- | :--- | :--- |
| **Tata Kelola File** | Disimpan di folder `tugas/` dengan format `snake_case.dart` | Disimpan sembarangan atau menggunakan spasi/huruf kapital |
| **Kompilasi Program** | Program berjalan lancar (`dart run`) tanpa error / warning | Terjadi error sintaks (misal kurang tanda `;` atau kurung) |
| **Kerapian Format** | Output konsol lurus, rapi, dan mudah dibaca sesuai skenario | Teks berantakan, tabulasi geser, atau terpotong |
| **Penggunaan Fitur** | Berhasil menerapkan `\n`, `\t`, dan multiline string `'''` | Hanya memakai `print()` biasa berulang kali tanpa escape code |
| **Etika Belajar** | Kode diketik manual secara mandiri untuk melatih logika | Menyalin kode secara instan tanpa memahami maksud instruksi |

---

## KESIMPULAN

Memahami fungsi `main()` dan `print()` adalah fondasi awal yang kokoh. Dari sebuah fungsi utama inilah seluruh arsitektur aplikasi Flutter yang megah kelak akan bermula!

Pastikan Anda telah mencoba mengeksekusi file `hello_world.dart` dan menyelesaikan tugas latihan mandiri di atas. Pada modul berikutnya, kita akan mempelajari konsep penyimpanan data dalam program: **Variabel & Konstanta**. Semangat mencoba!