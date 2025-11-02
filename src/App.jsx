import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white">
      <Header />
      <main>
        <Hero />
        <section id="about" className="bg-white dark:bg-neutral-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About PulseCare</h2>
                <p className="mt-4 text-neutral-600 dark:text-neutral-400">
                  We are a technology‑first healthcare provider combining compassionate clinicians with modern digital tools. Our mission is to make quality care accessible, coordinated, and transparent for everyone.
                </p>
                <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
                  <li className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4"><span className="font-semibold">50k+</span> patients served</li>
                  <li className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4"><span className="font-semibold">150+</span> doctors onboard</li>
                  <li className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4"><span className="font-semibold">30+</span> partner labs</li>
                  <li className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4"><span className="font-semibold">24/7</span> care support</li>
                </ul>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop"
                  alt="Modern clinic"
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>
        <Services />
      </main>
      <Footer />
    </div>
  );
}
