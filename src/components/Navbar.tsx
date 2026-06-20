import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Shop', href: '/#shop', isAnchor: true },
  { label: 'Story', href: '/#story', isAnchor: true },
  { label: 'About', href: '/#about', isAnchor: true },
  { label: 'Support', href: '/support', isAnchor: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-paper/80 backdrop-blur-2xl shadow-ambient'
          : 'bg-transparent'
      }`}
      style={{ willChange: 'transform, opacity, background-color' }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo */}
        <Link
          to="/"
          className="relative z-10 group flex items-center"
          style={{ textDecoration: 'none' }}
        >
          <span className="font-display text-xl tracking-[0.12em] uppercase font-semibold text-ink transition-colors duration-200 group-hover:text-accent">
            TheCommonGround
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.isAnchor ? (
              <a
                key={link.label}
                href={link.href}
                className="relative text-sm font-medium tracking-[0.18em] uppercase text-ink-muted transition-colors duration-200 hover:text-ink cursor-pointer group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-accent transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="relative text-sm font-medium tracking-[0.18em] uppercase text-ink-muted transition-colors duration-200 hover:text-ink cursor-pointer group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-accent transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />
              </Link>
            )
          )}
          <button
            onClick={openCart}
            className="relative flex items-center gap-2 bg-ink text-paper px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-200 hover:bg-accent hover:text-ink hover:shadow-cta cursor-pointer group press-scale"
            style={{ willChange: 'transform, background-color, box-shadow' }}
          >
            <ShoppingBag size={14} strokeWidth={2.5} aria-hidden="true" />
            Cart
            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="absolute -top-2 -right-2 w-5 h-5 bg-accent text-ink text-[10px] font-bold rounded-full flex items-center justify-center"
              >
                {totalItems}
              </motion.span>
            )}
            <motion.span
              className="absolute inset-0 bg-accent/0 group-hover:bg-accent/100 rounded-pill transition-colors duration-300"
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-10 md:hidden p-2 text-ink cursor-pointer press-scale"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <AnimatePresence mode="wait">
            {mobileOpen ? (
              <motion.div
                initial={{ rotate: 45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -45, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="w-6 h-6 flex items-center justify-center"
              >
                <X size={22} strokeWidth={2} />
              </motion.div>
            ) : (
              <motion.div
                initial={{ rotate: -45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 45, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="w-6 h-6 flex items-center justify-center"
              >
                <Menu size={22} strokeWidth={2} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-paper border-t border-ink/5 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-4">
              {navLinks.map((link) =>
                link.isAnchor ? (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm font-medium tracking-[0.18em] uppercase text-ink-muted hover:text-ink transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm font-medium tracking-[0.18em] uppercase text-ink-muted hover:text-ink transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <button
                onClick={() => { setMobileOpen(false); openCart(); }}
                className="flex items-center justify-center gap-2 bg-ink text-paper px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-200 hover:bg-accent hover:text-ink cursor-pointer"
              >
                <ShoppingBag size={14} strokeWidth={2.5} aria-hidden="true" />
                Cart {totalItems > 0 && `(${totalItems})`}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}