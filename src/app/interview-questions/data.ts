export type QuestionItem = {
  slug: string;
  title: string;
  answer: string;
  code?: string;
};

export type InterviewSet = {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  date: string;
  tags: string[];
  questions: QuestionItem[];
};

export type CategoryKey = 'JavaScript' | 'React' | 'System Design' | 'Behavioral';

export const INTERVIEW_SETS: Record<CategoryKey, InterviewSet[]> = {
  JavaScript: [
    {
      slug: 'top-30-js',
      title: 'Top 30 JavaScript Questions',
      description: 'Essential JavaScript concepts frequently asked in interviews.',
      longDescription: 'Covers closures, async patterns, scope, prototypes, and common language fundamentals to evaluate core JS proficiency.',
      image: '/globe.svg',
      level: 'Intermediate',
      date: '2025-01-01',
      tags: ['closures', 'async', 'scope', 'prototypes'],
      questions: [
        { slug: 'closures', title: 'Explain closures with a practical example', answer: 'A closure is the combination of a function and its lexical environment, preserving access to outer-scope variables after the outer function has returned.', code: "function makeCounter() {\n  let c = 0;\n  return function next() {\n    c += 1;\n    return c;\n  };\n}\n\nconst counter = makeCounter();\ncounter(); // 1\ncounter(); // 2" },
        { slug: 'event-loop', title: 'What is the event loop? Microtasks vs macrotasks', answer: 'The event loop coordinates the call stack and the task queues. Microtasks (Promise reactions) are flushed before the next macrotask (e.g., setTimeout).', code: "console.log('A');\nqueueMicrotask(() => console.log('micro'));\nsetTimeout(() => console.log('macro'));\nconsole.log('B');\n// Order: A, B, micro, macro" },
        { slug: 'var-let-const', title: 'var vs let vs const and temporal dead zone', answer: 'var is function-scoped and hoisted initialized as undefined; let/const are block-scoped and hoisted but uninitialized (TDZ), throwing if accessed before declaration.' },
        { slug: 'this-binding', title: 'How does this binding work? call/apply/bind', answer: 'this depends on call-site. call/apply invoke with explicit this; bind returns a new function with bound this.' },
        { slug: 'debounce-throttle', title: 'Implement debounce and throttle', answer: 'Debounce delays execution until inactivity; throttle ensures execution at most once per interval.', code: "function debounce(fn, wait) {\n  let t;\n  return function(...args) {\n    clearTimeout(t);\n    t = setTimeout(() => fn.apply(this, args), wait);\n  };\n}\n\nfunction throttle(fn, wait) {\n  let last = 0;\n  let timer = null;\n  return function(...args) {\n    const now = Date.now();\n    if (now - last >= wait) {\n      last = now;\n      fn.apply(this, args);\n    } else if (!timer) {\n      const remaining = wait - (now - last);\n      timer = setTimeout(() => {\n        last = Date.now();\n        timer = null;\n        fn.apply(this, args);\n      }, remaining);\n    }\n  };\n}" },
        { slug: 'promises', title: 'Promises: states, chaining, error handling', answer: 'Pending → fulfilled/rejected; chaining returns new promises; errors propagate to the next catch...' },
        { slug: 'async-await', title: 'async/await pitfalls and best practices', answer: 'Avoid sequential awaits in loops; use Promise.all when safe; always wrap with try/catch or top-level handlers...' },
        { slug: 'iterators-generators', title: 'What are iterators and generators?', answer: 'Iterators provide next(); generators use function* to create iterables and can pause/resume with yield...' },
        { slug: 'event-delegation', title: 'Event delegation and phases', answer: 'Attach one handler to a common ancestor and use event.target to handle children; capture vs bubble phases...' },
        { slug: 'deep-copy', title: 'Shallow vs deep copy of objects/arrays', answer: 'Shallow copy duplicates top-level references; deep copy clones nested structures; use structuredClone where available...' },
      ],
    },
    {
      slug: 'next-100-js',
      title: 'Next 100 JavaScript Questions',
      description: 'Advanced language features and browser APIs.',
      longDescription: 'Explores Proxy/Reflect, WeakRefs, streams, service workers, and performance patterns for seasoned JS engineers.',
      image: '/window.svg',
      level: 'Advanced',
      date: '2025-01-15',
      tags: ['proxy', 'weakmap', 'streams', 'sw'],
      questions: [
        { slug: 'prototype-chain', title: 'Explain prototype chain lookup', answer: 'When accessing a property, JS checks the object then its [[Prototype]] chain until null...' },
        { slug: 'weakmap-set', title: 'WeakMap/WeakSet usage', answer: 'Hold weak references to keys so they do not prevent GC; useful for caching associated data...' },
      ],
    },
  ],
  React: [
    {
      slug: 'top-30-react',
      title: 'Top 30 React Questions',
      description: 'Core React topics: rendering, hooks, and state.',
      image: '/next.svg',
      level: 'Intermediate',
      date: '2025-02-01',
      tags: ['hooks', 'state', 'rendering'],
      questions: [
        { slug: 'reconciliation', title: 'Explain reconciliation and keys', answer: 'Keys help React identify elements; reconciliation matches old and new trees efficiently...' },
        { slug: 'useeffect', title: 'useEffect dependencies and pitfalls', answer: 'List all external values as deps; avoid stale closures; clean up effects...' },
      ],
    },
  ],
  'System Design': [
    {
      slug: 'top-30-sd',
      title: 'Top 30 System Design Questions',
      description: 'High-level architecture design prompts.',
      image: '/vercel.svg',
      level: 'Intermediate',
      date: '2025-02-10',
      tags: ['scalability', 'reliability'],
      questions: [
        { slug: 'url-shortener', title: 'Design a URL shortener', answer: 'Discuss hash generation, collision handling, storage, caching, and read/write patterns...' },
        { slug: 'rate-limiter', title: 'Rate limiter strategies', answer: 'Token bucket, leaky bucket, fixed window, sliding window; trade-offs and distributed state...' },
      ],
    },
  ],
  Behavioral: [
    {
      slug: 'top-30-behavioral',
      title: 'Top 30 Behavioral Questions',
      description: 'Common scenarios and storytelling prompts.',
      image: '/file.svg',
      level: 'Beginner',
      date: '2025-01-05',
      tags: ['STAR', 'communication'],
      questions: [
        { slug: 'conflict', title: 'A time you handled conflict', answer: 'Describe situation, your approach, resolution, and learnings (STAR method)...' },
        { slug: 'failure', title: 'A time you failed and what you learned', answer: 'Be specific, own the mistake, highlight corrective actions and growth...' },
      ],
    },
  ],
};


