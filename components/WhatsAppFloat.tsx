
import React from 'react';
import { MessageSquare } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';

const WhatsAppFloat: React.FC = () => {
  return (
    <a 
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] group"
    >
      <div className="flex items-center">
        <div className="bg-zinc-950 text-white px-4 py-2 rounded-xl mr-3 font-bold text-sm shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 hidden md:block">
          Need help? Chat with us!
        </div>
        <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 transform hover:scale-110 transition-transform relative">
          <MessageSquare className="w-8 h-8 text-white fill-white" />
          <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppFloat;
