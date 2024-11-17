import { motion } from 'framer-motion';
import { PenTool, Lightbulb, Truck, Wrench, PaintBucket, Ruler } from 'lucide-react';
import type { ServiceCategory } from '../types';

const iconComponents = {
  PenTool,
  Lightbulb,
  Truck,
  Wrench,
  PaintBucket,
  Ruler
};

interface ServiceCardProps {
  service: ServiceCategory;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = iconComponents[service.icon as keyof typeof iconComponents];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
        <IconComponent className="w-6 h-6 text-purple-600 dark:text-purple-400" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
        {service.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">
        {service.description}
      </p>
    </motion.div>
  );
}