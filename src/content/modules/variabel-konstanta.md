# VARIABEL & KONSTANTA

Variabel adalah wadah penyimpanan dalam memori komputer untuk menampung data yang dapat diakses dan dimanipulasi selama program berjalan. Dalam bahasa Dart yang bertipe statis (*statically-typed*), Dart menyediakan cara yang fleksibel namun aman untuk mendeklarasikan data, mulai dari *type inference* otomatis hingga nilai mutlak tak terubahkan (*constants*).

---

## POHON MATERI & STRUKTUR FOLDER KERJA

Sebelum menulis kode, buatlah folder materi baru di dalam proyek Anda: `02_fondasi_sintaksis/`. Berikut adalah peta percabangan materi dan file latihan yang akan kita buat:

```text
belajar_dart_hexatech/
└── 02_fondasi_sintaksis/
    ├── 01_variabel_var.dart
    ├── 02_variabel_eksplisit.dart
    ├── 03_konstanta_final_const.dart
    └── tugas/
        ├── tugas1_kartu_profil.dart      [Tingkat Dasar]
        ├── tugas2_kalkulator_diskon.dart [Tingkat Terapan]
        └── tugas3_simulasi_kasir.dart    [Tantangan Kreatif]
```

> **Petunjuk Kerja:**  
> Buka VS Code pada folder proyek Anda, buat folder `02_fondasi_sintaksis/`, lalu ikuti setiap cabang materi berikut dengan membuat file yang bersesuaian.

---

## CABANG 1: VARIABEL `var` & TYPE INFERENCE {#cabang-1-variabel-var}

Kata kunci `var` memungkinkan Dart menebak (*inferensi*) tipe data secara otomatis berdasarkan nilai awal yang Anda berikan. Begitu tipe data ditebak saat kompilasi, tipe tersebut terkunci dan **tidak dapat diubah** menjadi tipe data lain.

Buatlah file pertama Anda: `02_fondasi_sintaksis/01_variabel_var.dart`, lalu ketik kode berikut:

```dart
// File: 02_fondasi_sintaksis/01_variabel_var.dart
void main() {
  // Dart secara otomatis mendeteksi:
  // nama -> String, umur -> int, tinggiBadan -> double, isActive -> bool
  var nama = "Budi Pratama";
  var umur = 22;
  var tinggiBadan = 175.5;
  var isActive = true;

  print("=== DATA PENGGUNA (VAR) ===");
  print("Nama Pengguna : $nama");
  print("Umur          : $umur tahun");
  print("Tinggi Badan  : $tinggiBadan cm");
  print("Status Aktif  : $isActive");

  // Mengubah isi nilai variabel (WAJIB tipe yang sama)
  umur = 23;
  print("Ulang Tahun! Sekarang umur: $umur tahun");

  // [ERROR] Contoh kesalahan tipe (akan ditolak compiler):
  // umur = "Dua Puluh Tiga"; // Error: Nilai bertipe String tidak bisa masuk ke variabel int!
}
```

### Cara Menjalankan di Terminal:
```bash
dart run 02_fondasi_sintaksis/01_variabel_var.dart
```

**Ekspektasi Output Konsol:**
```text
=== DATA PENGGUNA (VAR) ===
Nama Pengguna : Budi Pratama
Umur          : 22 tahun
Tinggi Badan  : 175.5 cm
Status Aktif  : true
Ulang Tahun! Sekarang umur: 23 tahun
```

---

## CABANG 2: DEKLARASI EKSPLISIT & TIPE `dynamic` {#cabang-2-deklarasi-eksplisit}

Jika Anda ingin kode Anda lebih mudah dibaca oleh tim developer lain atau memperjelas kontrak tipe sejak awal, gunakan **deklarasi tipe eksplisit** (`String`, `int`, `double`, `bool`). 

Adapun tipe **`dynamic`** adalah tipe khusus yang mematikan pengecekan tipe statis Dart, sehingga nilainya bebas berubah tipe data kapan pun saat runtime (hanya gunakan saat menangani respons data dinamis dari API atau JSON).

Buatlah file kedua: `02_fondasi_sintaksis/02_variabel_eksplisit.dart`:

