import React from 'react';
import { EyeOff, AlertTriangle, UserX, Clock, ArrowRight } from 'lucide-react';

export const BusinessProblems = () => {
  const problems = [
    {
      icon: EyeOff,
      title: 'Invisible to Searching Customers',
      desc: 'When potential clients search Google or social media for your service or food, they find your competitors instead of you.'
    },
    {
      icon: AlertTriangle,
      title: 'Losing Impulsive WhatsApp Sales',
      desc: 'Customers asking "what do you have?" on WhatsApp get tired of waiting for photo screenshots or blurry PDF menus and buy elsewhere.'
    },
    {
      icon: UserX,
      title: 'Lacking Professional Credibility',
      desc: 'Without an official website, high-value clients, tourists, and corporate partners hesitate to trust your legitimacy.'
    },
    {
      icon: Clock,
      title: 'Wasting Hours on Repetitive Inquiries',
      desc: 'Constantly typing out your price list, location, menu, and working hours over and over rather than focusing on running your business.'
    }
  ];

  return (
    <section className="section" id="problems" style={{ background: 'rgba(15, 23, 42, 0.4)' }}>
      <div className="container">
        <header className="section-header">
          <span className="section-tag">The Cost of Staying Offline</span>
          <h2 className="section-title">Is Your Business Missing Out on Paying Customers?</h2>
          <p className="section-subtitle">
            Most small and growing businesses lose dozens of potential leads every week simply because they do not have a dedicated, mobile-friendly website.
          </p>
        </header>

        {/* Problems Grid */}
        <div className="problems-grid">
          {problems.map((prob, idx) => {
            const IconComponent = prob.icon;
            return (
              <article key={idx} className="problem-card">
                <div className="problem-icon-wrapper">
                  <IconComponent size={24} />
                </div>
                <h3 className="problem-title">{prob.title}</h3>
                <p className="problem-desc">{prob.desc}</p>
              </article>
            );
          })}
        </div>

        {/* The Solution Banner */}
        <div className="problems-solution-banner">
          <div className="solution-banner-text">
            <h3>We solve these problems with modern, high-converting digital solutions.</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Get a website that works for your business 24 hours a day, 7 days a week.
            </p>
          </div>
          <a href="#services" className="btn btn-primary">
            <span>See Our Solutions</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
