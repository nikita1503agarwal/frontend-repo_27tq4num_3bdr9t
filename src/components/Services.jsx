import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Rocket, LineChart, Bot } from 'lucide-react';

const services = [
  {
    icon: <Code2 className="h-6 w-6" />,
    title: 'Web Development',
    desc: 'Custom, responsive websites built for speed, accessibility, and conversions.'
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    title: 'SEO & Growth',
    desc: 'Rank on Google with technical SEO, on-page optimization, and fast performance.'
  },
  {
    icon: <Bot className="h-6 w-6" />,
    title: 'AI Automation',
    desc: 'Chatbots, lead capture, and analytics to automate your business workflows.'
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: 'Maintenance',
    desc: 'Ongoing support, updates, and security for peace of mind.'
  }
];

const Services = () => {
  return (
    <section id="services" className="relative w-full bg-neutral-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          className="text-balance text-center text-3xl font-bold md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Full-Stack Services That Drive Results
        </motion.h2>
        <motion.p
          className="mx-auto mt-3 max-w-2xl text-center text-violet-100/80"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          Everything you need to design, launch, and grow a high-converting website.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 backdrop-blur transition hover:border-violet-500/40"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                {s.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-violet-100/80">{s.desc}</p>
              <div className="mt-6 h-1 w-0 rounded bg-gradient-to-r from-fuchsia-500 to-violet-500 transition-all duration-300 group-hover:w-24" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
