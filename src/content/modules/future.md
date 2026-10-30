# EVENT LOOP & FUTURE (FONDASI ASINKRON DART)

Di era komputasi modern, aplikasi harus tetap responsif: antarmuka pengguna tidak boleh berhenti (*freeze*) saat sedang mengunduh data besar dari server, membaca file dari disk, atau melakukan kueri ke basis data lokal. 

Meskipun bahasa Dart bekerja di atas model utas tunggal (*single-threaded*), Dart mampu menangani operasi yang memakan waktu lama secara simultan melalui arsitektur canggih bernama **Event Loop** dan representasi data masa depan bernama **`Future`**.

---

## POHON MATERI & STRUKTUR FOLDER KERJA

Siapkan folder kerja baru untuk modul pamungkas ini di dalam proyek Anda: `06_asynchronous_dart/`. Berikut adalah peta alur file yang akan kita buat:

```text
belajar_dart_hexatech/
└── 06_asynchronous_dart/
    ├── 01_event_loop_urutan.dart
    ├── 02_future_lifecycle_then.dart
    └── tugas/
        ├── tugas1_simulasi_panggilan_api.dart [Tingkat Dasar]
        ├── tugas2_download_antrean_file.dart  [Tingkat Terapan]
        └── tugas3_failover_multi_server.dart   [Tantangan Kreatif]
```

> **Petunjuk Kerja:**  
> Buka VS Code di folder proyek Anda, buat folder `06_asynchronous_dart/`, lalu jalankan setiap berkas latihan melalui terminal untuk mengamati urutan eksekusi asinkron secara visual.

---

## CABANG 1: DART EVENT LOOP & DUAL-QUEUE EXECUTION {#cabang-1-event-loop-microtask}

Bagaimana mungkin prosesor dengan 1 *thread* bisa menjalankan pekerjaan latar belakang tanpa membekukan antarmuka? Kuncinya terletak pada **Event Loop**.

### 1. Dua Antrean Utama Event Loop
Event Loop Dart terus berputar dan memeriksa dua antrean tugas (*task queues*) dengan aturan prioritas mutlak:
* **Microtask Queue (Prioritas Sangat Tinggi)**: Berisi tugas-tugas internal yang sangat mendesak dan harus segera diselesaikan sebelum tugas berikutnya disentuh (`scheduleMicrotask`).
* **Event Queue (Prioritas Standar)**: Berisi event eksternal seperti klik tombol, respons I/O disk, paket jaringan internet dari API, serta timer (`Future.delayed`).

Event Loop akan menyelesaikan **seluruh antrean Microtask sampai kosong**, barulah kemudian mengambil satu per satu tugas dari **Event Queue**.

Buat file pertama Anda: `06_asynchronous_dart/01_event_loop_urutan.dart`, lalu ketik kode berikut:

```dart
// File: 06_asynchronous_dart/01_event_loop_urutan.dart
import 'dart:async';

void main() {
  print("1. [SYNCHRONOUS] Blok Utama Dimulai (Awal Eksekusi)");

  // 1. Tugas dijadwalkan ke Event Queue (Timer)
  Future.delayed(Duration(seconds: 1), () {
    print("5. [EVENT QUEUE] Timer 1 detik selesai diproses.");
  });

  // 2. Tugas dijadwalkan ke Event Queue tanpa delay (Langsung masuk antrean event)
  Future(() {
    print("4. [EVENT QUEUE] Future standar dieksekusi.");
  });

  // 3. Tugas dijadwalkan ke Microtask Queue (Prioritas Tertinggi)
  scheduleMicrotask(() {
    print("3. [MICROTASK QUEUE] Microtask mendesak dieksekusi sebelum Event Queue!");
  });

  print("2. [SYNCHRONOUS] Blok Utama Selesai (Synchronous Code Tuntas)");
}
```

### Cara Menjalankan di Terminal:
```bash
dart run 06_asynchronous_dart/01_event_loop_urutan.dart
```

**Ekspektasi Output Konsol:**
```text
1. [SYNCHRONOUS] Blok Utama Dimulai (Awal Eksekusi)
2. [SYNCHRONOUS] Blok Utama Selesai (Synchronous Code Tuntas)
3. [MICROTASK QUEUE] Microtask mendesak dieksekusi sebelum Event Queue!
4. [EVENT QUEUE] Future standar dieksekusi.
5. [EVENT QUEUE] Timer 1 detik selesai diproses.
```

---

## CABANG 2: SIKLUS HIDUP `Future`, `.then()` & `.catchError()` {#cabang-2-future-lifecycle}

Objek `Future<T>` adalah representasi dari komputasi yang nilainya (bertipe `T`) **belum tersedia sekarang**, melainkan baru akan selesai di masa mendatang (*Promise*).

