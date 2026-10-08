# INSTALASI DART SDK & VS CODE

Untuk mulai menulis dan menjalankan program Dart, kita membutuhkan dua hal utama: **Dart SDK** (Software Development Kit) dan sebuah teks editor (kita akan menggunakan **Visual Studio Code**).

## 1. MENGINSTAL DART SDK

Dart SDK berisi *compiler*, *libraries*, dan perangkat *command line* (*CLI*) yang dibutuhkan untuk menjalankan Dart.

### PENGGUNA WINDOWS
Cara termudah adalah menggunakan Chocolatey atau mengunduh *installer* langsung.
1. Kunjungi situs resmi: [https://dart.dev/get-dart](https://dart.dev/get-dart)
2. Jika Anda punya `choco`, jalankan di Command Prompt (Run as Administrator):
   ```bash
   choco install dart-sdk
   ```
3. Jika tidak, Anda bisa mengunduh *ZIP file* SDK, ekstrak di `C:\dart-sdk`, lalu tambahkan folder `C:\dart-sdk\bin` ke *Environment Variables* (`PATH`).

### PENGGUNA MAC OS
Gunakan Homebrew:
```bash
brew tap dart-lang/dart
brew install dart
```

### PENGGUNA LINUX
Gunakan `apt`:
```bash
sudo apt-get update
sudo apt-get install apt-transport-https
sudo sh -c 'wget -qO- https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -'
sudo sh -c 'wget -qO- https://storage.googleapis.com/download.dartlang.org/linux/debian/dart_stable.list > /etc/apt/sources.list.d/dart_stable.list'
sudo apt-get update
sudo apt-get install dart
```

> **Catatan Penting:** Jika Anda sudah menginstal Flutter, Anda **TIDAK PERLU** menginstal Dart SDK lagi, karena Dart sudah sepaket dengan instalasi Flutter!

## 2. MEMVERIFIKASI INSTALASI

Buka terminal atau Command Prompt dan ketik:
```bash
dart --version
```
Jika instalasi berhasil, akan muncul informasi versi Dart yang terpasang di komputer Anda.

## 3. MENGINSTAL VISUAL STUDIO CODE

1. Unduh VS Code dari [https://code.visualstudio.com/](https://code.visualstudio.com/).
2. Lakukan instalasi standar.
3. Buka VS Code, pergi ke bagian **Extensions** (Ikon kotak-kotak di sidebar kiri atau tekan `Ctrl+Shift+X`).
4. Cari ekstensi bernama **"Dart"** (dibuat oleh *Dart Code*).
5. Klik **Install**.

Anda sekarang sudah siap untuk menulis program Dart pertama Anda!