import React, { useState } from 'react';
import { Camera, MapPin, ShieldCheck, Car, ChevronRight, Info } from 'lucide-react';
import { JEEP_PACKAGES, WHATSAPP_NUMBER } from '../constants';
import { JeepPackage } from '../types';
import ImageSlider from './ImageSlider';
import JeepModal from './JeepModal';

const JeepSection: React.FC = () => {
  const [selectedPkg, setSelectedPkg] = useState<JeepPackage | null>(null);

  const getPreviewText = (text: string, maxLength = 140) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  return (
    <section id="jeep" className="py-24 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-orange-500 font-bold tracking-widest uppercase mb-4 text-sm">
            Adventure On Wheels
          </h2>
          <h3 className="text-4xl md:text-6xl font-black text-zinc-900 leading-tight">
            MOUNT BATUR JEEP TOUR
          </h3>
          <p className="text-zinc-600 mt-4 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            Explore the volcanic landscape without trekking. A comfortable and exciting way to enjoy the sunrise at Mount Batur.
          </p>
        </div>

        {/* PACKAGE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {JEEP_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-[2.5rem] overflow-hidden group hover:shadow-2xl transition-all duration-500 card-shadow border border-zinc-100 flex flex-col"
            >
              {/* IMAGE */}
              <div className="h-64 relative overflow-hidden shrink-0">
                <ImageSlider images={pkg.images} className="w-full h-full" interval={4000} />

                <div className="absolute top-6 left-6 z-20">
                  <span className="bg-orange-500 text-white px-4 py-1.5 rounded-full text-xs font-black shadow-xl uppercase tracking-widest">
                    Package {pkg.id}
                  </span>
                </div>

                {/* DETAIL ICON */}
                <button
                  onClick={() => setSelectedPkg(pkg)}
                  className="absolute top-6 right-6 z-20 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-white hover:text-orange-500 transition-all opacity-0 group-hover:opacity-100 shadow-xl"
                  title="View Details"
                >
                  <Info className="w-5 h-5" />
                </button>
              </div>

              {/* CONTENT */}
              <div className="p-10 flex flex-col flex-grow">
                <h4 className="text-2xl font-black mb-2 text-zinc-900 group-hover:text-orange-500 transition-colors">
                  {pkg.title}
                </h4>

                <div className="flex items-baseline gap-2 mb-6">
                  <p className="text-orange-500 text-2xl font-black whitespace-nowrap">
                    {pkg.price}
                  </p>
                </div>

                {/* DESCRIPTION PREVIEW */}
                <p className="text-sm text-zinc-600 leading-relaxed mb-8 flex-grow">
                  {getPreviewText(pkg.description)}
                </p>

                {/* ACTION BUTTONS */}
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setSelectedPkg(pkg)}
                    className="flex items-center justify-center gap-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 py-5 rounded-[1.5rem] font-black transition-all"
                  >
                    Details
                  </button>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      `Hello, I want to book Mount Batur Jeep Tour\n\nPackage: ${pkg.title}\nPrice: ${pkg.price}`
                    )}`}
                    className="flex items-center justify-center gap-2 bg-zinc-900 hover:bg-orange-500 text-white py-5 rounded-[1.5rem] font-black transition-all shadow-xl hover:shadow-orange-500/30 group/btn"
                  >
                    Book
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* HIGHLIGHTS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 p-12 bg-white rounded-[3rem] border border-zinc-100 shadow-sm relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-zinc-50 rounded-full opacity-50" />

          {[
            { icon: Car, title: 'Private Jeep', desc: 'Only for your group' },
            { icon: ShieldCheck, title: 'Safety Priority', desc: 'Experienced local drivers' },
            { icon: Camera, title: 'Photo Spots', desc: 'Best scenic locations' },
            { icon: MapPin, title: 'Local Expert', desc: 'Authentic local experience' },
          ].map((item, idx) => (
            <div key={idx} className="text-center relative z-10">
              <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-orange-500">
                <item.icon className="w-8 h-8" />
              </div>
              <h5 className="font-black mb-2 text-zinc-900 uppercase tracking-tight">
                {item.title}
              </h5>
              <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <JeepModal pkg={selectedPkg} onClose={() => setSelectedPkg(null)} />
    </section>
  );
};

export default JeepSection;
