import { INTERVIEW_SETS, type CategoryKey, type InterviewSet } from '@/app/interview-questions/data';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import ClientSetContent from './ClientSetContent';

export default async function InterviewSetPage({ params }: { params: Promise<{ category: string; set: string }> }) {
  const awaited = await params;
  const categoryKey = decodeURIComponent(awaited.category) as CategoryKey;
  const setSlug = awaited.set;

  const sets = INTERVIEW_SETS[categoryKey];
  const interviewSet: InterviewSet | undefined = sets?.find((s) => s.slug === setSlug);
  if (!interviewSet) return notFound();

  return (
    <div className="section pt-28 pb-16">
      <div className="text-left">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold" style={{ color: '#00171f' }}>{interviewSet.title}</h1>
            <p className="mt-1" style={{ color: '#6b7280' }}>{interviewSet.description}</p>
            <div className="mt-2">
              <span className="px-2 py-1 rounded-full text-sm" style={{ 
                backgroundColor: interviewSet.level === 'Beginner' ? '#22c55e1a' : 
                               interviewSet.level === 'Intermediate' ? '#f59e0b1a' : '#ef44441a',
                border: interviewSet.level === 'Beginner' ? '1px solid #22c55e33' : 
                        interviewSet.level === 'Intermediate' ? '1px solid #f59e0b33' : '1px solid #ef444433',
                color: interviewSet.level === 'Beginner' ? '#16a34a' : 
                       interviewSet.level === 'Intermediate' ? '#d97706' : '#dc2626'
              }}>
                Level: {interviewSet.level}
              </span>
            </div>
          </div>
          <Link href="/interview-questions" className="brand-pill text-sm">Back</Link>
        </div>
      </div>

      <Suspense>
        <ClientSetContent interviewSet={interviewSet} />
      </Suspense>
    </div>
  );
}



