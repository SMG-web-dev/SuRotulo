import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">SuRótulo</h3>
            <p className="mb-4">Transformando visiones en realidad con soluciones de señalización premium para empresas.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="/productos" className="hover:text-purple-400 transition-colors">Productos</a>
              </li>
              <li>
                <a href="/servicios" className="hover:text-purple-400 transition-colors">Servicios</a>
              </li>
              <li>
                <a href="/galeria" className="hover:text-purple-400 transition-colors">Galería</a>
              </li>
              <li>
                <a href="/contacto" className="hover:text-purple-400 transition-colors">Contacto</a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-purple-400" />
                <span>Calle Principal 123, Sevilla</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-purple-400" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-purple-400" />
                <span>info@surotulo.com</span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">Boletín Informativo</h3>
            <p className="mb-4">Suscríbase para recibir las últimas noticias y ofertas.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Su correo electrónico"
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-400"
              />
              <button className="w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors">
                Suscribirse
              </button>
            </form>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>© {new Date().getFullYear()} SuRótulo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}