import React from 'react';
import { Download, Bell } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { PageHero } from '@/components/layout/PageHero';
import { newsAndNotices } from '@/data/schoolData';
import { formatDate } from '@/lib/utils';

export default function Notices() {
  return (
    <>
      <PageHero
        eyebrow="Notice Board"
        title="Latest notices & circulars"
        description="All official announcements from the school office, kept here for quick reference."
      />

      <section className="bg-white py-16">
        <Container className="space-y-4">
          {newsAndNotices.map((n) => (
            <Card key={n.title} className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Bell size={16} />
                </span>
                <div>
                  <Badge className="mb-1.5">{n.category}</Badge>
                  <p className="text-sm font-medium text-ink">{n.title}</p>
                  <p className="mt-1 text-xs text-slate">{formatDate(n.date)}</p>
                </div>
              </div>
              <Button variant="secondary" size="sm">
                <Download size={15} /> Download
              </Button>
            </Card>
          ))}
        </Container>
      </section>
    </>
  );
}
