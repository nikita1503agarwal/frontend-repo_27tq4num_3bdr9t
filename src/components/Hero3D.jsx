import React, { useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Rocket } from 'lucide-react';

const Hero3D = () => {
  const containerRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useTransform(my, [-200, 200], [10, -10]);
  const rotateY = useTransform(mx, [-200, 200], [-10, 10]);
  const translateZ = useTransform(mx, [-200, 200], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    mx.set(x);
    my.set(y);
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full overflow-hidden bg-neutral-950 text-white"
      aria-label="AviraHub — Web Development & AI Automation"
    >
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Top gradient glow overlay - pointer events disabled to keep scene interactive */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-violet-600/20 via-transparent to-indigo-900/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
        <motion.div
          style={{ rotateX, rotateY, translateZ }}
          className="will-change-transform"
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
            <Rocket className="h-4 w-4 text-violet-400" />
            <span className="text-xs font-medium tracking-wide text-violet-200">Web Development • SEO • AI Automation</span>
          </div>
          <h1 className="mx-auto max-w-4xl text-balance text-4xl font-extrabold leading-tight md:text-6xl">
            We Build Websites That Grow Your Business
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-pretty text-base text-violet-100/90 md:text-lg">
            From gyms to cafés, startups to eCommerce — AviraHub creates fast, SEO-friendly websites that convert visitors into clients.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-600"
            >
              <span className="absolute inset-0 -z-0 bg-gradient-to-r from-fuchsia-500 to-violet-500 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-70" />
              <span className="relative">Get My Website</span>
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              See Examples
            </a>
          </div>
        </motion.div>

        {/* Floating cards for depth */}
        <motion.div
          className="pointer-events-none mt-16 grid w-full max-w-5xl grid-cols-2 gap-4 md:grid-cols-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          {[
            'Responsive Design',
            'Lightning Performance',
            'SEO-Optimized',
            'AI Automation',
          ].map((label, i) => (
            <motion.div
              key={label}
              style={{ rotateX, rotateY }}
              className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-violet-100 shadow-[0_0_20px_rgba(124,58,237,0.15)] backdrop-blur will-change-transform"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
            >
              {label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero3D;
