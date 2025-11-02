import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative isolate h-[88vh] w-full overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle dark overlays to ensure text contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_center,rgba(255,255,255,0.18),rgba(0,0,0,0)_45%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center text-white">
        <h1 className="max-w-3xl bg-clip-text text-4xl font-extrabold leading-tight text-white drop-shadow md:text-6xl">
          Compassionate Care, Cosmic Calm
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">
          Book appointments, chat with doctors, and manage your health in a modern, secure experience.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#book"
            className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition hover:from-fuchsia-400 hover:to-indigo-400"
          >
            Book Appointment
          </a>
          <a
            href="#services"
            className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}
