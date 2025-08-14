export type DsaQuestion = {
  slug: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  href?: string;
  pattern?: string; // Sub-pattern for better organization
};

export type DsaPattern = {
  id: string;
  title: string;
  hasSubPatterns?: boolean; // Indicates if this pattern has sub-patterns
};

export const patterns: DsaPattern[] = [
  { id: 'two-pointers', title: 'Two Pointers' },
  { id: 'sliding-window', title: 'Sliding Window', hasSubPatterns: true },
  { id: 'fast-slow', title: 'Fast & Slow Pointers' },
  { id: 'merge-intervals', title: 'Merge Intervals' },
  { id: 'cyclic-sort', title: 'Cyclic Sort' },
  { id: 'monotonic-stack', title: 'Monotonic Stack' },
  { id: 'bfs', title: 'Breadth-First Search (BFS)' },
  { id: 'dfs', title: 'Depth-First Search (DFS)' },
  { id: 'binary-search', title: 'Binary Search' },
  { id: 'top-k', title: 'Top K Elements (Heap)' },
  { id: 'k-way-merge', title: 'K-way Merge' },
  { id: 'greedy', title: 'Greedy' },
  { id: 'dp', title: 'Dynamic Programming' },
  { id: 'backtracking', title: 'Backtracking' },
  { id: 'graphs', title: 'Graphs' },
  { id: 'trees', title: 'Trees' },
  { id: 'tries', title: 'Tries' },
];

export const patternIdToQuestions: Record<string, DsaQuestion[]> = {
  'two-pointers': [
    { slug: 'pair-with-target-sum', title: 'Pair With Target Sum', difficulty: 'Easy' },
    { slug: 'remove-duplicates', title: 'Remove Duplicates In-Place', difficulty: 'Easy' },
    { slug: 'squaring-a-sorted-array', title: 'Squaring a Sorted Array', difficulty: 'Easy' },
    { slug: 'three-sum', title: '3Sum', difficulty: 'Medium' },
    { slug: 'three-sum-closest', title: '3Sum Closest', difficulty: 'Medium' },
    { slug: 'four-sum', title: '4Sum', difficulty: 'Medium' },
  ],
  'sliding-window': [
    { slug: 'longest-substring-k-distinct', title: 'Longest Substring with K Distinct Characters', difficulty: 'Medium', pattern: 'sliding-window' },
    { slug: 'fruits-into-baskets', title: 'Fruits into Baskets', difficulty: 'Medium', pattern: 'sliding-window' },
    { slug: 'no-repeat-substring', title: 'No-repeat Substring', difficulty: 'Medium', pattern: 'sliding-window' },
    { slug: 'longest-substring-without-repeating', title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', pattern: 'sliding-window' },
    { slug: 'minimum-window-substring', title: 'Minimum Window Substring', difficulty: 'Hard', pattern: 'sliding-window' },
    { slug: 'subarray-sum-equals-k', title: 'Subarray Sum Equals K', difficulty: 'Medium', pattern: 'prefix-sum' },
    { slug: 'continuous-subarray-sum', title: 'Continuous Subarray Sum', difficulty: 'Medium', pattern: 'prefix-sum' },
    { slug: 'subarray-sums-divisible-by-k', title: 'Subarray Sums Divisible by K', difficulty: 'Medium', pattern: 'prefix-sum' },
    { slug: 'range-sum-query-2d', title: 'Range Sum Query 2D - Immutable', difficulty: 'Medium', pattern: 'prefix-sum' },
    { slug: 'maximum-sum-circular-subarray', title: 'Maximum Sum Circular Subarray', difficulty: 'Medium', pattern: 'prefix-sum' },
  ],
  'binary-search': [
    { slug: 'order-agnostic-binary-search', title: 'Order-agnostic Binary Search', difficulty: 'Easy' },
    { slug: 'search-in-rotated-array', title: 'Search in Rotated Sorted Array', difficulty: 'Medium' },
  ],
};

// Helper function to get sub-patterns for a given pattern
export function getSubPatterns(patternId: string): { id: string; title: string; questions: DsaQuestion[] }[] {
  const questions = patternIdToQuestions[patternId] || [];
  
  if (patternId === 'sliding-window') {
    const slidingWindowQuestions = questions.filter(q => q.pattern === 'sliding-window' || !q.pattern);
    const prefixSumQuestions = questions.filter(q => q.pattern === 'prefix-sum');
    
    return [
      {
        id: 'sliding-window-core',
        title: 'Sliding Window Core',
        questions: slidingWindowQuestions
      },
      {
        id: 'prefix-sum',
        title: 'Prefix Sum',
        questions: prefixSumQuestions
      }
    ];
  }
  
  return [{ id: patternId, title: patterns.find(p => p.id === patternId)?.title || patternId, questions }];
}

export function getPatternTitle(patternId: string): string | undefined {
  return patterns.find((p) => p.id === patternId)?.title;
}


