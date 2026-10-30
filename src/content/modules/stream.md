# STREAM & REACTIVE PROGRAMMING (ALIRAN DATA KONTINU)

Jika objek `Future` merepresentasikan nilai tunggal yang akan tiba satu kali di masa mendatang, maka **`Stream`** merepresentasikan **aliran data beruntun yang mengalir terus-menerus seiring berjalannya waktu**.

Bayangkan `Stream` seperti sebuah pipa atau ban berjalan (*conveyor belt*): data dilemparkan dari satu ujung, dan siapapun yang mendengarkan (*subscriber*) di ujung lainnya akan menerima setiap potongan data tersebut secara instan. Konsep ini adalah fondasi dari *Reactive Programming*, arsitektur *BLoC*, *RxDart*, dan koneksi *Realtime* (seperti Firebase Firestore atau WebSockets) di Flutter.

---

## POHON MATERI & STRUKTUR FOLDER KERJA

Tuntaskan seluruh kurikulum pembelajaran Dart Anda dengan menyelesaikan berkas latihan terakhir di dalam folder `06_asynchronous_dart/`:

```text
belajar_dart_hexatech/
└── 06_asynchronous_dart/
    ├── 05_stream_generator_yield.dart
    ├── 06_stream_controller_broadcast.dart
    └── tugas/
        ├── tugas7_countdown_timer.dart        [Tingkat Dasar]
        ├── tugas8_sensor_iot_telemetri.dart   [Tingkat Terapan]
        └── tugas9_chat_room_realtime.dart     [Tantangan Kreatif]
```

> **Petunjuk Kerja:**  
> Buka VS Code pada folder proyek Anda, buat file latihan di dalam `06_asynchronous_dart/`, lalu jalankan melalui terminal untuk melihat aliran data bergerak secara real-time.

---

## CABANG 1: ASYNC GENERATOR (`async*`), KATA KUNCI `yield` & KONSUMSI `await for` {#cabang-1-generator-async-yield}

Cara termudah dan paling bersih untuk membuat sebuah `Stream` adalah menggunakan fungsi generator asinkron.

### 1. Perbedaan `async` vs `async*`
* **`async`**: Menghasilkan tepat satu nilai yang dibungkus dalam `Future<T>`. Nilai dikembalikan dengan kata kunci `return`.
* **`async*` (Async Generator)**: Menghasilkan urutan banyak nilai bertipe `Stream<T>`. Setiap nilai dipancarkan keluar menggunakan kata kunci **`yield`** tanpa menghentikan eksekusi fungsi.

### 2. Konsumsi Stream dengan `await for`
Sama seperti perulangan `for-in` yang menelusuri data `List`, sintaks **`await for (T data in stream)`** akan menunggu dan mengeksekusi blok kode setiap kali ada data baru yang dipancarkan oleh `Stream`.

Buat file pertama Anda: `06_asynchronous_dart/05_stream_generator_yield.dart`, lalu ketik kode berikut:

```dart
// File: 06_asynchronous_dart/05_stream_generator_yield.dart

// 1. Fungsi Generator Stream bertanda async*
Stream<int> buatPancaranAngka(int batasMaksimal) async* {
  print("[STREAM GENERATOR] Pipa data dibuka...");

  for (int i = 1; i <= batasMaksimal; i++) {
    // Memberi jeda 1 detik di setiap pemancaran data
    await Future.delayed(Duration(seconds: 1));
    
    // Kata kunci 'yield' memancarkan data keluar ke subscriber
    yield i;
  }

  print("[STREAM GENERATOR] Pipa data selesai dan ditutup.");
}

void main() async {
  print("=== MENERIMA ALIRAN STREAM DENGAN AWAIT FOR ===");
  print("Memulai langganan stream (Menunggu data masuk per detik)...");

  Stream<int> aliranAngka = buatPancaranAngka(3);

  // await for akan menjeda loop hingga ada data baru yang dipancarkan
  await for (int angka in aliranAngka) {
    print("-> Data Diterima Subscriber: Angka $angka");
  }

  print("=== SELURUH DATA STREAM TELAH SELESAI DIPROSES ===");
}
```

