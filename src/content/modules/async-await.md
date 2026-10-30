# ASYNC & AWAIT (SINTAKS ASINKRON MODERN & ERROR HANDLING)

Meskipun metode `.then()` dan `.catchError()` berfungsi dengan baik, penggunaannya yang berlapis seringkali memicu masalah struktur kode yang rumit dan sulit dibaca (*Callback Hell* atau *Pyramid of Doom*). 

Untuk mengatasinya, Dart menghadirkan kata kunci **`async`** dan **`await`**. Dengan kedua kata kunci ini, Anda dapat menulis logika asinkron dengan gaya penulisan deklaratif yang tampak seperti kode sekuensial (*synchronous*), namun tetap menjaga sifat *non-blocking* di balik layar.

---

## POHON MATERI & STRUKTUR FOLDER KERJA

Lanjutkan penulisan kode pada folder kerja `06_asynchronous_dart/` dengan menyusun file-file latihan berikut:

```text
belajar_dart_hexatech/
└── 06_asynchronous_dart/
    ├── 03_async_await_dasar.dart
    ├── 04_try_catch_dan_future_wait.dart
    └── tugas/
        ├── tugas4_otentikasi_login.dart        [Tingkat Dasar]
        ├── tugas5_sinkronisasi_cuaca_api.dart  [Tingkat Terapan]
        └── tugas6_pipeline_e_commerce.dart     [Tantangan Kreatif]
```

> **Petunjuk Kerja:**  
> Buka VS Code pada folder proyek Anda, buat file latihan di dalam `06_asynchronous_dart/`, lalu jalankan menggunakan terminal untuk membuktikan kejelasan alur `async` dan `await`.

---

## CABANG 1: SINTAKS DASAR `async` & `await` {#cabang-1-sintaks-async-await}

Dua aturan emas dalam penggunaan asinkron modern di Dart:
1. **Kata Kunci `async`**: Ditambahkan sebelum kurung kurawal pembuka `{` pada deklarasi fungsi. Fungsi bertanda `async` secara otomatis akan membungkus nilai kembaliannya menjadi `Future<T>`.
2. **Kata Kunci `await`**: Hanya boleh digunakan **di dalam** fungsi bertanda `async`. Kata kunci ini akan menjeda (*suspend*) eksekusi fungsi tersebut sampai `Future` yang ditunggu selesai menghasilkan nilai.

Buat file pertama Anda: `06_asynchronous_dart/03_async_await_dasar.dart`, lalu ketik kode berikut:

```dart
// File: 06_asynchronous_dart/03_async_await_dasar.dart

// 1. Fungsi Simulasi Database Fetch
Future<String> bacaDataDariDatabase() async {
  print("[DATABASE] Menghubungkan ke disk lokal...");
  // Menunggu jeda tanpa memblokir thread
  await Future.delayed(Duration(seconds: 2));
  return "Konfigurasi Sistem: Berhasil Dimuat";
}

// 2. Fungsi Utama Bertanda async
void main() async {
  print("=== LANGKAH 1: INISIALISASI APLIKASI ===");
  print("Memulai proses persiapan data awal...");

  // Menunggu hingga hasil Future benar-benar selesai
  String hasilKonfigurasi = await bacaDataDariDatabase();

  print("\n=== LANGKAH 2: DATA DITERIMA ===");
  print("Status: $hasilKonfigurasi");

  print("\n=== LANGKAH 3: SISTEM SIAP ===");
  print("Aplikasi siap digunakan oleh user.");
}
```

### Cara Menjalankan di Terminal:
```bash
dart run 06_asynchronous_dart/03_async_await_dasar.dart
```

**Ekspektasi Output Konsol:**
```text
=== LANGKAH 1: INISIALISASI APLIKASI ===
Memulai proses persiapan data awal...
[DATABASE] Menghubungkan ke disk lokal...
(Jeda 2 detik)

=== LANGKAH 2: DATA DITERIMA ===
Status: Konfigurasi Sistem: Berhasil Dimuat

=== LANGKAH 3: SISTEM SIAP ===
Aplikasi siap digunakan oleh user.
```

---

## CABANG 2: TRY-CATCH, FINALLY & EKSEKUSI PARALEL `Future.wait` {#cabang-2-try-catch-future-wait}

### 1. Error Handling dengan Blok `try - catch - finally`
Dengan `async/await`, Anda tidak perlu lagi menulis `.catchError()`. Seluruh eksepsi dari operasi asinkron dapat ditangkap langsung menggunakan blok `try-catch` standar pemrograman.

