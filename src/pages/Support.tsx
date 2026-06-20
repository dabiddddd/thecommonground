import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, Package, RotateCcw, CreditCard, Ruler, MessageCircle, Truck, Shield, HelpCircle, Mail, Loader2 } from 'lucide-react';

/* ── FAQ Data ── */
const faqSections = [
  {
    title: 'Orders & Shipping',
    icon: Package,
    items: [
      { q: 'How long does shipping take?', a: 'Standard shipping takes 3-7 business days within Metro Manila, and 5-10 days for provincial areas. Express shipping (1-3 days) is available for Metro Manila orders.' },
      { q: 'How much is shipping?', a: 'Flat rate of ₱99 nationwide. Free shipping on orders over ₱1,500. Express shipping is ₱149 for Metro Manila.' },
      { q: 'How do I track my order?', a: 'Once your order ships, you\'ll receive a tracking number via SMS and email. You can track your package through our courier partners: J&T Express, Ninja Van, or Flash Express.' },
      { q: 'What if my order is delayed?', a: 'Provincial orders may take up to 10 business days. If your order hasn\'t arrived after 14 business days, contact us at support@thecommonground.ph and we\'ll look into it immediately.' },
    ],
  },
  {
    title: 'Returns & Exchanges',
    icon: RotateCcw,
    items: [
      { q: 'What is your return policy?', a: 'We accept returns within 7 days of delivery. Items must be unworn, unwashed, and have original tags attached. Sale items are final sale.' },
      { q: 'How do I start a return?', a: 'Email us at support@thecommonground.ph with your order number and reason for return. We\'ll send you a return label within 24 hours.' },
      { q: 'How long do refunds take?', a: 'Refunds are processed within 5-7 business days after we receive your return. The amount will be credited to your original payment method or GCash.' },
      { q: 'Can I exchange for a different size?', a: 'Yes! Exchanges are free within 7 days. Just let us know your preferred size when you initiate the return.' },
    ],
  },
  {
    title: 'Payment',
    icon: CreditCard,
    items: [
      { q: 'What payment methods do you accept?', a: 'We accept GCash, Maya (PayMaya), credit/debit cards (Visa, Mastercard), bank transfer (InstaPay/PESONet), and Cash on Delivery (COD) nationwide.' },
      { q: 'Is COD available?', a: 'Yes! Cash on Delivery is available for all areas served by our courier partners. You pay when you receive your order.' },
      { q: 'Are prices VAT-inclusive?', a: 'Yes, all prices shown on our website include 12% VAT. What you see is what you pay — no hidden fees.' },
      { q: 'Do you offer installment payments?', a: 'We\'re working on adding BillEase and Atome Buy Now Pay Later options. Stay tuned!' },
    ],
  },
  {
    title: 'Sizing & Fit',
    icon: Ruler,
    items: [
      { q: 'How do I find my size?', a: 'Check our size guide below. Measure your chest and waist, then match to our chart. When in doubt, size up — our fits are true to standard PH sizing.' },
      { q: 'Do your clothes run small or large?', a: 'Our tees and polos run true to size. Hoodies and pullovers are designed for a slightly oversized, relaxed fit. Check the "Fit" note on each product page.' },
      { q: 'Can I get help choosing a size?', a: 'Absolutely! DM us on Instagram @thecommonground.ph or email support@thecommonground.ph with your measurements and we\'ll help you find the perfect fit.' },
    ],
  },
  {
    title: 'General',
    icon: HelpCircle,
    items: [
      { q: 'Where are you based?', a: 'We\'re based in the Philippines. All orders are fulfilled locally, which means faster shipping and COD support for our customers.' },
      { q: 'How can I contact you?', a: 'Email: support@thecommonground.ph | Instagram: @thecommonground.ph | We respond within 24 hours on business days.' },
      { q: 'Do you have a physical store?', a: 'Not yet! We\'re online-only for now, but we\'re exploring pop-up events. Follow us on Instagram for updates.' },
    ],
  },
];

