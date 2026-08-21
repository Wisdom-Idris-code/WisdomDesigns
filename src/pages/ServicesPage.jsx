import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { servicesData, coreCapabilities } from '../data/servicesData';
import { useCurrency } from '../context/CurrencyContext';
import { 
  Check, 
  ArrowRight, 
  MessageSquare, 
  Sparkles, 
  Layers, 
  Smartphone, 
  Clock, 
  ShieldCheck, 
  BookOpen, 
  Calendar, 
  Search 
} from 'lucide-react';

const iconMap = {
  MessageSquare,
  BookOpen,
  Calendar,
  Search
};

export const ServicesPage = () => {
  const { currency } = useCurrency();

  return (
    <>
      <SEO 
        title="Website Design & Development Services"
        description="Explore our website development services: Starter Websites, Business Websites with WhatsApp catalogs, Premium Websites, and Custom Web Solutions."
        canonicalPath="/services"
      />

      {/* Page Header */}
      <section className="page-hero-header">
        <div className="container">
          <span className="section-tag">Our Web Services</span>
          <h1 className="page-hero-title">
            Website Solutions Designed to <span className="highlight">Grow Your Business</span>
          </h1>
          <p className="page-hero-subtitle">
            Whether you run a bustling local restaurant, a luxury salon, a boutique guest house, or an expanding company, we create web solutions engineered to turn visitors into real customers.
          </p>
        </div>
      </section>

      {/* Editorial Services Breakdown */}
      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="editorial-services-list">
            {servicesData.map((service, idx) => {
              const isEven = idx % 2 === 1;
              const displayPrice = currency === 'USD' ? service.priceUSD : service.priceNLe;

              return (
                <div 
                  key={service.id} 
                  id={service.id}
                  className={`editorial-service-row ${isEven ? 'row-reverse' : ''}`}
                >
                  {/* Visual / Highlight Box */}
                  <div className="editorial-visual-card">
                    <div className="editorial-badge-pill">{service.badge}</div>
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: '#ffffff' }}>
                      {service.title}
                    </h3>
                    <p style={{ color: 'var(--accent-light)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                      {service.subtitle}
                    </p>

                    <div className="editorial-price-badge">
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Investment</span>
                      <strong style={{ fontSize: '1.6rem', color: '#ffffff' }}>{displayPrice}</strong>
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                        <Clock size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                        {service.timeline}
                      </span>
                    </div>

                    <div style={{ marginTop: '1.5rem' }}>
                      <Link 
                        to={`/contact?plan=${service.id}`} 
                        className="btn btn-primary"
                        style={{ width: '100%' }}
                      >
                        <span>Start With {service.title}</span>
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>

                  {/* Editorial Content Details */}
                  <div className="editorial-content-block">
                    <div className="editorial-target-box">
                      <strong style={{ color: 'var(--accent-light)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        Ideal Client & Target Business
                      </strong>
                      <p style={{ color: 'var(--text-primary)', marginTop: '0.25rem', fontSize: '0.95rem' }}>
                        {service.targetCustomer}
                      </p>
                    </div>

                    <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: '1.75rem' }}>
                      {service.shortDesc}
                    </p>

                    <h4 style={{ fontSize: '1.05rem', marginBottom: '1rem', color: '#ffffff' }}>
                      What's Included:
                    </h4>

                    <ul className="service-features-list">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="service-feature-item">
                          <Check size={16} className="feature-check-icon" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="section" style={{ background: 'rgba(15, 23, 42, 0.4)' }}>
        <div className="container">
          <header className="section-header">
            <span className="section-tag">Key Capabilities</span>
            <h2 className="section-title">Built-In Superpowers for Your Business</h2>
            <p className="section-subtitle">
              Every website we build is optimized for fast mobile performance and instant customer interaction.
            </p>
          </header>

          <div className="problems-grid">
            {coreCapabilities.map((cap, idx) => {
              const IconComp = iconMap[cap.icon] || Sparkles;
              return (
                <article key={idx} className="problem-card">
                  <div className="problem-icon-wrapper">
                    <IconComp size={24} />
                  </div>
                  <h3 className="problem-title">{cap.title}</h3>
                  <p className="problem-desc">{cap.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom Internal Linking / Action Banner */}
      <section className="section" style={{ background: 'rgba(8, 13, 26, 0.95)' }}>
        <div className="container">
          <div className="problems-solution-banner">
            <div className="solution-banner-text">
              <h3>Need a tailored quote or want to see all package comparisons?</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                View our detailed pricing breakdown or message us directly with your requirements.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/pricing" className="btn btn-secondary">
                <span>View Full Pricing Matrix</span>
              </Link>
              <Link to="/contact" className="btn btn-primary">
                <span>Request a Quote</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
