import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F4F4F0] text-[#111111]">
      {/* ═══════════════════════════════════════════════════════
          HEADER
      ═══════════════════════════════════════════════════════ */}
      <section className="border-b-2 border-[#111111]">
        <div className="mx-auto w-full max-w-[1600px] px-4 py-16 md:px-8 md:py-24">
          <p className="mb-4 font-mono text-xs tracking-[0.15em] text-violet-600">
            [ TENTANG KAMI ]
          </p>
          <h1 className="mb-8 text-[clamp(3rem,10vw,8rem)] font-black uppercase leading-[0.85] tracking-[-0.04em]">
            Membangun
            <br />
            Masa Depan
            <br />
            <span className="text-violet-600">Belajar.</span>
          </h1>
          <p className="max-w-xl border-l-4 border-violet-600 pl-4 font-mono text-sm leading-relaxed tracking-[0.05em] md:text-base">
            HEXAVERSE TECHNOLOGY — INOVASI DIGITAL UNTUK EDUKASI TEKNOLOGI MODERN. AKSES TERBUKA. TANPA HAMBATAN.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          MISSION
      ═══════════════════════════════════════════════════════ */}
      <section className="border-b border-[#111111]">
        <div className="mx-auto grid w-full max-w-[1600px] gap-0 px-4 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div className="border-b border-[#111111] pb-12 md:border-b-0 md:border-r md:pb-0 md:pr-12">
            <h2 className="mb-6 font-mono text-xs tracking-[0.15em] text-violet-600">
              [ MISI ]
            </h2>
            <p className="mb-4 text-lg leading-relaxed md:text-xl">
              Belajar pemrograman sering diwarnai dokumentasi kaku, antarmuka membosankan, atau keharusan membuat akun hanya untuk membaca artikel.
            </p>
            <p className="text-lg leading-relaxed md:text-xl">
              Platform <strong>LEARNDARTWITHEXATECH</strong> adalah inisiatif untuk memberikan kembali kepada komunitas developer — dengan mendobrak semua batasan tersebut.
            </p>
          </div>
          <div className="pt-12 md:pl-12 md:pt-0">
            <h2 className="mb-6 font-mono text-xs tracking-[0.15em] text-violet-600">
              [ VISI ]
            </h2>
            <p className="mb-8 text-lg leading-relaxed md:text-xl">
              Menjadi katalis pendorong yang memberdayakan generasi baru developer Indonesia untuk menciptakan produk digital kelas dunia melalui edukasi teknologi modern yang tak terbatas.
            </p>
            <div className="grid grid-cols-3 gap-0 border border-[#111111]">
              {[
                { value: "2026", label: "DIDIRIKAN" },
                { value: "100%", label: "GRATIS" },
                { value: "∞", label: "AKSES" },
              ].map((s) => (
                <div key={s.label} className="border-r border-[#111111] p-4 text-center last:border-r-0">
                  <div className="text-2xl font-black text-violet-600 md:text-3xl">{s.value}</div>
                  <div className="mt-1 font-mono text-[10px] tracking-[0.1em]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CORE VALUES
      ═══════════════════════════════════════════════════════ */}
      <section className="border-b border-[#111111]">
        <div className="mx-auto w-full max-w-[1600px] px-4 py-16 md:px-8 md:py-24">
          <h2 className="mb-10 font-mono text-xs tracking-[0.15em] text-violet-600">
            [ NILAI INTI PLATFORM ]
          </h2>
          <div className="grid gap-0 border border-[#111111] sm:grid-cols-2">
            {[
              { num: "01", title: "FRICTIONLESS", desc: "Belajar seketika tanpa perlu mengisi form pendaftaran atau birokrasi login." },
              { num: "02", title: "SISTEMATIS", desc: "Kurikulum yang disusun cermat dari konsep fundamental hingga asinkron tingkat lanjut." },
              { num: "03", title: "OPEN & GRATIS", desc: "Seluruh ilmu di platform ini didedikasikan dan tersedia secara cuma-cuma selamanya." },
              { num: "04", title: "KOMUNITAS FIRST", desc: "Dibangun atas dasar dedikasi untuk memperkuat talenta digital di ekosistem kita." },
            ].map((v, i) => (
              <div
                key={v.num}
                className={`border-[#111111] p-6 md:p-8 ${i % 2 === 0 ? "border-b sm:border-r sm:border-b-0" : "border-b sm:border-b-0"} ${i < 2 ? "border-b" : ""}`}
              >
                <div className="mb-4 font-mono text-xs tracking-[0.15em] text-violet-600">
                  {v.num}
                </div>
                <h3 className="mb-2 text-xl font-black uppercase tracking-tight">{v.title}</h3>
                <p className="text-sm leading-relaxed text-[#555555]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          AUTHOR
      ═══════════════════════════════════════════════════════ */}
      <section className="border-b border-[#111111]">
        <div className="mx-auto w-full max-w-[1600px] px-4 py-16 md:px-8 md:py-24">
          <h2 className="mb-10 font-mono text-xs tracking-[0.15em] text-violet-600">
            [ PENULIS & PEMBUAT ]
          </h2>

          <div className="space-y-16">
            {/* Author 1 - Akmal Raditya Wijaya */}
            <div className="grid gap-10 md:grid-cols-[auto_1fr] md:gap-16">
              {/* Kolom Kiri: Avatar + Logo Sosial */}
              <div className="flex flex-col items-center gap-4 md:items-start">
                <div className="flex h-40 w-40 items-center justify-center border-2 border-[#111111] bg-violet-600 md:h-48 md:w-48">
                  <span className="text-6xl font-black text-white md:text-7xl">AR</span>
                </div>
                <div className="flex flex-row gap-3">
                  <a
                    href="https://github.com/akmalraditya"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub Profile"
                    className="flex h-12 w-12 items-center justify-center border-2 border-violet-600 bg-violet-600 text-white transition-colors hover:bg-white hover:text-violet-600"
                  >
                    {/* GitHub Logo */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/akmalraditya"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn Profile"
                    className="flex h-12 w-12 items-center justify-center border-2 border-violet-600 bg-violet-600 text-white transition-colors hover:bg-white hover:text-violet-600"
                  >
                    {/* LinkedIn Logo */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Kolom Kanan: Deskripsi */}
              <div className="flex flex-col justify-center">
                <h3 className="mb-2 text-[clamp(2rem,5vw,4rem)] font-black uppercase leading-[0.9] tracking-[-0.03em]">
                  Akmal Raditya Wijaya
                </h3>
                <p className="mb-8 font-mono text-xs tracking-[0.15em] text-violet-600">
                  LEAD CREATOR, AUTHOR & SOFTWARE ENGINEER
                </p>

                <div className="mb-10 w-full space-y-4 text-base leading-relaxed md:text-lg">
                  <p>
                    Halo! Saya Akmal — seorang Software Engineer dengan semangat besar
                    untuk menyederhanakan konsep pemrograman yang kompleks menjadi
                    sesuatu yang ringan, mudah dicerna, dan bisa langsung
                    dipraktikkan.
                  </p>
                  <p>
                    Selama berkarir di industri software development, saya sering
                    memperhatikan bahwa pemula kerap kesulitan menemukan referensi
                    belajar Dart yang berbobot namun tidak kaku. Berbekal pengalaman
                    membangun berbagai produk digital skala menengah hingga besar
                    dengan Flutter, saya merintis{" "}
                    <strong>LEARNDARTWITHEXATECH</strong> sebagai wujud dedikasi
                    kepada komunitas.
                  </p>
                  <p>
                    Cita-cita saya sederhana: membantu Anda menyingkat waktu belajar
                    (learning curve), sehingga tidak lagi terpaku pada teori semata,
                    melainkan bisa segera mewujudkan ide-ide brilian menjadi aplikasi
                    lintas platform yang memukau.
                  </p>
                </div>
              </div>
            </div>

            {/* Author 2 - Muhammad Alya Nur Rohman */}
            <div className="grid gap-10 md:grid-cols-[auto_1fr] md:gap-16">
              {/* Kolom Kiri: Avatar + Logo Sosial */}
              <div className="flex flex-col items-center gap-4 md:items-start">
                <div className="flex h-40 w-40 items-center justify-center border-2 border-[#111111] bg-[#111111] md:h-48 md:w-48">
                  <span className="text-6xl font-black text-white md:text-7xl">
                    MA
                  </span>
                </div>
                <div className="flex flex-row gap-3">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub Profile"
                    className="flex h-12 w-12 items-center justify-center border-2 border-violet-600 bg-violet-600 text-white transition-colors hover:bg-white hover:text-violet-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn Profile"
                    className="flex h-12 w-12 items-center justify-center border-2 border-violet-600 bg-violet-600 text-white transition-colors hover:bg-white hover:text-violet-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Kolom Kanan: Deskripsi */}
              <div className="flex flex-col justify-center">
                <h3 className="mb-2 text-[clamp(2rem,5vw,4rem)] font-black uppercase leading-[0.9] tracking-[-0.03em]">
                  Muhammad Alya Nur Rohman
                </h3>
                <p className="mb-8 font-mono text-xs tracking-[0.15em] text-violet-600">
                  CONTENT WRITER & MATERIAL CONTRIBUTOR
                </p>

                <div className="mb-10 w-full space-y-4 text-base leading-relaxed md:text-lg">
                  <p>
                    Halo! Saya Muhammad Alya Nur Rohman — pengisi materi dalam project{" "}
                    <strong>LEARNDARTWITHEXATECH</strong>. Saya memiliki ketertarikan
                    besar pada dunia pengembangan aplikasi mobile, khususnya
                    menggunakan Flutter dan Dart.
                  </p>
                  <p>
                    Dalam project ini, saya berfokus pada penyusunan materi
                    pembelajaran yang sistematis, mulai dari konsep dasar Dart,
                    struktur data, pemrograman berorientasi objek, hingga penerapan
                    Flutter untuk membangun aplikasi lintas platform.
                  </p>
                  <p>
                    Saya percaya bahwa belajar coding bukan hanya soal menghafal
                    sintaks, tetapi tentang memahami logika dan mampu
                    mengaplikasikannya dalam proyek nyata. Semoga materi yang disusun
                    dapat membantu teman-teman developer pemula untuk berkembang
                    lebih cepat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════════ */}
      <section>
        <div className="mx-auto w-full max-w-[1600px] px-4 py-16 text-center md:px-8 md:py-24">
          <p className="mb-4 font-mono text-xs tracking-[0.15em] text-violet-600">
            [ SIAP MULAI? ]
          </p>
          <h2 className="mb-4 text-[clamp(2rem,6vw,5rem)] font-black uppercase leading-[0.9] tracking-[-0.03em]">
            Tanpa Login.
            <br />
            Tanpa Biaya.
          </h2>
          <p className="mx-auto mb-10 max-w-md font-mono text-sm tracking-[0.05em] text-[#555555]">
            LANGSUNG BUKA MATERI PERTAMA DAN MULAI BELAJAR DART HARI INI.
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
