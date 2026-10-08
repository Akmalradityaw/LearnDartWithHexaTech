# MIXINS & ENUM

Ada dua konsep OOP tingkat menengah di Dart yang sangat penting dan wajib dipahami sebelum masuk ke Flutter: **Mixins** dan **Enums**.

## 1. ENUMERATION (ENUM)

Enum digunakan ketika Anda memiliki kumpulan data berwujud konstanta yang jumlahnya pasti dan tidak berubah-ubah. Contohnya: Hari (Senin-Minggu), Arah Mata Angin (Utara, Selatan), atau Status Pesanan (Proses, Dikirim, Selesai).

Menggunakan enum jauh lebih aman daripada sekadar memakai String, karena mencegah salah ketik (*typo*).

```dart
enum StatusPesanan {
  menungguPembayaran,
  diproses,
  dikirim,
  selesai,
  dibatalkan
}

void main() {
  StatusPesanan statusSaatIni = StatusPesanan.diproses;

  // Sangat cocok digunakan bersama switch-case
  switch (statusSaatIni) {
    case StatusPesanan.menungguPembayaran:
      print("Harap segera bayar.");
      break;
    case StatusPesanan.diproses:
      print("Barang sedang dipacking.");
      break;
    default:
      print("Status lainnya...");
  }
}
```

## 2. MIXINS

Berbeda dengan beberapa bahasa pemrograman lain, **Dart tidak mendukung Multiple Inheritance** (satu class memiliki dua *Parent* sekaligus). 

Lalu bagaimana jika kita punya Class `Bebek` yang mewarisi `Burung` (bisa terbang), namun kita juga ingin `Bebek` memiliki sifat dari `Perenang`? Di sinilah **Mixins** berperan. Mixins memungkinkan kita untuk menempelkan/memasukkan kemampuan (*methods*) dari class lain tanpa melakukan pewarisan ganda.

Sintaksnya menggunakan `mixin` dan kata kunci `with`.

```dart
// Class utama
class Hewan { }

// Mixin 1
mixin BisaTerbang {
  void terbang() {
    print("Mengepakkan sayap dan wusss... terbang!");
  }
}

// Mixin 2
mixin BisaBerenang {
  void berenang() {
    print("Mendayung air dan meluncur maju.");
  }
}

// Menggunakan inheritance (extends) dan Mixins (with) sekaligus!
class Bebek extends Hewan with BisaTerbang, BisaBerenang {
  // Bebek sekarang memiliki semua method dari BisaTerbang & BisaBerenang!
}

void main() {
  Bebek donald = Bebek();
  donald.terbang();
  donald.berenang();
}
```

Mixins sering digunakan di Flutter (contoh paling terkenal adalah `SingleTickerProviderStateMixin` untuk menjalankan animasi UI).