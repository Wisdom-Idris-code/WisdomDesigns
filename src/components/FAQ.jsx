import React, { useState } from 'react';
import { faqData } from '../data/faqData';
import { ChevronDown, MessageSquare } from 'lucide-react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="section" id="faq" style={{ background: 'rgba(15, 23, 42, 0.4)' }}>
      <div className="container">
        <header className="section-header">
          <span className="section-tag">Got Questions?</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about working with Wisdom Digital, our timelines, ownership, and maintenance.
          </p>
        </header>

        <div className="faq-list">
          {faqData.map((item, idx) => {
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

        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Have a different question not covered here?
          </p>
          <a 
            href="https://wa.me/23200000000?text=Hello%20Wisdom%20Digital,%20I%20have%20a%20question%20about%20your%20services." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-whatsapp"
          >
            <MessageSquare size={18} />
            <span>Ask Us Directly on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
