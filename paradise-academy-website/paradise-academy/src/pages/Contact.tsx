import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Field, Input, Textarea } from '@/components/ui/Form';
import { PageHero } from '@/components/layout/PageHero';
import { school } from '@/data/schoolData';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We'd love to hear from you"
        description="Reach out for admission queries, general inquiries, or to schedule a campus visit."
      />

      <section className="bg-white py-16">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <Card className="flex items-start gap-4">
              <MapPin className="mt-0.5 shrink-0 text-primary" size={20} />
              <div>
                <h3 className="text-sm font-semibold text-ink">Address</h3>
                <p className="mt-1 text-sm text-slate">{school.address}</p>
              </div>
            </Card>
            <Card className="flex items-start gap-4">
              <Phone className="mt-0.5 shrink-0 text-primary" size={20} />
              <div>
                <h3 className="text-sm font-semibold text-ink">Phone</h3>
                <p className="mt-1 text-sm text-slate">{school.phone}</p>
              </div>
            </Card>
            <Card className="flex items-start gap-4">
              <Mail className="mt-0.5 shrink-0 text-primary" size={20} />
              <div>
                <h3 className="text-sm font-semibold text-ink">Email</h3>
                <p className="mt-1 text-sm text-slate">{school.email}</p>
              </div>
            </Card>
            <Card className="flex items-start gap-4">
              <Clock className="mt-0.5 shrink-0 text-primary" size={20} />
              <div>
                <h3 className="text-sm font-semibold text-ink">Office Hours</h3>
                <p className="mt-1 text-sm text-slate">Mon–Sat, 9:00 AM – 4:00 PM</p>
              </div>
            </Card>

            <div className="overflow-hidden rounded-2xl border border-line">
              <iframe
                title="School location map"
                className="h-64 w-full"
                loading="lazy"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  school.mapsQuery
                )}&output=embed`}
              />
            </div>
          </div>

          <Card>
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <CheckCircle2 className="text-primary" size={40} />
                <h3 className="mt-3 font-display text-xl font-semibold text-ink">
                  Message Sent
                </h3>
                <p className="mt-2 text-sm text-slate">
                  Thank you for reaching out. We'll get back to you shortly.
                </p>
                <Button className="mt-5" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <>
                <h3 className="font-display text-xl font-semibold text-ink">
                  Send an Inquiry
                </h3>
                <form onSubmit={handleSubmit} className="mt-5 grid gap-5 sm:grid-cols-2">
                  <Field label="Your Name" htmlFor="contactName" required>
                    <Input id="contactName" required placeholder="Full name" />
                  </Field>
                  <Field label="Phone Number" htmlFor="contactPhone" required>
                    <Input id="contactPhone" required placeholder="10-digit mobile number" />
                  </Field>
                  <div className="sm:col-span-2">
                    <Field label="Email" htmlFor="contactEmail">
                      <Input id="contactEmail" type="email" placeholder="[email protected]" />
                    </Field>
                  </div>
                  <div className="sm:col-span-2">
                    <Field label="Message" htmlFor="contactMessage" required>
                      <Textarea
                        id="contactMessage"
                        rows={5}
                        required
                        placeholder="How can we help?"
                      />
                    </Field>
                  </div>
                  <div className="sm:col-span-2">
                    <Button type="submit" size="lg">
                      Send Message
                    </Button>
                  </div>
                </form>
              </>
            )}
          </Card>
        </Container>
      </section>
    </>
  );
}
