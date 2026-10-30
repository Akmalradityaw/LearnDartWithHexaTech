# ENCAPSULATION, PRIVATE IDENTIFIERS & GETTERS/SETTERS

*Encapsulation* (Pengkapsulan) adalah pilar fundamental dalam pemrograman berorientasi objek yang bertujuan menyembunyikan detail implementasi internal dan membentengi data (*properties*) sebuah kelas agar tidak dapat dimanipulasi secara ilegal dari luar. 

Dengan enkapsulasi, akses ke data sensitif diwajibkan melalui gerbang resmi (*methods*, *getters*, dan *setters*) yang dilengkapi dengan logika validasi ketat.

---

## POHON MATERI & STRUKTUR FOLDER KERJA

Lanjutkan penulisan kode pada folder kerja `05_object_oriented/` dengan menyusun file-file latihan enkapsulasi berikut:

```text
belajar_dart_hexatech/
└── 05_object_oriented/
    ├── 03_encapsulation_private.dart
    ├── 04_getters_dan_setters.dart
    └── tugas/
        ├── tugas4_kapsulasi_suhu.dart         [Tingkat Dasar]
        ├── tugas5_dompet_digital.dart         [Tingkat Terapan]
        └── tugas6_sistem_gaji_karyawan.dart   [Tantangan Kreatif]
```

> **Petunjuk Kerja:**  
> Buka VS Code pada folder proyek Anda, buat file latihan di bawah ini di dalam `05_object_oriented/`, lalu perhatikan bagaimana sistem visibilitas berbasis file (*library-level privacy*) bekerja di Dart.

---

## CABANG 1: LIBRARY-LEVEL PRIVACY (TANDA UNDERSCORE `_`) {#cabang-1-private-fields}

Berbeda dengan bahasa seperti Java, C++, atau C# yang menggunakan kata kunci `private`, `protected`, dan `public`, **Dart menggunakan tanda garis bawah (*underscore* `_`) di awal nama variabel atau method**.

### 1. Hak Akses Berbasis Berkas (*Library-Level*)
Di Dart, tanda `_` bukan sekadar *class-private*, melainkan **Library-Private**. Artinya:
* Properti dengan awalan `_` **TIDAK BISA** diakses dari file Dart lain (*different library*).
* Properti tersebut tetap bisa diakses oleh kelas lain jika ditulis di dalam file fisik yang sama.

Buat file pertama Anda: `05_object_oriented/03_encapsulation_private.dart`, lalu ketik kode berikut:

```dart
// File: 05_object_oriented/03_encapsulation_private.dart

class BrankasKeuangan {
  String pemilik;
  // Field Private: Diawali tanda _ sehingga terproteksi dari intervensi luar
  double _saldoRahasia;
  String _kodeKunciKeamanan;

  BrankasKeuangan({
    required this.pemilik,
    required double saldoAwal,
    required String kodeKunci,
  })  : _saldoRahasia = saldoAwal,
        _kodeKunciKeamanan = kodeKunci;

  // Method Publik: Gerbang aman untuk menyetor dana
  void setorDana(double nominal) {
    if (nominal <= 0) {
      print("[GAGAL] Nominal setoran harus bernilai positif!");
      return;
    }
    _saldoRahasia += nominal;
    print("[SETOR SUKSES] Berhasil menambah Rp $nominal ke brankas.");
  }

  // Method Publik: Membutuhkan verifikasi kata sandi
  void tarikDana(double nominal, String kunciInput) {
    if (kunciInput != _kodeKunciKeamanan) {
      print("[DITOLAK] Otorisasi Gagal: Kode kunci brankas salah!");
      return;
    }

    if (nominal > _saldoRahasia) {
      print("[DITOLAK] Saldo brankas tidak mencukupi (Tersisa Rp $_saldoRahasia)");
      return;
    }

    _saldoRahasia -= nominal;
    print("[TARIK SUKSES] Berhasil menarik Rp $nominal.");
  }

  void auditKeuangan() {
    print("\n--- AUDIT BRANKAS RESMI ---");
    print("Pemilik Brankas : $pemilik");
    print("Saldo Tersimpan : Rp $_saldoRahasia");
  }
}

void main() {
  print("=== SIMULASI ENKAPSULASI BRANKAS ===");

  BrankasKeuangan brankasBudi = BrankasKeuangan(
    pemilik: "Budi Santoso",
    saldoAwal: 500000.0,
    kodeKunci: "SECRET_998",
  );

  brankasBudi.setorDana(250000.0);

  // Percobaan ilegal penarikan tanpa kunci yang benar
  brankasBudi.tarikDana(100000.0, "SALAH_KUNCI");

  // Penarikan legal dengan otorisasi tepat
  brankasBudi.tarikDana(300000.0, "SECRET_998");

  brankasBudi.auditKeuangan();
}
```

### Cara Menjalankan di Terminal:
```bash
dart run 05_object_oriented/03_encapsulation_private.dart
```

