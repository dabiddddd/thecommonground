import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Check, ArrowLeft, Lock } from 'lucide-react';
import { useCart } from '../context/CartContext';

const provinces = [
  'Metro Manila', 'Abra', 'Agusan del Norte', 'Agusan del Sur', 'Aklan', 'Albay',
  'Antique', 'Apayao', 'Aurora', 'Bataan', 'Batanes', 'Batangas', 'Benguet',
  'Biliran', 'Bohol', 'Bukidnon', 'Bulacan', 'Cagayan', 'Camarines Norte',
  'Camarines Sur', 'Camiguin', 'Capiz', 'Catanduanes', 'Cavite', 'Cebu',
  'Compostela Valley', 'Davao del Norte', 'Davao del Sur', 'Davao Occidental',
  'Davao Oriental', 'Dinagat Islands', 'Eastern Samar', 'Guimaras', 'Ifugao',
  'Ilocos Norte', 'Ilocos Sur', 'Iloilo', 'Isabela', 'Kalinga', 'La Union',
  'Laguna', 'Lanao del Norte', 'Lanao del Sur', 'Leyte', 'Maguindanao',
  'Marinduque', 'Masbate', 'Metro Manila', 'Misamis Occidental', 'Misamis Oriental',
  'Mountain Province', 'Negros Occidental', 'Negros Oriental', 'North Cotabato',
  'Northern Samar', 'Nueva Ecija', 'Nueva Vizcaya', 'Occidental Mindoro',
  'Oriental Mindoro', 'Palawan', 'Pampanga', 'Pangasinan', 'Quezon',
  'Quirino', 'Rizal', 'Romblon', 'Samar', 'Sarangani', 'Siquijor',
  'Sorsogon', 'South Cotabato', 'Southern Leyte', 'Sultan Kudarat',
  'Sulu', 'Surigao del Norte', 'Surigao del Sur', 'Tarlac', 'Tawi-Tawi',
  'Zambales', 'Zamboanga del Norte', 'Zamboanga del Sur', 'Zamboanga Sibugay',
];

const shippingMethods = [
  { id: 'standard', name: 'Standard Shipping', time: '3-7 business days', price: 99, description: 'Metro Manila: 3-5 days · Provincial: 5-10 days' },
  { id: 'express', name: 'Express Shipping', time: '1-3 business days', price: 149, description: 'Metro Manila only' },
];

const paymentMethods = [
  { id: 'gcash', name: 'GCash', icon: '💳' },
  { id: 'maya', name: 'Maya', icon: '📱' },
  { id: 'card', name: 'Credit / Debit Card', icon: '💳' },
  { id: 'cod', name: 'Cash on Delivery', icon: '💵' },
  { id: 'bank', name: 'Bank Transfer', icon: '🏦' },
];

