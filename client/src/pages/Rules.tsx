import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function Rules() {
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

  const sections = [
    {
      title: 'Conduta e Etiqueta',
      rules: [
        'É obrigatório manter uma postura profissional e respeitosa com todos os membros e membros da equipe.',
        'Não será tolerada qualquer forma de discriminação, assédio, discurso de ódio ou comportamento hostil.',
        'O uso de nicknames ofensivos, inapropriados ou que tentem se passar pela administração resultará em alteração forçada ou banimento.',
      ],
    },
    {
      title: 'Organização dos Canais',
      rules: [
        'Utilize os canais de texto e voz estritamente para as finalidades descritas em seus respectivos tópicos.',
        'É proibido o envio de mensagens repetitivas, excesso de letras maiúsculas (flood) ou spam em qualquer canal.',
        'O compartilhamento de arquivos executáveis, links suspeitos ou conteúdo de natureza adulta é estritamente proibido.',
        'Não utilize menções coletivas (@everyone ou @here) sem autorização prévia da moderação.',
      ],
    },
    {
      title: 'Publicidade e Divulgação',
      rules: [
        'É proibida a divulgação de serviços, produtos, servidores ou links externos com fins comerciais ou de autopromoção.',
        'O envio de convites ou propagandas via mensagem direta (DM) para os membros deste servidor será considerado uma infração grave.',
      ],
    },
    {
      title: 'Suporte e Atendimento',
      rules: [
        'Solicitações de suporte devem ser realizadas exclusivamente pelos canais designados (tickets). Não utilize canais de chat geral para tratar de problemas técnicos ou financeiros.',
        'É proibido marcar (pingar) membros da administração para acelerar atendimentos, salvo em casos de extrema urgência. Aguarde o tempo de resposta estabelecido.',
      ],
    },
    {
      title: 'Uso Responsável',
      rules: [
        'Nossas instâncias são destinadas apenas para jogos e tarefas lícitas. É proibida a mineração de criptomoedas.',
      ],
    },
    {
      title: 'Pagamentos e Reembolsos',
      rules: [
        'Devido à natureza do serviço (custo por hora/instâncias), reembolsos não são efetuados. Em caso de MED indevido, nós temos direito a desativar o seu plano.',
      ],
    },
    {
      title: 'Instâncias EC2',
      rules: [
        'O usuário está ciente da volatilidade das instâncias e da importância de salvar seu progresso.',
      ],
    },
    {
      title: 'Aplicação de Sanções',
      rules: [
        'O descumprimento de qualquer uma das regras acima sujeitará o usuário a advertências, silenciamento temporário ou banimento permanente, a critério da administração.',
        'Casos omissos neste regulamento serão analisados e decididos de forma individual pela equipe de moderação.',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 max-w-4xl"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Regras da Oris Cloud</h1>
          <p className="text-lg text-foreground/70">
            Diretrizes para garantir uma comunidade segura, respeitosa e produtiva
          </p>
        </motion.div>

        {/* Rules Sections */}
        <motion.div
          variants={containerVariants}
          className="space-y-8"
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-8 rounded-2xl bg-card border border-border hover:border-blue-500/50 transition-all"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold">
                  {index + 1}
                </span>
                {section.title}
              </h2>

              <ul className="space-y-4">
                {section.rules.map((rule, ruleIndex) => (
                  <motion.li
                    key={ruleIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: ruleIndex * 0.1 }}
                    className="flex gap-4"
                  >
                    <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80 leading-relaxed">{rule}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Dúvidas?</h3>
          <p className="text-foreground/70 mb-6">
            Se você tiver dúvidas sobre nossas regras, entre em contato com a moderação via Discord.
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
    </div>
  );
}
