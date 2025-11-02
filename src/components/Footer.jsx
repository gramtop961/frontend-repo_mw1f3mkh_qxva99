import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="w-full border-t border-white/10 bg-[#0a0a10] py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h4 className="text-xl font-semibold">Get in touch</h4>
            <p className="mt-2 max-w-md text-white/70">
              Questions about booking or services? We’re here to help.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/80">
              <a href="#book" className="rounded-lg bg-white/10 px-4 py-2 hover:bg-white/20">Book now</a>
              <a href="mailto:hello@novahealth.example" className="rounded-lg border border-white/20 px-4 py-2 hover:bg-white/10">Email us</a>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h5 className="text-lg font-semibold">Clinic</h5>
            <p className="mt-2 text-white/70">123 Aurora Way, Suite 300, Metropolis</p>
            <p className="text-white/70">Mon–Sat, 8:00 AM – 8:00 PM</p>
            <p className="mt-2 text-white/80">+1 (555) 123‑4567</p>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between text-xs text-white/50">
          <p>© {new Date().getFullYear()} Nova Health. All rights reserved.</p>
          <p>Privacy • Terms</p>
        </div>
      </div>
    </footer>
  );
}
