import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/favicon.ico"
                alt="SuRótulo Favicon"
                className="h-8 w-8"
              />
              <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                SuRótulo
              </span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" active={isActive('/')}>Inicio</NavLink>
            <NavLink to="/productos" active={isActive('/productos')}>Productos</NavLink>
            <NavLink to="/servicios" active={isActive('/servicios')}>Servicios</NavLink>
            <NavLink to="/contacto" active={isActive('/contacto')}>Contacto</NavLink>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-2 p-2 rounded-md text-gray-700 dark:text-gray-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-md"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink to="/" active={isActive('/')}>Inicio</MobileNavLink>
            <MobileNavLink to="/productos" active={isActive('/productos')}>Productos</MobileNavLink>
            <MobileNavLink to="/servicios" active={isActive('/servicios')}>Servicios</MobileNavLink>
            <MobileNavLink to="/contacto" active={isActive('/contacto')}>Contacto</MobileNavLink>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

function NavLink({ to, children, active }: { to: string; children: React.ReactNode; active: boolean }) {
  return (
    <Link
      to={to}
      className={`relative nav-link ${active ? 'text-purple-600 dark:text-purple-400' : ''}`}
    >
      {children}
      {active && (
        <motion.div
          layoutId="underline"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600 dark:bg-purple-400"
        />
      )}
    </Link>
  );
}

function MobileNavLink({ to, children, active }: { to: string; children: React.ReactNode; active: boolean }) {
  return (
    <Link
      to={to}
      className={`mobile-nav-link ${active ? 'text-purple-600 dark:text-purple-400 bg-gray-50 dark:bg-gray-800' : ''}`}
    >
      {children}
    </Link>
  );
}