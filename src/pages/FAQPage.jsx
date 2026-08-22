import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { FAQ } from '../components/FAQ';
import { MessageSquare, ArrowRight, HelpCircle, ShieldCheck } from 'lucide-react';

export const FAQPage = () => {
  return (
    <>
      <SEO 
        title="Frequently Asked Questions (FAQ)"
        description="Find answers to common questions about working with Wisdom Designs: pricing, timelines, domain ownership, WhatsApp ordering, and website care plans."
        canonicalPath="/faq"
      />

      {/* Page Hero Header */}
      <section className="page-hero-header">
        <div className="container">
          <span className="section-tag">Got Questions?</span>
          <h1 className="page-hero-title">
            Frequently Asked <span className="highlight">Questions</span>
          </h1>
          <p className="page-hero-subtitle">
            Find quick, transparent answers about our design packages, delivery timelines, domain setup, payment options, and ongoing maintenance.
          </p>
        </div>
      </section>

      {/* Full 10 Accordion FAQ Component */}
      <FAQ showHeader={false} showContactCta={true} />

      {/* Additional Help / Direct WhatsApp Channel */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="problems-solution-banner">
            <div className="solution-banner-text">
              <h3>Still have questions or need advice for your unique setup?</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                We're always here to help. Send us a message on WhatsApp or book a free discovery chat.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a 
                href="https://wa.me/23200000000?text=Hello%20Wisdom%20Designs,%20I%20have%20a%20question%20about%20your%20services." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp"
              >
                <MessageSquare size={16} />
                <span>Chat on WhatsApp</span>
              </a>
              <Link to="/contact" className="btn btn-primary">
                <span>Start a Project</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