### 1. Siklus Hidup (Lifecycle) Future
* **Uncompleted (Tertunda / Pending)**: Operasi asinkron sedang berjalan di latar belakang.
* **Completed with Data (Sukses / Resolved)**: Operasi tuntas dan menghasilkan nilai balik `T`.
* **Completed with Error (Gagal / Rejected)**: Operasi gagal (misal: koneksi terputus) dan melempar eksepsi.

### 2. Penanganan Nilai dengan `.then()`, `.catchError()`, dan `.whenComplete()`
```dart
ambilDataDariServer()
    .then((hasil) => print("Data diterima: $hasil"))
    .catchError((error) => print("Error: $error"))
    .whenComplete(() => print("Proses transaksi ditutup."));
```

Buat file kedua: `06_asynchronous_dart/02_future_lifecycle_then.dart`:

```dart
// File: 06_asynchronous_dart/02_future_lifecycle_then.dart

// Fungsi simulasi fetch data dari server API
Future<String> fetchProfilSiswa(int idSiswa) {
  print("[NETWORK] Mengirim HTTP Request ke server untuk ID: $idSiswa...");

  return Future.delayed(Duration(seconds: 2), () {
    if (idSiswa <= 0) {
      // Melempar error jika ID tidak valid
      throw Exception("ID Siswa tidak valid: $idSiswa (Harus angka positif)");
    }
    // Berhasil mengembalikan string data JSON simulasi
    return "{ 'id': $idSiswa, 'nama': 'Akmal Raditya', 'skor': 95 }";
  });
}

void main() {
  print("=== SIKLUS HIDUP FUTURE DENGAN .THEN() ===");

  // 1. Kasus Sukses
  fetchProfilSiswa(101)
      .then((hasilJson) {
        print("\n[RESPONSE 101 SUKSES]");
        print("Data Payload : $hasilJson");
      })
      .catchError((error) {
        print("[RESPONSE 101 GAGAL] $error");
      })
      .whenComplete(() {
        print("[STATUS] Koneksi HTTP 101 ditutup rapi.");
      });

  // 2. Kasus Gagal (Error Handling)
  fetchProfilSiswa(-5)
      .then((hasil) {
        print("[RESPONSE -5] $hasil");
      })
      .catchError((error) {
        print("\n[RESPONSE -5 GAGAL TERTANGKAP]");
        print("Keterangan Error: $error");
      })
      .whenComplete(() {
        print("[STATUS] Koneksi HTTP -5 ditutup rapi.");
      });

  print(">> Main function selesai dieksekusi (UI tidak freeze) <<");
}
```

### Cara Menjalankan di Terminal:
```bash
dart run 06_asynchronous_dart/02_future_lifecycle_then.dart
```

**Ekspektasi Output Konsol:**
```text
=== SIKLUS HIDUP FUTURE DENGAN .THEN() ===
[NETWORK] Mengirim HTTP Request ke server untuk ID: 101...
[NETWORK] Mengirim HTTP Request ke server untuk ID: -5...
>> Main function selesai dieksekusi (UI tidak freeze) <<

[RESPONSE 101 SUKSES]
Data Payload : { 'id': 101, 'nama': 'Akmal Raditya', 'skor': 95 }
[STATUS] Koneksi HTTP 101 ditutup rapi.

[RESPONSE -5 GAGAL TERTANGKAP]
Keterangan Error: Exception: ID Siswa tidak valid: -5 (Harus angka positif)
[STATUS] Koneksi HTTP -5 ditutup rapi.
```

---

## CABANG 3: TUGAS MANDIRI TERSTRUKTUR (3 LEVEL) {#cabang-tugas-mandiri}

Selesaikan 3 tugas bertingkat berikut di sub-folder tugas:

```text
06_asynchronous_dart/tugas/
```

---

### TUGAS 1: SIMULATOR PERMINTAAN API CUACA (TINGKAT: DASAR)
* **Lokasi File:** `06_asynchronous_dart/tugas/tugas1_simulasi_panggilan_api.dart`
* **Instruksi:** 
  1. Buat fungsi `Future<Map<String, dynamic>> ambilInfoCuaca(String kota)`.
  2. Gunakan `Future.delayed(Duration(seconds: 2))` untuk mensimulasikan latensi jaringan.
  3. Kembalikan data map: `{"kota": kota, "suhu": 29.5, "kondisi": "Cerah Berawan"}`.
  4. Panggil fungsi di `main()` menggunakan `.then()` dan cetak hasilnya dengan rapi.
