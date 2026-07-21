import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-32 md:pt-48 pb-32 md:pb-48">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/portadanew.png" 
          alt="Condominio moderno" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 to-brand-black/40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex justify-center">
        <div className="max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-green/20 border border-brand-green/30 text-brand-green font-medium text-sm mb-6 backdrop-blur-sm shadow-sm">
              Líderes en Morelos
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6 drop-shadow-lg">
              Administración Profesional de Condominios en Morelos
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-10 font-light max-w-3xl drop-shadow-md">
              Tranquilidad, orden, plusvalía y transparencia para tu comunidad. Protegemos tu patrimonio con procesos legales sólidos y gestión financiera transparente.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
              <a 
                href="https://wa.me/527352894618?text=Hola%20visite%20tu%20sitio%20web%20y%20me%20interesa%20mas%20informacion" 
                target="_blank"
                rel="noreferrer"
                className="bg-brand-green hover:bg-brand-darkGreen text-white px-8 py-4 rounded-lg font-medium text-lg transition-all text-center shadow-[0_0_20px_rgba(139,195,74,0.3)] hover:shadow-[0_0_25px_rgba(139,195,74,0.5)] transform hover:-translate-y-1"
              >
                Solicitar Diagnóstico Sin Costo
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