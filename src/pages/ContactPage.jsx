import React from 'react';
import { SEO } from '../components/SEO';
import { Contact } from '../components/Contact';

export const ContactPage = () => {
  return (
    <>
      <SEO 
        title="Start a Project — Contact Us"
        description="Let's talk about your business. Get in touch with Wisdom Designs for a free consultation and customized quote for your new website."
        canonicalPath="/contact"
      />

      {/* Page Hero Header */}
      <section className="page-hero-header">
        <div className="container">
          <span className="section-tag">Let's Connect</span>
          <h1 className="page-hero-title">
            Let's Talk About <span className="highlight">Your Business</span>
          </h1>
          <p className="page-hero-subtitle">
            Ready to turn your visitors into paying customers? Tell us about your goals below or message us directly on WhatsApp for an immediate response.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Component */}
      <Contact showHeader={false} />
    </>
  );
};
