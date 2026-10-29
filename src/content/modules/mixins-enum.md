# MIXINS & ENUMS (KOMPOSISI PERILAKU & NILAI KONSTAN)

Dalam perancangan perangkat lunak, pewarisan kelas tunggal (*Single Inheritance*) terkadang memiliki keterbatasan: bagaimana jika sebuah kelas membutuhkan kemampuan dari beberapa sumber sekaligus tanpa merusak rantai hierarki? Selain itu, bagaimana cara mengelola sekumpulan nilai konstanta tetap dengan aman dari kesalahan pengetikan (*typo*)?

Dart menjawab kedua tantangan ini dengan sangat elegan melalui dua fitur unggulan: **`Enum`** (termasuk *Enhanced Enum* di Dart modern) dan **`Mixin`** (komposisi perilaku tanpa *multiple inheritance*).

---

## POHON MATERI & STRUKTUR FOLDER KERJA

Tuntaskan seluruh materi Modul 05 dengan menyusun file-file latihan berikut di dalam folder kerja `05_object_oriented/`:

```text
belajar_dart_hexatech/
└── 05_object_oriented/
    ├── 07_enum_dan_enhanced_enum.dart
    ├── 08_mixins_komposisi_perilaku.dart
    └── tugas/
        ├── tugas10_enum_status_order.dart        [Tingkat Dasar]
        ├── tugas11_karakter_game_mixin.dart      [Tingkat Terapan]
        └── tugas12_sistem_kendaraan_hibrida.dart [Tantangan Kreatif]
```

> **Petunjuk Kerja:**  
> Buka VS Code di folder proyek Anda, buat file baru di dalam `05_object_oriented/`, dan perhatikan bagaimana perpaduan enum dan mixin membuat kode menjadi sangat modular dan aman.

---

## CABANG 1: ENUM DASAR & ENHANCED ENUM DENGAN PROPERTIES/METHODS {#cabang-1-enum-dan-values}

*Enumeration* (`enum`) adalah tipe data khusus yang mendefinisikan sekumpulan nilai konstan yang sudah pasti (*fixed set of constants*).

### 1. Enum Klasik
Sangat cocok untuk status transaksi, peran pengguna, tingkat kesulitan game, dsb., yang dipadukan dengan kontrol alur `switch`.

### 2. Enhanced Enum (Fitur Canggih Dart Modern)
Mulai dari Dart 2.17+, `enum` dapat memiliki **konstruktor, properti atribut, dan methods** persis seperti sebuah kelas reguler!

Buat file pertama Anda: `05_object_oriented/07_enum_dan_enhanced_enum.dart`, lalu ketik kode berikut:

```dart
// File: 05_object_oriented/07_enum_dan_enhanced_enum.dart

// 1. Enhanced Enum: Memiliki Properti dan Method Internal
enum StatusPengiriman {
  menungguKurir(kode: 101, estimasiHari: 1, label: "Menunggu Penjemputan"),
  sedangDikirim(kode: 202, estimasiHari: 2, label: "Dalam Perjalanan"),
  sampaiTujuan(kode: 303, estimasiHari: 0, label: "Tiba di Alamat Pembeli"),
  dibatalkan(kode: 404, estimasiHari: 0, label: "Pesanan Dibatalkan");

  // Properti pada Enum
  final int kode;
  final int estimasiHari;
  final String label;

  // Constructor Konstan pada Enum
  const StatusPengiriman({
    required this.kode,
    required this.estimasiHari,
    required this.label,
  });

  // Method Internal Enum
  bool get isSelesai => this == StatusPengiriman.sampaiTujuan || this == StatusPengiriman.dibatalkan;
}

void main() {
  print("=== PENERAPAN ENHANCED ENUM DART ===");

  StatusPengiriman pesananLaptop = StatusPengiriman.sedangDikirim;

  print("Nama Enum     : ${pesananLaptop.name}");
  print("Kode Status   : ${pesananLaptop.kode}");
  print("Keterangan    : ${pesananLaptop.label}");
  print("Estimasi Waktu: ${pesananLaptop.estimasiHari} hari lagi");
  print("Status Akhir? : ${pesananLaptop.isSelesai ? "SELESAI" : "MASIH BERJALAN"}");

  print("\n=== MENAMPILKAN SELURUH PILIHAN ENUM (.values) ===");
  for (StatusPengiriman status in StatusPengiriman.values) {
    print("- [${status.kode}] ${status.label}");
  }
}
```

### Cara Menjalankan di Terminal:
```bash
dart run 05_object_oriented/07_enum_dan_enhanced_enum.dart
```

**Ekspektasi Output Konsol:**
```text
=== PENERAPAN ENHANCED ENUM DART ===
Nama Enum     : sedangDikirim
Kode Status   : 202
Keterangan    : Dalam Perjalanan
Estimasi Waktu: 2 hari lagi
Status Akhir? : MASIH BERJALAN

=== MENAMPILKAN SELURUH PILIHAN ENUM (.values) ===
- [101] Menunggu Penjemputan
- [202] Dalam Perjalanan
- [303] Tiba di Alamat Pembeli
- [404] Pesanan Dibatalkan
```

