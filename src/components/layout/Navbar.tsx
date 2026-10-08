import Link from 'next/link';
import { BookOpen } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-[#111111] bg-[#F4F4F0] text-[#111111]">
      <div className="w-full px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center border-2 border-[#111111] bg-[#111111] transition-colors group-hover:bg-violet-600 group-hover:border-violet-600">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <span className="font-black text-lg md:text-xl uppercase tracking-tighter text-[#111111]">
            LearnDart<span className="text-violet-600">WithHexaTech</span>
          </span>
        </Link>

        <nav className="flex items-center gap-6 md:gap-8">
          <Link 
            href="/" 
            className="font-mono text-xs font-bold uppercase tracking-[0.1em] transition-colors hover:text-violet-600"
          >
            Beranda
          </Link>
          <Link 
            href="/learn" 
            className="font-mono text-xs font-bold uppercase tracking-[0.1em] transition-colors hover:text-violet-600"
          >
            Mulai Belajar
          </Link>
          <Link 
            href="/about" 
            className="font-mono text-xs font-bold uppercase tracking-[0.1em] transition-colors hover:text-violet-600"
          >
            Tentang
          </Link>
        </nav>
      </div>
    </header>
  );
}