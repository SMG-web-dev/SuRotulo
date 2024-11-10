import { motion } from 'framer-motion';
import type { ServiceCategory } from '../types';
import { ServiceCard } from '../components/ServiceCard';

const services: ServiceCategory[] = [
  {
    id: '1',
    title: 'Diseño Personalizado',
    description: 'Creamos diseños únicos que reflejan la identidad de su marca',
    icon: 'PenTool'
  },
  {
    id: '2',
    title: 'Iluminación LED',
    description: 'Soluciones de iluminación eficientes y duraderas',
    icon: 'Lightbulb'
  },
  {
    id: '3',
    title: 'Instalación Profesional',
    description: 'Equipo experto para una instalación segura y precisa',
    icon: 'Wrench'
  },
  {
    id: '4',
    title: 'Mantenimiento',
    description: 'Servicios de mantenimiento preventivo y reparación',
    icon: 'PaintBucket'
  },
  {
    id: '5',
    title: 'Entrega e Instalación',
    description: 'Transporte seguro y montaje profesional en sitio',
    icon: 'Truck'
  },
  {
    id: '6',
    title: 'Consultoría',
    description: 'Asesoramiento experto para optimizar su proyecto',
    icon: 'Ruler'
  }
];

export function ServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Nuestros Servicios
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ofrecemos una gama completa de servicios de señalización para satisfacer todas sus necesidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-purple-600 dark:bg-purple-800 rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            ¿Necesita un servicio personalizado?
          </h2>
          <p className="text-purple-100 mb-6">
            Contáctenos para discutir sus necesidades específicas
          </p>
          <a
            href="/contacto"
            className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
          >
            Contactar Ahora
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}