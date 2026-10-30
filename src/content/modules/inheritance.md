# INHERITANCE (PEWARISAN) & ABSTRACT CLASS

*Inheritance* (Pewarisan) adalah mekanisme yang memungkinkan sebuah kelas (*Child Class* atau *Subclass*) mewarisi seluruh karakteristik atribut dan perilaku dari kelas lain (*Parent Class* atau *Superclass*).

Dengan pewarisan, Anda dapat menghindari duplikasi kode (*DRY*), menyusun hierarki data yang logis, serta menerapkan polimorfisme (*Polymorphism*) yang mendasari sistem hierarki *Widget* dalam ekosistem Flutter.

---

## POHON MATERI & STRUKTUR FOLDER KERJA

Lanjutkan penulisan kode pada folder kerja `05_object_oriented/` dengan menyusun file-file latihan pewarisan berikut:

```text
belajar_dart_hexatech/
└── 05_object_oriented/
    ├── 05_inheritance_dan_super.dart
    ├── 06_abstract_dan_override.dart
    └── tugas/
        ├── tugas7_hierarki_hewan.dart         [Tingkat Dasar]
        ├── tugas8_kalkulator_bangun_datar.dart [Tingkat Terapan]
        └── tugas9_payment_gateway.dart        [Tantangan Kreatif]
```

> **Petunjuk Kerja:**  
> Buka VS Code di folder proyek Anda, buat file latihan di dalam `05_object_oriented/`, lalu perhatikan bagaimana rantai konstruktor dan kontrak antarmuka diimplementasikan.

---

## CABANG 1: KATA KUNCI `extends` & DELEGASI KONSTRUKTOR `super` {#cabang-1-inheritance-super}

Dalam bahasa Dart, pewarisan tunggal (*single inheritance*) diterapkan menggunakan kata kunci **`extends`**.

### 1. Peran Kata Kunci `super`
Ketika sebuah kelas turunan dibuat, konstruktor kelas induk (*Superclass*) **wajib diinisialisasi terlebih dahulu**. Kata kunci `super` digunakan untuk:
* Meneruskan argumen dari konstruktor anak ke konstruktor induk: `SubClass(...) : super(...);`
* Memanggil implementasi asli method milik induk dari dalam method anak: `super.namaMethod();`

Buat file pertama Anda: `05_object_oriented/05_inheritance_dan_super.dart`, lalu ketik kode berikut:

```dart
// File: 05_object_oriented/05_inheritance_dan_super.dart

// 1. Superclass (Kelas Induk)
class Kendaraan {
  String merek;
  String warna;
  int tahunProduksi;

  Kendaraan({
    required this.merek,
    required this.warna,
    required this.tahunProduksi,
  });

  void nyalakanMesin() {
    print("[$merek] Mesin menyala... Sistem kelistrikan normal.");
  }

  void tampilkanDataDasar() {
    print("Kendaraan: $merek | Warna: $warna | Tahun: $tahunProduksi");
  }
}

// 2. Subclass: Mobil (Mewarisi Kendaraan)
class Mobil extends Kendaraan {
  int jumlahPintu;
  bool isAcMenyala;

  // Mengirim merek, warna, dan tahun ke konstruktor Kendaraan lewat super(...)
  Mobil({
    required super.merek,
    required super.warna,
    required super.tahunProduksi,
    this.jumlahPintu = 4,
    this.isAcMenyala = false,
  });

  void aktifkanAc() {
    isAcMenyala = true;
    print("[$merek] AC Kabin aktif pada suhu sejuk 22C.");
  }
}

// 3. Subclass: Motor (Mewarisi Kendaraan)
class SepedaMotor extends Kendaraan {
  int kapasitasCc;

  SepedaMotor({
    required super.merek,
    required super.warna,
    required super.tahunProduksi,
    required this.kapasitasCc,
  });

  void lakukanAkselerasi() {
    print("[$merek $kapasitasCc CC] Gas ditarik... Kecepatan meningkat cepat!");
  }
}

void main() {
  print("=== IMPLEMENTASI INHERITANCE DENGAN SUPER ===");

  Mobil avanza = Mobil(
    merek: "Toyota Avanza",
    warna: "Hitam Metalik",
    tahunProduksi: 2024,
    jumlahPintu: 5,
  );

  avanza.tampilkanDataDasar(); // Method warisan dari Kendaraan
  avanza.nyalakanMesin();      // Method warisan dari Kendaraan
  avanza.aktifkanAc();         // Method khusus milik Mobil

  print("\n---------------------------------------------");

  SepedaMotor ninja = SepedaMotor(
    merek: "Kawasaki Ninja ZX-25R",
    warna: "Hijau Lime",
    tahunProduksi: 2023,
    kapasitasCc: 250,
  );

  ninja.tampilkanDataDasar();
  ninja.nyalakanMesin();
  ninja.lakukanAkselerasi();
}
```