```dart
// File: 02_fondasi_sintaksis/02_variabel_eksplisit.dart
void main() {
  // 1. Deklarasi Eksplisit (Tipe Tertulis Jelas)
  String mataKuliah = "Pemrograman Dart Modern";
  int sks = 3;
  double nilaiMinimal = 75.0;
  bool isWajib = true;

  print("=== INFORMASI KURSUS ===");
  print("Mata Kuliah   : $mataKuliah ($sks SKS)");
  print("Nilai Lulus   : >= $nilaiMinimal");
  print("Status Wajib  : $isWajib");

  // 2. Eksperimen dengan Tipe Dynamic
  print("\n=== EKSPERIMEN DYNAMIC ===");
  dynamic nilaiFleksibel = 100; // Mula-mula integer
  print("Nilai awal (int)     : $nilaiFleksibel");

  nilaiFleksibel = "A+ (Sempurna)"; // Berubah menjadi String
  print("Nilai ubah (String)  : $nilaiFleksibel");

  nilaiFleksibel = true; // Berubah menjadi Boolean
  print("Nilai ubah (Boolean) : $nilaiFleksibel");
}
```

### Cara Menjalankan di Terminal:
```bash
dart run 02_fondasi_sintaksis/02_variabel_eksplisit.dart
```

**Ekspektasi Output Konsol:**
```text
=== INFORMASI KURSUS ===
Mata Kuliah   : Pemrograman Dart Modern (3 SKS)
Nilai Lulus   : >= 75.0
Status Wajib  : true

=== EKSPERIMEN DYNAMIC ===
Nilai awal (int)     : 100
Nilai ubah (String)  : A+ (Sempurna)
Nilai ubah (Boolean) : true
```

---

## CABANG 3: KONSTANTA (`final` VS `const`) {#cabang-3-konstanta-final--const}

Dalam aplikasi nyata, sebagian besar data seharusnya bersifat kekal (*immutable*) untuk mencegah bug yang tidak diinginkan. Dart menyediakan dua kata kunci sakti:

| Kata Kunci | Waktu Penentuan Nilai | Contoh Nilai |
| :--- | :--- | :--- |
| **`const`** | **Compile-Time:** Nilainya WAJIB sudah pasti saat kode ditulis sebelum aplikasi dijalankan | Angka pi (`3.14159`), URL Server tetap, teks paten |
| **`final`** | **Runtime:** Nilainya baru diketahui saat kode dieksekusi, tetapi SEKALI diisi TIDAK BISA diubah lagi | Waktu sekarang (`DateTime.now()`), data input pengguna, hasil hitung sensor |

Buatlah file ketiga: `02_fondasi_sintaksis/03_konstanta_final_const.dart`:

```dart
// File: 02_fondasi_sintaksis/03_konstanta_final_const.dart
void main() {
  // 1. Penggunaan CONST (Compile-time Constant)
  const double pi = 3.14159265359;
  const String namaPlatform = "HexaTech Learn";
  const int maxKoneksi = 10;

  print("=== NILAI TETAP (CONST) ===");
  print("Platform     : $namaPlatform");
  print("Nilai PI     : $pi");
  print("Max Koneksi  : $maxKoneksi user");

  // 2. Penggunaan FINAL (Runtime Constant)
  final DateTime waktuMulaiBelajar = DateTime.now();
  final String deviceOS = "Windows 64-bit"; // Dideteksi saat program jalan

  print("\n=== NILAI RUNTIME (FINAL) ===");
  print("Waktu Akses  : $waktuMulaiBelajar");
  print("Perangkat    : $deviceOS");

  // [ERROR] Percobaan ilegal:
  // pi = 3.14; // ERROR: Tidak bisa mengubah nilai variabel const!
  // waktuMulaiBelajar = DateTime.now(); // ERROR: Variabel final hanya bisa diisi satu kali!
}
```

### Cara Menjalankan di Terminal:
```bash
dart run 02_fondasi_sintaksis/03_konstanta_final_const.dart
```

**Ekspektasi Output Konsol:**
```text
=== NILAI TETAP (CONST) ===
Platform     : HexaTech Learn
Nilai PI     : 3.14159265359
Max Koneksi  : 10 user

=== NILAI RUNTIME (FINAL) ===
Waktu Akses  : 2026-10-25 18:00:00.000
Perangkat    : Windows 64-bit
```

---

## CABANG 4: TUGAS MANDIRI TERSTRUKTUR (3 LEVEL) {#cabang-tugas-mandiri}

Kini saatnya menguji pemahaman Anda. Buat sub-folder baru khusus tugas:
```text
02_fondasi_sintaksis/tugas/
```

Kerjakan ketiga tugas berikut dengan membuat file yang telah ditentukan:

---

### TUGAS 1: KARTU PROFIL MAHASISWA (TINGKAT: DASAR)
* **Lokasi File:** `02_fondasi_sintaksis/tugas/tugas1_kartu_profil.dart`
* **Instruksi:** Buatlah program yang menyimpan data diri menggunakan variabel tipe eksplisit (`String`, `int`, `double`, `bool`) dan cetak ke konsol dengan format kartu yang rapi.
* **Variabel Wajib:**
  1. `namaLengkap` (String)
  2. `nim` (String)
  3. `semester` (int)
  4. `ipkKumulatif` (double)
  5. `statusBeasiswa` (bool)
