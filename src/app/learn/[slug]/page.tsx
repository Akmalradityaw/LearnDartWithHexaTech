import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import MarkdownViewer from '@/components/learn/MarkdownViewer';
import { getNextAndPrev, getFlatNavigation } from '@/data/navigation';
import LessonFooter from '@/components/learn/LessonFooter';

// Generate static params for all slugs
export async function generateStaticParams() {
  return getFlatNavigation().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const item = getFlatNavigation().find(i => i.slug === resolvedParams.slug);
  
  if (!item) return { title: 'Not Found' };
  
  return {
    title: `${item.title} | LearnDartWithHexaTech`,
    description: `Pelajari ${item.title} di platform pembelajaran Dart modern.`,
  };
}

export const instant = false;

export default async function LessonPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  
  const currentItem = getFlatNavigation().find(i => i.slug === slug);
  
  if (!currentItem) {
    notFound();
  }

  // Load markdown content
  let content = '';
  try {
    const filePath = path.join(process.cwd(), 'src/content/modules', `${slug}.md`);
    content = fs.readFileSync(filePath, 'utf8');
  } catch {
    // Fallback content if file doesn't exist yet
    content = `# ${currentItem.title}\n\nMateri untuk bagian ini sedang dalam tahap penulisan. Silakan kembali lagi nanti!`;
  }

  const { prev, next } = getNextAndPrev(slug);

  return (
    <div className="flex justify-center w-full bg-[#F4F4F0]">
      <div className="w-full max-w-[1600px] px-4 py-10 md:py-16 md:px-12">
        <article className="min-h-[50vh]">
          <MarkdownViewer content={content} />
        </article>
        
        <div className="mt-16 pt-12 border-t-2 border-[#111111]">
          <LessonFooter key={slug} slug={slug} prev={prev} next={next} />
        </div>
      </div>
    </div>
  );
}
