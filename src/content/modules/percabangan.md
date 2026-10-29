# PERCABANGAN (IF-ELSE, SWITCH & PATTERN MATCHING)

Percabangan (*conditional control flow*) adalah mekanisme fundamental dalam pemrograman yang memungkinkan aplikasi mengambil keputusan, memilih jalur eksekusi tertentu, dan merespons kondisi data secara dinamis. Di dalam bahasa Dart, percabangan berevolusi dari konstruksi klasik `if-else` dan `switch-case` hingga ekspresi modern *Pattern Matching* di Dart 3.

---

## POHON MATERI & STRUKTUR FOLDER KERJA

Sebelum menulis kode latihan, siapkan folder baru untuk modul ini di dalam proyek Anda: `03_alur_kontrol/`. Berikut adalah peta alur file yang akan kita buat:

```text
belajar_dart_hexatech/
└── 03_alur_kontrol/
    ├── 01_percabangan_if_else.dart
    ├── 02_ternary_dan_guard.dart
    ├── 03_switch_case_pattern.dart
    └── tugas/
        ├── tugas1_evaluasi_nilai.dart      [Tingkat Dasar]
        ├── tugas2_tarif_parkir.dart        [Tingkat Terapan]
        └── tugas3_sistem_kasir.dart        [Tantangan Kreatif]
```

> **Petunjuk Kerja:**  
> Buka VS Code di folder proyek Anda, buat folder `03_alur_kontrol/`, lalu kerjakan setiap cabang materi di bawah ini langkah demi langkah.

---

## CABANG 1: IF, ELSE IF, ELSE & LOGICAL SHORT-CIRCUITING {#cabang-1-if-else}

Struktur `if-else` mengevaluasi ekspresi bernilai `bool` (`true` atau `false`). Dart adalah bahasa *Sound Type*, artinya kondisi di dalam `if (...)` **wajib** menghasilkan nilai boolean murni, bukan angka `0`/`1` atau objek seperti pada JavaScript.

### 1. Karakteristik Evaluasi Kondisi
* **`if`**: Dieksekusi jika kondisi bernilai `true`.
* **`else if`**: Kondisi alternatif berikutnya yang diperiksa secara berurutan hanya jika kondisi sebelumnya bernilai `false`.
* **`else`**: Blok pelarian terakhir (*fallback*) jika seluruh kondisi di atasnya tidak terpenuhi.
* **Short-circuit Evaluation**: Pada ekspresi `A && B`, jika `A` sudah bernilai `false`, maka `B` tidak akan dievaluasi. Pada `A || B`, jika `A` bernilai `true`, `B` tidak akan dievaluasi.

Buat file pertama Anda: `03_alur_kontrol/01_percabangan_if_else.dart`, lalu ketik kode berikut:

```dart
// File: 03_alur_kontrol/01_percabangan_if_else.dart
void main() {
  int nilaiUjian = 82;
  int kehadiranPersen = 85;
  bool punyaSuratIzin = false;

  print("=== SISTEM EVALUASI KELULUSAN ===");
  print("Nilai Ujian       : $nilaiUjian");
  print("Kehadiran         : $kehadiranPersen%");
  print("Surat Dokter/Izin : $punyaSuratIzin");

  // Pengecekan Bersarang (Nested If) & Evaluasi Majemuk
  if (kehadiranPersen < 75 && !punyaSuratIzin) {
    print("\nHASIL: TIDAK LULUS (Kehadiran di bawah batas minimum 75%)");
  } else {
    // Evaluasi Tingkat Predikat Nilai
    String predikat;
    if (nilaiUjian >= 90) {
      predikat = "A (Istimewa)";
    } else if (nilaiUjian >= 80) {
      predikat = "B (Sangat Baik)";
    } else if (nilaiUjian >= 70) {
      predikat = "C (Cukup)";
    } else if (nilaiUjian >= 60) {
      predikat = "D (Kurang)";
    } else {
      predikat = "E (Gagal)";
    }

    print("\nHASIL: LULUS BERSYARAT");
    print("Predikat Akademik : $predikat");
  }
}
```

### Cara Menjalankan di Terminal:
```bash
dart run 03_alur_kontrol/01_percabangan_if_else.dart
```

**Ekspektasi Output Konsol:**
```text
=== SISTEM EVALUASI KELULUSAN ===
Nilai Ujian       : 82
Kehadiran         : 85%
Surat Dokter/Izin : false

HASIL: LULUS BERSYARAT
Predikat Akademik : B (Sangat Baik)
```

