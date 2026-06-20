# Claude Code Brief — TheCommonGround Polish

**Design Philosophy to Follow:**
Apply principles from Emil Kowalski's design engineering — every micro-interaction matters, animations should feel intentional (not decorative), hover states need to delight, and invisible details (timing, easing, spacing) separate premium from generic. Use impeccable standards: semantic HTML, WCAG AA accessibility, no layout shifts, performant animations with `willChange` only where needed. Follow UI/UX Pro Max e-commerce patterns for cart, checkout, and product presentation.

**Project:** TheCommonGround (React 19 + Vite + Tailwind v4 + Framer Motion 12)
**Dev server:** http://localhost:5173/

**Already fixed (don't redo):**
- `font-heading` → `font-display` in all components (40 occurrences)
- Cart now persists to localStorage
- Checkout clears cart on order placed
- Created shared types in `src/types/index.ts`
- Created `src/lib/animations.ts` (transition presets)
- Extracted products to `src/constants/products.ts`
- Created reusable `src/components/ui/` (Button, Input, Select, Badge)
- Generated hero + product images in `public/images/`
- Full design system documented in `design-system.md`

**Next priority (Phase 1 remaining):**
- Extract FAQ data from Support.tsx to `src/constants/faq.ts`
- Extract navigation data to `src/constants/navigation.ts`
- Add `@tailwindcss/typography` plugin and `tailwind-merge` + `clsx` deps
- Add Zod schemas for form validation (Checkout + Support contact form)
- Fix `bg-surface-dark` — this class doesn't exist in Tailwind v4, replace with `bg-paper-muted` or add to @theme

**Phase 3 — Animation polish (high priority):**
- Refactor all scroll-triggered animations to use `whileInView` consistently
- Stagger product card entrances with `delay: index * 0.08`
- Add loading/success states on Add to Cart (spinner → checkmark)
- Add spring-based scroll indicator on hero
- Add hover/tap feedback on all buttons (scale 0.97 on press)

**Phase 4 — Accessibility:**
- Add `aria-label` to all icon-only buttons (cart close, mobile menu, social links)
- Add skip-to-content link
- Ensure all form inputs have associated `<label>` elements
- Tab order should be logical across checkout steps

**Phase 5 — Performance:**
- Lazy load Support and Checkout pages with `React.lazy` + Suspense
- Preconnect to fonts.googleapis.com in index.html
- Add `loading="lazy"` to all below-fold product images

**Key conventions:**
- Font: `font-display` (Clash Display) for headings, `font-body` (Plus Jakarta Sans) for text
- Accent gold: `#CA8A04`, Ink: `#0A0A0A`, Paper: `#FAFAF9`, Muted: `#737373`
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)` for everything
- Spring: `cubic-bezier(0.32, 72, 0, 1)` for panels/modals
- All interactive elements need `cursor-pointer`
- Product prices in PHP with `₱` prefix
