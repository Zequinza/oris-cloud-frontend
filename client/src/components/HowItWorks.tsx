import { motion } from 'framer-motion';
import { CreditCard, LogIn, Gamepad2, Cloud } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: CreditCard,
      title: 'Escolha um Plano',
      description: 'Selecione o plano que melhor se adequa às suas necessidades e faça o pagamento de forma segura.',
    },
    {
      icon: LogIn,
      title: 'Crie sua Conta',
      description: 'Registre-se em nossa plataforma com seus dados e configure seu perfil de jogador.',
    },
    {
      icon: Cloud,
      title: 'Inicie uma Máquina',
      description: 'Escolha uma máquina virtual disponível e inicie-a com um clique. Leva menos de 30 segundos.',
    },
    {
      icon: Gamepad2,
      title: 'Comece a Jogar',
      description: 'Conecte-se via Parsec ou Moonlight e jogue seus jogos favoritos instantaneamente.',
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
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="container mx-auto px-4 max-w-6xl relative z-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Como Funciona</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Começar a jogar na Oris Cloud é simples e rápido. Siga apenas 4 passos.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-4 gap-8 mb-12"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-1/2 w-full h-1 bg-gradient-to-r from-blue-500/50 to-transparent" />
                )}

                {/* Card */}
                <div className="relative p-8 rounded-2xl bg-card border border-border group-hover:border-blue-500/50 transition-all">
                  {/* Step Number */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg mb-6"
                  >
                    {index + 1}
                  </motion.div>

                  {/* Icon */}
                  <div className="mb-4">
                    <Icon className="w-8 h-8 text-blue-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-foreground/70">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Timeline Visualization */}
        <motion.div
          variants={itemVariants}
          className="p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30"
        >
          <h3 className="text-2xl font-bold mb-6">Tempo Total: Menos de 2 Minutos</h3>
          <div className="space-y-4">
            {[
              { time: '0-30s', action: 'Escolha um plano e faça o pagamento' },
              { time: '30-60s', action: 'Crie sua conta e configure o perfil' },
              { time: '60-90s', action: 'Inicie uma máquina virtual' },
              { time: '90-120s', action: 'Conecte-se e comece a jogar' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="px-4 py-2 rounded-lg bg-blue-500/20 text-blue-300 font-semibold text-sm min-w-fit">
                  {item.time}
                </div>
                <div className="flex-1 text-foreground/80">{item.action}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
