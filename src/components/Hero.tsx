import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-32 md:pt-48">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Condominio moderno" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 to-brand-black/40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-green/20 border border-brand-green/30 text-brand-green font-medium text-sm mb-6 backdrop-blur-sm">
              Líderes en Morelos
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
              Administración Profesional de Condominios en Morelos
            </h1>
            <p className="text-xl text-gray-200 mb-10 font-light max-w-2xl">
              Tranquilidad, orden, plusvalía y transparencia para tu comunidad. Protegemos tu patrimonio con procesos legales sólidos y gestión financiera transparente.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contacto" 
                className="bg-brand-green hover:bg-brand-darkGreen text-white px-8 py-4 rounded-lg font-medium text-lg transition-all text-center shadow-[0_0_20px_rgba(139,195,74,0.3)] hover:shadow-[0_0_25px_rgba(139,195,74,0.5)] transform hover:-translate-y-1"
              >
                Solicitar Diagnóstico Sin Costo
              </a>
              <a 
                href="https://wa.me/527352894618"
                target="_blank"
                rel="noreferrer"
                className="glass-card hover:bg-white/20 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all text-center flex items-center justify-center gap-2"
              >
                Contactar por WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Wave/Shape at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-24 fill-brand-bg">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,120.4,192.27,112.5,236.4,106.87,279.79,84.7,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};