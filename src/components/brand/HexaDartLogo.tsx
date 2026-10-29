'use client';

interface HexaDartLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showText?: boolean;
}

const SIZE_MAP = {
  sm: { box: 'h-8 w-8', svg: 32 },
  md: { box: 'h-10 w-10', svg: 40 },
  lg: { box: 'h-12 w-12', svg: 48 },
  xl: { box: 'h-16 w-16', svg: 64 },
};

export default function HexaDartLogo({
  size = 'md',
  className = '',
  showText = false,
}: HexaDartLogoProps) {
  const currentSize = SIZE_MAP[size] || SIZE_MAP.md;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* ─── Custom Vector HexaDart Mark ─── */}
      <div
        className={`relative ${currentSize.box} flex-shrink-0 transition-transform duration-200 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5`}
        title="HexaDart Logo - Hexaverse Technology"
      >
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[2px_2px_0_#111111]"
        >
          {/* Neobrutalist Shadow Silhouette */}
          <path
            d="M24 5L39 13.5V30.5L24 39L9 30.5V13.5L24 5Z"
            fill="#111111"
          />

          {/* Main Outer Hexagon */}
          <path
            d="M22 3L37 11.5V28.5L22 37L7 28.5V11.5L22 3Z"
            fill="#FFFFFF"
            stroke="#111111"
            strokeWidth="2.5"
            strokeLinejoin="miter"
          />

          {/* Dart Arrowhead - Left Wing (Deep Black) */}
          <path
            d="M22 9L12 25L22 21V9Z"
            fill="#111111"
            stroke="#111111"
            strokeWidth="1.5"
            strokeLinejoin="miter"
          />

          {/* Dart Arrowhead - Right Wing (HexaTech Electric Violet) */}
          <path
            d="M22 9L32 25L22 21V9Z"
            fill="#7C3AED"
            stroke="#111111"
            strokeWidth="1.5"
            strokeLinejoin="miter"
          />

          {/* Center Prismatic Core (Light Lavender Accent) */}
          <path
            d="M22 13L26 23L22 21L18 23L22 13Z"
            fill="#DDD6FE"
            stroke="#111111"
            strokeWidth="1"
          />

          {/* Small Tech Beacon */}
          <circle
            cx="22"
            cy="30.5"
            r="1.8"
            fill="#7C3AED"
            stroke="#111111"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* ─── Optional Typography ─── */}
      {showText && (
        <span className="font-black text-lg md:text-xl uppercase tracking-tighter text-[#111111] select-none">
          LearnDart<span className="text-violet-600">WithHexaTech</span>
        </span>
      )}
    </div>
  );
}
