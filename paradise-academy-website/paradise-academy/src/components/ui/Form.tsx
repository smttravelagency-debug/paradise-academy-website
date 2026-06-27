import React from 'react';
import { cn } from '@/lib/utils';

export function Field({
  label,
  htmlFor,
  required,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
        {label}
        {required && <span className="text-rule"> *</span>}
      </label>
      {children}
      {error && <p className="text-xs font-medium text-rule">{error}</p>}
    </div>
  );
}

const baseFieldStyles =
  'w-full rounded-xl border border-line bg-white px-4 py-2.5 text-sm text-ink placeholder:text-slate/60 transition-colors focus:border-primary';

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn(baseFieldStyles, props.className)} />;
}

export function Textarea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement>
) {
  return (
    <textarea {...props} className={cn(baseFieldStyles, 'resize-none', props.className)} />
  );
}

export function Select(
  props: React.SelectHTMLAttributes<HTMLSelectElement>
) {
  return <select {...props} className={cn(baseFieldStyles, props.className)} />;
}
