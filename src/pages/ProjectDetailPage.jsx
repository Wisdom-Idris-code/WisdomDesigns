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
  ShieldCheck, 
  Smartphone,
  Globe,
  Layers,
  Info
} from 'lucide-react';

export const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const project = portfolioData.find((p) => p.id === projectId);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const isCompleted = project.status === 'completed';

  const whatsappMessage = encodeURIComponent(
    isCompleted
      ? `Hello Wisdom Designs! I saw your completed project for "${project.name}" and would like to discuss building a website for my business.`
      : `Hello Wisdom Designs! I am interested in building a website similar to your "${project.name}" concept demonstration for my business.`
  );

  return (
    <>
      <SEO 
        title={`${project.title} — ${isCompleted ? 'Case Study' : 'Concept Project'}`}
        description={`${project.tagline}. ${project.problem}`}
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
            <span className={`project-label-badge ${project.status}`} style={{ position: 'static' }}>
              {project.label}
            </span>
            <span className="project-category-tag" style={{ position: 'static' }}>{project.category}</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Category: {project.businessType}
            </span>
          </div>

          <h1 className="page-hero-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>
            {project.title}
          </h1>
          <p className="page-hero-subtitle" style={{ textAlign: 'left', margin: '0 0 1.75rem 0', maxWidth: '850px' }}>
            {project.tagline}
          </p>

          {/* Quick Actions (Live Website button for Completed Project) */}
          {isCompleted && project.liveUrl && (
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <span>View Live Website</span>
                <ExternalLink size={16} />
              </a>
              <a 
                href={`https://wa.me/23272116425?text=${whatsappMessage}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <MessageSquare size={16} />
                <span>Discuss Similar Project</span>
              </a>
            </div>
          )}

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
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {h.label}
                  </span>
                  <strong style={{ fontSize: '1.2rem', color: isCompleted ? '#34d399' : 'var(--accent-light)' }}>
                    {h.value}
                  </strong>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Main Case Study Content */}
      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }}>
            
            {/* Concept Project Clear Disclosure Banner (Only for concept projects) */}
            {!isCompleted && (
              <div style={{
                background: 'rgba(245, 158, 11, 0.08)',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem'
              }}>
                <Info size={24} style={{ color: 'var(--amber-gold)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h3 style={{ fontSize: '1.05rem', color: '#ffffff', marginBottom: '0.35rem', fontWeight: '700' }}>
                    Concept Project Showcase
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: '#fef3c7', lineHeight: '1.6', margin: 0 }}>
                    {project.conceptDisclaimer || `Concept website created to demonstrate a modern digital experience for a ${project.businessType} business.`} This demonstration illustrates how Wisdom Designs designs intuitive user experiences, fast mobile performance, and automated WhatsApp workflows for growing businesses.
                  </p>
                </div>
              </div>
            )}

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

            {/* Project Overview */}
            {project.overview && (
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-card)',
                borderRadius: 'var(--radius-md)',
                padding: '2rem'
              }}>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', color: '#ffffff' }}>
                  {isCompleted ? 'Project Overview' : 'Concept Demonstration Overview'}
                </h3>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.7', margin: 0 }}>
                  {project.overview}
                </p>
              </div>
            )}

            {/* Business Problem & Solution */}
            <div className="modal-section-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              <div className="modal-box problem-box">
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#f87171' }}>
                  {isCompleted ? 'The Business Problem' : 'Business Challenge / Opportunity'}
                </h3>
                <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
                  {project.problem}
                </p>
              </div>

              <div className="modal-box solution-box">
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#60a5fa' }}>
                  {isCompleted ? 'The Wisdom Designs Solution' : 'Proposed Website Solution'}
                </h3>
                <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Outcome & Customer Benefit / User Experience */}
            <div className="modal-box benefit-box">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#34d399' }}>
                {isCompleted ? 'Business Outcome & Impact' : 'User Experience & Expected Value'}
              </h3>
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
                    {project.interactivePreview.title || 'Interactive Catalog Sample'}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--whatsapp-green)', fontWeight: '600' }}>
                    ● 1-Click WhatsApp Ready
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

            {/* For Chicken Town: Live Website Callout */}
            {isCompleted && project.liveUrl && (
              <div style={{
                background: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: 'var(--radius-md)',
                padding: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1.25rem'
              }}>
                <div>
                  <h3 style={{ fontSize: '1.3rem', color: '#ffffff', marginBottom: '0.35rem' }}>
                    Experience the Live Website
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0 }}>
                    See the interactive menu, category filters, and live WhatsApp ordering in action on the deployed site.
                  </p>
                </div>
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-whatsapp btn-lg"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <span>View Live Website</span>
                  <ExternalLink size={18} />
                </a>
              </div>
            )}

            {/* Call to Action Bar */}
            <div style={{
              background: 'radial-gradient(ellipse at center, rgba(37, 99, 235, 0.12) 0%, rgba(15, 23, 42, 0.9) 100%)',
              border: '1px solid var(--border-card)',
              borderRadius: 'var(--radius-lg)',
              padding: '2.75rem 2rem',
              textAlign: 'center'
            }}>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>
                {isCompleted ? 'Want a High-Converting Website for Your Business?' : 'Want Something Similar for Your Business?'}
              </h3>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2rem auto', fontSize: '1rem', lineHeight: '1.6' }}>
                We can customize this design, features, and WhatsApp order flow specifically for your brand, catalog, and customers.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <a 
                  href={`https://wa.me/23272116425?text=${whatsappMessage}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-whatsapp btn-lg"
                >
                  <MessageSquare size={18} />
                  <span>Discuss on WhatsApp</span>
                </a>

                <Link to="/contact" className="btn btn-primary btn-lg">
                  <span>Start a Project</span>
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
