import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-8"
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-4">
          <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-3" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Dirección</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300">
          Calle Principal 123<br />
          Sevilla, España<br />
          Código Postal 12345
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-4">
          <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-3" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Horario</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300">
          Lunes - Viernes: 9:00 AM - 6:00 PM<br />
          Sábado: 10:00 AM - 2:00 PM<br />
          Domingo: Cerrado
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-4">
          <Phone className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-3" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Teléfono</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300">
          +1 234 567 890<br />
          +1 234 567 891
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-4">
          <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-3" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300">
          info@surotulo.com<br />
          soporte@surotulo.com
        </p>
      </div>
    </motion.div>
  );
}