import Link from 'next/link';
import { notFound } from 'next/navigation';
import SectionHeader from '@/components/SectionHeader';
import { getPatternTitle, getSubPatterns } from '../data';

export default async function PatternPage({ params }: { params: Promise<{ pattern: string }> }) {
  const { pattern } = await params;
  const title = getPatternTitle(pattern);
  const subPatterns = getSubPatterns(pattern);
  if (!title || !subPatterns) return notFound();

  // Get pattern icon based on pattern type
  const getPatternIcon = (patternId: string) => {
    const iconMap: Record<string, string> = {
      'two-pointers': '👆👆',
      'sliding-window': '🪟',
      'fast-slow': '🐰🐢',
      'merge-intervals': '🔗',
      'cyclic-sort': '🔄',
      'monotonic-stack': '📚',
      'bfs': '🌊',
      'dfs': '🌳',
      'binary-search': '🔍',
      'top-k': '🏆',
      'k-way-merge': '🔀',
      'greedy': '💰',
      'dp': '🧠',
      'backtracking': '🔙',
      'graphs': '🕸️',
      'trees': '🌲',
      'tries': '🔤'
    };
    return iconMap[patternId] || '📝';
  };

  // Get sub-pattern icon
  const getSubPatternIcon = (subPatternId: string) => {
    const iconMap: Record<string, string> = {
      'sliding-window-core': '🪟',
      'prefix-sum': '📊',
      'two-pointers': '👆👆',
      'binary-search': '🔍'
    };
    return iconMap[subPatternId] || '📝';
  };

  // Get difficulty color and icon
  const getDifficultyInfo = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return { color: 'text-green-600', bgColor: 'bg-green-100', icon: '🟢' };
      case 'Medium':
        return { 
          color: 'text-white', 
          bgColor: 'bg-opacity-20', 
          icon: '🟡',
          customStyle: { backgroundColor: '#00a8e8' }
        };
      case 'Hard':
        return { color: 'text-red-600', bgColor: 'bg-red-100', icon: '🔴' };
      default:
        return { color: 'text-gray-600', bgColor: 'bg-gray-100', icon: '⚪' };
    }
  };

  const totalQuestions = subPatterns.reduce((sum, sp) => sum + sp.questions.length, 0);

  return (
    <div className="section pt-28 pb-16">
      <SectionHeader
        eyebrow="Practice DSA"
        title={
          <div className="flex items-center justify-center gap-3">
            <span className="text-4xl">{getPatternIcon(pattern)}</span>
            <span>{title}</span>
          </div>
        }
        subtitle={`Master ${title} with ${totalQuestions} carefully curated questions`}
        center
      />
      
      <div className="mt-12 max-w-5xl mx-auto">
        {/* Pattern Overview Card */}
        <div className="glass-card p-6 mb-8 text-center">
          <div className="text-6xl mb-4">{getPatternIcon(pattern)}</div>
          <h3 className="text-xl font-semibold mb-2" style={{ color: '#00171f' }}>
            {title} Pattern
          </h3>
          <p className="text-sm" style={{ color: '#6b7280' }}>
            {totalQuestions} questions • {subPatterns.length} sub-patterns
          </p>
        </div>

        {/* Sub-Patterns */}
        <div className="space-y-6">
          {subPatterns.map((subPattern, subIndex) => (
            <div key={subPattern.id} className="glass-card p-6">
              {/* Sub-Pattern Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="text-3xl">{getSubPatternIcon(subPattern.id)}</div>
                <div>
                  <h3 className="text-xl font-semibold" style={{ color: '#00171f' }}>
                    {subPattern.title}
                  </h3>
                  <p className="text-sm" style={{ color: '#6b7280' }}>
                    {subPattern.questions.length} questions
                  </p>
                </div>
                {subIndex > 0 && (
                  <div className="ml-auto">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Sub-pattern
                    </span>
                  </div>
                )}
              </div>
              
              {/* Questions List */}
              <div className="space-y-3">
                {subPattern.questions.map((q, index) => {
                  const difficultyInfo = getDifficultyInfo(q.difficulty);
                  return (
                    <div
                      key={q.slug}
                      className="group p-4 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-200 hover:shadow-lg hover:bg-white/5"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4 flex-1">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-sm font-bold" style={{ color: '#00171f' }}>
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <Link 
                              href={`/practice/${pattern}/${q.slug}`} 
                              className="font-medium text-lg hover:text-blue-600 transition-colors block" 
                              style={{ color: '#00171f' }}
                            >
                              {q.title}
                            </Link>
                            <div className="flex items-center gap-2 mt-1">
                              <span 
                                className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${q.difficulty === 'Medium' ? '' : difficultyInfo.bgColor} ${q.difficulty === 'Medium' ? '' : difficultyInfo.color}`}
                                style={q.difficulty === 'Medium' ? difficultyInfo.customStyle : {}}
                              >
                                {difficultyInfo.icon} {q.difficulty}
                              </span>
                              <span className="text-xs" style={{ color: '#6b7280' }}>
                                {subPattern.title}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <Link 
                          href={`/practice/${pattern}/${q.slug}`} 
                          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
                          style={{ 
                            backgroundColor: '#ffffffcc', 
                            border: '1px solid rgba(0,0,0,0.08)', 
                            color: '#00171f' 
                          }}
                        >
                          <span>Practice</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-8 text-center">
          <Link
            href="/practice"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105"
            style={{
              backgroundColor: '#ffffffcc',
              border: '1px solid rgba(0,0,0,0.08)',
              color: '#00171f'
            }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Patterns
          </Link>
        </div>
      </div>
    </div>
  );
}


