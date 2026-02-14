
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-orange-500 font-bold tracking-widest uppercase mb-4">Happy Travelers</h2>
          <h3 className="text-4xl md:text-5xl font-black text-zinc-900 uppercase">WHAT OUR GUESTS SAY</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-10 rounded-[2.5rem] relative group border border-zinc-100 hover:shadow-2xl transition-all duration-500 card-shadow">
              <Quote className="absolute top-8 right-8 text-orange-500/10 w-12 h-12" />
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                ))}
              </div>
              <p className="text-zinc-600 text-lg italic mb-10 leading-relaxed font-medium">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-orange-500/20" />
                <div>
                  <h5 className="font-bold text-zinc-900 text-lg">{t.name}</h5>
                  <p className="text-zinc-400 text-sm font-semibold">Verified Customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
