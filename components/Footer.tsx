
import React from 'react';
import { Instagram, Facebook, MessageSquare, Clock, Languages, Compass, ArrowUp } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-zinc-50 pt-24 pb-12 border-t border-zinc-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-orange-500 font-bold tracking-widest uppercase mb-4">Secure Your Slot</h2>
          <h3 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter text-zinc-900 uppercase">READY FOR <br />ADVENTURE?</h3>
          
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            className="inline-flex flex-col md:flex-row items-center gap-6 bg-orange-500 hover:bg-orange-600 px-12 py-8 rounded-[2.5rem] transition-all group shadow-2xl shadow-orange-500/30"
          >
            <div className="bg-white p-4 rounded-full text-orange-500">
              <MessageSquare className="w-8 h-8" />
            </div>
            <div className="text-left">
              <span className="text-white/80 font-bold uppercase tracking-widest text-xs block mb-1">Book Today via</span>
              <span className="text-3xl md:text-4xl font-black text-white uppercase">WHATSAPP BOOKING</span>
            </div>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-zinc-200 pt-16 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6 text-zinc-900">
              <Compass className="text-orange-500 w-8 h-8" />
              <span className="text-xl font-bold tracking-tighter">Mount Batur Sunrise Trekking & Jeep Tour</span>
            </div>
            <p className="text-zinc-600 max-w-sm mb-8 font-medium">
              Professional mountain guide services in Bali. Specializing in private trekking and jeep tours to ensure the best experience for our guests.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-white border border-zinc-200 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all shadow-sm">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-white border border-zinc-200 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all shadow-sm">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-zinc-900 text-lg mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-orange-500" />
              Operational Hours
            </h4>
            <ul className="text-zinc-500 space-y-4 text-sm font-semibold">
              <li>Open Daily: 24/7</li>
              <li>Trekking Starts: 03:00 AM</li>
              <li>Jeep Tours Start: 04:30 AM</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-200 text-zinc-500 text-xs gap-4 font-bold">
          <p>© 2026 Mount Batur Sunrise Trekking
& Jeep Tour. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-orange-500">Privacy Policy</a>
            <a href="#" className="hover:text-orange-500">Terms of Service</a>
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 bg-white border border-zinc-200 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors shadow-sm"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
