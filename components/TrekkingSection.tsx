import React, { useState, useRef } from 'react';
import { CheckCircle2, Info, Users, Mountain, MessageSquare, XCircle } from 'lucide-react';
import {
  TREKKING_PRICES,
  TREKKING_IMAGES,
  TREKKING_INCLUDED,
  TREKKING_EXCLUDED,
  TREKKING_NOTE,
  WHATSAPP_NUMBER,
} from '../constants';
import ImageSlider from './ImageSlider';

const TrekkingSection: React.FC = () => {
  const [selectedPax, setSelectedPax] = useState<string>(TREKKING_PRICES[0].pax);
  const bookingRef = useRef<HTMLDivElement>(null);

  const selectedPrice =
    TREKKING_PRICES.find(p => p.pax === selectedPax)?.price || '';

  const waMessage = encodeURIComponent(
    `Hello, I want to book Mount Batur Sunrise Trekking\n\nPackage: ${selectedPax}\nPrice: ${selectedPrice}`
  );

  const handleSelectPackage = (pax: string) => {
    setSelectedPax(pax);
    setTimeout(() => {
      bookingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 120);
  };

  return (
    <section id="trekking" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="mb-14 text-center">
          <h2 className="text-orange-500 font-bold tracking-widest uppercase mb-4 text-sm">
            Mount Batur Experience
          </h2>
          <h3 className="text-4xl md:text-5xl font-black mb-4 leading-tight text-zinc-900 uppercase tracking-tight">
            Mount Batur Sunrise <br className="hidden lg:block" /> Trekking
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* LEFT */}
          <div className="w-full lg:w-3/5 flex flex-col gap-8 order-2 lg:order-1">

            {/* PRIVATE INFO */}
            <div className="flex gap-4 p-6 bg-zinc-50 rounded-3xl border border-zinc-100 card-shadow">
              <Mountain className="text-orange-500 w-10 h-10 shrink-0" />
              <div>
                <h4 className="font-bold text-lg mb-1 text-zinc-900 uppercase">
                  Private Trekking
                </h4>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Not combined with other groups. Personal service, safer climb, and full attention from your professional local guide.
                </p>
              </div>
            </div>

            {/* INCLUDED */}
            <div className="bg-white p-8 rounded-3xl border border-zinc-50 card-shadow">
              <h5 className="font-bold text-zinc-900 mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
                <span className="w-1 h-4 bg-orange-500 rounded-full" />
                Package Includes
              </h5>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {TREKKING_INCLUDED.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-zinc-700">
                    <CheckCircle2 className="text-orange-500 w-5 h-5 shrink-0" />
                    <span className="text-sm font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* EXCLUDED */}
            <div className="bg-zinc-50 p-6 rounded-3xl border border-zinc-100">
              <h5 className="font-bold text-zinc-900 mb-4 uppercase tracking-wider text-xs">
                Excludes
              </h5>
              <div className="flex flex-col gap-3">
                {TREKKING_EXCLUDED.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-zinc-600">
                    <XCircle className="w-5 h-5 text-zinc-400" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* NOTE */}
            <div className="flex items-start gap-4 p-6 bg-orange-500/5 border border-orange-500/10 rounded-3xl">
              <div className="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center shrink-0">
                <Info className="text-orange-500 w-6 h-6" />
              </div>
              <p className="text-sm text-zinc-700 leading-relaxed font-medium italic">
                <strong>Note:</strong> {TREKKING_NOTE}
              </p>
            </div>

            {/* CTA */}
            <div ref={bookingRef} className="pt-6">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-4 bg-orange-500 hover:bg-orange-600 text-white px-10 py-6 rounded-[2rem] font-black text-lg transition-all shadow-2xl shadow-orange-500/30 hover:-translate-y-1 active:scale-95 uppercase"
              >
                <MessageSquare className="w-6 h-6" />
                Book via WhatsApp
              </a>

              <p className="text-center sm:text-left text-xs text-zinc-400 mt-4 font-bold uppercase tracking-widest">
                Selected: {selectedPax} — {selectedPrice}
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-2/5 flex flex-col gap-6 order-1 lg:order-2">
            <h5 className="font-bold text-zinc-400 text-[10px] uppercase tracking-[0.25em] mb-2 text-center lg:text-left">
              Select Number of People
            </h5>

            <div className="flex flex-col gap-4">
              {TREKKING_PRICES.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectPackage(item.pax)}
                  className={`group bg-white p-6 rounded-3xl border-2 transition-all text-left ${
                    selectedPax === item.pax
                      ? 'border-orange-500 shadow-xl shadow-orange-500/10 scale-[1.02]'
                      : 'border-zinc-100 hover:border-zinc-200 card-shadow'
                  }`}
                >
                  <div className="block justify-between items-center gap-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                          selectedPax === item.pax
                            ? 'bg-orange-500 text-white'
                            : 'bg-zinc-100 text-zinc-400'
                        }`}
                      >
                        <Users className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-black text-zinc-900">
                          {item.pax}
                        </h4>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                          Private Trekking
                        </p>
                      </div>
                    </div>

                    <p className="text-lg font-black text-orange-500 text-right whitespace-nowrap">
                      {item.price}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* SLIDER */}
            <div className="relative rounded-[2.5rem] overflow-hidden h-64 shadow-2xl border-4 border-white card-shadow mt-6">
              <ImageSlider images={TREKKING_IMAGES} className="w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="text-[10px] font-black bg-orange-500 text-white px-4 py-2 rounded-full uppercase tracking-widest">
                  Sunrise at the Top
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrekkingSection;
