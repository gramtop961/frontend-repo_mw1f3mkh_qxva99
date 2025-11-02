import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [form, setForm] = useState({ name: '', email: '', date: '', notes: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Temporary UX until backend wiring: simple confirmation
    alert(`Thanks, ${form.name || 'friend'}! We\'ll confirm your appointment via email.`);
    setForm({ name: '', email: '', date: '', notes: '' });
  };

  return (
    <div className="min-h-screen w-full bg-[#06060b] text-white">
      <Header />
      <main className="pt-24">
        <Hero />
        <Services />

        {/* Booking section */}
        <section id="book" className="w-full bg-[#0a0a10] py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold md:text-4xl">Book an appointment</h2>
              <p className="mt-3 text-white/70">
                Choose a date that works for you. We\'ll follow up to confirm the details.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm text-white/80">Full name</label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder-white/40 outline-none ring-0 focus:border-white/30"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm text-white/80">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder-white/40 outline-none ring-0 focus:border-white/30"
                    placeholder="jane@example.com"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="date" className="mb-1 block text-sm text-white/80">Preferred date</label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder-white/40 outline-none ring-0 focus:border-white/30"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="notes" className="mb-1 block text-sm text-white/80">Notes (optional)</label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    value={form.notes}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder-white/40 outline-none ring-0 focus:border-white/30"
                    placeholder="Share any symptoms or preferences"
                  />
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-xs text-white/50">Your information is kept private and secure.</p>
                <button
                  type="submit"
                  className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition hover:from-fuchsia-400 hover:to-indigo-400"
                >
                  Request booking
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* About section */}
        <section id="about" className="w-full bg-[#0a0a10] py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold md:text-4xl">Care that feels effortless</h2>
              <p className="mt-4 text-white/70">
                We combine experienced clinicians with a beautifully simple digital experience.
                From first consult to follow‑up, we keep you informed and in control.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