const steps = ['Contact', 'Shipping', 'Payment', 'Review'];

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    province: '', city: '', barangay: '', zip: '', address: '', landmark: '',
    shippingMethod: 'standard',
    paymentMethod: 'gcash',
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [direction, setDirection] = useState(1);

  const goToStep = (s: number) => {
    setDirection(s > step ? 1 : -1);
    goToStep(s);
  };

  const placeOrder = () => {
    clearCart();
    setOrderPlaced(true);
  };

  const shippingCost = form.shippingMethod === 'express' ? 149 : subtotal >= 1500 ? 0 : 99;
  const orderTotal = subtotal + shippingCost;

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-surface pt-24 pb-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-md mx-auto px-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 0.1 }}
            className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <motion.div
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Check size={28} className="text-accent" strokeWidth={3} />
            </motion.div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-display text-3xl font-semibold text-surface mb-3"
          >
            Order Confirmed
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="text-ink-subtle text-sm mb-2"
          >
            Order #TCG-{Math.floor(Math.random() * 90000 + 10000)}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="text-ink-muted text-sm leading-relaxed mb-8"
          >
            Thank you for your order! We'll send you a confirmation email
            with tracking details within 24 hours.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            <a
              href="/"
              className="inline-flex items-center gap-2 bg-accent text-ink px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-accent-light cursor-pointer press-scale"
            >
              Continue Shopping
            </a>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <a href="/" className="inline-flex items-center gap-2 text-ink-muted text-sm hover:text-ink transition-colors mb-4 cursor-pointer press-scale">
            <ArrowLeft size={14} />
            Back to Shop
          </a>
          <h1 className="font-display text-3xl font-semibold text-ink">Checkout</h1>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <button
                onClick={() => i < step && goToStep(i)}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-300 cursor-pointer ${
                  i < step
                    ? 'bg-accent text-ink'
                    : i === step
                    ? 'bg-ink text-surface'
                    : 'bg-ink/5 text-ink-subtle'
                }`}
              >
                {i < step ? <Check size={14} /> : i + 1}
              </button>
              <span className={`text-xs font-medium hidden sm:block ${i === step ? 'text-ink' : 'text-ink-subtle'}`}>
                {s}
              </span>
              {i < steps.length - 1 && (
                <div className={`w-8 sm:w-12 h-px ${i < step ? 'bg-accent' : 'bg-ink/10'}`} />
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Area */}
          <div className="lg:col-span-2">
            {/* Step 0: Contact */}
            {step === 0 && (
                <motion.div
                  key="contact"
                  initial={{ opacity: 0, x: direction * 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-5"
                >
                  <h2 className="font-display text-xl font-semibold text-ink">Contact Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name *" required value={form.firstName} onChange={(e) => update('firstName', e.target.value)} className="bg-surface border border-ink/10 px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:border-accent transition-colors" />
                  <input type="text" placeholder="Last Name *" required value={form.lastName} onChange={(e) => update('lastName', e.target.value)} className="bg-surface border border-ink/10 px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:border-accent transition-colors" />
                </div>
                <input type="email" placeholder="Email Address *" required value={form.email} onChange={(e) => update('email', e.target.value)} className="w-full bg-surface border border-ink/10 px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:border-accent transition-colors" />
                <input type="tel" placeholder="Mobile Number (09XX XXX XXXX) *" required value={form.phone} onChange={(e) => update('phone', e.target.value)} className="w-full bg-surface border border-ink/10 px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:border-accent transition-colors" />
                <button onClick={() => goToStep(1)} className="bg-ink text-surface px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-accent cursor-pointer press-scale">
                  Continue to Shipping
                </button>
              </motion.div>
            )}

            {/* Step 1: Shipping */}
            {step === 1 && (
              <motion.div
                  key="shipping"
                  initial={{ opacity: 0, x: direction * 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-5"
                >
                  <h2 className="font-display text-xl font-semibold text-ink">Shipping Address</h2>
                <select value={form.province} onChange={(e) => update('province', e.target.value)} className="w-full bg-surface border border-ink/10 px-4 py-3 text-sm text-ink focus:outline-none focus:border-accent transition-colors">
                  <option value="">Province / Region *</option>
                  {provinces.map((p) => <option key={p} value={p}>{p}</option>)}
                </select>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="City / Municipality *" required value={form.city} onChange={(e) => update('city', e.target.value)} className="bg-surface border border-ink/10 px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:border-accent transition-colors" />
                  <input type="text" placeholder="Barangay *" required value={form.barangay} onChange={(e) => update('barangay', e.target.value)} className="bg-surface border border-ink/10 px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:border-accent transition-colors" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="ZIP Code *" required value={form.zip} onChange={(e) => update('zip', e.target.value)} className="bg-surface border border-ink/10 px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:border-accent transition-colors" />
                  <input type="text" placeholder="Landmark (optional)" value={form.landmark} onChange={(e) => update('landmark', e.target.value)} className="bg-surface border border-ink/10 px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:border-accent transition-colors" />
                </div>
                <input type="text" placeholder="Street Address (House #, Street Name) *" required value={form.address} onChange={(e) => update('address', e.target.value)} className="w-full bg-surface border border-ink/10 px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:border-accent transition-colors" />

                <h3 className="font-display text-base font-semibold text-ink pt-2">Shipping Method</h3>
                <div className="space-y-3">
                  {shippingMethods.map((m) => (
                    <label key={m.id} className={`flex items-center gap-4 p-4 border cursor-pointer transition-all duration-300 ${form.shippingMethod === m.id ? 'border-accent bg-accent/5' : 'border-ink/10 hover:border-ink/20'}`}>
                      <input type="radio" name="shipping" value={m.id} checked={form.shippingMethod === m.id} onChange={(e) => update('shippingMethod', e.target.value)} className="accent-accent" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-ink">{m.name}</span>
                          <span className="text-sm font-semibold text-ink">₱{m.price}</span>
                        </div>
                        <p className="text-xs text-ink-muted mt-0.5">{m.description}</p>
                      </div>
                    </label>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <button onClick={() => goToStep(0)} className="border border-ink/15 text-ink px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all hover:border-accent cursor-pointer press-scale">
                    Back
                  </button>
                  <button onClick={() => goToStep(2)} className="bg-ink text-surface px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-accent cursor-pointer press-scale">
                    Continue to Payment
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Payment */}
            {step === 2 && (
              <motion.div
                key="payment"
                initial={{ opacity: 0, x: direction * 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-5"
              >
                <h2 className="font-display text-xl font-semibold text-ink">Payment Method</h2>
                <div className="space-y-3">
                  {paymentMethods.map((m) => (
                    <label key={m.id} className={`flex items-center gap-4 p-4 border cursor-pointer transition-all duration-300 ${form.paymentMethod === m.id ? 'border-accent bg-accent/5' : 'border-ink/10 hover:border-ink/20'}`}>
                      <input type="radio" name="payment" value={m.id} checked={form.paymentMethod === m.id} onChange={(e) => update('paymentMethod', e.target.value)} className="accent-accent" />
                      <span className="text-lg">{m.icon}</span>
                      <span className="text-sm font-medium text-ink">{m.name}</span>
                    </label>
                  ))}
                </div>

                {form.paymentMethod === 'card' && (
                  <div className="bg-surface-dark border border-ink/5 p-5 space-y-4">
                    <input type="text" placeholder="Card Number" className="w-full bg-surface border border-ink/10 px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:border-accent transition-colors" />
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="MM / YY" className="bg-surface border border-ink/10 px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:border-accent transition-colors" />
                      <input type="text" placeholder="CVV" className="bg-surface border border-ink/10 px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:border-accent transition-colors" />
                    </div>
                  </div>
                )}

                {form.paymentMethod === 'bank' && (
                  <div className="bg-surface-dark border border-ink/5 p-5 text-sm text-ink-muted leading-relaxed">
                    <p className="font-medium text-ink mb-2">Bank Transfer Instructions</p>
                    <p className="text-xs">Transfer to: <strong>BDO</strong> — Account: 1234 5678 9012 | Name: TheCommonGround PH</p>
                    <p className="text-xs mt-1">Send proof of payment to support@thecommonground.ph. Order will be processed after verification.</p>
                  </div>
                )}

                <div className="flex items-center gap-2 text-ink-subtle text-xs">
                  <Lock size={12} />
                  <span>Secured by 256-bit SSL encryption</span>
                </div>

                <div className="flex gap-3 pt-2">
                  <button onClick={() => goToStep(1)} className="border border-ink/15 text-ink px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all hover:border-accent cursor-pointer press-scale">
                    Back
                  </button>
                  <button onClick={() => goToStep(3)} className="bg-ink text-surface px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-accent cursor-pointer press-scale">
                    Review Order
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Review */}
            {step === 3 && (
              <motion.div
                  key="review"
                  initial={{ opacity: 0, x: direction * 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-6"
                >
                  <h2 className="font-display text-xl font-semibold text-ink">Review Your Order</h2>

                {/* Contact Summary */}
                <div className="bg-surface-dark border border-ink/5 p-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-semibold text-ink-muted tracking-wider uppercase">Contact</span>
                    <button onClick={() => goToStep(0)} className="text-xs text-accent hover:underline cursor-pointer">Edit</button>
                  </div>
                  <p className="text-sm text-ink">{form.firstName} {form.lastName}</p>
                  <p className="text-xs text-ink-muted">{form.email} · {form.phone}</p>
                </div>

                {/* Shipping Summary */}
                <div className="bg-surface-dark border border-ink/5 p-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-semibold text-ink-muted tracking-wider uppercase">Shipping</span>
                    <button onClick={() => goToStep(1)} className="text-xs text-accent hover:underline cursor-pointer">Edit</button>
                  </div>
                  <p className="text-sm text-ink">{form.address}</p>
                  <p className="text-xs text-ink-muted">{form.barangay}, {form.city}, {form.province} {form.zip}</p>
                  <p className="text-xs text-ink-muted mt-1">{shippingMethods.find((m) => m.id === form.shippingMethod)?.name}</p>
                </div>

                {/* Payment Summary */}
                <div className="bg-surface-dark border border-ink/5 p-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-semibold text-ink-muted tracking-wider uppercase">Payment</span>
                    <button onClick={() => goToStep(2)} className="text-xs text-accent hover:underline cursor-pointer">Edit</button>
                  </div>
                  <p className="text-sm text-ink">{paymentMethods.find((m) => m.id === form.paymentMethod)?.name}</p>
                </div>

                {/* Items */}
                <div className="bg-surface-dark border border-ink/5 p-4">
                  <span className="text-xs font-semibold text-ink-muted tracking-wider uppercase">Items ({items.length})</span>
                  <div className="mt-3 space-y-3">
                    {items.map((item) => (
                      <div key={`${item.id}-${item.size}`} className="flex items-center gap-3">
                        <img src={item.image} alt={item.name} className="w-12 h-14 object-cover bg-stone-100" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-ink truncate">{item.name}</p>
                          <p className="text-xs text-ink-muted">{item.size} · Qty: {item.quantity}</p>
                        </div>
                        <span className="text-sm font-semibold text-ink">₱{(item.price * item.quantity).toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <button onClick={() => goToStep(2)} className="border border-ink/15 text-ink px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all hover:border-accent cursor-pointer press-scale">
                    Back
                  </button>
                  <button onClick={placeOrder} className="flex items-center gap-2 bg-accent text-ink px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-accent-light hover:shadow-[0_0_30px_rgba(202,138,4,0.3)] cursor-pointer press-scale">
                    <Lock size={12} />
                    Place Order — ₱{orderTotal.toLocaleString()}
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-surface-dark border border-ink/5 p-6 sticky top-28">
              <h3 className="font-display text-base font-semibold text-ink mb-4">Order Summary</h3>
              <div className="space-y-3 mb-4">
                {items.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex items-center gap-3">
                    <div className="relative w-12 h-14 bg-stone-100 flex-shrink-0 overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-ink text-surface text-[10px] font-bold rounded-full flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-ink truncate">{item.name}</p>
                      <p className="text-xs text-ink-muted">{item.size}</p>
                    </div>
                    <span className="text-sm font-semibold text-ink">₱{(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-ink/5 pt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-ink-muted">Subtotal</span>
                  <span className="text-ink">₱{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-muted">Shipping</span>
                  <span className="text-ink">
                    {shippingCost === 0 ? <span className="text-accent">Free</span> : `₱${shippingCost}`}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-ink/5">
                  <span className="text-ink font-semibold">Total</span>
                  <span className="text-ink font-semibold">₱{orderTotal.toLocaleString()}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-ink/5">
                <div className="flex items-center gap-2 text-ink-subtle text-[10px]">
                  <Shield size={12} />
                  <span>Secure checkout · VAT-inclusive pricing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
