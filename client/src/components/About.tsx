import { motion } from 'framer-motion';
import { Cloud, Zap, Shield } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Cloud,
      title: 'Infraestrutura Global',
      description: 'Servidores distribuídos em múltiplas regiões para melhor latência e disponibilidade.',
    },
    {
      icon: Zap,
      title: 'Performance Máxima',
      description: 'GPUs NVIDIA Tesla T4 e A10 para rodar qualquer jogo em configurações máximas.',
    },
    {
      icon: Shield,
      title: 'Segurança Enterprise',
      description: 'Proteção de dados com criptografia de ponta a ponta e conformidade com padrões internacionais.',
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-transparent to-background pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        className="container mx-auto px-4 max-w-6xl relative z-10"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Sobre a Oris Cloud</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Oris Cloud é uma plataforma de cloud gaming que democratiza o acesso a jogos de alta qualidade. Acreditamos que todo jogador merece a melhor experiência, independentemente do hardware que possui.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Nossa Missão</h3>
              <p className="text-foreground/70">
                Oferecer acesso a jogos de alta performance sem a necessidade de investimento em hardware caro. Queremos que todos possam jogar seus títulos favoritos com a melhor qualidade possível.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Por Que Oris Cloud?</h3>
              <ul className="space-y-3 text-foreground/70">
                <li className="flex gap-3">
                  <span className="text-white font-bold">✓</span>
                  <span>Sem downloads ou instalações complexas</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-white font-bold">✓</span>
                  <span>Acesso instantâneo a qualquer jogo</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-white font-bold">✓</span>
                  <span>Planos flexíveis e acessíveis</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-white font-bold">✓</span>
                  <span>Suporte técnico 24/7 via Discord</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="p-6 rounded-sm bg-card border border-border hover:border-white/30 transition-all"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{highlight.title}</h4>
                      <p className="text-sm text-foreground/70">{highlight.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-border"
        >
          {[
            { label: 'Usuários Ativos', value: '50K+' },
            { label: 'Jogos Disponíveis', value: '1000+' },
            { label: 'Uptime', value: '99.9%' },
            { label: 'Regiões', value: '15+' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="text-center py-6"
            >
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-foreground/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
