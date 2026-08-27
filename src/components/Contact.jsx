import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useCurrency } from '../context/CurrencyContext';
import { Send, MessageSquare, Phone, Mail, MapPin, CheckCircle, Clock, ShieldCheck, Loader2, AlertCircle, RotateCcw } from 'lucide-react';

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
    message: '',
    botcheck: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

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

    return `https://wa.me/23272116425?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent duplicate submissions while request is processing
    if (status === 'submitting') return;

    // Validate required fields
    if (!formData.name.trim() || !formData.businessName.trim() || !formData.phone.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Full Name, Business Name, and Phone Number).');
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey || accessKey.trim() === '' || accessKey === 'your_access_key_here') {
      setStatus('error');
      setErrorMessage('Web3Forms Access Key is not configured. Please set VITE_WEB3FORMS_ACCESS_KEY in your environment variables.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const payload = {
        access_key: accessKey.trim(),
        subject: `New Project Enquiry: ${formData.name} - ${formData.businessName}`,
        from_name: 'Wisdom Designs Website',
        name: formData.name.trim(),
        business_name: formData.businessName.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim() || 'Not provided',
        business_type: formData.businessType,
        service: formData.service,
        budget: formData.budget,
        message: formData.message.trim() || 'No additional message provided.',
        botcheck: formData.botcheck || ''
      };

      if (formData.email && formData.email.trim()) {
        payload.replyto = formData.email.trim();
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        setErrorMessage('');
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Something went wrong while submitting the enquiry. Please try again or reach out on WhatsApp.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Network error occurred while sending your request. Please check your connection or contact us on WhatsApp.');
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      businessName: '',
      phone: '',
      email: '',
      businessType: 'Restaurant & Takeaway',
      service: getInitialService(),
      budget: getInitialBudget(),
      message: '',
      botcheck: ''
    });
    setStatus('idle');
    setErrorMessage('');
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
                    href="https://wa.me/23272116425?text=Hello%20Wisdom%20Designs,%20I%20would%20like%20to%20start%20a%20project." 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ color: 'var(--whatsapp-green)', fontWeight: '600', fontSize: '0.95rem' }}
                  >
                    +232 (72) 116-425 →
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
                    href="mailto:wisdomdesigns4@gmail.com" 
                    style={{ color: 'var(--accent-light)', fontWeight: '600', fontSize: '0.95rem' }}
                  >
                    wisdomdesigns4@gmail.com
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
                <li>✓ Friendly support with zero confusion technically</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="contact-form-card">
            {status === 'success' ? (
              <div className="form-success-banner">
                <CheckCircle size={26} style={{ color: 'var(--whatsapp-green)', flexShrink: 0, marginTop: '2px' }} />
                <div style={{ width: '100%' }}>
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '0.35rem', color: '#ffffff', fontWeight: '700' }}>
                    Thank You for Reaching Out!
                  </h4>
                  <p style={{ fontSize: '0.92rem', color: '#a7f3d0', lineHeight: '1.5', marginBottom: '1rem' }}>
                    Your project details have been successfully submitted to Wisdom Designs. We'll review your requirements and reach out promptly with your strategic proposal.
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
                    <a 
                      href={generateWhatsAppUrl()} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-whatsapp" 
                      style={{ display: 'inline-flex' }}
                    >
                      <MessageSquare size={16} />
                      <span>Also Open in WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="btn btn-secondary"
                      style={{ display: 'inline-flex' }}
                    >
                      <RotateCcw size={16} />
                      <span>Send Another Enquiry</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : null}

            {status === 'error' && (
              <div className="form-error-banner">
                <AlertCircle size={24} style={{ color: '#ef4444', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '0.25rem', color: '#ffffff', fontWeight: '600' }}>
                    Submission Notice
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: '#fca5a5', lineHeight: '1.5' }}>
                    {errorMessage}
                  </p>
                </div>
              </div>
            )}

            {status !== 'success' && (
              <form onSubmit={handleSubmit}>
                {/* Honeypot field for bot protection */}
                <input
                  type="checkbox"
                  name="botcheck"
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                  onChange={() => {}}
                />

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
                      disabled={status === 'submitting'}
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
                      disabled={status === 'submitting'}
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
                      disabled={status === 'submitting'}
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
                      disabled={status === 'submitting'}
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
                      disabled={status === 'submitting'}
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
                      disabled={status === 'submitting'}
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
                    disabled={status === 'submitting'}
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
                    disabled={status === 'submitting'}
                  ></textarea>
                </div>

                <div className="form-actions-group">
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-lg" 
                    style={{ flex: 1 }}
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 size={18} className="spin-icon" />
                        <span>Sending Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Enquiry</span>
                      </>
                    )}
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
