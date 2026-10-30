# DEKLARASI FUNGSI & PARAMETER

Fungsi (*Function* atau *Method*) adalah blok kode terstruktur yang dirancang untuk menjalankan serangkaian instruksi spesifik secara modular. Dengan memecah logika program ke dalam fungsi-fungsi kecil yang terisolasi, kode menjadi lebih mudah dibaca, diuji (*testable*), dan dapat digunakan kembali (*reusable*) tanpa perlu menulis ulang (*Don't Repeat Yourself - DRY*).

---

## POHON MATERI & STRUKTUR FOLDER KERJA

Siapkan folder materi baru untuk modul ini di dalam proyek Anda: `04_fungsi_dan_null_safety/`. Berikut adalah rancangan struktur file yang akan kita buat:

```text
belajar_dart_hexatech/
└── 04_fungsi_dan_null_safety/
    ├── 01_fungsi_dasar_arrow.dart
    ├── 02_parameter_opsional_named.dart
    └── tugas/
        ├── tugas1_kalkulator_suhu_fungsi.dart [Tingkat Dasar]
        ├── tugas2_sistem_notifikasi.dart       [Tingkat Terapan]
        └── tugas3_generator_invoice.dart       [Tantangan Kreatif]
```

> **Petunjuk Kerja:**  
> Buka VS Code di folder proyek Anda, buat folder `04_fungsi_dan_null_safety/`, lalu ikuti setiap cabang materi berikut secara berurutan.

---

## CABANG 1: SINTAKS FUNGSI DASAR & ARROW SYNTAX {#cabang-1-sintaks-arrow}

Di dalam bahasa Dart, setiap fungsi memiliki **Tipe Nilai Balik** (*return type*). Jika sebuah fungsi tidak mengembalikan nilai apa pun, gunakan tipe `void`. Jika mengembalikan data, deklarasikan tipe data yang bersesuaian (`int`, `String`, `bool`, `double`, dsb).

### 1. Anatomi Deklarasi Fungsi
```dart
TipeKembalian namaFungsi(TipeParameter namaParameter) {
  // Blok instruksi
  return nilaiKembalian;
}
```

### 2. Arrow Syntax (`=>`) / Fat Arrow
Ketika sebuah fungsi hanya memiliki **tepat satu baris ekspresi**, Anda dapat memotong kurung kurawal `{ }` dan kata kunci `return` dengan menggantinya menggunakan operator panah `=>`.

Buat file pertama Anda: `04_fungsi_dan_null_safety/01_fungsi_dasar_arrow.dart`, lalu ketik kode berikut:

```dart
// File: 04_fungsi_dan_null_safety/01_fungsi_dasar_arrow.dart

// 1. Fungsi Prosedural (Tanpa Nilai Balik / void)
void cetakHeaderAplikasi(String namaAplikasi) {
  print("==========================================");
  print("  SISTEM UTAMA: ${namaAplikasi.toUpperCase()}");
  print("==========================================");
}

// 2. Fungsi Klasik dengan Nilai Balik
double hitungLuasPersegiPanjang(double panjang, double lebar) {
  double hasilLuas = panjang * lebar;
  return hasilLuas;
}

// 3. Fungsi Satu Baris dengan Arrow Syntax (=>)
double hitungKelilingPersegiPanjang(double panjang, double lebar) =>
    2 * (panjang + lebar);

bool isBilanganGenap(int angka) => angka % 2 == 0;

void main() {
  cetakHeaderAplikasi("HexaTech Engine");

  double p = 12.0;
  double l = 5.0;

  double luas = hitungLuasPersegiPanjang(p, l);
  double keliling = hitungKelilingPersegiPanjang(p, l);

  print("Dimensi Persegi Panjang : $p m x $l m");
  print("Luas Area               : $luas m2");
  print("Keliling Area           : $keliling m");

  int angkaUji = 14;
  print("\nApakah $angkaUji bilangan genap? ${isBilanganGenap(angkaUji)}");
}
```

### Cara Menjalankan di Terminal:
```bash
dart run 04_fungsi_dan_null_safety/01_fungsi_dasar_arrow.dart
```

**Ekspektasi Output Konsol:**
```text
==========================================
  SISTEM UTAMA: HEXATECH ENGINE
==========================================
Dimensi Persegi Panjang : 12.0 m x 5.0 m
Luas Area               : 60.0 m2
Keliling Area           : 34.0 m

Apakah 14 bilangan genap? true
```

---

## CABANG 2: POSITIONAL, NAMED & DEFAULT PARAMETERS {#cabang-2-positional-named-param}

Parameter fungsi di Dart sangat fleksibel dan terbagi menjadi dua kategori utama:

### 1. Positional Optional Parameters (`[ ]`)
Parameter opsional yang dibungkus dengan kurung siku `[ ]`. Urutan pengisian nilai saat pemanggilan fungsi **harus sesuai dengan posisi urutannya**.

### 2. Named Parameters (`{ }`) - Standar Industri Flutter
Parameter yang dibungkus dengan kurung kurawal `{ }`. Parameter ini memiliki keunggulan luar biasa:
* **Self-documenting**: Nama parameter harus disebutkan saat dipanggil (`nama: "Budi"`), mencegah tertukarnya argumen.
* **Bebas Urutan**: Argumen dapat diletakkan dalam urutan apa pun.
* **Kata Kunci `required`**: Menandai bahwa named parameter tersebut wajib diisi oleh pemanggil.
* **Nilai Default**: Parameter dapat memiliki nilai bawaan jika tidak diisi saat pemanggilan.

Buat file kedua: `04_fungsi_dan_null_safety/02_parameter_opsional_named.dart`:

```dart
// File: 04_fungsi_dan_null_safety/02_parameter_opsional_named.dart

// 1. Fungsi dengan Positional Optional Parameter
String buatKartuIdentitas(String nama, [String? kotaAsal, int tahunLahir = 2000]) {
  String infoKota = kotaAsal != null ? "Kota: $kotaAsal" : "Kota: (Tidak Dicantumkan)";
  return "Profil: $nama | $infoKota | Kelahiran: $tahunLahir";
}

// 2. Fungsi dengan Named Parameters (Paling Sering Digunakan di Flutter)
void registrasiPengguna({
  required String username,
  required String email,
  String role = "MEMBER",
  bool kirimNewsletter = false,
  int levelAwal = 1,
}) {
  print("\n--- DATA PENDAFTARAN BARU ---");
  print("Username    : $username");
  print("Email       : $email");
  print("Hak Akses   : $role");
  print("Level       : $levelAwal");
  print("Newsletter  : ${kirimNewsletter ? "Aktif" : "Non-aktif"}");
}

void main() {
  print("=== POSITIONAL OPTIONAL PARAMETERS ===");
  print(buatKartuIdentitas("Andi"));
  print(buatKartuIdentitas("Siti Nurhaliza", "Surabaya"));
  print(buatKartuIdentitas("Budi Santoso", "Bandung", 1998));

  print("\n=== NAMED PARAMETERS DENGAN DEFAULT VALUE ===");
  // Pemanggilan dengan named parameter: urutan boleh acak!
  registrasiPengguna(
    email: "akmal@hexatech.id",
    username: "akmal_raditya",
    kirimNewsletter: true,
  );

  registrasiPengguna(
    role: "SUPERADMIN",
    username: "chief_dev",
    email: "admin@hexatech.id",
    levelAwal: 99,
  );
}
```

### Cara Menjalankan di Terminal:
```bash
dart run 04_fungsi_dan_null_safety/02_parameter_opsional_named.dart
```

**Ekspektasi Output Konsol:**
```text
=== POSITIONAL OPTIONAL PARAMETERS ===
Profil: Andi | Kota: (Tidak Dicantumkan) | Kelahiran: 2000
Profil: Siti Nurhaliza | Kota: Surabaya | Kelahiran: 2000
Profil: Budi Santoso | Kota: Bandung | Kelahiran: 1998

=== NAMED PARAMETERS DENGAN DEFAULT VALUE ===

--- DATA PENDAFTARAN BARU ---
Username    : akmal_raditya
Email       : akmal@hexatech.id
Hak Akses   : MEMBER
Level       : 1
Newsletter  : Aktif

--- DATA PENDAFTARAN BARU ---
Username    : chief_dev
Email       : admin@hexatech.id
Hak Akses   : SUPERADMIN
Level       : 99
Newsletter  : Non-aktif
```

---

## CABANG 3: TUGAS MANDIRI TERSTRUKTUR (3 LEVEL) {#cabang-tugas-mandiri}

Selesaikan 3 tugas bertingkat berikut di dalam folder tugas:

```text
04_fungsi_dan_null_safety/tugas/
```

---

### TUGAS 1: KONVERSI SKALA SUHU MATEMATIKA (TINGKAT: DASAR)
* **Lokasi File:** `04_fungsi_dan_null_safety/tugas/tugas1_kalkulator_suhu_fungsi.dart`
* **Instruksi:** 
  1. Buat 3 fungsi modular terpisah:
     - `celsiusKeFahrenheit(double c)` (menggunakan arrow syntax `=>`).
     - `celsiusKeKelvin(double c)` (menggunakan arrow syntax `=>`).
     - `cetakLaporanSuhu(double c)` (fungsi `void` yang memanggil kedua fungsi di atas dan mencetak laporan).
  2. Panggil fungsi dari `main()` dengan suhu `30.0` derajat Celsius.
* **Ekspektasi Output:**
  ```text
  =========================================
            LAPORAN KONVERSI SUHU
  =========================================
  Suhu Titik Uji   : 30.0 C
  Skala Fahrenheit : 86.0 F
  Skala Kelvin     : 303.15 K
  =========================================
  ```

---

### TUGAS 2: SISTEM DISPATCH NOTIFIKASI MULTI-KANAL (TINGKAT: TERAPAN)
* **Lokasi File:** `04_fungsi_dan_null_safety/tugas/tugas2_sistem_notifikasi.dart`
* **Instruksi:** 
  1. Buat fungsi `kirimNotifikasi` menggunakan **Named Parameters**:
     - `required String penerima`
     - `required String pesan`
     - `String tipeKanal = "EMAIL"` (bisa `"EMAIL"`, `"SMS"`, atau `"WHATSAPP"`)
     - `int prioritas = 1` (1 = Rendah, 2 = Sedang, 3 = Darurat)
     - `bool isTersandi = false`
  2. Di dalam fungsi, buat format pesan konsol yang berbeda berdasarkan saluran pengiriman (`switch` atau `if-else`).
  3. Panggil fungsi minimal 3 kali dengan variasi kombinasi parameter yang berbeda dari `main()`.
* **Ekspektasi Output:**
  ```text
  =============================================================
                  LOG DISPATCHER NOTIFIKASI
  =============================================================
  [EMAIL] Ke: budi@gmail.com | Prioritas: 1 | Pesan: Tagihan Bulanan
  [SMS] Ke: 08123456789 | Prioritas: 3 | [TERENKRIPSI] | Pesan: Kode OTP: 9812
  [WHATSAPP] Ke: 08987654321 | Prioritas: 2 | Pesan: Pesanan Anda sedang dikirim
  =============================================================
  ```

---

### TUGAS 3: GENERATOR FAKTUR & INVOICE RITEL (TANTANGAN KREATIF)
* **Lokasi File:** `04_fungsi_dan_null_safety/tugas/tugas3_generator_invoice.dart`
* **Instruksi:** 
  Rancang sistem pencetak invoice belanja menggunakan modularisasi fungsi:
  1. Buat fungsi `hitungSubtotal({required double hargaSatuan, required int kuantitas}) => hargaSatuan * kuantitas;`.
  2. Buat fungsi `hitungDiskon({required double subtotal, double persentaseDiskon = 0.0}) => subtotal * (persentaseDiskon / 100);`.
  3. Buat fungsi `hitungPajak({required double totalSetelahDiskon, double tarifPajak = 11.0}) => totalSetelahDiskon * (tarifPajak / 100);`.
  4. Buat fungsi utama `cetakFakturBelanja({...})` yang menerima named parameters dan memanggil ketiga fungsi kalkulasi di atas secara terangkai.
* **Ekspektasi Output:**
  ```text
  =============================================================
                      FAKTUR PENJUALAN TOKO
  =============================================================
  Barang            : Keyboard Mechanical RGB
  Harga Satuan      : Rp 750000.0
  Jumlah Beli       : 2 unit
  Subtotal          : Rp 1500000.0
  Diskon Promo (10%): -Rp 150000.0
  Dasar Pengenaan   : Rp 1350000.0
  PPN (11%)         : +Rp 148500.0
  -------------------------------------------------------------
  TOTAL PEMBAYARAN  : Rp 1498500.0
  =============================================================
  ```

---

## 4. RUBRIK PENILAIAN MANDIRI

| Komponen Penilaian | Tingkat | Kriteria Keberhasilan | Status |
| :--- | :--- | :--- | :--- |
| **Penerapan Arrow Syntax** | Dasar | Mampu menyederhanakan fungsi satu baris menggunakan `=>` secara tepat | [ ] |
| **Pemanfaatan Named Parameters** | Terapan | Mampu mendeklarasikan named parameters dengan kata kunci `required` dan nilai default | [ ] |
| **Dekomposisi Logika Modular** | Tantangan | Fungsi dirancang kecil, memiliki tanggung jawab tunggal (*Single Responsibility*), dan saling terhubung | [ ] |
| **Keterbacaan Signature Fungsi** | Umum | Penamaan parameter deskriptif dan tipe data kembalian dinyatakan secara eksplisit | [ ] |

---

## KESIMPULAN

Fungsi adalah blok bangunan utama dalam setiap arsitektur aplikasi Dart dan Flutter. Dengan menguasai Arrow Syntax, Positional Parameter, dan Named Parameter berfitur `required`, Anda telah memiliki teknik penulisan kode berstandar profesional.

Selanjutnya, kita akan mengeksplorasi **Anonymous Function (Fungsi Tanpa Nama), Lambda & Higher-Order Functions**!