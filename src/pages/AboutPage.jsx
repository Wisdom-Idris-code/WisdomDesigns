import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { About } from '../components/About';
import { WhyUs } from '../components/WhyUs';
import { ArrowRight, MessageSquare, Target, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';

export const AboutPage = () => {
  return (
    <>
      <SEO 
        title="About Wisdom Designs"
        description="Learn about Wisdom Designs — an independent freelance web development business founded by Wisdom Idris, dedicated to helping local and growing businesses succeed online."
        canonicalPath="/about"
      />

      {/* Page Hero Header */}
      <section className="page-hero-header">
        <div className="container">
          <span className="section-tag">Our Story & Mission</span>
          <h1 className="page-hero-title">
            Your Dedicated <span className="highlight">Freelance Web Partner</span>
          </h1>
          <p className="page-hero-subtitle">
            Wisdom Designs was founded with a single mission: to help hardworking business owners build a clean, credible, and revenue-generating digital presence.
          </p>
        </div>
      </section>

      {/* Core About Story Component */}
      <About showCta={false} showHeader={false} />

      {/* Founder & Business Philosophy Section */}
      <section className="section" style={{ background: 'rgba(15, 23, 42, 0.4)' }}>
        <div className="container">
          <header className="section-header">
            <span className="section-tag">Founder & Philosophy</span>
            <h2 className="section-title">Built with Craftsmanship & Integrity</h2>
            <p className="section-subtitle">
              When you work with Wisdom Designs, you work directly with a dedicated developer who cares about your business outcome.
            </p>
          </header>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-card)',
              borderRadius: 'var(--radius-md)',
              padding: '2rem'
            }}>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '1rem', color: 'var(--accent-light)' }}>
                Who We Serve
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.65', marginBottom: '1.25rem' }}>
                We partner with local restaurants, takeaway joints, hair salons, barbershops, beauty spas, boutique hotels, medical practices, retail stores, and professional consultancies.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--whatsapp-green)' }} />
                  <span>Businesses seeking more direct WhatsApp inquiries</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--whatsapp-green)' }} />
                  <span>Restaurants needing clean, interactive digital menus</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--whatsapp-green)' }} />
                  <span>Salons & clinics wanting online appointment booking</span>
                </li>
              </ul>
            </div>

            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-card)',
              borderRadius: 'var(--radius-md)',
              padding: '2rem'
            }}>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '1rem', color: 'var(--whatsapp-green)' }}>
                What We Believe
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.65', marginBottom: '1.25rem' }}>
                We believe that great business websites don't need to cost tens of thousands of dollars or require months of back-and-forth. A fast, focused website with clear pricing and direct messaging creates instant trust.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-light)' }} />
                  <span>100% Client Ownership (No lock-in traps)</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-light)' }} />
                  <span>Mobile-First Speed for real network conditions</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-light)' }} />
                  <span>Transparent fixed-price project estimates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Values */}
      <WhyUs />

      {/* Action Banner */}
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
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1rem' }}>
              Let's Build Something Great Together.
            </h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 2rem auto', color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
              Have an upcoming project in mind or want to explore ideas for your business? We'd love to chat.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary btn-lg">
                <span>Start a Project</span>
                <ArrowRight size={18} />
              </Link>
              <a 
                href="https://wa.me/23272116425?text=Hello%20Wisdom%20Designs,%20I%20would%20like%20to%20discuss%20working%20together." 
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