---

## CABANG 2: TERNARY OPERATOR & GUARD CLAUSE {#cabang-2-ternary-guard}

Dalam penulisan kode modern (terutama saat membangun komponen antarmuka di Flutter), kode yang bersih dan tidak memiliki sarang (*nested*) yang dalam sangat diutamakan.

### 1. Ternary Operator (`kondisi ? nilaiTrue : nilaiFalse`)
Bentuk ekspresi ringkas untuk mengembalikan salah satu dari dua nilai berdasarkan kondisi boolean.

### 2. Null-Coalescing Assignment & Guard Clauses
Alih-alih membungkus seluruh kode di dalam `if-else` yang bertumpuk (*Pyramid of Doom*), kita dapat menggunakan konsep *Guard Clause*: periksa kondisi error/gagal di awal, lalu segera hentikan eksekusi atau kembalikan nilai default.

Buat file kedua: `03_alur_kontrol/02_ternary_dan_guard.dart`:

```dart
// File: 03_alur_kontrol/02_ternary_dan_guard.dart
void main() {
  // 1. Contoh Ternary Operator
  int usiaPengunjung = 19;
  String statusAkses = usiaPengunjung >= 18 
      ? "Akses Diberikan (Dewasa)" 
      : "Akses Ditolak (Di Bawah Umur)";

  print("=== AKSES EVENT (TERNARY) ===");
  print("Usia Pengunjung : $usiaPengunjung tahun");
  print("Status Izin     : $statusAkses");

  // 2. Ternary Bertingkat untuk Format Ringkas (Gunakan Bijak)
  int stokBarang = 0;
  String infoStok = stokBarang > 10 
      ? "Stok Melimpah" 
      : (stokBarang > 0 ? "Stok Menipis" : "Stok Habis");
  print("\nKetersediaan : $infoStok");

  // 3. Simulasi Guard Clause (Pola Validasi Cepat)
  print("\n=== VALIDASI PESANAN (GUARD CLAUSE) ===");
  int jumlahBeli = -3;
  double saldoDompet = 50000.0;
  double hargaSatuan = 20000.0;

  // Guard 1: Validasi kuantitas
  if (jumlahBeli <= 0) {
    print("[ERROR] Transaksi Batal: Jumlah pesanan tidak valid ($jumlahBeli)");
    return; // Berhenti mengeksekusi sisa blok main
  }

  double totalBiaya = jumlahBeli * hargaSatuan;

  // Guard 2: Validasi saldo
  if (saldoDompet < totalBiaya) {
    print("[ERROR] Transaksi Batal: Saldo tidak cukup (Kurang Rp ${totalBiaya - saldoDompet})");
    return;
  }

  // Jalur Sukses (Happy Path)
  saldoDompet -= totalBiaya;
  print("[SUKSES] Pembelian berhasil! Sisa saldo: Rp $saldoDompet");
}
```

### Cara Menjalankan di Terminal:
```bash
dart run 03_alur_kontrol/02_ternary_dan_guard.dart
```

**Ekspektasi Output Konsol:**
```text
=== AKSES EVENT (TERNARY) ===
Usia Pengunjung : 19 tahun
Status Izin     : Akses Diberikan (Dewasa)

Ketersediaan : Stok Habis

=== VALIDASI PESANAN (GUARD CLAUSE) ===
[ERROR] Transaksi Batal: Jumlah pesanan tidak valid (-3)
```

---

## CABANG 3: SWITCH CASE & MODERN PATTERN MATCHING {#cabang-3-switch-pattern}

Sejak rilis **Dart 3.0**, sintaks `switch` mengalami lompatan besar. Selain pernyataan `switch` konvensional dengan klausa `break`, kini Anda dapat menggunakan **Switch Expression** dan **Relational Patterns** yang membuat kode jauh lebih ringkas, aman, dan deklaratif.

### Perbandingan Switch Tradisional vs Modern

| Aspek | Switch Statement (Tradisional) | Switch Expression (Dart 3+) |
| :--- | :--- | :--- |
| **Bentuk** | Pernyataan blok kode bertingkat | Ekspresi yang menghasilkan nilai langsung |
| **Kebutuhan `break`** | Wajib ada di setiap `case` agar tidak *fallthrough* | Otomatis berhenti tanpa butuh `break` |
| **Pengecekan Tipe** | Terbatas pada nilai pasti (`equality`) | Mendukung relasi (`>=`, `<`), records, dan pola tipe |
| **Penetapan Nilai** | Memerlukan variabel penampung di luar blok | Dapat langsung ditugaskan (`var x = switch(...)`) |

