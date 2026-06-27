import React from 'react';
import { GraduationCap } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { PageHero } from '@/components/layout/PageHero';
import { faculty } from '@/data/schoolData';

export default function Faculty() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Faculty & Staff"
        description="Qualified, verified teachers and staff committed to the growth of every student."
      />
      <section className="bg-white py-16">
        <Container className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {faculty.map((f) => (
            <Card key={f.name} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <GraduationCap size={26} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                {f.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">{f.designation}</p>
              <p className="mt-2 text-sm text-slate">{f.qualification}</p>
            </Card>
          ))}
        </Container>
      </section>
    </>
  );
}
