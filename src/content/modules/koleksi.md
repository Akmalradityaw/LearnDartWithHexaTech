# KOLEKSI (LIST, SET, MAP)

Dart menyediakan tipe data koleksi bawaan (*built-in*) yang sangat kuat untuk mengelompokkan sekumpulan data.

## 1. LIST (ARRAY)

List adalah koleksi berurutan (*ordered*). Setiap data punya nomor indeks (dimulai dari 0). Di bahasa lain ini sering disebut Array.

```dart
void main() {
  // Mendeklarasikan List berisi String
  List<String> buah = ["Apel", "Jeruk", "Mangga"];
  
  print(buah[0]); // Apel (indeks ke-0)
  
  buah.add("Pisang"); // Menambah di akhir
  buah.remove("Jeruk"); // Menghapus "Jeruk"
  
  print(buah.length); // Panjang isi list
  
  // Looping isi List (Cara Elegan)
  for (String b in buah) {
    print(b);
  }
}
```

## 2. SET

Set mirip dengan List, namun Set sifatnya **tidak berurutan (unordered)** dan **TIDAK BOLEH ADA DUPLIKAT**. Sangat berguna untuk menyimpan data yang unik.

```dart
void main() {
  Set<int> angkaUnik = {1, 2, 3, 3, 4, 1};
  
  print(angkaUnik); // Output: {1, 2, 3, 4} (duplikat otomatis dihapus)
}
```

## 3. MAP (DICTIONARY)

Map adalah sekumpulan data yang berpasangan antara `Key` (kunci) dan `Value` (nilai). Kunci haruslah unik.

```dart
void main() {
  // Key bertipe String, Value bertipe dynamic (bisa String/int/dll)
  Map<String, dynamic> user = {
    "nama": "Akmal",
    "umur": 20,
    "isAdmin": true
  };
  
  print(user["nama"]); // Output: Akmal
  
  user["pekerjaan"] = "Developer"; // Menambahkan data baru
  user["umur"] = 21; // Memperbarui data lama
  
  // Melakukan perulangan pada Map
  user.forEach((key, value) {
    print("$key: $value");
  });
}
```

## FITUR SAKTI DART KEKINIAN (SPREAD & COLLECTION IF)

Dart punya fitur untuk membangun koleksi yang sangat keren dan banyak dipakai di Flutter UI.

```dart
void main() {
  bool isAdmin = true;
  List<String> menuUtama = ["Home", "About"];
  
  // Menggabungkan list (Spread operator) & percabangan dalam List!
  List<String> menuNav = [
    ...menuUtama, // Memasukkan semua elemen menuUtama ke sini
    if (isAdmin) "Dashboard Admin", // Cuma masuk kalau isAdmin = true
    "Logout"
  ];
  
  print(menuNav); // [Home, About, Dashboard Admin, Logout]
}
```