### Cara Menjalankan di Terminal:
```bash
dart run 06_asynchronous_dart/05_stream_generator_yield.dart
```

**Ekspektasi Output Konsol:**
```text
=== MENERIMA ALIRAN STREAM DENGAN AWAIT FOR ===
Memulai langganan stream (Menunggu data masuk per detik)...
[STREAM GENERATOR] Pipa data dibuka...
(Jeda 1 detik)
-> Data Diterima Subscriber: Angka 1
(Jeda 1 detik)
-> Data Diterima Subscriber: Angka 2
(Jeda 1 detik)
-> Data Diterima Subscriber: Angka 3
[STREAM GENERATOR] Pipa data selesai dan ditutup.
=== SELURUH DATA STREAM TELAH SELESAI DIPROSES ===
```

---

## CABANG 2: STREAMCONTROLLER, LISTEN & BROADCAST STREAM {#cabang-2-stream-controller-await-for}

Ketika membuat arsitektur aplikasi (seperti State Management BLoC), data tidak selalu dihasilkan oleh perulangan internal `async*`, melainkan dipicu oleh interaksi pengguna (misal klik tombol, ketikan keyboard). Untuk itu kita menggunakan **`StreamController`**.

### 1. Single-Subscription vs Broadcast Stream
* **Single-Subscription Stream (Bawaan)**: Hanya mengizinkan **tepat satu pendengar** (*single listener*). Jika Anda mendaftarkan pendengar kedua, program akan mengalami error.
* **Broadcast Stream (`.broadcast()`)**: Mengizinkan **banyak pendengar secara bersamaan** (*multiple listeners*), seperti pemancar radio ke ribuan penerima.

### 2. Method `listen()`
Metode langsung untuk mendaftarkan callback: `onData`, `onError`, dan `onDone`.

Buat file kedua: `06_asynchronous_dart/06_stream_controller_broadcast.dart`:

```dart
// File: 06_asynchronous_dart/06_stream_controller_broadcast.dart
import 'dart:async';

void main() async {
  print("=== IMPLEMENTASI STREAMCONTROLLER BROADCAST ===");

  // 1. Inisialisasi Broadcast Controller agar bisa didengarkan banyak subscriber
  StreamController<String> notifikasiCenter = StreamController<String>.broadcast();

  // 2. Subscriber Pertama: Modul Tampilan Layar UI
  notifikasiCenter.stream.listen(
    (pesan) {
      print("[UI DISPLAYER] Memperbarui widget layar: '$pesan'");
    },
    onDone: () => print("[UI DISPLAYER] Koneksi tampilan ditutup."),
  );

  // 3. Subscriber Kedua: Modul Pencatat Log Sistem
  notifikasiCenter.stream.listen(
    (pesan) {
      print("[AUDIT LOGGER] Menulis ke file log: Event '$pesan' tercatat.");
    },
    onDone: () => print("[AUDIT LOGGER] File log ditutup."),
  );

  // 4. Memancarkan Data (Sink / Input)
  print("\n--- PENGIRIMAN EVENT PERTAMA ---");
  notifikasiCenter.sink.add("User 'Akmal' Berhasil Login");
  await Future.delayed(Duration(milliseconds: 500));

  print("\n--- PENGIRIMAN EVENT KEDUA ---");
  notifikasiCenter.sink.add("Pembaruan Profil Tersimpan");
  await Future.delayed(Duration(milliseconds: 500));

  print("\n--- MENUTUP STREAM CONTROLLER ---");
  // Selalu tutup controller saat sudah tidak digunakan untuk mencegah kebocoran memori (Memory Leak)
  await notifikasiCenter.close();
}
```

### Cara Menjalankan di Terminal:
```bash
dart run 06_asynchronous_dart/06_stream_controller_broadcast.dart
```

