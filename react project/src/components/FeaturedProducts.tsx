import { useState } from 'react';
import type { Product } from '../types';

export function FeaturedProducts() {
  const [products] = useState<Product[]>([
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
      id: '5',
      title: 'Vinilos',
      description: 'Vinilaje para todo tipo de cristales.',
      image: 'https://img.webme.com/pic/s/surotulo/02.jpg',
      category: 'Vinilajes'
    },
  ]);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
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
                <span className="inline-block px-3 py-1 text-sm font-semibold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900 rounded-full">
                  {product.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}