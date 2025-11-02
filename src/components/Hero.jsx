import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Calendar, Mail, Phone } from 'lucide-react';

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-neutral-950" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="pt-32 pb-20 sm:pt-40 sm:pb-28">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
                Next‑gen Healthcare, Human Touch
              </h1>
              <p className="mt-4 text-base sm:text-lg text-neutral-300">
                Consult top doctors, order medicines, and book diagnostics — all in one seamless, secure platform.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow ring-1 ring-blue-500/20 hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  <Calendar className="h-4 w-4" />
                  Book Appointment
                </button>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20"
                >
                  <Mail className="h-4 w-4" />
                  Contact Us
                </a>
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-100"
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
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl dark:bg-neutral-900">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Book an Appointment</h3>
                <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">Our care team will confirm your slot shortly.</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-1 text-sm font-medium text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
              >
                Close
              </button>
            </div>
            <form className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
              <input className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white" placeholder="Full name" required />
              <input type="email" className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white" placeholder="Email" required />
              <input type="tel" className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white" placeholder="Phone" required />
              <select className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white" defaultValue="">
                <option value="" disabled>Department</option>
                <option>Doctor Consultation</option>
                <option>Pharmacy</option>
                <option>Lab & Diagnostics</option>
              </select>
              <input type="date" className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white sm:col-span-2" />
              <textarea rows={4} className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white sm:col-span-2" placeholder="Additional notes" />
              <button type="submit" className="sm:col-span-2 inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
