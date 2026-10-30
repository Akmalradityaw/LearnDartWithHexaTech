# CLASS & OBJECT (FONDASI PEMROGRAMAN BERORIENTASI OBJEK)

Dart adalah bahasa murni berorientasi objek (*Pure Object-Oriented Programming Language*). Dalam ekosistem Dart, setiap nilai—mulai dari angka sederhana, fungsi, hingga struktur data rumit—adalah sebuah **Object** yang diturunkan dari kelas induk `Object`. 

Memahami paradigma OOP adalah syarat mutlak sebelum Anda membangun arsitektur aplikasi berskala besar dan menyusun tata letak *Widget Tree* di Flutter.

---

## POHON MATERI & STRUKTUR FOLDER KERJA

Siapkan direktori kerja baru untuk seluruh materi OOP pada proyek Anda: `05_object_oriented/`. Berikut adalah peta alur file yang akan kita buat:

```text
belajar_dart_hexatech/
└── 05_object_oriented/
    ├── 01_class_object_dasar.dart
    ├── 02_constructors_dan_named.dart
    └── tugas/
        ├── tugas1_model_buku.dart         [Tingkat Dasar]
        ├── tugas2_rekening_pengguna.dart   [Tingkat Terapan]
        └── tugas3_sistem_armada_mobil.dart [Tantangan Kreatif]
```

> **Petunjuk Kerja:**  
> Buka VS Code di folder proyek Anda, buat folder `05_object_oriented/`, lalu ikuti setiap cabang materi berikut secara bertahap.

---

## CABANG 1: BLUEPRINT & INSTANSIASI OBJEK {#cabang-1-blueprint-instansiasi}

* **`Class` (Cetak Biru)**: Rencana atau cetakan logis yang mendefinisikan atribut (*properties/fields*) dan perilaku (*methods*) dari suatu entitas.
* **`Object` (Wujud Nyata / Instance)**: Realisasi konkret yang menempati ruang memori dan dibuat berdasarkan cetakan `Class` tersebut.

### 1. Anatomi Pembentukan Class
```dart
class NamaClass {
  // 1. Properties (Data / Karakteristik)
  tipeData properti;

  // 2. Methods (Tindakan / Aksi)
  void namaMethod() { ... }
}
```

Buat file pertama Anda: `05_object_oriented/01_class_object_dasar.dart`, lalu ketik kode berikut:

```dart
// File: 05_object_oriented/01_class_object_dasar.dart

class Laptop {
  // Properties (Atribut Laptop)
  String merek = "";
  String prosesor = "";
  int ramGb = 0;
  bool isMenyala = false;

  // Methods (Perilaku Laptop)
  void hidupkanLaptop() {
    isMenyala = true;
    print("[$merek] Sistem Booting... Laptop sekarang aktif.");
  }

  void matikanLaptop() {
    isMenyala = false;
    print("[$merek] Menutup seluruh aplikasi... Laptop mati.");
  }

  void tampilkanSpesifikasi() {
    print("\n=== SPESIFIKASI PERANGKAT ===");
    print("Merek     : $merek");
    print("Prosesor  : $prosesor");
    print("RAM       : $ramGb GB");
    print("Status    : ${isMenyala ? "MENYALA" : "PADAM"}");
  }
}

void main() {
  print("=== INSTANSIASI OBJEK LAPTOP ===");

  // 1. Membuat Object Pertama
  Laptop laptopAkmal = Laptop();
  laptopAkmal.merek = "HexaBook Pro";
  laptopAkmal.prosesor = "Apple Silicon M3 Max";
  laptopAkmal.ramGb = 32;

  laptopAkmal.hidupkanLaptop();
  laptopAkmal.tampilkanSpesifikasi();

  // 2. Membuat Object Kedua (Entitas Terpisah di Memori)
  Laptop laptopLab = Laptop();
  laptopLab.merek = "ThinkStation Workstation";
  laptopLab.prosesor = "Intel Core i7 14700";
  laptopLab.ramGb = 16;

  laptopLab.tampilkanSpesifikasi();
}
```

### Cara Menjalankan di Terminal:
```bash
dart run 05_object_oriented/01_class_object_dasar.dart
```

**Ekspektasi Output Konsol:**
```text
=== INSTANSIASI OBJEK LAPTOP ===
[HexaBook Pro] Sistem Booting... Laptop sekarang aktif.

=== SPESIFIKASI PERANGKAT ===
Merek     : HexaBook Pro
Prosesor  : Apple Silicon M3 Max
RAM       : 32 GB
Status    : MENYALA

=== SPESIFIKASI PERANGKAT ===
Merek     : ThinkStation Workstation
Prosesor  : Intel Core i7 14700
RAM       : 16 GB
Status    : PADAM
```

---

