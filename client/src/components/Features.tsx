import { motion } from 'framer-motion';
import {
  Zap,
  Globe,
  Lock,
  Smartphone,
  Cpu,
  Headphones,
  TrendingUp,
  Wifi,
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Sem PC Gamer Caro',
      description: 'Jogue em qualquer dispositivo sem investir em hardware de alta performance.',
    },
    {
      icon: Globe,
      title: 'Acesso Global',
      description: 'Servidores em múltiplas regiões para melhor latência onde quer que você esteja.',
    },
    {
      icon: Lock,
      title: 'Segurança Enterprise',
      description: 'Seus dados e sessões são protegidos com criptografia de ponta a ponta.',
    },
    {
      icon: Smartphone,
      title: 'Qualquer Dispositivo',
      description: 'Jogue no PC, notebook, tablet, celular ou TV Smart com a mesma qualidade.',
    },
    {
      icon: Cpu,
      title: 'Performance Máxima',
      description: 'GPUs NVIDIA de última geração para rodar qualquer jogo em configurações máximas.',
    },
    {
      icon: Headphones,
      title: 'Suporte 24/7',
      description: 'Comunidade ativa e equipe técnica pronta para ajudar a qualquer hora.',
    },
    {
      icon: TrendingUp,
      title: 'Escalabilidade',
      description: 'Aumente ou diminua seus recursos conforme sua necessidade em tempo real.',
    },
    {
      icon: Wifi,
      title: 'Baixa Latência',
      description: 'Conexão otimizada para latência mínima, ideal para jogos competitivos.',
    },
  ];

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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Diferenciais da Oris Cloud</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Tudo que você precisa para a melhor experiência de cloud gaming.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all" />

                {/* Card Content */}
                <div className="relative p-6 rounded-xl bg-card border border-border group-hover:border-blue-500/50 transition-all">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-4"
                  >
                    <Icon className="w-6 h-6 text-blue-400" />
                  </motion.div>

                  {/* Left Border Accent */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0 group-hover:via-blue-400 transition-all" />

                  {/* Title */}
                  <h3 className="font-bold mb-2 group-hover:text-blue-300 transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <p className="text-foreground/70 mb-6">
            Pronto para experimentar a melhor plataforma de cloud gaming?
          </p>
          <motion.a
            href="#plans"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
          >
            Começar Agora
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
