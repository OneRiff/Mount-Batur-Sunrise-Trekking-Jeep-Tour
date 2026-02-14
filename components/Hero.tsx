
import React from 'react';
import { ChevronRight, MessageSquare } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE, HERO_IMAGES } from '../constants';
import ImageSlider from './ImageSlider';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <ImageSlider images={HERO_IMAGES} className="w-full h-full" />
        {/* Overlays optimized for white body background transition */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-zinc-950/40 to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-zinc-950/40 pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 px-3 py-1 rounded-full text-orange-500 text-xs font-bold mb-6 animate-pulse">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            #1 TRUSTED BALI TOUR GUIDE
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-6 leading-[1.1] tracking-tight text-white">
            Mount Batur Sunrise Trekking <br />
            <span className="text-orange-500">& Jeep Tour</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-100 mb-10 max-w-xl font-light leading-relaxed">
            Private Sunrise Trekking Experience with Professional Service. Witness the most breathtaking views in Kintamani, Bali.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 shadow-xl shadow-orange-500/25"
            >
              <MessageSquare className="w-5 h-5" />
              Book via WhatsApp
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#trekking" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center transition-all border border-white/20"
            >
              View Packages
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block z-10">
        <div className="w-6 h-10 border-2 border-zinc-900/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-orange-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
