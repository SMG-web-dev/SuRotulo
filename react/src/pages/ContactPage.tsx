import { motion } from 'framer-motion';
import { ContactForm } from '../components/ContactForm';
import { ContactInfo } from '../components/ContactInfo';

export function ContactPage() {
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
            Contáctenos
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Estamos aquí para ayudarle con su próximo proyecto
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
          >
            <ContactForm />
          </motion.div>
          <ContactInfo />
        </div>
      </div>
    </motion.div>
  );
}