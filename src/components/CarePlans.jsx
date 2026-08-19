import React from 'react';
import { useCurrency } from '../context/CurrencyContext';
import { carePlansData } from '../data/pricingData';
import { ShieldCheck, Check, ArrowRight, LifeBuoy } from 'lucide-react';

export const CarePlans = () => {
  const { currency } = useCurrency();

  return (
    <section className="section" id="care-plans">
      <div className="container">
        <header className="section-header">
          <span className="section-tag" style={{ background: 'rgba(16, 185, 129, 0.12)', borderColor: 'rgba(16, 185, 129, 0.3)', color: '#34d399' }}>
            Optional Ongoing Maintenance
          </span>
          <h2 className="section-title">Website Care & Support Plans</h2>
          <p className="section-subtitle">
            Never worry about broken links, expired domains, slow speeds, or out-of-date prices. Let us manage your website while you manage your business.
          </p>
        </header>

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

                <a 
                  href={`#contact?care=${plan.id}`} 
                  className={`btn ${isPopular ? 'btn-whatsapp' : 'btn-secondary'}`}
                  style={{ width: '100%', marginTop: 'auto' }}
                >
                  <span>Select {plan.name}</span>
                  <ArrowRight size={16} />
                </a>
              </article>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <strong>Flexible Terms: </strong> All website care plans are month-to-month. Cancel or adjust your plan anytime with zero penalties.
          </p>
        </div>
      </div>
    </section>
  );
};
