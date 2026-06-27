import React from 'react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PageHero } from '@/components/layout/PageHero';
import { hostelRoutine } from '@/data/schoolData';

const rules = [
  'Lights out strictly by 9:00 PM on school nights.',
  'Mobile phone use limited to weekend supervised hours only.',
  'Visitors permitted only during designated visiting hours, with prior intimation.',
  'Outings require written permission from parent/guardian and the Hostel Superintendent.',
  'Ragging or bullying of any kind results in immediate disciplinary action.',
  'Medical concerns must be reported to the hostel in-charge immediately.',
];

const weeklyMenu = [
  { day: 'Monday', meal: 'Rice, dal, mixed vegetable, egg curry' },
  { day: 'Tuesday', meal: 'Rice, dal, fish curry, seasonal vegetable' },
  { day: 'Wednesday', meal: 'Rice, dal, chicken curry, salad' },
  { day: 'Thursday', meal: 'Rice, dal, paneer/vegetable curry' },
  { day: 'Friday', meal: 'Rice, dal, fish curry, chutney' },
  { day: 'Saturday', meal: 'Khichuri, vegetable fry, papad' },
  { day: 'Sunday', meal: 'Rice, dal, chicken/egg curry, sweet' },
];

export default function Hostel() {
  return (
    <>
      <PageHero
        eyebrow="Hostel"
        title="A safe home away from home"
        description="Supervised residential facility for students coming from outside Rasikpur, with a structured daily routine and balanced meals."
      />

      <section className="bg-white py-16">
        <Container>
          <SectionHeading eyebrow="Daily Routine" title="A typical day at the hostel" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {hostelRoutine.map((r) => (
              <Card key={r.time} className="flex items-center gap-4">
                <span className="font-display text-sm font-semibold text-primary">
                  {r.time}
                </span>
                <span className="text-sm text-ink/85">{r.activity}</span>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-16">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Discipline" title="Rules & regulations" />
            <ul className="space-y-2.5">
              {rules.map((r) => (
                <li key={r} className="flex items-start gap-3 text-sm text-ink/85">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-rule" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Mess" title="Weekly meal menu" />
            <Card className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <tbody>
                  {weeklyMenu.map((m) => (
                    <tr key={m.day} className="border-b border-line/60 last:border-0">
                      <td className="py-2.5 pr-4 font-medium text-ink">{m.day}</td>
                      <td className="py-2.5 text-slate">{m.meal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
