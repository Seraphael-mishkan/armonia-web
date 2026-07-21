export const Footer = () => {
  return (
    <footer className="bg-brand-black text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-green rounded-lg flex items-center justify-center text-white font-heading font-bold text-xl">
                A
              </div>
              <span className="font-heading font-bold text-xl text-white">
                Armonía
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm mb-6 leading-relaxed">
              Empresa especializada en administración integral de condominios, fraccionamientos y unidades habitacionales en el Estado de Morelos.
            </p>
            <p className="text-sm font-heading text-brand-green">
              "Administración que protege tu patrimonio."
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#inicio" className="text-gray-400 hover:text-brand-green text-sm transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="text-gray-400 hover:text-brand-green text-sm transition-colors">Servicios</a></li>
              <li><a href="#experiencia" className="text-gray-400 hover:text-brand-green text-sm transition-colors">Experiencia</a></li>
              <li><a href="#metodologia" className="text-gray-400 hover:text-brand-green text-sm transition-colors">Metodología</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Servicios</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">Administración Integral</li>
              <li className="text-gray-400 text-sm">Mantenimiento General</li>
              <li className="text-gray-400 text-sm">Jardinería Profesional</li>
              <li className="text-gray-400 text-sm">Limpieza de Albercas</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Armonía Administración Condominal. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-brand-green text-sm transition-colors">Aviso de Privacidad</a>
            <a href="#" className="text-gray-500 hover:text-brand-green text-sm transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
};