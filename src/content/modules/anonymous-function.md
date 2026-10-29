# ANONYMOUS FUNCTION, LAMBDA & HIGHER-ORDER FUNCTION

Di dalam bahasa Dart, fungsi diperlakukan sebagai **Warga Kelas Satu** (*First-Class Citizens*). Hal ini berarti fungsi dapat disimpan ke dalam variabel, diteruskan sebagai argumen ke fungsi lain, atau dikembalikan dari fungsi sebagai nilai balik. Konsep ini membuka pintu menuju paradigma *Functional Programming* yang sangat dominan dalam pembuatan aplikasi Flutter.

---

## POHON MATERI & STRUKTUR FOLDER KERJA

Lanjutkan penulisan kode Anda pada folder `04_fungsi_dan_null_safety/` dengan menyusun file-file latihan berikut:

```text
belajar_dart_hexatech/
└── 04_fungsi_dan_null_safety/
    ├── 03_anonymous_lambda.dart
    ├── 04_higher_order_closures.dart
    └── tugas/
        ├── tugas4_pemroses_koleksi.dart        [Tingkat Dasar]
        ├── tugas5_filter_dan_transformasi.dart [Tingkat Terapan]
        └── tugas6_pipeline_diskon.dart         [Tantangan Kreatif]
```

> **Petunjuk Kerja:**  
> Buka VS Code di folder proyek Anda, buat file baru di dalam `04_fungsi_dan_null_safety/`, dan jalankan setiap latihan melalui terminal.

---

## CABANG 1: ANONYMOUS FUNCTION & LAMBDA EXPRESSION {#cabang-1-anonymous-lambda}

Sebuah fungsi tidak selalu membutuhkan nama pengenal. Fungsi tanpa nama ini dikenal dengan sebutan **Anonymous Function**, **Lambda**, atau **Function Literal**.

### 1. Karakteristik & Sintaks Dasar
Anonymous function biasanya digunakan untuk tugas ringkas yang hanya dipakai satu kali (*disposable logic*), terutama pada saat memproses koleksi data seperti `forEach`, `map`, atau event tombol.

```dart
(tipeParameter parameter) {
  // Blok instruksi
}
```
Jika hanya berupa ekspresi satu baris, dapat disederhanakan dengan tanda panah:
```dart
(parameter) => ekspresi;
```

Buat file baru: `04_fungsi_dan_null_safety/03_anonymous_lambda.dart`, lalu ketik kode berikut:

```dart
// File: 04_fungsi_dan_null_safety/03_anonymous_lambda.dart
void main() {
  // 1. Menyimpan Anonymous Function ke dalam Variabel
  var pemformatTeks = (String judul, String penulis) {
    return "Buku: '${judul.toUpperCase()}' karya $penulis";
  };

  print("=== FUNGSI DI DALAM VARIABEL ===");
  print(pemformatTeks("Laskar Pelangi", "Andrea Hirata"));
  print(pemformatTeks("Filosofi Teras", "Henry Manampiring"));

  // 2. Anonymous Function Berupa Arrow Syntax
  var pengaliDua = (int angka) => angka * 2;
  print("\nHasil kali dua dari 15: ${pengaliDua(15)}");

  // 3. Penggunaan Langsung pada List (forEach & map)
  print("\n=== ITERASI LIST DENGAN ANONYMOUS FUNCTION ===");
  List<String> daftarKota = ["Jakarta", "Surabaya", "Bandung", "Medan"];

  // forEach menerima fungsi tanpa nama sebagai argumen
  daftarKota.forEach((kota) {
    print("Kota Penyelenggara: $kota (Provinsi)");
  });

  // Transformasi koleksi menggunakan .map()
  List<int> daftarHarga = [10000, 25000, 50000];
  var daftarHargaPPN = daftarHarga.map((harga) => harga * 1.11).toList();

  print("\nHarga Asli : $daftarHarga");
  print("Harga + PPN: $daftarHargaPPN");
}
```

### Cara Menjalankan di Terminal:
```bash
dart run 04_fungsi_dan_null_safety/03_anonymous_lambda.dart
```

