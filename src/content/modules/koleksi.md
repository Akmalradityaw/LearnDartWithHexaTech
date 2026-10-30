# KOLEKSI (LIST, SET, MAP & MODERN COLLECTION OPERATORS)

Koleksi (*collections*) adalah struktur data dalam bahasa Dart yang digunakan untuk mengelompokkan, mengelola, dan memanipulasi sekumpulan objek atau nilai di dalam satu variabel tunggal. Dart menyediakan tiga tipe koleksi inti yang sangat kaya: **`List`**, **`Set`**, dan **`Map`**, lengkap dengan fitur modern seperti *Spread Operator* dan *Collection-If/For*.

---

## POHON MATERI & STRUKTUR FOLDER KERJA

Selesaikan bab terakhir dari alur kontrol ini dengan membuat file latihan berikut di dalam `03_alur_kontrol/`:

```text
belajar_dart_hexatech/
└── 03_alur_kontrol/
    ├── 06_koleksi_list_spread.dart
    ├── 07_koleksi_set_map.dart
    └── tugas/
        ├── tugas7_manajemen_daftar_belanja.dart [Tingkat Dasar]
        ├── tugas8_koleksi_filter_unik.dart      [Tingkat Terapan]
        └── tugas9_katalog_inventaris.dart       [Tantangan Kreatif]
```

> **Petunjuk Kerja:**  
> Buka VS Code di folder proyek Anda, buat file latihan di bawah ini di dalam `03_alur_kontrol/`, lalu amati hasil kompilasinya melalui terminal.

---

## CABANG 1: LIST, INDEXING & SPREAD OPERATOR {#cabang-1-list-spread}

`List` adalah koleksi terurut (*ordered collection*) di mana setiap elemen memiliki nomor posisi atau indeks yang dimulai dari angka `0`.

### 1. Karakteristik List
* **Zero-based indexing**: Elemen pertama diakses dengan `list[0]`, elemen terakhir dengan `list[list.length - 1]`.
* **Method Utama**: `.add()`, `.addAll()`, `.insert()`, `.remove()`, `.removeAt()`, `.contains()`, `.sort()`.

### 2. Spread Operator (`...` dan `...?`)
Digunakan untuk mengekstrak dan memasukkan seluruh elemen dari satu list ke dalam list lainnya tanpa perlu melakukan iterasi manual.

Buat file baru: `03_alur_kontrol/06_koleksi_list_spread.dart`:

```dart
// File: 03_alur_kontrol/06_koleksi_list_spread.dart
void main() {
  // 1. Deklarasi List Bertipe (Generic Type)
  List<String> frameworkFrontend = ["Flutter", "React", "Vue"];
  print("=== OPERASI DASAR LIST ===");
  print("Data Awal        : $frameworkFrontend");
  print("Panjang List     : ${frameworkFrontend.length}");
  print("Elemen Pertama   : ${frameworkFrontend.first}");
  print("Elemen Terakhir  : ${frameworkFrontend.last}");

  // Manipulasi data list
  frameworkFrontend.add("Angular");
  frameworkFrontend.remove("React");
  print("Setelah Modifikasi: $frameworkFrontend");

  // 2. Spread Operator (...) Menggabungkan List
  print("\n=== PENGGABUNGAN DENGAN SPREAD OPERATOR ===");
  List<String> bahasaDasar = ["Dart", "TypeScript"];
  List<String> seluruhSkill = ["HTML", "CSS", ...bahasaDasar, ...frameworkFrontend];
  print("Kombinasi Skill  : $seluruhSkill");

  // 3. Null-aware Spread Operator (...?)
  List<String>? dataTambahan; // Bernilai null
  List<String> daftarAman = ["Item Utama", ...?dataTambahan];
  print("Daftar Aman (Null Safe): $daftarAman");
}
```

### Cara Menjalankan di Terminal:
```bash
dart run 03_alur_kontrol/06_koleksi_list_spread.dart
```

**Ekspektasi Output Konsol:**
```text
=== OPERASI DASAR LIST ===
Data Awal        : [Flutter, React, Vue]
Panjang List     : 3
Elemen Pertama   : Flutter
Elemen Terakhir  : Vue
Setelah Modifikasi: [Flutter, Vue, Angular]

=== PENGGABUNGAN DENGAN SPREAD OPERATOR ===
Kombinasi Skill  : [HTML, CSS, Dart, TypeScript, Flutter, Vue, Angular]
Daftar Aman (Null Safe): [Item Utama]
```

---

