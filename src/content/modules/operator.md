# OPERATOR PADA DART

Operator adalah simbol khusus yang digunakan untuk melakukan operasi matematika, komparasi perbandingan, maupun evaluasi logika pada satu atau lebih data (*operands*). Di modul ini, kita akan mempelajari seluruh kelompok operator penting di Dart dan cara menerapkannya dalam studi kasus nyata.

---

## POHON MATERI & STRUKTUR FOLDER KERJA

Berikut adalah peta percabangan materi dan file latihan di dalam folder `02_fondasi_sintaksis/`:

```text
belajar_dart_hexatech/
└── 02_fondasi_sintaksis/
    ├── 06_operator_aritmatika_logika.dart
    ├── 07_operator_relasional_penugasan.dart
    └── tugas/
        ├── tugas7_kalkulator_bmi.dart        [Tingkat Dasar]
        ├── tugas8_validasi_kelulusan.dart    [Tingkat Terapan]
        └── tugas9_simulasi_atm_mini.dart     [Tantangan Kreatif]
```

---

## CABANG 1: OPERATOR ARITMATIKA & LOGIKA {#cabang-1-aritmatika-logika}

### 1. Operator Aritmatika
Dart mendukung seluruh operasi matematika standar. Salah satu fitur unik Dart adalah **pembagian integer** (`~/`) yang membuang nilai desimal secara instan:
* `+` : Penjumlahan
* `-` : Pengurangan
* `*` : Perkalian
* `/` : Pembagian menghasilkan `double`
* `~/` : Pembagian bulat (*Truncating Division*), menghasilkan `int`
* `%` : Modulo (sisa hasil bagi)

### 2. Operator Logika (*Boolean Logic*)
* `&&` (AND) : Bernilai `true` HANYA jika kedua kondisi `true`.
* `||` (OR)  : Bernilai `true` jika SALAH SATU kondisi `true`.
* `!`  (NOT) : Membalikkan kondisi boolean (`!true` menjadi `false`).

Buatlah file baru: `02_fondasi_sintaksis/06_operator_aritmatika_logika.dart`:

```dart
// File: 02_fondasi_sintaksis/06_operator_aritmatika_logika.dart
void main() {
  // 1. Operasi Aritmatika
  int a = 17;
  int b = 5;

  print("=== OPERATOR ARITMATIKA ===");
  print("a = $a, b = $b");
  print("Penjumlahan (a + b)  : ${a + b}");
  print("Pengurangan (a - b)  : ${a - b}");
  print("Perkalian   (a * b)  : ${a * b}");
  print("Pembagian   (a / b)  : ${a / b}"); // Menghasilkan double 3.4
  print("Bagi Bulat  (a ~/ b) : ${a ~/ b}"); // Menghasilkan int 3
  print("Sisa Bagi   (a % b)  : ${a % b}"); // 17 dibagi 5 sisa 2

  // 2. Operasi Logika
  bool punyaTiket = true;
  bool sudahVaksin = false;
  bool isVIP = true;

  print("\n=== OPERATOR LOGIKA ===");
  // Syarat masuk: Punya tiket DAN sudah vaksin
  bool bolehMasukBiasa = punyaTiket && sudahVaksin;
  // Syarat masuk VIP: Punya tiket DAN (sudah vaksin ATAU tamu VIP)
  bool bolehMasukVIP = punyaTiket && (sudahVaksin || isVIP);

  print("Izin Masuk Reguler (&&) : $bolehMasukBiasa");
  print("Izin Masuk VIP     (||) : $bolehMasukVIP");
  print("Status Kebalikan   (!)  : ${!punyaTiket}");
}
```

### Cara Menjalankan di Terminal:
```bash
dart run 02_fondasi_sintaksis/06_operator_aritmatika_logika.dart
```

**Ekspektasi Output Konsol:**
```text
=== OPERATOR ARITMATIKA ===
a = 17, b = 5
Penjumlahan (a + b)  : 22
Pengurangan (a - b)  : 12
Perkalian   (a * b)  : 85
Pembagian   (a / b)  : 3.4
Bagi Bulat  (a ~/ b) : 3
Sisa Bagi   (a % b)  : 2

=== OPERATOR LOGIKA ===
Izin Masuk Reguler (&&) : false
Izin Masuk VIP     (||) : true
Status Kebalikan   (!)  : false
```

---