* **Ekspektasi Output:**
  ```text
  ==============================================
            KARTU PROFIL MAHASISWA
  ==============================================
  NIM               : 202610012
  Nama Lengkap      : Siti Nurhaliza
  Semester          : 3
  IPK Kumulatif     : 3.89
  Penerima Beasiswa : true
  ==============================================
  ```

---

### TUGAS 2: SIMULASI KALKULATOR DISKON (TINGKAT: TERAPAN)
* **Lokasi File:** `02_fondasi_sintaksis/tugas/tugas2_kalkulator_diskon.dart`
* **Instruksi:** 
  Gunakan kombinasi `const` untuk persentase diskon tetap dan `var` untuk kalkulasi harga.
  - Tetapkan diskon toko sebesar 15% menggunakan `const double diskonPersen = 0.15;`.
  - Simpan harga asli barang menggunakan `final int hargaAsli = 250000;`.
  - Hitung nominal potongan diskon (`hargaAsli * diskonPersen`).
  - Hitung total harga bayar (`hargaAsli - potongan`).
* **Ekspektasi Output:**
  ```text
  ----------------------------------------------
              PERHITUNGAN DISKON TOKO
  ----------------------------------------------
  Harga Asli Barang   : Rp 250.000
  Diskon Promo Toko   : 15%
  Potongan Hemat      : Rp 37.500
  ----------------------------------------------
  Total Bayar Bersih  : Rp 212.500
  ----------------------------------------------
  ```

---

### TUGAS 3: KASIR KANTIN HEXATECH (TINGKAT: TANTANGAN KREATIF)
* **Lokasi File:** `02_fondasi_sintaksis/tugas/tugas3_simulasi_kasir.dart`
* **Instruksi:** 
  Buat program kasir kantin cerdas dengan ketentuan:
  1. Gunakan `const namaToko = 'HEXATECH CANTEEN';` dan `final waktuBeli = DateTime.now();`.
  2. Deklarasikan 3 menu berbeda dengan variabel nama, kuantitas (`int`), dan harga satuan (`int`).
  3. Hitung subtotal tiap menu, jumlahkan menjadi total belanja, lalu hitung kembalian jika pembeli membayar uang tunai tertentu.
* **Ekspektasi Output:**
  ```text
  **********************************************
                HEXATECH CANTEEN
  Waktu Transaksi : 2026-10-25 18:05:00
  **********************************************
  Nasi Goreng Spesial  (2x @ Rp 20.000) = Rp 40.000
  Es Teh Manis Jumbo   (2x @ Rp 5.000)  = Rp 10.000
  Pisang Goreng Keju   (1x @ Rp 15.000) = Rp 15.000
  ----------------------------------------------
  Total Pembayaran                     = Rp 65.000
  Uang Tunai Diterima                  = Rp 100.000
  Uang Kembalian                       = Rp 35.000
  **********************************************
           "Selamat Menikmati Hidangan!"
  **********************************************
  ```

---

## 5. RUBRIK PENILAIAN MANDIRI

Gunakan lembar checklist berikut untuk memastikan kode tugas Anda berkualitas prima:

| Kriteria Evaluasi | Target Capaian Lulus | Catatan Evaluasi |
| :--- | :--- | :--- |
| **Lokasi & Nama File** | File tersimpan di `02_fondasi_sintaksis/tugas/` dengan format snake_case | Tidak ada nama file atau folder yang tertukar |
| **Ketepatan Tipe Data** | Menggunakan tipe data yang tepat (`int`, `double`, `String`, `bool`) | Tidak menggunakan `dynamic` jika tipenya sudah pasti |
| **Pemanfaatan Konstanta**| `const` dipakai untuk nilai paten, `final` dipakai untuk runtime | Memahami perbedaan compile-time vs runtime |
| **Keberhasilan Eksekusi** | Kode berjalan lancar via `dart run ...` tanpa error kompilasi | Seluruh output tersusun rapi |

---

## KESIMPULAN

Selamat! Anda kini telah menguasai cabang deklarasi variabel (`var`, eksplisit, dan `dynamic`) serta konsep imutabilitas data melalui `final` dan `const`.

Lanjutkan perjalanan belajar Anda ke modul berikutnya: **Tipe Data Dasar**, di mana kita akan membedah secara spesifik metode bawaan (*built-in methods*) untuk angka, teks, boolean, dan konversi tipe!