# PANDUAN LENGKAP INSTALASI DART SDK & VS CODE

Untuk memulai perjalanan belajar Dart bersama **HexaTech**, kita membutuhkan dua perangkat utama:
1. **Dart SDK (*Software Development Kit*):** Berisi *compiler*, mesin eksekusi (*virtual machine*), pustaka standar (*standard libraries*), penganalisis kode (*analyzer*), serta manajer paket resmi (`dart pub`).
2. **Code Editor:** Kita merekomendasikan **Visual Studio Code (VS Code)** karena memiliki integrasi ekstensi Dart yang sangat matang, cepat, dan didukung langsung oleh tim pengembang Google.

> **Catatan Penting Bagi Pengguna Flutter:**  
> Jika Anda sudah pernah menginstal Flutter SDK di komputer Anda, Anda **TIDAK PERLU** menginstal Dart SDK secara terpisah. Dart SDK sudah otomatis terpasang di dalam folder instalasi Flutter Anda (`<flutter_path>/bin/cache/dart-sdk/bin`).

---

## 1. INSTALASI DART SDK DI WINDOWS

Untuk pengguna sistem operasi Windows (Windows 10 atau Windows 11), ada 4 metode yang dapat Anda pilih sesuai kenyamanan:

### METODE A: Menggunakan Winget (Windows Package Manager - Sangat Direkomendasikan)
*Winget* adalah pengelola paket resmi bawaan Microsoft yang sudah terpasang secara default di Windows 10 (versi terbaru) dan Windows 11. Ini adalah metode paling praktis tanpa perlu menginstal aplikasi pihak ketiga.

1. Buka **PowerShell** atau **Windows Terminal** (tidak wajib run as administrator, namun disarankan).
2. Jalankan perintah berikut:
   ```powershell
   winget install Dart.DartSDK
   ```
3. Tekan `Y` jika diminta persetujuan lisensi.
4. Tunggu hingga proses pengunduhan dan instalasi selesai.
5. Tutup jendela terminal dan buka jendela baru agar variabel lingkungan (*environment variables*) diperbarui.

---

### METODE B: Menggunakan Chocolatey
Jika Anda terbiasa menggunakan pengelola paket *Chocolatey*:

1. Buka **Command Prompt (CMD)** atau **PowerShell** dengan mode **Run as Administrator** (Klik kanan > Run as administrator).
2. Jalankan perintah instalasi:
   ```powershell
   choco install dart-sdk
   ```
3. Jika ingin memperbarui (*upgrade*) di kemudian hari:
   ```powershell
   choco upgrade dart-sdk
   ```

---

### METODE C: Menggunakan Scoop
Bagi Anda pengguna *Scoop* (pengelola paket berbasis command-line non-admin):

1. Buka PowerShell dan tambahkan bucket `extras`:
   ```powershell
   scoop bucket add extras
   ```
2. Jalankan instalasi Dart:
   ```powershell
   scoop install dart
   ```

---

### METODE D: Instalasi Manual via ZIP Archive & Setup PATH
Metode ini cocok jika Anda tidak memiliki koneksi pengelola paket atau ingin mengatur lokasi folder SDK secara manual:

