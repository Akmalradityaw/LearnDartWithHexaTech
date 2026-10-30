# PERULANGAN (FOR, WHILE, DO-WHILE & LOOP CONTROL)

Perulangan (*looping*) adalah struktur kontrol yang mengeksekusi satu atau beberapa baris instruksi secara berulang-ulang selama suatu kondisi terpenuhi. Tanpa perulangan, Anda harus menulis baris kode yang sama berulang kali untuk memproses data dalam jumlah besar.

---

## POHON MATERI & STRUKTUR FOLDER KERJA

Lanjutkan eksplorasi Anda pada folder kerja `03_alur_kontrol/` dengan membuat file-file latihan berikut:

```text
belajar_dart_hexatech/
└── 03_alur_kontrol/
    ├── 04_perulangan_for.dart
    ├── 05_perulangan_while_control.dart
    └── tugas/
        ├── tugas4_tabel_perkalian.dart     [Tingkat Dasar]
        ├── tugas5_pola_segitiga.dart       [Tingkat Terapan]
        └── tugas6_simulasi_atm.dart        [Tantangan Kreatif]
```

> **Petunjuk Kerja:**  
> Buka VS Code di folder proyek Anda, pastikan Anda berada di direktori `03_alur_kontrol/`, lalu ikuti setiap cabang materi berikut.

---

## CABANG 1: FOR LOOP TRADISIONAL, FOR-IN & FOREACH {#cabang-1-for-loop}

Struktur `for` loop digunakan ketika jumlah perulangan atau rentang iterasi **sudah dapat diketahui secara pasti** sebelum perulangan dimulai.

### 1. Anatomi For Tradisional (`for (init; kondisi; step)`)
* **Inisialisasi (`int i = 1`)**: Dijalankan tepat satu kali di awal sebelum iterasi pertama.
* **Kondisi Penghenti (`i <= 5`)**: Diperiksa sebelum setiap iterasi dimulai. Jika bernilai `false`, loop langsung selesai.
* **Langkah / Step (`i++` atau `i += 2`)**: Dijalankan di akhir setiap iterasi untuk memperbarui variabel kontrol.

### 2. For-In Loop
Digunakan untuk menelusuri setiap elemen di dalam koleksi data secara berurutan dan elegan tanpa memerlukan variabel indeks manual.

Buat file baru: `03_alur_kontrol/04_perulangan_for.dart`, lalu ketik kode berikut:

```dart
// File: 03_alur_kontrol/04_perulangan_for.dart
void main() {
  // 1. For Loop Standar (Increment)
  print("=== FOR LOOP STANDAR (1 SAMPAI 5) ===");
  for (int i = 1; i <= 5; i++) {
    print("Iterasi ke-$i: Belajar Dart di HexaTech");
  }

  // 2. For Loop Mundur (Decrement & Custom Step)
  print("\n=== HITUNG MUNDUR (STEP 2) ===");
  for (int detik = 10; detik >= 0; detik -= 2) {
    print("Tersisa: $detik detik...");
  }

  // 3. For-In Loop Menelusuri Daftar Data
  print("\n=== ITERASI LIST DATA DENGAN FOR-IN ===");
  List<String> daftarTeknologi = ["Flutter", "Dart", "Firebase", "WebAssembly"];
  
  for (String teknologi in daftarTeknologi) {
    print("Materi Unggulan: $teknologi");
  }

  // 4. Akumulasi Nilai dalam Perulangan
  int totalPenjumlahan = 0;
  for (int angka = 1; angka <= 10; angka++) {
    totalPenjumlahan += angka;
  }
  print("\nHasil Jumlah 1 sampai 10: $totalPenjumlahan");
}
```

### Cara Menjalankan di Terminal:
```bash
dart run 03_alur_kontrol/04_perulangan_for.dart
```

**Ekspektasi Output Konsol:**
```text
=== FOR LOOP STANDAR (1 SAMPAI 5) ===
Iterasi ke-1: Belajar Dart di HexaTech
Iterasi ke-2: Belajar Dart di HexaTech
Iterasi ke-3: Belajar Dart di HexaTech
Iterasi ke-4: Belajar Dart di HexaTech
Iterasi ke-5: Belajar Dart di HexaTech

=== HITUNG MUNDUR (STEP 2) ===
Tersisa: 10 detik...
Tersisa: 8 detik...
Tersisa: 6 detik...
Tersisa: 4 detik...
Tersisa: 2 detik...
Tersisa: 0 detik...

=== ITERASI LIST DATA DENGAN FOR-IN ===
Materi Unggulan: Flutter
Materi Unggulan: Dart
Materi Unggulan: Firebase
Materi Unggulan: WebAssembly

Hasil Jumlah 1 sampai 10: 55
```

