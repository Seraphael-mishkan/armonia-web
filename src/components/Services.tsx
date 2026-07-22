import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Building2, Droplets, ShieldCheck, Trees, Wrench, Loader2 } from 'lucide-react';

const TOTAL_FRAMES = 480;

const services = [
  {
    title: 'Administración Integral',
    description: 'Gestión operativa, financiera y legal para condominios, enfocada en transparencia y orden.',
    icon: Building2,
    items: ['Control de ingresos y egresos', 'Estados financieros mensuales', 'Recuperación de cartera vencida', 'Organización de asambleas']
  },
  {
    title: 'Seguridad Privada',
    description: 'Tranquilidad total con protocolos estrictos y personal capacitado.',
    icon: ShieldCheck,
    items: ['Coordinación con empresas certificadas', 'Protocolos de acceso', 'Supervisión operativa']
  },
  {
    title: 'Jardinería Profesional',
    description: 'Conservación estética del entorno con diseño y mantenimiento de áreas verdes.',
    icon: Trees,
    items: ['Diseño y mantenimiento', 'Poda y fertilización', 'Control fitosanitario']
  },
  {
    title: 'Limpieza de Albercas',
    description: 'Tratamiento y mantenimiento profesional para instalaciones acuáticas impecables.',
    icon: Droplets,
    items: ['Tratamiento químico', 'Limpieza profunda', 'Control de calidad del agua']
  },
  {
    title: 'Mantenimiento General',
    description: 'Conservación técnica de áreas comunes y particulares para asegurar la plusvalía del inmueble.',
    icon: Wrench,
    items: ['Supervisión preventiva y correctiva', 'Coordinación de proveedores', 'Proyectos de mejora']
  },
  {
    title: 'Remodelación y Proyectos',
    description: 'Capacidad integral para proyectos de construcción y remodelación que fortalecen la infraestructura y plusvalía del condominio.',
    icon: Wrench,
    items: [],
    isSpecial: true
  }
];