### 2. Eksekusi Simultan dengan `Future.wait`
Jika Anda memiliki beberapa tugas asinkron yang saling independen (misalnya memuat data profil, daftar produk, dan notifikasi banner secara bersamaan), jangan gunakan `await` satu per satu karena akan membuang waktu secara serial! Gunakan **`Future.wait([f1, f2, f3])`** untuk menjalankan seluruhnya secara bersamaan (*parallel execution*).

Buat file kedua: `06_asynchronous_dart/04_try_catch_dan_future_wait.dart`:

```dart
// File: 06_asynchronous_dart/04_try_catch_dan_future_wait.dart

// Simulasi 3 request jaringan terpisah
Future<String> fetchUser() async {
  await Future.delayed(Duration(seconds: 1));
  return "User: Akmal Raditya";
}

Future<String> fetchSaldo() async {
  await Future.delayed(Duration(seconds: 1));
  return "Saldo: Rp 1.500.000";
}

Future<String> fetchNotifikasi() async {
  await Future.delayed(Duration(seconds: 1));
  return "Notifikasi: 3 Pesan Baru";
}

Future<void> prosesLogin(String password) async {
  print("\n--- PROSES VERIFIKASI LOGIN ---");
  try {
    await Future.delayed(Duration(milliseconds: 500));
    if (password != "secret123") {
      throw Exception("Kata sandi yang Anda masukkan salah!");
    }
    print("[SUKSES] Kredensial valid, token otorisasi diterbitkan.");
  } catch (e) {
    print("[TERTANGKAP] Gagal Login: $e");
  } finally {
    print("[CLEANUP] Sesi percobaan login dicatat ke sistem audit.");
  }
}

void main() async {
  print("=== UJI COBA ERROR HANDLING (TRY-CATCH) ===");
  await prosesLogin("passSalah");
  await prosesLogin("secret123");

  print("\n=== UJI COBA PARALEL: FUTURE.WAIT ===");
  print("[MULAI] Mengunduh 3 endpoint API secara serentak...");
  
  Stopwatch stopwatch = Stopwatch()..start();

  // Menjalankan 3 Future bersamaan (hanya butuh waktu ~1 detik, bukan 3 detik!)
  List<String> hasilKolektif = await Future.wait([
    fetchUser(),
    fetchSaldo(),
    fetchNotifikasi(),
  ]);

  stopwatch.stop();

  print("\n--- HASIL SINKRONISASI PARALEL ---");
  for (String item in hasilKolektif) {
    print("- $item");
  }
  print("Waktu Eksekusi Total: ${stopwatch.elapsedMilliseconds} ms (Paralel Efisien)");
}
```

### Cara Menjalankan di Terminal:
```bash
dart run 06_asynchronous_dart/04_try_catch_dan_future_wait.dart
```

**Ekspektasi Output Konsol:**
```text
=== UJI COBA ERROR HANDLING (TRY-CATCH) ===

--- PROSES VERIFIKASI LOGIN ---
[TERTANGKAP] Gagal Login: Exception: Kata sandi yang Anda masukkan salah!
[CLEANUP] Sesi percobaan login dicatat ke sistem audit.

--- PROSES VERIFIKASI LOGIN ---
[SUKSES] Kredensial valid, token otorisasi diterbitkan.
[CLEANUP] Sesi percobaan login dicatat ke sistem audit.

=== UJI COBA PARALEL: FUTURE.WAIT ===
[MULAI] Mengunduh 3 endpoint API secara serentak...

--- HASIL SINKRONISASI PARALEL ---
- User: Akmal Raditya
- Saldo: Rp 1.500.000
- Notifikasi: 3 Pesan Baru
Waktu Eksekusi Total: 1005 ms (Paralel Efisien)
```

---

## CABANG 3: TUGAS MANDIRI TERSTRUKTUR (3 LEVEL) {#cabang-tugas-mandiri}

Selesaikan 3 tugas bertingkat berikut di sub-folder tugas:

```text
06_asynchronous_dart/tugas/
```

---

### TUGAS 1: SISTEM OTENTIKASI PENGGUNA BERTAHAP (TINGKAT: DASAR)
* **Lokasi File:** `06_asynchronous_dart/tugas/tugas4_otentikasi_login.dart`
* **Instruksi:** 
  1. Buat fungsi `Future<String> verifikasiKredensial(String user, String pass) async`.
  2. Tunggu 1 detik dengan `await Future.delayed(...)`.
  3. Jika `user == "admin"` dan `pass == "12345"`, kembalikan `"TOKEN_SESSION_9982"`.
  4. Jika salah, lemparkan `Exception("Kombinasi pengguna dan sandi keliru!")`.
  5. Bungkus pemanggilan di `main()` dengan `try-catch` dan cetak hasil status login.
