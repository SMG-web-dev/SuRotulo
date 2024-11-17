import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import { FeaturedProducts } from '../components/FeaturedProducts';

export function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <FeaturedProducts />
    </motion.div>
  );
}