import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/30">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-500" />
              <span className="text-lg font-semibold tracking-tight text-white">Nova Health</span>
            </div>
            <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#about" className="hover:text-white">About</a>
              <a href="#contact" className="hover:text-white">Contact</a>
              <a href="#book" className="rounded-lg bg-white/10 px-4 py-2 font-medium text-white hover:bg-white/20">Book</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
