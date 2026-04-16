import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';

export default function Founders() {
  const founders = [
    {
      name: 'Felipe Silva',
      role: 'CEO & Co-founder',
      bio: 'Especialista em infraestrutura cloud com 10+ anos de experiência em Azure e tecnologias de virtualização.',
      image: '👨‍💼',
      social: {
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      name: 'Lucas Martins',
      role: 'CTO & Co-founder',
      bio: 'Engenheiro de software com foco em performance e otimização de sistemas distribuídos de alto desempenho.',
      image: '👨‍💻',
      social: {
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      name: 'Ana Costa',
      role: 'COO & Co-founder',
      bio: 'Estrategista de negócios com experiência em startups de tecnologia e expansão de mercado internacional.',
      image: '👩‍💼',
      social: {
        linkedin: '#',
        twitter: '#',
      },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="container mx-auto px-4 max-w-6xl relative z-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nossos Fundadores</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Uma equipe dedicada a transformar a forma como as pessoas jogam na nuvem.
          </p>
        </motion.div>

        {/* Founders Grid */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8"
        >
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />

              {/* Card Content */}
              <div className="relative p-8 rounded-2xl bg-card border border-border group-hover:border-blue-500/50 transition-all">
                {/* Avatar */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-5xl mb-6 mx-auto"
                >
                  {founder.image}
                </motion.div>

                {/* Info */}
                <h3 className="text-xl font-bold text-center mb-2">{founder.name}</h3>
                <p className="text-sm text-blue-400 text-center mb-4">{founder.role}</p>
                <p className="text-sm text-foreground/70 text-center mb-6">{founder.bio}</p>

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  <motion.a
                    href={founder.social.linkedin}
                    whileHover={{ scale: 1.2 }}
                    className="p-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 transition-colors"
                  >
                    <Linkedin size={18} className="text-blue-400" />
                  </motion.a>
                  <motion.a
                    href={founder.social.twitter}
                    whileHover={{ scale: 1.2 }}
                    className="p-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 transition-colors"
                  >
                    <Twitter size={18} className="text-cyan-400" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Story */}
        <motion.div
          variants={itemVariants}
          className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30"
        >
          <h3 className="text-2xl font-bold mb-4">Nossa História</h3>
          <p className="text-foreground/70 leading-relaxed">
            Oris Cloud nasceu da paixão por gaming e da visão de democratizar o acesso a jogos de alta qualidade. Nossos fundadores se conheceram em uma conferência de tecnologia cloud e perceberam uma oportunidade única: criar uma plataforma que pudesse trazer a experiência de gaming de próxima geração para todos, independentemente do hardware disponível. Hoje, estamos orgulhosos de servir jogadores em todo o mundo.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
