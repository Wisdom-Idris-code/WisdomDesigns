import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { Layout, MessageSquare, BookOpen, Calendar, Search, Sparkles, Check, ArrowRight } from 'lucide-react';

const iconMap = {
  Layout: Layout,
  MessageSquare: MessageSquare,
  BookOpen: BookOpen,
  Calendar: Calendar,
  Search: Search,
  Sparkles: Sparkles
};

export const Services = ({ limit, showHeader = true, showCta = true }) => {
  const displayedServices = limit ? servicesData.slice(0, limit) : servicesData;

  return (
    <section className="section" id="services">
      <div className="container">
        {showHeader && (
          <header className="section-header">
            <span className="section-tag">Our Web Services</span>
            <h2 className="section-title">Practical Digital Solutions Built to Grow Your Revenue</h2>
            <p className="section-subtitle">
              We build websites and digital tools designed specifically to help local and growing businesses get discovered, showcase their offerings, and capture leads effortlessly.
            </p>
          </header>
        )}

        <div className="services-grid">
          {displayedServices.map((service) => {
            const IconComp = iconMap[service.icon] || Layout;
            return (
              <article key={service.id} className="service-card">
                <div className="service-card-top">
                  <div className="service-icon-box">
                    <IconComp size={26} />
                  </div>
                  <span className="service-badge">{service.badge}</span>
                </div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.shortDesc}</p>

                <ul className="service-features-list">
                  {service.features.slice(0, 4).map((feat, idx) => (
                    <li key={idx} className="service-feature-item">
                      <Check size={16} className="feature-check-icon" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="service-ideal-for">
                  <strong>Ideal for: </strong>
                  <span>{service.idealFor}</span>
                </div>

                <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--accent-light)' }}>
                    Starts at {service.priceUSD}
                  </span>
                  <Link to={`/contact?plan=${service.id}`} className="btn btn-secondary btn-sm" style={{ padding: '0.35rem 0.75rem', fontSize: '0.82rem' }}>
                    <span>Inquire</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {showCta && (
          <div style={{ textAlign: 'center', marginTop: '3.5rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/services" className="btn btn-primary btn-lg">
              <span>Explore Full Service Breakdown</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/pricing" className="btn btn-secondary btn-lg">
              <span>Compare Pricing Packages</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
