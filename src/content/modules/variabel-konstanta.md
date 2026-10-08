# VARIABEL & KONSTANTA

Variabel adalah tempat untuk menyimpan sebuah nilai atau data yang akan digunakan selama program berjalan. Di Dart, kita memiliki beberapa cara untuk membuat variabel.

## 1. MENGGUNAKAN `var` (Type Inference)

Jika Anda menggunakan kata kunci `var`, Dart akan otomatis menebak (melakukan *inferensi*) tipe datanya berdasarkan nilai yang Anda masukkan.

```dart
void main() {
  var nama = "Budi";  // Otomatis menjadi String
  var umur = 25;      // Otomatis menjadi int
  
  print("Nama saya $nama, umur saya $umur tahun.");
}
```

Anda **TIDAK BISA** mengubah tipe data dari variabel `var` setelah ia dideklarasikan:
```dart
var umur = 25;
umur = "Dua Puluh"; // ❌ ERROR! umur sudah dikenali sebagai int
```

## 2. DEKLARASI EKSPLISIT

Jika Anda ingin mempertegas tipe data, gunakan deklarasi eksplisit:

```dart
String pekerjaan = "Programmer";
int skor = 100;
double ipk = 3.8;
bool isMenikah = false;
```

## 3. MENGGUNAKAN `dynamic`

Jika Anda benar-benar butuh variabel yang tipenya bisa berubah-ubah, gunakan `dynamic`. (Tetapi usahakan hindari ini kecuali sangat terpaksa).

```dart
dynamic misteri = 10;
misteri = "Sekarang jadi teks"; // ✅ SAH! Tidak error.
```

## KONSTANTA: `final` & `const`

Jika Anda memiliki data yang **TIDAK BOLEH BERUBAH** setelah dideklarasikan, gunakan `final` atau `const`.

- **`final`**: Nilainya tidak bisa diubah, namun boleh diisi (diinisialisasi) pada saat program sedang berjalan (*runtime*).
- **`const`**: Sama-sama tidak bisa diubah, tapi nilainya **WAJIB** sudah diketahui saat program ditulis (*compile-time*).

```dart
void main() {
  final waktuSekarang = DateTime.now(); // ✅ BENAR (waktu dieksekusi saat runtime)
  // const waktuConst = DateTime.now(); // ❌ ERROR! const butuh nilai pasti saat coding
  
  const pi = 3.14159; // ✅ BENAR (nilai pasti)
  
  // pi = 3.14; // ❌ ERROR! Tidak bisa diubah
}
```