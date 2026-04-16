import { motion } from 'framer-motion';

export default function Terms() {
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
      title: '1. Aceitação dos Termos',
      content: 'Ao acessar e usar a plataforma Oris Cloud, você concorda em estar vinculado por estes Termos de Uso. Se você não concorda com qualquer parte destes termos, você não pode usar nossos serviços.',
    },
    {
      title: '2. Descrição do Serviço',
      content: 'Oris Cloud fornece acesso a máquinas virtuais de alto desempenho na nuvem para fins de gaming e entretenimento. O serviço é fornecido "como está" e pode estar sujeito a interrupções, manutenção ou modificações sem aviso prévio.',
    },
    {
      title: '3. Uso Responsável',
      content: 'Você concorda em usar a Oris Cloud apenas para fins lícitos e de acordo com todas as leis e regulamentos aplicáveis. É expressamente proibido: mineração de criptomoedas, atividades ilegais, distribuição de malware, e qualquer uso que viole direitos de terceiros.',
    },
    {
      title: '4. Conta do Usuário',
      content: 'Você é responsável por manter a confidencialidade de suas credenciais de login e por todas as atividades que ocorrem em sua conta. Você concorda em notificar-nos imediatamente de qualquer acesso não autorizado à sua conta.',
    },
    {
      title: '5. Pagamentos e Reembolsos',
      content: 'Os pagamentos são processados mensalmente de acordo com seu plano selecionado. Devido à natureza do serviço (custo por hora/instâncias), reembolsos não são efetuados. Em caso de MED (Modificação Eletrônica de Dados) indevido, a Oris Cloud tem direito de desativar o seu plano imediatamente.',
    },
    {
      title: '6. Volatilidade das Instâncias',
      content: 'O usuário está ciente da volatilidade das instâncias EC2 e da importância de salvar seu progresso regularmente. A Oris Cloud não é responsável por perda de dados causada por falhas de instância ou interrupções de serviço.',
    },
    {
      title: '7. Propriedade Intelectual',
      content: 'Todo o conteúdo, software e serviços fornecidos pela Oris Cloud são protegidos por direitos autorais e outras leis de propriedade intelectual. Você não pode reproduzir, distribuir ou transmitir qualquer conteúdo sem nossa permissão expressa.',
    },
    {
      title: '8. Limitação de Responsabilidade',
      content: 'A Oris Cloud não será responsável por danos indiretos, incidentais, especiais ou consequentes resultantes do uso ou incapacidade de usar nossos serviços, mesmo que tenhamos sido informados da possibilidade de tais danos.',
    },
    {
      title: '9. Modificação dos Termos',
      content: 'Reservamos o direito de modificar estes Termos de Uso a qualquer momento. As modificações entrarão em vigor imediatamente após a publicação. Seu uso contínuo do serviço após tais modificações constitui sua aceitação dos termos modificados.',
    },
    {
      title: '10. Rescisão',
      content: 'A Oris Cloud pode rescindir ou suspender sua conta e acesso aos serviços a qualquer momento, com ou sem causa, e sem aviso prévio. Você pode cancelar sua assinatura a qualquer momento através de sua conta.',
    },
    {
      title: '11. Lei Aplicável',
      content: 'Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Qualquer disputa será resolvida nos tribunais competentes do Brasil.',
    },
    {
      title: '12. Contato',
      content: 'Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco em suporte@oriscloud.com.br ou através do nosso servidor Discord.',
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
          <h1 className="text-5xl font-bold mb-4">Termos de Uso</h1>
          <p className="text-lg text-foreground/70">
            Leia atentamente antes de usar nossos serviços
          </p>
          <p className="text-sm text-foreground/50 mt-4">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </motion.div>

        {/* Terms Sections */}
        <motion.div
          variants={containerVariants}
          className="space-y-6"
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 rounded-xl bg-card border border-border hover:border-blue-500/50 transition-all"
            >
              <h2 className="text-xl font-bold mb-3 text-blue-300">{section.title}</h2>
              <p className="text-foreground/80 leading-relaxed">{section.content}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Acceptance */}
        <motion.div
          variants={itemVariants}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30"
        >
          <h3 className="text-2xl font-bold mb-4">Aceitação dos Termos</h3>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Ao usar a plataforma Oris Cloud, você confirma que leu, compreendeu e concorda com todos os termos e condições estabelecidos neste documento. Se você não concorda com qualquer parte destes termos, você não deve usar nossos serviços.
          </p>
          <div className="flex gap-4">
            <motion.a
              href="https://discord.gg/3pT7NJGZ97"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Discord
            </motion.a>
            <motion.a
              href="mailto:suporte@oriscloud.com.br"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 border border-blue-500/50 rounded-lg text-foreground font-semibold hover:bg-blue-500/10 transition-all"
            >
              Email
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
