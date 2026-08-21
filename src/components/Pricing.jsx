import React from 'react';
import { Link } from 'react-router-dom';
import { useCurrency } from '../context/CurrencyContext';
import { projectPricingData, domainAddon } from '../data/pricingData';
import { Check, Clock, Globe, ArrowRight, ShieldCheck } from 'lucide-react';

export const Pricing = ({ showTitle = true, showCareLink = true }) => {
  const { currency, toggleCurrency } = useCurrency();

  return (
    <section className="section" id="pricing" style={{ background: 'rgba(15, 23, 42, 0.5)' }}>
      <div className="container">
        {showTitle && (
          <header className="section-header">
            <span className="section-tag">Clear & Transparent Pricing</span>
            <h2 className="section-title">Investment Packages Tailored for Growth</h2>
            <p className="section-subtitle">
              No surprise invoices, hidden agency fees, or recurring traps. Simple, transparent packages with flexible currency viewing.
            </p>
          </header>
        )}

        {/* Pricing Currency Switcher */}
        <div className="pricing-header-toggle-wrapper" style={{ marginBottom: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
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

        {/* Pricing Cards Grid */}
        <div className="pricing-grid">
          {projectPricingData.map((tier) => {
            const displayPrice = currency === 'USD' ? tier.priceUSD : tier.priceNLe;
            const isPopular = tier.popular;

            return (
              <article 
                key={tier.id} 
                className={`pricing-card ${isPopular ? 'popular-tier' : ''}`}
              >
                {isPopular && <span className="popular-badge">Most Popular</span>}

                <span className="pricing-tier-badge">{tier.badge}</span>
                <h3 className="pricing-tier-name">{tier.name}</h3>
                <p className="pricing-tagline">{tier.tagline}</p>

                <div className="pricing-amount-box">
                  <div className="pricing-amount">{displayPrice}</div>
                </div>

                <div className="pricing-timeline">
                  <Clock size={15} style={{ color: 'var(--accent-light)' }} />
                  <span>Timeline: {tier.timeline}</span>
                </div>

                <ul className="pricing-features-list">
                  {tier.features.map((feat, idx) => (
                    <li key={idx} className="pricing-feature-item">
                      <Check size={16} className="feature-check-icon" style={{ color: isPopular ? 'var(--whatsapp-green)' : 'var(--accent-light)' }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to={`/contact?plan=${tier.id}`} 
                  className={`btn ${isPopular ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ width: '100%', marginTop: 'auto' }}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight size={16} />
                </Link>
              </article>
            );
          })}
        </div>

        {/* Domain Add-on Notice */}
        <div className="domain-addon-notice">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: 'var(--radius-sm)', background: 'rgba(37, 99, 235, 0.15)', color: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Globe size={22} />
            </div>
            <div>
              <strong style={{ fontSize: '1rem', color: 'var(--text-primary)', display: 'block' }}>
                Custom Domain Registration (.com, .org, .net)
              </strong>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                {domainAddon.desc} Note: Domain registration is separate from website development.
              </span>
            </div>
          </div>
          <div style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--accent-light)', whiteSpace: 'nowrap' }}>
            {currency === 'USD' ? domainAddon.priceUSD : domainAddon.priceNLe}
          </div>
        </div>

        {/* Care Plan Banner Link */}
        {showCareLink && (
          <div style={{
            marginTop: '2.5rem',
            background: 'rgba(16, 185, 129, 0.06)',
            border: '1px solid rgba(16, 185, 129, 0.2)',
            borderRadius: 'var(--radius-md)',
            padding: '1.5rem 2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <ShieldCheck size={28} style={{ color: 'var(--whatsapp-green)', flexShrink: 0 }} />
              <div>
                <strong style={{ display: 'block', fontSize: '1.05rem', color: '#ffffff' }}>Looking for monthly website maintenance & updates?</strong>
                <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  Explore our optional Website Care Plans starting from $20/month (NLe 456/month).
                </span>
              </div>
            </div>
            <Link to="/care" className="btn btn-secondary btn-sm" style={{ borderColor: 'rgba(16, 185, 129, 0.3)', color: '#34d399' }}>
              <span>View Care Plans →</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