## CABANG 2: OPERATOR RELASIONAL & PENUGASAN (ASSIGNMENT) {#cabang-2-perbandingan-increment}

### 1. Operator Relasional (Perbandingan)
Operator ini membandingkan dua nilai dan selalu menghasilkan `bool` (`true` atau `false`):
* `==` (Sama dengan)
* `!=` (Tidak sama dengan)
* `>`  (Lebih besar dari)
* `<`  (Lebih kecil dari)
* `>=` (Lebih besar atau sama dengan)
* `<=` (Lebih kecil atau sama dengan)

### 2. Operator Penugasan & Increment/Decrement
* `+=`, `-=`, `*=`, `/=` : Menyingkat penambahan/pengurangan nilai variabel (`x += 5` sama dengan `x = x + 5`).
* `++` : Menambah nilai 1 (`x++`).
* `--` : Mengurangi nilai 1 (`x--`).

Buatlah file kedua: `02_fondasi_sintaksis/07_operator_relasional_penugasan.dart`:

```dart
// File: 02_fondasi_sintaksis/07_operator_relasional_penugasan.dart
void main() {
  // 1. Operator Perbandingan
  int nilaiUjian = 85;
  int kkm = 75;

  print("=== OPERATOR PERBANDINGAN ===");
  print("Nilai: $nilaiUjian, KKM: $kkm");
  print("Apakah Lulus? (nilai >= kkm) : ${nilaiUjian >= kkm}");
  print("Nilai Sempurna? (nilai == 100): ${nilaiUjian == 100}");
  print("Remedial? (nilai < kkm)      : ${nilaiUjian < kkm}");

  // 2. Operator Penugasan & Increment
  print("\n=== OPERATOR PENUGASAN & INCREMENT ===");
  int skorGame = 100;
  print("Skor Awal       : $skorGame");

  skorGame += 50; // skorGame = skorGame + 50
  print("Dapat Koin (+50): $skorGame");

  skorGame *= 2; // Bonus Double Score!
  print("Double Score (*2): $skorGame");

  skorGame++; // Naik 1 poin
  print("Bonus 1 Poin (++) : $skorGame");
}
```

### Cara Menjalankan di Terminal:
```bash
dart run 02_fondasi_sintaksis/07_operator_relasional_penugasan.dart
```

**Ekspektasi Output Konsol:**
```text
=== OPERATOR PERBANDINGAN ===
Nilai: 85, KKM: 75
Apakah Lulus? (nilai >= kkm) : true
Nilai Sempurna? (nilai == 100): false
Remedial? (nilai < kkm)      : false

=== OPERATOR PENUGASAN & INCREMENT ===
Skor Awal       : 100
Dapat Koin (+50): 150
Double Score (*2): 300
Bonus 1 Poin (++) : 301
```

---

## CABANG 3: TUGAS MANDIRI TERSTRUKTUR (3 LEVEL) {#cabang-tugas-mandiri}

Masuk ke folder `02_fondasi_sintaksis/tugas/` dan selesaikan 3 tugas bertingkat berikut:

---

### TUGAS 1: KALKULATOR BODY MASS INDEX (BMI) (TINGKAT: DASAR)
* **Lokasi File:** `02_fondasi_sintaksis/tugas/tugas7_kalkulator_bmi.dart`
* **Instruksi:** 
  Buat program penghitung indeks massa tubuh (BMI):
  - Deklarasikan variabel berat badan dalam kilogram: `double beratBadan = 70.0;`.
  - Deklarasikan variabel tinggi badan dalam meter: `double tinggiBadan = 1.75;`.
  - Hitung BMI dengan rumus: `beratBadan / (tinggiBadan * tinggiBadan)`.
  - Periksa apakah berat badan tergolong ideal (`bmi >= 18.5 && bmi <= 24.9`).
  - Cetak hasil BMI dengan 2 desimal (`.toStringAsFixed(2)`).
* **Ekspektasi Output:**
  ```text
  ===========================================
             KALKULATOR BMI DART
  ===========================================
  Berat Badan : 70.0 kg
  Tinggi Badan: 1.75 m
  Nilai BMI   : 22.86
  Status Ideal: true
  ===========================================
  ```

---

