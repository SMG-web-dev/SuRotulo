import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import type { Product } from '../types';

const products: Product[] = [
  {
    id: '1',
    title: 'Corpóreos LED',
    description: 'Corpóreos iluminados de bajo coste y gran impacto visual para interiores.',
    image: 'https://img.webme.com/pic/s/surotulo/LED.jpg',
    category: 'Luminosos'
  },
  {
    id: '2',
    title: 'Rótulos Fachada',
    description: 'Rotulaciones para exterior de bajo coste e impacto medioambiental.',
    image: 'https://img.webme.com/pic/s/surotulo/28012010514.jpg',
    category: 'Rotulaciones'
  },
  {
    id: '3',
    title: 'Corpóreos de acero',
    description: 'Corpóreos de alta calidad fabricados en acero puro.',
    image: 'https://img.webme.com/pic/s/surotulo/dsc00033.jpg',
    category: 'Rotulaciones'
  },
  {
    id: '4',
    title: 'Corpóreos para exteriores',
    description: 'Corpóreos de todo tipo y tamaño cortados al milímetro.',
    image: 'https://img.webme.com/pic/s/surotulo/20130910_103309.jpg',
    category: 'Rotulaciones'
  },
  {
    id: '5',
    title: 'Vinilos',
    description: 'Vinilaje para todo tipo de cristales.',
    image: 'https://img.webme.com/pic/s/surotulo/02.jpg',
    category: 'Vinilajes'
  },
  {
    id: '6',
    title: 'Rotulaciones de vehículos',
    description: 'Rotulación vehicular profesional y personalizada',
    image: 'https://img.webme.com/pic/s/surotulo/dsc01207.jpg',
    category: 'Rotulaciones'
  }
];

export function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = Array.from(new Set(products.map(product => product.category)));

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Nuestros Productos</h1>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Todas las categorías</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
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
          ))}
        </div>
      </div>
    </motion.div>
  );
}