1. Kunjungi halaman arsip unduhan resmi Dart: [https://dart.dev/get-dart/archive](https://dart.dev/get-dart/archive)
2. Pada bagian **Stable Channel**, pilih arsitektur sistem Anda (biasanya `x64` atau `ARM64`) lalu unduh file **Dart SDK (ZIP)**.
3. Ekstrak isi file ZIP tersebut ke direktori permanen di komputer Anda, misalnya:
   ```text
   C:\tools\dart-sdk
   ```
   *(Pastikan di dalam folder tersebut terdapat sub-folder `bin`, `lib`, dan `include`)*.
4. **Mendaftarkan ke Environment Variables (PATH):**
   - Tekan tombol `Windows + S`, ketik **"env"**, lalu pilih **"Edit the system environment variables"** (Edit variabel lingkungan sistem).
   - Pada jendela *System Properties*, klik tombol **Environment Variables...** di pojok kanan bawah.
   - Pada bagian **User variables** (atau **System variables**), cari variabel bernama `Path`, lalu klik **Edit...**.
   - Klik tombol **New**, lalu masukkan lokasi folder `bin` dari Dart SDK Anda:
     ```text
     C:\tools\dart-sdk\bin
     ```
   - Klik **OK** pada semua jendela dialog untuk menyimpan perubahan.
   - Restart terminal atau command prompt Anda.

---

## 2. INSTALASI DART SDK DI MACOS

Untuk pengguna Mac (baik chip Apple Silicon M1/M2/M3/M4 maupun prosesor Intel):

### METODE A: Menggunakan Homebrew (Direkomendasikan)
Homebrew adalah pengelola paket paling standar di macOS.

1. Buka aplikasi **Terminal**.
2. Daftarkan repositori resmi Dart (*tap*):
   ```bash
   brew tap dart-lang/dart
   ```
3. Pasang Dart SDK:
   ```bash
   brew install dart
   ```
4. Jika ingin memperbarui versi Dart di masa depan:
   ```bash
   brew upgrade dart
   ```

---

### METODE B: Instalasi Manual Archive di macOS
1. Unduh arsip Dart SDK (`.zip`) untuk macOS dari [dart.dev/get-dart/archive](https://dart.dev/get-dart/archive) (Pilih opsi `ARM64` untuk Apple Silicon atau `x64` untuk Intel Mac).
2. Ekstrak file tersebut, misalnya ke folder direktori `~/development/dart-sdk` atau `/usr/local/dart-sdk`.
3. Buka file konfigurasi shell Anda (`~/.zshrc` untuk terminal default Zsh, atau `~/.bash_profile` untuk Bash):
   ```bash
   nano ~/.zshrc
   ```
4. Tambahkan baris berikut di bagian paling bawah:
   ```bash
   export PATH="$PATH:$HOME/development/dart-sdk/bin"
   ```
5. Simpan file (`Ctrl + O`, lalu `Enter`, lalu `Ctrl + X`).
6. Muat ulang konfigurasi shell:
   ```bash
   source ~/.zshrc
   ```

---

## 3. INSTALASI DART SDK DI LINUX

Dart mendukung berbagai distribusi Linux utama melalui repositori paket resmi, Snap, maupun arsip biner tarball.

### METODE A: Ubuntu / Debian / Linux Mint (APT Package Manager)
Ini adalah metode paling stabil untuk turunan Debian/Ubuntu:

1. Buka terminal Linux Anda dan perbarui indeks repositori:
   ```bash
   sudo apt-get update
   sudo apt-get install apt-transport-https curl
   ```
2. Tambahkan GPG key resmi Google:
   ```bash
   sudo sh -c 'curl -fsSL https://dl-ssl.google.com/linux/linux_signing_key.pub | gpg --dearmor -o /etc/apt/trusted.gpg.d/dart.gpg'
   ```
3. Daftarkan repositori Dart Stable:
   ```bash
   sudo sh -c 'echo "deb [signed-by=/etc/apt/trusted.gpg.d/dart.gpg] https://storage.googleapis.com/download.dartlang.org/linux/debian stable main" > /etc/apt/sources.list.d/dart_stable.list'
   ```
4. Perbarui repositori dan instal Dart:
   ```bash
   sudo apt-get update
   sudo apt-get install dart
   ```

---

### METODE B: Arch Linux / Manjaro
Di Arch Linux dan turunannya, Dart tersedia langsung di repositori resmi:

```bash
sudo pacman -S dart
```

---

### METODE C: Universal via Snapcraft (Semua Distro Linux)
Jika distro Anda mendukung Snap:

```bash
sudo snap install dart --classic
```

---

### METODE D: Manual Tarball (.tar.gz) untuk Fedora / RHEL / Distro Lainnya
1. Unduh tarball Dart SDK dari arsip resmi [dart.dev/get-dart/archive](https://dart.dev/get-dart/archive).
2. Ekstrak file ke folder sistem, misalnya `/opt/dart-sdk`:
   ```bash
   sudo tar -xvf dartsdk-linux-x64-release.tar.gz -C /opt/
   ```
3. Tambahkan ke file `~/.bashrc`:
   ```bash
   echo 'export PATH="$PATH:/opt/dart-sdk/bin"' >> ~/.bashrc
   source ~/.bashrc
   ```

---

## 4. PENGGUNA WINDOWS SUBSYSTEM FOR LINUX (WSL2)

Jika Anda menggunakan Windows namun lebih menyukai lingkungan pengembangan Linux berbasis WSL2 (Ubuntu):
1. Buka terminal WSL Ubuntu Anda.
2. Ikuti langkah **METODE A pada bagian Linux (APT)** di atas.
3. Dart SDK akan terpasang di dalam lingkungan WSL secara terisolasi tanpa mengganggu instalasi Windows native Anda.

---

## 5. MEMVERIFIKASI HASIL INSTALASI

Setelah menyelesaikan salah satu metode di atas, Anda wajib memastikan bahwa Dart SDK sudah dikenali oleh sistem operasi.

1. Buka terminal baru (CMD, PowerShell, atau Terminal macOS/Linux).
2. Jalankan perintah pemeriksaan versi:
   ```bash
   dart --version
   ```
3. **Hasil yang diharapkan:**
   Terminal akan menampilkan informasi versi Dart, arsitektur, dan tanggal rilis. Contoh:
   ```text
   Dart SDK version: 3.5.0 (stable) (Wed Jul 31 03:00:00 2024) on "windows_x64"
   ```
4. Anda juga dapat memeriksa lokasi file biner Dart dengan perintah:
   - **Windows:** `where dart`
   - **macOS / Linux:** `which dart`

---

## 6. PANDUAN TROUBLESHOOTING MASALAH INSTALASI

Jika perintah `dart --version` tidak bekerja sesuai ekspektasi, jangan panik! Berikut adalah solusi untuk kendala yang sering ditemui pemula:

### Error 1: `'dart' is not recognized as an internal or external command` (Windows)
* **Penyebab:** Folder `bin` dari Dart SDK belum terdaftar di variabel sistem `PATH`, atau terminal belum di-restart setelah penambahan variabel.
* **Solusi:**
  1. Pastikan Anda telah menutup seluruh jendela CMD/PowerShell/VS Code dan membukanya kembali.
  2. Periksa kembali pengaturan `Path` di *Environment Variables*. Pastikan path menuju folder `bin` sudah benar (contoh: `C:\tools\dart-sdk\bin`).
  3. Pastikan tidak ada tanda kutip ganda (`"`) di dalam entri path variabel.

### Error 2: `command not found: dart` (macOS / Linux)
* **Penyebab:** Konfigurasi `export PATH` di file `~/.zshrc` atau `~/.bashrc` belum termuat ke sesi terminal aktif.
* **Solusi:**
  1. Jalankan perintah `source ~/.zshrc` (untuk macOS Zsh) atau `source ~/.bashrc` (untuk Linux Bash).
  2. Pastikan izin eksekusi file biner aktif:
     ```bash
     chmod +x /path/to/dart-sdk/bin/dart
     ```

---

## 7. SETUP CODE EDITOR: VISUAL STUDIO CODE

Visual Studio Code adalah editor kode paling populer dan fleksibel untuk pemrograman Dart modern.

### Langkah Instalasi VS Code:
1. Unduh installer resmi VS Code dari: [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. Jalankan file instalasi dan ikuti wizard hingga selesai (Pada Windows, centang opsi *"Add to PATH"*).

### Memasang Ekstensi Wajib:
1. Buka VS Code.
2. Klik ikon **Extensions** pada sidebar kiri (atau gunakan shortcut `Ctrl + Shift + X` di Windows/Linux, `Cmd + Shift + X` di Mac).
3. Di kolom pencarian, ketik **"Dart"** (dibuat resmi oleh *Dart-Code*).
4. Klik tombol **Install**.
5. *(Opsional tapi sangat dianjurkan)* Pasang juga ekstensi berikut untuk meningkatkan produktivitas:
   - **Flutter:** Jika nantinya Anda ingin lanjut membuat aplikasi UI.
   - **Error Lens:** Menampilkan pesan error dan warning langsung di samping baris kode tanpa harus mengarahkan kursor mouse.

### Konfigurasi VS Code untuk Dart (*Auto-Format on Save*):
Agar kode Dart Anda selalu rapi secara otomatis setiap kali Anda menekan `Ctrl + S`:
1. Di VS Code, tekan `Ctrl + ,` (atau `Cmd + ,` di Mac) untuk membuka Settings.
2. Cari kata kunci: **"Format On Save"**.
3. Beri tanda centang pada opsi **Editor: Format On Save**.

---

## 8. TABEL RINGKASAN PERINTAH INSTALASI CEPAT

Berikut adalah lembar sontekan (*cheat sheet*) perintah instalasi cepat untuk semua platform:

| Sistem Operasi | Metode Instalasi | Perintah Terminal / Command |
| :--- | :--- | :--- |
| **Windows** | Winget *(Bawaan)* | `winget install Dart.DartSDK` |
| **Windows** | Chocolatey | `choco install dart-sdk` |
| **Windows** | Scoop | `scoop install dart` |
| **macOS** | Homebrew | `brew tap dart-lang/dart && brew install dart` |
| **Linux (Ubuntu/Debian)** | APT Repository | `sudo apt-get update && sudo apt-get install dart` |
| **Linux (Arch/Manjaro)** | Pacman | `sudo pacman -S dart` |
| **Linux (Universal)** | Snap | `sudo snap install dart --classic` |
| **Semua OS** | Cek Versi | `dart --version` |

---

## KESIMPULAN

Selamat! Komputer Anda kini telah dilengkapi dengan **Dart SDK** resmi dan lingkungan pengembangan **VS Code** yang siap pakai. 

Pada modul berikutnya, kita akan membuat dan menjalankan program Dart pertama kita serta memahami fungsi utama `main()` dan perintah `print()`. Mari lanjutkan!