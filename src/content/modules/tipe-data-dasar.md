# TIPE DATA DASAR DART

Dalam pemrograman Dart, **segala hal adalah objek**. Bahkan tipe angka (`int`, `double`) dan nilai logika (`bool`) merupakan turunan dari class `Object`. Di modul ini, kita akan menjelajahi tipe data fundamental yang paling sering digunakan dalam aplikasi Flutter serta mempelajari manipulasi string dan konversi tipe (*type parsing*).

---

## POHON MATERI & STRUKTUR FOLDER KERJA

Kita akan melanjutkan pengerjaan di folder `02_fondasi_sintaksis/` yang telah Anda buat sebelumnya:

```text
belajar_dart_hexatech/
└── 02_fondasi_sintaksis/
    ├── 04_angka_dan_string.dart
    ├── 05_boolean_dan_parsing.dart
    └── tugas/
        ├── tugas4_konversi_satuan.dart   [Tingkat Dasar]
        ├── tugas5_analisis_kalimat.dart  [Tingkat Terapan]
        └── tugas6_parser_data_user.dart  [Tantangan Kreatif]
```

---

## CABANG 1: ANGKA (`int`, `double`, `num`) & TEKS (`String`) {#cabang-1-angka-teks}

### 1. Karakteristik Angka di Dart
* **`int`**: Bilangan bulat 64-bit tanpa desimal (contoh: `-5`, `0`, `42`).
* **`double`**: Bilangan pecahan / desimal presisi ganda IEEE 754 (contoh: `3.14`, `-0.01`).
* **`num`**: Tipe induk dari `int` dan `double`. Variabel bertipe `num` dapat menampung bilangan bulat maupun desimal secara bergantian.

### 2. Keunggulan Manipulasi `String` di Dart
* Mendukung tanda kutip tunggal (`'...'`) dan kutip ganda (`"..."`).
* **String Interpolation**: Menyisipkan variabel langsung dengan `$variabel` atau ekspresi dengan `${ekspresi}` tanpa perlu konkatenasi `+`.
* Method bawaan canggih: `.toUpperCase()`, `.toLowerCase()`, `.contains()`, `.replaceAll()`.

Buatlah file baru: `02_fondasi_sintaksis/04_angka_dan_string.dart`, lalu ketik kode berikut:

```dart
// File: 02_fondasi_sintaksis/04_angka_dan_string.dart
void main() {
  // 1. Tipe Data Angka
  int jumlahKucing = 4;
  double beratKucing = 3.75; // dalam kg
  num beratTotal = jumlahKucing * beratKucing; // num bisa menerima double

  print("=== OPERASI ANGKA ===");
  print("Jumlah Kucing : $jumlahKucing ekor");
  print("Berat / Ekor  : $beratKucing kg");
  print("Total Bobot   : $beratTotal kg");

  // num diubah menjadi integer (sah karena num fleksibel)
  beratTotal = 15;
  print("Total Bobot Dibulatkan: $beratTotal kg");

  // 2. Manipulasi String
  String namaDepan = "Akmal";
  String namaBelakang = "Raditya";
  String hobi = "Membangun Aplikasi Flutter";

  print("\n=== MANIPULASI STRING ===");
  // String Interpolation sederhana & ekspresi kompleks
  print("Nama Lengkap : $namaDepan $namaBelakang");
  print("Huruf Kapital: ${namaDepan.toUpperCase()} ${namaBelakang.toUpperCase()}");
  print("Panjang Nama : ${(namaDepan + namaBelakang).length} karakter");
  print("Suka Flutter?: ${hobi.contains("Flutter")}");
}
```

### Cara Menjalankan di Terminal:
```bash
dart run 02_fondasi_sintaksis/04_angka_dan_string.dart
```

**Ekspektasi Output Konsol:**
```text
=== OPERASI ANGKA ===
Jumlah Kucing : 4 ekor
Berat / Ekor  : 3.75 kg
Total Bobot   : 15.0 kg
Total Bobot Dibulatkan: 15 kg

=== MANIPULASI STRING ===
Nama Lengkap : Akmal Raditya
Huruf Kapital: AKMAL RADITYA
Panjang Nama : 12 karakter
Suka Flutter?: true
```