* **Ekspektasi Output:**
  ```text
  =========================================
          BADAN METEOROLOGI HEXATECH
  =========================================
  [REQUEST] Mengunduh sensor cuaca Kota Bandung...
  (Menunggu jeda 2 detik)
  [SUKSES] Laporan Cuaca Diterima:
  - Kota    : Bandung
  - Suhu    : 29.5 C
  - Kondisi : Cerah Berawan
  =========================================
  ```

---

### TUGAS 2: PENGUNDUH ANTREAN FILE PARALEL (TINGKAT: TERAPAN)
* **Lokasi File:** `06_asynchronous_dart/tugas/tugas2_download_antrean_file.dart`
* **Instruksi:** 
  1. Buat fungsi `Future<String> unduhFile(String namaFile, int durasiDetik)`.
  2. Jika nama file berakhiran `.exe`, lemparkan `Exception("File berpotensi membahayakan sistem!")`.
  3. Jika aman, kembalikan `"File '$namaFile' berhasil diunduh dalam $durasiDetik detik"`.
  4. Unduh 3 file sekaligus dari `main()`: `dokumen.pdf` (1 detik), `virus.exe` (1 detik), dan `foto.png` (2 detik).
  5. Tangani seluruh respons dengan `.then()` dan `.catchError()`.
* **Ekspektasi Output:**
  ```text
  =============================================================
                  DOWNLOAD MANAGER MULTI-STREAM
  =============================================================
  [MULAI] Memulai antrean download untuk 3 berkas...
  [SUKSES] File 'dokumen.pdf' berhasil diunduh dalam 1 detik.
  [DITOLAK] Gagal unduh 'virus.exe': Exception: File berpotensi membahayakan sistem!
  [SUKSES] File 'foto.png' berhasil diunduh dalam 2 detik.
  =============================================================
  ```

---

### TUGAS 3: FAILOVER MULTI-SERVER REDUNDANCY (TANTANGAN KREATIF)
* **Lokasi File:** `06_asynchronous_dart/tugas/tugas3_failover_multi_server.dart`
* **Instruksi:** 
  Rancang sistem pencari data dengan mekanisme failover server otomatis (*high-availability*):
  1. Buat fungsi `Future<String> requestServerUtama()` yang selalu gagal (melempar error timeout jaringan setelah 1 detik).
  2. Buat fungsi `Future<String> requestServerCadangan()` yang berhasil mengembalikan data `"Payload Cadangan Terenkripsi"` setelah 1.5 detik.
  3. Hubungkan pemanggilan secara berantai: jika server utama gagal di `.catchError()`, segera alihkan panggilan ke `requestServerCadangan().then(...)`.
  4. Cetak log perpindahan failover secara transparan di konsol.
* **Ekspektasi Output:**
  ```text
  =============================================================
             SISTEM FAILOVER DATABASE REDUNDAN
  =============================================================
  [1] Mencoba koneksi ke Server Primer (Jakarta Gateway)...
  [ERROR] Server Primer Timeout! Mengaktifkan protokol Failover...
  [2] Mengalihkan rute ke Server Sekunder (Singapura Backup)...
  [SUKSES] Data Berhasil Diambil: Payload Cadangan Terenkripsi
  -------------------------------------------------------------
  STATUS INFRASTRUKTUR: Failover Berjalan Mulus Tanpa Gangguan
  =============================================================
  ```

---

## 4. RUBRIK PENILAIAN MANDIRI

| Komponen Penilaian | Tingkat | Kriteria Keberhasilan | Status |
| :--- | :--- | :--- | :--- |
| **Pemahaman Model Single-Thread** | Dasar | Memahami bahwa `Future` tidak membuat thread baru melainkan memutar antrean pada event loop | [ ] |
| **Penanganan Error Terisolasi** | Terapan | Menjamin setiap kegagalan asinkron selalu dicegat oleh `.catchError()` tanpa unhandled exceptions | [ ] |
| **Rantai Asinkron (Chaining)** | Tantangan | Mampu menghubungkan transisi dari satu Future yang gagal ke Future cadangan berikutnya | [ ] |
| **Siklus Hidup Complete** | Umum | Selalu membersihkan state akhir atau koneksi menggunakan `.whenComplete()` | [ ] |

---

## KESIMPULAN

Event Loop dan Future adalah fondasi seluruh arsitektur non-blocking di Dart. Mengetahui cara kerja antrean *Microtask* dan *Event Queue* memberikan Anda pemahaman mendalam tentang bagaimana aplikasi memproses data tanpa mengorbankan kelancaran animasi antarmuka pengguna.

Pada bab berikutnya, kita akan mempelajari sintaks modern yang membuat kode asinkron menjadi sangat bersih dan mudah dibaca: **Async & Await**!