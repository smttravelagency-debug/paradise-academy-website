import React from 'react';
import { cn } from '@/lib/utils';

export function GlassCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        'glass rounded-2xl shadow-glass p-6 transition-transform duration-300 hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  );
}

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl shadow-card border border-line p-6',
        className
      )}
    >
      {children}
    </div>
  );
}
