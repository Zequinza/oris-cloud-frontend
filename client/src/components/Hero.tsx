import { motion } from 'framer-motion';
import TypingAnimation from './TypingAnimation';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-20 relative overflow-hidden">
      {/* Banner Background */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310419663032706170/WMz8HoFpHBf5sKDLPKcovU/banner_95a29d9e.png)',
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 max-w-6xl relative z-10 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-8 px-4 py-2 border border-white/20 rounded-full text-sm text-foreground/80"
        >
          Cloud Gaming Revolucionário
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Jogue Qualquer Jogo
          </h1>
          <div className="text-3xl md:text-4xl font-light text-foreground/80">
            <span>em </span>
            <TypingAnimation
              words={['Qualquer Lugar', 'Qualquer Dispositivo', 'Sem Hardware Caro']}
              typeSpeed={80}
              deleteSpeed={50}
              pauseDelay={2000}
              loop={true}
            />
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-foreground/70 max-w-2xl mx-auto mb-12"
        >
          Oris Cloud oferece acesso a máquinas virtuais de alto desempenho com GPUs NVIDIA de última geração. Jogue seus jogos favoritos sem precisar investir em hardware caro.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#plans"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-black font-semibold rounded-sm hover:bg-gray-200 transition-colors"
          >
            Ver Planos
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-white/30 text-white font-semibold rounded-sm hover:border-white/60 transition-colors"
          >
            Saiba Mais
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {[
            { number: '4K', label: 'Ultra HD Gaming' },
            { number: '<15ms', label: 'Latência' },
            { number: '∞', label: 'Biblioteca de Jogos' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold mb-2">{stat.number}</div>
              <div className="text-sm text-foreground/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