### Cara Menjalankan di Terminal:
```bash
dart run 05_object_oriented/05_inheritance_dan_super.dart
```

**Ekspektasi Output Konsol:**
```text
=== IMPLEMENTASI INHERITANCE DENGAN SUPER ===
Kendaraan: Toyota Avanza | Warna: Hitam Metalik | Tahun: 2024
[Toyota Avanza] Mesin menyala... Sistem kelistrikan normal.
[Toyota Avanza] AC Kabin aktif pada suhu sejuk 22C.

---------------------------------------------
Kendaraan: Kawasaki Ninja ZX-25R | Warna: Hijau Lime | Tahun: 2023
[Kawasaki Ninja ZX-25R] Mesin menyala... Sistem kelistrikan normal.
[Kawasaki Ninja ZX-25R 250 CC] Gas ditarik... Kecepatan meningkat cepat!
```

---

## CABANG 2: METHOD OVERRIDING (@override) & ABSTRACT CLASS {#cabang-2-override-abstract}

### 1. Abstract Class (Kelas Kerangka / Kontrak)
Kelas yang ditandai dengan kata kunci `abstract` **tidak dapat diinstansiasi secara langsung** menjadi objek. Tujuannya adalah mendefinisikan *interface* standar atau perilaku dasar yang wajib diwujudkan secara konkret oleh seluruh kelas turunannya.

### 2. Method Overriding (`@override`)
Anotasi `@override` memberi tahu kompiler bahwa kelas anak secara sengaja menimpa atau memodifikasi method warisan dari induknya agar menghasilkan perilaku yang spesifik.

Buat file kedua: `05_object_oriented/06_abstract_dan_override.dart`:

