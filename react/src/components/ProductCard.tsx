import { motion } from 'framer-motion';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
    >
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          {product.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900 rounded-full">
            {product.category}
          </span>
          <button className="btn-primary text-sm px-4 py-2">
            Más Información
          </button>
        </div>
      </div>
    </motion.div>
  );
}