import { useMemo, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Calendar, Mail, Phone } from 'lucide-react';

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    date: '',
    notes: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const backendUrl = useMemo(() => import.meta.env.VITE_BACKEND_URL, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!backendUrl) {
      alert('Backend URL not configured');
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch(`${backendUrl}/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          department: form.department || 'General',
          date: form.date || null,
          notes: form.notes || ''
        })
      });
      if (!res.ok) throw new Error('Failed to submit appointment');
      setSubmitted(true);
      setForm({ name: '', email: '', phone: '', department: '', date: '', notes: '' });
      setTimeout(() => {
        setOpen(false);
        setSubmitted(false);
      }, 1500);
    } catch (err) {
      console.error(err);
      alert('Unable to submit. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-white" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/YZdMZzNJGEMwyLli/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-white/40" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="pt-32 pb-20 sm:pt-40 sm:pb-28">
            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700 ring-1 ring-inset ring-orange-200">Trusted. Modern. Human.</span>
              <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900">
                Seamless Care with a Warm Touch
              </h1>
              <p className="mt-4 text-base sm:text-lg text-neutral-600">
                Consult doctors, order medicines, and book diagnostics — now in a fresh orange‑white aesthetic.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-600 to-pink-600 px-6 py-3 text-sm font-semibold text-white shadow ring-1 ring-orange-500/20 hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                >
                  <Calendar className="h-4 w-4" />
                  Book Appointment
                </button>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-100 px-6 py-3 text-sm font-semibold text-orange-800 ring-1 ring-orange-200 hover:bg-orange-200/70"
                >
                  <Mail className="h-4 w-4" />
                  Contact Us
                </a>
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 ring-1 ring-neutral-200 hover:bg-neutral-50"
                >
                  <Phone className="h-4 w-4" />
                  +1 (234) 567‑890
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" role="dialog" aria-modal="true">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-neutral-900">Book an Appointment</h3>
                <p className="mt-1 text-sm text-neutral-500">Our care team will confirm your slot shortly.</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-1 text-sm font-medium text-neutral-600 hover:bg-neutral-100"
              >
                Close
              </button>
            </div>
            <form className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2" onSubmit={onSubmit}>
              <input name="name" value={form.name} onChange={onChange} className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-500" placeholder="Full name" required />
              <input name="email" type="email" value={form.email} onChange={onChange} className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-500" placeholder="Email" required />
              <input name="phone" type="tel" value={form.phone} onChange={onChange} className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-500" placeholder="Phone" required />
              <select name="department" value={form.department} onChange={onChange} className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-500" required>
                <option value="" disabled>Department</option>
                <option>Doctor Consultation</option>
                <option>Pharmacy</option>
                <option>Lab & Diagnostics</option>
              </select>
              <input name="date" type="date" value={form.date} onChange={onChange} className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-500 sm:col-span-2" />
              <textarea name="notes" value={form.notes} onChange={onChange} rows={4} className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-500 sm:col-span-2" placeholder="Additional notes" />
              <button type="submit" disabled={submitting} className="sm:col-span-2 inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-orange-600 to-pink-600 px-4 py-2 text-sm font-semibold text-white hover:opacity-95 disabled:opacity-60">
                {submitting ? 'Submitting…' : submitted ? 'Request Sent ✓' : 'Submit Request'}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
