import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export const WhatsAppBtn = () => {
  return (
    <motion.a
      href="https://wa.me/527352894618?text=Hola%20visite%20tu%20sitio%20web%20y%20me%20interesa%20mas%20informacion"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.6)] transition-all transform hover:-translate-y-1 hover:scale-105 group"
    >
      <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-20"></div>
      <MessageCircle size={32} />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-brand-black text-sm font-medium px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        ¡Hola! ¿Necesitas ayuda?
      </span>
    </motion.a>
  );
};