---

## CABANG 2: BOOLEAN & TYPE CONVERSION (PARSING) {#cabang-2-boolean-parsing}

Dalam aplikasi mobile nyata (seperti membaca form input atau mengambil response API dari server), data yang Anda terima seringkali berbentuk `String` (misal `"100"` atau `"45000.5"`). Anda **wajib mengonversinya** (*parsing*) menjadi angka sebelum melakukan operasi matematika.

### Konversi Tipe yang Sering Dipakai:
* `int.parse("123")` : Mengubah teks angka bulat menjadi `int`.
* `double.parse("3.14")` : Mengubah teks pecahan menjadi `double`.
* `nilai.toString()` : Mengubah angka atau boolean apa pun menjadi `String`.
* `int.tryParse("abc")` : Versi aman yang mengembalikan `null` alih-alih crash jika teks bukan angka valid.

Buatlah file kedua: `02_fondasi_sintaksis/05_boolean_dan_parsing.dart`:

```dart
// File: 02_fondasi_sintaksis/05_boolean_dan_parsing.dart
void main() {
  // 1. Tipe Data Boolean
  bool isLoggedIn = true;
  bool hasMembership = false;

  print("=== STATUS PENGGUNA ===");
  print("Sudah Login   : $isLoggedIn");
  print("Punya Member  : $hasMembership");
  print("Akses Konten? : ${isLoggedIn && hasMembership}");

  // 2. Type Parsing (Konversi String ke Angka)
  print("\n=== TYPE CONVERSION (PARSING) ===");
  String inputHarga = "75000";
  String inputPajak = "0.11"; // Pajak PPN 11%

  // Mengubah String menjadi int dan double
  int harga = int.parse(inputHarga);
  double tarifPajak = double.parse(inputPajak);
  double totalPajak = harga * tarifPajak;
  double totalBayar = harga + totalPajak;

  print("Harga Asli   : Rp $harga");
  print("Nominal PPN  : Rp $totalPajak");
  print("Total Tagihan: Rp $totalBayar");

  // 3. Mengubah Angka ke String dengan Format Desimal
  String formatStruk = totalBayar.toStringAsFixed(2);
  print("Format Struk : Rp $formatStruk");
}
```

### Cara Menjalankan di Terminal:
```bash
dart run 02_fondasi_sintaksis/05_boolean_dan_parsing.dart
```

**Ekspektasi Output Konsol:**
```text
=== STATUS PENGGUNA ===
Sudah Login   : true
Punya Member  : false
Akses Konten? : false

=== TYPE CONVERSION (PARSING) ===
Harga Asli   : Rp 75000
Nominal PPN  : Rp 8250.0
Total Tagihan: Rp 83250.0
Format Struk : Rp 83250.00
```

---

## CABANG 3: TUGAS MANDIRI TERSTRUKTUR (3 LEVEL) {#cabang-tugas-mandiri}

Buka kembali folder tugas: `02_fondasi_sintaksis/tugas/`. Kerjakan 3 tantangan berikut dengan nama file yang telah ditentukan:

---

### TUGAS 1: KONVERSI SUHU CELSIUS KE FAHRENHEIT (TINGKAT: DASAR)
* **Lokasi File:** `02_fondasi_sintaksis/tugas/tugas4_konversi_satuan.dart`
* **Instruksi:** 
  Buat program konversi temperatur:
  - Deklarasikan variabel `double suhuCelsius = 28.5;`.
  - Hitung suhu Fahrenheit dengan rumus: `(suhuCelsius * 9 / 5) + 32`.
  - Hitung suhu Reamur dengan rumus: `suhuCelsius * 4 / 5`.
  - Hitung suhu Kelvin dengan rumus: `suhuCelsius + 273.15`.
  - Cetak hasil konversi dengan format 1 angka di belakang koma (`.toStringAsFixed(1)`).
* **Ekspektasi Output:**
  ```text
  =========================================
          PENGUKUR SUHU CUACA DART
  =========================================
  Suhu Ruangan Asli : 28.5 °C
  Konversi Fahrenheit: 83.3 °F
  Konversi Reamur    : 22.8 °R
  Konversi Kelvin    : 301.7 K
  =========================================
  ```

