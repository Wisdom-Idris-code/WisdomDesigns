import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Check, MessageSquare, ArrowRight } from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Wisdom Digital! I am interested in building a website similar to your "${project.title}" concept demo for my business.`
  );

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button 
          type="button" 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close Project Details"
        >
          <X size={20} />
        </button>

        <div className="project-thumbnail-wrapper" style={{ height: '260px' }}>
          <img 
            src={project.heroImage} 
            alt={project.title} 
            className="project-thumbnail-img" 
          />
          <span className="project-label-badge">{project.label}</span>
          <span className="project-category-tag">{project.category}</span>
        </div>

        <div className="modal-body">
          <div className="modal-header-meta">
            <span style={{ fontSize: '0.85rem', color: 'var(--accent-light)', fontWeight: '600' }}>
              Business Type: {project.businessType}
            </span>
          </div>

          <h2 className="modal-title">{project.title}</h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            {project.tagline}
          </p>

          {/* Problem, Solution, and Customer Benefit Grid */}
          <div className="modal-section-grid">
            <div className="modal-box problem-box">
              <h4>The Business Problem</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.55' }}>
                {project.problem}
              </p>
            </div>

            <div className="modal-box solution-box">
              <h4>The Wisdom Digital Solution</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.55' }}>
                {project.solution}
              </p>
            </div>
          </div>

          <div className="modal-box benefit-box" style={{ marginBottom: '1.75rem' }}>
            <h4>Business Outcome & Customer Benefit</h4>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.55' }}>
              {project.customerBenefit}
            </p>
          </div>

          {/* Key Features List */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.85rem' }}>Included Features</h4>
            <ul className="service-features-list">
              {project.features.map((feat, idx) => (
                <li key={idx} className="service-feature-item">
                  <Check size={16} className="feature-check-icon" style={{ color: 'var(--whatsapp-green)' }} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive Catalog Preview Sample */}
          {project.interactivePreview && (
            <div className="interactive-preview-demo">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--accent-light)', letterSpacing: '0.05em' }}>
                  Interactive Catalog Sample
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--whatsapp-green)' }}>
                  ● 1-Click WhatsApp Order Ready
                </span>
              </div>

              {project.interactivePreview.items.map((item, idx) => (
                <div key={idx} className="demo-item-row">
                  <div>
                    <strong style={{ fontSize: '0.95rem', color: 'var(--text-primary)', display: 'block' }}>{item.name}</strong>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{item.desc}</span>
                  </div>
                  <span style={{ fontSize: '0.88rem', fontWeight: '700', color: 'var(--accent-light)', whiteSpace: 'nowrap', marginLeft: '1rem' }}>
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Action CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '2rem' }}>
            <a 
              href={`https://wa.me/23200000000?text=${whatsappMessage}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-whatsapp btn-lg"
              style={{ flex: 1, minWidth: '220px' }}
            >
              <MessageSquare size={18} />
              <span>Discuss on WhatsApp</span>
            </a>

            <Link 
              to="/contact" 
              onClick={onClose} 
              className="btn btn-primary btn-lg"
              style={{ flex: 1, minWidth: '180px' }}
            >
              <span>Get a Quote</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
