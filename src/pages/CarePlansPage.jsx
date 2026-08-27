import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { CarePlans } from '../components/CarePlans';
import { ShieldCheck, Check, Clock, RefreshCw, MessageSquare, ArrowRight, LifeBuoy } from 'lucide-react';

export const CarePlansPage = () => {
  return (
    <>
      <SEO 
        title="Website Care & Maintenance Plans"
        description="Optional monthly website care plans: Essential ($20/mo), Business ($35/mo), and Premium ($50/mo). Keep your website secure, fast, and updated."
        canonicalPath="/care"
      />

      {/* Page Hero Header */}
      <section className="page-hero-header">
        <div className="container">
          <span className="section-tag" style={{ background: 'rgba(16, 185, 129, 0.12)', borderColor: 'rgba(16, 185, 129, 0.3)', color: '#34d399' }}>
            Peace of Mind
          </span>
          <h1 className="page-hero-title">
            Website Care & <span className="highlight">Monthly Maintenance</span>
          </h1>
          <p className="page-hero-subtitle">
            Focus on running your business while we handle cloud hosting, security monitoring, regular backups, and monthly content/menu updates.
          </p>
        </div>
      </section>

      {/* Full Care Plans Component with Currency Switcher & Optional Notice */}
      <CarePlans showTitle={false} />

      {/* Why Choose a Care Plan? */}
      <section className="section" style={{ background: 'rgba(15, 23, 42, 0.4)' }}>
        <div className="container">
          <header className="section-header">
            <span className="section-tag">Why Subscribe</span>
            <h2 className="section-title">What Makes Our Website Care Different</h2>
            <p className="section-subtitle">
              Unlike generic web hosts that leave you on your own, we are your dedicated personal web team on call.
            </p>
          </header>

          <div className="problems-grid">
            <article className="problem-card">
              <div className="problem-icon-wrapper" style={{ background: 'rgba(16, 185, 129, 0.15)', color: 'var(--whatsapp-green)' }}>
                <RefreshCw size={24} />
              </div>
              <h3 className="problem-title">Hassle-Free Content Updates</h3>
              <p className="problem-desc">
                Need to change a price, add a new menu dish, or announce holiday hours? Just text us on WhatsApp and we update it within hours.
              </p>
            </article>

            <article className="problem-card">
              <div className="problem-icon-wrapper" style={{ background: 'rgba(37, 99, 235, 0.15)', color: 'var(--accent-light)' }}>
                <ShieldCheck size={24} />
              </div>
              <h3 className="problem-title">Continuous Security & Backups</h3>
              <p className="problem-desc">
                We monitor your website 24/7 for uptime, renew your SSL security certificates, and store off-site backups so you never lose data.
              </p>
            </article>

            <article className="problem-card">
              <div className="problem-icon-wrapper" style={{ background: 'rgba(245, 158, 11, 0.15)', color: 'var(--amber-gold)' }}>
                <LifeBuoy size={24} />
              </div>
              <h3 className="problem-title">Fast-Track WhatsApp Support</h3>
              <p className="problem-desc">
                Skip long ticket queues. Get direct access to your lead developer via WhatsApp whenever you have questions or ideas.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="section" style={{ background: 'rgba(8, 13, 26, 0.95)' }}>
        <div className="container">
          <div className="problems-solution-banner">
            <div className="solution-banner-text">
              <h3>Have an existing website that needs reliable maintenance?</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                We can take over maintenance and hosting for websites built elsewhere as well.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact?service=care" className="btn btn-primary">
                <span>Inquire About Care Plans</span>
                <ArrowRight size={16} />
              </Link>
              <a 
                href="https://wa.me/23272116425?text=Hello%20Wisdom%20Designs,%20I%20would%20like%20to%20ask%20about%20your%20Website%20Care%20Plans." 
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
