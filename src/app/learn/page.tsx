import { redirect } from 'next/navigation';
import { navigation } from '@/data/navigation';

export const instant = false;

export default function LearnPage() {
  // Redirect to the first module
  if (navigation.length > 0 && navigation[0].items.length > 0) {
    redirect(`/learn/${navigation[0].items[0].slug}`);
  }
  
  return (
    <div className="p-8">
      <h1>Belum ada materi.</h1>
    </div>
  );
}
