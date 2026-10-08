# DEKLARASI FUNGSI & PARAMETER

Fungsi (atau Method) adalah sekumpulan blok instruksi yang dikelompokkan dan diberi nama untuk melakukan tugas tertentu, sehingga bisa dipanggil berulang kali tanpa menulis ulang kode.

## 1. FUNGSI DASAR

Fungsi dideklarasikan dengan menyebutkan tipe kembalian (jika tidak ada gunakan `void`), nama fungsi, parameter (jika ada), dan isi kodenya.

```dart
// Fungsi tanpa kembalian
void sapaDunia() {
  print("Halo Dunia!");
}

// Fungsi dengan kembalian int
int hitungLuasPersegi(int sisi) {
  return sisi * sisi;
}

void main() {
  sapaDunia();
  int luas = hitungLuasPersegi(5);
  print("Luasnya: $luas");
}
```

## 2. ARROW SYNTAX (FAT ARROW)

Jika isi fungsi hanya berisi SATU baris ekspresi (langsung return sesuatu), Dart punya sintaks singkat menggunakan `=>`.

```dart
// Fungsi normal:
int tambah(int a, int b) {
  return a + b;
}

// Arrow Syntax (hasilnya sama persis):
int tambahCepat(int a, int b) => a + b;
```

## 3. OPTIONAL PARAMETERS (PARAMETER OPSIONAL)

Dart memungkinkan Anda membuat parameter fungsi yang "opsional" (tidak wajib diisi saat dipanggil). Ada dua jenis: *Positional* dan *Named*.

### A. Positional Optional Parameters
Gunakan kurung siku `[ ]`. Parameter ini diisi berdasarkan urutannya, namun boleh dikosongkan.

```dart
void perkenalan(String nama, [int? umur]) {
  if (umur != null) {
    print("Halo $nama, umurmu $umur");
  } else {
    print("Halo $nama!");
  }
}

void main() {
  perkenalan("Budi");        // Sah
  perkenalan("Siti", 25);    // Sah
}
```

### B. Named Optional Parameters (Lebih sering dipakai di Flutter)
Gunakan kurung kurawal `{ }`. Saat memanggil fungsi, Anda harus menyebutkan nama variabelnya. Sangat berguna jika fungsi punya banyak argumen agar tidak tertukar.

```dart
// Gunakan 'required' jika parameter tersebut WAJIB diisi
void buatUser({required String nama, int umur = 18, String peran = "Member"}) {
  print("Nama: $nama, Umur: $umur, Peran: $peran");
}

void main() {
  // Tidak perlu berurutan, karena kita memanggil namanya!
  buatUser(nama: "Andi", peran: "Admin"); 
  // Output: Nama: Andi, Umur: 18, Peran: Admin (umur pakai default)
}
```