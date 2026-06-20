import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="relative py-24 sm:py-32 bg-ink overflow-hidden">
      <motion.div
        animate={{ opacity: [0.03, 0.06, 0.03] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(202,138,4,0.1) 0%, transparent 60%)`,
        }}
        aria-hidden="true"
      />
      <div ref={ref} className="relative z-10 max-w-xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-accent text-sm font-medium tracking-[0.25em] uppercase mb-3"
        >
          Stay Connected
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-surface leading-tight"
        >
          Join the
          <br />
          <span className="italic text-accent">Movement</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 text-ink-subtle text-base leading-relaxed max-w-md mx-auto"
        >
          Early access to drops, behind-the-scenes, and exclusive
          launches — straight to your inbox. No spam. Just ground.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
        >
          {!submitted ? (
            <>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full sm:flex-1 bg-surface/5 border border-surface/10 text-surface px-5 py-3.5 text-sm font-body placeholder:text-ink-subtle/50 focus:outline-none focus:border-accent transition-colors duration-300"
              />
              <button
                type="submit"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-accent text-ink px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-accent-light hover:shadow-[0_0_30px_rgba(202,138,4,0.3)] cursor-pointer press-scale"
              >
                Subscribe
                <ArrowRight size={14} />
              </button>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2 text-accent py-3.5"
            >
              <motion.div
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 250, damping: 16 }}
              >
                <Check size={18} />
              </motion.div>
              <span className="text-sm font-medium tracking-wide">You're in. Welcome to the ground.</span>
            </motion.div>
          )}
        </motion.form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-4 text-ink-subtle/40 text-xs"
        >
          By subscribing, you agree to receive updates from TheCommonGround.
        </motion.p>
      </div>
    </section>
  );
}
