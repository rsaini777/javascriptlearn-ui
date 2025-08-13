import { notFound } from 'next/navigation';

const content: Record<string, Record<string, { title: string; body: string }>> = {
  javascript: {
    'js-fundamentals': { title: 'JavaScript Fundamentals', body: 'Variables, types, scope, closures, prototypes.' },
    'dom-manipulation': { title: 'DOM Manipulation', body: 'Selecting, updating, events, performance.' },
  },
  react: {
    hooks: { title: 'React Hooks', body: 'useState, useEffect, memoization and custom hooks.' },
  },
};

export default async function TopicPage({ params }: { params: Promise<{ category: string; topic: string }> }) {
  const { category, topic } = await params;
  const cat = content[category];
  const doc = cat?.[topic];
  if (!doc) return notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 pt-28 pb-16">
      <div className="glass-card p-6">
        <h1 className="text-2xl font-semibold" style={{ color: '#00171f' }}>{doc.title}</h1>
        <div className="glass-divider my-4" />
        <p className="whitespace-pre-line" style={{ color: '#6b7280' }}>{doc.body}</p>
      </div>
    </div>
  );
}


