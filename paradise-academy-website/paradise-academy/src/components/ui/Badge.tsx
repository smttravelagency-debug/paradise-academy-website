import React from 'react';
import { cn } from '@/lib/utils';

export function Badge({
  children,
  className,
  tone = 'primary',
}: {
  children: React.ReactNode;
  className?: string;
  tone?: 'primary' | 'accent';
}) {
  const toneStyles =
    tone === 'accent'
      ? 'bg-accent/15 text-accent-dark'
      : 'bg-primary/10 text-primary';
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide',
        toneStyles,
        className
      )}
    >
      {children}
    </span>
  );
}
