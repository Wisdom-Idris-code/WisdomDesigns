import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { faqData } from '../data/faqData';
import { ChevronDown, MessageSquare, ArrowRight } from 'lucide-react';

export const FAQ = ({ limit, showHeader = true, showContactCta = true }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const displayedFAQs = limit ? faqData.slice(0, limit) : faqData;

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="section" id="faq" style={{ background: 'rgba(15, 23, 42, 0.4)' }}>
      <div className="container">
        {showHeader && (
          <header className="section-header">
            <span className="section-tag">Got Questions?</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Everything you need to know about working with Wisdom Digital, our pricing, timelines, domain ownership, and ongoing maintenance.
            </p>
          </header>
        )}

        <div className="faq-list">
          {displayedFAQs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <article key={item.id} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span>{item.question}</span>
                  <ChevronDown size={20} className="faq-icon" />
                </button>

                {isOpen && (
                  <div id={`faq-answer-${item.id}`} className="faq-answer-content">
                    <p>{item.answer}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {showContactCta && (
          <div style={{ textAlign: 'center', marginTop: '3.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
              Have a specific question about your project?
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              <a 
                href="https://wa.me/23200000000?text=Hello%20Wisdom%20Digital,%20I%20have%20a%20question%20about%20your%20services." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp"
              >
                <MessageSquare size={18} />
                <span>Ask Us on WhatsApp</span>
              </a>
              <Link to="/contact" className="btn btn-secondary">
                <span>Contact Wisdom Digital</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
