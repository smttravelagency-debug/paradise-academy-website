import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Youtube, Instagram } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { navLinks, school } from '@/data/schoolData';

export function Footer() {
  return (
    <footer className="copybook bg-ink text-white/85">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-display text-xl font-semibold text-white">
            {school.name}
          </h3>
          <p className="bn mt-1 text-sm text-white/60">{school.nameBn}</p>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Run by {school.trust}, a {school.trustType}. {school.medium} education
            from {school.classes}.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Youtube, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social media link"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary-light"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/50">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.slice(0, 6).map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-white/70 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/50">
            More
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.slice(6).map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-white/70 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/50">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex gap-2.5">
              <MapPin size={18} className="mt-0.5 shrink-0 text-primary-light" />
              {school.address}
            </li>
            <li className="flex gap-2.5">
              <Phone size={18} className="shrink-0 text-primary-light" />
              {school.phone}
            </li>
            <li className="flex gap-2.5">
              <Mail size={18} className="shrink-0 text-primary-light" />
              {school.email}
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10 py-5">
        <Container className="flex flex-col gap-2 text-center text-xs text-white/50 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {school.name}. All rights reserved.</span>
          <span>Managed by {school.trust}</span>
        </Container>
      </div>
    </footer>
  );
}
