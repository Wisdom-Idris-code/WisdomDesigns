import React from 'react';
import { MessageSquare } from 'lucide-react';

export const WhatsAppFloating = () => {
  const whatsappUrl = "https://wa.me/23272116425?text=Hello%20Wisdom%20Designs!%20I'm%20interested%20in%20building%20a%20website%20for%20my%20business.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-btn"
      aria-label="Chat directly with Wisdom Designs on WhatsApp"
      title="Chat with Wisdom Designs on WhatsApp"
    >
      <MessageSquare size={28} />
    </a>
  );
};
