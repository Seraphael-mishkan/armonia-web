import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Trees, ShieldCheck, Wrench, Droplets, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Administración Integral',
    description: 'Gestión operativa, financiera y legal para condominios, enfocada en transparencia y orden.',
    icon: Building2,
    items: ['Control de ingresos y egresos', 'Estados financieros mensuales', 'Recuperación de cartera vencida', 'Organización de asambleas']
  },
  {
    title: 'Mantenimiento General',
    description: 'Conservación técnica de áreas comunes y particulares para asegurar la plusvalía del inmueble.',
    icon: Wrench,
    items: ['Supervisión preventiva y correctiva', 'Coordinación de proveedores', 'Proyectos de mejora']
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
    title: 'Seguridad Privada',
    description: 'Tranquilidad total con protocolos estrictos y personal capacitado.',
    icon: ShieldCheck,
    items: ['Coordinación con empresas certificadas', 'Protocolos de acceso', 'Supervisión operativa']
  }
];

export const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-brand-altBg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-brand-black mb-4"
          >
            Nuestros Servicios
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-brand-darkGray"
          >
            Soluciones integrales diseñadas para proteger su patrimonio, optimizar recursos y garantizar la tranquilidad de su comunidad.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(139,195,74,0.15)] transition-all duration-300 border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-brand-altBg group-hover:bg-brand-green/10 rounded-xl flex items-center justify-center mb-6 transition-colors">
                <service.icon className="text-brand-green" size={28} />
              </div>
              <h3 className="text-xl font-bold font-heading text-brand-black mb-3">{service.title}</h3>
              <p className="text-brand-darkGray mb-6 text-sm">{service.description}</p>
              <ul className="space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-brand-darkGray">
                    <ArrowRight size={16} className="text-brand-green mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-brand-green rounded-2xl p-8 shadow-lg text-white flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-white opacity-10 rounded-full blur-2xl"></div>
            <h3 className="text-2xl font-bold font-heading mb-4 relative z-10">Remodelación y Proyectos</h3>
            <p className="mb-6 relative z-10 opacity-90">
              Capacidad integral para proyectos de construcción y remodelación que fortalecen la infraestructura y plusvalía del condominio.
            </p>
            <a href="#contacto" className="inline-flex items-center gap-2 font-medium bg-white/20 hover:bg-white/30 px-5 py-2.5 rounded-lg w-fit transition-colors relative z-10">
              Cotizar proyecto <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};