---

## CABANG 2: MIXIN & KATA KUNCI `with` (KOMPOSISI PERILAKU) {#cabang-2-mixin-dan-with}

Dart tidak mendukung *Multiple Inheritance* (satu kelas tidak dapat meng-`extends` dua superclass sekaligus) untuk menghindari ambiguitas hirarki (*Diamond Problem*). Sebagai gantinya, Dart menghadirkan **`mixin`**.

### 1. Apa itu Mixin?
Mixin adalah potongan kode yang membungkus kumpulan method atau properti yang dapat **"ditempelkan"** ke kelas mana pun menggunakan kata kunci **`with`**, tanpa perlu menjadi orang tua (*parent*) dalam rantai pewarisan kelas tersebut.

### 2. Sintaks Penggunaan
```dart
mixin NamaMixin {
  void kemampuan() { ... }
}

class NamaKelas extends Superclass with MixinSatu, MixinDua {
  // Kelas ini mewarisi Superclass dan memiliki seluruh kemampuan MixinSatu & MixinDua
}
```

Buat file kedua: `05_object_oriented/08_mixins_komposisi_perilaku.dart`:

```dart
// File: 05_object_oriented/08_mixins_komposisi_perilaku.dart

// 1. Mixin: Kemampuan Navigasi GPS
mixin NavigasiGps {
  void tentukanKoordinat(double lat, double long) {
    print("[GPS] Mengunci posisi satelit: Latitude $lat, Longitude $long");
  }
}

// 2. Mixin: Kemampuan Transmisi Sinyal Radio
mixin PemancarRadio {
  void siarkanFrekuensi(double mhz) {
    print("[RADIO] Memancarkan gelombang darurat pada frekuensi $mhz MHz.");
  }
}

// 3. Superclass
class Kendaraan {
  String nomorRegistrasi;
  Kendaraan(this.nomorRegistrasi);
}

// 4. Drone mewarisi Kendaraan dan menempelkan DUA mixin sekaligus!
class DronePengintai extends Kendaraan with NavigasiGps, PemancarRadio {
  double dayaBaterai;

  DronePengintai(super.nomorRegistrasi, this.dayaBaterai);

  void mulaiMisi() {
    print("\n--- MISI DRONE DIMULAI (${nomorRegistrasi}) ---");
    print("Daya Awal: $dayaBaterai%");
    tentukanKoordinat(-6.2088, 106.8456); // Dari Mixin NavigasiGps
    siarkanFrekuensi(144.500);            // Dari Mixin PemancarRadio
  }
}

void main() {
  print("=== KOMPOSISI KEMAMPUAN DENGAN MIXINS ===");

  DronePengintai droneHexa = DronePengintai("DRN-X09", 98.5);
  droneHexa.mulaiMisi();
}
```

### Cara Menjalankan di Terminal:
```bash
dart run 05_object_oriented/08_mixins_komposisi_perilaku.dart
```

**Ekspektasi Output Konsol:**
```text
=== KOMPOSISI KEMAMPUAN DENGAN MIXINS ===

--- MISI DRONE DIMULAI (DRN-X09) ---
Daya Awal: 98.5%
[GPS] Mengunci posisi satelit: Latitude -6.2088, Longitude 106.8456
[RADIO] Memancarkan gelombang darurat pada frekuensi 144.5 MHz.
```

---

## CABANG 3: TUGAS MANDIRI TERSTRUKTUR (3 LEVEL) {#cabang-tugas-mandiri}

Selesaikan 3 tugas bertingkat berikut di sub-folder tugas:

```text
05_object_oriented/tugas/
```

---

### TUGAS 1: ENUM STATUS ORDER DENGAN DESKRIPSI (TINGKAT: DASAR)
* **Lokasi File:** `05_object_oriented/tugas/tugas10_enum_status_order.dart`
* **Instruksi:** 
  1. Buat enhanced enum `TingkatKedaruratan`:
     - `rendah` (warna: "Hijau", kodeAngka: 1).
     - `sedang` (warna: "Kuning", kodeAngka: 2).
     - `kritis` (warna: "Merah", kodeAngka: 3).
  2. Buat method internal `get isPerluTindakanCepat => kodeAngka >= 2;`.
  3. Uji coba cetak informasi seluruh nilai enum dari `main()`.
* **Ekspektasi Output:**
  ```text
  =========================================
            PROTOKOL KEDARURATAN RS
  =========================================
  Level: kritis
  - Indikator Warna    : Merah
  - Tingkat Prioritas  : Tingkat 3
  - Butuh Aksi Cepat? : Benar (Darurat)
  =========================================
  ```

---