```dart
// File: 05_object_oriented/06_abstract_dan_override.dart

// 1. Abstract Class sebagai Kontrak Arsitektur
abstract class Karyawan {
  String idKaryawan;
  String nama;
  double gajiPokok;

  Karyawan({
    required this.idKaryawan,
    required this.nama,
    required this.gajiPokok,
  });

  // Abstract Method: Tanpa bodi implementasi {}, wajib dioverride oleh anak
  double hitungGajiTotal();

  // Konkret Method: Diwariskan langsung
  void cetakSlipGaji() {
    print("------------------------------------------");
    print("ID Karyawan : $idKaryawan");
    print("Nama        : $nama");
    print("Gaji Pokok  : Rp $gajiPokok");
    print("Total Terima: Rp ${hitungGajiTotal()}");
  }
}

// 2. Concrete Class 1: Karyawan Tetap
class KaryawanTetap extends Karyawan {
  double tunjanganJabatan;

  KaryawanTetap({
    required super.idKaryawan,
    required super.nama,
    required super.gajiPokok,
    required this.tunjanganJabatan,
  });

  @override
  double hitungGajiTotal() {
    return gajiPokok + tunjanganJabatan;
  }
}

// 3. Concrete Class 2: Freelancer
class Freelancer extends Karyawan {
  int jumlahProyekSelesai;
  double komisiPerProyek;

  Freelancer({
    required super.idKaryawan,
    required super.nama,
    required super.gajiPokok,
    required this.jumlahProyekSelesai,
    required this.komisiPerProyek,
  });

  @override
  double hitungGajiTotal() {
    return gajiPokok + (jumlahProyekSelesai * komisiPerProyek);
  }
}

void main() {
  print("=== POLIMORFISME & ABSTRACT CLASS ===");

  // Percobaan ilegal:
  // Karyawan k = Karyawan(...); // Error: Abstract classes cannot be instantiated!

  List<Karyawan> daftarKaryawan = [
    KaryawanTetap(
      idKaryawan: "KT-01",
      nama: "Akmal Raditya",
      gajiPokok: 8000000.0,
      tunjanganJabatan: 2500000.0,
    ),
    Freelancer(
      idKaryawan: "FL-09",
      nama: "Bayu Wicaksono",
      gajiPokok: 2000000.0,
      jumlahProyekSelesai: 4,
      komisiPerProyek: 1500000.0,
    ),
  ];

  // Eksekusi polimorfik: Satu loop memproses beragam bentuk class anak
  for (Karyawan k in daftarKaryawan) {
    k.cetakSlipGaji();
  }
}
```

### Cara Menjalankan di Terminal:
```bash
dart run 05_object_oriented/06_abstract_dan_override.dart
```

**Ekspektasi Output Konsol:**
```text
=== POLIMORFISME & ABSTRACT CLASS ===
------------------------------------------
ID Karyawan : KT-01
Nama        : Akmal Raditya
Gaji Pokok  : Rp 8000000.0
Total Terima: Rp 10500000.0
------------------------------------------
ID Karyawan : FL-09
Nama        : Bayu Wicaksono
Gaji Pokok  : Rp 2000000.0
Total Terima: Rp 8000000.0
```

---

## CABANG 3: TUGAS MANDIRI TERSTRUKTUR (3 LEVEL) {#cabang-tugas-mandiri}

Selesaikan 3 tugas bertingkat berikut di sub-folder tugas:

```text
05_object_oriented/tugas/
```

---

### TUGAS 1: HIERARKI KERAJAAN HEWAN (TINGKAT: DASAR)
* **Lokasi File:** `05_object_oriented/tugas/tugas7_hierarki_hewan.dart`
* **Instruksi:** 
  1. Buat superclass `Hewan`:
     - Properti: `nama` (String), `habitat` (String).
     - Method `bersuara()` yang mencetak suara umum.
  2. Buat subclass `Kucing` dan `Anjing` yang mewarisi `Hewan`.
  3. Override method `bersuara()`:
     - Kucing: mencetak `"Meong meong!"`
     - Anjing: mencetak `"Guk guk guk!"`
  4. Cetak informasi dan panggil suara kedua hewan di `main()`.
* **Ekspektasi Output:**
  ```text
  =========================================
            HIERARKI SPESIES HEWAN
  =========================================
  Hewan: Milo (Darat)
  Suara: Meong meong!

  Hewan: Sparky (Darat)
  Suara: Guk guk guk!
  =========================================
  ```

---

### TUGAS 2: KALKULATOR BANGUN DATAR ABSTRAK (TINGKAT: TERAPAN)
* **Lokasi File:** `05_object_oriented/tugas/tugas8_kalkulator_bangun_datar.dart`
* **Instruksi:** 
  1. Buat abstract class `BangunDatar`:
     - Properti: `String namaBentuk`.
     - Abstract methods: `double hitungLuas();` dan `double hitungKeliling();`.
     - Method konkret `cetakDetailGeometri()` yang mencetak nama, luas, dan keliling.
  2. Buat subclass:
     - `PersegiPanjang(double panjang, double lebar)`
     - `Lingkaran(double jariJari)` (Gunakan pi = 3.14159)
  3. Masukkan objek-objek ke dalam `List<BangunDatar>` dan cetak seluruhnya lewat looping.
