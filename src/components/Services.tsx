import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Building2, Droplets, ShieldCheck, Trees, Wrench } from 'lucide-react';

const services = [
  {
    title: 'Administración Integral',
    description: 'Gestión operativa, financiera y legal para condominios, enfocada en transparencia y orden.',
    icon: Building2,
    items: ['Control de ingresos y egresos', 'Estados financieros mensuales', 'Recuperación de cartera vencida', 'Organización de asambleas'],
    video: '/sv_admin.mp4'
  },
  {
    title: 'Seguridad Privada',
    description: 'Tranquilidad total con protocolos strictly y personal capacitado.',
    icon: ShieldCheck,
    items: ['Coordinación con empresas certificadas', 'Protocolos de acceso', 'Supervisión operativa'],
    video: '/sv_seguridad.mp4'
  },
  {
    title: 'Jardinería Profesional',
    description: 'Conservación estética del entorno con diseño y mantenimiento de áreas verdes.',
    icon: Trees,
    items: ['Diseño y mantenimiento', 'Poda y fertilización', 'Control fitosanitario'],
    video: '/sv_jardineria.mp4'
  },
  {
    title: 'Limpieza de Albercas',
    description: 'Tratamiento y mantenimiento profesional para instalaciones acuáticas impecables.',
    icon: Droplets,
    items: ['Tratamiento químico', 'Limpieza profunda', 'Control de calidad del agua'],
    video: '/sv_albercas.mp4'
  },
  {
    title: 'Mantenimiento General',
    description: 'Conservación técnica de áreas comunes y particulares para asegurar la plusvalía del inmueble.',
    icon: Wrench,
    items: ['Supervisión preventiva y correctiva', 'Coordinación de proveedores', 'Proyectos de mejora'],
    video: '/sv_mantenimiento.mp4'
  },
  {
    title: 'Remodelación y Proyectos',
    description: 'Capacidad integral para proyectos de construcción y remodelación que fortalecen la infraestructura y plusvalía del condominio.',
    icon: Wrench,
    items: [],
    video: '/sv_remodelacion.mp4',
    isSpecial: true
  }
];

