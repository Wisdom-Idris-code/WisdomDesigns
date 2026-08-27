import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, ArrowRight } from 'lucide-react';

export const DemoPortfolio = ({ 
  limit, 
  showHeader = true, 
  showFilter = true,
  showFooterCta = true,
  title = "Our Work & Project Showcase",
  subtitle = "Explore examples of modern, high-converting websites built for specific industries. From live deployed client projects to purpose-built demonstrations."
}) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Restaurant', 'Beauty & Wellness', 'Hospitality', 'Retail', 'Professional Services'];

  const filtered = activeCategory === 'All'
    ? portfolioData
    : portfolioData.filter((p) => p.category === activeCategory);

  const displayedProjects = limit ? filtered.slice(0, limit) : filtered;

  return (
    <section className="section" id="portfolio" style={{ background: 'rgba(8, 13, 26, 0.7)' }}>
      <div className="container">
        {showHeader && (
          <header className="section-header">
            <span className="section-tag">Portfolio & Showcase</span>
            <h2 className="section-title">{title}</h2>
            <p className="section-subtitle">{subtitle}</p>
          </header>
        )}

        {/* Category Filter Pills */}
        {showFilter && (
          <div className="portfolio-category-filters" role="tablist" aria-label="Project Categories">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
                role="tab"
                aria-selected={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        <div className="portfolio-grid">
          {displayedProjects.map((project) => {
            const isCompleted = project.status === 'completed';

            return (
              <article key={project.id} className="project-card">
                <div className="project-thumbnail-wrapper">
                  <img 
                    src={project.heroImage} 
                    alt={project.title} 
                    className="project-thumbnail-img" 
                    loading="lazy"
                  />
                  <span className={`project-label-badge ${project.status}`}>
                    {project.label}
                  </span>
                  <span className="project-category-tag">{project.category}</span>
                </div>

                <div className="project-card-body">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-tagline">{project.tagline}</p>

                  <div className="project-card-footer" style={{ gap: '0.5rem', flexWrap: 'wrap' }}>
                    {isCompleted ? (
                      <>
                        <Link 
                          to={`/work/${project.id}`} 
                          className="project-action-link"
                        >
                          <span>View Case Study</span>
                          <ArrowRight size={15} />
                        </Link>
                        {project.liveUrl && (
                          <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="project-live-btn"
                          >
                            <span>View Live Website</span>
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </>
                    ) : (
                      <Link 
                        to={`/work/${project.id}`} 
                        className="project-action-link"
                        style={{ width: '100%', justifyContent: 'space-between' }}
                      >
                        <span>Explore Concept</span>
                        <ArrowRight size={15} />
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Notice on Concepts & Real Projects */}
        <div style={{ 
          marginTop: '3.5rem', 
          background: 'rgba(255, 255, 255, 0.02)', 
          border: '1px solid var(--border-subtle)', 
          borderRadius: 'var(--radius-md)', 
          padding: '1.25rem 1.75rem',
          textAlign: 'center'
        }}>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0 }}>
            <strong style={{ color: 'var(--amber-gold)' }}>Transparency Note: </strong> 
            Projects tagged <span style={{ color: '#34d399', fontWeight: '600' }}>"Completed Project"</span> are live production websites. Projects tagged <span style={{ color: 'var(--amber-gold)', fontWeight: '600' }}>"Concept Project"</span> are custom demonstrations built by Wisdom Designs to illustrate what we can create for your business.
          </p>
        </div>

        {/* Footer CTA */}
        {showFooterCta && (
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/work" className="btn btn-secondary btn-lg">
              <span>Explore All Projects</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