## CABANG 2: SET, MAP, COLLECTION-IF & COLLECTION-FOR {#cabang-2-set-map-collection-if}

### 1. `Set`: Koleksi Elemen Unik
`Set` tidak berurutan (*unordered*) dan **menolak duplikasi secara otomatis**. Sangat cocok untuk validasi data unik seperti daftar ID atau nomor kontak.

### 2. `Map`: Koleksi Pasangan Key-Value
`Map` menyimpan data dalam bentuk asosiasi kunci (*key*) dan nilai (*value*). Kunci harus unik, sedangkan nilai bebas memiliki duplikat.

### 3. Collection-If & Collection-For
Fitur deklaratif Dart untuk menyisipkan percabangan kondisi dan perulangan langsung saat mendeklarasikan koleksi data (sering digunakan dalam susunan Widget Flutter).

Buat file kedua: `03_alur_kontrol/07_koleksi_set_map.dart`:

```dart
// File: 03_alur_kontrol/07_koleksi_set_map.dart
void main() {
  // 1. Set (Eliminasi Nilai Duplikat Otomatis)
  print("=== OPERASI SET (DATA UNIK) ===");
  Set<int> nomorTiket = {101, 102, 103, 102, 101, 104};
  print("Hasil Set : $nomorTiket"); // Duplikat 101 & 102 otomatis dibuang
  print("Ada Tiket 103? : ${nomorTiket.contains(103)}");

  // 2. Map (Key - Value Associative Array)
  print("\n=== OPERASI MAP (DATA MAHASISWA) ===");
  Map<String, dynamic> profilSiswa = {
    "nim": "20261099",
    "nama": "Akmal Raditya",
    "ipk": 3.92,
    "isAktif": true,
  };

  print("Nama Siswa : ${profilSiswa["nama"]}");
  print("IPK        : ${profilSiswa["ipk"]}");

  // Menambah & memperbarui properti Map
  profilSiswa["semester"] = 4;
  profilSiswa["ipk"] = 3.95; // Nilai diperbarui

  // 3. Collection-If & Collection-For
  print("\n=== FITUR SAKTI: COLLECTION-IF & COLLECTION-FOR ===");
  bool isLoginSebagaiAdmin = true;
  List<int> daftarAngkaDasar = [1, 2, 3];

  List<String> menuAplikasi = [
    "Beranda",
    "Katalog Produk",
    if (isLoginSebagaiAdmin) "Panel Kontrol Admin", // Hanya masuk jika true
    for (int n in daftarAngkaDasar) "Promo Level $n", // Perulangan dalam List
    "Pusat Bantuan",
  ];

  for (String menu in menuAplikasi) {
    print("- Menu: $menu");
  }
}
```

### Cara Menjalankan di Terminal:
```bash
dart run 03_alur_kontrol/07_koleksi_set_map.dart
```

**Ekspektasi Output Konsol:**
```text
=== OPERASI SET (DATA UNIK) ===
Hasil Set : {101, 102, 103, 104}
Ada Tiket 103? : true

=== OPERASI MAP (DATA MAHASISWA) ===
Nama Siswa : Akmal Raditya
IPK        : 3.92

=== FITUR SAKTI: COLLECTION-IF & COLLECTION-FOR ===
- Menu: Beranda
- Menu: Katalog Produk
- Menu: Panel Kontrol Admin
- Menu: Promo Level 1
- Menu: Promo Level 2
- Menu: Promo Level 3
- Menu: Pusat Bantuan
```

---

## CABANG 3: TUGAS MANDIRI TERSTRUKTUR (3 LEVEL) {#cabang-tugas-mandiri}

Selesaikan 3 tugas koleksi bertingkat berikut di dalam folder:

```text
03_alur_kontrol/tugas/
```

---

### TUGAS 1: MANAJEMEN DAFTAR BELANJA (TINGKAT: DASAR)
* **Lokasi File:** `03_alur_kontrol/tugas/tugas7_manajemen_daftar_belanja.dart`
* **Instruksi:** 
  1. Deklarasikan `List<String> daftarBelanja = ["Beras", "Minyak", "Telur"];`.
  2. Tambahkan `"Gula"` dan `"Kopi"` ke dalam list.
  3. Hapus item `"Minyak"`.
  4. Lakukan pengurutan alfabetis (`daftarBelanja.sort()`).
  5. Tampilkan seluruh item menggunakan `for-in` loop dengan nomor urut (1, 2, 3, ...).
