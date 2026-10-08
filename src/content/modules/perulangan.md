# PERULANGAN (FOR, WHILE)

Perulangan (Looping) digunakan untuk mengeksekusi sekumpulan blok kode secara berulang-ulang tanpa harus menulisnya berkali-kali.

## 1. FOR LOOP

Gunakan `for` jika Anda sudah tahu **berapa kali** perulangan tersebut harus berjalan.

```dart
void main() {
  // Mencetak angka 1 sampai 5
  for (int i = 1; i <= 5; i++) {
    print("Perulangan ke-$i");
  }
}
```

**Anatomi `for`:**
1. `int i = 1`: Inisialisasi awal.
2. `i <= 5`: Kondisi/batas (jika `true`, loop berjalan).
3. `i++`: Aksi paska-eksekusi di akhir tiap putaran.

## 2. WHILE LOOP

Gunakan `while` jika Anda **belum tahu pasti berapa kali loop berjalan**, tetapi Anda tahu **kondisi berhentinya**. Pengecekan kondisi dilakukan di AWAL.

```dart
void main() {
  int energi = 10;

  while (energi > 0) {
    print("Berlari... Sisa energi: $energi");
    energi--; // Jangan lupa dikurangi, kalau tidak akan infinite loop!
  }
  print("Kelelahan, berhenti berlari.");
}
```

## 3. DO-WHILE LOOP

Mirip `while`, bedanya `do-while` akan **selalu mengeksekusi kodenya minimal 1 kali**, karena pengecekan kondisi dilakukan di AKHIR.

```dart
void main() {
  int count = 10;
  
  do {
    print("Hitung: $count");
    count++;
  } while (count < 5); 
  
  // Hasilnya: "Hitung: 10" akan tetap dicetak 1 kali meskipun count > 5.
}
```

## BREAK DAN CONTINUE

- `break`: Langsung menghentikan paksa seluruh perulangan.
- `continue`: Melewati putaran (iterasi) saat ini saja, dan langsung loncat ke putaran berikutnya.

```dart
void main() {
  for (int i = 1; i <= 10; i++) {
    if (i == 4) {
      continue; // Lewati angka 4
    }
    if (i == 8) {
      break; // Berhenti paksa jika sampai angka 8
    }
    print(i);
  }
}
// Output: 1, 2, 3, 5, 6, 7
```