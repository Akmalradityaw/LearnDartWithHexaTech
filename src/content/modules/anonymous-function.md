# ANONYMOUS FUNCTION (FUNGSI TANPA NAMA)

Di Dart, sebuah fungsi tidak wajib memiliki nama. Fungsi yang tidak memiliki nama disebut *Anonymous Function*, *Lambda*, atau *Closure*.

## 1. MENGAPA BUTUH FUNGSI TANPA NAMA?

Fungsi tanpa nama biasanya digunakan saat Anda ingin mengirimkan instruksi "sekali pakai" sebagai argumen ke dalam fungsi lain, seringkali pada saat berhadapan dengan *List* (seperti `map`, `forEach`, `filter`).

Sintaks dasarnya:
```dart
(parameter) {
  // kode yang dijalankan
}
```

## 2. CONTOH PENGGUNAAN PADA `forEach`

```dart
void main() {
  List<String> daftarBuku = ["Harry Potter", "Laskar Pelangi", "Bumi Manusia"];

  // Memasukkan Anonymous Function ke dalam method forEach
  daftarBuku.forEach((String buku) {
    print("Saya sedang membaca $buku");
  });
}
```

Jika menggunakan **Arrow Syntax**, kode di atas bisa dipersingkat menjadi sangat elegan:

```dart
daftarBuku.forEach((buku) => print("Saya sedang membaca $buku"));
```

## 3. MENYIMPAN FUNGSI KE DALAM VARIABEL

Di Dart, fungsi dianggap sebagai "*first-class citizens*". Artinya, sebuah fungsi bisa disimpan ke dalam sebuah variabel, persis seperti String atau int!

```dart
void main() {
  // Menyimpan anonymous function ke variabel uppercaseFunction
  var uppercaseFunction = (String teks) {
    return teks.toUpperCase();
  };

  print(uppercaseFunction("halo dunia!")); // HALO DUNIA!
}
```

## 4. HIGHER-ORDER FUNCTION

Karena fungsi bisa dianggap seperti data, Anda bisa membuat fungsi yang menerima parameter berupa fungsi lain (ini disebut *Higher-Order Function*).

```dart
void eksekusiOperasi(int a, int b, Function(int, int) operasiMatematika) {
  int hasil = operasiMatematika(a, b);
  print("Hasil operasinya adalah: $hasil");
}

void main() {
  // Mengirim fungsi penambahan
  eksekusiOperasi(10, 5, (x, y) => x + y); // Hasil: 15
  
  // Mengirim fungsi perkalian
  eksekusiOperasi(10, 5, (x, y) => x * y); // Hasil: 50
}
```

Kemampuan ini sangat sering dipakai saat membangun UI di Flutter, misalnya menentukan fungsi apa yang berjalan saat tombol ditekan (`onPressed: () { ... }`).