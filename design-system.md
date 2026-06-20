# TheCommonGround — Design System

## Brand Voice
Purposeful, warm, understated. Speaks to community and shared identity. No hype — just ground. Uses "we" and "you" tone. Filipino-first but universal in feel.

## Color Tokens
```
--ink:          #0A0A0A       (primary text, dark backgrounds)
--ink-soft:     #262626       (secondary text)
--ink-muted:    #737373       (tertiary text, descriptions)
--ink-subtle:   #A3A3A3       (lowest text, meta, placeholders)

--paper:        #FAFAF9       (page background)
--paper-elevated: #FFFFFF     (cards, modals)
--paper-muted:  #F5F5F4       (subtle surface contrast)

--accent:       #CA8A04       (gold — primary accent, CTAs, highlights)
--accent-strong: #B87A00      (hover state)
--accent-soft:  #EAB308       (lighter accent)
--accent-muted: #F5E6B8       (bg highlights)

--surface:      #FAFAF9       (same as paper — light surfaces)
--surface-dark: #F5F5F4       (card backgrounds on paper)
```

## Typography
- **Display:** `'Clash Display', sans-serif` (headings, logo, large text)
- **Body:** `'Plus Jakarta Sans', sans-serif` (everything else)
- **Sizes:** text-xs (10-12px) for labels/legal · text-sm (13-14px) · text-base (15-16px) · text-lg · text-xl · text-3xl/4xl/5xl for headings
- **Tracking:** 0.35em for section labels · 0.2-0.25em for CTAs · 0.18em for nav · 0.12em for logo
- **Uppercase + tracking** used for all labels, CTAs, nav links
- **Italic accent** pattern: `"Word"` in italic + accent color within headings

## Spacing
- Page max-width: `max-w-7xl` (1280px)
- Section padding: `py-24 sm:py-32` (96-128px vertical)
- Content padding: `px-6 lg:px-10` (24-40px horizontal)
- Gaps: `gap-6 lg:gap-8` in grids · `gap-12 lg:gap-16-24` in two-column layouts
- Section labels bottom margin: `mb-3`
- Stack spacing: `space-y-10-12` for vertical rhythm

## Shadows
```
--shadow-ambient:    0 2px 8px -2px rgba(10,10,10,0.04), 0 8px 24px -8px rgba(10,10,10,0.06)
--shadow-elevated:   0 4px 16px -4px rgba(10,10,10,0.08), 0 20px 40px -12px rgba(10,10,10,0.12)
--shadow-cta:        0 0 0 1px rgba(202,138,4,0.15), 0 4px 24px -4px rgba(202,138,4,0.25)
--shadow-cta-hover:  0 0 0 1px rgba(202,138,4,0.25), 0 8px 32px -4px rgba(202,138,4,0.35)
```

## Border Radius
- `--radius-tight: 6px` (inputs, small elements)
- `--radius-card: 14px` (images, card corners)
- `--radius-pill: 100px` (quantity controls, badges)
- `--radius-bezel: 22px` (outer cart panel)
- `--radius-bezel-inner: calc(22px - 6px)` (inner cart panel)

## Transitions
- `--transition-fast: 120ms cubic-bezier(0.22, 1, 0.36, 1)`
- `--transition-base: 200ms cubic-bezier(0.22, 1, 0.36, 1)`
- `--transition-slow: 400ms cubic-bezier(0.22, 1, 0.36, 1)`
- `--transition-spring: 500ms cubic-bezier(0.32, 0.72, 0, 1)`
- **Easing curve:** `cubic-bezier(0.22, 1, 0.36, 1)` is the standard
- **Spring curve:** `cubic-bezier(0.32, 0.72, 0, 1)` for slide-in panels

## Component Patterns

### Page/Section Structure
```
<section id="..." className="py-24 sm:py-32 px-6 lg:px-10 max-w-7xl mx-auto">
  <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-accent text-xs font-semibold tracking-[0.35em] uppercase mb-3">
    Section Label
  </motion.p>
  <motion.h2 ... className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-ink leading-tight">
    Heading<br/><span className="italic text-accent">Word</span>
  </motion.h2>
  <motion.p ... className="mt-6 text-ink-muted text-base leading-relaxed max-w-md">
    Body text...
  </motion.p>
</section>
```

### Buttons
- **Primary CTA:** `bg-accent text-ink px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] hover:bg-accent-strong hover:shadow-cta`
- **Secondary (border):** `border border-paper/20 text-paper px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] hover:border-accent hover:text-accent`
- **Dark fill:** `bg-ink text-surface px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-accent`
- **Link arrows:** Animate x:[0,4,0] infinite 2s

### Inputs
- `bg-surface border border-ink/10 px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:border-accent transition-colors`

### Section Labels
- `text-accent text-xs font-semibold tracking-[0.35em] uppercase mb-3`

### Framer Motion Animation Presets
```tsx
// Fade up
initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6-0.8, delay: 0-0.x, ease: [0.22, 1, 0.36, 1] }}

// Slide in from right
initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}

// Scale fade
initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}

// Viewport detection
const ref = useRef(null);
const inView = useInView(ref, { once: true, margin: '-100px' });
// Use inView as gate for animate: inView ? { opacity: 1, y: 0 } : {}
```

### Product Card
```tsx
<motion.div className="group relative">
  <div className="relative aspect-[3/4] bg-stone-100 overflow-hidden">
    <span className="absolute top-4 left-4 z-10 bg-accent text-ink text-[10px] font-semibold tracking-[0.2em] uppercase px-3 py-1.5">
      {tag}
    </span>
    <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-ink/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
      Quick View + ArrowRight
    </div>
  </div>
  <div class="mt-4">
    <h3 class="font-heading text-lg font-semibold text-ink">{name}</h3>
    <p class="text-ink-muted text-sm">{description}</p>
    <span class="text-accent font-semibold text-sm">₱{price}</span>
    // Size/Color selects, Add to Cart button
  </div>
</motion.div>
```

### Cart Panel (double bezel architecture)
```
Outer: bg-ink/5 p-[1.5px]
  Inner: bg-paper-elevated
    Header: border-b + close button
    Items: scrollable flex-1
    Footer: border-t + summary + checkout button
```

### Key Utility Classes
- `text-balance` / `text-pretty` for headings/body
- `max-w-md` / `max-w-lg` for constrained body text
- `leading-tight` for headings, `leading-relaxed` for body
- `select-none` for decorative text
- Cursors: `cursor-pointer` on all interactive elements

## Route Structure
```
/          — Hero, Collection, Story, About, CTA, Footer, Cart
/support   — Support page + Footer
/checkout  — Checkout page (no footer)
```

## Products
| ID | Name | Price | Tag | Sizes | Colors |
|----|------|-------|-----|-------|--------|
| 1 | Foundation Polo | ₱699 | Essential | S-XXL | Black, White, Navy, Olive |
| 2 | Common Ground Hoodie | ₱1,299 | Best Seller | S-XXL | Black, Grey, Cream |
| 3 | Unity Cap | ₱499 | New | One Size | Black, Navy, Khaki |
| 4 | Grounded Pullover | ₱1,499 | Limited | S-XXL | Charcoal, Forest, Sand |

## Cart Rules
- Free shipping threshold: ₱1,500
- Standard shipping: ₱99 (₱0 if over threshold)
- Express shipping: ₱149 (Metro Manila only)
- Payment methods: GCash, Maya, Credit/Debit Card, COD, Bank Transfer
- Checkout flow: Contact → Shipping → Payment → Review
