# CLASS & OBJECT

Dart adalah bahasa Pemrograman Berorientasi Objek (*Object-Oriented Programming* / OOP) murni. Segalanya adalah objek. Konsep dasar dari OOP adalah `Class` dan `Object`.

## 1. PENGERTIAN

- **Class:** Cetak biru (*blueprint*) atau *template* untuk menciptakan sesuatu. (Contoh: Konsep Mobil, punya roda, mesin, bisa ngegas).
- **Object / Instance:** Wujud nyata dari cetakan (Class) tersebut. (Contoh: Mobil BMW milik Budi berwarna Merah).

## 2. MEMBUAT CLASS

Class biasanya memiliki:
1. **Properties / Atribut / Fields:** Data yang melekat pada class (misal: warna, merek).
2. **Methods:** Fungsi atau kemampuan yang bisa dilakukan class (misal: berjalan, mengerem).

```dart
class Kucing {
  // Properties (Atribut)
  String nama = "";
  int umur = 0;
  String warna = "";

  // Method (Tingkah laku)
  void meong() {
    print("$nama: Meoooong!");
  }
  
  void tidur() {
    print("$nama sedang tidur Zzzz...");
  }
}
```

## 3. MEMBUAT OBJECT (INSTANTIATION)

Setelah cetakannya (Class `Kucing`) dibuat, kita bisa menciptakan kucing sungguhan (Object) di dalam `main()`.

```dart
void main() {
  // Membuat objek baru dari Class Kucing
  Kucing kucingBudi = Kucing();
  
  // Mengisi data properties
  kucingBudi.nama = "Ciko";
  kucingBudi.umur = 2;
  kucingBudi.warna = "Oren";
  
  // Memanggil method
  kucingBudi.meong(); // Output: Ciko: Meoooong!
}
```

## 4. CONSTRUCTORS

Daripada mengisi properties satu-satu (seperti baris kode di atas), kita bisa membuat **Constructor**. Constructor adalah method spesial yang otomatis dipanggil saat objek dibuat. Namanya harus **sama dengan nama Class**.

```dart
class Mobil {
  String merek;
  int tahun;

  // Constructor standar
  Mobil(this.merek, this.tahun);
}

void main() {
  // Jauh lebih bersih dan rapi!
  Mobil mobilSaya = Mobil("Toyota", 2023);
  print(mobilSaya.merek); // Toyota
}
```

### Named Constructor
Dart punya fitur spesial di mana Anda bisa membuat banyak constructor dengan nama berbeda di satu Class.

```dart
class User {
  String nama;
  String role;
  
  // Constructor 1
  User(this.nama, this.role);
  
  // Constructor 2 (Named Constructor)
  User.guest(this.nama) : role = "Tamu";
}

void main() {
  User user1 = User("Akmal", "Admin");
  User user2 = User.guest("Budi"); // Otomatis rolenya Tamu
}
```