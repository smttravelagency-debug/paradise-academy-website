import React from 'react';
import { Target, Eye, ListChecks, Landmark } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PageHero } from '@/components/layout/PageHero';
import { school } from '@/data/schoolData';

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={`The story behind ${school.name}`}
        description={`Run by ${school.trust}, a ${school.trustType.toLowerCase()}, serving the community of ${school.address} since our founding.`}
      />

      <section className="bg-white py-16">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Our Story" title="History" />
            <p className="text-base leading-relaxed text-slate">
              {school.name} was established with a simple aim: to bring quality,
              affordable, bilingual education to the children of Rasikpur and
              the surrounding villages of Murutia. What began as a small set of
              classrooms has grown, year by year, into a full school running
              from Nursery to Class X — built and sustained entirely under the
              {' '}{school.trust}, a registered public charitable trust.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate">
              Over the years, the school has added digital classrooms, a
              computer lab, spoken English coaching, and foundation classes for
              NEET and JEE aspirants — always with the same founding intent:
              giving local children the kind of preparation usually reserved
              for city schools.
            </p>
          </div>
          <Card className="bg-paper">
            <Landmark className="text-primary" size={28} />
            <h3 className="mt-3 font-display text-xl font-semibold text-ink">
              {school.trust}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              {school.trust} is a {school.trustType.toLowerCase()} that manages{' '}
              {school.name} as part of its mission to expand access to good
              education in rural West Bengal. The trust oversees governance,
              infrastructure, and long-term planning for the school, while
              academic operations are led by the Principal and Headmaster.
            </p>
          </Card>
        </Container>
      </section>

      <section className="bg-paper py-16">
        <Container className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <Eye className="text-primary" size={24} />
            <h3 className="mt-3 font-display text-lg font-semibold text-ink">
              Vision
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              To be the most trusted school in the Murutia block, recognised
              for academic discipline and genuine character-building.
            </p>
          </Card>
          <Card>
            <Target className="text-primary" size={24} />
            <h3 className="mt-3 font-display text-lg font-semibold text-ink">
              Mission
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              To deliver bilingual, technology-supported education that
              prepares every student for both board examinations and life
              beyond school.
            </p>
          </Card>
          <Card>
            <ListChecks className="text-primary" size={24} />
            <h3 className="mt-3 font-display text-lg font-semibold text-ink">
              Objectives
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              Strong fundamentals in language and mathematics, early exposure
              to computers and spoken English, and a safe, structured
              environment for every age group.
            </p>
          </Card>
          <Card>
            <Landmark className="text-primary" size={24} />
            <h3 className="mt-3 font-display text-lg font-semibold text-ink">
              Governance
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              Managed transparently by {school.trust} with regular academic
              audits and parent feedback built into school planning.
            </p>
          </Card>
        </Container>
      </section>
    </>
  );
}
