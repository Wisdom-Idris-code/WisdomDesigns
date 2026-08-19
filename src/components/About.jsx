import React from 'react';
import { Award, Compass, Heart, Shield } from 'lucide-react';

export const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Story & Mission */}
          <div className="about-content">
            <span className="section-tag">About Wisdom Digital</span>
            <h2>Empowering Local & Growing Businesses in the Digital Age</h2>
            
            <div className="about-text">
              <p>
                <strong>Wisdom Digital</strong> is a dedicated freelance web development and digital solutions business based in Sierra Leone. We exist to bridge the gap between traditional small businesses and modern internet commerce.
              </p>
              <p>
                Too many incredible local businesses—from beloved restaurants and bustling salons to boutique hotels and retail shops—miss out on customers every day simply because they lack an accessible, fast-loading mobile presence.
              </p>
              <p>
                Our mission is simple: provide business owners with world-class, conversion-focused websites that look stunning, load fast on mobile devices, and make it effortless for customers to browse, inquire, and order via WhatsApp.
              </p>
            </div>

            <div className="about-values-grid">
              <div className="value-box">
                <h4>Customer-First Design</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  We design for your actual customers: intuitive menus, clear pricing, and 1-tap ordering.
                </p>
              </div>

              <div className="value-box">
                <h4>No Developer Jargon</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  We communicate in clear, honest business terms and handle every technical detail for you.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Brand Badge & Values */}
          <div className="about-image-card">
            <img 
              src="/WisdomDigital-Logo1.png" 
              alt="Wisdom Digital" 
              className="about-logo-preview"
            />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Wisdom Digital</h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Your dedicated freelance web development partner.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
              <div>
                <strong style={{ display: 'block', fontSize: '1.4rem', color: 'var(--accent-light)' }}>100%</strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Mobile Optimized</span>
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '1.4rem', color: 'var(--whatsapp-green)' }}>WhatsApp</strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Order Ready</span>
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '1.4rem', color: 'var(--amber-gold)' }}>0%</strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Hidden Fees</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
