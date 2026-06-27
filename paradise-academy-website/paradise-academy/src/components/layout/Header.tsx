import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { navLinks, school } from '@/data/schoolData';
import { cn } from '@/lib/utils';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white">
            <GraduationCap size={22} />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-semibold text-ink">
              {school.name}
            </span>
            <span className="bn text-xs text-slate">{school.nameBn}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  isActive ? 'text-primary' : 'text-ink/80'
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/admissions">
            <Button variant="accent" size="sm">
              Admission Open
            </Button>
          </Link>
        </div>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="rounded-lg p-2 text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-line bg-paper lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'rounded-lg px-3 py-2.5 text-sm font-medium',
                    isActive ? 'bg-primary/10 text-primary' : 'text-ink/80'
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link to="/admissions" onClick={() => setOpen(false)} className="mt-2">
              <Button variant="accent" className="w-full">
                Admission Open
              </Button>
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
