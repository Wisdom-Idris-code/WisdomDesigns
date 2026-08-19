import React from 'react';
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

export const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container">
        <header className="section-header">
          <h2 className="section-title">Practical Digital Solutions Built to Grow Your Revenue</h2>
          <p className="section-subtitle">
            We build websites and digital tools designed specifically to help local and growing businesses get discovered, showcase their offerings, and capture leads effortlessly.
          </p>
        </header>

        <div className="services-grid">
          {servicesData.map((service) => {
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
                  {service.features.map((feat, idx) => (
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
              </article>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <a href="#contact" className="btn btn-primary btn-lg">
            <span>Get a Free Quote for Your Business</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};
