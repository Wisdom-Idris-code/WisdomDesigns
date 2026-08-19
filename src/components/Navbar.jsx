import React, { useState, useEffect } from 'react';
import { useCurrency } from '../context/CurrencyContext';
import { Menu, X, MessageSquare, ArrowRight } from 'lucide-react';

export const Navbar = () => {
  const { currency, toggleCurrency } = useCurrency();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`header-nav ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav-container container" aria-label="Main Navigation">
        {/* Brand Logo */}
        <a href="#" className="brand-logo-link" onClick={closeMenu}>
          <img 
            src="/WisdomDigital-Logo1.png" 
            alt="Wisdom Digital Logo" 
            className="brand-logo-img" 
            width="42" 
            height="42" 
          />
          <span className="brand-name">
            Wisdom<span>Digital</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="desktop-nav-menu">
          <a href="#services" className="nav-link">Services</a>
          <a href="#portfolio" className="nav-link">Demo Work</a>
          <a href="#why-us" className="nav-link">Why Us</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#care-plans" className="nav-link">Care Plans</a>
          <a href="#process" className="nav-link">How It Works</a>
          <a href="#faq" className="nav-link">FAQ</a>
        </div>

        {/* Nav Actions & Currency Switcher */}
        <div className="nav-actions">
          {/* Currency Toggle */}
          <div className="currency-toggle-group" role="group" aria-label="Currency Selector">
            <button 
              type="button"
              className={`currency-btn ${currency === 'USD' ? 'active' : ''}`}
              onClick={() => toggleCurrency('USD')}
              title="View prices in US Dollars"
            >
              $ USD
            </button>
            <button 
              type="button"
              className={`currency-btn ${currency === 'NLe' ? 'active' : ''}`}
              onClick={() => toggleCurrency('NLe')}
              title="View prices in Sierra Leone Leones"
            >
              Le NLe
            </button>
          </div>

          {/* Quick WhatsApp Action (Desktop) */}
          <a 
            href="https://wa.me/23200000000?text=Hello%20Wisdom%20Digital,%20I%20would%20like%20to%20inquire%20about%20a%20website%20for%20my%20business." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-whatsapp btn-sm"
            style={{ display: 'none' }}
          >
            <MessageSquare size={16} />
            <span>Chat</span>
          </a>

          {/* Primary CTA */}
          <a href="#contact" className="btn btn-primary btn-sm">
            <span>Start a Project</span>
            <ArrowRight size={16} />
          </a>

          {/* Mobile Menu Button */}
          <button 
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <aside className="mobile-drawer" aria-label="Mobile Navigation Drawer">
          <a href="#services" className="mobile-nav-link" onClick={closeMenu}>Services</a>
          <a href="#portfolio" className="mobile-nav-link" onClick={closeMenu}>Demo Work</a>
          <a href="#why-us" className="mobile-nav-link" onClick={closeMenu}>Why Wisdom Digital</a>
          <a href="#pricing" className="mobile-nav-link" onClick={closeMenu}>Pricing & Packages</a>
          <a href="#care-plans" className="mobile-nav-link" onClick={closeMenu}>Website Care Plans</a>
          <a href="#process" className="mobile-nav-link" onClick={closeMenu}>How It Works</a>
          <a href="#about" className="mobile-nav-link" onClick={closeMenu}>About Us</a>
          <a href="#faq" className="mobile-nav-link" onClick={closeMenu}>FAQ</a>
          <a 
            href="#contact" 
            className="btn btn-primary btn-lg" 
            onClick={closeMenu}
            style={{ marginTop: '1rem' }}
          >
            Start a Project
          </a>
        </aside>
      )}
    </header>
  );
};