## CABANG 2: CONSTRUCTORS & INITIALIZING FORMALS {#cabang-2-constructors-named}

Daripada mengisi properti satu per satu setelah objek terbentuk, Dart menyediakan **Constructor**—method spesial yang otomatis dieksekusi saat objek diinisialisasi.

### 1. Generative Constructor & Initializing Formals (`this.properti`)
Dart memiliki sintaks sangat ringkas untuk memasukkan argumen constructor langsung ke dalam field properti tanpa perlu menulis `this.nama = nama;` berulang kali.

### 2. Named Constructors
Berbeda dengan bahasa seperti Java atau C++ yang hanya mengandalkan *constructor overloading*, Dart memungkinkan Anda membuat banyak constructor dengan nama berbeda di dalam satu class (`Class.namaConstructor()`).

Buat file kedua: `05_object_oriented/02_constructors_dan_named.dart`:

```dart
// File: 05_object_oriented/02_constructors_dan_named.dart

class AkunPengguna {
  String idPengguna;
  String username;
  String email;
  String role;
  int skorReputasi;

  // 1. Generative Constructor Utama (Initializing Formals)
  AkunPengguna({
    required this.idPengguna,
    required this.username,
    required this.email,
    this.role = "MEMBER",
    this.skorReputasi = 100,
  });

  // 2. Named Constructor untuk Pengguna Tamu (Guest)
  AkunPengguna.guest(this.username)
      : idPengguna = "GST_${DateTime.now().millisecondsSinceEpoch}",
        email = "guest@hexatech.id",
        role = "GUEST",
        skorReputasi = 10;

  // 3. Named Constructor untuk Administrator
  AkunPengguna.admin({
    required this.idPengguna,
    required this.username,
    required this.email,
  })  : role = "SUPERADMIN",
        skorReputasi = 999;

  void cetakInfo() {
    print("------------------------------------------");
    print("ID Akun   : $idPengguna");
    print("Username  : $username");
    print("Email     : $email");
    print("Role      : $role");
    print("Reputasi  : $skorReputasi poin");
  }
}

void main() {
  print("=== PENERAPAN CONSTRUCTOR MULTI-BENTUK ===");

  // 1. Objek menggunakan Constructor Utama
  AkunPengguna userReguler = AkunPengguna(
    idPengguna: "USR_101",
    username: "akmal_raditya",
    email: "akmal@hexatech.id",
  );
  userReguler.cetakInfo();

  // 2. Objek menggunakan Named Constructor: Guest
  AkunPengguna userTamu = AkunPengguna.guest("Pengunjung_Misterius");
  userTamu.cetakInfo();

  // 3. Objek menggunakan Named Constructor: Admin
  AkunPengguna administrator = AkunPengguna.admin(
    idPengguna: "ADM_001",
    username: "chief_engineer",
    email: "chief@hexatech.id",
  );
  administrator.cetakInfo();
}
```

### Cara Menjalankan di Terminal:
```bash
dart run 05_object_oriented/02_constructors_dan_named.dart
```

**Ekspektasi Output Konsol:**
```text
=== PENERAPAN CONSTRUCTOR MULTI-BENTUK ===
------------------------------------------
ID Akun   : USR_101
Username  : akmal_raditya
Email     : akmal@hexatech.id
Role      : MEMBER
Reputasi  : 100 poin
------------------------------------------
ID Akun   : GST_1730000000000
Username  : Pengunjung_Misterius
Email     : guest@hexatech.id
Role      : GUEST
Reputasi  : 10 poin
------------------------------------------
ID Akun   : ADM_001
Username  : chief_engineer
Email     : chief@hexatech.id
Role      : SUPERADMIN
Reputasi  : 999 poin
```

---

## CABANG 3: TUGAS MANDIRI TERSTRUKTUR (3 LEVEL) {#cabang-tugas-mandiri}

Selesaikan 3 tugas bertingkat berikut di sub-folder tugas:

```text
05_object_oriented/tugas/
```

---

### TUGAS 1: MODEL DATA BUKU PERPUSTAKAAN (TINGKAT: DASAR)
* **Lokasi File:** `05_object_oriented/tugas/tugas1_model_buku.dart`
* **Instruksi:** 
  1. Buat class `Buku` dengan properti: `judul` (String), `penulis` (String), `halaman` (int), dan `isTersedia` (bool, default `true`).
  2. Buat constructor standar yang mengisi seluruh properti tersebut.
  3. Buat method `pinjamBuku()` yang mengubah status `isTersedia` menjadi `false` dan mencetak konfirmasi.
  4. Buat method `kembalikanBuku()` yang mengembalikan status ketersediaan menjadi `true`.
  5. Instansiasi 2 objek buku di `main()` dan uji coba pemanggilannya.