**Ekspektasi Output Konsol:**
```text
=== IMPLEMENTASI STREAMCONTROLLER BROADCAST ===

--- PENGIRIMAN EVENT PERTAMA ---
[UI DISPLAYER] Memperbarui widget layar: 'User 'Akmal' Berhasil Login'
[AUDIT LOGGER] Menulis ke file log: Event 'User 'Akmal' Berhasil Login' tercatat.

--- PENGIRIMAN EVENT KEDUA ---
[UI DISPLAYER] Memperbarui widget layar: 'Pembaruan Profil Tersimpan'
[AUDIT LOGGER] Menulis ke file log: Event 'Pembaruan Profil Tersimpan' tercatat.

--- MENUTUP STREAM CONTROLLER ---
[UI DISPLAYER] Koneksi tampilan ditutup.
[AUDIT LOGGER] File log ditutup.
```

---

## CABANG 3: TUGAS MANDIRI TERSTRUKTUR (3 LEVEL) {#cabang-tugas-mandiri}

Tuntaskan 3 tugas pamungkas berikut di sub-folder tugas:

```text
06_asynchronous_dart/tugas/
```

---

### TUGAS 1: GENERATOR HITUNG MUNDUR ROKET (TINGKAT: DASAR)
* **Lokasi File:** `06_asynchronous_dart/tugas/tugas7_countdown_timer.dart`
* **Instruksi:** 
  1. Buat fungsi generator `Stream<int> countdownPeluncuran(int detikMulai) async*`.
  2. Gunakan loop hitung mundur dari `detikMulai` hingga `1` dengan jeda 1 detik per iterasi.
  3. Di `main()`, dengarkan stream menggunakan method `.listen()`:
     - Cetak setiap detik: `T-minus $detik detik...`.
     - Pada `onDone()`, cetak: `[LIFT-OFF] Roket Meluncur ke Angkasa!`.
* **Ekspektasi Output:**
  ```text
  =========================================
            PUSAT KENDALI PELUNCURAN
  =========================================
  T-minus 3 detik...
  (Jeda 1 detik)
  T-minus 2 detik...
  (Jeda 1 detik)
  T-minus 1 detik...
  (Jeda 1 detik)
  [LIFT-OFF] Roket Meluncur ke Angkasa!
  =========================================
  ```

---

### TUGAS 2: TELEMETRI SENSOR IOT REALTIME (TINGKAT: TERAPAN)
* **Lokasi File:** `06_asynchronous_dart/tugas/tugas8_sensor_iot_telemetri.dart`
* **Instruksi:** 
  1. Buat generator `Stream<double> streamSensorSuhu(int jumlahSampel) async*` yang memancarkan suhu acak/bervariasi (misal: 28.0, 31.5, 42.0, 35.0) setiap 800ms.
  2. Gunakan operator pengolah stream:
     - `.where((suhu) => suhu > 30.0)` (hanya meneruskan suhu di atas 30 derajat Celsius).
  3. Di `main()`, gunakan `await for` untuk memproses seluruh anomali suhu tinggi dan cetak peringatan jika `suhu > 40.0` (`[BAHAYA OVERHEAT]`).
* **Ekspektasi Output:**
  ```text
  =============================================================
             MONITORING TELEMETRI SENSOR SUHU MESIN
  =============================================================
  [MONITOR] Menghubungkan ke pemancar sensor...
  [PERINGATAN] Suhu Terdeteksi: 31.5 C (Kondisi Hangat)
  [BAHAYA OVERHEAT] Suhu Kritis: 42.0 C! Kipas Darurat Aktif!
  [PERINGATAN] Suhu Terdeteksi: 35.0 C (Kondisi Hangat)
  -------------------------------------------------------------
  STATUS TELEMETRI: Seluruh Sampel Selesai Dianalisis
  =============================================================
  ```

---

