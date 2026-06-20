import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const values = [
  {
    number: '01',
    title: 'Shared Identity',
    text: "We don't follow trends — we follow conviction. Every piece speaks to something real: community, resilience, purpose.",
  },
  {
    number: '02',
    title: 'Local First',
    text: 'Born in the Philippines. Made for Filipinos who want world-class design without the markup. Crafted locally, worn globally.',
  },
  {
    number: '03',
    title: 'No Fluff',
    text: 'Clean cuts. Honest materials. No gimmicks. We make clothes that let the design do the talking.',
  },
];

export default function Story() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="story" className="relative py-24 sm:py-32 bg-surface-dark overflow-hidden scroll-mt-24">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent origin-left"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Heading */}
          <div className="lg:sticky lg:top-32">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-accent text-sm font-medium tracking-[0.25em] uppercase mb-3"
            >
              The Story
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-ink leading-tight"
            >
              Where We
              <br />
              <span className="italic text-accent">Come From</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 text-ink-muted text-base leading-relaxed max-w-md"
            >
              TheCommonGround started with a simple question: why does
              good design always feel out of reach? We're building a brand
              that proves it doesn't have to be.
            </motion.p>
          </div>

          {/* Right — Values */}
          <div className="space-y-12">
            {values.map((item, i) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group border-b border-ink/8 pb-10 last:border-none"
              >
                <div className="flex items-start gap-5">
                  <span className="font-display text-4xl text-accent/30 font-semibold leading-none mt-1 group-hover:text-accent transition-colors duration-500">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink mb-2">
                      {item.title}
                    </h3>
                    <p className="text-ink-muted text-sm sm:text-base leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