export const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Preloader States
  const [loadedCount, setLoadedCount] = useState(0);
  const [isPreloading, setIsPreloading] = useState(true);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Preload frames
  useEffect(() => {
    if (isMobile) return;

    let count = 0;
    const imgs: HTMLImageElement[] = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const numStr = String(i).padStart(4, '0');
      const img = new Image();
      img.src = `/frames/frame_${numStr}.jpg`;

      const handleLoad = () => {
        count++;
        setLoadedCount(count);
        if (count >= TOTAL_FRAMES) {
          setIsPreloading(false);
        }
      };

      img.onload = handleLoad;
      img.onerror = handleLoad;
      imgs.push(img);
    }
    imagesRef.current = imgs;
  }, [isMobile]);

  // Canvas loop & scroll handler
  useEffect(() => {
    if (isMobile) return;

    let animId: number;

    const drawCoverImage = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, img: HTMLImageElement) => {
      const cw = canvas.width;
      const ch = canvas.height;
      const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
      const sw = img.naturalWidth * scale;
      const sh = img.naturalHeight * scale;

      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, (cw - sw) / 2, (ch - sh) / 2, sw, sh);
    };

    const render = () => {
      // Smooth LERP interpolation for buttery scroll (both down and up/reverse!)
      const diff = targetProgressRef.current - currentProgressRef.current;
      currentProgressRef.current += diff * 0.15;

      const progress = Math.max(0, Math.min(1, currentProgressRef.current));
      const frameIdx = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(progress * (TOTAL_FRAMES - 1))));

      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
          }
          const img = imagesRef.current[frameIdx];
          if (img && img.complete && img.naturalWidth) {
            drawCoverImage(ctx, canvas, img);
          }
        }
      }

      // Calculate active service index
      const numSegments = services.length;
      const rawIdx = progress * numSegments;
      let newIdx = Math.floor(rawIdx);
      if (newIdx >= numSegments) newIdx = numSegments - 1;
      setActiveIndex(newIdx);

      animId = requestAnimationFrame(render);
    };

    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const scrollableDistance = height - windowHeight;
      if (scrollableDistance <= 0) return;

      let p = -top / scrollableDistance;
      targetProgressRef.current = Math.max(0, Math.min(1, p));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animId);
    };
  }, [isMobile]);

  // Mobile Fallback
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

  const loadPercent = Math.min(100, Math.round((loadedCount / TOTAL_FRAMES) * 100));

  return (
    <section id="servicios" ref={containerRef} className="relative bg-brand-black" style={{ height: '800vh' }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-brand-black flex items-center justify-center">
        
        {/* Canvas Engine */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover z-0" />

        {/* Preloader Overlay curtain */}
        <AnimatePresence>
          {isPreloading && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 z-50 bg-brand-black flex flex-col items-center justify-center p-6 text-center"
            >
              <div className="w-16 h-16 bg-brand-green/20 rounded-2xl flex items-center justify-center mb-6 border border-brand-green/40 animate-pulse">
                <Building2 className="text-brand-green" size={32} />
              </div>
              <h3 className="text-2xl font-bold font-heading text-white mb-2">Armonía Experiencia Interactiva</h3>
              <p className="text-gray-400 text-sm mb-6 max-w-sm">Cargando secuencia de alta definición para navegación fluida en 3D...</p>

              {/* Progress bar */}
              <div className="w-64 bg-white/10 h-2 rounded-full overflow-hidden mb-3 border border-white/10">
                <motion.div 
                  className="bg-brand-green h-full rounded-full transition-all duration-150"
                  style={{ width: `${loadPercent}%` }}
                />
              </div>
              <span className="text-xs font-mono font-semibold text-brand-green">{loadPercent}%</span>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Cinematic Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/70 z-10 pointer-events-none" />

        {/* Fixed Header Title */}
        <div className="absolute top-12 md:top-16 left-0 w-full z-20 pointer-events-none text-center px-4">
          <span className="inline-block text-brand-green font-semibold tracking-wider text-xs md:text-sm uppercase mb-2 bg-brand-black/60 px-4 py-1 rounded-full backdrop-blur-md border border-brand-green/30">
            Experiencia y Profesionalismo
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-2 drop-shadow-lg">
            Nuestros Servicios
          </h2>
          <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto drop-shadow-md">
            Soluciones integrales diseñadas para proteger su patrimonio, optimizar recursos y garantizar la tranquilidad de su comunidad.
          </p>
        </div>

        {/* Floating Service Card */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -30, filter: 'blur(8px)' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`glass-card bg-white/10 p-8 md:p-10 rounded-3xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-w-lg backdrop-blur-xl ${activeIndex % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-brand-green/20 rounded-2xl flex items-center justify-center border border-brand-green/40 shadow-inner">
                  {React.createElement(services[activeIndex].icon, { className: "text-brand-green", size: 30 })}
                </div>
                <span className="text-xs font-bold text-white/70 tracking-widest uppercase bg-white/10 px-3 py-1 rounded-md border border-white/10">
                  0{activeIndex + 1} / 0{services.length}
                </span>
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
                  className="inline-flex items-center gap-2 font-medium bg-brand-green hover:bg-brand-darkGreen text-white px-7 py-3.5 rounded-xl transition-all shadow-[0_0_25px_rgba(139,195,74,0.5)] hover:shadow-[0_0_35px_rgba(139,195,74,0.7)] transform hover:-translate-y-1"
                >
                  Cotizar proyecto <ArrowRight size={18} />
                </a>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Navigation Dots */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-4">
          {services.map((service, idx) => (
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
              className="group relative flex items-center justify-end"
              aria-label={`Ir al servicio ${idx + 1}`}
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 mr-3 text-xs font-semibold text-white bg-black/70 px-2.5 py-1 rounded backdrop-blur-sm whitespace-nowrap pointer-events-none">
                {service.title}
              </span>
              <div className={`w-3 rounded-full transition-all duration-500 ${activeIndex === idx ? 'h-10 bg-brand-green shadow-[0_0_12px_#8bc34a]' : 'h-3 bg-white/40 hover:bg-white/70'}`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};