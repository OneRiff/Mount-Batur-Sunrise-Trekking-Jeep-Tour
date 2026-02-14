import React from 'react';
import { Flame, Car, CheckCircle2 } from 'lucide-react';
import {
  HOT_SPRING_PRICE,
  HOT_SPRING_INCLUDED,
  PICKUP_FEES,
  HOT_SPRING_IMAGES,
  WHATSAPP_NUMBER,
} from '../constants';
import ImageSlider from './ImageSlider';

const OptionalExperienceSection: React.FC = () => {
  const waMessage = encodeURIComponent(
    'Hello, I would like to ask about Hot Spring and pick up options for Mount Batur Tour.'
  );

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4">
            Optional Experiences
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-zinc-900">
            COMPLETE YOUR JOURNEY
          </h3>
          <p className="text-zinc-600 mt-4 max-w-2xl mx-auto text-lg font-medium">
            Enhance your Mount Batur adventure with relaxing hot springs and flexible pick-up options.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* HOT SPRING */}
          <div className="rounded-[2.5rem] overflow-hidden border border-orange-500/10 bg-orange-500/5 shadow-sm">
            
            {/* Image Slider */}
            <div className="relative h-72">
              <ImageSlider
                images={HOT_SPRING_IMAGES}
                interval={4000}
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5">
                <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                  Hot Spring
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500">
                  <Flame className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-zinc-900">
                    Hot Spring Experience
                  </h4>
                  <p className="text-orange-500 font-bold">
                    {HOT_SPRING_PRICE}
                  </p>
                </div>
              </div>

              <p className="text-zinc-700 text-sm leading-relaxed mb-6">
                After enjoying the sunrise and adventure at Mount Batur, relax your body
                in a natural hot spring with stunning mountain views.
                A perfect way to recharge before returning to your hotel.
              </p>

              <ul className="space-y-3 mb-8">
                {HOT_SPRING_INCLUDED.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm text-zinc-700 font-semibold"
                  >
                    <CheckCircle2 className="w-5 h-5 text-orange-500" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`}
                className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-black transition-all shadow-lg shadow-orange-500/30"
              >
                Ask About Hot Spring
              </a>
            </div>
          </div>

          {/* PICK UP FEES */}
          <div className="p-10 rounded-[2.5rem] bg-zinc-50 border border-zinc-100 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-zinc-200 rounded-2xl flex items-center justify-center text-zinc-700">
                <Car className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-2xl font-black text-zinc-900">
                  Additional Pick-Up Fee
                </h4>
                <p className="text-zinc-500 text-sm">
                  Applied for certain hotel locations
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PICKUP_FEES.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center p-4 bg-white rounded-xl border border-zinc-100"
                >
                  <span className="text-sm font-bold text-zinc-700">
                    {item.area}
                  </span>
                  <span className="text-sm font-black text-orange-500">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs text-zinc-400 mt-6 font-medium leading-relaxed">
              * Pick-up fee depends on distance and fuel cost.
              Please confirm your hotel location before booking.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OptionalExperienceSection;
