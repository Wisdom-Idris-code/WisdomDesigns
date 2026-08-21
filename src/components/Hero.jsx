import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowRight, Star } from 'lucide-react';
import heroShowcaseImg from '../assets/hero-showcase.jpg';

export const Hero = () => {
  return (
    <section className="hero-section" id="home">
      {/* Subtle Background Glows */}
      <div className="bg-glow-radial glow-blue" style={{ top: '-10%', left: '15%' }} />
      <div className="bg-glow-radial glow-emerald" style={{ top: '30%', right: '10%' }} />

      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="hero-content">
            <h1 className="hero-headline">
              We Build Websites That Turn Visitors Into <span className="highlight">Paying Customers</span>.
            </h1>

            <p className="hero-subheadline">
              Custom, mobile-first websites crafted for restaurants, salons, hotels, shops, and professional services. Complete with direct WhatsApp ordering, digital menus, and zero technical headaches.
            </p>

            <div className="hero-cta-group">
              <Link to="/contact" className="btn btn-primary btn-lg">
                <span>Start a Project</span>
                <ArrowRight size={18} />
              </Link>

              <Link to="/work" className="btn btn-secondary btn-lg">
                <span>Explore Our Work</span>
              </Link>
            </div>

            {/* Social Proof & Trust Metric */}
            <div className="hero-social-proof">
              <div className="proof-avatars">
                <span className="proof-avatar" role="img" aria-label="Restaurant">🍽️</span>
                <span className="proof-avatar" role="img" aria-label="Salon">✂️</span>
                <span className="proof-avatar" role="img" aria-label="Hotel">🏨</span>
                <span className="proof-avatar" role="img" aria-label="Retail">🛍️</span>
              </div>
              <div className="proof-text">
                <div className="proof-rating-row">
                  <div className="proof-stars" aria-label="5 out of 5 stars">
                    <Star size={15} className="star-filled" />
                    <Star size={15} className="star-filled" />
                    <Star size={15} className="star-filled" />
                    <Star size={15} className="star-filled" />
                    <Star size={15} className="star-filled" />
                  </div>
                  <span className="proof-rating-score">5.0</span>
                </div>
                <p className="proof-caption">Crafted for Sierra Leone & growing African businesses</p>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Hero Image Showcase */}
          <div className="hero-visual-card">
            <div className="hero-preview-header">
              <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.15rem' }}>Your Business Online</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Tailored for local & international clients</p>
              </div>
              <div className="preview-status">
                <span className="status-dot"></span>
                <span>Open for Orders</span>
              </div>
            </div>

            <div className="hero-image-container">
              <img
                src={heroShowcaseImg}
                alt="High-end mobile website preview with WhatsApp ordering and booking interfaces"
                className="hero-showcase-img"
                loading="eager"
              />
              <div className="hero-image-overlay-glow" />
            </div>

            {/* Floating WhatsApp Live Order Bubble */}
            <div className="hero-floating-bubble">
              <MessageSquare size={22} style={{ color: 'var(--whatsapp-green)', flexShrink: 0 }} />
              <div>
                <strong style={{ display: 'block', fontSize: '0.85rem' }}>New WhatsApp Lead</strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>"Hello, I’d like to place an order from your website catalog!"</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