**Ekspektasi Output Konsol:**
```text
=== SIMULASI ENKAPSULASI BRANKAS ===
[SETOR SUKSES] Berhasil menambah Rp 250000.0 ke brankas.
[DITOLAK] Otorisasi Gagal: Kode kunci brankas salah!
[TARIK SUKSES] Berhasil menarik Rp 300000.0.

--- AUDIT BRANKAS RESMI ---
Pemilik Brankas : Budi Santoso
Saldo Tersimpan : Rp 450000.0
```

---

## CABANG 2: GETTERS & SETTERS DENGAN VALIDASI DATA {#cabang-2-getters-setters}

Terkadang kita ingin data privat dapat dibaca seolah-olah properti publik biasa (*Getter*), atau diperbarui dengan batasan logika tertentu (*Setter*).

### 1. Kata Kunci `get` (Membaca Nilai Terproteksi / Nilai Hitung)
```dart
tipeData get namaProperty => _variabelPrivate;
```

### 2. Kata Kunci `set` (Memvalidasi Input Sebelum Mengubah Nilai)
```dart
set namaProperty(tipeData nilaiBaru) {
  // Validasi nilai sebelum menimpa data
  _variabelPrivate = nilaiBaru;
}
```

Buat file kedua: `05_object_oriented/04_getters_dan_setters.dart`:

```dart
// File: 05_object_oriented/04_getters_dan_setters.dart

class PengukurKecepatan {
  String tipeKendaraan;
  double _kecepatanKmPerJam = 0.0; // Private property

  PengukurKecepatan(this.tipeKendaraan);

  // 1. Getter Sederhana
  double get kecepatan => _kecepatanKmPerJam;

  // 2. Computed Getter (Nilai terhitung otomatis dalam mil/jam)
  double get kecepatanMph => _kecepatanKmPerJam * 0.621371;

  // 3. Computed Getter Status Bahaya
  bool get isOverspeed => _kecepatanKmPerJam > 120.0;

  // 4. Setter dengan Logika Validasi Ketat
  set kecepatan(double nilaiBaru) {
    if (nilaiBaru < 0) {
      print("[ERROR SETTER] Kecepatan tidak boleh negatif ($nilaiBaru km/jam)!");
    } else if (nilaiBaru > 350) {
      print("[ERROR SETTER] Kecepatan ($nilaiBaru km/jam) melampaui batas fisik kendaraan!");
    } else {
      _kecepatanKmPerJam = nilaiBaru;
      print("[UPDATE] Kecepatan diatur ke $_kecepatanKmPerJam km/jam.");
    }
  }
}

void main() {
  print("=== IMPLEMENTASI GETTER & SETTER ===");

  PengukurKecepatan speedo = PengukurKecepatan("Sport Car");

  // Mengisi data lewat Setter (Sintaks mirip variabel biasa!)
  speedo.kecepatan = 80.0;
  print("Kecepatan Saat Ini : ${speedo.kecepatan} km/jam");
  print("Konversi Kecepatan : ${speedo.kecepatanMph.toStringAsFixed(1)} mph");
  print("Status Bahaya      : ${speedo.isOverspeed ? "BAHAYA" : "AMAN"}");

  // Uji coba validasi setter (Nilai Negatif)
  print("\n--- UJI VALIDASI 1 (NEGATIF) ---");
  speedo.kecepatan = -20.0;

  // Uji coba overspeed
  print("\n--- UJI VALIDASI 2 (OVERSPEED) ---");
  speedo.kecepatan = 145.0;
  print("Status Bahaya      : ${speedo.isOverspeed ? "BAHAYA (OVERSPEED)" : "AMAN"}");
}
```

### Cara Menjalankan di Terminal:
```bash
dart run 05_object_oriented/04_getters_dan_setters.dart
```

**Ekspektasi Output Konsol:**
```text
=== IMPLEMENTASI GETTER & SETTER ===
[UPDATE] Kecepatan diatur ke 80.0 km/jam.
Kecepatan Saat Ini : 80.0 km/jam
Konversi Kecepatan : 49.7 mph
Status Bahaya      : AMAN

--- UJI VALIDASI 1 (NEGATIF) ---
[ERROR SETTER] Kecepatan tidak boleh negatif (-20.0 km/jam)!

--- UJI VALIDASI 2 (OVERSPEED) ---
[UPDATE] Kecepatan diatur ke 145.0 km/jam.
Status Bahaya      : BAHAYA (OVERSPEED)
```

---

## CABANG 3: TUGAS MANDIRI TERSTRUKTUR (3 LEVEL) {#cabang-tugas-mandiri}

Selesaikan 3 tugas bertingkat berikut di sub-folder tugas:

```text
05_object_oriented/tugas/
```

---

### TUGAS 1: ENKAPSULASI KONVERTER SUHU MANDIRI (TINGKAT: DASAR)
* **Lokasi File:** `05_object_oriented/tugas/tugas4_kapsulasi_suhu.dart`
* **Instruksi:** 
  1. Buat class `TermometerDigital`:
     - Properti privat: `double _celcius = 0.0;`
  2. Sediakan setter `celcius`:
     - Tolak nilai di bawah batas nol mutlak fisika (`nilaiBaru < -273.15`) dengan pesan error.
  3. Sediakan 3 getter:
     - `get celcius` (mengembalikan `_celcius`).
     - `get fahrenheit` (menghitung `(_celcius * 9 / 5) + 32`).
     - `get kelvin` (menghitung `_celcius + 273.15`).
  4. Uji di `main()` dengan suhu normal dan suhu di bawah nol mutlak.
