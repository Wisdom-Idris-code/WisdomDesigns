import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Pricing } from '../components/Pricing';
import { FAQ } from '../components/FAQ';
import { ShieldCheck, HelpCircle, ArrowRight, MessageSquare, Check } from 'lucide-react';

export const PricingPage = () => {
  return (
    <>
      <SEO 
        title="Website Pricing & Packages"
        description="Clear, transparent pricing packages for web development: Starter ($200–$300), Business ($350–$450), Premium ($500–$700), and Custom solutions in USD and NLe."
        canonicalPath="/pricing"
      />

      {/* Page Hero Header */}
      <section className="page-hero-header">
        <div className="container">
          <span className="section-tag">Simple & Transparent Rates</span>
          <h1 className="page-hero-title">
            Clear Pricing, <span className="highlight">Zero Hidden Agency Fees</span>
          </h1>
          <p className="page-hero-subtitle">
            Choose the package that fits your business needs. Switch between US Dollars ($) and Sierra Leone Leones (NLe) anytime.
          </p>
        </div>
      </section>

      {/* Pricing Matrix Component */}
      <Pricing showTitle={false} showCareLink={true} />

      {/* Pricing FAQs */}
      <section className="section" style={{ background: 'rgba(15, 23, 42, 0.4)' }}>
        <div className="container">
          <header className="section-header">
            <span className="section-tag">Pricing Questions</span>
            <h2 className="section-title">Common Questions About Pricing</h2>
            <p className="section-subtitle">
              Everything you need to know about payment terms, deposits, and what is included.
            </p>
          </header>

          <FAQ limit={4} showHeader={false} showContactCta={false} />

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/faq" className="btn btn-secondary">
              <span>View All 10 Frequently Asked Questions →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Direct Contact Banner */}
      <section className="section" style={{ background: 'rgba(8, 13, 26, 0.95)' }}>
        <div className="container">
          <div className="problems-solution-banner">
            <div className="solution-banner-text">
              <h3>Have a custom budget or unique feature requirements?</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                We're always happy to craft a tailored scope of work for your specific business goals.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">
                <span>Request Custom Quote</span>
                <ArrowRight size={16} />
              </Link>
              <a 
                href="https://wa.me/23200000000?text=Hello%20Wisdom%20Digital,%20I%20would%20like%20to%20discuss%20pricing%20options."
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp"
              >
                <MessageSquare size={16} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
