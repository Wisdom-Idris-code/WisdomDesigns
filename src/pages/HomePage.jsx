import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Hero } from '../components/Hero';
import { BusinessProblems } from '../components/BusinessProblems';
import { DemoPortfolio } from '../components/DemoPortfolio';
import { coreCapabilities } from '../data/servicesData';
import { 
  ArrowRight, 
  MessageSquare, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Smartphone, 
  CheckCircle2, 
  BookOpen, 
  Calendar, 
  Search 
} from 'lucide-react';

const iconMap = {
  MessageSquare,
  BookOpen,
  Calendar,
  Search
};

export const HomePage = () => {
  return (
    <>
      <SEO 
        title="Professional Websites for Growing Businesses"
        description="Wisdom Digital creates modern, mobile-first websites for small and growing businesses with direct WhatsApp ordering, digital menus, and zero technical hassle."
        canonicalPath="/"
      />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Problem / Value Proposition Section */}
      <BusinessProblems />

      {/* 3. Core Solutions Overview (High-level capabilities linking to /services) */}
      <section className="section" id="services-overview">
        <div className="container">
          <header className="section-header">
            <span className="section-tag">What We Build</span>
            <h2 className="section-title">High-Converting Digital Solutions</h2>
            <p className="section-subtitle">
              We design lightweight, high-performance websites built specifically to generate inquiries, orders, and repeat business.
            </p>
          </header>

          <div className="problems-grid">
            {coreCapabilities.map((cap, idx) => {
              const IconComp = iconMap[cap.icon] || Sparkles;
              return (
                <article key={idx} className="problem-card">
                  <div className="problem-icon-wrapper">
                    <IconComp size={24} />
                  </div>
                  <h3 className="problem-title">{cap.title}</h3>
                  <p className="problem-desc">{cap.desc}</p>
                </article>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/services" className="btn btn-primary btn-lg">
              <span>Explore All Services & Solutions</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Selected Work / Featured Concept Demonstrations */}
      <DemoPortfolio 
        limit={2} 
        showHeader={true}
        showFilter={false}
        showFooterCta={true}
        title="Featured Work & Demonstrations"
        subtitle="Explore sample concept websites tailored for restaurants, salons, retail, and hospitality."
      />

      {/* 5. Quick Route Navigation Gateway (Clean links to dedicated pages) */}
      <section className="section" style={{ background: 'rgba(15, 23, 42, 0.4)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            {/* Pricing Gateway Card */}
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-card)',
              borderRadius: 'var(--radius-md)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <span className="section-tag" style={{ marginBottom: '0.75rem' }}>Transparent Rates</span>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Website Pricing & Packages</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                  Explore fixed-price packages in USD ($) and Sierra Leone Leones (NLe). No hidden fees or recurring traps.
                </p>
              </div>
              <div style={{ marginTop: '1.5rem' }}>
                <Link to="/pricing" className="btn btn-secondary" style={{ width: '100%' }}>
                  <span>View Pricing Packages →</span>
                </Link>
              </div>
            </div>

            {/* Process Gateway Card */}
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-card)',
              borderRadius: 'var(--radius-md)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <span className="section-tag" style={{ marginBottom: '0.75rem' }}>How We Work</span>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Our 6-Step Process</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                  Learn how we take your project from the initial WhatsApp conversation to a live, polished website.
                </p>
              </div>
              <div style={{ marginTop: '1.5rem' }}>
                <Link to="/process" className="btn btn-secondary" style={{ width: '100%' }}>
                  <span>See How It Works →</span>
                </Link>
              </div>
            </div>

            {/* Care Plans Gateway Card */}
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-card)',
              borderRadius: 'var(--radius-md)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <span className="section-tag" style={{ background: 'rgba(16, 185, 129, 0.12)', borderColor: 'rgba(16, 185, 129, 0.3)', color: '#34d399', marginBottom: '0.75rem' }}>
                  Optional Support
                </span>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Website Care Plans</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                  Need monthly menu updates, hosting, and security? Discover our optional care and maintenance plans.
                </p>
              </div>
              <div style={{ marginTop: '1.5rem' }}>
                <Link to="/care" className="btn btn-secondary" style={{ width: '100%' }}>
                  <span>Explore Care Plans →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Final High-Impact Conversion CTA Banner */}
      <section className="section" style={{ background: 'radial-gradient(ellipse at center, rgba(37, 99, 235, 0.15) 0%, rgba(8, 13, 26, 0.95) 75%)' }}>
        <div className="container">
          <div style={{ 
            background: 'rgba(15, 23, 42, 0.85)', 
            border: '1px solid var(--border-card)', 
            borderRadius: 'var(--radius-lg)', 
            padding: '3.5rem 2rem', 
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto',
            boxShadow: 'var(--shadow-glow-blue)'
          }}>
            <span className="section-tag" style={{ marginBottom: '1.25rem' }}>Ready to Grow?</span>
            <h2 style={{ fontSize: '2.4rem', marginBottom: '1.25rem' }}>
              Let's Build a Website Your Customers Will Love.
            </h2>
            <p style={{ maxWidth: '640px', margin: '0 auto 2.5rem auto', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
              Tell us about your business today. We'll provide a free design strategy and fixed quote within a few hours.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary btn-lg">
                <span>Start Your Project</span>
                <ArrowRight size={18} />
              </Link>
              <a 
                href="https://wa.me/23200000000?text=Hello%20Wisdom%20Digital,%20I%20would%20like%20to%20discuss%20a%20website%20for%20my%20business." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp btn-lg"
              >
                <MessageSquare size={18} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
