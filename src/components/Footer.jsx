import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Mail, MapPin, ArrowUp } from 'lucide-react';

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
            <Link to="/" className="brand-logo-link" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
              <img 
                src="/WisdomDigital-Logo1.png" 
                alt="Wisdom Designs Logo" 
                className="brand-logo-img" 
                width="38" 
                height="38" 
              />
              <span className="brand-name">
                Wisdom<span>Designs</span>
              </span>
            </Link>
            <p>
              Dedicated freelance web development business helping small and growing businesses in Sierra Leone and beyond convert visitors into paying clients.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
              <a 
                href="https://wa.me/23200000000?text=Hello%20Wisdom%20Designs,%20I%20would%20like%20to%20inquire%20about%20a%20website%20for%20my%20business." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp btn-sm"
              >
                <MessageSquare size={15} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links-list">
              <li><Link to="/about" className="footer-link">About Wisdom Designs</Link></li>
              <li><Link to="/work" className="footer-link">Our Work / Portfolio</Link></li>
              <li><Link to="/process" className="footer-link">How It Works (Process)</Link></li>
              <li><Link to="/pricing" className="footer-link">Pricing & Packages</Link></li>
              <li><Link to="/care" className="footer-link">Website Care Plans</Link></li>
              <li><Link to="/faq" className="footer-link">Frequently Asked Questions</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links-list">
              <li><Link to="/services" className="footer-link">Starter Website ($200–$300)</Link></li>
              <li><Link to="/services" className="footer-link">Business Website ($350–$450)</Link></li>
              <li><Link to="/services" className="footer-link">Premium Website ($500–$700)</Link></li>
              <li><Link to="/services" className="footer-link">Custom Web Solutions</Link></li>
              <li><Link to="/services" className="footer-link">WhatsApp Ordering Systems</Link></li>
              <li><Link to="/services" className="footer-link">Digital Menus & Catalogs</Link></li>
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div>
            <h4 className="footer-heading">Get in Touch</h4>
            <ul className="footer-links-list">
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <MapPin size={16} style={{ color: 'var(--accent-light)', flexShrink: 0 }} />
                <span>Sierra Leone & Worldwide</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                <MessageSquare size={16} style={{ color: 'var(--whatsapp-green)', flexShrink: 0 }} />
                <a href="https://wa.me/23200000000" style={{ color: 'var(--text-secondary)' }}>+232 (00) 000-000</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                <Mail size={16} style={{ color: 'var(--accent-light)', flexShrink: 0 }} />
                <a href="mailto:contact@wisdomdesigns.dev" style={{ color: 'var(--text-secondary)' }}>contact@wisdomdesigns.dev</a>
              </li>
              <li style={{ marginTop: '0.5rem' }}>
                <Link to="/contact" className="btn btn-secondary btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>Start a Project →</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} Wisdom Designs. All rights reserved.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Built for growing businesses
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
