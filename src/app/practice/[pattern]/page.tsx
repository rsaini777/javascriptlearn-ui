import Link from 'next/link';
import { notFound } from 'next/navigation';
import SectionHeader from '@/components/SectionHeader';
import { getPatternTitle, patternIdToQuestions } from '../data';

export default async function PatternPage({ params }: { params: Promise<{ pattern: string }> }) {
  const { pattern } = await params;
  const title = getPatternTitle(pattern);
  const questions = patternIdToQuestions[pattern];
  if (!title || !questions) return notFound();

  return (
    <div className="section pt-28 pb-16">
      <SectionHeader
        eyebrow="Practice DSA"
        title={title}
        subtitle="Questions in this pattern"
        center
      />
      <div className="mt-8 max-w-3xl mx-auto">
        <div className="glass-card p-4 sm:p-6">
          <ul className="divide-y" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
            {questions.map((q) => (
              <li key={q.slug} className="py-3 sm:py-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-left">
                    <Link href={`/practice/${pattern}/${q.slug}`} className="font-medium" style={{ color: '#00171f' }}>
                      {q.title}
                    </Link>
                    <div className="text-xs mt-0.5" style={{ color: '#6b7280' }}>{q.difficulty}</div>
                  </div>
                  <Link href={`/practice/${pattern}/${q.slug}`} className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: '#ffffffcc', border: '1px solid rgba(0,0,0,0.08)', color: '#00171f' }}>
                    View
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}