### TUGAS 2: VALIDASI SYARAT KELULUSAN BEASISWA (TINGKAT: TERAPAN)
* **Lokasi File:** `02_fondasi_sintaksis/tugas/tugas8_validasi_kelulusan.dart`
* **Instruksi:** 
  Gunakan kombinasi operator logika (`&&`, `||`, `!`) dan relasional untuk menentukan kelayakan beasiswa:
  - Deklarasikan variabel: `double ipk = 3.65;`, `int skorToefl = 510;`, `int poinPrestasi = 2;`, `bool adaCatatanPelanggaran = false;`.
  - Kriteria Kelulusan:
    1. IPK minimal 3.50 (`ipk >= 3.50`).
    2. DAN (Skor TOEFL minimal 500 ATAU Poin Prestasi minimal 3).
    3. DAN TIDAK ada catatan pelanggaran (`!adaCatatanPelanggaran`).
  - Cetak rincian verifikasi ke konsol.
* **Ekspektasi Output:**
  ```text
  --------------------------------------------------
          SISTEM VERIFIKASI SELEKSI BEASISWA
  --------------------------------------------------
  IPK Mahasiswa     : 3.65 (Syarat: >= 3.50)
  Skor TOEFL        : 510  (Syarat: >= 500)
  Poin Prestasi     : 2    (Syarat Tambahan: >= 3)
  Pelanggaran Moral : false
  --------------------------------------------------
  Hasil Seleksi Akhir Lolos Beasiswa: true
  --------------------------------------------------
  ```

---

### TUGAS 3: SIMULASI PENARIKAN ATM & PECAHAN UANG (TINGKAT: TANTANGAN KREATIF)
* **Lokasi File:** `02_fondasi_sintaksis/tugas/tugas9_simulasi_atm_mini.dart`
* **Instruksi:** 
  Gunakan operator pembagian bulat (`~/`) dan modulo (`%`) untuk memecah uang penarikan:
  - Saldo awal: `int saldoRekening = 1500000;`.
  - Jumlah penarikan tunai: `int jumlahTarik = 780000;`.
  - Hitung sisa saldo setelah ditarik.
  - Pecah nominal penarikan tersebut menjadi:
    1. Berapa lembar pecahan Rp 100.000? (gunakan `jumlahTarik ~/ 100000`)
    2. Sisa uang setelah pecahan 100k dihitung dengan modulo `% 100000`.
    3. Dari sisa tersebut, berapa lembar pecahan Rp 50.000? (gunakan `sisa ~/ 50000`)
    4. Sisa uang setelah pecahan 50k dihitung dengan modulo `% 50000`.
    5. Dari sisa tersebut, berapa lembar pecahan Rp 20.000?
  - Cetak struk rincian penarikan uang ke konsol.
* **Ekspektasi Output:**
  ```text
  **************************************************
                 HEXABANK ATM SERVICES
  **************************************************
  Saldo Awal Rekening     : Rp 1.500.000
  Total Uang Ditarik      : Rp 780.000
  Sisa Saldo Rekening     : Rp 720.000
  --------------------------------------------------
  RINCIAN LEMBAR UANG KELUAR:
  - Pecahan Rp 100.000    : 7 Lembar
  - Pecahan Rp 50.000     : 1 Lembar
  - Pecahan Rp 20.000     : 1 Lembar
  **************************************************
         "Simpan Resi Ini Sebagai Bukti Sah"
  **************************************************
  ```

---

## 4. RUBRIK PENILAIAN MANDIRI

| Kriteria Evaluasi | Target Capaian Lulus | Catatan Evaluasi |
| :--- | :--- | :--- |
| **Penyimpanan File** | Tersimpan di `02_fondasi_sintaksis/tugas/` | Format nama file tepat |
| **Ketepatan Aritmatika** | Paham perbedaan pembagian `/` vs `~/` vs `%` | Tidak ada salah logika perhitungan pecahan |
| **Logika Boolean** | Kombinasi kurung `( ... )`, `&&`, dan `||` tepat sasaran | Logika seleksi berjalan sesuai aturan |
| **Eksekusi Bebas Bug** | Kode berhasil dieksekusi via `dart run ...` | Tidak ada error pembagian dengan nol |

---

## KESIMPULAN

Selamat! Anda telah menyelesaikan seluruh materi di **Modul 02: Fondasi Sintaksis**. Anda kini menguasai variabel, konstanta, tipe data angka/string/boolean/parsing, serta seluruh operator esensial di Dart.

Pada modul berikutnya: **Modul 03: Alur Kontrol**, kita akan mempelajari pengambilan keputusan logis melalui percabangan (`if-else`, `switch`) dan perulangan (*loops*)!