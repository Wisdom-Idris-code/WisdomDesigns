import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { ExternalLink, ArrowRight, Sparkles } from 'lucide-react';

export const DemoPortfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Restaurant', 'Beauty & Wellness', 'Hospitality', 'Retail', 'Professional Services'];

  const filteredProjects = activeCategory === 'All'
    ? portfolioData
    : portfolioData.filter((p) => p.category === activeCategory);

  return (
    <section className="section" id="portfolio" style={{ background: 'rgba(8, 13, 26, 0.7)' }}>
      <div className="container">
        <header className="section-header">
          <h2 className="section-title">Explore What We Can Build for Your Business</h2>
          <p className="section-subtitle">
            These purpose-built concept demonstrations show how Wisdom Digital creates fast, conversion-focused websites tailored for specific business industries.
          </p>
        </header>

        {/* Category Filter Pills */}
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

        {/* Projects Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <article 
              key={project.id} 
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-thumbnail-wrapper">
                <img 
                  src={project.heroImage} 
                  alt={project.title} 
                  className="project-thumbnail-img" 
                  loading="lazy"
                />
                <span className="project-label-badge">{project.label}</span>
                <span className="project-category-tag">{project.category}</span>
              </div>

              <div className="project-card-body">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-tagline">{project.tagline}</p>

                <div className="project-card-footer">
                  <span>View Concept Case Study</span>
                  <ExternalLink size={16} />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Notice on Real Clients & Transparency */}
        <div style={{ 
          marginTop: '3.5rem', 
          background: 'rgba(255, 255, 255, 0.02)', 
          border: '1px solid var(--border-subtle)', 
          borderRadius: 'var(--radius-md)', 
          padding: '1.25rem 1.75rem',
          textAlign: 'center'
        }}>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
            <strong style={{ color: 'var(--amber-gold)' }}>Note: </strong> 
            All showcase projects above are purpose-built concept demonstrations to illustrate features, design quality, and WhatsApp flows. Real client projects are added as we work with businesses.
          </p>
        </div>
      </div>

      {/* Selected Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};
