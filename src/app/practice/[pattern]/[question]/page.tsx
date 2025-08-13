import Link from 'next/link';
import { notFound } from 'next/navigation';
import SectionHeader from '@/components/SectionHeader';
import { getPatternTitle, patternIdToQuestions } from '../../data';

export default async function QuestionPage({ params }: { params: Promise<{ pattern: string; question: string }> }) {
  const { pattern, question } = await params;
  const title = getPatternTitle(pattern);
  const questions = patternIdToQuestions[pattern];
  const q = questions?.find((x) => x.slug === question);
  if (!title || !q) return notFound();

  return (
    <div className="section pt-28 pb-16">
      <SectionHeader
        eyebrow={title}
        title={q.title}
        subtitle={`${q.difficulty} • Dummy link: /practice/${pattern}/${question}`}
        center
      />
      <div className="mt-8 max-w-3xl mx-auto">
        <div className="glass-card p-6 text-left">
          <p style={{ color: '#6b7280' }}>
            This is a placeholder question page. Here you can show the full prompt, constraints, examples and a coding workspace.
          </p>
          <div className="glass-divider my-6" />
          <div className="flex items-center justify-between">
            <Link href={`/practice/${pattern}`} className="px-4 py-2 rounded-full" style={{ backgroundColor: '#ffffffcc', border: '1px solid rgba(0,0,0,0.08)', color: '#00171f' }}>
              ← Back to list
            </Link>
            <a href="#" className="glass-button px-4 py-2 font-semibold" style={{ color: '#00171f', backgroundColor: '#ffffffcc' }}>
              Open in workspace
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


