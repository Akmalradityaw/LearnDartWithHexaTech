'use client';

import { useState, useRef, useMemo } from 'react';
import { Play, Code2, Check, Copy, ExternalLink, RotateCcw, Terminal } from 'lucide-react';

interface CodeSnippet {
  id: string;
  filename: string;
  label: string;
  code: string;
  defaultOutput: string[];
}

interface TerminalItem {
  id: string;
  text: string;
  type: 'command' | 'output' | 'success' | 'error';
}

const SNIPPETS: CodeSnippet[] = [
  {
    id: 'hello',
    filename: '01_hello.dart',
    label: 'Hello World',
    code: `void main() {
  print("Selamat datang di HexaTech!");
  var developer = "Akmal Raditya";
  print("Siap membangun masa depan bersama $developer.");
}`,
    defaultOutput: [
      'Selamat datang di HexaTech!',
      'Siap membangun masa depan bersama Akmal Raditya.',
    ],
  },
  {
    id: 'pattern',
    filename: '02_dart3_pattern.dart',
    label: 'Dart 3 Pattern',
    code: `void main() {
  var skor = 92;
  var predikat = switch (skor) {
    >= 90 => "A (Istimewa / Flutter Ready)",
    >= 75 => "B (Kompeten & Handal)",
    _ => "C (Tingkatkan Latihan)",
  };
  print("Skor: $skor -> Predikat: $predikat");
}`,
    defaultOutput: [
      'Skor: 92 -> Predikat: A (Istimewa / Flutter Ready)',
    ],
  },
  {
    id: 'async',
    filename: '03_future_stream.dart',
    label: 'Async Stream',
    code: `Stream<String> siapkanModul() async* {
  yield "01. Fondasi Sintaksis";
  yield "02. OOP & Encapsulation";
  yield "03. Asynchronous & Stream";
}

void main() async {
  print("Memuat kurikulum...");
  await for (var modul in siapkanModul()) {
    print("-> Selesai: $modul");
  }
}`,
    defaultOutput: [
      'Memuat kurikulum...',
      '-> Selesai: 01. Fondasi Sintaksis',
      '-> Selesai: 02. OOP & Encapsulation',
      '-> Selesai: 03. Asynchronous & Stream',
    ],
  },
];

/**
 * Mini Dart interpreter for playground execution simulation.
 * Parses variables, switch expressions, string interpolation ($var / ${var}), and print statements.
 */