/* ── Size Chart Data ── */
const sizeChart = [
  { size: 'S', chest: '34-36"', waist: '28-30"', us: 'S', eu: '44-46' },
  { size: 'M', chest: '38-40"', waist: '32-34"', us: 'M', eu: '48-50' },
  { size: 'L', chest: '42-44"', waist: '36-38"', us: 'L', eu: '52-54' },
  { size: 'XL', chest: '46-48"', waist: '40-42"', us: 'XL', eu: '56-58' },
  { size: 'XXL', chest: '50-52"', waist: '44-46"', us: 'XXL', eu: '60-62' },
];

/* ── Contact Form ── */
function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="bg-surface-dark border border-ink/5 p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 14 }}
          className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <MessageCircle size={20} className="text-accent" />
        </motion.div>
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Message Sent</h3>
        <p className="text-ink-muted text-sm">We'll get back to you within 24 hours.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-surface-dark border border-ink/5 p-6 sm:p-8 space-y-5">
      <h3 className="font-display text-lg font-semibold text-ink">Send Us a Message</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text" placeholder="Your Name" required
          value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="bg-surface border border-ink/10 px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:border-accent transition-colors"
        />
        <input
          type="email" placeholder="Email Address" required
          value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="bg-surface border border-ink/10 px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:border-accent transition-colors"
        />
      </div>
      <select
        value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
        className="w-full bg-surface border border-ink/10 px-4 py-3 text-sm text-ink focus:outline-none focus:border-accent transition-colors"
      >
        <option value="">Select a topic</option>
        <option value="order">Order Issue</option>
        <option value="return">Return / Exchange</option>
        <option value="sizing">Sizing Help</option>
        <option value="payment">Payment Question</option>
        <option value="other">Other</option>
      </select>
      <textarea
        placeholder="How can we help?" required rows={4}
        value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="w-full bg-surface border border-ink/10 px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:border-accent transition-colors resize-none"
      />
      <button
        type="submit"
        className="bg-ink text-surface px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-accent cursor-pointer press-scale"
      >
        Send Message
      </button>
    </form>
  );
}

/* ── FAQ Accordion ── */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-ink/5 last:border-none">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left cursor-pointer group press-scale"
      >
        <span className="text-sm sm:text-base font-medium text-ink pr-4 group-hover:text-accent transition-colors">{q}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown size={16} className="text-ink-muted flex-shrink-0" />
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-ink-muted text-sm leading-relaxed pb-4 pl-0">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Order Tracking Form ── */
function OrderTrackingForm() {
  const [form, setForm] = useState({ orderNumber: '', email: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ status: string; estimatedDelivery: string; trackingNumber: string; carrier: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setResult({
        status: 'In Transit',
        estimatedDelivery: 'June 22, 2026',
        trackingNumber: 'JTX123456789PH',
        carrier: 'J&T Express',
      });
    }, 1000);
  };

  if (submitted && result) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="bg-surface-dark border border-ink/5 p-6 space-y-4"
      >
        <div className="flex items-center gap-3">
          <Package size={18} className="text-accent" />
          <h3 className="font-display text-base font-semibold text-ink">Track Your Order</h3>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="bg-surface border border-ink/5 rounded-lg p-4 space-y-3"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-ink-muted tracking-wider uppercase">Status</span>
            <span className="text-sm font-semibold text-accent flex items-center gap-1">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
              >
                <Loader2 size={12} />
              </motion.span>
              {result.status}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-ink-muted tracking-wider uppercase">Tracking Number</span>
            <span className="text-sm font-mono text-ink">{result.trackingNumber}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-ink-muted tracking-wider uppercase">Carrier</span>
            <span className="text-sm text-ink">{result.carrier}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-ink-muted tracking-wider uppercase">Est. Delivery</span>
            <span className="text-sm text-ink">{result.estimatedDelivery}</span>
          </div>
        </motion.div>
        <button
          onClick={() => { setSubmitted(false); setForm({ orderNumber: '', email: '' }); setResult(null); }}
          className="text-xs text-accent hover:underline cursor-pointer"
        >
          Track Another Order
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-surface-dark border border-ink/5 p-6 space-y-4">
      <div className="flex items-center gap-3">
        <Package size={18} className="text-accent" />
        <h3 className="font-display text-base font-semibold text-ink">Track Your Order</h3>
      </div>
      <p className="text-ink-muted text-xs">Enter your order number and email to get real-time tracking updates.</p>
      <div className="grid grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="Order Number (e.g., TCG-12345)"
          required
          value={form.orderNumber}
          onChange={(e) => setForm({ ...form, orderNumber: e.target.value })}
          className="bg-surface border border-ink/10 px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:border-accent transition-colors"
        />
        <input
          type="email"
          placeholder="Email Address"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="bg-surface border border-ink/10 px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:border-accent transition-colors"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-ink text-surface px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-accent cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed press-scale"
      >
        {loading ? 'Tracking...' : 'Track Order'}
      </button>
    </form>
  );
}

