import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { ArrowLeft, Home, MessageSquare } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <>
      <SEO 
        title="Page Not Found (404)"
        description="The page you are looking for does not exist. Explore Wisdom Designs' website design services, portfolio, and pricing."
      />

      <section className="section" style={{ minHeight: '65vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
          <span className="section-tag" style={{ color: '#f87171', borderColor: 'rgba(239, 68, 68, 0.3)', background: 'rgba(239, 68, 68, 0.1)' }}>
            404 Error
          </span>
          <h1 style={{ fontSize: '3rem', margin: '1rem 0 0.5rem 0' }}>Page Not Found</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '2rem' }}>
            The page you are looking for might have been moved or doesn't exist. Let's get you back on track.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn-primary">
              <Home size={16} />
              <span>Return Home</span>
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              <MessageSquare size={16} />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