* **Ekspektasi Output:**
  ```text
  =========================================
            DAFTAR BELANJA TERURUT
  =========================================
  1. Beras
  2. Gula
  3. Kopi
  4. Telur
  Total Barang: 4 item
  =========================================
  ```

---

### TUGAS 2: FILTER & PENGGABUNGAN DATA UNIK (TINGKAT: TERAPAN)
* **Lokasi File:** `03_alur_kontrol/tugas/tugas8_koleksi_filter_unik.dart`
* **Instruksi:** 
  1. Diberikan dua daftar peserta seminar:
     - `List<String> batch1 = ["Andi", "Budi", "Citra", "Dewi"];`
     - `List<String> batch2 = ["Budi", "Eko", "Citra", "Fajar"];`
  2. Gabungkan kedua list tersebut ke dalam sebuah `Set<String>` agar tidak ada peserta ganda.
  3. Konversikan kembali set tersebut menjadi `List<String>`, lalu urutkan.
  4. Cetak daftar peserta unik beserta total peserta bersih.
* **Ekspektasi Output:**
  ```text
  =========================================
         DAFTAR PESERTA SEMINAR UNIK
  =========================================
  Peserta Terdaftar:
  - Andi
  - Budi
  - Citra
  - Dewi
  - Eko
  - Fajar
  -----------------------------------------
  Total Peserta Unik: 6 Orang (Bebas Duplikat)
  =========================================
  ```

---

### TUGAS 3: KATALOG INVENTARIS TOKO DENGAN MAP (TANTANGAN KREATIF)
* **Lokasi File:** `03_alur_kontrol/tugas/tugas9_katalog_inventaris.dart`
* **Instruksi:** 
  1. Buat daftar produk menggunakan `List<Map<String, dynamic>>`:
     - Produk 1: `{"nama": "Mouse Wireless", "harga": 150000, "stok": 8}`
     - Produk 2: `{"nama": "Keyboard Mechanical", "harga": 650000, "stok": 3}`
     - Produk 3: `{"nama": "Headset Gaming", "harga": 350000, "stok": 0}`
     - Produk 4: `{"nama": "Monitor 24 Inch", "harga": 1800000, "stok": 5}`
  2. Iterasi daftar produk tersebut:
     - Hitung total aset nilai seluruh stok (`harga * stok`).
     - Tampilkan produk yang stoknya habis (`stok == 0`) dengan label status `[HABIS]`.
     - Tampilkan produk yang stoknya tersedia dengan status `[TERSEDIA]`.
  3. Cetak rekapitulasi inventaris secara rapi ke konsol.
* **Ekspektasi Output:**
  ```text
  =============================================================
                     KATALOG INVENTARIS TOKO
  =============================================================
  [TERSEDIA] Mouse Wireless        | Rp 150000  (Stok: 8)
  [TERSEDIA] Keyboard Mechanical   | Rp 650000  (Stok: 3)
  [HABIS]    Headset Gaming        | Rp 350000  (Stok: 0)
  [TERSEDIA] Monitor 24 Inch       | Rp 1800000 (Stok: 5)
  -------------------------------------------------------------
  TOTAL NILAI ASET INVENTARIS: Rp 12150000
  =============================================================
  ```

---

## 4. RUBRIK PENILAIAN MANDIRI

| Komponen Penilaian | Tingkat | Kriteria Keberhasilan | Status |
| :--- | :--- | :--- | :--- |
| **Manipulasi List & Indexing** | Dasar | Mampu menambah, menghapus, mengurutkan, dan mengakses elemen list dengan akurat | [ ] |
| **Operasi Himpunan Set** | Terapan | Sukses mengeliminasi data duplikat menggunakan karakteristik bawaan `Set` | [ ] |
| **Pengolahan Struktur Kompleks** | Tantangan | Mampu mengolah koleksi bertingkat (`List<Map<String, dynamic>>`) dan mengakumulasikan nilai matematisnya | [ ] |
| **Type Safety & Generics** | Umum | Seluruh koleksi dideklarasikan dengan tipe generik yang eksplisit (misal: `List<String>`, `Set<int>`) | [ ] |

---

## KESIMPULAN

Struktur koleksi adalah tulang punggung penyimpanan data dalam memori program. Dengan menguasai `List`, `Set`, `Map`, serta operator ekspresif seperti `Spread` dan `Collection-If`, Anda telah menuntaskan seluruh fondasi **Alur Kontrol**. 

Pada modul berikutnya, kita akan melangkah ke materi inti rekayasa perangkat lunak: **Modul 04: Deklarasi Fungsi, Parameter & Prinsip Null Safety**!