---

## CABANG 2: WHILE, DO-WHILE & KONTROL LOOP (BREAK & CONTINUE) {#cabang-2-while-control}

Struktur `while` digunakan ketika Anda **belum tahu berapa kali perulangan akan berjalan**, tetapi Anda mengetahui **kondisi kapan perulangan harus berhenti**.

### 1. Perbedaan Mendasar `while` vs `do-while`
* **`while`**: Kondisi diperiksa di **AWAL**. Jika kondisi mula-mula bernilai `false`, blok kode **tidak akan pernah dieksekusi sama sekali**.
* **`do-while`**: Kondisi diperiksa di **AKHIR**. Blok kode **dijamin dieksekusi minimal satu kali** terlepas dari kondisi awalnya.

### 2. Kata Kunci Pengendali: `break` & `continue`
* **`break`**: Menghentikan perulangan secara instan dan keluar dari blok perulangan tersebut sepenuhnya.
* **`continue`**: Menghentikan putaran saat ini dan langsung melompat ke putaran berikutnya tanpa menyelesaikan sisa baris di bawahnya.

Buat file kedua: `03_alur_kontrol/05_perulangan_while_control.dart`:

```dart
// File: 03_alur_kontrol/05_perulangan_while_control.dart
void main() {
  // 1. Penggunaan While Loop
  print("=== SIMULASI DAYA BATERAI (WHILE) ===");
  int dayaBaterai = 3;
  while (dayaBaterai > 0) {
    print("Aplikasi Aktif... Sisa Baterai: $dayaBaterai%");
    dayaBaterai--; // Wajib diperbarui agar tidak infinite loop!
  }
  print("Baterai Habis: Perangkat Dimatikan Otomatis.");

  // 2. Penggunaan Do-While Loop
  print("\n=== EKSPERIMEN MINIMAL 1 KALI (DO-WHILE) ===");
  int skorAwal = 100;
  do {
    print("Baris ini PASTI dieksekusi meskipun skorAwal ($skorAwal) > 50!");
    skorAwal++;
  } while (skorAwal < 50);

  // 3. Manipulasi Alur dengan Break dan Continue
  print("\n=== KONTROL ITERASI (BREAK & CONTINUE) ===");
  print("Menampilkan bilangan ganjil antara 1 s.d. 10 (Berhenti di angka 7):");

  for (int angka = 1; angka <= 10; angka++) {
    // Lewati bilangan genap (Continue)
    if (angka % 2 == 0) {
      continue; 
    }

    // Berhenti paksa jika mencapai angka 7 (Break)
    if (angka == 7) {
      print("[BREAK] Batas angka 7 tercapai, perulangan dihentikan paksa.");
      break;
    }

    print("Angka Ganjil Valid: $angka");
  }
}
```

### Cara Menjalankan di Terminal:
```bash
dart run 03_alur_kontrol/05_perulangan_while_control.dart
```

**Ekspektasi Output Konsol:**
```text
=== SIMULASI DAYA BATERAI (WHILE) ===
Aplikasi Aktif... Sisa Baterai: 3%
Aplikasi Aktif... Sisa Baterai: 2%
Aplikasi Aktif... Sisa Baterai: 1%
Baterai Habis: Perangkat Dimatikan Otomatis.

=== EKSPERIMEN MINIMAL 1 KALI (DO-WHILE) ===
Baris ini PASTI dieksekusi meskipun skorAwal (100) > 50!

=== KONTROL ITERASI (BREAK & CONTINUE) ===
Menampilkan bilangan ganjil antara 1 s.d. 10 (Berhenti di angka 7):
Angka Ganjil Valid: 1
Angka Ganjil Valid: 3
Angka Ganjil Valid: 5
[BREAK] Batas angka 7 tercapai, perulangan dihentikan paksa.
```

---

## CABANG 3: TUGAS MANDIRI TERSTRUKTUR (3 LEVEL) {#cabang-tugas-mandiri}

Selesaikan 3 tugas bertingkat berikut untuk menguji kemahiran algoritma perulangan Anda di folder:

```text
03_alur_kontrol/tugas/
```

---

### TUGAS 1: GENERATOR TABEL PERKALIAN MATEMATIKA (TINGKAT: DASAR)
* **Lokasi File:** `03_alur_kontrol/tugas/tugas4_tabel_perkalian.dart`
* **Instruksi:** 
  1. Deklarasikan variabel `int angkaDasar = 7;` dan `int batasPerkalian = 10;`.
  2. Gunakan `for` loop untuk mencetak tabel perkalian dari 1 hingga 10 secara teratur.
  3. Format setiap baris dengan teks: `7 x 1 = 7`.
