import React from 'react';
import { Container } from '@/components/ui/Container';

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="copybook border-b border-line bg-gradient-to-b from-white to-paper py-14 sm:py-20">
      <Container className="pl-9 sm:pl-12 lg:pl-16">
        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          {eyebrow}
        </span>
        <h1 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
