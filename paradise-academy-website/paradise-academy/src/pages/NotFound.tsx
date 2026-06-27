import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center py-20">
      <Container className="text-center">
        <p className="font-display text-6xl font-semibold text-primary">404</p>
        <h1 className="mt-3 font-display text-2xl font-semibold text-ink">
          This page hasn't been written yet
        </h1>
        <p className="mt-2 text-sm text-slate">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link to="/" className="mt-6 inline-block">
          <Button>Back to Home</Button>
        </Link>
      </Container>
    </section>
  );
}