### TUGAS 3: SIMULASI CHAT ROOM MULTI-SUBSCRIBER (TANTANGAN KREATIF)
* **Lokasi File:** `06_asynchronous_dart/tugas/tugas9_chat_room_realtime.dart`
* **Instruksi:** 
  Rancang sistem ruang obrolan (*Chat Room*) realtime menggunakan `StreamController.broadcast()`:
  1. Class `ChatRoom`:
     - Memiliki `StreamController<Map<String, String>> _pesanController`.
     - Method `kirimPesan(String pengirim, String isiPesan)`.
     - Method `Stream<Map<String, String>> get onPesanBaru => _pesanController.stream;`.
     - Method `tutupRoom()`.
  2. Di `main()`, buat dua subscriber independen:
     - Klien User 1: Menampilkan format obrolan antarmuka pengguna.
     - Klien Analitik AI: Memeriksa apakah ada kata kunci terlarang (misal kata `"spam"`).
  3. Kirimkan 3 pesan berbeda, amati bagaimana kedua subscriber bereaksi secara independen, lalu tutup stream secara aman.
* **Ekspektasi Output:**
  ```text
  =============================================================
                   REALTIME CHAT ENGINE HEXATECH
  =============================================================
  [USER VIEW] Budi: Halo semua, selamat datang di kelas Dart!
  [AI ANALYTICS] Sentimen Positif Terdeteksi dari User 'Budi'.

  [USER VIEW] Siti: Materi Stream ini sangat bermanfaat untuk Flutter.
  [AI ANALYTICS] Sentimen Positif Terdeteksi dari User 'Siti'.

  [USER VIEW] Anonim: Dapatkan hadiah gratis klik link spam ini!
  [AI ANALYTICS] PERINGATAN: Konten Spam Terdeteksi dari 'Anonim'!
  -------------------------------------------------------------
  CHAT ROOM DITUTUP: Seluruh Subscriber Dinonaktifkan
  =============================================================
  ```

---

## 4. RUBRIK PENILAIAN MANDIRI

| Komponen Penilaian | Tingkat | Kriteria Keberhasilan | Status |
| :--- | :--- | :--- | :--- |
| **Pemanfaatan Async Generator** | Dasar | Tepat dalam menggunakan sintaks `async*` dan pemancaran nilai beruntun via `yield` | [ ] |
| **Operasi Penyaringan Stream** | Terapan | Mampu memanfaatkan operator fungsional bawaan stream seperti `.where()` atau `.map()` | [ ] |
| **Manajemen Broadcast Stream** | Tantangan | Mampu membagi satu kanal controller ke banyak subscriber tanpa *state conflict* | [ ] |
| **Pencegahan Memory Leak** | Umum | Selalu memastikan method `.close()` dipanggil pada akhir siklus hidup `StreamController` | [ ] |

---

## KELULUSAN & LANGKAH SELANJUTNYA

Selamat atas dedikasi dan ketekunan Anda! Anda telah secara tuntas menyelesaikan seluruh **6 Modul Utama Pembelajaran Bahasa Dart di HexaTech**:

1. **Modul 01: Pengenalan & Persiapan** (Sejarah Dart, Instalasi Multi-OS, main & print).
2. **Modul 02: Fondasi Sintaksis** (Variabel, Type Inference, Tipe Data Primitif, Operator).
3. **Modul 03: Alur Kontrol** (Percabangan, Guard Clauses, Loop, List, Set, Map).
4. **Modul 04: Fungsi & Null Safety** (Arrow Functions, Named Parameters, Closures, Sound Null Safety).
5. **Modul 05: Object-Oriented Programming** (Class, Objek, Enkapsulasi, Pewarisan, Polimorfisme, Mixins, Enums).
6. **Modul 06: Asynchronous Dart** (Event Loop, Future, Async/Await, Stream & Reactive Programming).

Dengan fondasi logika dan pemahaman arsitektur yang kokoh ini, Anda kini memiliki kapabilitas penuh untuk melangkah ke tingkat berikutnya: **Membangun Aplikasi Multi-Platform Menakjubkan Menggunakan Flutter Framework**!