### TUGAS 2: SISTEM ROLE KARAKTER RPG DENGAN MIXINS (TINGKAT: TERAPAN)
* **Lokasi File:** `05_object_oriented/tugas/tugas11_karakter_game_mixin.dart`
* **Instruksi:** 
  1. Buat class dasar `KarakterGame`: properti `nama` (String) dan `hp` (int).
  2. Buat mixin `BisaMenyerangFisik`: method `serangPedang()`.
  3. Buat mixin `BisaMantraSihir`: method `rapalkanMantra()`.
  4. Buat mixin `BisaMenyembuhkan`: method `pulihkanHp(KarakterGame target)`.
  5. Buat subclass:
     - `Prajurit extends KarakterGame with BisaMenyerangFisik`
     - `Penyihir extends KarakterGame with BisaMantraSihir, BisaMenyembuhkan`
     - `Paladin extends KarakterGame with BisaMenyerangFisik, BisaMenyembuhkan`
  6. Simulasikan interaksi aksi ketiga karakter di `main()`.
* **Ekspektasi Output:**
  ```text
  =============================================================
                  SIMULATOR KARAKTER GAME RPG
  =============================================================
  [PRAJURIT] Arthur mengayunkan pedang besar! Serangan fisik 50 DMG.
  [PENYIHIR] Merlin merapalkan badai petir sihir! Magic 80 DMG.
  [PALADIN]  Galahad mengalirkan energi suci, memulihkan 40 HP rekan!
  =============================================================
  ```

---

### TUGAS 3: KENDARAAN HIBRIDA MULTI-SUMBER TENAGA (TANTANGAN KREATIF)
* **Lokasi File:** `05_object_oriented/tugas/tugas12_sistem_kendaraan_hibrida.dart`
* **Instruksi:** 
  Rancang simulasi kendaraan hibrida modern dengan integrasi Enum dan Mixins:
  1. Enum `ModeBerkendara`: `eco` (efisiensi tinggi), `normal`, `sport` (tenaga maksimal).
  2. Mixin `PenggerakListrik`: properti `persentaseBaterai`, method `isiDayaListrik()`.
  3. Mixin `MesinPembakaranBensin`: properti `literBensin`, method `isiBensin()`.
  4. Class `MobilHibrida extends Kendaraan with PenggerakListrik, MesinPembakaranBensin`:
     - Method `kendarai(ModeBerkendara mode, double jarakKm)`:
       - Pada mode `eco`, konsumsi energi listrik 100%.
       - Pada mode `sport`, gunakan kombinasi mesin bensin dan dorongan motor listrik.
  5. Lakukan simulasi berkendara dan laporkan sisa energi di akhir perjalanan.
* **Ekspektasi Output:**
  ```text
  =============================================================
                 SISTEM TELEMETRI MOBIL HIBRIDA
  =============================================================
  Kendaraan: Toyota Prius Plug-In | Plat: B 8821 HYB
  -------------------------------------------------------------
  [MODE: ECO] Menempuh jarak 15 km murni dengan motor listrik.
  - Sisa Baterai : 75.0%
  - Sisa Bensin  : 40.0 Liter

  [MODE: SPORT] Menempuh jarak 30 km dengan tenaga ganda (Dual-Power)!
  - Sisa Baterai : 60.0%
  - Sisa Bensin  : 37.5 Liter
  -------------------------------------------------------------
  STATUS TELEMETRI: Sistem Tenaga Terintegrasi Optimal
  =============================================================
  ```

---

## 4. RUBRIK PENILAIAN MANDIRI

| Komponen Penilaian | Tingkat | Kriteria Keberhasilan | Status |
| :--- | :--- | :--- | :--- |
| **Karakteristik Enhanced Enum** | Dasar | Mampu mendeklarasikan enum dengan atribut konstanta dan method pendukung | [ ] |
| **Pemanfaatan Mixins Komposisi** | Terapan | Menggabungkan multiple mixin dengan kata kunci `with` tanpa melanggar prinsip pewarisan | [ ] |
| **Arsitektur Hibrida Fleksibel** | Tantangan | Berhasil memadukan enum dan multi-mixin ke dalam satu model domain bisnis yang kohesif | [ ] |
| **Pencegahan Ambiguitas** | Umum | Penamaan mixin deskriptif (menggambarkan kapabilitas atau peran) | [ ] |

---

## KESIMPULAN

Selamat! Anda telah menguasai seluruh pilar fundamental **Object-Oriented Programming (OOP) dalam Bahasa Dart**:
1. Pembuatan Class, Instansiasi Object, dan Ragam Constructor.
2. Enkapsulasi, Visibilitas Berkas (`_`), serta Getter/Setter.
3. Pewarisan (`extends`), Kontrak Abstrak, dan Polimorfisme.
4. Komposisi Fleksibel dengan Mixins dan Keamanan Data Konstan dengan Enum.

Pada modul puncak berikutnya, kita akan menaklukkan bab paling penting untuk aplikasi modern: **Modul 06: Asynchronous Dart (Future, Async/Await & Stream)**!