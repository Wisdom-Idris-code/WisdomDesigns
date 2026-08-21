import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { DemoPortfolio } from '../components/DemoPortfolio';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

export const WorkPage = () => {
  return (
    <>
      <SEO 
        title="Our Work & Portfolio"
        description="Explore our demonstration portfolio and concept projects showing how Wisdom Digital builds fast, conversion-focused websites for restaurants, salons, hotels, and businesses."
        canonicalPath="/work"
      />

      {/* Page Hero Header */}
      <section className="page-hero-header">
        <div className="container">
          <span className="section-tag">Portfolio & Showcase</span>
          <h1 className="page-hero-title">
            Websites Built for <span className="highlight">Real Business Results</span>
          </h1>
          <p className="page-hero-subtitle">
            Explore our showcase of purpose-built concept websites and client demonstrations. Each project illustrates mobile optimization, interactive catalogs, and seamless 1-click WhatsApp ordering.
          </p>
        </div>
      </section>

      {/* Full Filterable Portfolio */}
      <DemoPortfolio 
        showHeader={false}
        showFilter={true}
        showFooterCta={false}
      />

      {/* Conversion Banner */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="problems-solution-banner">
            <div className="solution-banner-text">
              <h3>Have a specific vision for your business website?</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                We can create a custom design tailored specifically to your menu, inventory, or booking schedule.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">
                <span>Start Your Project</span>
                <ArrowRight size={16} />
              </Link>
              <a 
                href="https://wa.me/23200000000?text=Hello%20Wisdom%20Digital,%20I%20reviewed%20your%20portfolio%20and%20want%20to%20discuss%20a%20website%20for%20my%20business."
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
