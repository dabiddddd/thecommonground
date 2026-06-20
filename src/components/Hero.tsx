import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-ink">
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] aspect-square"
        style={{
          background: 'radial-gradient(circle at center, rgba(202,138,4,0.12) 0%, transparent 65%)',
          willChange: 'transform, opacity',
        }}
        aria-hidden="true"
      />

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent origin-center"
        style={{ transformOrigin: 'center' }}
        aria-hidden="true"
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-accent text-sm font-medium tracking-[0.25em] uppercase mb-6"
        >
          Clothing Built on Shared Identity
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[8rem] font-semibold text-paper leading-[0.85] tracking-tight text-balance"
        >
          The
          <br />
          <span className="italic text-accent">Common</span>
          <br />
          Ground
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 text-ink-subtle text-base sm:text-lg max-w-lg mx-auto leading-relaxed font-light text-pretty"
        >
          Wear what connects us. Purposeful streetwear for a generation
          that knows what it stands for.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12"
        >
          <a
            href="/#shop"
            className="relative inline-flex items-center gap-3 bg-accent text-ink px-10 py-4 text-sm font-semibold uppercase tracking-[0.22em] transition-all duration-300 hover:bg-accent-strong hover:shadow-[0_0_40px_-8px_rgba(202,138,4,0.4)] press-scale group"
          >
            Explore Collection
            <motion.span
              className="inline-block"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              aria-hidden="true"
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-ink-subtle/60 font-medium">Scroll</span>
          <ArrowDown size={14} className="text-ink-subtle/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
