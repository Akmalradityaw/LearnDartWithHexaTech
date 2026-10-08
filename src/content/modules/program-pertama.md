# PROGRAM PERTAMA: MAIN() & PRINT()

Dalam dunia pemrograman, sudah menjadi tradisi untuk memulai dengan program yang mencetak kalimat "Hello, World!". 

Mari kita buat file Dart pertama Anda.

## CARA MERAPIKAN FOLDER & FILE

Sebelum mulai menulis kode, sangat penting untuk membiasakan diri merapikan *project* Anda. Saat Anda belajar, buatlah satu folder utama (misalnya `belajar_dart`). 
Di dalamnya, buatlah *sub-folder* untuk setiap bab yang sedang Anda pelajari.

Contoh struktur folder yang rapi:
```text
belajar_dart/
 ├── 01_dasar/
 │    └── hello_world.dart
 ├── 02_tipe_data/
 │    └── variabel.dart
 └── 03_oop/
      └── class_object.dart
```

Sekarang, silakan buat folder `01_dasar` di komputer Anda, buka folder tersebut menggunakan VS Code, lalu buatlah sebuah file baru bernama `hello_world.dart`.

## FUNGSI `main()`

Setiap program Dart **HARUS** memiliki fungsi utama yang bernama `main()`. Fungsi ini adalah titik awal ( *entry point* ) di mana Dart akan mulai mengeksekusi kode Anda.

```dart
void main() {
  // Kode program Anda ditulis di dalam sini
}
```

- `void`: Menunjukkan bahwa fungsi ini tidak mengembalikan nilai (*return value*) apa pun ke sistem operasi.
- `main()`: Nama fungsi utama.
- `{ ... }`: Blok fungsi, tempat kode Anda berada.

## MENAMPILKAN TEKS DENGAN `print()`

Untuk mencetak tulisan ke layar konsol, kita menggunakan fungsi `print()`.

Buatlah sebuah file baru di VS Code, beri nama `hello_world.dart`, lalu ketik kode berikut:

```dart
void main() {
  print("Hello, World!");
  print("Saya sedang belajar Dart di HexaTech.");
}
```

> **Penting:** Setiap baris pernyataan di Dart harus diakhiri dengan tanda titik koma (`;`).

## CARA MENJALANKAN PROGRAM

1. Buka terminal di dalam VS Code (`Terminal > New Terminal`).
2. Pastikan Anda berada di direktori yang sama dengan file `hello_world.dart`.
3. Jalankan perintah berikut:
   ```bash
   dart run hello_world.dart
   ```

**Output:**
```text
Hello, World!
Saya sedang belajar Dart di HexaTech.
```

Selamat! Anda baru saja berhasil membuat dan menjalankan program Dart pertama Anda!