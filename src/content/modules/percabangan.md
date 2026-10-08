# PERCABANGAN (IF-ELSE, SWITCH)

Percabangan memungkinkan program untuk membuat keputusan dan mengeksekusi blok kode yang berbeda berdasarkan kondisi tertentu.

## 1. STATEMENT IF - ELSE

```dart
void main() {
  int nilai = 75;

  if (nilai >= 90) {
    print("Grade: A");
  } else if (nilai >= 80) {
    print("Grade: B");
  } else if (nilai >= 70) {
    print("Grade: C");
  } else {
    print("Grade: D (Anda harus mengulang)");
  }
}
```

## 2. TERNARY OPERATOR

Ternary operator adalah bentuk singkat dari `if-else` yang cocok digunakan untuk kondisi sederhana.
**Sintaks:** `kondisi ? nilaiJikaTrue : nilaiJikaFalse`

```dart
void main() {
  bool isPremium = true;
  
  // Cara panjang:
  String status;
  if (isPremium) {
    status = "Anggota VIP";
  } else {
    status = "Anggota Biasa";
  }
  
  // Cara cepat (Ternary):
  String statusCepat = isPremium ? "Anggota VIP" : "Anggota Biasa";
  
  print(statusCepat);
}
```

## 3. SWITCH CASE

Digunakan ketika Anda ingin memeriksa satu variabel terhadap banyak kemungkinan nilai pasti (biasanya String atau int).

```dart
void main() {
  String nilaiHuruf = "B";

  switch (nilaiHuruf) {
    case "A":
      print("Luar Biasa!");
      break;
    case "B":
    case "C":
      print("Kerja Bagus!");
      break;
    case "D":
      print("Tingkatkan belajarmu.");
      break;
    default:
      print("Nilai tidak valid.");
  }
}
```
> **Catatan:** Mulai dari Dart 3, `switch` jauh lebih *powerful* dan mendukung *Pattern Matching*, namun untuk dasarnya pemahaman sintaks `break` ini tetap penting!