
import React from 'react';
import { WhatsAppIcon } from './IconComponents';

const WhatsAppButton: React.FC = () => {
  const WHATSAPP_LINK = "https://wa.me/237674772569";

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 z-40"
      aria-label="Contact us on WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
};

export default WhatsAppButton;
