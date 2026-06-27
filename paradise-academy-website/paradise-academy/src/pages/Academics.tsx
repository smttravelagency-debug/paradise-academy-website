import React from 'react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PageHero } from '@/components/layout/PageHero';

const classStructure = [
  { stage: 'Pre-Primary', classes: 'Nursery, LKG, UKG', focus: 'Play-based learning, phonics, motor skills' },
  { stage: 'Primary', classes: 'Class I – V', focus: 'Bengali, English, Mathematics, EVS, Computer basics' },
  { stage: 'Upper Primary', classes: 'Class VI – VIII', focus: 'Science, Social Science, Mathematics, second language' },
  { stage: 'Secondary', classes: 'Class IX – X', focus: 'Board-aligned curriculum, NEET/JEE foundation, electives' },
];

const subjects = [
  'Bengali', 'English', 'Mathematics', 'Environmental Science', 'Physical Science',
  'Life Science', 'History', 'Geography', 'Computer Application', 'Physical Education',
];

const examSystem = [
  { title: 'Unit Tests', desc: 'Short periodic tests after each chapter or unit to track ongoing understanding.' },
  { title: 'Half-Yearly Examination', desc: 'Comprehensive mid-session assessment across all subjects.' },
  { title: 'Annual Examination', desc: 'Final assessment determining promotion to the next class.' },
  { title: 'Board Preparation', desc: 'Class IX & X follow a board-aligned pattern with regular mock tests.' },
];

const coCurricular = [
  'Annual Sports Day', 'Cultural & Annual Day Programs', 'Debate & Elocution Competitions',
  'Science & Math Exhibitions', 'Art, Craft & Music Classes', 'NCC/Scouts (planned)',
];

export default function Academics() {
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="A structured path from Nursery to Class X"
        description="Our curriculum balances strong fundamentals with the digital and language skills students need today."
      />

      <section className="bg-white py-16">
        <Container>
          <SectionHeading eyebrow="Structure" title="Class structure & focus areas" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {classStructure.map((c) => (
              <Card key={c.stage}>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {c.stage}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold text-ink">
                  {c.classes}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{c.focus}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-16">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Curriculum" title="Core subjects taught" />
            <div className="flex flex-wrap gap-2.5">
              {subjects.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-line bg-white px-4 py-2 text-sm text-ink/85"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Beyond the Classroom" title="Co-curricular activities" />
            <ul className="space-y-2.5">
              {coCurricular.map((c) => (
                <li key={c} className="flex items-center gap-3 text-sm text-ink/85">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <SectionHeading eyebrow="Assessment" title="Examination system" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {examSystem.map((e) => (
              <Card key={e.title}>
                <h3 className="font-display text-base font-semibold text-ink">
                  {e.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{e.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
