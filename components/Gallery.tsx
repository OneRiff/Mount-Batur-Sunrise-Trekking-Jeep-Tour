import React, { useState, useRef } from 'react';
import { X, Maximize2 } from 'lucide-react';
import { GALLERY_IMAGES } from '../constants';

const MOBILE_LIMIT = 4;

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  const imagesToShow = showAll
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.slice(0, MOBILE_LIMIT);

  const toggleGallery = () => {
    setShowAll((prev) => !prev);

    if (showAll && galleryRef.current) {
      galleryRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section id="gallery" className="py-24 bg-white" ref={galleryRef}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-orange-500 font-bold tracking-widest uppercase mb-4">
              Our Gallery
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-zinc-900 uppercase">
              Moments on the Mountain
            </h3>
          </div>
          <p className="text-zinc-600 max-w-sm">
            A glimpse of the adventures our guests have experienced at Mount Batur.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {imagesToShow.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelectedImage(img.url)}
              className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group shadow-lg"
            >
              <img
                src={img.url}
                alt={"image"}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white p-4 rounded-full transform scale-0 group-hover:scale-100 transition-transform shadow-xl">
                  <Maximize2 className="text-orange-500" />
                </div>
              </div>

              
            </div>
          ))}
        </div>

        {/* Toggle Button (Mobile Only) */}
        {GALLERY_IMAGES.length > MOBILE_LIMIT && (
          <div className="mt-10 flex justify-center lg:hidden">
            <button
              onClick={toggleGallery}
              className={`px-8 py-3 rounded-full font-black uppercase tracking-widest text-sm transition-all shadow-lg
                ${
                  showAll
                    ? 'bg-zinc-900 hover:bg-zinc-800 text-white'
                    : 'bg-orange-500 hover:bg-orange-600 text-white'
                }`}
            >
              {showAll ? 'Close Gallery' : 'View All Photos'}
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[60] bg-zinc-900/95 flex items-center justify-center p-6 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-8 right-8 text-white hover:text-orange-500 transition-colors p-3 bg-white/10 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X className="w-8 h-8" />
          </button>

          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl animate-in zoom-in-95 duration-300 border-4 border-white/10"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