export const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const targetTimeRef = useRef<number[]>(services.map(() => 0));
  const currentTimeRef = useRef<number[]>(services.map(() => 0));
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    let animId: number;

    // Smooth LERP loop for video time scrubbing
    const updateVideos = () => {
      services.forEach((_, i) => {
        const video = videoRefs.current[i];
        if (!video || isNaN(video.duration) || video.duration === 0) return;

        const target = targetTimeRef.current[i];
        const current = currentTimeRef.current[i];
        
        const diff = target - current;
        if (Math.abs(diff) > 0.001) {
          const next = current + diff * 0.12; // 0.12 smooth interpolation factor
          currentTimeRef.current[i] = next;
          try {
            video.currentTime = next;
          } catch {
            // ignore rapid seek errors
          }
        }
      });

      animId = requestAnimationFrame(updateVideos);
    };

    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const scrollableDistance = height - windowHeight;
      let progress = -top / scrollableDistance;
      progress = Math.max(0, Math.min(1, progress));

      const numSegments = services.length;
      const rawIndex = progress * numSegments;
      let newIndex = Math.floor(rawIndex);
      if (newIndex >= numSegments) newIndex = numSegments - 1;

      setActiveIndex(newIndex);

      const segmentProgress = rawIndex - newIndex;
      
      services.forEach((_, i) => {
        const video = videoRefs.current[i];
        if (!video || isNaN(video.duration) || video.duration === 0) return;

        if (i < newIndex) {
          targetTimeRef.current[i] = video.duration;
        } else if (i > newIndex) {
          targetTimeRef.current[i] = 0;
        } else {
          targetTimeRef.current[i] = segmentProgress * video.duration;
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    animId = requestAnimationFrame(updateVideos);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animId);
    };
  }, [isMobile]);

  // Fallback for mobile view
  if (isMobile) {
    return (
      <section id="servicios" className="py-24 bg-brand-altBg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-brand-black mb-4">Nuestros Servicios</h2>
            <p className="text-lg text-brand-darkGray">Soluciones integrales diseñadas para proteger su patrimonio, optimizar recursos y garantizar la tranquilidad de su comunidad.</p>
          </div>
          <div className="flex flex-col gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <div className="h-64 w-full relative">
                  <video 
                    src={service.video} 
                    className="w-full h-full object-cover" 
                    autoPlay muted loop playsInline 
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>
                <div className="p-8">
                  <div className="w-14 h-14 bg-brand-altBg rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="text-brand-green" size={28} />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-brand-black mb-3">{service.title}</h3>
                  <p className="text-brand-darkGray mb-6 text-sm">{service.description}</p>
                  
                  {!service.isSpecial ? (
                    <ul className="space-y-2">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-brand-darkGray">
                          <ArrowRight size={16} className="text-brand-green mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <a href="https://wa.me/527352894618?text=Hola%20visite%20el%20sitio%20web%20y%20me%20interesa%20un%20proyecto%20de%20remodelacion" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-medium bg-brand-green hover:bg-brand-darkGreen text-white px-5 py-2.5 rounded-lg w-fit transition-colors">
                      Cotizar proyecto <ArrowRight size={18} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Desktop Scroll-Scrubbing View
  return (
    <section id="servicios" ref={containerRef} className="relative bg-brand-black" style={{ height: '1400vh' }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-brand-black flex items-center justify-center">
        
        {/* Continuous Background Videos */}
        {services.map((service, index) => (
          <video
            key={index}
            ref={el => videoRefs.current[index] = el}
            src={service.video}
            preload="auto"
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${activeIndex === index ? 'opacity-100 z-0' : 'opacity-0 -z-10'}`}
          />
        ))}
        
        {/* Overlay gradient for legibility */}
        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

        {/* Fixed Title */}
        <div className="absolute top-20 left-0 w-full z-20 pointer-events-none text-center px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-3 drop-shadow-lg">
            Nuestros Servicios
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto drop-shadow-md">
            Soluciones integrales diseñadas para proteger su patrimonio, optimizar recursos y garantizar la tranquilidad de su comunidad.
          </p>
        </div>

        {/* Floating Cards */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`glass-card bg-white/10 p-8 md:p-10 rounded-3xl border border-white/20 shadow-2xl max-w-lg backdrop-blur-md ${activeIndex % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}
            >
              <div className="w-14 h-14 bg-brand-green/20 rounded-2xl flex items-center justify-center mb-6 border border-brand-green/30">
                {React.createElement(services[activeIndex].icon, { className: "text-brand-green", size: 30 })}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold font-heading text-white mb-3 drop-shadow-sm">
                {services[activeIndex].title}
              </h3>
              <p className="text-gray-100 mb-6 text-base md:text-lg leading-relaxed">
                {services[activeIndex].description}
              </p>

              {!services[activeIndex].isSpecial ? (
                <ul className="space-y-3">
                  {services[activeIndex].items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm md:text-base text-gray-200">
                      <ArrowRight size={18} className="text-brand-green mt-0.5 shrink-0" />
                      <span className="font-medium drop-shadow-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <a 
                  href="https://wa.me/527352894618?text=Hola%20visite%20el%20sitio%20web%20y%20me%20interesa%20un%20proyecto%20de%20remodelacion" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 font-medium bg-brand-green hover:bg-brand-darkGreen text-white px-7 py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(139,195,74,0.4)] hover:shadow-[0_0_30px_rgba(139,195,74,0.6)] transform hover:-translate-y-1"
                >
                  Cotizar proyecto <ArrowRight size={18} />
                </a>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Dots */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-4">
          {services.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (containerRef.current) {
                  const { top } = containerRef.current.getBoundingClientRect();
                  const scrollableDistance = containerRef.current.scrollHeight - window.innerHeight;
                  const targetScroll = (idx / services.length) * scrollableDistance;
                  window.scrollTo({
                    top: window.scrollY + top + targetScroll + (scrollableDistance / services.length / 2),
                    behavior: 'smooth'
                  });
                }
              }}
              className={`w-3 rounded-full transition-all duration-300 ${activeIndex === idx ? 'h-10 bg-brand-green' : 'h-3 bg-white/40 hover:bg-white/70'}`}
              aria-label={`Ir al servicio ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};