import React from 'react';
import { Calendar, Heart, Phone, Shield } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Primary Care',
    desc: 'Preventive checkups, wellness plans, and ongoing care tailored to you.'
  },
  {
    icon: Calendar,
    title: 'Fast Appointments',
    desc: 'Schedule and manage visits with quick confirmations and reminders.'
  },
  {
    icon: Phone,
    title: 'Telehealth',
    desc: 'Secure video consultations so you can get care from anywhere.'
  },
  {
    icon: Shield,
    title: 'Trusted & Secure',
    desc: 'Your data is protected with industry‑standard security and privacy.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-[#0b0b12] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Everything you need for better care</h2>
          <p className="mt-3 text-white/70">Modern tools and a caring team to support your health journey.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/20 hover:bg-white/10"
            >
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-fuchsia-500/30 to-indigo-500/30 p-3 text-white">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
