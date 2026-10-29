import Link from "next/link";
import {
  BookOpen,
  Zap,
  Layers,
  Terminal,
  Cpu,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Heart,
  Code2,
  ExternalLink,
  Award,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F4F4F0] text-[#111111]">
      {/* ═══════════════════════════════════════════════════════
          HERO / INTRO
      ═══════════════════════════════════════════════════════ */}
      <section className="border-b-2 border-[#111111] bg-[#F4F4F0] relative overflow-hidden">
        <div className="mx-auto w-full max-w-[1600px] px-4 py-12 sm:py-16 md:py-20 md:px-8 lg:px-12">
          {/* Eyebrow Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="border-2 border-[#111111] bg-[#111111] px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-white">
              HEXAVERSE TECHNOLOGY
            </span>
            <span className="border-2 border-[#111111] bg-violet-600 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-white shadow-[2px_2px_0_0_#111111]">
              OPEN-SOURCE INITIATIVE
            </span>
          </div>

          {/* Main Title */}
          <h1 className="mb-6 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.92] tracking-tight text-[#111111] max-w-5xl">
            Membongkar Batasan
            <br />
            Belajar Pemrograman<span className="text-violet-600">.</span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl border-l-4 border-violet-600 pl-4 font-mono text-xs sm:text-sm md:text-base leading-relaxed text-[#333333] mb-10">
            Platform pembelajaran bahasa pemrograman Dart modern yang dirancang untuk efisiensi, kejelasan sintaksis, 
            dan kesiapan industri. 100% Terbuka, tanpa birokrasi pendaftaran, dan tanpa hambatan finansial.
          </p>

          {/* Highlights 4-Card Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              {
                label: "AKSES BEBAS",
                value: "100% GRATIS",
                sub: "Tanpa paywall atau akun berbayar",
              },
              {
                label: "FRICTIONLESS",
                value: "0 DETIK LOGIN",
                sub: "Buka halaman dan langsung coding",
              },
              {
                label: "KURIKULUM",
                value: "6 MODUL INTI",
                sub: "26 topik & 18+ tugas bertingkat",
              },
              {
                label: "STANDAR",
                value: "DART 3.4+",
                sub: "Sound null safety & pattern matching",
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="border-2 border-[#111111] bg-white p-4 sm:p-5 shadow-[4px_4px_0_0_#111111] transition-transform hover:-translate-y-1"
              >
                <div className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#666666]">
                  {stat.label}
                </div>
                <div className="mt-1 font-mono text-lg sm:text-xl md:text-2xl font-black text-[#111111]">
                  {stat.value}
                </div>
                <div className="mt-1 font-mono text-[10px] sm:text-[11px] text-[#555555]">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          MISSION & VISION (DUAL NEOBRUTALISM CARDS)
      ═══════════════════════════════════════════════════════ */}
      <section className="border-b-2 border-[#111111] bg-white">
        <div className="mx-auto w-full max-w-[1600px] px-4 py-14 sm:py-16 md:px-8 lg:px-12 md:py-20">
          <div className="mb-10">
            <span className="font-mono text-xs font-bold tracking-[0.15em] text-violet-600 uppercase">
              [ LANDASAN & FILOSOFI ]
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-[#111111]">
              Misi & Visi HexaTech
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Card 1: Misi */}
            <div className="border-2 border-[#111111] bg-[#F4F4F0] p-6 sm:p-8 shadow-[6px_6px_0_0_#111111] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-[#111111]">
                  <span className="border-2 border-[#111111] bg-[#111111] px-2.5 py-0.5 font-mono text-xs font-bold uppercase text-white">
                    MISI KAMI
                  </span>
                  <span className="font-mono text-xs font-bold text-violet-600">
                    [ TUJUAN NYATA ]
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black uppercase text-[#111111] mb-4">
                  Menyingkirkan Hambatan & Friksi Pembelajaran
                </h3>

                <p className="font-mono text-xs sm:text-sm text-[#444444] leading-relaxed mb-6">
                  Banyak calon developer gugur di tengah jalan bukan karena tidak mampu berpikir logis, 
                  melainkan akibat dokumentasi yang terfragmentasi, contoh kode yang tidak dapat dijalankan, 
                  atau keharusan membuat akun dan menghadapi dinding berbayar.
                </p>

                <div className="space-y-3 font-mono text-xs text-[#222222]">
                  <div className="flex items-start gap-2.5 bg-white p-3 border-2 border-[#111111]">
                    <CheckCircle2 className="w-4 h-4 text-violet-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Tanpa Paywall:</strong> Seluruh modul, contoh kode, dan soal latihan tersedia gratis selamanya.</span>
                  </div>
                  <div className="flex items-start gap-2.5 bg-white p-3 border-2 border-[#111111]">
                    <CheckCircle2 className="w-4 h-4 text-violet-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Tanpa Registrasi:</strong> Membaca artikel dan belajar tanpa perlu mengisi data pribadi atau verifikasi email.</span>
                  </div>
                  <div className="flex items-start gap-2.5 bg-white p-3 border-2 border-[#111111]">
                    <CheckCircle2 className="w-4 h-4 text-violet-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Kode Mandiri (Self-Contained):</strong> Setiap berkas kode dilengkapi fungsi main() dan petunjuk eksekusi terminal.</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#111111]/30 flex items-center justify-between font-mono text-[11px] text-[#555555]">
                <span>Fokus: Efisiensi Pembelajaran</span>
                <span className="font-bold text-violet-700">Akses Terbuka</span>
              </div>
            </div>

            {/* Card 2: Visi */}
            <div className="border-2 border-[#111111] bg-[#F4F4F0] p-6 sm:p-8 shadow-[6px_6px_0_0_#111111] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-[#111111]">
                  <span className="border-2 border-[#111111] bg-violet-600 px-2.5 py-0.5 font-mono text-xs font-bold uppercase text-white shadow-[2px_2px_0_0_#111111]">
                    VISI BESAR
                  </span>
                  <span className="font-mono text-xs font-bold text-[#111111]">
                    [ DAMPAK JANGKA PANJANG ]
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black uppercase text-[#111111] mb-4">
                  Mencetak Talenta Developer Berdaya Saing Global
                </h3>

                <p className="font-mono text-xs sm:text-sm text-[#444444] leading-relaxed mb-6">
                  Menjadikan LearnDartWithHexaTech sebagai titik tolak utama bagi generasi developer Indonesia 
                  untuk menguasai ekosistem Dart dan Flutter dengan standar kualitas software engineering yang bersih, 
                  teruji, dan siap masuk ke industri aplikasi skala enterprise.
                </p>

                <div className="space-y-3 font-mono text-xs text-[#222222]">
                  <div className="flex items-start gap-2.5 bg-white p-3 border-2 border-[#111111]">
                    <CheckCircle2 className="w-4 h-4 text-violet-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Pedagogi Scaffolded:</strong> Pembelajaran bertingkat dari fondasi sintaks, OOP modern, hingga pemrograman asinkron.</span>
                  </div>
                  <div className="flex items-start gap-2.5 bg-white p-3 border-2 border-[#111111]">
                    <CheckCircle2 className="w-4 h-4 text-violet-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Jembatan Flutter Handal:</strong> Menguasai logika inti sebelum membangun UI kompleks di framework Flutter.</span>
                  </div>
                  <div className="flex items-start gap-2.5 bg-white p-3 border-2 border-[#111111]">
                    <CheckCircle2 className="w-4 h-4 text-violet-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Kemandirian Problem-Solving:</strong> Tugas latihan dengan rubrik penilaian mandiri untuk mengasah nalar analitis.</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#111111]/30 flex items-center justify-between font-mono text-[11px] text-[#555555]">
                <span>Standar: Industri Software Global</span>
                <span className="font-bold text-violet-700">Dukungan Komunitas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CORE VALUES (6 NEOBRUTALISM CARDS)
      ═══════════════════════════════════════════════════════ */}
      <section className="border-b-2 border-[#111111] bg-[#F4F4F0]">
        <div className="mx-auto w-full max-w-[1600px] px-4 py-14 sm:py-16 md:px-8 lg:px-12 md:py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="font-mono text-xs font-bold tracking-[0.15em] text-violet-600 uppercase">
                [ PILAR PENGEMBANGAN ]
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-[#111111]">
                6 Nilai Inti Platform
              </h2>
            </div>
            <p className="font-mono text-xs sm:text-sm text-[#555555] max-w-md">
              Setiap baris kode, dokumentasi, dan materi di platform ini disusun berpegang teguh pada enam prinsip fundamental.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                icon: Zap,
                title: "FRICTIONLESS ACCESS",
                desc: "Masuk dan langsung belajar. Tidak ada cookie pelacak data pribadi, tanpa verifikasi nomor telepon, dan tanpa formulir bertele-tele.",
              },
              {
                num: "02",
                icon: Layers,
                title: "SCAFFOLDED LEARNING",
                desc: "Kurikulum dirancang bercabang dengan tahapan logis: Dasar Bahasa -> OOP -> Null Safety -> Asynchronous & Reactive Streams.",
              },
              {
                num: "03",
                icon: Terminal,
                title: "RUNNABLE-FIRST TEMPLATES",
                desc: "Contoh kode mandiri dan lengkap. Setiap file memiliki penanda jalur berkas dan fungsi main() yang dapat langsung dieksekusi di konsol.",
              },
              {
                num: "04",
                icon: Cpu,
                title: "DART 3.4+ MODERN STANDARDS",
                desc: "Materi mencakup fitur termutakhir: Pattern Matching, Records, Sealed Classes, dan Sound Null Safety yang menjadi standar modern.",
              },
              {
                num: "05",
                icon: Smartphone,
                title: "FLUTTER FOUNDATION",
                desc: "Fondasi logika pemrograman yang kokoh guna memastikan transisi ke framework Flutter berjalan lancar tanpa kebingungan sintaks.",
              },
              {
                num: "06",
                icon: Heart,
                title: "COMMUNITY FIRST",
                desc: "Didedikasikan sepenuh hati untuk memajukan talenta developer dan komunitas teknologi Indonesia tanpa pamrih komersial.",
              },
            ].map((v) => {
              const IconComp = v.icon;
              return (
                <div
                  key={v.num}
                  className="border-2 border-[#111111] bg-white p-6 shadow-[5px_5px_0_0_#111111] transition-transform hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-10 w-10 items-center justify-center border-2 border-[#111111] bg-violet-600 text-white shadow-[2px_2px_0_0_#111111]">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-sm font-black text-[#111111]">
                        {v.num}
                      </span>
                    </div>

                    <h3 className="text-lg font-black uppercase text-[#111111] mb-2 tracking-tight">
                      {v.title}
                    </h3>
                    <p className="font-mono text-xs text-[#555555] leading-relaxed">
                      {v.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-stone-200 flex items-center justify-between text-[10px] font-mono font-bold text-violet-700">
                    <span>HEXATECH PRINCIPLE</span>
                    <span className="uppercase">VALIDATED</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          QUALITY PROMISE (3 PILLARS)
      ═══════════════════════════════════════════════════════ */}
      <section className="border-b-2 border-[#111111] bg-white">
        <div className="mx-auto w-full max-w-[1600px] px-4 py-14 sm:py-16 md:px-8 lg:px-12 md:py-20">
          <div className="border-2 border-[#111111] bg-[#111111] p-6 sm:p-10 text-white shadow-[6px_6px_0_0_#7c3aed]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 mb-8 border-b border-stone-700">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-violet-400">
                  [ JAMINAN KUALITAS KONTEN ]
                </span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                  Standar Pembelajaran Tanpa Kompromi
                </h2>
              </div>
              <div className="flex items-center gap-2 border border-violet-500 bg-violet-950/60 px-3.5 py-1.5 font-mono text-xs text-violet-200">
                <ShieldCheck className="w-4 h-4 text-violet-400 flex-shrink-0" />
                <span>Terverifikasi Kurikulum 2026</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-stone-700 bg-[#1a1a1a] p-5">
                <div className="flex items-center gap-2 text-violet-400 font-mono text-xs font-bold uppercase mb-2">
                  <Code2 className="w-4 h-4" />
                  <span>01. Tanpa Snippet Ambigu</span>
                </div>
                <p className="font-mono text-xs text-stone-300 leading-relaxed">
                  Tidak ada kode potongan tanpa konteks. Setiap contoh dilengkapi nama berkas file, 
                  fungsi main(), serta perintah eksekusi terminal (<code>dart run ...</code>).
                </p>
              </div>

              <div className="border border-stone-700 bg-[#1a1a1a] p-5">
                <div className="flex items-center gap-2 text-violet-400 font-mono text-xs font-bold uppercase mb-2">
                  <Layers className="w-4 h-4" />
                  <span>02. Tugas Mandiri 3 Tingkatan</span>
                </div>
                <p className="font-mono text-xs text-stone-300 leading-relaxed">
                  Setiap modul diakhiri dengan tugas terstruktur: <strong>Tingkat Dasar</strong> untuk sintaks, 
                  <strong>Terapan</strong> untuk studi kasus nyata, dan <strong>Tantangan Kreatif</strong> untuk logika lanjutan.
                </p>
              </div>

              <div className="border border-stone-700 bg-[#1a1a1a] p-5">
                <div className="flex items-center gap-2 text-violet-400 font-mono text-xs font-bold uppercase mb-2">
                  <Award className="w-4 h-4" />
                  <span>03. Rubrik Penilaian Mandiri</span>
                </div>
                <p className="font-mono text-xs text-stone-300 leading-relaxed">
                  Tersedia tabel kriteria evaluasi mandiri sehingga pembelajar dapat mengukur tingkat pemahamannya secara objektif sebelum melanjutkan bab.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          AUTHORS & CREATORS (PROFESSIONAL OVERHAUL)
      ═══════════════════════════════════════════════════════ */}
      <section className="border-b-2 border-[#111111] bg-[#F4F4F0]">
        <div className="mx-auto w-full max-w-[1600px] px-4 py-14 sm:py-16 md:px-8 lg:px-12 md:py-20">
          <div className="mb-12">
            <span className="font-mono text-xs font-bold tracking-[0.15em] text-violet-600 uppercase">
              [ TIM DI BALIK LAYAR ]
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-[#111111]">
              Penulis & Pengembang Kurikulum
            </h2>
            <p className="font-mono text-xs sm:text-sm text-[#555555] max-w-xl mt-2">
              LearnDartWithHexaTech digagas dan dibangun oleh praktisi teknologi yang berdedikasi menciptakan materi edukasi berkualitas tinggi.
            </p>
          </div>

          <div className="space-y-12">
            {/* Author 1: Akmal Raditya Wijaya */}
            <div className="border-2 border-[#111111] bg-white p-6 sm:p-8 md:p-10 shadow-[6px_6px_0_0_#111111]">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                {/* Left: Avatar & Socials */}
                <div className="md:col-span-4 flex flex-col items-center md:items-start">
                  <div className="relative mb-5">
                    <div className="flex h-36 w-36 sm:h-44 sm:w-44 items-center justify-center border-2 border-[#111111] bg-violet-600 text-white shadow-[4px_4px_0_0_#111111]">
                      <span className="text-5xl sm:text-6xl font-black tracking-tight font-mono">
                        AR
                      </span>
                    </div>
                    <div className="absolute -bottom-2 -right-2 border-2 border-[#111111] bg-[#111111] px-2 py-0.5 text-[10px] font-mono font-bold text-white uppercase">
                      LEAD
                    </div>
                  </div>

                  {/* Social Buttons */}
                  <div className="flex items-center gap-2.5">
                    <a
                      href="https://github.com/akmalraditya"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub Akmal Raditya"
                      className="flex h-10 w-10 items-center justify-center border-2 border-[#111111] bg-[#111111] text-white shadow-[2px_2px_0_0_#111111] transition-all hover:bg-violet-600 hover:border-violet-600 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com/in/akmalraditya"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn Akmal Raditya"
                      className="flex h-10 w-10 items-center justify-center border-2 border-[#111111] bg-white text-[#111111] shadow-[2px_2px_0_0_#111111] transition-all hover:bg-violet-600 hover:text-white hover:border-violet-600 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Right: Bio & Experience */}
                <div className="md:col-span-8 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="border-2 border-[#111111] bg-violet-600 px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-white shadow-[1px_1px_0_0_#111111]">
                      LEAD CREATOR & AUTHOR
                    </span>
                    <span className="border border-[#111111] bg-stone-100 px-2 py-0.5 font-mono text-[10px] font-bold text-[#111111]">
                      SOFTWARE ENGINEER
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#111111] tracking-tight mb-4">
                    Akmal Raditya Wijaya
                  </h3>

                  <div className="space-y-3 font-mono text-xs sm:text-sm text-[#444444] leading-relaxed mb-6">
                    <p>
                      Halo! Saya Akmal — seorang Software Engineer dengan hasrat kuat untuk mendemokratisasi akses pengetahuan teknologi. 
                      Saya meyakini bahwa pembelajaran coding yang efektif tidak boleh dibebani teori yang kaku dan abstrak.
                    </p>
                    <p>
                      Sepanjang berkiprah di dunia rekayasa perangkat lunak dan membangun arsitektur aplikasi lintas platform berbasis Flutter, 
                      saya mendapati bahwa banyak pembelajar kehilangan arah karena materi yang tersebar tanpa benang merah. 
                      Platform ini dibangun untuk menutup jurang tersebut: menghadirkan kurikulum Dart yang terstruktur, padat, dan langsung dapat dieksekusi.
                    </p>
                  </div>

                  {/* Competency Pills */}
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Flutter Architecture",
                      "Dart 3.4+ Ecosystem",
                      "Neobrutalism Design System",
                      "System Engineering",
                    ].map((pill, pIdx) => (
                      <span
                        key={pIdx}
                        className="border border-[#111111] bg-[#F4F4F0] px-2.5 py-1 font-mono text-[11px] font-bold text-[#111111]"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Author 2: Muhammad Alya Nur Rohman */}
            <div className="border-2 border-[#111111] bg-white p-6 sm:p-8 md:p-10 shadow-[6px_6px_0_0_#111111]">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                {/* Left: Avatar & Socials */}
                <div className="md:col-span-4 flex flex-col items-center md:items-start">
                  <div className="relative mb-5">
                    <div className="flex h-36 w-36 sm:h-44 sm:w-44 items-center justify-center border-2 border-[#111111] bg-[#111111] text-white shadow-[4px_4px_0_0_#111111]">
                      <span className="text-5xl sm:text-6xl font-black tracking-tight font-mono">
                        MA
                      </span>
                    </div>
                    <div className="absolute -bottom-2 -right-2 border-2 border-[#111111] bg-violet-600 px-2 py-0.5 text-[10px] font-mono font-bold text-white uppercase">
                      WRITER
                    </div>
                  </div>

                  {/* Social Buttons */}
                  <div className="flex items-center gap-2.5">
                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub Muhammad Alya"
                      className="flex h-10 w-10 items-center justify-center border-2 border-[#111111] bg-[#111111] text-white shadow-[2px_2px_0_0_#111111] transition-all hover:bg-violet-600 hover:border-violet-600 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn Muhammad Alya"
                      className="flex h-10 w-10 items-center justify-center border-2 border-[#111111] bg-white text-[#111111] shadow-[2px_2px_0_0_#111111] transition-all hover:bg-violet-600 hover:text-white hover:border-violet-600 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Right: Bio & Experience */}
                <div className="md:col-span-8 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="border-2 border-[#111111] bg-[#111111] px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-white shadow-[1px_1px_0_0_#111111]">
                      CURRICULUM WRITER
                    </span>
                    <span className="border border-[#111111] bg-stone-100 px-2 py-0.5 font-mono text-[10px] font-bold text-[#111111]">
                      MATERIAL CONTRIBUTOR
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#111111] tracking-tight mb-4">
                    Muhammad Alya Nur Rohman
                  </h3>

                  <div className="space-y-3 font-mono text-xs sm:text-sm text-[#444444] leading-relaxed mb-6">
                    <p>
                      Halo! Saya Muhammad Alya Nur Rohman — pengembang konten pembelajaran dalam proyek{" "}
                      <strong>LearnDartWithHexaTech</strong>. Saya berfokus pada penyusunan silabus terstruktur 
                      dari pemahaman logika dasar, manipulasi tipe data, struktur koleksi, hingga paradigma Object-Oriented Programming (OOP).
                    </p>
                    <p>
                      Menurut saya, menguasai coding bukan tentang menghafal baris sintaks, melainkan membiasakan 
                      intuisi komputasional untuk memecahkan persoalan dunia nyata. Setiap materi latihan kami desain 
                      agar pembelajar dapat merasakan tantangan praktis yang relevan.
                    </p>
                  </div>

                  {/* Competency Pills */}
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Pedagogi Kurikulum",
                      "Object-Oriented Programming",
                      "Struktur Data Dart",
                      "Problem Solving",
                    ].map((pill, pIdx) => (
                      <span
                        key={pIdx}
                        className="border border-[#111111] bg-[#F4F4F0] px-2.5 py-1 font-mono text-[11px] font-bold text-[#111111]"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Author 3: Nadia Saphira */}
            <div className="border-2 border-[#111111] bg-white p-6 sm:p-8 md:p-10 shadow-[6px_6px_0_0_#111111]">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                {/* Left: Avatar & Socials */}
                <div className="md:col-span-4 flex flex-col items-center md:items-start">
                  <div className="relative mb-5">
                    <div className="flex h-36 w-36 sm:h-44 sm:w-44 items-center justify-center border-2 border-[#111111] bg-violet-600 text-white shadow-[4px_4px_0_0_#111111]">
                      <span className="text-5xl sm:text-6xl font-black tracking-tight font-mono">
                        NS
                      </span>
                    </div>
                    <div className="absolute -bottom-2 -right-2 border-2 border-[#111111] bg-[#111111] px-2 py-0.5 text-[10px] font-mono font-bold text-white uppercase">
                      DESIGN
                    </div>
                  </div>

                  {/* Social Buttons */}
                  <div className="flex items-center gap-2.5">
                    <a
                      href="https://github.com/#"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub Nadia Saphira"
                      className="flex h-10 w-10 items-center justify-center border-2 border-[#111111] bg-[#111111] text-white shadow-[2px_2px_0_0_#111111] transition-all hover:bg-violet-600 hover:border-violet-600 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com/in/#"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn Nadia Saphira"
                      className="flex h-10 w-10 items-center justify-center border-2 border-[#111111] bg-white text-[#111111] shadow-[2px_2px_0_0_#111111] transition-all hover:bg-violet-600 hover:text-white hover:border-violet-600 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Right: Bio & Experience */}
                <div className="md:col-span-8 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="border-2 border-[#111111] bg-violet-600 px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-white shadow-[1px_1px_0_0_#111111]">
                      UI/UX DESIGNER
                    </span>
                    <span className="border border-[#111111] bg-stone-100 px-2 py-0.5 font-mono text-[10px] font-bold text-[#111111]">
                      VISUAL RESEARCHER
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#111111] tracking-tight mb-4">
                    Nadia Saphira
                  </h3>

                  <div className="space-y-3 font-mono text-xs sm:text-sm text-[#444444] leading-relaxed mb-6">
                    <p>
                      Halo! Saya Nadia – desainer antarmuka yang merancang pengalaman visual untuk LearnDartWithHexaTech. 
                      Saya percaya bahwa antarmuka belajar harus interaktif dan tidak monoton.
                    </p>
                    <p>
                      Saya berfokus pada penerapan sistem desain neobrutalism dalam platform ini. Tujuan saya adalah 
                      memastikan UI tidak hanya unik secara estetika, tetapi juga memiliki hierarki informasi yang jelas 
                      agar pelajar bisa fokus pada materi coding tanpa distraksi.
                    </p>
                  </div>

                  {/* Competency Pills */}
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Neobrutalism UI",
                      "User Experience",
                      "Wireframing",
                      "Accessibility",
                    ].map((pill, pIdx) => (
                      <span
                        key={pIdx}
                        className="border border-[#111111] bg-[#F4F4F0] px-2.5 py-1 font-mono text-[11px] font-bold text-[#111111]"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Author 4: Dimas Pratama */}
            <div className="border-2 border-[#111111] bg-white p-6 sm:p-8 md:p-10 shadow-[6px_6px_0_0_#111111]">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                {/* Left: Avatar & Socials */}
                <div className="md:col-span-4 flex flex-col items-center md:items-start">
                  <div className="relative mb-5">
                    <div className="flex h-36 w-36 sm:h-44 sm:w-44 items-center justify-center border-2 border-[#111111] bg-[#111111] text-white shadow-[4px_4px_0_0_#111111]">
                      <span className="text-5xl sm:text-6xl font-black tracking-tight font-mono">
                        DP
                      </span>
                    </div>
                    <div className="absolute -bottom-2 -right-2 border-2 border-[#111111] bg-violet-600 px-2 py-0.5 text-[10px] font-mono font-bold text-white uppercase">
                      QA
                    </div>
                  </div>

                  {/* Social Buttons */}
                  <div className="flex items-center gap-2.5">
                    <a
                      href="https://github.com/#"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub Dimas Pratama"
                      className="flex h-10 w-10 items-center justify-center border-2 border-[#111111] bg-[#111111] text-white shadow-[2px_2px_0_0_#111111] transition-all hover:bg-violet-600 hover:border-violet-600 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com/in/#"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn Dimas Pratama"
                      className="flex h-10 w-10 items-center justify-center border-2 border-[#111111] bg-white text-[#111111] shadow-[2px_2px_0_0_#111111] transition-all hover:bg-violet-600 hover:text-white hover:border-violet-600 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Right: Bio & Experience */}
                <div className="md:col-span-8 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="border-2 border-[#111111] bg-[#111111] px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-white shadow-[1px_1px_0_0_#111111]">
                      QUALITY ASSURANCE
                    </span>
                    <span className="border border-[#111111] bg-stone-100 px-2 py-0.5 font-mono text-[10px] font-bold text-[#111111]">
                      CODE REVIEWER
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#111111] tracking-tight mb-4">
                    Dimas Pratama
                  </h3>

                  <div className="space-y-3 font-mono text-xs sm:text-sm text-[#444444] leading-relaxed mb-6">
                    <p>
                      Halo! Saya Dimas – penguji perangkat lunak yang memastikan seluruh materi latihan dan studi kasus di platform ini berjalan tanpa celah.
                    </p>
                    <p>
                      Dalam belajar pemrograman, satu bug kecil atau error sintaks bisa membuat pemula merasa frustrasi. Tugas utama saya adalah 
                      menguji setiap snippet kode Dart yang disajikan agar selalu mematuhi standar clean code dan best practices industri.
                    </p>
                  </div>

                  {/* Competency Pills */}
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Dart Linter",
                      "Clean Code",
                      "Unit Testing",
                      "Debugging",
                    ].map((pill, pIdx) => (
                      <span
                        key={pIdx}
                        className="border border-[#111111] bg-[#F4F4F0] px-2.5 py-1 font-mono text-[11px] font-bold text-[#111111]"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Author 5: Kevin Santoso */}
            <div className="border-2 border-[#111111] bg-white p-6 sm:p-8 md:p-10 shadow-[6px_6px_0_0_#111111]">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                {/* Left: Avatar & Socials */}
                <div className="md:col-span-4 flex flex-col items-center md:items-start">
                  <div className="relative mb-5">
                    <div className="flex h-36 w-36 sm:h-44 sm:w-44 items-center justify-center border-2 border-[#111111] bg-violet-600 text-white shadow-[4px_4px_0_0_#111111]">
                      <span className="text-5xl sm:text-6xl font-black tracking-tight font-mono">
                        KS
                      </span>
                    </div>
                    <div className="absolute -bottom-2 -right-2 border-2 border-[#111111] bg-[#111111] px-2 py-0.5 text-[10px] font-mono font-bold text-white uppercase">
                      COMMUNITY
                    </div>
                  </div>

                  {/* Social Buttons */}
                  <div className="flex items-center gap-2.5">
                    <a
                      href="https://github.com/#"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub Kevin Santoso"
                      className="flex h-10 w-10 items-center justify-center border-2 border-[#111111] bg-[#111111] text-white shadow-[2px_2px_0_0_#111111] transition-all hover:bg-violet-600 hover:border-violet-600 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com/in/#"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn Kevin Santoso"
                      className="flex h-10 w-10 items-center justify-center border-2 border-[#111111] bg-white text-[#111111] shadow-[2px_2px_0_0_#111111] transition-all hover:bg-violet-600 hover:text-white hover:border-violet-600 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Right: Bio & Experience */}
                <div className="md:col-span-8 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="border-2 border-[#111111] bg-violet-600 px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-white shadow-[1px_1px_0_0_#111111]">
                      TECHNICAL WRITER
                    </span>
                    <span className="border border-[#111111] bg-stone-100 px-2 py-0.5 font-mono text-[10px] font-bold text-[#111111]">
                      COMMUNITY SUPPORT
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#111111] tracking-tight mb-4">
                    Kevin Santoso
                  </h3>

                  <div className="space-y-3 font-mono text-xs sm:text-sm text-[#444444] leading-relaxed mb-6">
                    <p>
                      Halo! Saya Kevin – penulis teknis yang bertugas menjembatani konsep arsitektur perangkat lunak yang rumit ke dalam bahasa manusia yang mudah dicerna.
                    </p>
                    <p>
                      Saya banyak berkontribusi dalam menyusun dokumentasi tambahan dan glosarium teknis di LearnDartWithHexaTech. 
                      Pendekatan penulisan saya dirancang agar setiap pelajar merasa sedang didampingi oleh mentor pribadi secara langsung.
                    </p>
                  </div>

                  {/* Competency Pills */}
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Technical Writing",
                      "Documentation",
                      "Copywriting",
                      "Developer Relations",
                    ].map((pill, pIdx) => (
                      <span
                        key={pIdx}
                        className="border border-[#111111] bg-[#F4F4F0] px-2.5 py-1 font-mono text-[11px] font-bold text-[#111111]"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TECHNOLOGY STACK BEHIND THE PLATFORM
      ═══════════════════════════════════════════════════════ */}
      <section className="border-b-2 border-[#111111] bg-white">
        <div className="mx-auto w-full max-w-[1600px] px-4 py-14 sm:py-16 md:px-8 lg:px-12 md:py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="font-mono text-xs font-bold tracking-[0.15em] text-violet-600 uppercase">
                [ SPESIFIKASI TEKNOLOGI ]
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-[#111111]">
                Fondasi Rekayasa Platform
              </h2>
            </div>
            <p className="font-mono text-xs sm:text-sm text-[#555555] max-w-md">
              LearnDartWithHexaTech dibangun menggunakan teknologi web modern terkini demi kecepatan akses dan keandalan tinggi.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                tech: "NEXT.JS 16.4.3",
                desc: "Partial Prerendering (PPR) & Turbopack untuk rendering instan",
              },
              {
                tech: "REACT 19",
                desc: "Server components mutakhir dengan performa bebas beban",
              },
              {
                tech: "TAILWIND CSS V4",
                desc: "Styling Neobrutalisme ultra-ringan tanpa CSS bundle berlebih",
              },
              {
                tech: "CLIENT STORAGE",
                desc: "Pelacakan progres materi otomatis tersimpan aman di browser",
              },
            ].map((t, idx) => (
              <div
                key={idx}
                className="border-2 border-[#111111] bg-[#F4F4F0] p-4 sm:p-5 shadow-[3px_3px_0_0_#111111]"
              >
                <div className="font-mono text-xs font-bold text-violet-600 mb-1">
                  CORE TECH 0{idx + 1}
                </div>
                <div className="font-mono text-sm sm:text-base font-black text-[#111111] mb-2 uppercase">
                  {t.tech}
                </div>
                <p className="font-mono text-[11px] text-[#555555] leading-relaxed">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CALL TO ACTION (CTA)
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-[#111111] text-white">
        <div className="mx-auto w-full max-w-[1600px] px-4 py-16 sm:py-20 md:px-8 lg:px-12 md:py-24 text-center">
          <div className="inline-flex items-center gap-2 border border-violet-500 bg-violet-950/80 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-violet-300 mb-6 shadow-[2px_2px_0_0_#7c3aed]">
            <BookOpen className="w-3.5 h-3.5 text-violet-400" />
            <span>SIAP MENJADI DEVELOPER HANDAL?</span>
          </div>

          <h2 className="mb-4 text-3xl sm:text-5xl md:text-6xl font-black uppercase leading-[0.95] tracking-tight text-white max-w-4xl mx-auto">
            Mulai Belajar Sekarang<span className="text-violet-500">.</span>
            <br />
            Tanpa Biaya<span className="text-violet-500">.</span> Tanpa Login<span className="text-violet-500">.</span>
          </h2>

          <p className="mx-auto mb-10 max-w-xl font-mono text-xs sm:text-sm text-stone-300 leading-relaxed">
            Akses seluruh 6 modul kurikulum inti, pelajari contoh kode mandiri, dan selesaikan tantangan berjenjang hari ini juga.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/learn"
              className="group inline-flex items-center justify-center gap-2 border-2 border-violet-500 bg-violet-600 px-8 py-4 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-[4px_4px_0_0_#000000] transition-all hover:bg-violet-500 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
            >
              <span>Buka Materi Pertama (Modul 01)</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 border-2 border-stone-600 bg-[#1c1c1c] px-8 py-4 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-[4px_4px_0_0_#000000] transition-all hover:bg-white hover:text-[#111111] hover:border-white hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
            >
              <span>Kembali ke Beranda</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
