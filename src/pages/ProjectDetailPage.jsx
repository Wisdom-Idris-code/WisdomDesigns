import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { portfolioData } from '../data/portfolioData';
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  MessageSquare, 
  Sparkles, 
  ExternalLink, 
  Clock, 
  Zap, 
  Smartphone 
} from 'lucide-react';

export const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const project = portfolioData.find((p) => p.id === projectId);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const whatsappMessage = encodeURIComponent(
    `Hello Wisdom Designs! I am interested in building a website similar to your "${project.title}" showcase for my business.`
  );

  return (
    <>
      <SEO 
        title={`${project.title} — Case Study`}
        description={`Explore the ${project.title} project case study by Wisdom Designs. ${project.problem}`}
        canonicalPath={`/work/${project.id}`}
      />

      {/* Hero / Header Section */}
      <section className="page-hero-header" style={{ paddingBottom: '2.5rem' }}>
        <div className="container">
          <div style={{ marginBottom: '1.5rem' }}>
            <Link 
              to="/work" 
              className="btn btn-secondary btn-sm" 
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <ArrowLeft size={16} />
              <span>Back to All Work</span>
            </Link>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <span className="project-label-badge" style={{ position: 'static' }}>{project.label}</span>
            <span className="project-category-tag" style={{ position: 'static' }}>{project.category}</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Industry: {project.businessType}
            </span>
          </div>

          <h1 className="page-hero-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>
            {project.title}
          </h1>
          <p className="page-hero-subtitle" style={{ textAlign: 'left', margin: '0 0 2rem 0', maxWidth: '850px' }}>
            {project.tagline}
          </p>

          {/* Project Highlights Bar */}
          {project.demoHighlights && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1rem',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
              maxWidth: '850px'
            }}>
              {project.demoHighlights.map((h, i) => (
                <div key={i}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase' }}>
                    {h.label}
                  </span>
                  <strong style={{ fontSize: '1.2rem', color: 'var(--accent-light)' }}>
                    {h.value}
                  </strong>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Main Case Study Content */}
      <section className="section" style={{ paddingTop: '1.5rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
            
            {/* Visual Hero Image Card */}
            <div style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              border: '1px solid var(--border-card)',
              boxShadow: 'var(--shadow-lg)'
            }}>
              <img 
                src={project.heroImage} 
                alt={project.title}
                style={{ width: '100%', maxHeight: '480px', objectFit: 'cover' }}
              />
            </div>

            {/* Business Problem & Solution */}
            <div className="modal-section-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              <div className="modal-box problem-box">
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#f87171' }}>The Business Problem</h3>
                <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
                  {project.problem}
                </p>
              </div>

              <div className="modal-box solution-box">
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#60a5fa' }}>The Wisdom Designs Solution</h3>
                <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Outcome & Customer Benefit */}
            <div className="modal-box benefit-box">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#34d399' }}>Business Outcome & Value Delivered</h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
                {project.customerBenefit}
              </p>
            </div>

            {/* Features Breakdown */}
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-card)',
              borderRadius: 'var(--radius-md)',
              padding: '2rem'
            }}>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '1.25rem' }}>Key Features Included</h3>
              <ul className="service-features-list">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="service-feature-item" style={{ fontSize: '0.95rem' }}>
                    <Check size={18} className="feature-check-icon" style={{ color: 'var(--whatsapp-green)' }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interactive Catalog Preview */}
            {project.interactivePreview && (
              <div className="interactive-preview-demo" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--accent-light)', letterSpacing: '0.05em' }}>
                    Live Menu / Product Catalog Sample
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--whatsapp-green)', fontWeight: '600' }}>
                    ● Direct WhatsApp Checkout Ready
                  </span>
                </div>

                {project.interactivePreview.items.map((item, idx) => (
                  <div key={idx} className="demo-item-row" style={{ padding: '1rem 0' }}>
                    <div>
                      <strong style={{ fontSize: '1.05rem', color: 'var(--text-primary)', display: 'block' }}>{item.name}</strong>
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{item.desc}</span>
                    </div>
                    <span style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--accent-light)', whiteSpace: 'nowrap', marginLeft: '1rem' }}>
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Call to Action Bar */}
            <div style={{
              background: 'radial-gradient(ellipse at center, rgba(37, 99, 235, 0.12) 0%, rgba(15, 23, 42, 0.9) 100%)',
              border: '1px solid var(--border-card)',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem 2rem',
              textAlign: 'center'
            }}>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>
                Want a Website Like This for Your Business?
              </h3>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                We can customize this design and functionality to fit your exact products, branding, and WhatsApp workflow.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <a 
                  href={`https://wa.me/23200000000?text=${whatsappMessage}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-whatsapp btn-lg"
                >
                  <MessageSquare size={18} />
                  <span>Discuss Similar Project on WhatsApp</span>
                </a>

                <Link to="/contact" className="btn btn-primary btn-lg">
                  <span>Start Your Project</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
