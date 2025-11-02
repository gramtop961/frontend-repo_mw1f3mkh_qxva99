import { Heart, Syringe, FlaskConical, Pill, Truck } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const services = [
  {
    title: 'Doctor Consultations',
    desc: 'In‑person and virtual visits with verified specialists across cardiology, pediatrics, dermatology, and more.',
    icon: Heart,
    accent: 'from-orange-500 to-pink-500',
  },
  {
    title: 'Pharmacy & Medical Store',
    desc: 'Order prescription and OTC medicines with same‑day delivery and easy refills at best prices.',
    icon: Pill,
    accent: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Lab & Diagnostics',
    desc: 'Home sample collection, advanced imaging, and NABL certified partner labs with fast turnarounds.',
    icon: FlaskConical,
    accent: 'from-fuchsia-500 to-rose-500',
  },
  {
    title: 'Vaccinations & Preventive Care',
    desc: 'Stay protected with scheduled vaccinations and wellness checks for all age groups.',
    icon: Syringe,
    accent: 'from-rose-500 to-orange-500',
  },
  {
    title: 'Home Care & Delivery',
    desc: 'Care at your doorstep — nursing assistance, device rentals, and medicine delivery.',
    icon: Truck,
    accent: 'from-pink-500 to-purple-500',
  },
];

const slides = [
  'https://images.unsplash.com/photo-1580281657527-47f249e8f2f5?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581525640524-c3828a26e65b?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?q=80&w=1600&auto=format&fit=crop',
];

export default function Services() {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const width = el.clientWidth;
    el.scrollTo({ left: index * (width * 0.8 + 16), behavior: 'smooth' });
  }, [index]);

  return (
    <section id="services" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">Comprehensive Care, One Platform</h2>
          <p className="mt-3 text-neutral-600">From first consultation to recovery — experience seamless, coordinated healthcare services.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, desc, icon: Icon, accent }) => (
            <div key={title} className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${accent} text-white shadow-md`}>
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{desc}</p>
              <button className="mt-4 inline-flex text-sm font-semibold text-orange-600 hover:text-orange-500">Learn more →</button>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="flex items-end justify-between">
            <h3 className="text-xl font-semibold text-neutral-900">Inside Our Clinics</h3>
            <div className="flex gap-2">
              <button onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)} className="rounded-full border border-neutral-300 px-3 py-1 text-sm text-neutral-700 hover:bg-neutral-100">Prev</button>
              <button onClick={() => setIndex((i) => (i + 1) % slides.length)} className="rounded-full border border-neutral-300 px-3 py-1 text-sm text-neutral-700 hover:bg-neutral-100">Next</button>
            </div>
          </div>

          <div
            ref={trackRef}
            className="mt-4 flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {slides.map((src, i) => (
              <div key={src} className="relative h-64 sm:h-80 lg:h-96 w-[80%] sm:w-[60%] lg:w-[40%] shrink-0 snap-center overflow-hidden rounded-2xl">
                <img src={src} alt={`Clinic ${i + 1}`} className="h-full w-full object-cover" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-orange-50 to-transparent" />
    </section>
  );
}
