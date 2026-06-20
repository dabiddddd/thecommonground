import { Camera, X, Mail } from 'lucide-react';

const footerLinks = {
  shop: [
    { label: 'All Products', href: '/#shop' },
    { label: 'New Arrivals', href: '/#shop' },
  ],
  brand: [
    { label: 'Our Story', href: '/#story' },
    { label: 'About', href: '/#about' },
  ],
  support: [
    { label: 'Shipping & Returns', href: '/support' },
    { label: 'FAQ', href: '/support' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-surface-dark border-t border-ink/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          <div>
            <a href="/" className="inline-block">
              <span className="font-display text-lg tracking-[0.15em] uppercase font-semibold text-ink">
                TheCommonGround
              </span>
            </a>
            <p className="mt-4 text-ink-muted text-sm leading-relaxed max-w-xs">
              Clothing built on shared identity. Clean, purposeful streetwear
              from the Philippines.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="https://instagram.com/thecommonground.ph" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-ink-subtle hover:text-accent transition-colors cursor-pointer hover-lift">
                <Camera size={18} />
              </a>
              <a href="https://x.com/thecommonground" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-ink-subtle hover:text-accent transition-colors cursor-pointer hover-lift">
                <X size={18} />
              </a>
              <a href="mailto:hello@thecommonground.ph" aria-label="Email" className="text-ink-subtle hover:text-accent transition-colors cursor-pointer hover-lift">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold tracking-[0.25em] uppercase text-ink mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-ink-muted text-sm hover:text-accent transition-colors cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-ink/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-ink-subtle text-xs">
            &copy; {new Date().getFullYear()} TheCommonGround. All rights reserved.
          </p>
          <p className="text-ink-subtle/50 text-xs">
            Made with purpose in the Philippines.
          </p>
        </div>
      </div>
    </footer>
  );
}