**Ekspektasi Output Konsol:**
```text
=== FUNGSI DI DALAM VARIABEL ===
Buku: 'LASKAR PELANGI' karya Andrea Hirata
Buku: 'FILOSOFI TERAS' karya Henry Manampiring

Hasil kali dua dari 15: 30

=== ITERASI LIST DENGAN ANONYMOUS FUNCTION ===
Kota Penyelenggara: Jakarta (Provinsi)
Kota Penyelenggara: Surabaya (Provinsi)
Kota Penyelenggara: Bandung (Provinsi)
Kota Penyelenggara: Medan (Provinsi)

Harga Asli : [10000, 25000, 50000]
Harga + PPN: [11000.0, 27500.0, 55000.0]
```

---

## CABANG 2: HIGHER-ORDER FUNCTION & CLOSURES {#cabang-2-higher-order-closures}

### 1. Higher-Order Function
Adalah fungsi yang:
* Menerima fungsi lain sebagai parameternya, ATAU
* Mengembalikan sebuah fungsi baru sebagai hasil kembaliannya.

### 2. Closure
Adalah fungsi yang dapat "mengingat" dan mengakses variabel-variabel di dalam lingkup leksikalnya (*lexical scope*), bahkan setelah lingkup asalnya selesai dieksekusi.

Buat file kedua: `04_fungsi_dan_null_safety/04_higher_order_closures.dart`:

```dart
// File: 04_fungsi_dan_null_safety/04_higher_order_closures.dart

// 1. Higher-Order Function yang Menerima Fungsi Sebagai Parameter
void prosesMatematika(int a, int b, int Function(int, int) operasi) {
  int hasil = operasi(a, b);
  print("Hasil kalkulasi ($a dan $b) adalah: $hasil");
}

// 2. Higher-Order Function yang Mengembalikan Fungsi (Closure Generator)
Function buatPengali(int faktorPengali) {
  // Fungsi di dalam ini mengingat variabel faktorPengali dari luar (Closure)
  return (int nilai) => nilai * faktorPengali;
}

void main() {
  print("=== HIGHER-ORDER FUNCTION ===");
  // Mengirim fungsi penambahan
  prosesMatematika(10, 5, (x, y) => x + y);

  // Mengirim fungsi perkalian
  prosesMatematika(10, 5, (x, y) => x * y);

  // Mengirim fungsi modulus
  prosesMatematika(10, 3, (x, y) => x % y);

  print("\n=== CLOSURE GENERATOR ===");
  // Membuat mesin pengali khusus
  var kaliTiga = buatPengali(3);
  var kaliSepuluh = buatPengali(10);

  print("4 dikali 3  : ${kaliTiga(4)}");
  print("7 dikali 3  : ${kaliTiga(7)}");
  print("5 dikali 10 : ${kaliSepuluh(5)}");
}
```

### Cara Menjalankan di Terminal:
```bash
dart run 04_fungsi_dan_null_safety/04_higher_order_closures.dart
```

**Ekspektasi Output Konsol:**
```text
=== HIGHER-ORDER FUNCTION ===
Hasil kalkulasi (10 dan 5) adalah: 15
Hasil kalkulasi (10 dan 5) adalah: 50
Hasil kalkulasi (10 dan 3) adalah: 1

=== CLOSURE GENERATOR ===
4 dikali 3  : 12
7 dikali 3  : 21
5 dikali 10 : 50
```

---

## CABANG 3: TUGAS MANDIRI TERSTRUKTUR (3 LEVEL) {#cabang-tugas-mandiri}

Selesaikan 3 tugas bertingkat berikut di sub-folder tugas:

```text
04_fungsi_dan_null_safety/tugas/
```

---

### TUGAS 1: FORMATTER DATA KOLEKSI SISWA (TINGKAT: DASAR)
* **Lokasi File:** `04_fungsi_dan_null_safety/tugas/tugas4_pemroses_koleksi.dart`
* **Instruksi:** 
  1. Diberikan data: `List<String> namaSiswa = ["akmal", "raditya", "wijaya", "budi"];`.
  2. Gunakan method `.map()` dengan anonymous function untuk mengubah seluruh nama menjadi huruf kapital (*uppercase*) dan menambahkan awalan `"SISWA: "`.
  3. Cetak hasil list baru menggunakan `.forEach()` dan arrow syntax.
