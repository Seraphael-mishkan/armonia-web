import { MapPin, Phone, Mail, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contacto" className="py-24 bg-brand-altBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          
          <div className="w-full lg:w-5/12 bg-brand-black text-white p-10 md:p-14 flex flex-col justify-between relative overflow-hidden">
            {/* Background decorative */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Tu condominio puede funcionar mejor.
              </h2>
              <p className="text-gray-400 mb-12">
                Agenda hoy tu diagnóstico sin costo y recibe una propuesta profesional adaptada a tu comunidad.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                    <MapPin className="text-brand-green" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium mb-1">Ubicación</p>
                    <p className="font-medium text-lg">Yautepec, Morelos</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                    <Phone className="text-brand-green" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium mb-1">Teléfono / WhatsApp</p>
                    <a href="https://wa.me/527352894618" target="_blank" rel="noreferrer" className="font-medium text-lg hover:text-brand-green transition-colors">
                      735 289 4618
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                    <Mail className="text-brand-green" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium mb-1">Correo Electrónico</p>
                    <a href="mailto:armonia.adc@gmail.com" className="font-medium text-lg hover:text-brand-green transition-colors">
                      armonia.adc@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 mt-16 pt-8 border-t border-white/10">
              <p className="text-sm text-gray-400 mb-4 font-medium">Síguenos en redes sociales:</p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/share/1ELFjPQmM9/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-green transition-colors border border-white/10">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </a>
                <a href="https://www.instagram.com/armoniaadministracion" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-green transition-colors border border-white/10">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                </a>
                <a href="https://www.tiktok.com/@armonia.administracion" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-green transition-colors border border-white/10">
                  <span className="sr-only">TikTok</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.24-2.61.94-5.26 3.02-6.72 1.6-1.11 3.63-1.5 5.56-1.04v4.06c-1.36-.29-2.82-.1-4.05.62-1.06.63-1.78 1.72-1.86 2.96-.06 1.11.41 2.22 1.23 2.94 1.07.93 2.65 1.17 4.02.72 1.27-.41 2.15-1.55 2.37-2.88.16-1.01.12-2.04.12-3.07V.02h4.51z"/></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-7/12 p-10 md:p-14">
            <h3 className="text-2xl font-heading font-bold text-brand-black mb-6">Solicitar Diagnóstico Sin Costo</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-darkGray mb-2">Nombre completo</label>
                  <input type="text" id="name" className="w-full bg-brand-altBg border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all" placeholder="Juan Pérez" />
                </div>
                <div>
                  <label htmlFor="condo" className="block text-sm font-medium text-brand-darkGray mb-2">Nombre del condominio</label>
                  <input type="text" id="condo" className="w-full bg-brand-altBg border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all" placeholder="Residencial Los Prados" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-brand-darkGray mb-2">Teléfono</label>
                  <input type="tel" id="phone" className="w-full bg-brand-altBg border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all" placeholder="735 000 0000" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-darkGray mb-2">Correo electrónico</label>
                  <input type="email" id="email" className="w-full bg-brand-altBg border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all" placeholder="correo@ejemplo.com" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-darkGray mb-2">Mensaje o problemática actual</label>
                <textarea id="message" rows={4} className="w-full bg-brand-altBg border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all resize-none" placeholder="Breve descripción de lo que necesitan resolver..."></textarea>
              </div>

              <button type="submit" className="w-full bg-brand-green hover:bg-brand-darkGreen text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2">
                Enviar Solicitud <Send size={20} />
              </button>
              <p className="text-xs text-center text-gray-400 mt-4">
                Al enviar este formulario acepta nuestra política de privacidad. Sus datos están seguros con nosotros.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};