import { Mail, MapPin, Phone, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
                <Heart className="h-5 w-5" />
              </span>
              <span className="font-semibold tracking-tight text-neutral-900 dark:text-white">PulseCare</span>
            </div>
            <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
              A modern healthcare network delivering trusted care, diagnostics, and medicines — online and in‑clinic.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4" /> +1 (234) 567‑890
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4" /> care@pulsecare.health
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4" /> 100 Health Ave, Wellness City
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">Quick Links</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a className="text-neutral-700 hover:text-blue-600 dark:text-neutral-300 dark:hover:text-blue-400" href="#about">About</a></li>
              <li><a className="text-neutral-700 hover:text-blue-600 dark:text-neutral-300 dark:hover:text-blue-400" href="#services">Services</a></li>
              <li><a className="text-neutral-700 hover:text-blue-600 dark:text-neutral-300 dark:hover:text-blue-400" href="#home">Home</a></li>
            </ul>
          </div>

          <div id="book">
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">Book Appointment</h4>
            <form className="mt-4 space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white" placeholder="Your name" />
              <input type="email" className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white" placeholder="Email" />
              <button className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500">Request Slot</button>
              <p className="text-xs text-neutral-500">By proceeding you agree to our privacy policy.</p>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-6 dark:border-neutral-800 sm:flex-row">
          <p className="text-xs text-neutral-500">© {new Date().getFullYear()} PulseCare. All rights reserved.</p>
          <div className="text-xs text-neutral-500">Built with care for every device.</div>
        </div>
      </div>
    </footer>
  );
}
