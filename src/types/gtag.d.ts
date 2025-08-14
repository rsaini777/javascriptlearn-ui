declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string,
      config?: Record<string, string | number | boolean | undefined>
    ) => void;
  }
}

export {};
