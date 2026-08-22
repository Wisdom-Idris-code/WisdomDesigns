import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useCurrency } from '../context/CurrencyContext';
import { Send, MessageSquare, Phone, Mail, MapPin, CheckCircle, Clock, ShieldCheck } from 'lucide-react';

export const Contact = ({ showHeader = true }) => {
  const [searchParams] = useSearchParams();
  const planParam = searchParams.get('plan');
  const careParam = searchParams.get('care');

  const getInitialBudget = () => {
    if (planParam === 'starter') return 'Starter Website ($200–$300 / NLe 4,560–NLe 6,840)';
    if (planParam === 'business') return 'Business Website ($350–$450 / NLe 7,980–NLe 10,260)';
    if (planParam === 'premium') return 'Premium Website ($500–$700 / NLe 11,400–NLe 15,960)';
    if (planParam === 'custom') return 'Custom Web Solution ($800–$1,000+ / NLe 18,240–NLe 22,800+)';
    if (careParam) return 'Monthly Website Care Plan';
    return 'Business Website ($350–$450 / NLe 7,980–NLe 10,260)';
  };

  const getInitialService = () => {
    if (careParam) return 'Monthly Website Care Plan';
    return 'New Custom Website';
  };

  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    businessType: 'Restaurant & Takeaway',
    service: getInitialService(),
    budget: getInitialBudget(),
    message: ''
  });

  useEffect(() => {
    if (planParam) {
      setFormData(prev => ({
        ...prev,
        budget: getInitialBudget()
      }));
    } else if (careParam) {
      setFormData(prev => ({
        ...prev,
        service: 'Monthly Website Care Plan',
        budget: `Care Plan: ${careParam}`
      }));
    }
  }, [planParam, careParam]);

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppUrl = () => {
    const text = 
      `*New Project Inquiry for Wisdom Designs*\n\n` +
      `👤 *Name:* ${formData.name || 'Not provided'}\n` +
      `🏢 *Business Name:* ${formData.businessName || 'Not provided'}\n` +
      `📱 *Phone/WhatsApp:* ${formData.phone || 'Not provided'}\n` +
      `✉️ *Email:* ${formData.email || 'Not provided'}\n` +
      `🏷️ *Business Type:* ${formData.businessType}\n` +
      `🛠️ *Required Service:* ${formData.service}\n` +
      `💰 *Budget Range:* ${formData.budget}\n\n` +
      `📝 *Project Details:*\n${formData.message || 'I would like to discuss building a website for my business.'}`;

    return `https://wa.me/23200000000?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        {showHeader && (
          <header className="section-header">
            <span className="section-tag">Let's Get Started</span>
            <h2 className="section-title">Let's Talk About Your Business.</h2>
            <p className="section-subtitle">
              Tell us about your business and your goals. We'll reply promptly with a tailored strategy and transparent quote.
            </p>
          </header>
        )}

        <div className="contact-grid">
          {/* Left Column: Contact Channels & Business Details */}
          <div className="contact-info-card">
            <div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '0.75rem' }}>Direct Communication</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                We believe in fast, transparent, and approachable communication. Reach out via WhatsApp, phone, email, or by submitting this enquiry form.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div className="contact-channel-item">
                <div className="contact-channel-icon green">
                  <MessageSquare size={22} />
                </div>
                <div className="contact-channel-details">
                  <h4>WhatsApp (Fastest Response)</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                    Direct chat with our development team
                  </p>
                  <a 
                    href="https://wa.me/23200000000?text=Hello%20Wisdom%20Designs,%20I%20would%20like%20to%20start%20a%20project." 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ color: 'var(--whatsapp-green)', fontWeight: '600', fontSize: '0.95rem' }}
                  >
                    +232 (00) 000-000 →
                  </a>
                </div>
              </div>

              <div className="contact-channel-item">
                <div className="contact-channel-icon">
                  <Mail size={22} />
                </div>
                <div className="contact-channel-details">
                  <h4>Email Inquiries</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                    For proposals and formal briefs
                  </p>
                  <a 
                    href="mailto:contact@wisdomdesigns.dev" 
                    style={{ color: 'var(--accent-light)', fontWeight: '600', fontSize: '0.95rem' }}
                  >
                    contact@wisdomdesigns.dev
                  </a>
                </div>
              </div>

              <div className="contact-channel-item">
                <div className="contact-channel-icon">
                  <MapPin size={22} />
                </div>
                <div className="contact-channel-details">
                  <h4>Location & Availability</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    Sierra Leone (Serving nationwide & international clients)
                  </p>
                </div>
              </div>

              <div className="contact-channel-item">
                <div className="contact-channel-icon">
                  <Clock size={22} />
                </div>
                <div className="contact-channel-details">
                  <h4>Working Hours</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    Monday – Saturday: 8:00 AM – 7:00 PM (GMT)
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Guarantees */}
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.03)', 
              border: '1px solid var(--border-subtle)', 
              borderRadius: 'var(--radius-md)', 
              padding: '1.25rem' 
            }}>
              <h4 style={{ fontSize: '0.95rem', marginBottom: '0.5rem', color: 'var(--accent-light)' }}>Our Guarantee to You:</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <li>✓ Free consultation and design strategy before you commit</li>
                <li>✓ 100% full ownership of your code, design, and domain</li>
                <li>✓ Friendly support with zero confusing technical jargon</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="contact-form-card">
            {submitted ? (
              <div className="form-success-banner">
                <CheckCircle size={26} style={{ color: 'var(--whatsapp-green)', flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem', color: '#ffffff' }}>Thank You for Reaching Out!</h4>
                  <p style={{ fontSize: '0.9rem', color: '#a7f3d0' }}>
                    Your project details have been recorded. You can also send them directly via WhatsApp below for an instant reply.
                  </p>
                  <a 
                    href={generateWhatsAppUrl()} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-whatsapp" 
                    style={{ marginTop: '1rem', display: 'inline-flex' }}
                  >
                    <MessageSquare size={16} />
                    <span>Open in WhatsApp Now</span>
                  </a>
                </div>
              </div>
            ) : null}

            <form onSubmit={handleSubmit}>
              <div className="form-row two-col">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Samuel Koroma"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="businessName" className="form-label">Business Name *</label>
                  <input
                    id="businessName"
                    type="text"
                    name="businessName"
                    required
                    placeholder="e.g. Freetown Grill House"
                    className="form-input"
                    value={formData.businessName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row two-col">
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone / WhatsApp Number *</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    required
                    placeholder="e.g. +232 76 123456"
                    className="form-input"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="e.g. info@yourbusiness.com"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row two-col">
                <div className="form-group">
                  <label htmlFor="businessType" className="form-label">Business Type / Industry</label>
                  <select
                    id="businessType"
                    name="businessType"
                    className="form-select"
                    value={formData.businessType}
                    onChange={handleChange}
                  >
                    <option value="Restaurant & Takeaway">Restaurant & Takeaway / Food</option>
                    <option value="Hair Salon, Barber & Spa">Hair Salon, Barber & Spa</option>
                    <option value="Hotel, Resort & Guest House">Hotel, Resort & Guest House</option>
                    <option value="Retail Boutique & Fashion">Retail Boutique & Fashion</option>
                    <option value="Healthcare & Medical Clinic">Healthcare & Medical Clinic</option>
                    <option value="Legal, Accounting & Consulting">Legal, Accounting & Consulting</option>
                    <option value="School, Academy & Training">School, Academy & Training</option>
                    <option value="Other Business">Other Business Category</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="service" className="form-label">Website Package / Service</label>
                  <select
                    id="service"
                    name="service"
                    className="form-select"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="Starter Website ($200–$300)">Starter Website ($200–$300)</option>
                    <option value="Business Website ($350–$450)">Business Website ($350–$450)</option>
                    <option value="Premium Website ($500–$700)">Premium Website ($500–$700)</option>
                    <option value="Custom Web Solution ($800–$1,000+)">Custom Web Solution ($800–$1,000+)</option>
                    <option value="Monthly Website Care Plan">Monthly Website Care Plan</option>
                    <option value="Website Redesign & Modernization">Website Redesign & Modernization</option>
                  </select>
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                <label htmlFor="budget" className="form-label">Estimated Budget</label>
                <select
                  id="budget"
                  name="budget"
                  className="form-select"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="Starter Website ($200–$300 / NLe 4,560–NLe 6,840)">
                    Starter Website ($200 – $300 / NLe 4,560 – NLe 6,840)
                  </option>
                  <option value="Business Website ($350–$450 / NLe 7,980–NLe 10,260)">
                    Business Website ($350 – $450 / NLe 7,980 – NLe 10,260) — Recommended
                  </option>
                  <option value="Premium Website ($500–$700 / NLe 11,400–NLe 15,960)">
                    Premium Website ($500 – $700 / NLe 11,400 – NLe 15,960)
                  </option>
                  <option value="Custom Web Solution ($800–$1,000+ / NLe 18,240–NLe 22,800+)">
                    Custom Web Solution ($800 – $1,000+ / NLe 18,240 – NLe 22,800+)
                  </option>
                  <option value="Monthly Care Plan ($20–$50/mo)">
                    Monthly Care Plan ($20 – $50/mo)
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Project Description & Goals</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell us what your business does, what you want to achieve, any special features you need (e.g., food menu, WhatsApp ordering, booking system), or links to sites you admire."
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="form-actions-group">
                <button type="submit" className="btn btn-primary btn-lg" style={{ flex: 1 }}>
                  <Send size={18} />
                  <span>Send Enquiry</span>
                </button>

                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg"
                  style={{ flex: 1 }}
                >
                  <MessageSquare size={18} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
