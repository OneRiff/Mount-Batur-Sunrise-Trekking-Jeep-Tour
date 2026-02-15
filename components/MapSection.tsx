
import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

const MapSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <div className="flex items-center gap-3 text-orange-500 font-bold uppercase tracking-widest mb-4">
              <MapPin className="w-5 h-5" />
              Location
            </div>
            <h3 className="text-4xl font-black mb-6 text-zinc-900 uppercase">MEETING POINT & TREKKING AREA</h3>
            <p className="text-zinc-600 mb-8 leading-relaxed">
              We are located in the heart of Kintamani. Our meeting points are easily accessible and provide the perfect starting base for your Mount Batur adventure.
            </p>
            <div className="bg-zinc-50 p-8 rounded-3xl border-l-4 border-orange-500 shadow-sm border border-zinc-100">
              <h5 className="font-bold text-xl mb-2 text-zinc-900 flex items-center gap-2">
                <Navigation className="w-5 h-5 text-orange-500" />
                Your Guide To Mount Batur
              </h5>
              <p className="text-zinc-500 text-sm mb-4">Songan, Kec. Kintamani, Kabupaten Bangli, Bali 80652</p>
              <a 
                href="https://maps.app.goo.gl/AzKeVRSmdgu9yw3b6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-500 font-bold text-sm hover:underline"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
          <div className="md:w-2/3 h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-zinc-100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.394199886742!2d115.38591960000001!3d-8.263503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd1f70fbf3ef495%3A0x8aa52de5e33a0aa!2sYour%20Guide%20To%20Mount%20Batur!5e0!3m2!1sid!2sid!4v1771130449744!5m2!1sid!2sid"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
