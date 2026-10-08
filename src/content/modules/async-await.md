# ASYNC & AWAIT

Di modul sebelumnya, kita mengetahui bahwa `Future` akan menghasilkan nilai di masa depan. Tapi bagaimana jika kita benar-benar butuh datanya **sekarang juga** sebelum mengeksekusi baris berikutnya?

Misalnya: Kita butuh Data JSON dari server, lalu kita butuh data itu untuk dicetak ke layar. Kita tidak bisa langsung mencetak datanya kalau nilainya belum datang!

## 1. CARA LAMA: `.then()`

Cara kuno untuk menunggu nilai `Future` adalah menggunakan *callback* `.then()`.

```dart
// Anggap ini fungsi yg mengambil data dari internet
Future<String> ambilDataServer() {
  return Future.delayed(Duration(seconds: 2), () => "Data Penting API");
}

void main() {
  print("Mengambil data...");
  
  ambilDataServer().then((hasil) {
    print("Sukses: $hasil");
  }).catchError((error) {
    print("Gagal: $error");
  });
  
  print("Teks ini muncul duluan!");
}
```

## 2. CARA MODERN: `async` dan `await`

Menggunakan `.then()` bisa membuat kode bertumpuk-tumpuk ke dalam (*Callback Hell*). Dart meminjam sintaks `async` & `await` (mirip JavaScript/C#) agar kita bisa menulis kode asinkron tapi gaya penulisannya seakan-akan *synchronous*!

Aturan emas:
1. Jika Anda mau memakai `await`, fungsi pembungkusnya **WAJIB** diberi label `async`.
2. `await` akan "menjeda" fungsi tersebut sampai Future-nya selesai, namun aplikasi *tidak freeze*!

```dart
// Fungsi bantuan yg memakan waktu
Future<String> ambilDataServer() {
  return Future.delayed(Duration(seconds: 2), () => "Data Penting API");
}

// Tambahkan kata kunci 'async'
void main() async {
  print("1. Mengambil data...");
  
  try {
    // Tambahkan 'await' untuk menunggu hasil Future selesai
    String hasil = await ambilDataServer();
    print("2. Sukses mendapatkan: $hasil");
    
  } catch (e) {
    // Error handling pakai try-catch standar
    print("Terjadi error: $e");
  }
  
  // Teks ini benar-benar ditahan sampai proses await di atas selesai!
  print("3. Teks ini muncul paling terakhir.");
}
```

**Output:**
```text
1. Mengambil data...
(Jeda 2 detik)
2. Sukses mendapatkan: Data Penting API
3. Teks ini muncul paling terakhir.
```

Sintaks `async / await` adalah standar emas (*Best Practice*) di Flutter saat berhadapan dengan *database*, *HTTP Request / API*, atau navigasi layar!