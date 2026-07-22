import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { MapPin, TrendingUp, CheckCircle, Home } from 'lucide-react';

export const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { value: 350, suffix: '+', label: 'Unidades Administradas', icon: Home },
    { value: new Date().getFullYear() - 2016, suffix: ' Años', label: 'De Experiencia', icon: CheckCircle },
    { value: 100, suffix: '%', label: 'Transparencia Financiera', icon: TrendingUp },
  ];

  const cases = [
    'Vista Volcanes – Atlatlahucan',
    'Residencial Valle del Pedregal – Ayala',
    'Residencial Los Prados',
    'Complejos Oasis y Manantial II – Yautepec',
  ];

  const results = [
    'Recuperación de cartera vencida',
    'Incremento en la recaudación de cuotas',
    'Reducción de incidencias operativas',
    'Mejoras realizadas en áreas comunes',
    'Proyectos de mantenimiento ejecutados',
    'Alto nivel de satisfacción de residentes',
  ];

  return (
    <section id="experiencia" className="py-24 bg-brand-black text-white relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold mb-4"
          >
            Experiencia Probada en Morelos
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            Nuestros números y casos de éxito respaldan la calidad de nuestra gestión condominal.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="glass-card !bg-white/5 !border-white/10 p-8 rounded-2xl text-center"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="text-brand-green" size={32} />
              </div>
              <div className="text-4xl md:text-5xl font-heading font-bold mb-2">
                {inView ? <CountUp end={stat.value} duration={2.5} /> : '0'}
                <span className="text-brand-green">{stat.suffix}</span>
              </div>
              <p className="text-gray-300 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-heading font-bold mb-8 flex items-center gap-3">
              <MapPin className="text-brand-green" /> Casos Destacados
            </h3>
            <div className="space-y-4">
              {cases.map((c, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-brand-green"></div>
                  <span className="text-lg text-gray-200">{c}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-heading font-bold mb-8 flex items-center gap-3">
              <TrendingUp className="text-brand-green" /> Resultados Comprobados
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {results.map((r, idx) => (
                <div key={idx} className="bg-brand-green/10 border border-brand-green/20 p-6 rounded-xl flex flex-col gap-3">
                  <CheckCircle className="text-brand-green" size={24} />
                  <span className="text-gray-200 font-medium">{r}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};