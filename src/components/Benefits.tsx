import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, PiggyBank, TrendingUp, HeartHandshake, Settings, Clock, Volume2, VolumeX } from 'lucide-react';

export const Benefits = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (videoRef.current) {
              const playPromise = videoRef.current.play();
              if (playPromise !== undefined) {
                playPromise.catch(() => {
                  // Autoplay with sound failed, fallback to muted autoplay
                  setIsMuted(true);
                  if (videoRef.current) {
                    videoRef.current.muted = true;
                    videoRef.current.play();
                  }
                });
              }
            }
          } else {
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  const benefits = [
    { icon: Search, text: 'Transparencia financiera' },
    { icon: PiggyBank, text: 'Optimización de recursos' },
    { icon: TrendingUp, text: 'Mayor plusvalía' },
    { icon: HeartHandshake, text: 'Reducción de conflictos' },
    { icon: Settings, text: 'Profesionalismo operativo' },
    { icon: Clock, text: 'Atención oportuna al residente' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-square rounded-full bg-brand-altBg absolute -inset-4 md:-inset-8 -z-10 blur-3xl opacity-50"></div>
            
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <video 
                ref={videoRef}
                src="/videoarmonia.mp4" 
                className="w-full h-full object-cover"
                loop
                playsInline
                muted={isMuted}
              />
              <button 
                onClick={toggleMute}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all z-20 shadow-lg"
                aria-label={isMuted ? "Activar sonido" : "Silenciar video"}
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
            </div>
            
            {/* Glass Badge */}
            <div className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-10 glass-card p-6 rounded-2xl flex items-center gap-4 max-w-[280px]">
              <div className="bg-brand-green w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                <TrendingUp className="text-white" size={24} />
              </div>
              <div>
                <p className="font-heading font-bold text-brand-black leading-tight">Aumente el valor</p>
                <p className="text-xs text-brand-darkGray">De su propiedad con mantenimiento constante.</p>
              </div>
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-heading font-bold text-brand-black mb-6"
            >
              Beneficios de una Administración Externa
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-brand-darkGray mb-10"
            >
              Evite desgastes vecinales y delegue la responsabilidad a expertos. Un administrador profesional no es un gasto, es una inversión en la salud de su patrimonio.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + (idx * 0.1) }}
                  className="flex items-center gap-4 bg-brand-altBg p-4 rounded-xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100"
                >
                  <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-brand-green shrink-0">
                    <benefit.icon size={20} />
                  </div>
                  <span className="font-medium text-brand-black">{benefit.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};