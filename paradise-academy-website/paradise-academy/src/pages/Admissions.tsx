import React, { useState } from 'react';
import {
  FileText,
  Upload,
  CheckCircle2,
  Download,
  ClipboardList,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Field, Input, Select, Textarea } from '@/components/ui/Form';
import { PageHero } from '@/components/layout/PageHero';
import { classFeeStructure } from '@/data/schoolData';

const classOptions = [
  'Nursery', 'LKG', 'UKG', 'Class I', 'Class II', 'Class III', 'Class IV',
  'Class V', 'Class VI', 'Class VII', 'Class VIII', 'Class IX', 'Class X',
];

interface FormState {
  studentName: string;
  dob: string;
  gender: string;
  classApplying: string;
  guardianName: string;
  guardianPhone: string;
  guardianEmail: string;
  address: string;
  previousSchool: string;
  birthCertificate: File | null;
  previousMarksheet: File | null;
  photo: File | null;
}

const initialState: FormState = {
  studentName: '',
  dob: '',
  gender: '',
  classApplying: '',
  guardianName: '',
  guardianPhone: '',
  guardianEmail: '',
  address: '',
  previousSchool: '',
  birthCertificate: null,
  previousMarksheet: null,
  photo: null,
};

export default function Admissions() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState('');

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.studentName.trim()) next.studentName = 'Student name is required';
    if (!form.dob) next.dob = 'Date of birth is required';
    if (!form.gender) next.gender = 'Please select gender';
    if (!form.classApplying) next.classApplying = 'Please select a class';
    if (!form.guardianName.trim()) next.guardianName = "Guardian's name is required";
    if (!/^[6-9]\d{9}$/.test(form.guardianPhone.trim()))
      next.guardianPhone = 'Enter a valid 10-digit phone number';
    if (form.guardianEmail && !/^\S+@\S+\.\S+$/.test(form.guardianEmail))
      next.guardianEmail = 'Enter a valid email address';
    if (!form.address.trim()) next.address = 'Address is required';
    if (!form.birthCertificate) next.birthCertificate = 'Birth certificate is required';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    // NOTE: This is a front-end only demo. Wire this up to your backend
    // (e.g. POST /api/admissions with multipart/form-data) to persist
    // applications and uploaded documents.
    const id = `PA-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setApplicationId(id);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center py-20">
        <Container>
          <Card className="mx-auto max-w-md text-center">
            <CheckCircle2 className="mx-auto text-primary" size={44} />
            <h2 className="mt-4 font-display text-2xl font-semibold text-ink">
              Application Submitted
            </h2>
            <p className="mt-2 text-sm text-slate">
              Thank you, {form.studentName}'s application has been received.
              Your reference ID is:
            </p>
            <p className="mt-3 font-display text-lg font-semibold text-primary">
              {applicationId}
            </p>
            <p className="mt-4 text-sm text-slate">
              Our admission office will contact {form.guardianName} at{' '}
              {form.guardianPhone} within 3 working days regarding the entrance
              test or interview schedule.
            </p>
            <Button
              className="mt-6"
              onClick={() => {
                setForm(initialState);
                setSubmitted(false);
              }}
            >
              Submit Another Application
            </Button>
          </Card>
        </Container>
      </section>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Admissions 2026–27"
        title="Begin your child's journey with us"
        description="Fill out the online admission form below, or review guidelines and fee structure before applying."
      />

      <section className="bg-paper py-16">
        <Container className="grid gap-10 lg:grid-cols-3">
          <Card className="lg:col-span-1">
            <ClipboardList className="text-primary" size={24} />
            <h3 className="mt-3 font-display text-lg font-semibold text-ink">
              Admission Guidelines
            </h3>
            <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-slate">
              <li>• Open for Nursery to Class IX; Class X subject to seat availability.</li>
              <li>• Minimum age for Nursery: 3 years as on 1st June of the session.</li>
              <li>• Original birth certificate required at the time of admission.</li>
              <li>• Transfer certificate mandatory for Class II and above.</li>
              <li>• Entrance assessment for Class III and above.</li>
            </ul>
          </Card>

          <Card className="lg:col-span-1">
            <FileText className="text-primary" size={24} />
            <h3 className="mt-3 font-display text-lg font-semibold text-ink">
              Entrance Test
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              Students applying for Class III and above sit for a short written
              assessment in Bengali, English, and Mathematics, followed by an
              informal interaction with the Headmaster. Results are shared
              within 3 working days.
            </p>
          </Card>

          <Card className="lg:col-span-1">
            <Download className="text-primary" size={24} />
            <h3 className="mt-3 font-display text-lg font-semibold text-ink">
              Prospectus
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              Download the full prospectus for detailed curriculum, fee, and
              policy information.
            </p>
            <a href="/prospectus.pdf" download>
              <Button variant="secondary" size="sm" className="mt-4">
                <Download size={16} /> Download Prospectus
              </Button>
            </a>
          </Card>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <SectionHeading eyebrow="Fee Structure" title="Class-wise admission & monthly fees" />
          <Card className="overflow-x-auto">
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead>
                <tr className="border-b border-line text-xs uppercase tracking-wide text-slate">
                  <th className="pb-3">Class Range</th>
                  <th className="pb-3">Admission Fee (₹)</th>
                  <th className="pb-3">Monthly Fee (₹)</th>
                </tr>
              </thead>
              <tbody>
                {classFeeStructure.map((row) => (
                  <tr key={row.level} className="border-b border-line/60 last:border-0">
                    <td className="py-3 font-medium text-ink">{row.level}</td>
                    <td className="py-3 text-slate">₹{row.admission}</td>
                    <td className="py-3 text-slate">₹{row.monthly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-3 text-xs text-slate">
              Fees are illustrative. Scholarships and fee concessions are
              available for eligible students — ask the admission office for
              details.
            </p>
          </Card>
        </Container>
      </section>

      <section className="bg-paper py-16">
        <Container>
          <SectionHeading eyebrow="Apply Now" title="Online admission form" />
          <Card>
            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
              <Field label="Student's Full Name" htmlFor="studentName" required error={errors.studentName}>
                <Input
                  id="studentName"
                  value={form.studentName}
                  onChange={(e) => update('studentName', e.target.value)}
                  placeholder="Full name as per birth certificate"
                />
              </Field>

              <Field label="Date of Birth" htmlFor="dob" required error={errors.dob}>
                <Input
                  id="dob"
                  type="date"
                  value={form.dob}
                  onChange={(e) => update('dob', e.target.value)}
                />
              </Field>

              <Field label="Gender" htmlFor="gender" required error={errors.gender}>
                <Select
                  id="gender"
                  value={form.gender}
                  onChange={(e) => update('gender', e.target.value)}
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Select>
              </Field>

              <Field label="Class Applying For" htmlFor="classApplying" required error={errors.classApplying}>
                <Select
                  id="classApplying"
                  value={form.classApplying}
                  onChange={(e) => update('classApplying', e.target.value)}
                >
                  <option value="">Select class</option>
                  {classOptions.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </Select>
              </Field>

              <Field label="Guardian's Name" htmlFor="guardianName" required error={errors.guardianName}>
                <Input
                  id="guardianName"
                  value={form.guardianName}
                  onChange={(e) => update('guardianName', e.target.value)}
                  placeholder="Parent / Guardian full name"
                />
              </Field>

              <Field label="Guardian's Phone" htmlFor="guardianPhone" required error={errors.guardianPhone}>
                <Input
                  id="guardianPhone"
                  value={form.guardianPhone}
                  onChange={(e) => update('guardianPhone', e.target.value)}
                  placeholder="10-digit mobile number"
                  inputMode="numeric"
                />
              </Field>

              <Field label="Guardian's Email (optional)" htmlFor="guardianEmail" error={errors.guardianEmail}>
                <Input
                  id="guardianEmail"
                  type="email"
                  value={form.guardianEmail}
                  onChange={(e) => update('guardianEmail', e.target.value)}
                  placeholder="[email protected]"
                />
              </Field>

              <Field label="Previous School (if any)" htmlFor="previousSchool">
                <Input
                  id="previousSchool"
                  value={form.previousSchool}
                  onChange={(e) => update('previousSchool', e.target.value)}
                  placeholder="Name of last attended school"
                />
              </Field>

              <div className="sm:col-span-2">
                <Field label="Residential Address" htmlFor="address" required error={errors.address}>
                  <Textarea
                    id="address"
                    rows={3}
                    value={form.address}
                    onChange={(e) => update('address', e.target.value)}
                    placeholder="Village/Town, Post Office, Police Station, District, PIN"
                  />
                </Field>
              </div>

              <div className="sm:col-span-2 grid gap-5 sm:grid-cols-3">
                <FileField
                  label="Birth Certificate"
                  required
                  error={errors.birthCertificate}
                  file={form.birthCertificate}
                  onChange={(f) => update('birthCertificate', f)}
                />
                <FileField
                  label="Previous Marksheet"
                  file={form.previousMarksheet}
                  onChange={(f) => update('previousMarksheet', f)}
                />
                <FileField
                  label="Student Photo"
                  file={form.photo}
                  onChange={(f) => update('photo', f)}
                />
              </div>

              <div className="sm:col-span-2">
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Submit Application
                </Button>
              </div>
            </form>
          </Card>
        </Container>
      </section>
    </>
  );
}

function FileField({
  label,
  required,
  error,
  file,
  onChange,
}: {
  label: string;
  required?: boolean;
  error?: string;
  file: File | null;
  onChange: (file: File | null) => void;
}) {
  const inputId = `file-${label.replace(/\s+/g, '-').toLowerCase()}`;
  return (
    <Field label={label} htmlFor={inputId} required={required} error={error}>
      <label
        htmlFor={inputId}
        className="flex cursor-pointer items-center gap-2.5 rounded-xl border border-dashed border-line bg-white px-4 py-2.5 text-sm text-slate hover:border-primary"
      >
        <Upload size={16} className="text-primary" />
        <span className="truncate">{file ? file.name : 'Choose file (PDF/JPG)'}</span>
      </label>
      <input
        id={inputId}
        type="file"
        accept=".pdf,.jpg,.jpeg,.png"
        className="hidden"
        onChange={(e) => onChange(e.target.files?.[0] ?? null)}
      />
    </Field>
  );
}
