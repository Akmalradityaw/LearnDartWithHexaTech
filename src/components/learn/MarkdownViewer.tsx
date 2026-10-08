'use client';

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';
import { Check, Copy } from 'lucide-react';

// A simple custom CodeBlock component that explicitly disables copying to force typing
const CodeBlock = ({ inline, className, children, ...props }: { inline?: boolean; className?: string; children?: React.ReactNode; [key: string]: unknown }) => {
  const match = /language-(\w+)/.exec(className || '');

  // Prevent keyboard shortcuts (Ctrl+C, Ctrl+Shift+S) inside the code block
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'C')) {
      e.preventDefault();
      alert('Dilarang copy paste! Silakan ketik ulang kodenya agar lebih paham.');
    }
    // Prevent print screen / snip shortcut if focused
    if (e.key === 'PrintScreen' || ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'S')) {
      e.preventDefault();
    }
  };

  if (!inline && match) {
    return (
      <div 
        className="relative group my-8 border-2 border-[#111111] overflow-hidden bg-[#111111] unselectable"
        onCopy={(e) => {
          e.preventDefault();
          alert('Belajar ngoding itu harus diketik, bukan di-copy!');
        }}
        onContextMenu={(e) => e.preventDefault()}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <div className="flex items-center justify-between px-4 py-2 border-b-2 border-[#111111] bg-violet-600 text-white text-xs font-mono font-bold uppercase tracking-[0.1em]">
          <span>{match[1]}</span>
          <span className="flex items-center gap-2 px-2 py-1 text-white/80">
            <span>⚠️ KETIK MANUAL</span>
          </span>
        </div>
        <div className="p-4 overflow-x-auto text-sm text-slate-50 font-mono leading-relaxed blur-[1px] hover:blur-none transition-all duration-300">
          <pre className="unselectable" {...props}>
            <code className={`${className} unselectable`}>{children}</code>
          </pre>
        </div>
      </div>
    );
  }
  
  return (
    <code 
      className="px-1.5 py-0.5 border-2 border-[#111111] bg-white text-violet-600 font-mono font-bold text-sm unselectable" 
      onCopy={(e) => e.preventDefault()}
      {...props}
    >
      {children}
    </code>
  );
};

export default function MarkdownViewer({ content }: { content: string }) {
  return (
    <div className="prose prose-slate max-w-none prose-headings:font-black prose-a:text-violet-600 hover:prose-a:text-[#111111] prose-headings:text-[#111111] prose-p:text-[#333333] prose-strong:text-[#111111] prose-li:text-[#333333] prose-blockquote:border-violet-600 prose-blockquote:bg-white prose-blockquote:border-l-4 prose-blockquote:py-2 prose-blockquote:px-5 prose-blockquote:text-[#111111] prose-blockquote:font-mono prose-blockquote:text-sm prose-blockquote:not-italic prose-blockquote:shadow-[4px_4px_0_0_#111111]">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          code: CodeBlock as never,
          h1: (props) => <h1 className="text-[clamp(2rem,4vw,3rem)] font-black uppercase tracking-tight mb-8 mt-10 leading-[0.9]" {...props} />,
          h2: (props) => <h2 className="text-2xl font-black uppercase tracking-tight mb-6 mt-10 pb-4 border-b-2 border-[#111111]" {...props} />,
          h3: (props) => <h3 className="text-xl font-bold uppercase tracking-tight mb-4 mt-8" {...props} />,
          p: (props) => <p className="mb-6 leading-relaxed text-lg" {...props} />,
          ul: (props) => <ul className="list-disc pl-6 mb-6 space-y-3 text-lg marker:text-violet-600" {...props} />,
          ol: (props) => <ol className="list-decimal pl-6 mb-6 space-y-3 text-lg marker:text-violet-600 marker:font-bold" {...props} />,
          a: (props) => <a className="underline decoration-2 decoration-violet-600 underline-offset-4 hover:decoration-[#111111] hover:bg-[#111111] hover:text-white transition-colors" {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
