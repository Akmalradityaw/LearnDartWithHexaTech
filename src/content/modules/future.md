# EVENT LOOP & FUTURE (ASYNCHRONOUS PROGRAMMING)

Di modul ini, kita akan masuk ke konsep yang mungkin cukup membingungkan bagi pemula, namun sangat krusial: **Asynchronous Programming** (Pemrograman Asinkron).

## 1. SYNCHRONOUS VS ASYNCHRONOUS

Secara *default*, eksekusi kode Dart berjalan secara **Synchronous**. Artinya, kode dieksekusi baris per baris secara berurutan. Baris 2 tidak akan dieksekusi sebelum Baris 1 selesai.

Masalah muncul ketika Baris 1 membutuhkan waktu lama (misal: mendownload data gambar dari internet sebesar 10MB). Jika kode bersifat *synchronous*, aplikasi Anda akan **hang (nge-freeze)** selama gambar itu diunduh. Layar tidak bisa disentuh!

Untuk mencegah hal tersebut, kita gunakan **Asynchronous**. Artinya, kita bisa menyuruh program mendownload gambar secara *"background"*, sementara aplikasi tetap berjalan merender UI di layar.

## 2. DART EVENT LOOP

Dart adalah bahasa *Single-Threaded* (hanya memiliki 1 jalur pekerja utama). Namun, ia bisa menjalankan pemrograman asinkron karena memiliki sistem bernama **Event Loop**.
Secara sederhana: Event Loop selalu memutar antrean tugas (*queue*). Jika tugasnya kecil, ia akan kerjakan. Jika tugasnya berat (I/O, database, API), ia akan lempar tugas itu ke sistem operasi, dan akan memberi notifikasi kembali kalau tugas itu selesai.

## 3. PENGENALAN CLASS `Future`

Dalam Dart, hasil dari sebuah pekerjaan asinkron dibungkus dalam sebuah objek bernama `Future`. 

Sesuai namanya, `Future` (Masa Depan) adalah ibarat "Janji" (*Promise*).
Bayangkan Anda memesan kopi di kafe. Kasir tidak langsung memberikan kopi Anda. Ia memberi Anda **Struk Antrean** (`Future`). Anda bisa duduk santai sambil main HP (*aplikasi tidak freeze*). Beberapa menit kemudian, kasir akan memanggil Anda membawa Kopi (Data berhasil / *Success*) atau memanggil Anda bahwa susunya habis (Gagal / *Error*).

```dart
void main() {
  print("1. Saya pesan kopi");
  
  // Future.delayed mensimulasikan proses asinkron yang butuh waktu 3 detik
  Future.delayed(Duration(seconds: 3), () {
    print("3. Barista: Kopi Anda sudah jadi!");
  });
  
  print("2. Saya duduk main HP sambil nunggu");
}
```

**Output:**
```text
1. Saya pesan kopi
2. Saya duduk main HP sambil nunggu
(Menunggu 3 detik di layar...)
3. Barista: Kopi Anda sudah jadi!
```

Perhatikan bahwa Baris "2" dicetak sebelum Baris "3", meskipun kode Baris "3" ditulis lebih dulu di atas. Inilah inti dari *Asynchronous*!