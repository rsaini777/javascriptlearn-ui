import { notFound } from 'next/navigation';

type Challenge = {
  title: string;
  description: string;
  difficulty: string;
};

const challenges: Record<string, Challenge> = {
  'todo-list': {
    title: 'Todo List',
    description: 'Build a simple todo list with add, delete and toggle.',
    difficulty: 'Easy',
  },
  'infinite-scroll': {
    title: 'Infinite Scroll',
    description: 'Load items as user scrolls down the page.',
    difficulty: 'Medium',
  },
};

export default async function ChallengeDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const c = challenges[id];
  if (!c) return notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 pt-28 pb-16">
      <div className="glass-card p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold" style={{ color: '#00171f' }}>{c.title}</h1>
          <span className="px-2 py-1 text-xs rounded-full" style={{ backgroundColor: '#ffffffcc', border: '1px solid rgba(0,0,0,0.08)', color: '#00171f' }}>{c.difficulty}</span>
        </div>
        <div className="glass-divider my-4" />
        <p style={{ color: '#6b7280' }}>{c.description}</p>
        <div className="mt-6">
          <a href="#" className="glass-button px-4 py-2 text-blue-900 font-semibold bg-white/80 hover:bg-white">Open in workspace</a>
        </div>
      </div>
    </div>
  );
}


