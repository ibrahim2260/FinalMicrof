# Microf Design System — MASTER

**Industry:** Home Services Fintech / HVAC Lease-to-Own  
**Direction:** "Warm Authority" — the trustworthiness of a financial institution with the approachability of a home services brand  
**Reference:** kafene.com aesthetic — modern fintech, generous whitespace, confident green

---

## Palette

| Token | Value | Use |
|-------|-------|-----|
| `--color-brand-900` | `#08291F` | Footer, dark hero sections |
| `--color-brand-700` | `#0E5C3A` | Deep hover, dark accents |
| `--color-brand-600` | `#14784A` | CTA hover state |
| `--color-brand-500` | `#1FA862` | PRIMARY — buttons, accents, links |
| `--color-brand-400` | `#46C381` | Light accent, icon strokes |
| `--color-brand-100` | `#E6F6EC` | Card tints, section backgrounds |
| `--color-brand-50` | `#F2FBF6` | Very light tints |
| `--color-ink` | `#0B1411` | Near-black heading + body text |
| `--color-slate` | `#475A52` | Secondary / caption text |
| `--color-line` | `#E4EAE7` | Hairline borders, dividers |
| `--color-paper` | `#F8FAF9` | Off-white page background |
| `--color-white` | `#FFFFFF` | Pure white surfaces |
| `--color-muted` | `#9DB5AA` | Placeholder, disabled |

**CTA sections use `--color-brand-500` background with white text.**  
**Dark sections (footer, Why Microf) use `--color-brand-900`.**  
**Page background is `--color-paper` — warmer than pure white, cooler than linen.**

---

## Typography

| Role | Font | Weight | Use |
|------|------|--------|-----|
| Display | **Urbanist** (Google Fonts) | 700–800 | Hero headlines, section titles |
| Body | **DM Sans** (Google Fonts) | 400–600 | Body copy, UI text, labels |

**Type scale:**
- `display-xl`: `clamp(3rem, 7vw, 5rem)` / weight 800 / leading 1.05 — hero H1
- `display-lg`: `clamp(2rem, 4.5vw, 3.25rem)` / weight 700 / leading 1.1 — section H2
- `display-md`: `clamp(1.5rem, 3vw, 2.125rem)` / weight 600 / leading 1.2 — sub-section H3
- `body-lg`: `18px` / weight 400 / leading 1.65 — lead paragraphs
- `body`: `16px` / weight 400 / leading 1.65 — default body
- `label`: `12px` / weight 600 / letter-spacing 0.08em / uppercase — section labels, tags

**Letter spacing:** `-0.025em` on all headings.  
**No serif fonts.** The display + sans pairing creates warmth without the serif's formality.

---

## Spacing Rhythm

- **Section padding (desktop):** `128px` vertical (`--spacing-section: 8rem`)
- **Section padding (mobile):** `80px` vertical (`--spacing-section-sm: 5rem`)
- **Container max-width:** `80rem` (1280px)
- **Container padding:** `24px` mobile / `40px` desktop
- **Card inner padding:** `32px` desktop / `24px` mobile
- **Stack gap (tight):** `0.75rem`
- **Stack gap (standard):** `1.5rem`
- **Stack gap (loose):** `2.5rem`

**Rule:** whitespace is the signature. Sections must breathe. Never let content feel crammed.

---

## Motion System

All motion uses **Framer Motion** with `prefers-reduced-motion` respected.

### Scroll reveal (standard)
```ts
initial: { opacity: 0, y: 24 }
animate: { opacity: 1, y: 0 }
transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
```

### Stagger children
```ts
container: { staggerChildren: 0.12 }
```

### Hero load sequence
```
Headline in:    delay 0s
Subhead in:     delay 0.15s
CTA in:         delay 0.28s
Hero image in:  delay 0.2s (fade only, no translate)
```

### Card hover
```css
transform: translateY(-4px);
box-shadow: var(--shadow-lg);
transition: 0.2s ease;
```

### Button hover
```css
transform: translateY(-2px);
box-shadow: var(--shadow-green);
background-position: 0% (shimmer sweep);
transition: 0.5s ease;
```

**Reduced motion:** All transforms off. Opacity fades preserved at 50% speed.

---

## The Signature Element: Counter Crescendo

The stats / proof section is the one unmistakable visual moment on the home page.

**Treatment:**
- 4 large animated number counters (count up on scroll entry)
- Numbers in `--color-brand-500` at `96px+` (oversized, grid-breaking)
- Labels below in `--color-slate` at `14px` uppercase
- Background: `--color-paper` — the numbers need room to breathe
- On desktop, the 4 stat items overflow their column slightly, breaking the grid
- Count-up animation: starts when 30% of the element enters viewport, 2s ease-out

**Stats (TODO: confirm with client):**
- `43` States served
- `1,000+` Contractor partners
- `24 hrs` Contractor funding
- Minutes Approval decisions

---

## Page Patterns

### Trust & Authority (Homeowner pages)
- Hero: empathetic headline first, social proof second
- Lead with "what you get" not "how it works"
- Strong Apply Now CTA above the fold
- FAQ section on every homeowner page

### Revenue & Growth (Contractor pages)
- Hero: ROI/revenue headline first
- "More approvals" and "faster funding" are the two pillars
- Include real-looking stat callouts (close rates, funding time)
- Dealer portal CTA is always primary

### Trust badges appear in:
- Hero (inline or floating badge)
- Just before the primary CTA section
- FAQ preamble

---

## Anti-Patterns (DO NOT)

- No dark mode (this is a warm, light-dominant site)
- No neon colors — `#1FA862` is the brightest green
- No purple, pink, or AI gradients
- No emoji as UI icons — use SVG line icons
- No Inter or Space Grotesk — we use Urbanist + DM Sans
- No light text on light green backgrounds (WCAG contrast)
- No sections that feel "boxy" — vary section backgrounds with the palette
- No more than 2 font families on any page
- No motion soup — pick one animated moment per section, not every element
- No CTA without a clearly labeled action ("Apply Now", not "Get Started")

---

## Section Background Rotation

To prevent monotony, rotate backgrounds through this sequence:
1. White (`#FFFFFF`)
2. Paper (`#F8FAF9`)
3. Brand-50 (`#F2FBF6`) — very light green tint
4. Brand-100 (`#E6F6EC`) — light green tint
5. Brand-900 (`#08291F`) — dark green (use sparingly, 1–2× per page)
6. Brand-500 (`#1FA862`) — primary green CTA band

Never stack two Brand-900 or two Brand-500 sections.

---

## Component Library

See individual component files in `src/components/`:

- `ui/FadeIn.tsx` — scroll-reveal wrapper
- `ui/AnimatedCounter.tsx` — count-up number
- `ui/Button.tsx` — primary/secondary/ghost variants
- `sections/FAQ.tsx` — accordion FAQ
- `sections/TestimonialCarousel.tsx` — testimonial cards
- `layout/Nav.tsx` — sticky header with dropdowns
- `layout/Footer.tsx` — dark green footer

---

*Generated 2026-06-18 · Update this file when you discover API constraints, new patterns, or anti-patterns.*
