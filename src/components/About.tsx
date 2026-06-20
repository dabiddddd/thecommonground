import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Camera, Mail, MapPin } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 sm:py-32 px-6 lg:px-10 max-w-7xl mx-auto scroll-mt-24">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — Visual block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-square bg-ink flex items-center justify-center overflow-hidden"
        >
          {/* Brand mark */}
          <div className="text-center relative z-10">
            <p className="font-display text-6xl sm:text-7xl md:text-8xl font-bold text-surface/10 leading-none select-none">
              TG
            </p>
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-accent/40 flex items-center justify-center"
            >
              <span className="font-display text-3xl text-accent font-semibold italic">TG</span>
            </motion.div>
          </div>

          {/* Corner marks */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-accent/30" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-accent/30" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-accent/30" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-accent/30" />
        </motion.div>

        {/* Right — Content */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-accent text-sm font-medium tracking-[0.25em] uppercase mb-3"
          >
            About
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-ink leading-tight"
          >
            More Than
            <br />
            <span className="italic text-accent">Clothes</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-ink-muted text-base leading-relaxed max-w-md"
          >
            TheCommonGround is for people who don't need loud logos to
            make a statement. We design pieces that carry weight — through
            quality, through meaning, through the communities that wear them.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-4 text-ink-muted text-base leading-relaxed max-w-md"
          >
            Every peso you spend goes directly into supporting local
            production, Filipino design talent, and a brand that's building
            something real.
          </motion.p>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="mt-10 flex flex-col gap-4"
          >
            {[
              { icon: Camera, text: '@thecommonground.ph', href: 'https://instagram.com/thecommonground.ph' },
              { icon: Mail, text: 'hello@thecommonground.ph', href: 'mailto:hello@thecommonground.ph' },
              { icon: MapPin, text: 'Philippines', href: null },
            ].map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
              >
                {item.href ? (
                  <a href={item.href} className="flex items-center gap-3 text-ink-muted text-sm hover:text-accent transition-colors group cursor-pointer press-scale">
                    <item.icon size={16} className="group-hover:scale-110 transition-transform" />
                    <span>{item.text}</span>
                  </a>
                ) : (
                  <div className="flex items-center gap-3 text-ink-muted text-sm">
                    <item.icon size={16} />
                    <span>{item.text}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
