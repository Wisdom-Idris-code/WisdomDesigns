import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const closeMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/work', label: 'Work' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/process', label: 'Process' },
    { to: '/care', label: 'Care Plans' },
    { to: '/about', label: 'About' },
    { to: '/faq', label: 'FAQ' },
  ];

  return (
    <header className={`header-nav ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav-container container" aria-label="Main Navigation">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo-link" onClick={closeMenu}>
          <img 
            src="/WisdomDigital-Logo1.png" 
            alt="Wisdom Designs Logo" 
            className="brand-logo-img" 
            width="42" 
            height="42" 
          />
          <span className="brand-name">
            Wisdom<span>Designs</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="desktop-nav-menu">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Nav Actions */}
        <div className="nav-actions">
          {/* Primary CTA */}
          <Link to="/contact" className="btn btn-primary btn-sm">
            <span>Start a Project</span>
            <ArrowRight size={16} />
          </Link>

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
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
          <Link 
            to="/contact" 
            className="btn btn-primary btn-lg" 
            onClick={closeMenu}
            style={{ marginTop: '0.75rem' }}
          >
            <span>Start a Project</span>
            <ArrowRight size={18} />
          </Link>
        </aside>
      )}
    </header>
  );
};
