# STREAM (REACTIVE PROGRAMMING)

Kita telah belajar tentang `Future`. Future itu ibarat kotak hadiah: Anda menunggunya datang, membukanya, dan mendapatkan **SATU** nilai. Setelah itu, selesai.

Namun bagaimana jika data yang kita butuhkan datang secara **beruntun dan terus menerus** seiring berjalannya waktu? Misalnya: Notifikasi chat WhatsApp, perubahan lokasi GPS di peta, atau hitungan mundur *timer*? Di sinilah kita menggunakan **Stream**.

`Stream` ibarat keran air. Begitu Anda putar, tetesan air (data) akan terus mengalir satu per satu sampai keran dimatikan.

## 1. MEMBUAT STREAM DASAR

Kita bisa menggunakan fungsi asinkron (dengan `async*` dan kata ganti `yield`) untuk membuat penghasil rentetan data (Generator).

```dart
// Perhatikan penggunaan async* (bintang) dan return type Stream
Stream<int> buatTimer(int jumlahDetik) async* {
  for (int i = 1; i <= jumlahDetik; i++) {
    // Tunggu 1 detik
    await Future.delayed(Duration(seconds: 1));
    
    // 'yield' fungsinya mirip 'return', bedanya ia "melempar" 
    // data tapi tidak menghentikan fungsi
    yield i; 
  }
}
```

## 2. MENDENGARKAN (LISTEN) STREAM

Kalau Anda mau menerima air dari keran, Anda harus meletakkan ember dan mendengarkannya (`listen`).

```dart
void main() {
  print("Menjalankan timer 5 detik...");
  
  Stream<int> timer = buatTimer(5);
  
  // Kita dengarkan data yang keluar dari stream
  timer.listen(
    (dataPancaran) {
      print("Detik ke-$dataPancaran"); // Dieksekusi tiap 1 detik
    },
    onDone: () {
      print("Timer selesai!"); // Dieksekusi jika keran sudah habis ditutup
    }
  );
}
```

## 3. MENGGUNAKAN `await for`

Sama seperti `Future` punya `await`, `Stream` juga punya sintaks perulangan yang elegan, yaitu `await for`.

```dart
void main() async {
  Stream<int> timer = buatTimer(3);
  
  // Akan berulang menahan kode sampai data baru dilempar (yield)
  await for (int angka in timer) {
    print("Menerima angka: $angka");
  }
  
  print("Semua data telah diterima.");
}
```

**Penggunaan di Dunia Nyata:**
Di Flutter, konsep `Stream` sangat penting karena digunakan untuk hal-hal reaktif seperti State Management (*BLoC, RxDart*) atau interaksi real-time (*Firebase Cloud Firestore, WebSockets*).

---
**SELAMAT!** Anda telah menyelesaikan kurikulum Fundamental Dart! Anda kini sudah memiliki basis sintaks dan pemahaman OOP asinkron yang kokoh untuk mulai terjun mengembangkan UI menakjubkan menggunakan *Flutter Framework*!