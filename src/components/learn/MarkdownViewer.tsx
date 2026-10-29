'use client';

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';
import { Check, Copy, FileCode2, AlertTriangle } from 'lucide-react';

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
    // Extract file path from code content if available
    let fileName: string | null = null;
    const rawText = React.Children.toArray(children).map(c => {
      if (typeof c === 'string') return c;
      if (React.isValidElement(c) && (c.props as { children?: React.ReactNode })?.children) {
        const child = (c.props as { children?: React.ReactNode }).children;
        return typeof child === 'string' ? child : '';
      }
      return '';
    }).join('');

    const fileMatch = rawText.match(/^\s*\/\/\s*(?:File:|Path:)\s*([^\r\n]+)/i);
    if (fileMatch) {
      fileName = fileMatch[1].trim();
    }

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
          <div className="flex items-center gap-2">
            <span>{match[1]}</span>
            {fileName && (
              <span className="flex items-center gap-1.5 bg-black/40 text-violet-100 px-2.5 py-0.5 rounded text-[11px] font-mono normal-case tracking-normal border border-white/20">
                <FileCode2 className="w-3.5 h-3.5 text-violet-300" />
                <span>{fileName}</span>
              </span>
            )}
          </div>
          <span className="flex items-center gap-1.5 px-2 py-1 text-white/90">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>KETIK MANUAL</span>
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

function parseHeadingId(children: React.ReactNode) {
  let text = '';
  const extractText = (node: React.ReactNode) => {
    if (typeof node === 'string' || typeof node === 'number') {
      text += String(node);
    } else if (Array.isArray(node)) {
      node.forEach(extractText);
    } else if (React.isValidElement(node) && (node.props as { children?: React.ReactNode })?.children) {
      extractText((node.props as { children?: React.ReactNode }).children);
    }
  };
  extractText(children);

  // Check for explicit {#custom-id} in text
  const match = text.match(/\{#([^}]+)\}/);
  let id = '';
  if (match) {
    id = match[1].trim();
  } else {
    // Generate clean slug from heading text
    id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');
  }

  // Remove the {#id} from visible children
  const removeTag = (node: React.ReactNode): React.ReactNode => {
    if (typeof node === 'string') {
      return node.replace(/\s*\{#[^}]+\}/g, '');
    }
    if (Array.isArray(node)) {
      return node.map(removeTag);
    }
    if (React.isValidElement(node) && (node.props as { children?: React.ReactNode })?.children) {
      return React.cloneElement(
        node as React.ReactElement,
        undefined,
        removeTag((node.props as { children?: React.ReactNode }).children)
      );
    }
    return node;
  };

  return { id, cleanChildren: removeTag(children) };
}

export default function MarkdownViewer({ content }: { content: string }) {
  return (
    <div className="prose prose-slate max-w-none prose-headings:font-black prose-a:text-violet-600 hover:prose-a:text-[#111111] prose-headings:text-[#111111] prose-p:text-[#333333] prose-strong:text-[#111111] prose-li:text-[#333333] prose-blockquote:border-violet-600 prose-blockquote:bg-white prose-blockquote:border-l-4 prose-blockquote:py-2 prose-blockquote:px-5 prose-blockquote:text-[#111111] prose-blockquote:font-mono prose-blockquote:text-sm prose-blockquote:not-italic prose-blockquote:shadow-[4px_4px_0_0_#111111]">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          code: CodeBlock as never,
          h1: ({ children, node: _node, ...props }: React.HTMLAttributes<HTMLHeadingElement> & { node?: unknown }) => {
            const { id, cleanChildren } = parseHeadingId(children);
            return <h1 {...props} id={id} className="text-[clamp(2rem,4vw,3rem)] font-black uppercase tracking-tight mb-8 mt-10 leading-[0.9] scroll-mt-24">{cleanChildren}</h1>;
          },
          h2: ({ children, node: _node, ...props }: React.HTMLAttributes<HTMLHeadingElement> & { node?: unknown }) => {
            const { id, cleanChildren } = parseHeadingId(children);
            return <h2 {...props} id={id} className="text-2xl font-black uppercase tracking-tight mb-6 mt-10 pb-4 border-b-2 border-[#111111] scroll-mt-24">{cleanChildren}</h2>;
          },
          h3: ({ children, node: _node, ...props }: React.HTMLAttributes<HTMLHeadingElement> & { node?: unknown }) => {
            const { id, cleanChildren } = parseHeadingId(children);
            return <h3 {...props} id={id} className="text-xl font-bold uppercase tracking-tight mb-4 mt-8 scroll-mt-24">{cleanChildren}</h3>;
          },
          p: (props) => <p className="mb-6 leading-relaxed text-lg" {...props} />,
          ul: (props) => <ul className="list-disc pl-6 mb-6 space-y-3 text-lg marker:text-violet-600" {...props} />,
          ol: (props) => <ol className="list-decimal pl-6 mb-6 space-y-3 text-lg marker:text-violet-600 marker:font-bold" {...props} />,
          a: (props) => <a className="underline decoration-2 decoration-violet-600 underline-offset-4 hover:decoration-[#111111] hover:bg-[#111111] hover:text-white transition-colors" {...props} />,
          hr: () => <hr className="my-10 border-t-2 border-[#111111]" />,
          table: ({ children, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
            <div className="my-8 overflow-x-auto border-2 border-[#111111] bg-white shadow-[4px_4px_0_0_#111111]">
              <table className="w-full min-w-[640px] text-left border-collapse text-sm" {...props}>
                {children}
              </table>
            </div>
          ),
          thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
            <thead className="bg-[#111111] text-white font-mono uppercase text-xs tracking-wider" {...props} />
          ),
          th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
            <th className="px-5 py-4 border-b-2 border-r border-[#333333] font-black text-white bg-[#111111] last:border-r-0 whitespace-nowrap text-left" {...props} />
          ),
          tbody: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
            <tbody className="divide-y divide-[#111111]/20 font-sans" {...props} />
          ),
          tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => (
            <tr className="hover:bg-violet-50 transition-colors even:bg-stone-50/70" {...props} />
          ),
          td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
            <td className="px-5 py-4 border-r border-stone-200 text-stone-900 font-medium last:border-r-0 leading-relaxed align-top" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
