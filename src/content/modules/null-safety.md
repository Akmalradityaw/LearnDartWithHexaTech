# PRINSIP SOUND NULL SAFETY & OPERATOR NULL-AWARE

Sejak rilis versi 2.12, Dart memperkenalkan fitur revolusioner bernama **Sound Null Safety**. Konsep ini dirancang untuk membasmi salah satu kesalahan paling mahal dan sering terjadi dalam industri rekayasa perangkat lunak: *"The Billion-Dollar Mistake"* atau *NullPointerException*.

Dalam sistem tipe yang *sound* (kokoh), kompiler Dart menjamin bahwa variabel yang dideklarasikan tidak akan pernah bernilai `null` saat aplikasi berjalan, kecuali jika Anda secara terang-terangan mengizinkannya.

---

## POHON MATERI & STRUKTUR FOLDER KERJA

Tuntaskan materi fungsi dan keamanan data ini dengan menyusun file-file latihan berikut di dalam `04_fungsi_dan_null_safety/`:

```text
belajar_dart_hexatech/
└── 04_fungsi_dan_null_safety/
    ├── 05_tipe_nullable_dan_non_null.dart
    ├── 06_operator_null_aware.dart
    ├── 07_late_dan_type_promotion.dart
    └── tugas/
        ├── tugas7_validasi_input_user.dart     [Tingkat Dasar]
        ├── tugas8_parser_profile_json.dart     [Tingkat Terapan]
        └── tugas9_sistem_antrean_service.dart  [Tantangan Kreatif]
```

> **Petunjuk Kerja:**  
> Buka VS Code di folder proyek Anda, buat file baru di dalam `04_fungsi_dan_null_safety/`, dan perhatikan bagaimana kompiler Dart mendeteksi potensi error bahkan sebelum kode dijalankan.

---

## CABANG 1: NON-NULLABLE VS NULLABLE TYPES (`?`) {#cabang-1-nullable-types}

Secara *default*, seluruh tipe data di Dart bersifat **Non-Nullable** (tidak boleh bernilai null).

### 1. Tipe Non-Nullable (Standar Aman)
```dart
String nama = "Akmal";
// nama = null; // [ERROR] Nilai null ditolak langsung oleh kompiler saat pengetikan!
```

### 2. Tipe Nullable (`Tipe?`)
Jika Anda secara sengaja membutuhkan variabel yang dapat menampung ketiadaan nilai (misalnya data opsional dari database atau kolom input form yang belum diisi pengguna), tambahkan simbol tanda tanya (`?`) tepat di belakang nama tipe datanya.

Buat file baru: `04_fungsi_dan_null_safety/05_tipe_nullable_dan_non_null.dart`:

```dart
// File: 04_fungsi_dan_null_safety/05_tipe_nullable_dan_non_null.dart
void main() {
  // 1. Variabel Non-Nullable (Wajib Memiliki Nilai Nyata)
  String namaLengkap = "Budi Santoso";
  int umur = 24;

  print("=== DATA NON-NULLABLE ===");
  print("Nama Pengguna : $namaLengkap");
  print("Umur          : $umur tahun");

  // Percobaan ilegal (akan digarisbawahi merah oleh IDE):
  // namaLengkap = null; // Error: A value of type 'Null' cannot be assigned to 'String'

  // 2. Variabel Nullable (Boleh Bernilai Null)
  String? nomorTelepon; // Bernilai null secara default jika belum diisi
  String? alamatEmail = "budi@perusahaan.co.id";

  print("\n=== DATA NULLABLE ===");
  print("Nomor Telepon : $nomorTelepon (Ketiadaan Nilai)");
  print("Alamat Email  : $alamatEmail");

  // Mengubah isi variabel nullable
  nomorTelepon = "+628123456789";
  print("Nomor Telepon Diperbarui: $nomorTelepon");
}
```

### Cara Menjalankan di Terminal:
```bash
dart run 04_fungsi_dan_null_safety/05_tipe_nullable_dan_non_null.dart
```