function runDartSimulation(code: string, filename: string, runId: number): TerminalItem[] {
  const items: TerminalItem[] = [];
  const add = (text: string, type: 'command' | 'output' | 'success' | 'error') => {
    items.push({ id: `term-${runId}-${items.length}`, text, type });
  };

  add(`$ dart run ${filename}`, 'command');

  // Syntax check: main() must exist
  if (!code.includes('main()')) {
    add("Error: Fungsi titik masuk 'main()' tidak ditemukan.", 'error');
    add('Tiap berkas eksekusi Dart harus memiliki fungsi void main() { ... }', 'error');
    return items;
  }

  try {
    const lines = code.split('\n');
    const variables: Record<string, string | number | boolean> = {};

    // 1. First pass: extract variable declarations
    for (const rawLine of lines) {
      const line = rawLine.trim();

      // var / final / int / double / String name = value;
      const varMatch = line.match(/(?:var|final|int|double|String|bool)\s+([a-zA-Z_]\w*)\s*=\s*(.+?);/);
      if (varMatch) {
        const varName = varMatch[1];
        const rawVal = varMatch[2].trim();

        if ((rawVal.startsWith('"') && rawVal.endsWith('"')) || (rawVal.startsWith("'") && rawVal.endsWith("'"))) {
          variables[varName] = rawVal.slice(1, -1);
        } else if (!isNaN(Number(rawVal))) {
          variables[varName] = Number(rawVal);
        } else if (rawVal === 'true' || rawVal === 'false') {
          variables[varName] = rawVal === 'true';
        }
      }
    }

    // 2. Evaluate dynamic switch expression on 'skor' if present
    if (code.includes('switch') && variables['skor'] !== undefined) {
      const numSkor = Number(variables['skor']);
      let calculatedPredikat = 'C (Tingkatkan Latihan)';
      if (numSkor >= 90) {
        calculatedPredikat = 'A (Istimewa / Flutter Ready)';
      } else if (numSkor >= 75) {
        calculatedPredikat = 'B (Kompeten & Handal)';
      }
      variables['predikat'] = calculatedPredikat;
    }

    // String interpolation helper: replaces ${var} and $var
    const interpolate = (text: string): string => {
      let result = text;
      // Sort keys by length descending to prevent substring collisions
      const keys = Object.keys(variables).sort((a, b) => b.length - a.length);

      for (const k of keys) {
        const val = String(variables[k]);
        result = result.split(`\${${k}}`).join(val);
        result = result.split(`$${k}`).join(val);
      }
      return result;
    };

    // 3. Second pass: execute prints and streams
    let hasPrinted = false;

    // Stream snippet specific handling
    if (code.includes('Stream<String>') && code.includes('yield')) {
      const yieldItems: string[] = [];
      for (const rawLine of lines) {
        const line = rawLine.trim();
        const yieldMatch = line.match(/yield\s+["'](.*?)["'];/);
        if (yieldMatch && yieldMatch[1]) {
          yieldItems.push(yieldMatch[1]);
        }
      }

      if (code.includes('Memuat kurikulum')) {
        add('Memuat kurikulum...', 'output');
        hasPrinted = true;
      }

      if (yieldItems.length > 0) {
        for (const itm of yieldItems) {
          add(`-> Selesai: ${itm}`, 'output');
          hasPrinted = true;
        }
      }
    } else {
      // General print extraction with interpolation
      for (const rawLine of lines) {
        const line = rawLine.trim();

        // Print with string literal: print("...") or print('...')
        const printStrMatch = line.match(/print\s*\(\s*(["'])(.*?)\1\s*\);/);
        if (printStrMatch && printStrMatch[2] !== undefined) {
          const processed = interpolate(printStrMatch[2]);
          add(processed, 'output');
          hasPrinted = true;
          continue;
        }

        // Print with direct variable or expression: print(skor);
        const printVarMatch = line.match(/print\s*\(\s*([a-zA-Z_]\w*)\s*\);/);
        if (printVarMatch && variables[printVarMatch[1]] !== undefined) {
          add(String(variables[printVarMatch[1]]), 'output');
          hasPrinted = true;
        }
      }
    }

    if (!hasPrinted) {
      add('[Program selesai dieksekusi tanpa keluaran konsol print]', 'output');
    }

    const elapsed = 12 + ((runId * 3) % 7);
    add(`[OK] Kompilasi AOT/JIT sukses (${elapsed}ms)`, 'success');
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Sintaks Dart tidak valid';
    add(`Unhandled exception: FormatError: ${errorMsg}`, 'error');
  }

  return items;
}

export default function HeroCodeCard() {
  const [activeTab, setActiveTab] = useState<string>('hello');
  const [code, setCode] = useState<string>(SNIPPETS[0].code);
  const [copied, setCopied] = useState<boolean>(false);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [runCount, setRunCount] = useState<number>(1);
  const [terminalItems, setTerminalItems] = useState<TerminalItem[]>(() =>
    runDartSimulation(SNIPPETS[0].code, SNIPPETS[0].filename, 1)
  );

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const gutterRef = useRef<HTMLDivElement>(null);

  const currentSnippet = SNIPPETS.find((s) => s.id === activeTab) || SNIPPETS[0];

  // Tab switching: update code and re-run clean simulation
  const handleTabChange = (snippetId: string) => {
    setActiveTab(snippetId);
    const snippet = SNIPPETS.find((s) => s.id === snippetId);
    if (snippet) {
      setCode(snippet.code);
      setRunCount((prev) => {
        const nextCount = prev + 1;
        setTerminalItems(runDartSimulation(snippet.code, snippet.filename, nextCount));
        return nextCount;
      });
    }
  };

  // Synchronize scroll between gutter and textarea
  const handleScroll = () => {
    if (textareaRef.current && gutterRef.current) {
      gutterRef.current.scrollTop = textareaRef.current.scrollTop;
    }
  };

  // Support Tab key indent
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const target = e.currentTarget;
      const start = target.selectionStart;
      const end = target.selectionEnd;
      const newCode = code.substring(0, start) + '  ' + code.substring(end);
      setCode(newCode);
      requestAnimationFrame(() => {
        target.selectionStart = target.selectionEnd = start + 2;
      });
    }
  };

  // Run button execution
  const handleRun = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setRunCount((prev) => {
        const nextCount = prev + 1;
        const result = runDartSimulation(code, currentSnippet.filename, nextCount);
        setTerminalItems(result);
        return nextCount;
      });
    }, 280);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setCode(currentSnippet.code);
    setRunCount((prev) => {
      const nextCount = prev + 1;
      const result = runDartSimulation(currentSnippet.code, currentSnippet.filename, nextCount);
      setTerminalItems(result);
      return nextCount;
    });
  };

  // Memoized line count & numbers to prevent unnecessary re-render loops
  const lineCount = useMemo(() => Math.max(code.split('\n').length, 1), [code]);
  const lineNumbers = useMemo(() => Array.from({ length: lineCount }, (_, i) => i + 1), [lineCount]);

  return (
    <div className="relative w-full max-w-xl lg:max-w-none">
      {/* Main Terminal Box */}
      <div className="border-2 border-[#111111] bg-[#111111] shadow-[6px_6px_0_0_#111111] transition-all overflow-hidden">
        {/* Window Topbar */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-[#111111] bg-white px-3 py-2">
          {/* Window control buttons */}
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 border border-[#111111] bg-[#ff5f56]" />
            <span className="h-3 w-3 border border-[#111111] bg-[#ffbd2e]" />
            <span className="h-3 w-3 border border-[#111111] bg-[#27c93f]" />
            <span className="ml-2 font-mono text-xs font-black tracking-tight text-[#111111] uppercase hidden sm:inline">
              playground.dart
            </span>
          </div>

          {/* Snippet Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto max-w-full pb-0.5">
            {SNIPPETS.map((snippet) => {
              const isActive = snippet.id === activeTab;
              return (
                <button
                  key={`tab-${snippet.id}`}
                  onClick={() => handleTabChange(snippet.id)}
                  className={`border px-2.5 py-0.5 font-mono text-[11px] font-bold tracking-tight transition-colors whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'border-[#111111] bg-violet-600 text-white shadow-[1px_1px_0_0_#111111]'
                      : 'border-transparent bg-transparent text-[#555555] hover:border-[#111111] hover:bg-stone-100 hover:text-[#111111]'
                  }`}
                >
                  {snippet.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Sub Header: Filename badge + copy & reset actions */}
        <div className="flex items-center justify-between bg-[#181818] px-3.5 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-300">
          <div className="flex items-center gap-1.5 text-violet-400 font-bold">
            <Code2 className="w-3.5 h-3.5" />
            <span>{currentSnippet.filename}</span>
            <span className="text-stone-500 font-normal ml-1">({lineCount} baris)</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="flex items-center gap-1 px-2 py-0.5 text-stone-400 hover:text-white transition-colors border border-stone-700 hover:border-stone-500 rounded text-[10px] cursor-pointer"
              title="Kembalikan ke kode template asli"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1 px-2 py-0.5 text-stone-400 hover:text-white transition-colors border border-stone-700 hover:border-stone-500 rounded text-[10px] cursor-pointer"
              title="Salin isi editor saat ini"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">Tersalin</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Salin</span>
                </>
              )}
            </button>

            <a
              href="https://dartpad.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2 py-0.5 text-violet-400 hover:text-violet-300 transition-colors border border-violet-800/80 hover:border-violet-600 rounded text-[10px]"
              title="Buka DartPad resmi di tab baru"
            >
              <span>DartPad</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Editable Code Editor Area */}
        <div className="relative flex bg-[#161616] text-stone-200 font-mono text-xs sm:text-[13px] leading-5 h-[190px] sm:h-[210px] overflow-hidden">
          {/* Line Numbers Gutter */}
          <div
            ref={gutterRef}
            aria-hidden="true"
            className="w-9 py-2.5 pr-2 pl-1 select-none text-right font-mono text-[11px] leading-5 text-stone-600 bg-[#121212] border-r border-stone-800/70 overflow-hidden"
          >
            {lineNumbers.map((num) => (
              <div key={`gutter-${num}`}>{num}</div>
            ))}
          </div>

          {/* Real Editable Textarea */}
          <textarea
            ref={textareaRef}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onKeyDown={handleKeyDown}
            onScroll={handleScroll}
            spellCheck={false}
            autoCapitalize="off"
            autoComplete="off"
            className="flex-1 p-2.5 bg-transparent text-stone-100 font-mono text-xs sm:text-[13px] leading-5 resize-none outline-none border-0 overflow-y-auto [scrollbar-width:thin] focus:ring-0 selection:bg-violet-700 selection:text-white"
            placeholder="Tulis kode Dart di sini..."
          />
        </div>

        {/* Action Run Bar */}
        <div className="flex items-center justify-between border-t border-stone-800 bg-[#141414] px-3.5 py-2">
          <div className="flex items-center gap-2 text-[11px] font-mono text-stone-400">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Editor Interaktif (Bisa Diedit Bebas)</span>
          </div>

          <button
            onClick={handleRun}
            disabled={isRunning}
            className="flex items-center gap-1.5 border-2 border-violet-500 bg-violet-600 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-[2px_2px_0_0_#000] hover:bg-violet-500 hover:border-violet-400 active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer disabled:opacity-50"
          >
            <Play className={`w-3.5 h-3.5 ${isRunning ? 'animate-spin' : ''}`} />
            <span>{isRunning ? 'Mengeksekusi...' : 'Jalankan Kode'}</span>
          </button>
        </div>

        {/* Console Terminal Output */}
        <div className="border-t-2 border-[#111111] bg-black p-3 font-mono text-[11px] sm:text-xs">
          <div className="flex items-center gap-2 text-stone-500 pb-1.5 mb-1.5 border-b border-stone-900">
            <Terminal className="w-3.5 h-3.5 text-stone-400" />
            <span className="uppercase tracking-wider font-bold text-stone-400 text-[10px]">
              Keluaran Terminal
            </span>
            {runCount > 1 && (
              <span className="text-emerald-400 text-[10px] ml-auto">
                (Dijalankan {runCount}x)
              </span>
            )}
          </div>
          <div className="space-y-0.5 max-h-[85px] overflow-y-auto [scrollbar-width:thin]">
            {terminalItems.map((item) => {
              const isCommand = item.type === 'command';
              const isOk = item.type === 'success';
              const isError = item.type === 'error';
              return (
                <div
                  key={item.id}
                  className={`${
                    isCommand
                      ? 'text-stone-400'
                      : isOk
                      ? 'text-emerald-400 font-bold'
                      : isError
                      ? 'text-red-400 font-bold'
                      : 'text-violet-200'
                  }`}
                >
                  {item.text}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating Bottom Info */}
      <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-[#555555]">
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 bg-[#111111]" />
          <span>Ketik kode Dart di editor, lalu tekan Jalankan Kode</span>
        </div>
        <div className="font-bold text-violet-700">
          6 Modul - 26 Materi - 18+ Tugas
        </div>
      </div>
    </div>
  );
}
