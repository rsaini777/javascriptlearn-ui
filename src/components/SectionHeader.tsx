import { ReactNode } from 'react';

type Props = {
  eyebrow?: string;
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  center?: boolean;
};

export default function SectionHeader({ eyebrow, title, subtitle, center }: Props) {
  return (
    <div className={`${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs backdrop-blur" style={{ backgroundColor: '#ffffffcc', border: '1px solid rgba(0,0,0,0.08)', color: '#00171f' }}>
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#00a8e8' }} />
          {eyebrow}
        </div>
      )}
      <h2 className={`mt-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight ${center ? 'mx-auto' : ''}`} style={{ color: '#00171f' }}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 ${center ? 'max-w-2xl mx-auto' : ''}`} style={{ color: '#6b7280' }}>{subtitle}</p>
      )}
    </div>
  );
}