**Ekspektasi Output Konsol:**
```text
=== DATA NON-NULLABLE ===
Nama Pengguna : Budi Santoso
Umur          : 24 tahun

=== DATA NULLABLE ===
Nomor Telepon : null (Ketiadaan Nilai)
Alamat Email  : budi@perusahaan.co.id
Nomor Telepon Diperbarui: +628123456789
```

---

## CABANG 2: OPERATOR NULL-AWARE (`?.`, `??`, `??=`, `!`) {#cabang-2-null-aware-operators}

Ketika bekerja dengan variabel *nullable*, Dart mencegah pemanggilan method atau properti secara langsung karena berisiko memicu crash. Dart menyediakan rangkaian operator canggih untuk mengelolanya:

### 1. Safe Navigation Operator (`?.`)
Memanggil properti hanya jika objek tidak bernilai null. Jika null, eksekusi dibatalkan dan mengembalikan nilai null dengan aman tanpa error.

### 2. If-Null / Fallback Operator (`??`)
Menyediakan nilai cadangan (*default fallback*) apabila sisi kiri bernilai null:  
`nilai = ekspresiNullable ?? nilaiPengganti;`

### 3. Null-Aware Assignment (`??=`)
Mengisi nilai variabel HANYA JIKA variabel tersebut saat ini masih bernilai null.

### 4. Bang / Null Assertion Operator (`!`)
Menegaskan secara paksa kepada kompiler bahwa nilai tersebut dijamin 100% tidak null.  
*(Peringatan: Jika ternyata variabel bernilai null saat runtime, aplikasi akan langsung mengalami exception crash!)*

Buat file kedua: `04_fungsi_dan_null_safety/06_operator_null_aware.dart`:

```dart
// File: 04_fungsi_dan_null_safety/06_operator_null_aware.dart
void main() {
  // 1. Safe Navigation (?.)
  String? deskripsiProduk;
  // Membaca panjang karakter tanpa risiko crash
  int? panjangKarakter = deskripsiProduk?.length;
  print("Panjang Deskripsi (Safe Access) : $panjangKarakter");

  // 2. Fallback Operator (??)
  String? judulArtikel;
  String judulTampil = judulArtikel ?? "Judul Belum Ditentukan";
  print("Judul Halaman Web               : $judulTampil");

  // 3. Null-aware Assignment (??=)
  String? preferensiBahasa;
  preferensiBahasa ??= "id_ID"; // Diisi karena mula-mula null
  preferensiBahasa ??= "en_US"; // Diabaikan karena sudah bernilai id_ID
  print("Pengaturan Bahasa               : $preferensiBahasa");

  // 4. Assertion Operator (!) - Gunakan dengan Sangat Hati-hati
  String? tokenOtentikasi = "AUTH_SECURE_TOKEN_XYZ";
  // Kita memastikan data token pasti ada sebelum dikirim ke API
  int panjangToken = tokenOtentikasi!.length;
  print("Panjang Token Terverifikasi     : $panjangToken karakter");
}
```

### Cara Menjalankan di Terminal:
```bash
dart run 04_fungsi_dan_null_safety/06_operator_null_aware.dart
```

**Ekspektasi Output Konsol:**
```text
Panjang Deskripsi (Safe Access) : null
Judul Halaman Web               : Judul Belum Ditentukan
Pengaturan Bahasa               : id_ID
Panjang Token Terverifikasi     : 21 karakter
```

---

## CABANG 3: KATA KUNCI `late` & TYPE PROMOTION {#cabang-3-late-type-promotion}

### 1. Kata Kunci `late` (Inisialisasi Tertunda)
Digunakan saat Anda memiliki variabel non-nullable yang **pasti diisi sebelum digunakan**, namun nilainya belum dapat ditentukan tepat saat deklarasi (misalnya menunggu siklus hidup `initState()` pada Flutter).

### 2. Type Promotion (Peningkatan Tipe Otomatis)
Kompiler Dart sangat cerdas. Jika sebuah variabel *nullable* telah dicek dengan `if (variabel != null)`, Dart secara otomatis "mempromosikan" variabel tersebut menjadi non-nullable di dalam blok kode tersebut.

