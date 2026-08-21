import React from 'react';
import { Link } from 'react-router-dom';
import { processData } from '../data/processData';
import { MessageSquare, Compass, FileText, Code2, CheckSquare, Rocket, ArrowRight } from 'lucide-react';

const iconMap = {
  MessageSquare: MessageSquare,
  Compass: Compass,
  FileText: FileText,
  Code2: Code2,
  CheckSquare: CheckSquare,
  Rocket: Rocket
};

export const HowItWorks = ({ limit, showHeader = true, showCta = true }) => {
  const displayedSteps = limit ? processData.slice(0, limit) : processData;

  return (
    <section className="section" id="process" style={{ background: 'rgba(8, 13, 26, 0.85)' }}>
      <div className="container">
        {showHeader && (
          <header className="section-header">
            <span className="section-tag">Simple & Transparent Process</span>
            <h2 className="section-title">From First Chat to Live Launch</h2>
            <p className="section-subtitle">
              We make getting your business online fast, friendly, and straightforward without complicated technical hurdles.
            </p>
          </header>
        )}

        <div className="process-grid">
          {displayedSteps.map((item) => {
            const IconComp = iconMap[item.icon] || MessageSquare;
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

        {showCta && (
          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              <span>Ready to Get Started? Start a Project</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
