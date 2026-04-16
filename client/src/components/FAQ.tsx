import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Como funciona o cloud gaming na Oris?',
      answer: 'Você traz seus próprios jogos. Nós criamos um snapshot AWS da sua máquina virtual com full stock, permitindo que você tenha controle total. Você acessa via Parsec ou Moonlight e joga como se estivesse em um PC local, mas com poder de processamento na nuvem.',
    },
    {
      question: 'Que internet eu preciso?',
      answer: 'Recomendamos uma conexão de pelo menos 25 Mbps para 1080p a 60fps. Para 1440p, recomendamos 35 Mbps, e para 4K, 50 Mbps ou superior. Uma conexão estável é mais importante que a velocidade bruta.',
    },
    {
      question: 'Quais dispositivos são suportados?',
      answer: 'Você pode jogar em PC Windows/Mac, notebooks, tablets, smartphones (iOS/Android) e TVs Smart com Chromecast. Usamos os aplicativos Parsec e Moonlight para conectar-se aos servidores.',
    },
    {
      question: 'Onde os servidores estão localizados?',
      answer: 'Nossas instâncias rodam em São Paulo, Brasil. Isso garante latência mínima para usuários brasileiros e melhor performance geral.',
    },
    {
      question: 'Como é feito o pagamento?',
      answer: 'Aceitamos PIX, cartão de crédito e débito, além de Mercado Pago. O pagamento é recorrente no mesmo dia do mês. Você pode cancelar sua assinatura a qualquer momento sem penalidades.',
    },
    {
      question: 'Qual é o horário de atendimento?',
      answer: 'Oferecemos suporte de segunda a sábado (exceto domingo). Revendedores têm suporte 24/7. Entre em contato via Discord para qualquer dúvida ou problema técnico.',
    },
    {
      question: 'Posso usar full stock na minha máquina?',
      answer: 'Sim! Você tem full stock na sua instância AWS. Pode instalar qualquer software, modificar configurações, fazer backup e gerenciar como quiser. É sua máquina virtual completa.',
    },
    {
      question: 'E se houver lag ou problemas de conexão?',
      answer: 'Nossa equipe de suporte está disponível via Discord. Temos servidores em São Paulo otimizados para latência mínima. Se você tiver problemas, entre em contato conosco imediatamente.',
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
    <section id="faq" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="container mx-auto px-4 max-w-4xl relative z-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Perguntas Frequentes</h2>
          <p className="text-lg text-foreground/70">
            Encontre respostas para as dúvidas mais comuns sobre a Oris Cloud.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={containerVariants}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 rounded-lg bg-card border border-border group-hover:border-blue-500/50 transition-all text-left"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg group-hover:text-blue-300 transition-colors">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <ChevronDown className="w-5 h-5 text-blue-400" />
                  </motion.div>
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-blue-500/5 border-x border-b border-blue-500/20 text-foreground/80 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          variants={itemVariants}
          className="mt-16 p-8 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 text-center"
        >
          <h3 className="text-xl font-bold mb-3">Ainda tem dúvidas?</h3>
          <p className="text-foreground/70 mb-6">
            Entre em contato com nossa equipe de suporte via Discord. Estamos sempre prontos para ajudar!
          </p>
          <motion.a
            href="https://discord.gg/3pT7NJGZ97"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-2 bg-blue-500 rounded-lg text-white font-semibold hover:bg-blue-600 transition-colors"
          >
            Junte-se ao Discord
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