* **Ekspektasi Output:**
  ```text
  =========================================
            TABEL PERKALIAN ANGKA 7
  =========================================
  7 x 1  = 7
  7 x 2  = 14
  7 x 3  = 21
  7 x 4  = 28
  7 x 5  = 35
  7 x 6  = 42
  7 x 7  = 49
  7 x 8  = 56
  7 x 9  = 63
  7 x 10 = 70
  =========================================
  ```

---

### TUGAS 2: PEMBENTUK POLA SEGITIGA ANGKA BERSARANG (TINGKAT: TERAPAN)
* **Lokasi File:** `03_alur_kontrol/tugas/tugas5_pola_segitiga.dart`
* **Instruksi:** 
  1. Deklarasikan variabel `int tinggiPiramida = 5;`.
  2. Gunakan perulangan bersarang (*nested loop*):
     - Loop luar mengontrol baris (1 sampai `tinggiPiramida`).
     - Loop dalam mengontrol pencetakan karakter pada baris tersebut.
  3. Cetak pola segitiga siku-siku angka seperti contoh output di bawah.
* **Ekspektasi Output:**
  ```text
  =========================================
             POLA SEGITIGA ANGKA
  =========================================
  1
  1 2
  1 2 3
  1 2 3 4
  1 2 3 4 5
  =========================================
  ```

---

### TUGAS 3: SIMULASI TRANSAKSI ATM BERULANG (TANTANGAN KREATIF)
* **Lokasi File:** `03_alur_kontrol/tugas/tugas6_simulasi_atm.dart`
* **Instruksi:** 
  Rancang simulasi penarikan saldo ATM menggunakan kombinasi `while` loop, `if-else`, dan `break`:
  1. Saldo awal nasabah: `double saldoRekening = 1000000.0;` (Rp 1.000.000).
  2. Daftar antrean penarikan dana: `List<double> antreanTarik = [200000.0, 500000.0, 400000.0, 100000.0];`.
  3. Gunakan loop untuk memproses penarikan satu per satu:
     - Jika saldo mencukupi, kurangi saldo dan cetak status penarikan berhasil.
     - Jika penarikan menyebabkan saldo di bawah batas minimum (misal Rp 50.000), cetak pesan penolakan dan gunakan `continue` atau `break`.
     - Tampilkan sisa saldo akhir setelah seluruh antrean selesai diproses.
* **Ekspektasi Output:**
  ```text
  ==============================================
               SIMULATOR ATM HEXATECH
  ==============================================
  Saldo Pembukaan    : Rp 1000000.0
  ----------------------------------------------
  [PROSES] Tarik Rp 200000.0 -> Sukses! Sisa: Rp 800000.0
  [PROSES] Tarik Rp 500000.0 -> Sukses! Sisa: Rp 300000.0
  [DITOLAK] Tarik Rp 400000.0 Gagal: Saldo tidak mencukupi!
  [PROSES] Tarik Rp 100000.0 -> Sukses! Sisa: Rp 200000.0
  ----------------------------------------------
  SALDO AKHIR REKENING: Rp 200000.0
  ==============================================
  ```

---

## 4. RUBRIK PENILAIAN MANDIRI

| Komponen Penilaian | Tingkat | Kriteria Keberhasilan | Status |
| :--- | :--- | :--- | :--- |
| **Kontrol Indeks Iterasi** | Dasar | Inisialisasi loop, kondisi terminasi, dan langkah iterasi akurat tanpa *off-by-one error* | [ ] |
| **Nested Loop Algoritma** | Terapan | Mampu memanfaatkan perulangan bersarang untuk membangun struktur visual data | [ ] |
| **Penanganan State & Loop Break** | Tantangan | Simulasi transaksi berhenti secara teratur saat kondisi penarikan tidak memenuhi syarat saldo | [ ] |
| **Pencegahan Infinite Loop** | Umum | Seluruh variabel penguji kondisi selalu diperbarui di dalam blok loop | [ ] |

---

## KESIMPULAN

Perulangan adalah motor penggerak otomatisasi dalam pemrograman. Menguasai kapan harus menggunakan `for`, `while`, serta mengendalikan laju eksekusi menggunakan `break` dan `continue` adalah keterampilan krusial sebelum Anda mengolah struktur data pada modul berikutnya: **Koleksi (List, Set, Map)**!