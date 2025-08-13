export type DsaQuestion = {
  slug: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  href?: string;
};

export type DsaPattern = {
  id: string;
  title: string;
};

export const patterns: DsaPattern[] = [
  { id: 'two-pointers', title: 'Two Pointers' },
  { id: 'sliding-window', title: 'Sliding Window' },
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
    { slug: 'longest-substring-k-distinct', title: 'Longest Substring with K Distinct Characters', difficulty: 'Medium' },
    { slug: 'fruits-into-baskets', title: 'Fruits into Baskets', difficulty: 'Medium' },
    { slug: 'no-repeat-substring', title: 'No-repeat Substring', difficulty: 'Medium' },
  ],
  'binary-search': [
    { slug: 'order-agnostic-binary-search', title: 'Order-agnostic Binary Search', difficulty: 'Easy' },
    { slug: 'search-in-rotated-array', title: 'Search in Rotated Sorted Array', difficulty: 'Medium' },
  ],
};

export function getPatternTitle(patternId: string): string | undefined {
  return patterns.find((p) => p.id === patternId)?.title;
}


