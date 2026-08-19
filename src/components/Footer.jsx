import React from 'react';
import { MessageSquare, Mail, Phone, MapPin, Heart, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand & Mission Column */}
          <div className="footer-brand">
            <a href="#" className="brand-logo-link" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
              <img 
                src="/WisdomDigital-Logo1.png" 
                alt="Wisdom Digital Logo" 
                className="brand-logo-img" 
                width="38" 
                height="38" 
              />
              <span className="brand-name">
                Wisdom<span>Digital</span>
              </span>
            </a>
            <p>
              Dedicated freelance web development agency helping small and growing businesses in Sierra Leone and beyond convert visitors into paying clients.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a 
                href="https://wa.me/23200000000" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp btn-sm"
              >
                <MessageSquare size={15} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#services" className="footer-link">Our Services</a></li>
              <li><a href="#portfolio" className="footer-link">Demo Portfolio</a></li>
              <li><a href="#why-us" className="footer-link">Why Choose Us</a></li>
              <li><a href="#pricing" className="footer-link">Pricing & Packages</a></li>
              <li><a href="#care-plans" className="footer-link">Website Care Plans</a></li>
              <li><a href="#process" className="footer-link">How It Works</a></li>
              <li><a href="#faq" className="footer-link">FAQs</a></li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links-list">
              <li><a href="#services" className="footer-link">Custom Websites</a></li>
              <li><a href="#services" className="footer-link">WhatsApp Ordering Systems</a></li>
              <li><a href="#services" className="footer-link">Digital Restaurant Menus</a></li>
              <li><a href="#services" className="footer-link">Product Catalogs</a></li>
              <li><a href="#services" className="footer-link">Appointment Booking</a></li>
              <li><a href="#services" className="footer-link">Local SEO & Google Setup</a></li>
              <li><a href="#care-plans" className="footer-link">Monthly Maintenance</a></li>
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div>
            <h4 className="footer-heading">Get in Touch</h4>
            <ul className="footer-links-list">
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <MapPin size={16} style={{ color: 'var(--accent-light)', flexShrink: 0 }} />
                <span>Sierra Leone & Global</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                <MessageSquare size={16} style={{ color: 'var(--whatsapp-green)', flexShrink: 0 }} />
                <a href="https://wa.me/23200000000" style={{ color: 'var(--text-secondary)' }}>+232 (00) 000-000</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                <Mail size={16} style={{ color: 'var(--accent-light)', flexShrink: 0 }} />
                <a href="mailto:contact@wisdomdigital.dev" style={{ color: 'var(--text-secondary)' }}>contact@wisdomdigital.dev</a>
              </li>
              <li style={{ marginTop: '0.5rem' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Mon – Sat: 8:00 AM – 7:00 PM GMT
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} Wisdom Digital. All rights reserved.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Crafted with care for growing businesses
            </span>
            <button 
              type="button" 
              onClick={scrollToTop}
              className="btn btn-secondary btn-sm"
              style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}
              aria-label="Scroll to top of page"
            >
              <ArrowUp size={14} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
