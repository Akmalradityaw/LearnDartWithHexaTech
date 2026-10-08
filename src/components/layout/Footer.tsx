export default function Footer() {
  return (
    <footer className="border-t-2 border-[#111111] bg-[#F4F4F0] py-8 text-[#111111]">
      <div className="w-full max-w-[1600px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs font-bold uppercase tracking-[0.1em]">
        <p>
          © 2026 HEXAVERSE TECHNOLOGY
        </p>
        <p className="flex items-center gap-1">
          DIBUAT DENGAN <span className="text-violet-600" aria-hidden="true">♥</span> OLEH{" "}
          <a
            href="https://github.com/akmalraditya"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b-2 border-transparent hover:border-[#111111] transition-colors"
          >
            AKMAL RADITYA WIJAYA
          </a>
        </p>
      </div>
    </footer>
  );
}