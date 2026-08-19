import React from 'react';
import { processData } from '../data/processData';
import { MessageCircle, PenTool, Code2, Rocket, ArrowRight } from 'lucide-react';

const iconMap = {
  MessageCircle: MessageCircle,
  PenTool: PenTool,
  Code2: Code2,
  Rocket: Rocket
};

export const HowItWorks = () => {
  return (
    <section className="section" id="process" style={{ background: 'rgba(8, 13, 26, 0.85)' }}>
      <div className="container">
        <header className="section-header">
          <span className="section-tag">Simple & Transparent Process</span>
          <h2 className="section-title">From Concept to Launch in 4 Clear Steps</h2>
          <p className="section-subtitle">
            We make getting your business online fast, friendly, and straightforward without complicated technical hurdles.
          </p>
        </header>

        <div className="process-grid">
          {processData.map((item) => {
            const IconComp = iconMap[item.icon] || MessageCircle;
            return (
              <article key={item.step} className="process-step-card">
                <div className="step-number-badge">{item.step}</div>
                <div style={{ marginBottom: '1rem', color: 'var(--accent-light)' }}>
                  <IconComp size={28} />
                </div>
                <h3 className="process-title">{item.title}</h3>
                <p className="process-desc">{item.desc}</p>
              </article>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <a href="#contact" className="btn btn-primary btn-lg">
            <span>Schedule Your Free Discovery Chat</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};
