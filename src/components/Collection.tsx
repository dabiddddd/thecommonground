import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, Plus, Check } from 'lucide-react';
import { products } from '../constants/products';
import { useCart } from '../context/CartContext';

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: product.sizes[0],
      color: product.colors[0],
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div className="relative aspect-[3/4] bg-stone-100 overflow-hidden border border-ink/5 transition-shadow duration-500 group-hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.3)]">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.15 + index * 0.08 }}
          className="absolute top-4 left-4 z-10"
        >
          {product.tag && (
            <span className="bg-accent text-ink text-[10px] font-semibold tracking-[0.2em] uppercase px-3 py-1.5">
              {product.tag}
            </span>
          )}
        </motion.div>
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <motion.div className="absolute bottom-3 right-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleAdd}
            className="w-11 h-11 bg-paper rounded-full flex items-center justify-center shadow-[0_2px_12px_-4px_rgba(0,0,0,0.2)] cursor-pointer press-scale focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label={`Add ${product.name} to cart`}
          >
            <AnimatePresence mode="wait">
              {added ? (
                <motion.span
                  key="check"
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 90 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <Check size={16} className="text-accent" />
                </motion.span>
              ) : (
                <motion.span
                  key="plus"
                  initial={{ scale: 0, rotate: 90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: -90 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <Plus size={16} className="text-ink" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      </div>

      <div className="mt-4 flex items-start justify-between">
        <div>
          <h3 className="font-display text-base font-semibold text-ink group-hover:text-accent transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-ink-subtle text-xs mt-0.5">{product.description}</p>
        </div>
        <span className="text-accent font-semibold text-sm ml-4 whitespace-nowrap">₱{product.price.toLocaleString()}</span>
      </div>
    </motion.div>
  );
}

export default function Collection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="shop" className="relative py-24 sm:py-32 px-6 lg:px-10 max-w-7xl mx-auto scroll-mt-24">
      <div ref={ref} className="mb-14">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-accent text-sm font-medium tracking-[0.25em] uppercase mb-3"
        >
          The Collection
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-ink leading-tight"
        >
          Built Different.
          <br />
          <span className="text-ink-muted italic">Worn Together.</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
        {products.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-14 text-center"
      >
        <a
          href="/support"
          className="inline-flex items-center gap-2 border border-ink/15 text-ink-muted px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] transition-all duration-300 hover:border-accent hover:text-accent press-scale"
        >
          Need Help?
          <ArrowRight size={14} />
        </a>
      </motion.div>
    </section>
  );
}
