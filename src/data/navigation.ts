export interface NavBranch {
  title: string;
  anchor: string;
  type?: 'theory' | 'task';
}

export interface NavItem {
  title: string;
  slug: string;
  branches?: NavBranch[];
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
      { 
        title: "Program Pertama: main() & print()", 
        slug: "program-pertama",
        branches: [
          { title: "Teori: main() & print()", anchor: "#cabang-teori-main", type: 'theory' },
          { title: "Teori: Escape Sequences", anchor: "#cabang-teori-formatting", type: 'theory' },
          { title: "Tugas: 3 Tingkatan", anchor: "#cabang-tugas-mandiri", type: 'task' },
        ]
      },
    ]
  },
  {
    title: "Modul 02: Fondasi Sintaksis",
    items: [
      { 
        title: "Variabel & Konstanta", 
        slug: "variabel-konstanta",
        branches: [
          { title: "Teori: var & Inferensi", anchor: "#cabang-1-variabel-var", type: 'theory' },
          { title: "Teori: Eksplisit & dynamic", anchor: "#cabang-2-deklarasi-eksplisit", type: 'theory' },
          { title: "Teori: final vs const", anchor: "#cabang-3-konstanta-final--const", type: 'theory' },
          { title: "Tugas: 3 Tingkatan", anchor: "#cabang-tugas-mandiri", type: 'task' },
        ]
      },
      { 
        title: "Tipe Data Dasar", 
        slug: "tipe-data-dasar",
        branches: [
          { title: "Teori: Numbers & Strings", anchor: "#cabang-1-angka-teks", type: 'theory' },
          { title: "Teori: Boolean & Parsing", anchor: "#cabang-2-boolean-parsing", type: 'theory' },
          { title: "Tugas: 3 Tingkatan", anchor: "#cabang-tugas-mandiri", type: 'task' },
        ]
      },
      { 
        title: "Operator", 
        slug: "operator",
        branches: [
          { title: "Teori: Aritmatika & Logika", anchor: "#cabang-1-aritmatika-logika", type: 'theory' },
          { title: "Teori: Relasional & Assign", anchor: "#cabang-2-perbandingan-increment", type: 'theory' },
          { title: "Tugas: 3 Tingkatan", anchor: "#cabang-tugas-mandiri", type: 'task' },
        ]
      },
    ]
  },
  {
    title: "Modul 03: Alur Kontrol",
    items: [
      { 
        title: "Percabangan (if-else, switch)", 
        slug: "percabangan",
        branches: [
          { title: "Teori: If-Else & Logical Flow", anchor: "#cabang-1-if-else", type: 'theory' },
          { title: "Teori: Ternary & Guard", anchor: "#cabang-2-ternary-guard", type: 'theory' },
          { title: "Teori: Switch & Pattern", anchor: "#cabang-3-switch-pattern", type: 'theory' },
          { title: "Tugas: 3 Tingkatan", anchor: "#cabang-tugas-mandiri", type: 'task' },
        ]
      },
      { 
        title: "Perulangan (for, while)", 
        slug: "perulangan",
        branches: [
          { title: "Teori: For Loop & Ranges", anchor: "#cabang-1-for-loop", type: 'theory' },
          { title: "Teori: While & Loop Control", anchor: "#cabang-2-while-control", type: 'theory' },
          { title: "Tugas: 3 Tingkatan", anchor: "#cabang-tugas-mandiri", type: 'task' },
        ]
      },
      { 
        title: "Koleksi (List, Set, Map)", 
        slug: "koleksi",
        branches: [
          { title: "Teori: List & Spread", anchor: "#cabang-1-list-spread", type: 'theory' },
          { title: "Teori: Set, Map & Collection-If", anchor: "#cabang-2-set-map-collection-if", type: 'theory' },
          { title: "Tugas: 3 Tingkatan", anchor: "#cabang-tugas-mandiri", type: 'task' },
        ]
      },
    ]
  },
  {
    title: "Modul 04: Fungsi & Null Safety",
    items: [
      { 
        title: "Deklarasi Fungsi & Parameter", 
        slug: "fungsi",
        branches: [
          { title: "Teori: Sintaks & Arrow", anchor: "#cabang-1-sintaks-arrow", type: 'theory' },
          { title: "Teori: Positional & Named", anchor: "#cabang-2-positional-named-param", type: 'theory' },
          { title: "Tugas: 3 Tingkatan", anchor: "#cabang-tugas-mandiri", type: 'task' },
        ]
      },
      { 
        title: "Anonymous Function", 
        slug: "anonymous-function",
        branches: [
          { title: "Teori: Lambda & Scope", anchor: "#cabang-1-anonymous-lambda", type: 'theory' },
          { title: "Teori: Higher-Order & Closures", anchor: "#cabang-2-higher-order-closures", type: 'theory' },
          { title: "Tugas: 3 Tingkatan", anchor: "#cabang-tugas-mandiri", type: 'task' },
        ]
      },
      { 
        title: "Prinsip Null Safety", 
        slug: "null-safety",
        branches: [
          { title: "Teori: Nullable Types", anchor: "#cabang-1-nullable-types", type: 'theory' },
          { title: "Teori: Null-Aware (?, ??, !)", anchor: "#cabang-2-null-aware-operators", type: 'theory' },
          { title: "Teori: Late & Type Promotion", anchor: "#cabang-3-late-type-promotion", type: 'theory' },
          { title: "Tugas: 3 Tingkatan", anchor: "#cabang-tugas-mandiri", type: 'task' },
        ]
      },
    ]
  },
  {
    title: "Modul 05: Object-Oriented",
    items: [
      { 
        title: "Class & Object", 
        slug: "class-object",
        branches: [
          { title: "Teori: Blueprint & Instansiasi", anchor: "#cabang-1-blueprint-instansiasi", type: 'theory' },
          { title: "Teori: Constructors & Named", anchor: "#cabang-2-constructors-named", type: 'theory' },
          { title: "Tugas: 3 Tingkatan", anchor: "#cabang-tugas-mandiri", type: 'task' },
        ]
      },
      { 
        title: "Encapsulation", 
        slug: "encapsulation",
        branches: [
          { title: "Teori: Private Fields (_)", anchor: "#cabang-1-private-fields", type: 'theory' },
          { title: "Teori: Getters & Setters", anchor: "#cabang-2-getters-setters", type: 'theory' },
          { title: "Tugas: 3 Tingkatan", anchor: "#cabang-tugas-mandiri", type: 'task' },
        ]
      },
      { 
        title: "Inheritance & Abstract Class", 
        slug: "inheritance",
        branches: [
          { title: "Teori: Pewarisan & super", anchor: "#cabang-1-inheritance-super", type: 'theory' },
          { title: "Teori: Override & Abstract", anchor: "#cabang-2-override-abstract", type: 'theory' },
          { title: "Tugas: 3 Tingkatan", anchor: "#cabang-tugas-mandiri", type: 'task' },
        ]
      },
      { 
        title: "Mixins & Enum", 
        slug: "mixins-enum",
        branches: [
          { title: "Teori: Enum & Enhanced Enum", anchor: "#cabang-1-enum-dan-values", type: 'theory' },
          { title: "Teori: Mixin & with Keyword", anchor: "#cabang-2-mixin-dan-with", type: 'theory' },
          { title: "Tugas: 3 Tingkatan", anchor: "#cabang-tugas-mandiri", type: 'task' },
        ]
      },
    ]
  },
  {
    title: "Modul 06: Asynchronous Dart",
    items: [
      { 
        title: "Event Loop & Future", 
        slug: "future",
        branches: [
          { title: "Teori: Event Loop & Queue", anchor: "#cabang-1-event-loop-microtask", type: 'theory' },
          { title: "Teori: Future Lifecycle", anchor: "#cabang-2-future-lifecycle", type: 'theory' },
          { title: "Tugas: 3 Tingkatan", anchor: "#cabang-tugas-mandiri", type: 'task' },
        ]
      },
      { 
        title: "Async & Await", 
        slug: "async-await",
        branches: [
          { title: "Teori: async & await", anchor: "#cabang-1-sintaks-async-await", type: 'theory' },
          { title: "Teori: Try-Catch & Future.wait", anchor: "#cabang-2-try-catch-future-wait", type: 'theory' },
          { title: "Tugas: 3 Tingkatan", anchor: "#cabang-tugas-mandiri", type: 'task' },
        ]
      },
      { 
        title: "Stream", 
        slug: "stream",
        branches: [
          { title: "Teori: Generator & yield", anchor: "#cabang-1-generator-async-yield", type: 'theory' },
          { title: "Teori: StreamController", anchor: "#cabang-2-stream-controller-await-for", type: 'theory' },
          { title: "Tugas: 3 Tingkatan", anchor: "#cabang-tugas-mandiri", type: 'task' },
        ]
      },
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