* **Ekspektasi Output:**
  ```text
  =========================================
           TERMOMETER DIGITAL IOT
  =========================================
  Input Suhu: 36.5 C
  - Skala Celcius   : 36.5 C
  - Skala Fahrenheit: 97.7 F
  - Skala Kelvin    : 309.65 K

  [ERROR] Suhu -300.0 C melanggar hukum termodinamika (Nol Mutlak)!
  =========================================
  ```

---

### TUGAS 2: PROTEKSI TRANSAKSI DOMPET DIGITAL (TINGKAT: TERAPAN)
* **Lokasi File:** `05_object_oriented/tugas/tugas5_dompet_digital.dart`
* **Instruksi:** 
  1. Buat class `DompetDigital`:
     - Properti: `String idDompet`, `String namaPengguna`.
     - Properti privat: `double _saldo`, `int _pinKeamanan`.
  2. Constructor menerima data awal lengkap.
  3. Method `topUp(double nominal)` menambah saldo jika nominal >= Rp 10.000.
  4. Method `bayarMerchant({required double nominal, required int pinInput, required String namaMerchant})`:
     - Verifikasi kecocokan PIN.
     - Verifikasi kecukupan saldo.
     - Jika lolos, potong saldo dan cetak struk pembayaran.
* **Ekspektasi Output:**
  ```text
  =============================================================
                    DOMPET DIGITAL HEXAPAY
  =============================================================
  Pemilik : Akmal Raditya | Saldo Awal: Rp 100000.0
  [TOP UP] Sukses menambah saldo sebesar Rp 50000.0
  [TRANSAKSI] Pembayaran Rp 75000.0 ke 'Kopi Senja' SUKSES!
              Sisa Saldo: Rp 75000.0
  [TRANSAKSI] Pembayaran Gagal: PIN Keamanan Tidak Valid!
  =============================================================
  ```

---

### TUGAS 3: SISTEM PENGGAJIAN & AUDIT KARYAWAN (TANTANGAN KREATIF)
* **Lokasi File:** `05_object_oriented/tugas/tugas6_sistem_gaji_karyawan.dart`
* **Instruksi:** 
  Rancang sistem penggajian perusahaan dengan kalkulasi bertingkat terenkapsulasi:
  1. Class `KaryawanKontrak`:
     - Properti: `idKaryawan`, `nama`.
     - Properti privat: `double _gajiPokok`, `int _jamLembur`, `double _potonganBPJS`.
  2. Setter `jamLembur` membatasi maksimal 40 jam per bulan (jika lebih, tolak dengan pesan peringatan).
  3. Computed Getter:
     - `get uangLembur` (dihitung: `_jamLembur * 50.000`).
     - `get gajiKotor` (dihitung: `_gajiPokok + uangLembur`).
     - `get gajiBersih` (dihitung: `gajiKotor - _potonganBPJS`).
  4. Cetak slip gaji komprehensif dari `main()`.
* **Ekspektasi Output:**
  ```text
  =============================================================
                     SLIP GAJI BULANAN RESMI
  =============================================================
  ID Karyawan      : EMP-2026-088
  Nama Karyawan    : Hendra Gunawan
  Gaji Pokok       : Rp 6000000.0
  Lembur (20 jam)  : Rp 1000000.0
  -------------------------------------------------------------
  Penghasilan Kotor: Rp 7000000.0
  Potongan BPJS    : Rp 210000.0
  -------------------------------------------------------------
  GAJI BERSIH (TAKE HOME PAY): Rp 6790000.0
  =============================================================
  ```

---

## 4. RUBRIK PENILAIAN MANDIRI

| Komponen Penilaian | Tingkat | Kriteria Keberhasilan | Status |
| :--- | :--- | :--- | :--- |
| **Prinsip Information Hiding** | Dasar | Data sensitif tidak dapat diakses atau diubah langsung tanpa melalui getter/setter | [ ] |
| **Validasi Setter Ketat** | Terapan | Mampu menangkal anomali data (nilai negatif, melampaui batas batas logika) | [ ] |
| **Computed Properties (Getter)** | Tantangan | Nilai turunan tidak disimpan berulang dalam memori, melainkan dihitung on-the-fly lewat getter | [ ] |
| **Integritas Penamaan** | Umum | Seluruh anggota privat menggunakan awalan underscore (`_`) secara konsisten | [ ] |

---

## KESIMPULAN

Enkapsulasi memastikan aplikasi Anda tetap aman, modular, dan terhindar dari kondisi data yang rusak (*corrupted state*). Dengan memadukan tanda privat `_`, getter, dan setter, kode Anda siap untuk diintegrasikan ke pilar relasi kelas berikutnya: **Inheritance & Abstract Class**!