* **Ekspektasi Output:**
  ```text
  =========================================
            DAFTAR SISWA TERFORMAT
  =========================================
  SISWA: AKMAL
  SISWA: RADITYA
  SISWA: WIJAYA
  SISWA: BUDI
  =========================================
  ```

---

### TUGAS 2: FILTER & TRANSFORMASI NILAI UJIAN (TINGKAT: TERAPAN)
* **Lokasi File:** `04_fungsi_dan_null_safety/tugas/tugas5_filter_dan_transformasi.dart`
* **Instruksi:** 
  1. Diberikan daftar nilai: `List<int> kumpulanNilai = [45, 82, 60, 95, 73, 50, 88];`.
  2. Buat fungsi higher-order generik `saringDanCetak`:
     - Menerima `List<int> data`.
     - Menerima fungsi predikat `bool Function(int) kriteria`.
  3. Gunakan fungsi tersebut untuk menyaring dan mencetak:
     - Kategori 1: Seluruh nilai yang lulus (`nilai >= 70`).
     - Kategori 2: Seluruh nilai yang istimewa (`nilai >= 85`).
* **Ekspektasi Output:**
  ```text
  =========================================
            HASIL PENYARINGAN DATA
  =========================================
  [KATEGORI: LULUS >= 70]
  - Nilai: 82
  - Nilai: 95
  - Nilai: 73
  - Nilai: 88

  [KATEGORI: ISTIMEWA >= 85]
  - Nilai: 95
  - Nilai: 88
  =========================================
  ```

---

### TUGAS 3: PIPELINE KALKULASI PROMO DINAMIS (TANTANGAN KREATIF)
* **Lokasi File:** `04_fungsi_dan_null_safety/tugas/tugas6_pipeline_diskon.dart`
* **Instruksi:** 
  Rancang sistem kalkulasi harga berbasis pipeline closures:
  1. Buat fungsi higher-order `buatKuponDiskon(double persenPotongan)` yang mengembalikan fungsi pengubah harga (`double Function(double)`).
  2. Buat fungsi higher-order `buatBiayaOngkir(double tarifOngkir)` yang mengembalikan fungsi penambah biaya kirim.
  3. Buat fungsi eksekutor `jalankanPipelineHarga(double hargaAwal, List<double Function(double)> langkahKalkulasi)` yang mengeksekusi rangkaian fungsi secara berantai.
  4. Jalankan pipeline untuk menghitung barang seharga Rp 200.000 dengan diskon 20%, potongan tambahan member Rp 15.000, dan ongkir Rp 10.000.
* **Ekspektasi Output:**
  ```text
  ==============================================
             PIPELINE TRANSAKSI TOKO
  ==============================================
  Harga Katalog Awal   : Rp 200000.0
  Setelah Diskon 20%   : Rp 160000.0
  Setelah Kupon Potongan: Rp 145000.0
  Setelah Ongkir Kirim : Rp 155000.0
  ----------------------------------------------
  TOTAL FINAL TAGIHAN  : Rp 155000.0
  ==============================================
  ```

---

## 4. RUBRIK PENILAIAN MANDIRI

| Komponen Penilaian | Tingkat | Kriteria Keberhasilan | Status |
| :--- | :--- | :--- | :--- |
| **Sintaks Lambda & Arrow** | Dasar | Mampu menyusun ekspresi anonymous function pada operasi koleksi (`map`/`forEach`) | [ ] |
| **Higher-Order Function Callback** | Terapan | Mampu merancang fungsi yang menerima closure bertipe spesifik (`Function(T)`) | [ ] |
| **Manajemen State Closure** | Tantangan | Fungsi generator mampu mempertahankan referensi variabel lingkup luar secara independen | [ ] |
| **Ketepatan Tipe Nilai Balik** | Umum | Seluruh fungsi memiliki penulisan *return type* yang konsisten tanpa *type inference mismatch* | [ ] |

---

## KESIMPULAN

Anonymous Function dan Closures memberikan fleksibilitas luar biasa dalam menyusun logika kode yang ringkas dan ekspresif. Pola pemrograman ini adalah inti dari cara kerja arsitektur *Widget Tree*, *Callback Events*, dan *State Management* modern.

Pada sub-bab berikutnya, kita akan membahas salah satu fitur paling revolusioner dalam Dart: **Prinsip Sound Null Safety**!