/* ── Payment & Shipping Info Forms ── */
function PaymentShippingForms() {
  const paymentMethods = [
    { id: 'gcash', name: 'GCash', description: 'Pay instantly via GCash app or GCash QR', icon: '💳' },
    { id: 'maya', name: 'Maya (PayMaya)', description: 'Pay with Maya wallet or Maya QR', icon: '📱' },
    { id: 'card', name: 'Credit / Debit Card', description: 'Visa, Mastercard, JCB accepted', icon: '💳' },
    { id: 'cod', name: 'Cash on Delivery (COD)', description: 'Pay when you receive your order', icon: '💵' },
    { id: 'bank', name: 'Bank Transfer', description: 'InstaPay / PESONet via BDO, BPI, UnionBank, etc.', icon: '🏦' },
  ];

  const shippingMethods = [
    { id: 'standard', name: 'Standard Shipping', price: '₱99', time: '3-7 business days', coverage: 'Nationwide', description: 'Metro Manila: 3-5 days · Provincial: 5-10 days' },
    { id: 'express', name: 'Express Shipping', price: '₱149', time: '1-3 business days', coverage: 'Metro Manila only', description: 'Next-day delivery for orders placed before 12 PM' },
    { id: 'free', name: 'Free Shipping', price: '₱0', time: '3-7 business days', coverage: 'Orders over ₱1,500', description: 'Standard shipping waived for qualifying orders' },
  ];

  return (
    <div className="bg-surface-dark border border-ink/5 p-6 space-y-6">
      <div className="flex items-center gap-3">
        <CreditCard size={18} className="text-accent" />
        <h3 className="font-display text-base font-semibold text-ink">Payment Methods</h3>
      </div>
      <div className="space-y-3">
        {paymentMethods.map((m) => (
          <div key={m.id} className="flex items-start gap-3 p-3 bg-surface border border-ink/5 rounded-lg hover:border-ink/10 transition-colors">
            <span className="text-xl">{m.icon}</span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-ink">{m.name}</p>
              <p className="text-xs text-ink-muted">{m.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-ink/5">
        <div className="flex items-center gap-3">
          <Truck size={18} className="text-accent" />
          <h3 className="font-display text-base font-semibold text-ink">Shipping Options</h3>
        </div>
        <div className="space-y-3">
          {shippingMethods.map((m) => (
            <div key={m.id} className="p-3 bg-surface border border-ink/5 rounded-lg hover:border-ink/10 transition-colors">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-ink">{m.name}</p>
                <span className="text-sm font-display font-semibold text-ink">{m.price}</span>
              </div>
              <p className="text-xs text-ink-muted mt-0.5">{m.description}</p>
              <div className="flex items-center gap-2 mt-1 text-[10px] text-ink-subtle">
                <Shield size={10} />
                <span>Tracked delivery · {m.coverage}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-ink/5">
        <div className="flex items-center gap-3">
          <Shield size={18} className="text-accent" />
          <h3 className="font-display text-base font-semibold text-ink">Secure Checkout</h3>
        </div>
        <div className="space-y-2 text-xs text-ink-muted leading-relaxed">
          <p>✓ 256-bit SSL encryption on all transactions</p>
          <p>✓ PCI DSS compliant payment processing</p>
          <p>✓ VAT-inclusive pricing — no hidden fees</p>
          <p>✓ Your payment details are never stored on our servers</p>
        </div>
      </div>
    </div>
  );
}

/* ── Main Support Page ── */
export default function Support() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSections = faqSections
    .map((section) => ({
      ...section,
      items: section.items.filter(
        (item) =>
          item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.a.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((section) => section.items.length > 0);

  return (
    <div className="min-h-screen bg-surface pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-accent text-sm font-medium tracking-[0.25em] uppercase mb-3">Support</p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-ink leading-tight">
            How Can We
            <br />
            <span className="italic text-accent">Help?</span>
          </h1>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12"
        >
          {[
            { icon: Truck, label: 'Shipping', href: '#shipping' },
            { icon: RotateCcw, label: 'Returns', href: '#returns' },
            { icon: CreditCard, label: 'Payments', href: '#payment' },
            { icon: Ruler, label: 'Size Guide', href: '#size-guide' },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              className="flex flex-col items-center gap-2 bg-surface-dark border border-ink/5 p-4 text-center transition-all duration-300 hover:border-accent hover:shadow-[0_0_20px_rgba(202,138,4,0.1)] cursor-pointer group"
            >
              <Icon size={20} className="text-ink-muted group-hover:text-accent transition-colors" />
              <span className="text-xs font-medium text-ink-muted group-hover:text-ink transition-colors tracking-wide uppercase">{label}</span>
            </a>
          ))}
        </motion.div>

        {/* Order Tracking & Forms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10"
        >
          {/* Order Tracking Form */}
          <OrderTrackingForm />

          {/* Payment & Shipping Info Forms */}
          <PaymentShippingForms />
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative mb-10"
        >
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-subtle" />
          <input
            type="text"
            placeholder="Search for answers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-surface-dark border border-ink/5 pl-11 pr-4 py-3.5 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:border-accent transition-colors"
          />
        </motion.div>

        {/* FAQ Sections */}
        <div className="space-y-10 mb-16">
          {filteredSections.map((section, sIdx) => (
            <motion.div
              key={section.title}
              id={section.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * sIdx }}
            >
              <div className="flex items-center gap-3 mb-4">
                <section.icon size={18} className="text-accent" />
                <h2 className="font-display text-xl font-semibold text-ink">{section.title}</h2>
              </div>
              <div>
                {section.items.map((item) => (
                  <FAQItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Size Guide */}
        <motion.section
          id="size-guide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <Ruler size={18} className="text-accent" />
            <h2 className="font-display text-xl font-semibold text-ink">Size Guide</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-ink/10">
                  <th className="text-left py-3 px-4 text-xs font-semibold text-ink-muted tracking-wider uppercase">Size</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-ink-muted tracking-wider uppercase">Chest</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-ink-muted tracking-wider uppercase">Waist</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-ink-muted tracking-wider uppercase">US</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-ink-muted tracking-wider uppercase">EU</th>
                </tr>
              </thead>
              <tbody>
                {sizeChart.map((row) => (
                  <tr key={row.size} className="border-b border-ink/5 hover:bg-surface-dark transition-colors">
                    <td className="py-3 px-4 font-semibold text-ink">{row.size}</td>
                    <td className="py-3 px-4 text-ink-muted">{row.chest}</td>
                    <td className="py-3 px-4 text-ink-muted">{row.waist}</td>
                    <td className="py-3 px-4 text-ink-muted">{row.us}</td>
                    <td className="py-3 px-4 text-ink-muted">{row.eu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-ink-subtle text-xs">Measurements are in inches. All sizes are PH standard. When in doubt, size up.</p>
        </motion.section>

        {/* Shipping Info */}
        <motion.section
          id="shipping"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <Truck size={18} className="text-accent" />
            <h2 className="font-display text-xl font-semibold text-ink">Shipping Information</h2>
          </div>
          <div className="bg-surface-dark border border-ink/5 p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <h3 className="text-sm font-semibold text-ink mb-2">Standard Shipping</h3>
                <p className="text-2xl font-display font-semibold text-ink">₱99</p>
                <p className="text-ink-muted text-xs mt-1">3-7 business days (Metro)</p>
                <p className="text-ink-subtle text-xs">5-10 days (Provincial)</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-ink mb-2">Express Shipping</h3>
                <p className="text-2xl font-display font-semibold text-ink">₱149</p>
                <p className="text-ink-muted text-xs mt-1">1-3 business days (Metro)</p>
                <p className="text-ink-subtle text-xs">Metro Manila only</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-accent mb-2">Free Shipping</h3>
                <p className="text-2xl font-display font-semibold text-accent">₱0</p>
                <p className="text-ink-muted text-xs mt-1">Orders over ₱1,500</p>
                <p className="text-ink-subtle text-xs">Standard delivery</p>
              </div>
            </div>
            <div className="pt-4 border-t border-ink/5">
              <p className="text-ink-muted text-xs">
                <Shield size={12} className="inline mr-1" />
                All shipments are tracked. We partner with J&T Express, Ninja Van, and Flash Express.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Returns Policy */}
        <motion.section
          id="returns"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <RotateCcw size={18} className="text-accent" />
            <h2 className="font-display text-xl font-semibold text-ink">Returns & Exchanges</h2>
          </div>
          <div className="bg-surface-dark border border-ink/5 p-6 space-y-4 text-sm text-ink-muted leading-relaxed">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-display text-lg text-accent font-semibold">1</span>
                </div>
                <h3 className="font-semibold text-ink text-sm mb-1">Email Us</h3>
                <p className="text-xs">Contact support@thecommonground.ph with your order number</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-display text-lg text-accent font-semibold">2</span>
                </div>
                <h3 className="font-semibold text-ink text-sm mb-1">Ship It Back</h3>
                <p className="text-xs">We'll send a return label within 24 hours. Pack items with tags on.</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-display text-lg text-accent font-semibold">3</span>
                </div>
                <h3 className="font-semibold text-ink text-sm mb-1">Get Refunded</h3>
                <p className="text-xs">Refund processed within 5-7 business days to your original payment method.</p>
              </div>
            </div>
            <div className="pt-4 border-t border-ink/5 text-xs text-ink-subtle">
              Items must be unworn, unwashed, with original tags. Sale items are final sale. Exchanges for different sizes are free within 7 days.
            </div>
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <MessageCircle size={18} className="text-accent" />
            <h2 className="font-display text-xl font-semibold text-ink">Contact Us</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ContactForm />
            <div className="space-y-6">
              <div className="bg-surface-dark border border-ink/5 p-6">
                <h3 className="font-display text-base font-semibold text-ink mb-4">Other Ways to Reach Us</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-ink-muted">
                    <MessageCircle size={16} className="text-accent flex-shrink-0" />
                    <div>
                      <p className="font-medium text-ink">Instagram</p>
                      <p className="text-xs">@thecommonground.ph</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-ink-muted">
                    <Mail size={16} className="text-accent flex-shrink-0" />
                    <div>
                      <p className="font-medium text-ink">Email</p>
                      <p className="text-xs">support@thecommonground.ph</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-surface-dark border border-ink/5 p-6">
                <h3 className="font-display text-base font-semibold text-ink mb-2">Business Hours</h3>
                <p className="text-ink-muted text-sm">Monday - Friday: 9AM - 6PM</p>
                <p className="text-ink-subtle text-xs mt-1">We respond to messages within 24 hours on business days.</p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