Buat file ketiga: `04_fungsi_dan_null_safety/07_late_dan_type_promotion.dart`:

```dart
// File: 04_fungsi_dan_null_safety/07_late_dan_type_promotion.dart

class ProfilPresenter {
  // Variabel late: dideklarasikan non-nullable tapi diisi kemudian
  late String modulAktif;

  void inisialisasiModul(String nama) {
    modulAktif = nama;
  }

  void tampilkanModul() {
    print("Modul Berjalan: $modulAktif");
  }
}

void cetakPanjangTeks(String? teksInput) {
  // Sebelum pengecekan: teksInput bertipe String? (Nullable)
  if (teksInput != null) {
    // Di dalam blok ini, Dart otomatis mempromosikan menjadi String (Non-Nullable)
    // Tidak butuh tanda ?. atau ! lagi!
    print("Teks: '$teksInput' | Panjang: ${teksInput.length} karakter");
  } else {
    print("[PERINGATAN] Teks kosong / null diterima.");
  }
}

void main() {
  print("=== TYPE PROMOTION ===");
  cetakPanjangTeks("Belajar Sound Null Safety");
  cetakPanjangTeks(null);

  print("\n=== LATE INITIALIZATION ===");
  ProfilPresenter presenter = ProfilPresenter();
  presenter.inisialisasiModul("Dart 3 Modern");
  presenter.tampilkanModul();
}
```

### Cara Menjalankan di Terminal:
```bash
dart run 04_fungsi_dan_null_safety/07_late_dan_type_promotion.dart
```

**Ekspektasi Output Konsol:**
```text
=== TYPE PROMOTION ===
Teks: 'Belajar Sound Null Safety' | Panjang: 25 karakter
[PERINGATAN] Teks kosong / null diterima.

=== LATE INITIALIZATION ===
Modul Berjalan: Dart 3 Modern
```

---

## CABANG 4: TUGAS MANDIRI TERSTRUKTUR (3 LEVEL) {#cabang-tugas-mandiri}

Selesaikan 3 tugas bertingkat berikut untuk menguasai pengelolaan data yang aman dari error null di folder:

```text
04_fungsi_dan_null_safety/tugas/
```

---

### TUGAS 1: VALIDASI INPUT PENGGUNA AMAN NULL (TINGKAT: DASAR)
* **Lokasi File:** `04_fungsi_dan_null_safety/tugas/tugas7_validasi_input_user.dart`
* **Instruksi:** 
  1. Deklarasikan 3 variabel nullable yang mensimulasikan data form pendaftaran:
     - `String? inputNama = "Rian Hidayat";`
     - `String? inputKota = null;`
     - `String? inputPekerjaan = null;`
  2. Gunakan operator fallback (`??`) untuk menetapkan nilai default jika kolom bernilai null:
     - Nama fallback: `"Tamu"`
     - Kota fallback: `"Kota Tidak Diketahui"`
     - Pekerjaan fallback: `"Belum Memiliki Pekerjaan"`
  3. Cetak kartu ringkasan identitas pengguna dengan data yang sudah terproteksi.
* **Ekspektasi Output:**
  ```text
  =========================================
            KARTU ANGGOTA TERVERIFIKASI
  =========================================
  Nama Lengkap : Rian Hidayat
  Domisili     : Kota Tidak Diketahui
  Pekerjaan    : Belum Memiliki Pekerjaan
  Status Data  : Lengkap & Aman
  =========================================
  ```

---

### TUGAS 2: PARSER DATA RESPONSE API PROFILE (TINGKAT: TERAPAN)
* **Lokasi File:** `04_fungsi_dan_null_safety/tugas/tugas8_parser_profile_json.dart`
* **Instruksi:** 
  1. Diberikan representasi respon API:
     ```dart
     Map<String, dynamic> apiResponse = {
       "user_id": 10892,
       "username": "developer_dart",
       "bio": null,
       "kontak": {
         "email": "dev@hexatech.id",
         "telepon": null
       }
     };
     ```
  2. Ekstrak data-data tersebut menggunakan safe navigation (`?.`) dan fallback operator (`??`).
  3. Hitung jumlah karakter bio; jika bio null, gunakan default `0`.
  4. Cetak profil hasil parsing secara rapi.