* **Ekspektasi Output:**
  ```text
  =============================================================
                    GEOMETRI BANGUN DATAR DART
  =============================================================
  [BENTUK] Persegi Panjang
  - Luas Area    : 50.0 cm2
  - Keliling Luar: 30.0 cm
  -------------------------------------------------------------
  [BENTUK] Lingkaran
  - Luas Area    : 153.94 cm2
  - Keliling Luar: 43.98 cm
  =============================================================
  ```

---

### TUGAS 3: ARSITEKTUR MULTI PAYMENT GATEWAY (TANTANGAN KREATIF)
* **Lokasi File:** `05_object_oriented/tugas/tugas9_payment_gateway.dart`
* **Instruksi:** 
  Rancang sistem arsitektur gerbang pembayaran (*Payment Gateway*) menggunakan abstract class:
  1. Abstract class `PaymentGateway`:
     - Properti: `String kodeTransaksi`, `double totalBayar`.
     - Abstract method: `bool prosesPembayaran();`.
     - Abstract method: `double hitungBiayaLayanan();`.
  2. Implementasikan 3 saluran pembayaran konkret:
     - `QrisPayment`: Biaya layanan flat 0.7% dari total.
     - `VirtualAccount`: Biaya layanan flat Rp 4.000.
     - `CreditCard`: Biaya layanan 2.5% + Rp 2.000 (biaya otentikasi 3D Secure).
  3. Lakukan simulasi pembayaran tagihan Rp 500.000 pada ketiga saluran dan cetak perbandingan total biaya akhirnya.
* **Ekspektasi Output:**
  ```text
  =============================================================
               SIMULATOR PAYMENT GATEWAY MULTI-CHANNEL
  =============================================================
  Tagihan Asli: Rp 500000.0
  -------------------------------------------------------------
  [QRIS]   Biaya Admin: Rp 3500.0  | Total Bayar: Rp 503500.0
           Status: Transaksi Berhasil melalui Dynamic QRIS.

  [VA]     Biaya Admin: Rp 4000.0  | Total Bayar: Rp 504000.0
           Status: Transaksi Berhasil melalui BCA Virtual Account.

  [KREDIT] Biaya Admin: Rp 14500.0 | Total Bayar: Rp 514500.0
           Status: Transaksi Berhasil dengan Verifikasi OTP Visa.
  =============================================================
  ```

---

## 4. RUBRIK PENILAIAN MANDIRI

| Komponen Penilaian | Tingkat | Kriteria Keberhasilan | Status |
| :--- | :--- | :--- | :--- |
| **Pewarisan Kelas Bersih** | Dasar | Konstruktor anak mendelegasikan argumen wajib ke konstruktor induk via `super` | [ ] |
| **Kepatuhan Kontrak Abstrak** | Terapan | Seluruh method abstrak diwujudkan secara utuh oleh subclass tanpa ada yang tertinggal | [ ] |
| **Prinsip Polimorfisme** | Tantangan | Mampu memproses heterogenous objects dalam satu tipe koleksi induk (`List<SuperClass>`) | [ ] |
| **Pencegahan Error Instansiasi** | Umum | Memahami bahwa kelas abstrak murni tidak boleh diinstansiasi langsung via `Class()` | [ ] |

---

## KESIMPULAN

Inheritance dan Abstract Class adalah fondasi abstraksi dalam rekayasa perangkat lunak modern. Kemampuan ini memungkinkan kode Anda menjadi elastis dan mudah diperluas (*Extensible*).

Pada bab penutup Modul 05, kita akan mempelajari mekanisme komposisi tingkat lanjut: **Mixins & Enum**!