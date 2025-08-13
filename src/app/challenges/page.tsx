export default function ChallengesPage() {
  return (
    <div className="section pt-28 pb-16">
      <h1 className="text-3xl font-bold" style={{ color: '#00171f' }}>UI coding questions</h1>
      <p className="mt-2" style={{ color: '#6b7280' }}>Practice your frontend development skills with our curated challenges.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch justify-items-stretch">
        {challenges.map((challenge) => (
          <a key={challenge.id} href={`/challenges/${challenge.id}`} className="glass-card p-6 block hover:translate-y-[-2px] transition-transform h-full min-h-[220px] flex flex-col">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium" style={{ color: '#00171f' }}>{challenge.title}</h3>
              <span className={`px-2 py-1 text-xs rounded-full ${getDifficultyChip(challenge.difficulty)}`}>
                {challenge.difficulty}
              </span>
            </div>
            <div className="glass-divider my-4" />
            <p className="text-sm" style={{ color: '#6b7280' }}>{challenge.description}</p>
            <div className="mt-4" style={{ color: '#6b7280' }}>Start Challenge →</div>
          </a>
        ))}
      </div>
    </div>
  );
}

const getDifficultyChip = (difficulty: string) => {
  switch (difficulty.toLowerCase()) {
    case 'easy':
      return 'bg-[#00a8e8]/20 text-[#00a8e8] border border-[#00a8e8]/30';
    case 'medium':
      return 'bg-yellow-400/20 text-yellow-100 border border-yellow-300/30';
    case 'hard':
      return 'bg-rose-400/20 text-rose-100 border border-rose-300/30';
    default:
      return 'bg-white/10 text-white/90 border border-white/30';
  }
};

const challenges = [
  {
    id: 'todo-list',
    title: 'Todo List',
    difficulty: 'Easy',
    description: 'Build a simple todo list application with add, delete, and toggle completion functionality.',
  },
  {
    id: 'infinite-scroll',
    title: 'Infinite Scroll',
    difficulty: 'Medium',
    description: 'Implement infinite scrolling to load and display items as the user scrolls down the page.',
  },
  {
    id: 'type-ahead',
    title: 'Type-ahead Search',
    difficulty: 'Medium',
    description: 'Create a search input with type-ahead suggestions as users type.',
  },
  {
    id: 'calculator',
    title: 'Calculator',
    difficulty: 'Hard',
    description: 'Build a functional calculator with basic arithmetic operations and keyboard support.',
  },
  {
    id: 'kanban-board',
    title: 'Kanban Board',
    difficulty: 'Hard',
    description: 'Create a Kanban board with draggable cards and multiple columns.',
  },
  {
    id: 'counter',
    title: 'Counter',
    difficulty: 'Easy',
    description: 'Implement a simple counter with increment and decrement functionality.',
  },
];
