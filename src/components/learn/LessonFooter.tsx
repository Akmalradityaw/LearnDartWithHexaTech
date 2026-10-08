'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { NavItem } from '@/data/navigation';

interface LessonFooterProps {
  slug: string;
  prev: NavItem | null;
  next: NavItem | null;
}

export default function LessonFooter({ slug, prev, next }: LessonFooterProps) {
  const [isCompleted, setIsCompleted] = useState(() => {
    if (typeof window === 'undefined') return false;
    try {
      const saved = localStorage.getItem('hexatech_dart_progress');
      if (saved) return !!JSON.parse(saved)[slug];
    } catch {
      // ignore
    }
    return false;
  });

  const toggleComplete = () => {
    const saved = localStorage.getItem('hexatech_dart_progress');
    let parsed: Record<string, boolean> = {};
    if (saved) {
      try {
        parsed = JSON.parse(saved);
      } catch {
        // ignore
      }
    }
    
    parsed[slug] = !isCompleted;
    localStorage.setItem('hexatech_dart_progress', JSON.stringify(parsed));
    setIsCompleted(!isCompleted);
    
    // Dispatch custom event to update sidebar
    window.dispatchEvent(new Event('hexatech-progress-updated'));
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-center">
        <button
          onClick={toggleComplete}
          className={`flex items-center gap-2 px-8 py-4 border-2 border-[#111111] font-mono text-xs font-bold uppercase tracking-[0.1em] transition-colors ${
            isCompleted 
              ? 'bg-violet-600 text-white hover:bg-[#111111] hover:text-white' 
              : 'bg-[#111111] text-white hover:bg-white hover:text-[#111111]'
          }`}
        >
          <CheckCircle2 className={`w-5 h-5`} />
          {isCompleted ? 'SELESAI DIPELAJARI' : 'TANDAI SELESAI'}
        </button>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
        {prev ? (
          <Link
            href={`/learn/${prev.slug}`}
            className="group flex items-center gap-4 px-6 py-5 border-2 border-[#111111] bg-white hover:bg-[#111111] hover:text-white transition-colors w-full sm:w-[48%]"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <div className="flex flex-col text-left">
              <span className="font-mono text-[10px] tracking-[0.15em] mb-1">SEBELUMNYA</span>
              <span className="font-black text-sm uppercase tracking-tight">{prev.title}</span>
            </div>
          </Link>
        ) : <div className="w-full sm:w-[48%]"></div>}

        {next ? (
          <Link
            href={`/learn/${next.slug}`}
            className="group flex items-center justify-end gap-4 px-6 py-5 border-2 border-[#111111] bg-white hover:bg-[#111111] hover:text-white transition-colors w-full sm:w-[48%] text-right"
          >
            <div className="flex flex-col text-right">
              <span className="font-mono text-[10px] tracking-[0.15em] mb-1">SELANJUTNYA</span>
              <span className="font-black text-sm uppercase tracking-tight">{next.title}</span>
            </div>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        ) : <div className="w-full sm:w-[48%]"></div>}
      </div>
    </div>
  );
}
