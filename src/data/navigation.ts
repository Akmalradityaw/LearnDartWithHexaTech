export interface NavItem {
  title: string;
  slug: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const navigation: NavSection[] = [
  {
    title: "Modul 01: Pengenalan & Persiapan",
    items: [
      { title: "Apa itu Dart & Mengapa Dart?", slug: "apa-itu-dart" },
      { title: "Instalasi Dart SDK & VS Code", slug: "instalasi-dart" },
      { title: "Program Pertama: main() & print()", slug: "program-pertama" },
    ]
  },
  {
    title: "Modul 02: Fondasi Sintaksis",
    items: [
      { title: "Variabel & Konstanta", slug: "variabel-konstanta" },
      { title: "Tipe Data Dasar", slug: "tipe-data-dasar" },
      { title: "Operator", slug: "operator" },
    ]
  },
  {
    title: "Modul 03: Alur Kontrol",
    items: [
      { title: "Percabangan (if-else, switch)", slug: "percabangan" },
      { title: "Perulangan (for, while)", slug: "perulangan" },
      { title: "Koleksi (List, Set, Map)", slug: "koleksi" },
    ]
  },
  {
    title: "Modul 04: Fungsi & Null Safety",
    items: [
      { title: "Deklarasi Fungsi & Parameter", slug: "fungsi" },
      { title: "Anonymous Function", slug: "anonymous-function" },
      { title: "Prinsip Null Safety", slug: "null-safety" },
    ]
  },
  {
    title: "Modul 05: Object-Oriented",
    items: [
      { title: "Class & Object", slug: "class-object" },
      { title: "Encapsulation", slug: "encapsulation" },
      { title: "Inheritance & Abstract Class", slug: "inheritance" },
      { title: "Mixins & Enum", slug: "mixins-enum" },
    ]
  },
  {
    title: "Modul 06: Asynchronous Dart",
    items: [
      { title: "Event Loop & Future", slug: "future" },
      { title: "Async & Await", slug: "async-await" },
      { title: "Stream", slug: "stream" },
    ]
  }
];

export function getFlatNavigation() {
  return navigation.flatMap(section => section.items);
}

export function getNextAndPrev(slug: string) {
  const flat = getFlatNavigation();
  const index = flat.findIndex(item => item.slug === slug);
  
  if (index === -1) return { prev: null, next: null };
  
  return {
    prev: index > 0 ? flat[index - 1] : null,
    next: index < flat.length - 1 ? flat[index + 1] : null,
  };
}
