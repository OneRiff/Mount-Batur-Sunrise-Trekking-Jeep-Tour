import React, { useState } from 'react';
import { Menu, X, Compass } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Trekking', href: '#trekking' },
    { name: 'Jeep Tour', href: '#jeep' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white py-4 shadow-sm border-b border-zinc-100">
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Compass className="text-orange-500 w-8 h-8" />
          <span className="text-xl font-black tracking-tight uppercase text-zinc-900">
            {/* Mount Batur <span className="text-orange-500">Adventure</span> */}
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-zinc-700 hover:text-orange-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-full text-sm font-black text-white transition-all shadow-lg shadow-orange-500/30"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-zinc-900"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full border-b border-zinc-100 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold py-3 border-b border-zinc-100 last:border-0 text-zinc-900 hover:text-orange-500"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-4 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full text-center font-black shadow-lg"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
