import { motion } from 'framer-motion';

export const Methodology = () => {
  const steps = [
    { num: '1', title: 'Diagnóstico Inicial', desc: 'Día 1-7. Evaluación profunda de la situación legal, financiera y física actual.' },
    { num: '2', title: 'Propuesta y Acción', desc: 'Diseño de estrategias para resolver hallazgos, ajustadas a la cuota de mantenimiento actual.' },
    { num: '3', title: 'Formalización Legal', desc: 'Nombramiento de Consejos Directivos en asambleas protocolizadas para facultades de representación.' },
    { num: '4', title: 'Ejecución y Control', desc: 'Implementación del plan de trabajo con supervisión constante y mecanismos de evaluación.' },
  ];

  return (
    <section id="metodologia" className="py-24 bg-brand-black text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold mb-4"
          >
            Metodología Armonía
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            Un proceso estructurado para garantizar una transición suave y resultados rápidos.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2"></div>
          
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="flex-1 flex flex-row lg:flex-col items-center gap-6 lg:gap-4 lg:text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/20 flex items-center justify-center text-2xl font-heading font-bold text-brand-green shrink-0 group-hover:bg-brand-green group-hover:text-white transition-colors relative z-10 shadow-lg backdrop-blur-md">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed max-w-[200px] mx-auto lg:mx-0">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};