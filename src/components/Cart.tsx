import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, shipping, total, totalItems } = useCart();
  const freeShippingProgress = Math.min((subtotal / 1500) * 100, 100);
  const amountToFreeShipping = Math.max(1500 - subtotal, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={closeCart}
            className="fixed inset-0 bg-ink/40 backdrop-blur-sm z-[60]"
            aria-hidden="true"
          />

          {/* Cart Panel - Double Bezel Architecture */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1], exit: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-paper z-[70] flex flex-col shadow-elevated"
            style={{ willChange: 'transform' }}
            role="dialog"
            aria-label="Shopping cart"
          >
            {/* Outer Bezel */}
            <div className="flex-1 flex flex-col bg-ink/5 p-[1.5px] rounded-none">
              {/* Inner Core */}
              <div className="flex-1 flex flex-col bg-paper-elevated rounded-none">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-ink/5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-ink/5 rounded-bezel-inner flex items-center justify-center">
                      <ShoppingBag size={18} className="text-ink" aria-hidden="true" />
                    </div>
                    <h2 className="font-display text-lg font-semibold text-ink tracking-[0.05em]">
                      Your Cart
                    </h2>
                    {totalItems > 0 && (
                      <span className="bg-ink text-paper text-[10px] font-semibold px-2 py-0.5 tracking-wider rounded-pill">
                        {totalItems}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={closeCart}
                    className="p-2 text-ink-muted hover:text-ink transition-colors duration-200 cursor-pointer rounded-pill hover:bg-ink/5 press-scale"
                    aria-label="Close cart"
                  >
                    <X size={18} strokeWidth={2} />
                  </button>
                </div>

                {/* Free Shipping Progress */}
                {subtotal > 0 && subtotal < 1500 && (
                  <div className="px-6 py-4 bg-paper-muted border-b border-ink/5">
                    <div className="flex justify-between text-xs mb-2">
                      <span className="text-ink-muted">
                        {amountToFreeShipping > 0
                          ? `₱${amountToFreeShipping.toLocaleString()} away from free shipping`
                          : 'Free shipping unlocked!'}
                      </span>
                      <span className="text-accent font-semibold">₱1,500</span>
                    </div>
                    <div className="w-full h-1.5 bg-ink/5 rounded-pill overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${freeShippingProgress}%` }}
                        transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                        className="h-full bg-accent rounded-pill relative overflow-hidden"
                        style={{ willChange: 'width' }}
                      >
                        <motion.div
                          animate={{ x: ['-100%', '200%'] }}
                          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                          className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-accent-soft/30 to-transparent"
                        />
                      </motion.div>
                    </div>
                  </div>
                )}

                {/* Items */}
                <div className="flex-1 overflow-y-auto px-6 py-4">
                  {items.length === 0 ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col items-center justify-center h-full text-center"
                    >
                      <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                        className="w-16 h-16 bg-ink/5 rounded-full flex items-center justify-center mb-4"
                      >
                        <ShoppingBag size={32} className="text-ink-subtle/30" aria-hidden="true" />
                      </motion.div>
                      <p className="text-ink-muted text-sm mb-1">Your cart is empty</p>
                      <p className="text-ink-subtle text-xs">Add something that speaks to you.</p>
                    </motion.div>
                  ) : (
                    <div className="space-y-4">
                      {items.map((item) => (
                        <motion.div
                          key={`${item.id}-${item.size}-${item.color}`}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20, height: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="flex gap-4 pb-4 border-b border-ink/5 last:border-none"
                        >
                          {/* Image - Double Bezel */}
                          <div className="w-20 h-24 bg-ink/5 flex-shrink-0 overflow-hidden rounded-card relative">
                            <div className="absolute inset-0 bg-paper-elevated rounded-[calc(14px-2px)] p-[1.5px]">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover rounded-[calc(14px-4px)]"
                              />
                            </div>
                          </div>

                          {/* Details */}
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="text-sm font-semibold text-ink leading-tight">
                                  {item.name}
                                </h3>
                                <p className="text-ink-subtle text-xs mt-0.5">
                                  {item.size} / {item.color}
                                </p>
                              </div>
                              <button
                                onClick={() => removeItem(item.id, item.size)}
                                className="p-1.5 text-ink-subtle hover:text-red-500 hover:bg-red-500/10 transition-all duration-200 cursor-pointer rounded-pill press-scale"
                                aria-label={`Remove ${item.name}`}
                              >
                                <Trash2 size={14} strokeWidth={2} />
                              </button>
                            </div>

                            <div className="flex items-center justify-between mt-3">
                              {/* Quantity Controls - Pill Style */}
                              <div className="flex items-center bg-ink/5 rounded-pill overflow-hidden">
                                <button
                                  onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                                  className="w-10 h-10 flex items-center justify-center text-ink-muted hover:text-ink hover:bg-ink/10 transition-all duration-150 cursor-pointer press-scale"
                                  aria-label="Decrease quantity"
                                >
                                  <Minus size={14} strokeWidth={2.5} />
                                </button>
                                <span className="w-10 h-10 flex items-center justify-center text-xs font-semibold text-ink border-x border-ink/10">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                                  className="w-10 h-10 flex items-center justify-center text-ink-muted hover:text-ink hover:bg-ink/10 transition-all duration-150 cursor-pointer press-scale"
                                  aria-label="Increase quantity"
                                >
                                  <Plus size={14} strokeWidth={2.5} />
                                </button>
                              </div>
                              <span className="text-sm font-semibold text-ink">
                                ₱{(item.price * item.quantity).toLocaleString()}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer / Checkout */}
                {items.length > 0 && (
                  <div className="border-t border-ink/5 px-6 py-5 space-y-3 bg-paper-muted">
                    <div className="space-y-1.5 text-sm">
                      <div className="flex justify-between">
                        <span className="text-ink-muted">Subtotal</span>
                        <span className="text-ink font-medium">₱{subtotal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-ink-muted">Shipping</span>
                        <span className="text-ink font-medium">
                          {shipping === 0 ? (
                            <span className="text-accent">Free</span>
                          ) : (
                            `₱${shipping}`
                          )}
                        </span>
                      </div>
                      <div className="flex justify-between pt-2 border-t border-ink/5">
                        <span className="text-ink font-semibold">Total</span>
                        <span className="text-ink font-semibold">₱{total.toLocaleString()}</span>
                      </div>
                    </div>

                    <Link
                      to="/checkout"
                      onClick={closeCart}
                      className="relative group flex items-center justify-center gap-2 w-full bg-ink text-paper py-3.5 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-200 hover:bg-accent hover:text-ink hover:shadow-cta cursor-pointer press-scale"
                      style={{ willChange: 'transform, background-color, box-shadow' }}
                    >
                      Checkout
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                        aria-hidden="true"
                      >
                        <ArrowRight size={14} strokeWidth={2.5} />
                      </motion.span>
                      <motion.span
                        className="absolute inset-0 bg-accent/0 group-hover:bg-accent/100 rounded-pill transition-colors duration-300"
                        aria-hidden="true"
                      />
                    </Link>

                    <p className="text-center text-ink-subtle text-[10px] tracking-wide uppercase">
                      GCash · Maya · Visa · MC · COD
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}