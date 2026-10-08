# TIPE DATA DASAR

Dalam pemrograman Dart, segala sesuatu adalah objek, bahkan tipe data dasar sekalipun. Berikut adalah tipe-tipe data yang paling sering digunakan.

## 1. ANGKA (NUMBERS)

Ada dua tipe data angka di Dart: `int` (bilangan bulat) dan `double` (bilangan desimal). Keduanya adalah turunan dari class `num`.

```dart
int jumlahKucing = 3;
int uangGajian = 5000000;

double beratBadan = 65.5;
double diskon = 0.25;

// num bisa berupa int maupun double
num nilaiUjian = 90;
nilaiUjian = 85.5;
```

## 2. TEKS (STRING)

`String` digunakan untuk menyimpan teks. Anda bisa menggunakan tanda kutip tunggal (`'`) maupun kutip ganda (`"`).

```dart
String namaDepan = 'Akmal';
String namaBelakang = "Raditya";
```

### String Interpolation
Dart sangat hebat dalam merangkai string. Anda cukup menggunakan simbol `$` untuk menyisipkan variabel langsung ke dalam teks.

```dart
String sapaan = "Halo, nama saya $namaDepan $namaBelakang.";
// Jika ada proses tambahan, gunakan ${}
String sapaanPanjang = "Halo, ${namaDepan.toUpperCase()}!";
```

## 3. BOOLEAN

Tipe data logika yang hanya memiliki dua nilai: `true` (Benar) dan `false` (Salah).

```dart
bool isHujan = true;
bool isLapar = false;

if (isHujan) {
  print("Bawa payung!");
}
```

## 4. TYPE CONVERSION (PARSING)

Seringkali Anda perlu mengubah dari `String` ke angka, atau sebaliknya.

```dart
// String -> int
int angka = int.parse("123");

// String -> double
double desimal = double.parse("3.14");

// int -> String
String teksAngka = 45.toString();
```