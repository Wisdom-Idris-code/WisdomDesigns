import React from 'react';
import { Link } from 'react-router-dom';
import { useCurrency } from '../context/CurrencyContext';
import { carePlansData } from '../data/pricingData';
import { Check, ArrowRight, ShieldCheck, Info } from 'lucide-react';

export const CarePlans = ({ showTitle = true }) => {
  const { currency, toggleCurrency } = useCurrency();

  return (
    <section className="section" id="care-plans">
      <div className="container">
        {showTitle && (
          <header className="section-header">
            <span className="section-tag" style={{ background: 'rgba(16, 185, 129, 0.12)', borderColor: 'rgba(16, 185, 129, 0.3)', color: '#34d399' }}>
              Optional Ongoing Maintenance
            </span>
            <h2 className="section-title">Website Care & Support Plans</h2>
            <p className="section-subtitle">
              Never worry about broken links, expired domains, slow speeds, or out-of-date prices. Let us manage your website while you manage your business.
            </p>
          </header>
        )}

        {/* Currency Switcher */}
        <div className="pricing-header-toggle-wrapper" style={{ marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
          <div className="currency-toggle-group" style={{ padding: '4px' }}>
            <button
              type="button"
              className={`currency-btn ${currency === 'USD' ? 'active' : ''}`}
              onClick={() => toggleCurrency('USD')}
              style={{ padding: '0.45rem 1.1rem', fontSize: '0.88rem' }}
            >
              $ USD
            </button>
            <button
              type="button"
              className={`currency-btn ${currency === 'NLe' ? 'active' : ''}`}
              onClick={() => toggleCurrency('NLe')}
              style={{ padding: '0.45rem 1.1rem', fontSize: '0.88rem' }}
            >
              Le NLe (Sierra Leone)
            </button>
          </div>
          <span className="currency-banner-badge" style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            Showing official rates in {currency === 'USD' ? 'US Dollars ($)' : 'Sierra Leone Leones (NLe)'}
          </span>
        </div>

        {/* Important Optional Disclaimer Banner */}
        <div style={{
          background: 'rgba(59, 130, 246, 0.08)',
          border: '1px solid rgba(59, 130, 246, 0.2)',
          borderRadius: 'var(--radius-md)',
          padding: '1.2rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.85rem',
          marginBottom: '3rem',
          maxWidth: '850px',
          margin: '0 auto 3rem auto'
        }}>
          <Info size={22} style={{ color: 'var(--accent-light)', flexShrink: 0 }} />
          <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', margin: 0 }}>
            <strong style={{ color: '#ffffff' }}>Website Care is 100% optional.</strong> You receive full ownership of your completed website without subscribing to a monthly care plan. Plans are month-to-month and can be paused or cancelled anytime.
          </p>
        </div>

        <div className="care-plans-grid">
          {carePlansData.map((plan) => {
            const isPopular = plan.popular;
            const price = currency === 'USD' ? plan.priceUSD : plan.priceNLe;
            const period = currency === 'USD' ? plan.periodUSD : plan.periodNLe;

            return (
              <article 
                key={plan.id} 
                className={`care-card ${isPopular ? 'popular-care' : ''}`}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="service-badge" style={{ color: isPopular ? '#34d399' : 'inherit' }}>
                    {plan.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', marginTop: '0.85rem' }}>{plan.name}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', minHeight: '40px', marginTop: '0.25rem' }}>
                  {plan.tagline}
                </p>

                <div className="care-price-row">
                  <span className="care-price-value">{price}</span>
                  <span className="care-period">{period}</span>
                </div>

                <ul className="service-features-list" style={{ marginTop: '0.75rem' }}>
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="service-feature-item">
                      <Check size={16} className="feature-check-icon" style={{ color: isPopular ? 'var(--whatsapp-green)' : 'var(--accent-light)' }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to={`/contact?care=${plan.id}`} 
                  className={`btn ${isPopular ? 'btn-whatsapp' : 'btn-secondary'}`}
                  style={{ width: '100%', marginTop: 'auto' }}
                >
                  <span>Select {plan.name}</span>
                  <ArrowRight size={16} />
                </Link>
              </article>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <Link to="/contact" className="btn btn-primary btn-lg">
            <span>Ask Us About Custom Care Options</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};
