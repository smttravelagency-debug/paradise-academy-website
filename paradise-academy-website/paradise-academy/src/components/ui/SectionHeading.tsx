import React from 'react';
import { cn } from '@/lib/utils';

export function SectionHeading({
  eyebrow,
  eyebrowBn,
  title,
  description,
  align = 'left',
  light = false,
}: {
  eyebrow: string;
  eyebrowBn?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}) {
  return (
    <div className={cn('mb-10', align === 'center' && 'text-center')}>
      <div
        className={cn(
          'copybook-rule mb-3',
          align === 'center' && 'justify-center'
        )}
      >
        <span
          className={cn(
            'text-sm font-semibold uppercase tracking-[0.18em]',
            light ? 'text-primary-light' : 'text-primary'
          )}
        >
          {eyebrow}
          {eyebrowBn && (
            <span className="bn ml-2 text-[13px] font-medium tracking-normal text-slate normal-case">
              {eyebrowBn}
            </span>
          )}
        </span>
        {align !== 'center' && <span className="hidden sm:block" />}
      </div>
      <h2
        className={cn(
          'font-display text-3xl sm:text-4xl font-semibold leading-tight',
          light ? 'text-white' : 'text-ink'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-3 max-w-2xl text-base leading-relaxed',
            align === 'center' && 'mx-auto',
            light ? 'text-white/80' : 'text-slate'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
