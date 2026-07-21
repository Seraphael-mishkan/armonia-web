import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Shield, Users, Leaf, Scale } from 'lucide-react';

export const About = () => {


  const values = [
    { icon: Shield, text: 'Transparencia' },
    { icon: Scale, text: 'Legalidad' },
    { icon: Users, text: 'Responsabilidad' },
    { icon: Shield, text: 'Profesionalismo' },
    { icon: Users, text: 'Atención personalizada' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
              <img 
                src="/imagen_alberca1.png" 
                alt="Administración Profesional" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white">
                <p className="font-heading font-bold text-xl mb-2">Seguridad y tranquilidad</p>
                <p className="text-sm text-gray-200">De su patrimonio en manos expertas.</p>
              </div>
            </div>
            
            {/* Floating Element */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-8 top-12 bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] max-w-[200px] hidden md:block"
            >
              <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center mb-4">
                <Leaf className="text-brand-green" size={24} />
              </div>
              <p className="font-bold text-brand-black text-2xl mb-1">2016</p>
              <p className="text-sm text-brand-darkGray">Año de fundación brindando soluciones reales.</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-black mb-6">
              Expertos en Administración Integral en Morelos
            </h2>
            <div className="space-y-6 text-lg text-brand-darkGray mb-10">
              <p>
                Somos una empresa especializada en administración integral de condominios, fraccionamientos y unidades habitacionales en el Estado de Morelos.
              </p>
              <p>
                Desde 2016 hemos consolidado una metodología basada en legalidad, orden financiero y atención personalizada, ofreciendo soluciones reales que fortalecen la organización y aumentan la plusvalía del patrimonio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="bg-brand-altBg p-6 rounded-2xl border-l-4 border-brand-green">
                <h3 className="font-heading font-bold text-xl text-brand-black mb-2">Nuestra Misión</h3>
                <p className="text-brand-darkGray text-sm">Brindar administración profesional con transparencia y respaldo legal.</p>
              </div>
              <div className="bg-brand-altBg p-6 rounded-2xl border-l-4 border-brand-darkGreen">
                <h3 className="font-heading font-bold text-xl text-brand-black mb-2">Nuestra Visión</h3>
                <p className="text-brand-darkGray text-sm">Ser la empresa líder en administración condominal en Morelos.</p>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-bold text-lg text-brand-black mb-4">Nuestros Valores</h3>
              <div className="flex flex-wrap gap-3">
                {values.map((val, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm text-sm font-medium text-brand-darkGray">
                    <val.icon size={16} className="text-brand-green" />
                    {val.text}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};