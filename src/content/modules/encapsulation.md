# ENCAPSULATION (PENGKAPSULAN)

*Encapsulation* (Pengkapsulan) adalah konsep dalam OOP yang digunakan untuk membungkus atau menyembunyikan data internal (*properties*) sebuah Class agar tidak bisa diubah seenaknya dari luar.

## 1. MENGAPA BUTUH ENCAPSULATION?

Misalkan Anda memiliki Class `RekeningBank`. Jika property `saldo` bisa diakses secara bebas, seseorang bisa saja menulis `rekening.saldo = 9999999;` secara ilegal dari file lain. 

Kita ingin data `saldo` hanya bisa dibaca, dan penambahannya hanya bisa melalui method resmi seperti `setorTunai()`.

## 2. PRIVACY DI DART (TANDA UNDERSCORE `_`)

Bahasa Java atau C# menggunakan kata kunci `private` atau `public`. Di Dart, caranya lebih sederhana:
Jika nama variabel atau method diawali dengan garis bawah (`_`), maka properti tersebut bersifat **Private (hanya bisa diakses di file yang sama)**.

```dart
// File: rekening.dart
class RekeningBank {
  String namaPemilik;
  double _saldo; // Variabel PRIVATE (ada tanda _ di depannya)

  RekeningBank(this.namaPemilik, this._saldo);

  // Method publik untuk mengubah saldo private dengan aman
  void setorTunai(double jumlah) {
    if (jumlah > 0) {
      _saldo += jumlah;
      print("Setoran berhasil!");
    }
  }
}
```

```dart
// File: main.dart (dianggap file berbeda)
import 'rekening.dart';

void main() {
  RekeningBank rek = RekeningBank("Akmal", 1000);
  
  // rek._saldo = 50000; // ❌ ERROR! Tidak bisa diakses dari luar file!
  
  rek.setorTunai(50000); // ✅ Cara legal dan aman
}
```

## 3. GETTER DAN SETTER

Seringkali kita hanya ingin orang luar bisa *membaca* variabel private, tapi tidak bisa merubahnya, atau bisa merubahnya tapi dengan syarat (validasi) tertentu. Dart menyediakan fitur `get` dan `set`.

```dart
class Lingkaran {
  double _jariJari;

  Lingkaran(this._jariJari);

  // GETTER: Membaca nilai
  double get jariJari {
    return _jariJari;
  }
  
  // Tersedia juga syntax pendek:
  // double get luas => 3.14 * _jariJari * _jariJari;

  // SETTER: Mengubah nilai dengan validasi
  set jariJari(double nilaiBaru) {
    if (nilaiBaru < 0) {
      print("Jari-jari tidak boleh negatif!");
    } else {
      _jariJari = nilaiBaru;
    }
  }
}

void main() {
  Lingkaran L = Lingkaran(10);
  
  // Memanggil setter (mirip seperti mengubah variabel biasa)
  L.jariJari = -5; // Akan ditolak oleh validasi
  L.jariJari = 15; // Diterima
  
  // Memanggil getter
  print("Jari-jari saat ini: ${L.jariJari}");
}
```