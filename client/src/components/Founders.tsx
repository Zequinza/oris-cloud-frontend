import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

export default function Founders() {
  const founders = [
    {
      name: 'Adryan (S2)',
      role: 'Fundador & CEO',
      bio: 'Visionário e líder estratégico com foco em inovação em cloud gaming. Responsável pela direção geral e expansão da Oris Cloud.',
      image: '👨‍💼',
      social: {
        linkedin: '#',
      },
    },
    {
      name: 'Felipe (Z2ky)',
      role: 'Co-fundador & CTO',
      bio: 'Especialista em infraestrutura cloud e otimização de performance. Lidera o desenvolvimento técnico e arquitetura da plataforma.',
      image: '👨‍💻',
      social: {
        linkedin: 'https://www.linkedin.com/in/felipe-almeida-7ab062336/',
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
          className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-16"
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
                  {founder.social.linkedin && (
                    <motion.a
                      href={founder.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      className="p-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 transition-colors"
                    >
                      <Linkedin size={18} className="text-blue-400" />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Story */}
        <motion.div
          variants={itemVariants}
          className="p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30"
        >
          <h3 className="text-2xl font-bold mb-4">Nossa História</h3>
          <p className="text-foreground/70 leading-relaxed">
            Oris Cloud nasceu da paixão por gaming e da visão de democratizar o acesso a jogos de alta qualidade. Adryan e Felipe se uniram com o objetivo de criar uma plataforma que pudesse trazer a experiência de gaming de próxima geração para todos, independentemente do hardware disponível. Hoje, estamos orgulhosos de servir jogadores em todo o Brasil e expandindo globalmente.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
