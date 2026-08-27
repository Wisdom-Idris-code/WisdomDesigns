import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Check, MessageSquare, ArrowRight, ExternalLink, Info } from 'lucide-react';

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

  const isCompleted = project.status === 'completed';

  const whatsappMessage = encodeURIComponent(
    isCompleted
      ? `Hello Wisdom Designs! I saw your completed project for "${project.name}" and would like to discuss a website for my business.`
      : `Hello Wisdom Designs! I am interested in building a website similar to your "${project.name}" concept demo for my business.`
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
          <span className={`project-label-badge ${project.status}`}>
            {project.label}
          </span>
          <span className="project-category-tag">{project.category}</span>
        </div>

        <div className="modal-body">
          <div className="modal-header-meta">
            <span style={{ fontSize: '0.85rem', color: isCompleted ? '#34d399' : 'var(--accent-light)', fontWeight: '600' }}>
              Category: {project.businessType}
            </span>
          </div>

          <h2 className="modal-title">{project.title}</h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            {project.tagline}
          </p>

          {/* Concept Disclaimer */}
          {!isCompleted && (
            <div style={{
              background: 'rgba(245, 158, 11, 0.08)',
              border: '1px solid rgba(245, 158, 11, 0.25)',
              borderRadius: 'var(--radius-sm)',
              padding: '1rem',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem'
            }}>
              <Info size={18} style={{ color: 'var(--amber-gold)', flexShrink: 0, marginTop: '2px' }} />
              <p style={{ fontSize: '0.85rem', color: '#fef3c7', margin: 0, lineHeight: '1.5' }}>
                {project.conceptDisclaimer || 'Concept website created to demonstrate a modern digital experience.'}
              </p>
            </div>
          )}

          {/* Problem, Solution, and Customer Benefit Grid */}
          <div className="modal-section-grid">
            <div className="modal-box problem-box">
              <h4>{isCompleted ? 'The Business Problem' : 'Business Challenge'}</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.55' }}>
                {project.problem}
              </p>
            </div>

            <div className="modal-box solution-box">
              <h4>{isCompleted ? 'The Wisdom Designs Solution' : 'Proposed Solution'}</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.55' }}>
                {project.solution}
              </p>
            </div>
          </div>

          <div className="modal-box benefit-box" style={{ marginBottom: '1.75rem' }}>
            <h4>{isCompleted ? 'Business Outcome & Impact' : 'User Experience & Expected Value'}</h4>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.55' }}>
              {project.customerBenefit}
            </p>
          </div>

          {/* Key Features List */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.85rem' }}>Key Features Included</h4>
            <ul className="service-features-list">
              {project.features.map((feat, idx) => (
                <li key={idx} className="service-feature-item">
                  <Check size={16} className="feature-check-icon" style={{ color: 'var(--whatsapp-green)' }} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '2rem' }}>
            {isCompleted && project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp"
                style={{ flex: 1, minWidth: '180px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}
              >
                <span>View Live Website</span>
                <ExternalLink size={16} />
              </a>
            )}

            <Link 
              to={`/work/${project.id}`} 
              onClick={onClose} 
              className="btn btn-secondary"
              style={{ flex: 1, minWidth: '180px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}
            >
              <span>{isCompleted ? 'View Case Study →' : 'Explore Concept →'}</span>
            </Link>

            <a 
              href={`https://wa.me/23272116425?text=${whatsappMessage}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
              style={{ flex: 1, minWidth: '180px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}
            >
              <MessageSquare size={16} />
              <span>Discuss on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
