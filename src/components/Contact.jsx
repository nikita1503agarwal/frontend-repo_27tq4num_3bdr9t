import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full bg-neutral-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          className="text-balance text-center text-3xl font-bold md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Start Your Website Project Today
        </motion.h2>
        <motion.p
          className="mx-auto mt-3 max-w-2xl text-center text-violet-100/80"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          Tell us about your business and goals. We’ll get back within 24 hours.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.form
            action="#"
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm text-violet-100/80">Name</label>
                <input type="text" required className="mt-1 w-full rounded-lg border border-white/10 bg-neutral-900/80 px-3 py-2 outline-none ring-violet-500 focus:ring" />
              </div>
              <div>
                <label className="text-sm text-violet-100/80">Email</label>
                <input type="email" required className="mt-1 w-full rounded-lg border border-white/10 bg-neutral-900/80 px-3 py-2 outline-none ring-violet-500 focus:ring" />
              </div>
              <div>
                <label className="text-sm text-violet-100/80">Phone</label>
                <input type="tel" className="mt-1 w-full rounded-lg border border-white/10 bg-neutral-900/80 px-3 py-2 outline-none ring-violet-500 focus:ring" />
              </div>
              <div>
                <label className="text-sm text-violet-100/80">Business Type</label>
                <select className="mt-1 w-full rounded-lg border border-white/10 bg-neutral-900/80 px-3 py-2 outline-none ring-violet-500 focus:ring">
                  <option>Gym / Fitness</option>
                  <option>Café / Restaurant</option>
                  <option>E‑Commerce</option>
                  <option>Startup / SaaS</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-violet-100/80">Message</label>
                <textarea rows={5} className="mt-1 w-full rounded-lg border border-white/10 bg-neutral-900/80 px-3 py-2 outline-none ring-violet-500 focus:ring" placeholder="What do you want to build?" />
              </div>
            </div>
            <button type="submit" className="mt-6 inline-flex items-center justify-center rounded-lg bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-500">
              Send Message
            </button>
          </motion.form>

          <div className="space-y-6">
            <motion.div
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 backdrop-blur"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold">Why AviraHub?</h3>
              <ul className="mt-3 list-inside list-disc text-sm text-violet-100/80">
                <li>SEO-first approach for higher Google rankings.</li>
                <li>3D and motion design for premium brand feel.</li>
                <li>Performance-obsessed builds that convert.</li>
              </ul>
            </motion.div>
            <motion.div
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-violet-100/80">Call / WhatsApp</p>
                <a href="https://wa.me/919999999999" className="text-base font-medium text-white hover:underline">+91 99999 99999</a>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-violet-100/80">Email</p>
                <a href="mailto:hello@avirahub.in" className="text-base font-medium text-white hover:underline">hello@avirahub.in</a>
              </div>
            </motion.div>
            <a href="https://wa.me/919999999999" className="fixed bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400">
              <MessageSquare className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
        </div>

        {/* LocalBusiness Schema for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'AviraHub',
          url: 'https://avirahub.in',
          telephone: '+91 99999 99999',
          email: 'hello@avirahub.in',
          address: { '@type': 'PostalAddress', addressCountry: 'IN' },
          image: 'https://images.unsplash.com/photo-1717913488994-6dcd2626f3a0?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3MDA5MDd8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
          sameAs: ['https://avirahub.in']
        }) }} />
      </div>
    </section>
  );
};

export default Contact;
