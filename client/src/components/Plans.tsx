import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

export default function Plans() {
  const plans = [
    {
      name: 'Básico',
      price: 'R$ 29,90',
      period: '/mês',
      description: 'Perfeito para começar',
      features: [
        'Até 4 vCPUs',
        '16GB RAM',
        '256GB SSD',
        'Resolução até 1080p',
        'Latência <50ms',
        'Suporte por email',
      ],
      highlighted: false,
      status: 'esgotado',
    },
    {
      name: 'Pro',
      price: 'R$ 69,90',
      period: '/mês',
      description: 'Recomendado para gamers',
      features: [
        'Até 8 vCPUs',
        '28GB RAM',
        '512GB SSD',
        'Resolução até 1440p',
        'Latência <30ms',
        'Suporte prioritário',
        'Prioridade em filas',
      ],
      highlighted: true,
      status: 'esgotado',
    },
    {
      name: 'Ultra',
      price: 'R$ 129,90',
      period: '/mês',
      description: 'Máximo desempenho',
      features: [
        'Até 16 vCPUs',
        '56GB RAM',
        '1TB SSD',
        'Resolução 4K',
        'Latência <15ms',
        'Suporte 24/7',
        'Máxima prioridade',
        'Acesso a beta features',
      ],
      highlighted: false,
      status: 'esgotado',
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
    <section id="plans" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="container mx-auto px-4 max-w-6xl relative z-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Planos de Assinatura</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Escolha o plano perfeito para sua experiência de gaming. Todos incluem acesso a nossa biblioteca completa de jogos.
          </p>
        </motion.div>

        {/* Alert - Planos Esgotados */}
        <motion.div
          variants={itemVariants}
          className="mb-12 p-4 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center gap-3"
        >
          <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
          <div>
            <p className="font-semibold text-amber-300">Planos Temporariamente Indisponíveis</p>
            <p className="text-sm text-amber-200/80">Todos os nossos planos estão esgotados no momento. Entre em contato conosco via Discord para ser notificado quando novas vagas forem abertas.</p>
          </div>
        </motion.div>

        {/* Plans Grid */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8 mb-12 opacity-75"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative group ${plan.highlighted ? 'md:scale-105' : ''}`}
            >
              {/* Esgotado Badge */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
                <div className="px-4 py-1 rounded-full bg-red-500/20 border border-red-500/50 text-red-300 text-sm font-semibold">
                  Esgotado
                </div>
              </div>

              {/* Card Background */}
              <div className={`absolute inset-0 bg-gradient-to-br rounded-2xl blur-xl transition-all ${
                plan.highlighted
                  ? 'from-blue-500/20 to-cyan-500/20 group-hover:blur-2xl'
                  : 'from-blue-500/10 to-purple-500/10 group-hover:blur-2xl'
              }`} />

              {/* Card Content */}
              <div className={`relative p-8 rounded-2xl border transition-all ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/50 group-hover:border-blue-400'
                  : 'bg-card border-border group-hover:border-blue-500/50'
              }`}>
                {/* Plan Name */}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-foreground/60 mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                    {plan.price}
                  </span>
                  <span className="text-foreground/60">{plan.period}</span>
                </div>

                {/* CTA Button - Disabled */}
                <button
                  disabled
                  className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all cursor-not-allowed ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-blue-500/50 to-cyan-500/50 text-white/50'
                      : 'border border-blue-500/30 text-foreground/50'
                  }`}
                >
                  Indisponível
                </button>

                {/* Features */}
                <div className="space-y-4">
                  <p className="text-xs text-foreground/60 font-semibold uppercase">Incluso no plano:</p>
                  {plan.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-4 h-4 rounded-full bg-blue-400/30 flex-shrink-0" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center p-8 rounded-lg bg-blue-500/5 border border-blue-500/20"
        >
          <p className="text-foreground/70 mb-6">
            Interessado em um de nossos planos? Entre em contato conosco!
          </p>
          <motion.a
            href="https://discord.gg/3pT7NJGZ97"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
          >
            Junte-se ao Discord
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
