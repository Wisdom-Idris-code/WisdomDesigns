import React from 'react';
import { Target, MessageSquare, Smartphone, HelpCircle, ShieldCheck, HeartHandshake } from 'lucide-react';

export const WhyUs = () => {
  const reasons = [
    {
      icon: Target,
      title: 'Built to Generate Real Revenue',
      desc: 'We don’t just build pretty pages. Every button, menu layout, and form is engineered to turn casual visitors into paying customers and phone calls.'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp-First Integration',
      desc: 'In Sierra Leone and emerging markets, WhatsApp is where business happens. We build direct ordering and booking systems right into your customer’s favorite app.'
    },
    {
      icon: Smartphone,
      title: 'Blazing Fast on Mobile Data',
      desc: 'Your customers browse on phones, often with limited data or slower connections. Our lightweight websites load in seconds without draining bandwidth.'
    },
    {
      icon: HelpCircle,
      title: 'Zero Tech Jargon — We Handle Everything',
      desc: 'No confusing developer talk. We handle domain registration, cloud hosting, design, security, and setup from start to finish.'
    },
    {
      icon: ShieldCheck,
      title: '100% Client Ownership & Freedom',
      desc: 'You own your website, code, domain, and graphics completely. No proprietary lock-ins or hostage holding.'
    },
    {
      icon: HeartHandshake,
      title: 'Ongoing Care & Monthly Peace of Mind',
      desc: 'Need to change a price or add new photos? With our Website Care plans, simply shoot us a message and we update it promptly.'
    }
  ];

  return (
    <section className="section" id="why-us">
      <div className="container">
        <header className="section-header">
          <span className="section-tag">Why Wisdom Designs</span>
          <h2 className="section-title">A Web Partner Focused on Your Bottom Line</h2>
          <p className="section-subtitle">
            We are dedicated to helping small and growing businesses establish a credible, high-converting digital presence without the high agency price tag.
          </p>
        </header>

        <div className="why-us-grid">
          {reasons.map((reason, idx) => {
            const IconComponent = reason.icon;
            return (
              <article key={idx} className="why-card">
                <div className="why-icon-box">
                  <IconComponent size={26} />
                </div>
                <h3 className="why-title">{reason.title}</h3>
                <p className="why-desc">{reason.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
