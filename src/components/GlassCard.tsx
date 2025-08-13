import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
  title?: string;
  description?: string;
  href?: string;
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
};

export default function GlassCard({ title, description, href, icon, children, className }: Props) {
  const content = (
    <div className={`glass-card p-5 ${className ?? ''}`} style={{ textAlign: 'center' }}>
      {(title || icon) && (
        <div className="flex items-center justify-center gap-3">
          {icon && <div style={{ color: '#6b7280' }}>{icon}</div>}
          {title && <h3 className="font-semibold text-lg tracking-tight" style={{ color: '#00171f' }}>{title}</h3>}
        </div>
      )}
      {(title || icon) && <div className="glass-divider my-4" />}
      {description && <p className="text-sm leading-6" style={{ color: '#6b7280' }}>{description}</p>}
      {children}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="group hover:translate-y-[-2px] transition-transform">
        {content}
      </Link>
    );
  }

  return content;
}