---

### TUGAS 2: ANALISIS STATISTIK KALIMAT (TINGKAT: TERAPAN)
* **Lokasi File:** `02_fondasi_sintaksis/tugas/tugas5_analisis_kalimat.dart`
* **Instruksi:** 
  Buat program yang mengolah sebuah kalimat panjang:
  ```dart
  String kalimat = "Belajar Bahasa Pemrograman Dart di HexaTech Sangat Mengasyikkan!";
  ```
  - Cetak panjang total kalimat.
  - Cetak kalimat dalam format SEMUA HURUF BESAR.
  - Cetak kalimat dalam format semua huruf kecil.
  - Periksa apakah kalimat mengandung kata `"HexaTech"` (hasil berupa boolean).
  - Ganti kata `"Mengasyikkan"` menjadi `"Luar Biasa"` menggunakan method `.replaceAll()`.
* **Ekspektasi Output:**
  ```text
  --------------------------------------------------
                 ANALISIS TEKS & STRING
  --------------------------------------------------
  Kalimat Asli   : Belajar Bahasa Pemrograman Dart di HexaTech Sangat Mengasyikkan!
  Jumlah Karakter: 66 karakter
  Huruf Kapital  : BELAJAR BAHASA PEMROGRAMAN DART DI HEXATECH SANGAT MENGASYIKKAN!
  Mengandung Kata: true
  Hasil Ubah     : Belajar Bahasa Pemrograman Dart di HexaTech Sangat Luar Biasa!
  --------------------------------------------------
  ```

---

### TUGAS 3: PARSER DATA INPUT PENGGUNA (TINGKAT: TANTANGAN KREATIF)
* **Lokasi File:** `02_fondasi_sintaksis/tugas/tugas6_parser_data_user.dart`
* **Instruksi:** 
  Bayangkan Anda menerima data mentah dari form web berupa String berikut:
  ```dart
  String inputNama = "  raditya wijaya  ";
  String inputTahunLahir = "2003";
  String inputTinggi = "172.8";
  String inputMember = "true";
  ```
  Tugas Anda:
  1. Bersihkan spasi kosong di awal/akhir nama menggunakan `.trim()`.
  2. Parse `inputTahunLahir` menjadi integer, lalu hitung perkiraan usia tahun ini (2026 - tahunLahir).
  3. Parse `inputTinggi` menjadi double.
  4. Parse `inputMember` menjadi boolean (`inputMember == "true"`).
  5. Cetak profil data terverifikasi dalam format kartu bersih.
* **Ekspektasi Output:**
  ```text
  **************************************************
             HASIL VERIFIKASI DATA FORM
  **************************************************
  Nama Lengkap (Trimmed) : Raditya Wijaya
  Tahun Kelahiran        : 2003
  Estimasi Usia          : 23 Tahun
  Tinggi Badan           : 172.8 cm
  Status Keanggotaan     : Member Aktif (true)
  **************************************************
  ```

---

## 4. RUBRIK PENILAIAN MANDIRI

| Kriteria Evaluasi | Target Capaian Lulus | Catatan Evaluasi |
| :--- | :--- | :--- |
| **Penyimpanan File** | Tersimpan rapi di `02_fondasi_sintaksis/tugas/` | Format snake_case konsisten |
| **Penggunaan Parsing** | Menggunakan `int.parse()` dan `double.parse()` dengan tepat | Mengerti perbedaan integer vs double |
| **Manipulasi String** | Memanfaatkan interpolation `$`, `.toUpperCase()`, `.trim()` | Menghindari penggabungan string tanda `+` |
| **Bebas Error** | Program sukses dieksekusi tanpa throw FormatException | Semua baris pernyataan diakhiri `;` |

---

## KESIMPULAN

Tipe data dasar adalah fondasi dari seluruh algoritma pemrograman. Di bab berikutnya, kita akan mempelajari **Operator**, perangkat yang memungkinkan kita melakukan perhitungan logika, komparasi perbandingan, dan kalkulasi dinamis!