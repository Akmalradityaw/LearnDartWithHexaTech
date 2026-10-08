import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F4F4F0] text-[#111111]">
      {/* ═══════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════ */}
      <section className="border-b-2 border-[#111111]">
        <div className="mx-auto w-full max-w-[1600px] px-4 py-20 md:px-8 md:py-32">
          <p className="mb-6 inline-block border border-[#111111] bg-violet-600 px-3 py-1 font-mono text-xs font-bold tracking-[0.15em] text-white">
            BELAJAR DART TANPA RIBET. TANPA LOGIN.
          </p>
          <h1 className="mb-8 text-[clamp(3rem,10vw,9rem)] font-black uppercase leading-[0.85] tracking-[-0.05em]">
            Kuasai
            <br />
            Dart<span className="text-violet-600">.</span>
            <br />
            Bangun
            <br />
            Masa Depan<span className="text-violet-600">.</span>
          </h1>
          <p className="mb-10 max-w-lg font-mono text-sm leading-relaxed tracking-[0.05em] text-[#555555] md:text-base">
            PLATFORM PEMBELAJARAN BAHASA DART MODERN YANG DIRANCANG UNTUK KECEPATAN, KENYAMANAN, DAN PEMAHAMAN MENDALAM. TERSEDIA GRATIS UNTUK SEMUA ORANG.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/learn"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#111111] bg-[#111111] px-8 py-4 font-mono text-sm font-bold tracking-[0.1em] text-white transition-colors hover:bg-violet-600 hover:border-violet-600"
            >
              MULAI BELAJAR SEKARANG &rarr;
            </Link>
            <a
              href="#roadmap"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#111111] bg-transparent px-8 py-4 font-mono text-sm font-bold tracking-[0.1em] text-[#111111] transition-colors hover:bg-[#111111] hover:text-white"
            >
              LIHAT KURIKULUM
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FEATURES
      ═══════════════════════════════════════════════════════ */}
      <section className="border-b border-[#111111]">
        <div className="mx-auto w-full max-w-[1600px] px-4 py-16 md:px-8 md:py-24">
          <h2 className="mb-10 font-mono text-xs tracking-[0.15em] text-violet-600">
            [ FITUR PLATFORM ]
          </h2>
          <div className="grid gap-0 border border-[#111111] md:grid-cols-3">
            {[
              {
                num: "01",
                title: "FRICTIONLESS LEARNING",
                desc: "Langsung akses materi tanpa perlu mendaftar atau login. Waktu Anda berharga untuk belajar, bukan mengisi form.",
              },
              {
                num: "02",
                title: "KODE INTERAKTIF",
                desc: "Dilengkapi dengan syntax highlighting yang indah dan tombol salin cepat untuk mencoba kode di lokal Anda.",
              },
              {
                num: "03",
                title: "KURIKULUM TERSTRUKTUR",
                desc: "Disusun rapi dari dasar hingga konsep asinkron lanjutan untuk mempersiapkan Anda menjadi Flutter Developer handal.",
              },
            ].map((f, i) => (
              <div
                key={f.num}
                className={`border-[#111111] p-6 md:p-8 ${i < 2 ? "border-b md:border-b-0 md:border-r" : ""}`}
              >
                <div className="mb-6 font-mono text-xs tracking-[0.15em] text-violet-600">
                  {f.num}
                </div>
                <h3 className="mb-3 text-lg font-black uppercase tracking-tight">{f.title}</h3>
                <p className="text-sm leading-relaxed text-[#555555]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          ROADMAP
      ═══════════════════════════════════════════════════════ */}
      <section id="roadmap" className="border-b border-[#111111]">
        <div className="mx-auto w-full max-w-[1600px] px-4 py-16 md:px-8 md:py-24">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-[clamp(2rem,6vw,4rem)] font-black uppercase leading-[0.9] tracking-[-0.03em]">
              Peta Jalan
              <br />
              Pembelajaran
            </h2>
            <p className="font-mono text-xs tracking-[0.15em] text-[#555555]">
              6 MODUL KOMPREHENSIF — DARI DASAR HINGGA ASINKRON
            </p>
          </div>
          <div className="border border-[#111111]">
            {[
              { num: "01", title: "PENGENALAN & PERSIAPAN", desc: "Mengenal Dart, instalasi, dan membuat program pertama." },
              { num: "02", title: "FONDASI SINTAKSIS & TIPE DATA", desc: "Variabel, tipe data, dan operator dasar." },
              { num: "03", title: "ALUR KONTROL & STRUKTUR DATA", desc: "Percabangan, perulangan, List, Set, dan Map." },
              { num: "04", title: "FUNGSI & NULL SAFETY", desc: "Konsep fungsi dan pengenalan Sound Null Safety." },
              { num: "05", title: "OBJECT-ORIENTED PROGRAMMING", desc: "Class, objek, inheritance, dan mixins." },
              { num: "06", title: "PEMROGRAMAN ASINKRON", desc: "Future, async/await, dan Stream di Dart." },
            ].map((m, i) => (
              <div
                key={m.num}
                className={`group flex items-center gap-4 border-[#111111] p-4 transition-colors hover:bg-[#111111] hover:text-white md:gap-6 md:p-6 ${i < 5 ? "border-b" : ""}`}
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border-2 border-[#111111] font-mono text-sm font-bold transition-colors group-hover:border-white md:h-16 md:w-16 md:text-lg">
                  {m.num}
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-tight md:text-lg">{m.title}</h3>
                  <p className="text-xs text-[#555555] transition-colors group-hover:text-[#F4F4F0] md:text-sm">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 font-mono text-sm font-bold tracking-[0.1em] text-violet-600 transition-colors hover:text-[#111111]"
            >
              MULAI MODUL PERTAMA &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════════ */}
      <section>
        <div className="mx-auto w-full max-w-[1600px] px-4 py-16 text-center md:px-8 md:py-24">
          <h2 className="mb-4 text-[clamp(2rem,6vw,5rem)] font-black uppercase leading-[0.9] tracking-[-0.03em]">
            Siap Mulai
            <br />
            Perjalananmu?
          </h2>
          <p className="mx-auto mb-10 max-w-md font-mono text-sm tracking-[0.05em] text-[#555555]">
            TANPA LOGIN, TANPA BIAYA. LANGSUNG BUKA MATERI PERTAMA DAN MULAI BELAJAR DART HARI INI.
          </p>
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 border-2 border-[#111111] bg-violet-600 px-8 py-4 font-mono text-sm font-bold tracking-[0.1em] text-white transition-colors hover:bg-[#111111]"
          >
            MULAI BELAJAR &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
