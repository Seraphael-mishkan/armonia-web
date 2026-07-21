import { motion } from 'framer-motion';
import { Scale, FileText, Users, FolderCheck } from 'lucide-react';

export const Governance = () => {
  const pillars = [
    {
      icon: Scale,
      title: 'Marco Legal',
      desc: 'Actuamos conforme a la Ley de Propiedad en Condominio de Morelos, Código Civil y Reglamento Interno.'
    },
    {
      icon: FileText,
      title: 'Transparencia Financiera',
      desc: 'Entregamos estados financieros mensuales y comprobación documental detallada de cada peso.'
    },
    {
      icon: Users,
      title: 'Asambleas Oficiales',
      desc: 'Organización, ejecución y protocolización de asambleas ordinarias y extraordinarias.'
    },
    {
      icon: FolderCheck,
      title: 'Protección Integral',
      desc: 'Protección laboral para la comunidad y resguardo profesional de contratos y expedientes.'
    }
  ];

  return (
    <section className="py-24 bg-brand-altBg relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/5 skew-x-12 translate-x-32 transform-gpu"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-brand-black mb-4"
          >
            Gobernanza y Respaldo Legal
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-brand-darkGray"
          >
            Su tranquilidad está garantizada mediante procesos estructurados y estrictamente apegados a la ley.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-altBg rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-brand-green rounded-xl flex items-center justify-center text-white mb-6 shadow-md">
                  <pillar.icon size={24} />
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-black mb-3">{pillar.title}</h3>
                <p className="text-brand-darkGray text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};