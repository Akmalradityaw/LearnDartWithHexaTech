import Link from "next/link";
import { ArrowRight, BookOpen, Code2, Sparkles, CheckCircle2, Layers, Cpu, Zap } from "lucide-react";
import HeroCodeCard from "@/components/home/HeroCodeCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F4F4F0] text-[#111111]">
      {/* ═══════════════════════════════════════════════════════
          HERO (FITS 100% VIEWPORT & BALANCED 2-COLUMN GRID)
      ═══════════════════════════════════════════════════════ */}
      <section className="border-b-2 border-[#111111] relative overflow-hidden">
        <div className="mx-auto w-full max-w-[1600px] px-4 py-8 sm:py-10 md:py-14 lg:py-16 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
            
            {/* Left Column: Heading, Pitch & CTAs */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="border-2 border-[#111111] bg-[#111111] px-2.5 py-0.5 font-mono text-[11px] font-bold uppercase tracking-wider text-white">
                  HEXATECH ACADEMY
                </span>
                <span className="border-2 border-[#111111] bg-violet-600 px-2.5 py-0.5 font-mono text-[11px] font-bold uppercase tracking-wider text-white shadow-[2px_2px_0_0_#111111]">
                  BELAJAR DART TANPA RIBET. TANPA LOGIN.
                </span>
              </div>

              {/* Main Headline - Sized to fit comfortably at 100% zoom */}
              <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-black uppercase leading-[0.95] tracking-tight text-[#111111]">
                Kuasai Dart<span className="text-violet-600">.</span>
                <br />
                Bangun Masa Depan<span className="text-violet-600">.</span>
              </h1>

              {/* Subtitle */}
              <p className="mb-6 max-w-xl font-mono text-xs sm:text-sm leading-relaxed text-[#444444] tracking-normal">
                Platform pembelajaran bahasa pemrograman Dart modern dari dasar hingga asinkron tingkat lanjut. 
                Dilengkapi pohon kurikulum bercabang, template kode mandiri siap eksekusi, serta penugasan terstruktur 3 level.
              </p>

              {/* Neobrutalist Feature Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "100% Gratis & Terbuka",
                  "Sound Null Safety",
                  "Dart 3 Pattern Matching",
                  "Fondasi Kuat Flutter",
                ].map((pill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 border border-[#111111] bg-white px-2.5 py-1 text-[11px] font-mono font-bold text-[#111111] shadow-[2px_2px_0_0_#111111]"
                  >
                    <CheckCircle2 className="w-3 h-3 text-violet-600 flex-shrink-0" />
                    <span>{pill}</span>
                  </div>
                ))}
              </div>

              {/* Call-to-Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/learn"
                  className="group inline-flex items-center justify-center gap-2 border-2 border-[#111111] bg-[#111111] px-6 py-3.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-[4px_4px_0_0_#111111] transition-all hover:bg-violet-600 hover:border-violet-600 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
                >
                  <span>Mulai Belajar Sekarang</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href="#roadmap"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#111111] bg-white px-6 py-3.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#111111] shadow-[4px_4px_0_0_#111111] transition-all hover:bg-[#111111] hover:text-white hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Lihat Kurikulum (6 Modul)</span>
                </a>
              </div>

              {/* Stats Bar */}
              <div className="mt-8 pt-6 border-t border-[#111111]/20 grid grid-cols-3 gap-4">
                <div>
                  <div className="font-mono text-xl sm:text-2xl font-black text-[#111111]">6 Modul</div>
                  <div className="font-mono text-[10px] sm:text-[11px] uppercase text-[#666666] tracking-wider font-bold">Kurikulum Inti</div>
                </div>
                <div>
                  <div className="font-mono text-xl sm:text-2xl font-black text-violet-600">26 Topik</div>
                  <div className="font-mono text-[10px] sm:text-[11px] uppercase text-[#666666] tracking-wider font-bold">Materi Lengkap</div>
                </div>
                <div>
                  <div className="font-mono text-xl sm:text-2xl font-black text-[#111111]">18+ Tugas</div>
                  <div className="font-mono text-[10px] sm:text-[11px] uppercase text-[#666666] tracking-wider font-bold">Latihan Mandiri</div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Code Playground Card (Fills empty area) */}
            <div className="lg:col-span-6 xl:col-span-6 flex justify-center w-full">
              <HeroCodeCard />
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FEATURES
      ═══════════════════════════════════════════════════════ */}
      <section className="border-b-2 border-[#111111] bg-white">
        <div className="mx-auto w-full max-w-[1600px] px-4 py-14 md:px-8 lg:px-12 md:py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="font-mono text-xs font-bold tracking-[0.15em] text-violet-600 uppercase">
                [ KENAPA DART DI HEXATECH? ]
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-[#111111]">
                Dibuat untuk Efisiensi & Kejelasan
              </h2>
            </div>
            <p className="font-mono text-xs sm:text-sm text-[#555555] max-w-md">
              Metode scaffolded learning memastikan setiap teori langsung dibuktikan dengan kode yang dapat dijalankan di terminal Anda.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Zap,
                num: "01",
                title: "FRICTIONLESS LEARNING",
                desc: "Langsung akses materi tanpa form pendaftaran atau verifikasi email. Waktu Anda berharga untuk belajar menulis kode, bukan administrasi akun.",
              },
              {
                icon: Code2,
                num: "02",
                title: "TEMPLATE KODE MANDIRI",
                desc: "Setiap contoh kode dilengkapi penanda nama berkas, fungsi main() lengkap, dan petunjuk eksekusi konsol agar tidak ada potongan kode ambigu.",
              },
              {
                icon: Layers,
                num: "03",
                title: "TUGAS 3 TINGKATAN",
                desc: "Di setiap akhir bab tersedia tugas bertingkat: Tingkat Dasar untuk fondasi sintaks, Terapan untuk logika nyata, dan Tantangan Kreatif untuk arsitektur.",
              },
            ].map((f) => {
              const IconComp = f.icon;
              return (
                <div
                  key={f.num}
                  className="group relative border-2 border-[#111111] bg-[#F4F4F0] p-6 md:p-8 shadow-[4px_4px_0_0_#111111] hover:shadow-[6px_6px_0_0_#111111] hover:-translate-y-1 transition-all"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-10 w-10 items-center justify-center border-2 border-[#111111] bg-white group-hover:bg-violet-600 transition-colors">
                      <IconComp className="w-5 h-5 text-[#111111] group-hover:text-white transition-colors" />
                    </div>
                    <span className="font-mono text-xs font-bold tracking-[0.15em] text-violet-600">
                      [{f.num}]
                    </span>
                  </div>
                  <h3 className="mb-3 text-base sm:text-lg font-black uppercase tracking-tight text-[#111111]">
                    {f.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-[#555555]">
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          ROADMAP / KURIKULUM
      ═══════════════════════════════════════════════════════ */}
      <section id="roadmap" className="border-b-2 border-[#111111] bg-[#F4F4F0]">
        <div className="mx-auto w-full max-w-[1600px] px-4 py-14 md:px-8 lg:px-12 md:py-20">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <span className="font-mono text-xs font-bold tracking-[0.15em] text-violet-600 uppercase">
              [ SILABUS KURIKULUM ]
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-5xl font-black uppercase leading-[0.95] tracking-tight text-[#111111]">
              Peta Jalan Pembelajaran
            </h2>
            <p className="mt-3 font-mono text-xs sm:text-sm tracking-normal text-[#555555]">
              6 MODUL KOMPREHENSIF DENGAN PERCABANGAN SUB-MATERI DAN RUBRIK PENILAIAN MANDIRI
            </p>
          </div>

          <div className="border-2 border-[#111111] bg-white shadow-[6px_6px_0_0_#111111]">
            {[
              {
                num: "01",
                slug: "apa-itu-dart",
                title: "MODUL 01: PENGENALAN & PERSIAPAN",
                desc: "Sejarah Dart di Google, kompilasi JIT vs AOT, instalasi SDK di Windows/macOS/Linux, dan anatomi fungsi main().",
                topics: ["Sejarah & Arsitektur", "Instalasi Multi-OS", "Hello World & Print"],
              },
              {
                num: "02",
                slug: "variabel-konstanta",
                title: "MODUL 02: FONDASI SINTAKSIS & TIPE DATA",
                desc: "Type inference var, tipe data primitif int/double/String/bool, final vs const, dan seluruh operator aritmatika.",
                topics: ["Variabel & Konstanta", "Tipe Data Dasar", "Operator Lengkap"],
              },
              {
                num: "03",
                slug: "percabangan",
                title: "MODUL 03: ALUR KONTROL & STRUKTUR DATA",
                desc: "Logika keputusan if-else, guard clause, switch pattern matching Dart 3, loop for/while, serta koleksi List, Set, dan Map.",
                topics: ["Percabangan If & Switch", "Perulangan Kontrol", "Koleksi List/Set/Map"],
              },
              {
                num: "04",
                slug: "fungsi",
                title: "MODUL 04: FUNGSI & PRINSIP NULL SAFETY",
                desc: "Deklarasi fungsi, arrow syntax, named parameters, higher-order closures, dan prinsip Sound Null Safety teruji.",
                topics: ["Deklarasi & Parameter", "Anonymous & Closures", "Sound Null Safety"],
              },
              {
                num: "05",
                slug: "class-object",
                title: "MODUL 05: OBJECT-ORIENTED PROGRAMMING",
                desc: "Konsep Class & Objek, enkapsulasi privat (_), getters/setters, pewarisan kelas, abstract class, mixins, dan enums.",
                topics: ["Class & Constructor", "Encapsulation & Private", "Inheritance & Mixins"],
              },
              {
                num: "06",
                slug: "future",
                title: "MODUL 06: ASYNCHRONOUS DART & STREAM",
                desc: "Arsitektur Dart Event Loop, Microtask Queue, Future lifecycle, sintaks modern async/await, dan reactive Stream.",
                topics: ["Event Loop & Future", "Async/Await & Error Handling", "Stream & Reactive"],
              },
            ].map((m, i) => (
              <Link
                key={m.num}
                href={`/learn/${m.slug}`}
                className={`group flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 md:p-6 transition-all hover:bg-[#111111] hover:text-white cursor-pointer ${
                  i < 5 ? "border-b-2 border-[#111111]" : ""
                }`}
              >
                <div className="flex items-start md:items-center gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border-2 border-[#111111] bg-[#F4F4F0] font-mono text-base font-black text-[#111111] group-hover:bg-violet-600 group-hover:border-violet-600 group-hover:text-white transition-all shadow-[2px_2px_0_0_#111111] group-hover:shadow-[2px_2px_0_0_#fff]">
                    {m.num}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black uppercase tracking-tight group-hover:text-white transition-colors">
                      {m.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#555555] group-hover:text-stone-300 transition-colors mt-0.5 line-clamp-2 max-w-3xl">
                      {m.desc}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end md:self-center font-mono text-xs font-bold text-violet-600 group-hover:text-violet-300">
                  <span className="hidden sm:inline">Buka Modul</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/learn/apa-itu-dart"
              className="inline-flex items-center gap-2 border-2 border-[#111111] bg-white px-8 py-3.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#111111] shadow-[4px_4px_0_0_#111111] hover:bg-[#111111] hover:text-white transition-all"
            >
              <span>Mulai dari Modul 01: Apa itu Dart?</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CTA BOTTOM
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1600px] px-4 py-16 text-center md:px-8 md:py-24">
          <div className="max-w-3xl mx-auto border-2 border-[#111111] bg-[#F4F4F0] p-8 md:p-14 shadow-[8px_8px_0_0_#111111]">
            <span className="inline-block border border-[#111111] bg-violet-600 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-white mb-4">
              MULAI SEKARANG JUGA
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase leading-[0.95] tracking-tight text-[#111111] mb-4">
              Siap Membangun Aplikasi Impianmu?
            </h2>
            <p className="mx-auto mb-8 max-w-lg font-mono text-xs sm:text-sm text-[#555555] leading-relaxed">
              Semua materi terbuka 100% gratis. Buka VS Code Anda, ikuti setiap bab modul, dan rasakan kepuasan belajar ngoding yang nyata.
            </p>
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 border-2 border-[#111111] bg-violet-600 px-8 py-4 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-[4px_4px_0_0_#111111] hover:bg-[#111111] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
            >
              <span>Mulai Belajar Tanpa Login</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
