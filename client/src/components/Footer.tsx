import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const footerLinks = {
    Produto: [
      { name: 'Planos', href: '#plans' },
      { name: 'Como Funciona', href: '#how' },
      { name: 'Diferenciais', href: '#features' },
      { name: 'FAQ', href: '#faq' },
    ],
    Empresa: [
      { name: 'Sobre Nós', href: '#about' },
      { name: 'Fundadores', href: '#founders' },
      { name: 'Blog', href: '#' },
      { name: 'Carreiras', href: '#' },
    ],
    Legal: [
      { name: 'Termos de Serviço', href: '#' },
      { name: 'Política de Privacidade', href: '#' },
      { name: 'Cookies', href: '#' },
      { name: 'Contato', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Mail, href: 'mailto:support@oriscloud.com', label: 'Email' },
  ];

  return (
    <footer className="bg-card border-t border-border relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 max-w-6xl relative z-10"
      >
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-5 gap-8">
          {/* Brand */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Oris Cloud
            </div>
            <p className="text-sm text-foreground/60 mb-6">
              A melhor plataforma de cloud gaming para jogadores que querem máxima performance sem hardware caro.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-foreground/60">
                <Mail size={16} className="text-blue-400" />
                <a href="mailto:support@oriscloud.com" className="hover:text-blue-400 transition-colors">
                  support@oriscloud.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground/60">
                <MapPin size={16} className="text-blue-400" />
                <span>São Paulo, Brasil</span>
              </div>
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div key={category} variants={itemVariants}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-foreground/60 hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border" />

        {/* Bottom Footer */}
        <motion.div
          variants={itemVariants}
          className="py-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Copyright */}
          <div className="text-sm text-foreground/60">
            © {currentYear} Oris Cloud. Todos os direitos reservados.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 transition-colors"
                  title={social.label}
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 text-sm text-foreground/60">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span>Todos os sistemas operacionais normalmente</span>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
