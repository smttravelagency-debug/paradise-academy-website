import React, { useState } from 'react';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Field, Input, Select, Textarea } from '@/components/ui/Form';
import { PageHero } from '@/components/layout/PageHero';
import { careerOpenings } from '@/data/schoolData';

export default function Careers() {
  const [selectedRole, setSelectedRole] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Join the Paradise Academy team"
        description="We're always looking for dedicated teaching and non-teaching staff who care about students as much as we do."
      />

      <section className="bg-white py-16">
        <Container className="grid gap-6 sm:grid-cols-2">
          {careerOpenings.map((job) => (
            <Card key={job.title} className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Briefcase size={18} />
              </span>
              <div>
                <Badge tone={job.type === 'Teaching' ? 'primary' : 'accent'} className="mb-1.5">
                  {job.type}
                </Badge>
                <h3 className="font-display text-base font-semibold text-ink">
                  {job.title}
                </h3>
                <p className="mt-1 text-sm text-slate">{job.qualification}</p>
                <button
                  onClick={() => setSelectedRole(job.title)}
                  className="mt-3 text-sm font-semibold text-primary hover:underline"
                >
                  Apply for this role →
                </button>
              </div>
            </Card>
          ))}
        </Container>
      </section>

      <section className="bg-paper py-16">
        <Container>
          {submitted ? (
            <Card className="mx-auto max-w-md text-center">
              <CheckCircle2 className="mx-auto text-primary" size={40} />
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">
                Application Received
              </h3>
              <p className="mt-2 text-sm text-slate">
                Thank you for your interest. Our office will reach out if your
                profile matches the current requirement.
              </p>
              <Button className="mt-5" onClick={() => setSubmitted(false)}>
                Apply for Another Role
              </Button>
            </Card>
          ) : (
            <Card className="mx-auto max-w-2xl">
              <h3 className="font-display text-xl font-semibold text-ink">
                Job Application Form
              </h3>
              <form onSubmit={handleSubmit} className="mt-5 grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" htmlFor="careerName" required>
                  <Input id="careerName" required placeholder="Your full name" />
                </Field>
                <Field label="Phone Number" htmlFor="careerPhone" required>
                  <Input id="careerPhone" required placeholder="10-digit mobile number" />
                </Field>
                <Field label="Position Applying For" htmlFor="careerRole" required>
                  <Select
                    id="careerRole"
                    required
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                  >
                    <option value="">Select position</option>
                    {careerOpenings.map((job) => (
                      <option key={job.title} value={job.title}>
                        {job.title}
                      </option>
                    ))}
                  </Select>
                </Field>
                <Field label="Highest Qualification" htmlFor="careerQual" required>
                  <Input id="careerQual" required placeholder="e.g. M.Sc., B.Ed." />
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Cover Note" htmlFor="careerNote">
                    <Textarea
                      id="careerNote"
                      rows={4}
                      placeholder="Tell us briefly about your teaching experience"
                    />
                  </Field>
                </div>
                <div className="sm:col-span-2">
                  <Button type="submit" size="lg">
                    Submit Application
                  </Button>
                </div>
              </form>
            </Card>
          )}
        </Container>
      </section>
    </>
  );
}
