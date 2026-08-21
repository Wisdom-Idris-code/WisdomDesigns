import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, HeartHandshake, Target, ArrowRight } from 'lucide-react';

export const About = ({ showCta = true, showHeader = true }) => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Story & Mission */}
          <div className="about-content">
            {showHeader && <span className="section-tag">About Wisdom Digital</span>}
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
              Empowering Growing Businesses in the Digital Age
            </h2>
            
            <div className="about-text">
              <p>
                <strong>Wisdom Digital</strong> is an independent freelance web development and digital solutions studio founded by Wisdom Idris. We help local businesses, restaurants, boutiques, and service enterprises thrive online.
              </p>
              <p>
                Too many incredible businesses lose high-value customers simply because they do not have a modern, fast-loading mobile presence. They rely solely on social media posts that vanish after 24 hours or struggle with sending messy PDF menus on WhatsApp.
              </p>
              <p>
                We bridge that gap by building conversion-focused websites that look stunning, load in under 2 seconds, and integrate seamlessly with WhatsApp for direct, frictionless orders and bookings.
              </p>
            </div>

            <div className="about-values-grid" style={{ marginTop: '2rem' }}>
              <div className="value-box">
                <Target size={22} style={{ color: 'var(--accent-light)', marginBottom: '0.5rem' }} />
                <h4>Revenue-Focused Design</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Every page, menu item, and button is engineered to turn casual visitors into paying customers.
                </p>
              </div>

              <div className="value-box">
                <HeartHandshake size={22} style={{ color: 'var(--whatsapp-green)', marginBottom: '0.5rem' }} />
                <h4>Zero Technical Jargon</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  We speak in clear business terms, handle every technical detail, and hand over 100% full ownership.
                </p>
              </div>
            </div>

            {showCta && (
              <div style={{ marginTop: '2.5rem' }}>
                <Link to="/contact" className="btn btn-primary">
                  <span>Work With Wisdom Digital</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            )}
          </div>

          {/* Right Column: Brand Card & Values */}
          <div className="about-image-card">
            <img 
              src="/WisdomDigital-Logo1.png" 
              alt="Wisdom Digital" 
              className="about-logo-preview"
              style={{ width: '80px', height: '80px', margin: '0 auto 1.25rem auto' }}
            />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>Wisdom Digital</h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Dedicated freelance web development business.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem', textAlign: 'center' }}>
              <div>
                <strong style={{ display: 'block', fontSize: '1.4rem', color: 'var(--accent-light)' }}>100%</strong>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Mobile Optimized</span>
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '1.4rem', color: 'var(--whatsapp-green)' }}>1-Tap</strong>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>WhatsApp Orders</span>
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '1.4rem', color: 'var(--amber-gold)' }}>0%</strong>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Hidden Fees</span>
              </div>
            </div>

            <div style={{ marginTop: '1.75rem', background: 'rgba(255, 255, 255, 0.02)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                <ShieldCheck size={18} style={{ color: 'var(--accent-light)' }} />
                <strong style={{ fontSize: '0.88rem', color: 'var(--text-primary)' }}>Founder & Lead Developer</strong>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0 }}>
                Led by Wisdom Idris, working directly with each client from strategy to launch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
