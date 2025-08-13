export default function LearnPage() {
  return (
    <div className="section pt-28 pb-16">
      <h1 className="text-3xl font-bold" style={{ color: '#00171f' }}>Guides</h1>
      <p className="mt-2" style={{ color: '#6b7280' }}>Master frontend development with our comprehensive guides and tutorials.</p>
      <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-stretch items-stretch text-center">
        {categories.map((category) => (
          <div key={category.id} className="glass-card hover:translate-y-[-2px] transition-transform h-full min-h-[240px] flex flex-col">
            <div className="p-6 flex-1 flex flex-col">
              <h2 className="text-xl font-semibold" style={{ color: '#00171f' }}>{category.title}</h2>
              <div className="glass-divider my-4" />
              <p style={{ color: '#6b7280' }}>{category.description}</p>
              <ul className="mt-4 space-y-2">
                {category.topics.map((topic) => (
                  <li key={topic.id}>
                    <a
                      href={`/learn/${category.id}/${topic.id}`}
                      className="flex items-center"
                      style={{ color: '#6b7280' }}
                    >
                      <span className="mr-2">→</span>
                      {topic.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const categories = [
  {
    id: 'html-css',
    title: 'HTML & CSS',
    description: 'Master the fundamentals of web development',
    topics: [
      { id: 'html-basics', title: 'HTML Basics' },
      { id: 'css-layout', title: 'CSS Layout & Flexbox' },
      { id: 'responsive-design', title: 'Responsive Design' },
      { id: 'css-grid', title: 'CSS Grid' },
    ],
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    description: 'Learn modern JavaScript programming',
    topics: [
      { id: 'js-fundamentals', title: 'JavaScript Fundamentals' },
      { id: 'dom-manipulation', title: 'DOM Manipulation' },
      { id: 'async-js', title: 'Asynchronous JavaScript' },
      { id: 'es6-features', title: 'ES6+ Features' },
    ],
  },
  {
    id: 'react',
    title: 'React',
    description: 'Build modern web applications with React',
    topics: [
      { id: 'react-basics', title: 'React Basics' },
      { id: 'hooks', title: 'React Hooks' },
      { id: 'state-management', title: 'State Management' },
      { id: 'performance', title: 'Performance Optimization' },
    ],
  },
  {
    id: 'system-design',
    title: 'Frontend System Design',
    description: 'Learn to design scalable frontend applications',
    topics: [
      { id: 'architecture', title: 'Application Architecture' },
      { id: 'performance', title: 'Performance & Optimization' },
      { id: 'scalability', title: 'Scalability Patterns' },
      { id: 'security', title: 'Security Best Practices' },
    ],
  },
  {
    id: 'coding-patterns',
    title: 'Coding Patterns',
    description: 'Common patterns in frontend development',
    topics: [
      { id: 'design-patterns', title: 'Design Patterns' },
      { id: 'error-handling', title: 'Error Handling' },
      { id: 'optimization', title: 'Code Optimization' },
      { id: 'testing', title: 'Testing Strategies' },
    ],
  },
  {
    id: 'interview-prep',
    title: 'Interview Preparation',
    description: 'Get ready for your frontend interviews',
    topics: [
      { id: 'common-questions', title: 'Common Interview Questions' },
      { id: 'coding-challenges', title: 'Practice Challenges' },
      { id: 'system-design', title: 'System Design Questions' },
      { id: 'behavioral', title: 'Behavioral Questions' },
    ],
  },
];