Buat file ketiga: `03_alur_kontrol/03_switch_case_pattern.dart`:

```dart
// File: 03_alur_kontrol/03_switch_case_pattern.dart
void main() {
  // 1. Switch Statement Tradisional
  String kodePeran = "EDITOR";
  String hakAkses;

  switch (kodePeran) {
    case "ADMIN":
      hakAkses = "Akses Penuh (Baca, Tulis, Hapus)";
      break;
    case "EDITOR":
      hakAkses = "Akses Moderasi (Baca, Tulis)";
      break;
    case "VIEWER":
      hakAkses = "Akses Terbatas (Baca Saja)";
      break;
    default:
      hakAkses = "Tidak Memiliki Hak Akses";
  }

  print("=== SWITCH STATEMENT KLASIK ===");
  print("Role Akun : $kodePeran");
  print("Hak Akses : $hakAkses");

  // 2. Modern Switch Expression & Relational Patterns (Dart 3+)
  int skorPerforma = 88;

  // Ekspresi switch langsung mengembalikan nilai ke variabel kategoriBonus
  var kategoriBonus = switch (skorPerforma) {
    >= 95 => "Bonus 100% (Gold Performer)",
    >= 85 => "Bonus 50% (Silver Performer)",
    >= 75 => "Bonus 25% (Bronze Performer)",
    _ => "Tanpa Bonus (Evaluasi Ulang)", // Underscore (_) berfungsi sebagai default
  };

  print("\n=== MODERN SWITCH EXPRESSION (DART 3) ===");
  print("Skor Kinerja   : $skorPerforma");
  print("Kategori Bonus : $kategoriBonus");
}
```

### Cara Menjalankan di Terminal:
```bash
dart run 03_alur_kontrol/03_switch_case_pattern.dart
```

**Ekspektasi Output Konsol:**
```text
=== SWITCH STATEMENT KLASIK ===
Role Akun : EDITOR
Hak Akses : Akses Moderasi (Baca, Tulis)

=== MODERN SWITCH EXPRESSION (DART 3) ===
Skor Kinerja   : 88
Kategori Bonus : Bonus 50% (Silver Performer)
```

---

## CABANG 4: TUGAS MANDIRI TERSTRUKTUR (3 LEVEL) {#cabang-tugas-mandiri}

Uji pemahaman alur kontrol Anda dengan menyelesaikan 3 tugas bertingkat berikut di dalam sub-folder `03_alur_kontrol/tugas/`:

```text
03_alur_kontrol/tugas/
```

---

### TUGAS 1: EVALUASI NILAI AKADEMIS (TINGKAT: DASAR)
* **Lokasi File:** `03_alur_kontrol/tugas/tugas1_evaluasi_nilai.dart`
* **Instruksi:** 
  Buat program penentu kelulusan mahasiswa:
  1. Deklarasikan variabel `int nilaiAkhir = 78;`.
  2. Gunakan `if-else` untuk menentukan grade:
     - `>= 85`: Grade A
     - `>= 75`: Grade B
     - `>= 65`: Grade C
     - `>= 50`: Grade D
     - Di bawah 50: Grade E
  3. Gunakan ternary operator untuk menentukan status: jika `nilaiAkhir >= 65` maka `"LULUS"`, jika tidak `"TIDAK LULUS"`.
  4. Cetak informasi lengkap ke konsol.
* **Ekspektasi Output:**
  ```text
  =========================================
          LEMBAR EVALUASI NILAI
  =========================================
  Nilai Angka  : 78
  Grade Huruf  : B
  Status Akhir : LULUS
  =========================================
  ```

---

