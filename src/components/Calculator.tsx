import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator as CalcIcon, TrendingUp, AlertCircle, CheckCircle2 } from 'lucide-react';

export const Calculator = () => {
  const [units, setUnits] = useState(50);
  const [fee, setFee] = useState(1500);
  const [delinquency, setDelinquency] = useState(30);

  const totalExpected = units * fee;
  const monthlyLoss = totalExpected * (delinquency / 100);
  const estimatedRecovery = monthlyLoss * 0.85; // 85% recovery estimate

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(val);
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-altBg text-brand-darkGray px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CalcIcon size={18} className="text-brand-green" />
              Herramienta Interactiva
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-black mb-6">
              Calculadora de Salud y Pérdida Condominal
            </h2>
            <p className="text-lg text-brand-darkGray mb-8">
              Estima al instante el nivel de riesgo del patrimonio, el potencial de recuperación de cobranza y el impacto positivo de contar con administración externa.
            </p>

            <div className="space-y-8 bg-brand-altBg p-8 rounded-2xl border border-gray-100">
              <div>
                <label className="flex justify-between text-sm font-medium text-brand-black mb-4">
                  <span>Número de unidades (casas/deptos)</span>
                  <span className="text-brand-green font-bold text-lg">{units}</span>
                </label>
                <input 
                  type="range" 
                  min="10" 
                  max="500" 
                  value={units} 
                  onChange={(e) => setUnits(Number(e.target.value))}
                  className="w-full accent-brand-green h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div>
                <label className="flex justify-between text-sm font-medium text-brand-black mb-4">
                  <span>Cuota de mantenimiento promedio</span>
                  <span className="text-brand-green font-bold text-lg">{formatCurrency(fee)}</span>
                </label>
                <input 
                  type="range" 
                  min="500" 
                  max="10000" 
                  step="100"
                  value={fee} 
                  onChange={(e) => setFee(Number(e.target.value))}
                  className="w-full accent-brand-green h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div>
                <label className="flex justify-between text-sm font-medium text-brand-black mb-4">
                  <span>Porcentaje de morosidad actual</span>
                  <span className="text-red-500 font-bold text-lg">{delinquency}%</span>
                </label>
                <input 
                  type="range" 
                  min="0" 
                  max="80" 
                  value={delinquency} 
                  onChange={(e) => setDelinquency(Number(e.target.value))}
                  className="w-full accent-red-400 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-black text-white rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden"
          >
            {/* Decorative background circle */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-green/20 rounded-full blur-3xl"></div>
            
            <h3 className="text-2xl font-heading font-bold mb-8 relative z-10">Proyección Mensual</h3>
            
            <div className="space-y-6 relative z-10">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-2 text-gray-300">
                  <CheckCircle2 size={20} className="text-gray-400" />
                  <span className="text-sm font-medium">Ingreso Ideal Esperado</span>
                </div>
                <div className="text-3xl font-bold font-heading">{formatCurrency(totalExpected)}</div>
              </div>

              <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
                <div className="flex items-center gap-3 mb-2 text-red-200">
                  <AlertCircle size={20} className="text-red-400" />
                  <span className="text-sm font-medium">Capital en Riesgo (Morosidad)</span>
                </div>
                <div className="text-3xl font-bold font-heading text-red-400">{formatCurrency(monthlyLoss)}</div>
                <p className="text-xs text-red-300/70 mt-2">Dinero que la comunidad pierde cada mes.</p>
              </div>

              <div className="bg-brand-green/20 rounded-xl p-6 border border-brand-green/30">
                <div className="flex items-center gap-3 mb-2 text-brand-green">
                  <TrendingUp size={20} />
                  <span className="text-sm font-medium">Recuperación Estimada Armonía*</span>
                </div>
                <div className="text-4xl font-bold font-heading text-white">{formatCurrency(estimatedRecovery)}</div>
                <p className="text-xs text-gray-400 mt-3">*Basado en nuestra tasa de éxito del 85% en recuperación legal y extrajudicial.</p>
              </div>
            </div>

            <div className="mt-8 relative z-10">
              <a href="#contacto" className="block w-full bg-brand-green hover:bg-brand-darkGreen text-white text-center py-4 rounded-xl font-bold transition-colors">
                Recuperar Mi Patrimonio Ahora
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};