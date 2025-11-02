import { useState } from 'react';
import { Heart, Menu, X, Phone, Calendar } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-pink-500 text-white">
              <Heart className="h-5 w-5" />
            </span>
            <span className="font-semibold tracking-tight text-neutral-900">PulseCare</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-neutral-700 hover:text-orange-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#book"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-600 to-pink-600 px-4 py-2 text-sm font-semibold text-white shadow ring-1 ring-orange-500/20 hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
            >
              <Calendar className="h-4 w-4" />
              Book Appointment
            </a>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
            >
              <Phone className="h-4 w-4" />
              Call Us
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-100"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#book"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-600 to-pink-600 px-4 py-2 text-sm font-semibold text-white shadow"
              >
                <Calendar className="h-4 w-4" />
                Book Appointment
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
