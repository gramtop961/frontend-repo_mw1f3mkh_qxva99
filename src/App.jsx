import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#06060b] text-white">
      <Header />
      <main className="pt-24">
        <Hero />
        <Services />
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