### TUGAS 2: KALKULATOR TARIF PARKIR PROGRESIF (TINGKAT: TERAPAN)
* **Lokasi File:** `03_alur_kontrol/tugas/tugas2_tarif_parkir.dart`
* **Instruksi:** 
  Buat simulasi sistem loket parkir mall dengan aturan bertingkat:
  1. Variabel: `String jenisKendaraan = "MOBIL";` (bisa `"MOTOR"` atau `"MOBIL"`) dan `int durasiJam = 4;`.
  2. Tarif Motor:
     - 2 jam pertama: Rp 3.000 flat.
     - Jam berikutnya: Rp 1.500 per jam.
  3. Tarif Mobil:
     - 2 jam pertama: Rp 6.000 flat.
     - Jam berikutnya: Rp 3.000 per jam.
  4. Jika durasi parkir lebih dari 10 jam, berikan diskon denda menginap sebesar 10% dari total biaya.
  5. Hitung dan cetak struk rincian biaya parkir secara rapi.
* **Ekspektasi Output:**
  ```text
  =========================================
           STRUK TIKET PARKIR MALL
  =========================================
  Jenis Kendaraan : MOBIL
  Durasi Parkir   : 4 Jam
  Tarif Dasar     : Rp 6000
  Tarif Tambahan  : Rp 6000 (2 jam x Rp 3000)
  Total Bayar     : Rp 12000
  =========================================
  ```

---

### TUGAS 3: KASIR OTOMATIS & VOUCHER PROMO (TANTANGAN KREATIF)
* **Lokasi File:** `03_alur_kontrol/tugas/tugas3_sistem_kasir.dart`
* **Instruksi:** 
  Rancang sistem kasir toko ritel modern dengan logika diskon multi-kondisi:
  1. Variabel:
     - `double totalBelanja = 250000.0;`
     - `String tipeMember = "VIP";` (`"NON-MEMBER"`, `"REGULER"`, `"VIP"`)
     - `String kodeKupon = "HEMAT50";`
  2. Aturan Diskon Member:
     - `"VIP"`: Diskon 15% jika belanja di atas Rp 200.000, atau 10% jika di bawah itu.
     - `"REGULER"`: Diskon 5% jika belanja di atas Rp 100.000.
     - `"NON-MEMBER"`: Diskon 0%.
  3. Aturan Tambahan Kupon Promo (gunakan `switch` expression):
     - `"HEMAT50"`: Potongan tetap Rp 50.000 (hanya berlaku jika sisa tagihan setelah diskon member >= Rp 150.000).
     - `"HEMAT20"`: Potongan tetap Rp 20.000.
     - `_` : Tanpa potongan kupon (Rp 0).
  4. Total akhir tidak boleh negatif (minimal Rp 0).
  5. Cetak rincian tagihan kasir dengan detail kalkulasi yang transparan.
* **Ekspektasi Output:**
  ```text
  ==============================================
               TOKO RITEL HEXATECH
  ==============================================
  Total Belanja Awal   : Rp 250000.0
  Tipe Keanggotaan     : VIP (Diskon 15%)
  Potongan Member      : Rp 37500.0
  Subtotal 1           : Rp 212500.0
  Kupon Diterapkan     : HEMAT50 (Potongan Rp 50000.0)
  ----------------------------------------------
  TOTAL AKHIR DIBAYAR  : Rp 162500.0
  ==============================================
  ```

---

## 5. RUBRIK PENILAIAN MANDIRI

Gunakan tabel penilaian ini untuk mengevaluasi hasil pengerjaan file kode Anda secara objektif:

| Komponen Penilaian | Tingkat | Kriteria Keberhasilan | Status |
| :--- | :--- | :--- | :--- |
| **Kebenaran Alur Logika** | Dasar | Struktur `if-else` dan ternary operator menghasilkan output yang konsisten tanpa celah kondisi tak tertangani | [ ] |
| **Manajemen State Variabel** | Terapan | Penanganan kalkulasi tarif progresif benar pada saat durasi di bawah dan di atas batas minimum | [ ] |
| **Penerapan Fitur Modern** | Tantangan | Mengimplementasikan `switch` statement/expression untuk validasi kupon promo tanpa error | [ ] |
| **Keterbacaan & Kebersihan Kode** | Umum | Struktur indentasi rapi, nama variabel deskriptif (`camelCase`), dan tidak ada kode berulang | [ ] |

---

## KESIMPULAN

Percabangan adalah fondasi dari seluruh pengambilan keputusan sistem. Dengan menguasai kombinasi antara `if-else`, ternary operator, dan sintaks ekspresi `switch` modern di Dart 3, Anda kini memiliki bekal logika yang kokoh untuk mengontrol alur program yang kompleks.

Pada topik berikutnya, kita akan mempelajari **Perulangan (For, While, Do-While)** untuk mengotomatisasi pemrosesan data berulang secara efisien!