* **Ekspektasi Output:**
  ```text
  =========================================
            PORTAL OTENTIKASI SSO
  =========================================
  [LOGIN] Mencoba masuk sebagai: admin
  [SUKSES] Sesi Terbuka: TOKEN_SESSION_9982

  [LOGIN] Mencoba masuk sebagai: hacker
  [ERROR] Ditolak: Exception: Kombinasi pengguna dan sandi keliru!
  =========================================
  ```

---

### TUGAS 2: SINKRONISASI SENSOR CUACA MULTI-KOTA (TINGKAT: TERAPAN)
* **Lokasi File:** `06_asynchronous_dart/tugas/tugas5_sinkronisasi_cuaca_api.dart`
* **Instruksi:** 
  1. Buat fungsi `Future<Map<String, dynamic>> fetchSensorKota(String kota, int durasiDetik) async`.
  2. Kembalikan data map cuaca setelah durasi delay tercapai.
  3. Panggil 3 kota (`Jakarta`, `Surabaya`, `Medan`) secara simultan menggunakan `await Future.wait([...])`.
  4. Ukur dan cetak waktu total eksekusi untuk membuktikan bahwa proses berjalan paralel.
* **Ekspektasi Output:**
  ```text
  =============================================================
             DASHBOARD MONITORING IOT MULTI-STATION
  =============================================================
  [PARALEL] Memulai pembacaan telemetri 3 stasiun...
  - Stasiun Jakarta  : Suhu 31.0 C | Status: Online
  - Stasiun Surabaya : Suhu 33.5 C | Status: Online
  - Stasiun Medan    : Suhu 29.0 C | Status: Online
  -------------------------------------------------------------
  Penyelarasan Tuntas dalam ~2000 ms (Bukan 6000 ms!)
  =============================================================
  ```

---

### TUGAS 3: PIPELINE TRANSAKSI E-COMMERCE END-TO-END (TANTANGAN KREATIF)
* **Lokasi File:** `06_asynchronous_dart/tugas/tugas6_pipeline_e_commerce.dart`
* **Instruksi:** 
  Rancang alur transaksi *checkout* belanja online secara berurutan menggunakan `await`:
  1. Langkah 1: `cekKetersediaanStok(String item)` (jeda 800ms).
  2. Langkah 2: `potongSaldoDompet(double nominal)` (jeda 1000ms, gagal jika saldo < nominal).
  3. Langkah 3: `terbitkanNomorResi(String kurir)` (jeda 600ms, kembalikan kode resi).
  4. Buat fungsi orkestrator `jalankanCheckout(...)` yang mengeksekusi langkah 1 -> 2 -> 3 secara beruntun di dalam `try-catch-finally`.
  5. Uji coba dengan transaksi yang berhasil dan transaksi yang gagal karena saldo kurang.
* **Ekspektasi Output:**
  ```text
  =============================================================
                  CHECKOUT GATEWAY E-COMMERCE
  =============================================================
  [1] Memeriksa stok: 'MacBook Air M2' -> Tersedia!
  [2] Memotong saldo: Rp 16000000.0 -> Pembayaran Berhasil!
  [3] Menerbitkan resi kurir 'JNE Express': JNE-88192019-ID
  -------------------------------------------------------------
  STATUS PESANAN: Sukses Diproses dan Menunggu Penjemputan
  [AUDIT LOG] Transaksi selesai tercatat di ledger sistem.
  =============================================================
  ```

---

## 4. RUBRIK PENILAIAN MANDIRI

| Komponen Penilaian | Tingkat | Kriteria Keberhasilan | Status |
| :--- | :--- | :--- | :--- |
| **Sintaks Async/Await Tepat** | Dasar | Setiap fungsi yang memanggil `await` wajib ditandai kata kunci `async` | [ ] |
| **Error Handling Komprehensif** | Terapan | Menangani seluruh potensi kegagalan jaringan secara bersih menggunakan blok `try-catch` | [ ] |
| **Optimasi Paralel (Future.wait)** | Tantangan | Mampu membedakan kapan tugas harus dijalankan serial dan kapan harus paralel | [ ] |
| **Pembersihan Resource (Finally)** | Umum | Menggunakan blok `finally` untuk memastikan proses audit atau penutupan koneksi selalu dijalankan | [ ] |

---

## KESIMPULAN

Pola `async` dan `await` adalah standar industri nomor satu dalam ekosistem Dart dan Flutter. Dengan menguasai gaya penulisan ini, kode asinkron Anda akan tetap rapi, elegan, dan kebal dari jebakan *callback hell*.

Di bab terakhir, kita akan mempelajari penanganan aliran data kontinu: **Stream & Reactive Programming**!