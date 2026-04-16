import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Planos', href: '#plans' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo - Minimalista */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2"
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310419663032706170/WMz8HoFpHBf5sKDLPKcovU/m51284p_3f1a6df2.png"
            alt="Oris Cloud"
            className="h-8 w-8"
          />
          <span className="text-xl font-bold tracking-wider text-white">ORIS</span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ opacity: 0.7 }}
              className="text-sm font-medium text-foreground/80 hover:text-white transition-colors"
            >
              {item.name}
            </motion.a>
          ))}
        </nav>

        {/* CTA Button - Simples e Elegante */}
        <motion.a
          href="https://discord.gg/3pT7NJGZ97"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block px-6 py-2 bg-white text-black font-semibold rounded-sm hover:bg-gray-200 transition-colors"
        >
          Discord
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-card border-b border-border"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://discord.gg/3pT7NJGZ97"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-white text-black font-semibold rounded-sm text-center hover:bg-gray-200 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Discord
            </a>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}
