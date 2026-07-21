import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Metodología', href: '#metodologia' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/logoarmonia.png" 
              alt="Armonía Logo" 
              className="h-24 md:h-32 w-auto object-contain" 
            />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`font-medium hover:text-brand-green transition-colors ${isScrolled ? 'text-brand-darkGray' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/527352894618" 
              target="_blank" 
              rel="noreferrer"
              className="bg-brand-green hover:bg-brand-darkGreen text-white px-5 py-2 rounded-full font-medium transition-colors shadow-lg"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={isScrolled ? 'text-brand-black' : 'text-white'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-nav absolute top-full left-0 w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 text-brand-darkGray hover:text-brand-green font-medium"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/527352894618" 
              target="_blank" 
              rel="noreferrer"
              className="block mt-4 text-center bg-brand-green text-white px-5 py-3 rounded-lg font-medium"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};