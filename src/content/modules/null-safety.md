# PRINSIP NULL SAFETY

Salah satu pembaruan terbesar dan terpenting dalam sejarah bahasa Dart adalah pengenalan **Sound Null Safety** (diperkenalkan sejak versi 2.12). Konsep ini diciptakan untuk membasmi error "Billion Dollar Mistake" atau *NullPointerException*.

## 1. APA ITU NULL?

`null` melambangkan "ketidakadaan nilai" atau nilai kosong. Dulu, Anda bisa mendeklarasikan `String nama;` dan membiarkannya kosong. Ketika Anda mencoba memanggil `nama.length`, aplikasi akan **crash** (*Error*) karena Anda mencoba memanggil properti dari sesuatu yang kosong.

## 2. PRINSIP DASAR NULL SAFETY

Dengan Null Safety, **semua variabel secara default TIDAK BOLEH bernilai `null`**.

```dart
void main() {
  String nama = "Budi"; // ✅ Boleh
  // String pekerjaan = null; // ❌ ERROR! String biasa tidak bisa null
}
```

Jika Anda memang benar-benar membutuhkan variabel yang bisa bernilai `null` (misalnya data dari database yang mungkin belum diisi), Anda harus menambahkan tanda tanya (`?`) setelah tipe datanya. Ini disebut **Nullable Type**.

```dart
void main() {
  String? pekerjaan = null; // ✅ SAH! Karena tipe datanya String? (bisa null)
  pekerjaan = "Programmer";
}
```

## 3. OPERATOR NULL-AWARE

Saat Anda menggunakan variabel yang *nullable* (`?`), Dart akan mencegah Anda memakainya secara langsung jika Anda belum mengecek apakah isinya `null` atau tidak. Dart menyediakan operator praktis untuk menanganinya:

### A. Fallback Operator (`??`)
"Gunakan nilai sebelah kiri jika tidak null, TAPI gunakan nilai sebelah kanan jika null."

```dart
String? namaTengah; // null
String cetakNama = namaTengah ?? "Tidak punya nama tengah";
print(cetakNama); // Output: Tidak punya nama tengah
```

### B. Safe Navigation Operator (`?.`)
"Coba panggil method/properti-nya. Kalau `null`, jangan *crash*, kembalikan saja `null`."

```dart
String? kata = null;
// print(kata.length); // ❌ ERROR (bisa crash!)
print(kata?.length); // ✅ Aman, hasilnya: null
```

### C. Bang Operator (`!`) - HATI-HATI!
"Saya sebagai programmer MENJAMIN 100% ini tidak `null`. Paksa program mengeksekusi!" (Hanya gunakan jika Anda sangat yakin, jika ternyata `null` program akan *crash*).

```dart
String? data = "Rahasia";
int panjangTeks = data!.length; // Dipaksa tanpa ?, karena kita yakin data ada isinya.
```

## KESIMPULAN
Biasakan diri dengan tanda `?`, `??`, dan `!` ini karena Anda akan melihatnya di setiap baris kode Flutter. Null Safety membuat aplikasi kita sangat stabil!