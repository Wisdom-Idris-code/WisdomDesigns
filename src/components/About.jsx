import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, HeartHandshake, Target, ArrowRight, Code2, Zap, Globe } from 'lucide-react';

export const About = ({ showCta = true, showHeader = true }) => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Story & Mission */}
          <div className="about-content">
            {showHeader && <span className="section-tag">About Wisdom Designs</span>}
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
              Empowering Growing Businesses in the Digital Age
            </h2>
            
            <div className="about-text">
              <p>
                <strong>Wisdom Designs</strong> is an independent freelance web development and digital solutions studio founded by Wisdom Idris. We help local businesses, restaurants, boutiques, and service enterprises thrive online.
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
                  <span>Work With Wisdom Designs</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            )}
          </div>

          {/* Right Column: Founder Profile Card */}
          <div className="about-founder-card">
            {/* Glow ring + photo */}
            <div className="founder-photo-wrap">
              <div className="founder-photo-ring" />
              <img
                src="/profile.jpg"
                alt="Wisdom Idris — Founder & Lead Developer"
                className="founder-photo"
              />
              {/* Online badge */}
              <span className="founder-badge">
                <span className="founder-badge-dot" />
                Available for Projects
              </span>
            </div>

            {/* Name & title */}
            <div className="founder-identity">
              <h3 className="founder-name">Wisdom Idris</h3>
              <p className="founder-role">Founder &amp; Lead Developer</p>
            </div>

            {/* Skill chips */}
            <div className="founder-skills">
              <span className="skill-chip"><Code2 size={13} /> Full-Stack Dev</span>
              <span className="skill-chip"><Zap size={13} /> Performance</span>
              <span className="skill-chip"><Globe size={13} /> Web Strategy</span>
            </div>

            {/* Stats bar */}
            <div className="founder-stats">
              <div className="founder-stat">
                <strong>100%</strong>
                <span>Mobile Optimized</span>
              </div>
              <div className="founder-stat-divider" />
              <div className="founder-stat">
                <strong style={{ color: 'var(--whatsapp-green)' }}>1-Tap</strong>
                <span>WhatsApp Orders</span>
              </div>
              <div className="founder-stat-divider" />
              <div className="founder-stat">
                <strong style={{ color: 'var(--amber-gold)' }}>0%</strong>
                <span>Hidden Fees</span>
              </div>
            </div>

            {/* Trust badge */}
            <div className="founder-trust">
              <ShieldCheck size={17} style={{ color: 'var(--accent-light)', flexShrink: 0 }} />
              <p>
                Every project is handled personally — from strategy and design to launch and handover.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
