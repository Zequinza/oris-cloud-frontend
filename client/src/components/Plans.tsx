import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

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
      cta: 'Escolher Plano',
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
      cta: 'Começar Agora',
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
      cta: 'Escolher Plano',
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

        {/* Plans Grid */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`relative group ${plan.highlighted ? 'md:scale-105' : ''}`}
            >
              {/* Highlighted Badge */}
              {plan.highlighted && (
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
                >
                  <div className="px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold flex items-center gap-2">
                    <Zap size={14} />
                    Recomendado
                  </div>
                </motion.div>
              )}

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

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-blue-500/50'
                      : 'border border-blue-500/50 text-foreground hover:bg-blue-500/10'
                  }`}
                >
                  {plan.cta}
                </motion.button>

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
                      <Check size={18} className="text-blue-400 flex-shrink-0" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison Note */}
        <motion.div
          variants={itemVariants}
          className="text-center p-6 rounded-lg bg-blue-500/5 border border-blue-500/20"
        >
          <p className="text-foreground/70">
            Todos os planos incluem acesso a nossa biblioteca completa de jogos, atualizações mensais e suporte técnico.
            <br />
            <span className="text-sm text-foreground/60">Cancele a qualquer momento, sem compromisso.</span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
