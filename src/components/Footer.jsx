import { useMemo, useState } from 'react';
import { Mail, MapPin, Phone, Heart } from 'lucide-react';

export default function Footer() {
  const backendUrl = useMemo(() => import.meta.env.VITE_BACKEND_URL, []);
  const [mini, setMini] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const submitMini = async (e) => {
    e.preventDefault();
    if (!backendUrl) {
      alert('Backend URL not configured');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${backendUrl}/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: mini.name || 'Website Lead',
          email: mini.email || 'lead@example.com',
          phone: 'N/A',
          department: 'General',
          date: null,
          notes: 'Quick footer request'
        })
      });
      if (!res.ok) throw new Error('Failed');
      setSent(true);
      setMini({ name: '', email: '' });
      setTimeout(() => setSent(false), 2000);
    } catch (err) {
      console.error(err);
      alert('Unable to submit. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer id="contact" className="relative border-t border-neutral-200 bg-white">
      <div className="absolute inset-x-0 -top-10 h-10 bg-gradient-to-b from-orange-50 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-pink-500 text-white">
                <Heart className="h-5 w-5" />
              </span>
              <span className="font-semibold tracking-tight text-neutral-900">PulseCare</span>
            </div>
            <p className="mt-4 text-sm text-neutral-600">
              A modern healthcare network delivering trusted care, diagnostics, and medicines — online and in‑clinic.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-neutral-900">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-neutral-700">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-orange-600" /> +1 (234) 567‑890
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-orange-600" /> care@pulsecare.health
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-orange-600" /> 100 Health Ave, Wellness City
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-neutral-900">Quick Links</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a className="text-neutral-700 hover:text-orange-600" href="#about">About</a></li>
              <li><a className="text-neutral-700 hover:text-orange-600" href="#services">Services</a></li>
              <li><a className="text-neutral-700 hover:text-orange-600" href="#home">Home</a></li>
            </ul>
          </div>

          <div id="book">
            <h4 className="text-sm font-semibold text-neutral-900">Book Appointment</h4>
            <form className="mt-4 space-y-3" onSubmit={submitMini}>
              <input value={mini.name} onChange={(e)=>setMini(s=>({...s,name:e.target.value}))} className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-500" placeholder="Your name" required />
              <input value={mini.email} onChange={(e)=>setMini(s=>({...s,email:e.target.value}))} type="email" className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-500" placeholder="Email" required />
              <button disabled={loading} className="inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-orange-600 to-pink-600 px-4 py-2 text-sm font-semibold text-white hover:opacity-95 disabled:opacity-60">{loading ? 'Sending…' : sent ? 'Requested ✓' : 'Request Slot'}</button>
              <p className="text-xs text-neutral-500">By proceeding you agree to our privacy policy.</p>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-6 sm:flex-row">
          <p className="text-xs text-neutral-500">© {new Date().getFullYear()} PulseCare. All rights reserved.</p>
          <div className="text-xs text-neutral-500">Designed in an orange‑white gradient theme.</div>
        </div>
      </div>
    </footer>
  );
}
