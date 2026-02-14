import React from 'react';
import {
  X,
  MessageSquare,
  Clock,
  Map,
  ShieldCheck,
} from 'lucide-react';
import { JeepPackage } from '../types';
import { WHATSAPP_NUMBER } from '../constants';
import ImageSlider from './ImageSlider';

interface JeepModalProps {
  pkg: JeepPackage | null;
  onClose: () => void;
}

const JeepModal: React.FC<JeepModalProps> = ({ pkg, onClose }) => {
  if (!pkg) return null;

  const waMessage = encodeURIComponent(
    `Hello, I'm interested in the Mount Batur Jeep Tour: ${pkg.title} (Package ${pkg.id}). Please send me more details.`
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white w-full max-w-4xl max-h-[90vh] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 w-10 h-10 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-all"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col lg:flex-row h-full overflow-y-auto lg:overflow-hidden">

          {/* LEFT – IMAGE */}
          <div className="lg:w-1/2 h-72 lg:h-auto shrink-0 relative">
            <ImageSlider images={pkg.images} className="w-full h-full" interval={3500} />
            <div className="absolute top-6 left-6 z-10">
              <span className="bg-orange-500 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-xl">
                PACKAGE {pkg.id}
              </span>
            </div>
          </div>

          {/* RIGHT – CONTENT */}
          <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col">

            {/* Header */}
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 mb-2">
                {pkg.title}
              </h2>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-orange-500">
                  {pkg.price.split(' / ')[0]}
                </span>
                <span className="text-zinc-400 text-xs font-bold uppercase tracking-widest">
                  per Jeep
                </span>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="mb-10">
              <h5 className="text-zinc-900 font-bold uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-500" />
                Tour Description
              </h5>

              <p className="text-sm text-zinc-600 leading-relaxed font-medium whitespace-pre-line">
                {pkg.description}
              </p>
            </div>

            {/* FEATURES */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex flex-col gap-2">
                <Map className="w-5 h-5 text-orange-500" />
                <p className="text-xs font-black uppercase text-zinc-900">
                  Guided Tour
                </p>
                <p className="text-[10px] text-zinc-400 font-medium">
                  Experienced local driver guide.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <ShieldCheck className="w-5 h-5 text-orange-500" />
                <p className="text-xs font-black uppercase text-zinc-900">
                  Safety First
                </p>
                <p className="text-[10px] text-zinc-400 font-medium">
                  Licensed vehicles & safety focused service.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-auto pt-6 border-t border-zinc-100">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`}
                className="w-full flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white py-5 rounded-[1.5rem] font-black transition-all shadow-xl shadow-orange-500/30"
              >
                <MessageSquare className="w-6 h-6" />
                Book Now via WhatsApp
              </a>

              <p className="text-[10px] text-center text-zinc-400 font-bold uppercase tracking-[0.2em] mt-4">
                Instant Confirmation • Best Price Guaranteed
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default JeepModal;
