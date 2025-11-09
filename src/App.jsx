import React, { useEffect } from 'react';
import Hero3D from './components/Hero3D';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // Basic SEO meta tags injection. In a real multi-page setup, use a router + head manager.
    document.title = 'Need a Website for Your Business | Best Web Development Company in India – AviraHub';
    const meta = [
      { name: 'description', content: 'AviraHub builds SEO-optimized, responsive, and AI-powered websites for businesses, gyms, cafés, startups, and eCommerce brands.' },
      { name: 'keywords', content: 'need website for my business, need website for my café, need gym website, need website for my ecommerce business, hire web developer India, affordable website design India, web development company India, wordpress website developer, responsive website design, SEO-friendly website, website maintenance services India, AviraHub web solutions, AI automation for websites, web design agency India' },
      { property: 'og:title', content: 'AviraHub – Web Development & AI Automation Company in India' },
      { property: 'og:description', content: 'We create SEO-friendly, fast, and modern websites for all industries — from cafés and gyms to startups and eCommerce businesses. Contact AviraHub today.' },
      { property: 'og:url', content: 'https://avirahub.in' },
      { property: 'og:type', content: 'website' },
      { name: 'robots', content: 'index, follow' },
    ];
    meta.forEach((m) => {
      const el = document.querySelector(
        m.name ? `meta[name="${m.name}"]` : `meta[property="${m.property}"]`
      ) || document.createElement('meta');
      if (m.name) el.setAttribute('name', m.name);
      if (m.property) el.setAttribute('property', m.property);
      el.setAttribute('content', m.content);
      document.head.appendChild(el);
    });
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 antialiased">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-neutral-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-white">
          <a href="#home" className="text-lg font-bold">AviraHub</a>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#services" className="text-violet-100 hover:text-white">Services</a>
            <a href="#portfolio" className="text-violet-100 hover:text-white">Portfolio</a>
            <a href="#contact" className="text-violet-100 hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="rounded-full bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-500">
            Get a Quote
          </a>
        </div>
      </header>

      <main className="pt-16">
        <Hero3D />
        <Services />
        <Portfolio />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-neutral-950 py-8 text-center text-sm text-violet-100">
        © {new Date().getFullYear()} AviraHub — Web Development • SEO • AI Automation
      </footer>
    </div>
  );
}

export default App;
