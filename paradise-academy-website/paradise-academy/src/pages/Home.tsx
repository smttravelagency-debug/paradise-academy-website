import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpenCheck,
  ShieldCheck,
  Users,
  Quote,
  CalendarDays,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { GlassCard, Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StatCounter } from '@/components/ui/StatCounter';
import {
  school,
  stats,
  facilities,
  whyChooseUs,
  newsAndNotices,
  testimonials,
} from '@/data/schoolData';
import { formatDate } from '@/lib/utils';

export default function Home() {
  return (
    <>
      {/* HERO — the copybook motif at full scale */}
      <section className="copybook relative overflow-hidden border-b border-line bg-gradient-to-b from-white to-paper">
        <Container className="relative grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="animate-fadeUp pl-9 sm:pl-12 lg:pl-16">
            <Badge tone="accent">Admission Open · Session 2026–27</Badge>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl lg:text-[3.4rem]">
              Where every child writes
              <span className="block text-primary">their own first chapter.</span>
            </h1>
            <p className="bn mt-3 text-base text-slate">
              যেখানে প্রতিটি শিশু লেখে তার নিজের প্রথম অধ্যায়
            </p>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-slate">
              {school.name} is a {school.medium.toLowerCase()} school run by{' '}
              {school.trust} in {school.address}, educating students from{' '}
              {school.classes} with digital classrooms, spoken English, and
              NEET/JEE foundation coaching.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <Link to="/admissions">
                <Button size="lg">
                  Apply for Admission <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="secondary" size="lg">
                  Explore the School
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative animate-fadeUp">
            <GlassCard className="mx-auto max-w-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <BookOpenCheck size={20} />
                </span>
                <div>
                  <p className="font-display text-lg font-semibold text-ink">
                    Nursery – Class X
                  </p>
                  <p className="text-sm text-slate">Bengali & English Medium</p>
                </div>
              </div>
              <div className="copybook-rule my-5" />
              <ul className="space-y-3 text-sm text-ink/85">
                <li className="flex items-center gap-2.5">
                  <ShieldCheck size={16} className="text-primary" /> CCTV-monitored,
                  secure campus
                </li>
                <li className="flex items-center gap-2.5">
                  <Users size={16} className="text-primary" /> Low student-teacher
                  ratio
                </li>
                <li className="flex items-center gap-2.5">
                  <CalendarDays size={16} className="text-primary" /> Hostel seats
                  available
                </li>
              </ul>
            </GlassCard>
            <div className="animate-floatSlow absolute -bottom-6 -left-6 hidden rounded-2xl bg-accent px-5 py-4 shadow-glass sm:block">
              <p className="font-display text-2xl font-semibold text-ink">18+</p>
              <p className="text-xs font-medium text-ink/70">years of teaching</p>
            </div>
          </div>
        </Container>
      </section>

      {/* PRINCIPAL'S MESSAGE */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="flex justify-center">
            <div className="flex h-44 w-44 items-center justify-center rounded-full bg-primary/10 text-primary sm:h-52 sm:w-52">
              <Quote size={44} />
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="From the Principal's Desk"
              eyebrowBn="অধ্যক্ষের বার্তা"
              title="A school is judged not by its building, but by the confidence it builds in a child."
            />
            <p className="text-base leading-relaxed text-slate">
              At {school.name}, our purpose goes beyond the syllabus. We work to
              give every student — whether in Bengali medium or English medium —
              the discipline, curiosity, and confidence to take on the world
              outside our gates. Education here is a partnership between
              teachers, parents, and the {school.trust}, built on the belief
              that every child deserves an honest chance to grow.
            </p>
            <p className="mt-4 font-display text-lg font-semibold text-ink">
              — Smt. Ananya Bhattacharya, Principal
            </p>
          </div>
        </Container>
      </section>

      {/* STATS */}
      <section className="copybook bg-primary py-16">
        <Container className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </Container>
      </section>

      {/* FACILITIES */}
      <section className="bg-paper py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="What We Offer"
            eyebrowBn="আমাদের সুবিধা"
            title="Facilities built for a complete education"
            description="From the classroom to the hostel, every facility at the academy is designed around one goal: helping each student do their best work."
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((f) => (
              <Card key={f.title} className="hover:shadow-glass transition-shadow">
                <h3 className="font-display text-lg font-semibold text-ink">
                  {f.title}
                </h3>
                <p className="bn text-xs text-slate/80">{f.titleBn}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  {f.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Why Families Choose Us"
              eyebrowBn="কেন আমাদের বেছে নেবেন"
              title="A disciplined, caring environment for every child"
            />
            <ul className="space-y-3">
              {whyChooseUs.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-ink/85">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <GlassCard className="bg-paper/80">
            <h3 className="font-display text-xl font-semibold text-ink">
              Hostel & Residential Care
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              Students coming from beyond Rasikpur can stay at our supervised
              hostel with a fixed daily routine, nutritious meals, and dedicated
              evening study hours under staff supervision.
            </p>
            <Link to="/hostel" className="mt-4 inline-flex">
              <Button variant="secondary" size="sm">
                Hostel Details <ArrowRight size={16} />
              </Button>
            </Link>
          </GlassCard>
        </Container>
      </section>

      {/* NEWS & NOTICES */}
      <section className="bg-paper py-16 sm:py-20">
        <Container>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Stay Informed"
              eyebrowBn="সর্বশেষ তথ্য"
              title="Latest news & announcements"
            />
            <Link to="/notices">
              <Button variant="secondary" size="sm">
                View All Notices <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {newsAndNotices.map((n) => (
              <Card key={n.title} className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <CalendarDays size={18} />
                </div>
                <div>
                  <Badge className="mb-2">{n.category}</Badge>
                  <p className="text-sm font-medium leading-snug text-ink">
                    {n.title}
                  </p>
                  <p className="mt-1 text-xs text-slate">{formatDate(n.date)}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-ink py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Parents & Alumni Speak"
            eyebrowBn="অভিভাবকদের মতামত"
            title="What our school community says"
            align="center"
            light
          />
          <div className="grid gap-6 sm:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <Quote className="text-primary-light" size={22} />
                <p className="mt-4 text-sm leading-relaxed text-white/85">
                  {t.quote}
                </p>
                <p className="mt-4 text-sm font-semibold text-white">{t.name}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-accent py-14">
        <Container className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div>
            <h3 className="font-display text-2xl font-semibold text-ink">
              Admissions for 2026–27 are now open
            </h3>
            <p className="mt-1 text-sm text-ink/75">
              Seats are limited for Nursery, Class V, and Class IX. Apply today.
            </p>
          </div>
          <Link to="/admissions">
            <Button variant="primary" size="lg">
              Start Application <ArrowRight size={18} />
            </Button>
          </Link>
        </Container>
      </section>
    </>
  );
}