* **Ekspektasi Output:**
  ```text
  =============================================================
                     HASIL PARSING DATA API
  =============================================================
  ID Pengguna     : 10892
  Username Akun   : developer_dart
  Status Bio      : [Belum Mengisi Bio] (0 Karakter)
  Email Utama     : dev@hexatech.id
  Telepon Darurat : [Nomor Belum Ditambahkan]
  =============================================================
  ```

---

### TUGAS 3: MANAJEMEN ANTREAN LAYANAN DENGAN TYPE PROMOTION (TANTANGAN KREATIF)
* **Lokasi File:** `04_fungsi_dan_null_safety/tugas/tugas9_sistem_antrean_service.dart`
* **Instruksi:** 
  Rancang simulasi penanganan loket antrean service dengan validasi null bertingkat:
  1. Diberikan daftar tiket antrean: `List<Map<String, String?>> antrean = [...]`:
     - Tiket 1: `{"nomor": "A01", "nama": "Dewi", "keluhan": "Layar Blank"}`
     - Tiket 2: `{"nomor": "A02", "nama": "Fahri", "keluhan": null}`
     - Tiket 3: `{"nomor": "A03", "nama": null, "keluhan": "Baterai Drop"}`
  2. Buat fungsi pemroses tiket:
     - Jika nama bernilai `null`, tandai sebagai `"Pelanggan Anonim"`.
     - Jika keluhan bernilai `null`, lewati pengecekan teknisi dan cetak status `[DIARAHKAN KE CUSTOMER SERVICE UNTUK KONSULTASI]`.
     - Jika data lengkap, cetak tiket terkonfirmasi dengan jumlah karakter keluhan.
* **Ekspektasi Output:**
  ```text
  =============================================================
                   SISTEM DISPATCHER SERVICE
  =============================================================
  [DIPROSES] Tiket: A01 | Pelanggan: Dewi
             Keluhan: Layar Blank (11 karakter) -> Teknisi Ditugaskan.

  [KONSUL]   Tiket: A02 | Pelanggan: Fahri
             Keluhan Tidak Tertera -> Diarahkan ke Customer Service.

  [DIPROSES] Tiket: A03 | Pelanggan: Pelanggan Anonim
             Keluhan: Baterai Drop (12 karakter) -> Teknisi Ditugaskan.
  =============================================================
  ```

---

## 5. RUBRIK PENILAIAN MANDIRI

| Komponen Penilaian | Tingkat | Kriteria Keberhasilan | Status |
| :--- | :--- | :--- | :--- |
| **Pemahaman Nullable Type** | Dasar | Tepat dalam menentukan kapan variabel harus diberi tanda `?` dan kapan non-nullable | [ ] |
| **Penggunaan Operator Null-Aware** | Terapan | Mampu memanfaatkan gabungan `?.` dan `??` untuk menghindari eksepsi crash | [ ] |
| **Penerapan Type Promotion** | Tantangan | Memanfaatkan branching pengecekan null untuk membuka proteksi compiler secara bersih | [ ] |
| **Pencegahan Penyalahgunaan Bang (!)** | Umum | Tidak menggunakan operator `!` secara sembarangan tanpa pengecekan kepastian nilai | [ ] |

---

## KESIMPULAN

Sound Null Safety adalah jaminan mutu kode Anda. Dengan menguasai konsep non-nullable, operator `?.`, `??`, serta kata kunci `late` dan *type promotion*, aplikasi yang Anda bangun akan bebas dari bug *runtime crash* tak terduga.

Selamat! Anda telah menuntaskan seluruh **Modul 04: Fungsi & Null Safety**. Pada modul berikutnya, kita akan menyelami pilar utama rekayasa perangkat lunak berskala besar: **Modul 05: Object-Oriented Programming (Class, Encapsulation, Inheritance, Mixins)**!