# INHERITANCE & ABSTRACT CLASS

*Inheritance* (Pewarisan) memungkinkan sebuah Class untuk mewariskan *properties* dan *methods* miliknya ke Class lain. Ini sangat berguna untuk mencegah penulisan kode yang berulang-ulang (*DRY - Don't Repeat Yourself*).

## 1. KONSEP INHERITANCE (`extends`)

Bayangkan kita memiliki Class `Hewan`. Lalu kita ingin membuat Class `Kucing` dan `Burung`. Karena kucing dan burung juga merupakan hewan, mereka otomatis "mewarisi" sifat-sifat umum hewan (seperti bernapas, makan).

- **Parent/Super Class:** Class utama (`Hewan`)
- **Child/Sub Class:** Class turunan (`Kucing`, `Burung`)

Gunakan kata kunci `extends` untuk mewarisi.

```dart
// Super Class
class Hewan {
  String nama;
  Hewan(this.nama);

  void makan() {
    print("$nama sedang makan.");
  }
}

// Sub Class
class Burung extends Hewan {
  int kecepatanTerbang;
  
  // Menggunakan fungsi super() untuk mengirim data ke constructor Parent
  Burung(String nama, this.kecepatanTerbang) : super(nama);

  void terbang() {
    print("$nama terbang dengan kecepatan $kecepatanTerbang km/jam.");
  }
}

void main() {
  Burung elang = Burung("Elang Jawa", 120);
  elang.makan();  // Method ini diwarisi dari class Hewan!
  elang.terbang();
}
```

## 2. METHOD OVERRIDING (@override)

Terkadang, *Child Class* ingin mengubah cara kerja fungsi yang diwariskan oleh *Parent Class*. Ini disebut *Overriding*.

```dart
class Kucing extends Hewan {
  Kucing(String nama) : super(nama);

  // Mengubah perilaku method makan() khusus untuk Kucing
  @override
  void makan() {
    print("$nama makan ikan dengan sangat lahap!");
  }
}
```

## 3. ABSTRACT CLASS

Ada kalanya kita membuat sebuah *Parent Class* hanya sebagai konsep/kerangka dasar saja. Kita **TIDAK INGIN** Class tersebut bisa dicetak/dibuat *Object*-nya. 
Misalnya, kita tidak bisa secara spesifik "membuat bentuk abstrak", kita hanya bisa membuat bentuk spesifik seperti Persegi atau Lingkaran.

Gunakan kata kunci `abstract`.

```dart
abstract class Bentuk {
  // Abstract method (fungsi tanpa isi, wajib diisi oleh turunannya)
  double hitungLuas(); 
}

class Persegi extends Bentuk {
  double sisi;
  Persegi(this.sisi);

  // Wajib mengimplementasikan hitungLuas()
  @override
  double hitungLuas() {
    return sisi * sisi;
  }
}

void main() {
  // Bentuk b = Bentuk(); // ❌ ERROR! Class abstract tidak bisa di-instantiate.
  Persegi p = Persegi(5);
  print(p.hitungLuas()); // 25
}
```