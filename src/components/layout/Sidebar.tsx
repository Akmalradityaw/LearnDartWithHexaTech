'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation } from '@/data/navigation';
import { CheckCircle2, Circle } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Sidebar() {
  const pathname = usePathname();
  const [completedSlugs, setCompletedSlugs] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const loadProgress = () => {
      const saved = localStorage.getItem('hexatech_dart_progress');
      if (saved) {
        try {
          setCompletedSlugs(JSON.parse(saved));
        } catch {
          console.error('Failed to parse progress');
        }
      }
    };

    loadProgress();
    window.addEventListener('hexatech-progress-updated', loadProgress);
    return () =>
      window.removeEventListener('hexatech-progress-updated', loadProgress);
  }, []);

  // Hitung total progress
  const totalItems = navigation.reduce((acc, s) => acc + s.items.length, 0);
  const completedCount = Object.values(completedSlugs).filter(Boolean).length;
  const progressPercent = totalItems ? Math.round((completedCount / totalItems) * 100) : 0;

  return (
    <aside
      className="
        w-full md:w-72 md:flex-shrink-0
        md:h-[calc(100vh-4rem)] md:sticky md:top-16
        overflow-y-auto
        border-b-2 md:border-b-0 md:border-r-2 border-[#111111]
        bg-[#F4F4F0] text-[#111111]
        pb-20 p-5
        [scrollbar-width:none]
      "
    >
      {/* ─── Progress Header ─── */}
      <div className="mb-8 border-2 border-[#111111] bg-white p-4 shadow-[4px_4px_0_0_#111111]">
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-[#111111]">
            PROGRESS
          </span>
          <span className="font-mono text-xs font-bold text-violet-600">
            {progressPercent}%
          </span>
        </div>
        <div className="h-3 w-full border-2 border-[#111111] bg-white">
          <div
            className="h-full bg-violet-600 transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <p className="mt-3 font-mono text-[10px] tracking-[0.05em] text-[#555555]">
          {completedCount} DARI {totalItems} MATERI SELESAI
        </p>
      </div>

      {/* ─── Navigation ─── */}
      <nav className="space-y-8">
        {navigation.map((section, idx) => {
          const sectionCompleted = section.items.filter(
            (i) => completedSlugs[i.slug]
          ).length;

          return (
            <div key={idx}>
              {/* Section header */}
              <div className="mb-3 flex items-center justify-between border-b-2 border-[#111111] pb-1">
                <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-[#111111]">
                  {section.title}
                </h4>
                <span className="font-mono text-[10px] font-bold text-violet-600">
                  [{sectionCompleted}/{section.items.length}]
                </span>
              </div>

              {/* Items */}
              <ul className="space-y-2 mt-3">
                {section.items.map((item) => {
                  const href = `/learn/${item.slug}`;
                  const isActive = pathname === href;
                  const isCompleted = !!completedSlugs[item.slug];

                  return (
                    <li key={item.slug}>
                      <Link
                        href={href}
                        className={`
                          group relative flex items-start gap-3
                          border-2 px-3 py-2 text-sm font-mono tracking-tight
                          transition-all duration-200 ease-out
                          ${
                            isActive
                              ? 'border-[#111111] bg-white font-bold text-[#111111] shadow-[2px_2px_0_0_#111111]'
                              : 'border-transparent text-[#555555] hover:border-[#111111] hover:bg-white hover:text-[#111111]'
                          }
                        `}
                      >
                        {/* Status icon */}
                        <div className="mt-0.5 flex-shrink-0">
                          {isCompleted ? (
                            <CheckCircle2
                              className={`h-4 w-4 ${
                                isActive
                                  ? 'text-violet-600'
                                  : 'text-violet-600'
                              }`}
                            />
                          ) : (
                            <Circle
                              className={`h-4 w-4 ${
                                isActive
                                  ? 'text-[#111111]'
                                  : 'text-[#555555] group-hover:text-[#111111]'
                              }`}
                            />
                          )}
                        </div>

                        {/* Title */}
                        <span className="leading-tight uppercase">{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}