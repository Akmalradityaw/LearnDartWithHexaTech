# OPERATOR

Dart memiliki banyak jenis operator standar layaknya bahasa pemrograman modern.

## 1. OPERATOR ARITMATIKA

```dart
int a = 10;
int b = 3;

print(a + b);  // Penjumlahan (13)
print(a - b);  // Pengurangan (7)
print(a * b);  // Perkalian (30)
print(a / b);  // Pembagian desimal (3.3333333333333335)
print(a ~/ b); // Pembagian bulat (3) - Membuang angka desimal!
print(a % b);  // Modulo / Sisa Bagi (1)
```

## 2. OPERATOR PERBANDINGAN

Digunakan untuk membandingkan dua nilai. Hasilnya selalu `bool` (`true` atau `false`).

```dart
print(5 == 5);  // Sama dengan (true)
print(5 != 5);  // Tidak sama dengan (false)
print(5 > 2);   // Lebih besar dari (true)
print(5 < 2);   // Lebih kecil dari (false)
print(5 >= 5);  // Lebih besar atau sama dengan (true)
print(5 <= 2);  // Lebih kecil atau sama dengan (false)
```

## 3. OPERATOR LOGIKA

Digunakan untuk menggabungkan dua atau lebih kondisi `bool`.

- `&&` (AND): Akan `true` jika KEDUA kondisi bernilai `true`.
- `||` (OR): Akan `true` jika SALAH SATU kondisi bernilai `true`.
- `!` (NOT): Membalikkan nilai logika.

```dart
bool a = true;
bool b = false;

print(a && b); // false
print(a || b); // true
print(!a);     // false
```

## 4. INCREMENT & DECREMENT

Sangat sering digunakan dalam perulangan.

```dart
int x = 0;
x++; // x = x + 1; (sekarang x jadi 1)
x--; // x = x - 1; (sekarang x jadi 0)

x += 5; // x = x + 5; (sekarang x jadi 5)
```