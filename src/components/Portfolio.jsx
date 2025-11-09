import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { title: 'GymGrow', tag: 'Gym', color: 'from-violet-500 to-fuchsia-500' },
  { title: 'CafeCloud', tag: 'Café', color: 'from-rose-500 to-amber-500' },
  { title: 'ShopSwift', tag: 'E‑Commerce', color: 'from-emerald-500 to-cyan-500' },
  { title: 'BizBoost', tag: 'Business', color: 'from-blue-500 to-indigo-500' },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative w-full bg-neutral-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          className="text-balance text-center text-3xl font-bold md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Selected Work
        </motion.h2>
        <motion.p
          className="mx-auto mt-3 max-w-2xl text-center text-violet-100/80"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          Hover to tilt and explore. Each project is engineered for speed, SEO, and conversions.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#contact"
              className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              style={{ transformStyle: 'preserve-3d' }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ rotateX: -6, rotateY: 6, z: 10 }}
            >
              <div className={`absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${p.color} opacity-30 blur-2xl transition group-hover:opacity-60`} />
              <div className="relative z-10">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-violet-100">{p.tag}</span>
                <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-violet-100/80">Conversion‑focused UX, blazing performance, and clean aesthetics.</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
