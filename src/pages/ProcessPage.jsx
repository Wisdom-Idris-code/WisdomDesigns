import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { processData } from '../data/processData';
import { 
  MessageSquare, 
  Compass, 
  FileText, 
  Code2, 
  CheckSquare, 
  Rocket, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Check 
} from 'lucide-react';

const iconMap = {
  MessageSquare,
  Compass,
  FileText,
  Code2,
  CheckSquare,
  Rocket
};

export const ProcessPage = () => {
  return (
    <>
      <SEO 
        title="Our Process — How It Works"
        description="Learn about our simple, stress-free 6-step website design and development process from discovery and consultation to live launch and handover."
        canonicalPath="/process"
      />

      {/* Page Hero Header */}
      <section className="page-hero-header">
        <div className="container">
          <span className="section-tag">How It Works</span>
          <h1 className="page-hero-title">
            From First Conversation to <span className="highlight">Official Launch</span>
          </h1>
          <p className="page-hero-subtitle">
            We've refined our web development process into 6 clear, transparent steps so you always know exactly what to expect without stressful surprises.
          </p>
        </div>
      </section>

      {/* Step-by-Step Process Timeline */}
      <section className="section" style={{ paddingTop: '1.5rem' }}>
        <div className="container">
          <div className="process-timeline-wrapper">
            {processData.map((step, idx) => {
              const IconComp = iconMap[step.icon] || MessageSquare;
              const isEven = idx % 2 === 1;

              return (
                <div key={step.step} className={`process-timeline-item ${isEven ? 'item-reverse' : ''}`}>
                  {/* Step Number & Icon Circle */}
                  <div className="process-step-badge-col">
                    <div className="process-circle-badge">
                      <span className="process-number-label">{step.step}</span>
                      <IconComp size={24} className="process-icon-inner" />
                    </div>
                  </div>

                  {/* Step Details Box */}
                  <div className="process-card-content">
                    <div className="process-card-header">
                      <span className="process-step-pill">Step {step.step}</span>
                      <h3 className="process-card-title">{step.title}</h3>
                    </div>
                    <p className="process-card-desc">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Need From You */}
      <section className="section" style={{ background: 'rgba(15, 23, 42, 0.4)' }}>
        <div className="container">
          <header className="section-header">
            <span className="section-tag">What to Prepare</span>
            <h2 className="section-title">What We Need From You to Get Started</h2>
            <p className="section-subtitle">
              You don't need technical skills or finished copy. Just a few essentials to help us build your website accurately.
            </p>
          </header>

          <div className="problems-grid">
            <article className="problem-card">
              <div className="problem-icon-wrapper">
                <FileText size={24} />
              </div>
              <h3 className="problem-title">Your Menu or Service List</h3>
              <p className="problem-desc">
                A simple text, Word document, or WhatsApp list of your items, descriptions, and current prices.
              </p>
            </article>

            <article className="problem-card">
              <div className="problem-icon-wrapper">
                <CheckSquare size={24} />
              </div>
              <h3 className="problem-title">Photos of Your Business</h3>
              <p className="problem-desc">
                High-quality photos of your food, venue, products, or team. If you don't have any, we supply curated licensed imagery for you.
              </p>
            </article>

            <article className="problem-card">
              <div className="problem-icon-wrapper">
                <MessageSquare size={24} />
              </div>
              <h3 className="problem-title">Contact & Location Info</h3>
              <p className="problem-desc">
                Your business WhatsApp phone number, physical address, working hours, and any social media links.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Ready to get started? CTA Banner */}
      <section className="section" style={{ background: 'radial-gradient(ellipse at center, rgba(37, 99, 235, 0.15) 0%, rgba(8, 13, 26, 0.95) 75%)' }}>
        <div className="container">
          <div style={{
            background: 'rgba(15, 23, 42, 0.8)',
            border: '1px solid var(--border-card)',
            borderRadius: 'var(--radius-lg)',
            padding: '3.5rem 2rem',
            textAlign: 'center',
            maxWidth: '850px',
            margin: '0 auto',
            boxShadow: 'var(--shadow-glow-blue)'
          }}>
            <span className="section-tag" style={{ marginBottom: '1rem' }}>Get in Touch</span>
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1rem' }}>
              Ready to get started?
            </h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 2rem auto', color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
              Let's schedule a free 15-minute discovery consultation on WhatsApp to map out your new website.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary btn-lg">
                <span>Start a Project</span>
                <ArrowRight size={18} />
              </Link>
              <a 
                href="https://wa.me/23200000000?text=Hello%20Wisdom%20Digital,%20I%20would%20like%20to%20start%20step%201%20and%20discuss%20a%20website%20for%20my%20business." 
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
