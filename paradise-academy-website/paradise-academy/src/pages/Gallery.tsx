import React, { useState } from 'react';
import { Image as ImageIcon, Video, PartyPopper } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/layout/PageHero';
import { cn } from '@/lib/utils';

const tabs = [
  { key: 'photo', label: 'Photo Gallery', icon: ImageIcon },
  { key: 'video', label: 'Video Gallery', icon: Video },
  { key: 'events', label: 'Events Gallery', icon: PartyPopper },
] as const;

const placeholderCaptions: Record<string, string[]> = {
  photo: [
    'Annual Sports Day',
    'Independence Day Celebration',
    'Computer Lab Session',
    'Republic Day Parade',
    'Science Exhibition',
    'Cultural Program',
  ],
  video: ['Annual Day Highlights', 'Sports Day Recap', 'School Tour'],
  events: ['Saraswati Puja', 'Annual Prize Distribution', 'Independence Day'],
};

export default function Gallery() {
  const [active, setActive] = useState<typeof tabs[number]['key']>('photo');

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments from school life"
        description="A look at events, classrooms, and celebrations at the academy throughout the year."
      />

      <section className="bg-white py-16">
        <Container>
          <div className="mb-8 flex flex-wrap gap-3">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActive(tab.key)}
                  className={cn(
                    'flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                    active === tab.key
                      ? 'border-primary bg-primary text-white'
                      : 'border-line bg-white text-ink/80 hover:border-primary'
                  )}
                >
                  <Icon size={16} /> {tab.label}
                </button>
              );
            })}
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {placeholderCaptions[active].map((caption, i) => {
              const Icon = tabs.find((t) => t.key === active)!.icon;
              return (
                <figure
                  key={caption}
                  className="overflow-hidden rounded-2xl border border-line bg-paper"
                >
                  <div
                    className={cn(
                      'flex h-48 items-center justify-center bg-gradient-to-br',
                      i % 3 === 0 && 'from-primary/15 to-primary-light/10',
                      i % 3 === 1 && 'from-accent/15 to-primary/10',
                      i % 3 === 2 && 'from-primary-light/15 to-accent/10'
                    )}
                  >
                    <Icon className="text-primary/60" size={36} />
                  </div>
                  <figcaption className="px-4 py-3 text-sm font-medium text-ink">
                    {caption}
                  </figcaption>
                </figure>
              );
            })}
          </div>
          <p className="mt-8 text-xs text-slate">
            Placeholder tiles shown above — connect the CMS media manager to
            replace these with real event photos and videos.
          </p>
        </Container>
      </section>
    </>
  );
}