* **Ekspektasi Output:**
  ```text
  =========================================
          PERPUSTAKAAN HEXATECH
  =========================================
  Meminjam Buku: 'Clean Code' oleh Robert C. Martin
  Status: Berhasil dipinjam!

  Meminjam Buku: 'Clean Code' oleh Robert C. Martin
  [DITOLAK] Buku saat ini sedang dipinjam orang lain.
  =========================================
  ```

---

### TUGAS 2: REKENING PENGGUNA & MUTASI TRANSAKSI (TINGKAT: TERAPAN)
* **Lokasi File:** `05_object_oriented/tugas/tugas2_rekening_pengguna.dart`
* **Instruksi:** 
  1. Buat class `RekeningPengguna` dengan named parameters constructor:
     - `required String nomorRekening`
     - `required String namaNasabah`
     - `double saldoAwal = 50000.0`
  2. Tambahkan method `setor(double nominal)` dan `tarik(double nominal)`.
  3. Validasi penarikan: penarikan hanya berhasil jika sisa saldo setelah ditarik minimal Rp 20.000 (saldo mengendap minimum).
  4. Cetak riwayat saldo di konsol secara sistematis.
* **Ekspektasi Output:**
  ```text
  =============================================================
                     BUKU TABUNGAN NASABAH
  =============================================================
  Rekening : 109-882-001 | Nasabah: Siti Rahmawati
  Saldo Awal        : Rp 50000.0
  [SETOR] Rp 150000.0 -> Sukses! Saldo sekarang: Rp 200000.0
  [TARIK] Rp 190000.0 -> Gagal: Saldo mengendap minimum Rp 20.000!
  [TARIK] Rp 100000.0 -> Sukses! Saldo sekarang: Rp 100000.0
  =============================================================
  ```

---

### TUGAS 3: SISTEM LOGISTIK ARMADA KENDARAAN (TANTANGAN KREATIF)
* **Lokasi File:** `05_object_oriented/tugas/tugas3_sistem_armada_mobil.dart`
* **Instruksi:** 
  Rancang sistem inventaris armada rental kendaraan dengan named constructor:
  1. Class `ArmadaKendaraan`:
     - Properti: `platNomor`, `model`, `kapasitasKargoKg`, `tahunProduksi`, `tipeBahanBakar`.
  2. Sediakan 3 varian constructor:
     - Constructor Default untuk kendaraan umum.
     - Named Constructor `ArmadaKendaraan.trukLogistik(...)` (kapasitas default 5000 kg, bahan bakar Solar).
     - Named Constructor `ArmadaKendaraan.vanListrik(...)` (bahan bakar otomatis Listrik / EV).
  3. Buat method `hitungEstimasiBiayaSewa(int jumlahHari)`:
     - Truk: Rp 800.000 / hari
     - Van Listrik: Rp 500.000 / hari
     - Umum: Rp 350.000 / hari
  4. Kelola daftar kendaraan dalam `List<ArmadaKendaraan>` dan cetak rekapitulasi armada di `main()`.
* **Ekspektasi Output:**
  ```text
  =============================================================
                    MANAJEMEN ARMADA LOGISTIK
  =============================================================
  [TRUK]  B 9012 TKN | Model: Hino Ranger    | Muatan: 5000 kg | BBM: Solar
          Sewa 3 Hari: Rp 2400000

  [EV]    B 1234 EV  | Model: Hyundai Ioniq 5| Muatan: 800 kg  | BBM: Listrik
          Sewa 3 Hari: Rp 1500000

  [REG]   B 5678 JKT | Model: Toyota Avanza  | Muatan: 400 kg  | BBM: Bensin
          Sewa 3 Hari: Rp 1050000
  =============================================================
  ```

---

## 4. RUBRIK PENILAIAN MANDIRI

| Komponen Penilaian | Tingkat | Kriteria Keberhasilan | Status |
| :--- | :--- | :--- | :--- |
| **Instansiasi & State Objek** | Dasar | Mampu mendeklarasikan class dan menginstansiasi objek independen tanpa interferensi memori | [ ] |
| **Penerapan Constructor Efisien** | Terapan | Memanfaatkan *Initializing Formals* (`this.field`) dan named parameters secara tepat | [ ] |
| **Variasi Named Constructors** | Tantangan | Mengimplementasikan inisialisasi ganda dengan initializer list (`: properti = nilai`) | [ ] |
| **Kemandirian Logika Method** | Umum | Seluruh method bertindak secara internal memanipulasi atribut class (*High Cohesion*) | [ ] |

---

## KESIMPULAN

Class dan Object adalah fondasi yang membentuk arsitektur bahasa Dart. Dengan menguasai pembentukan *blueprint*, inisialisasi objek, dan penyusunan konstruktor yang fleksibel, Anda siap melangkah ke pilar proteksi data: **Encapsulation (Getters & Setters)**!