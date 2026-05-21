# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Image Foundry — Claude Code Guidelines

## Project Overview
This is the Image Foundry Labs microsite — a set of standalone marketing/campaign pages for Image Foundry (trading name: Love Image Foundry), a Manchester-based CGI and product visualisation studio.

**Pages:**
- `index.html` — hub page (root)
- `adding-people-to-imagery/` — explains five methods for adding people to CGI scenes
- `bringing-people-to-life/` — AI Labs / animation capability page
- `dynamic-stills/` — motion-from-stills page

Each subdirectory is a standalone page; pages share the `assets/` directory for CSS and JS.

## Two distinct design systems — do not blend them

**Hub pages** (`adding-people-to-imagery/`) use black/teal, `-webkit-text-stroke` outline treatments, dense section padding, teal corner square accents, and a 12-column gallery grid with 3px gaps.

**Landing pages** (`bringing-people-to-life/`, `dynamic-stills/`) use the pink/blue scheme with a strict section rhythm: dark hero → white content sections → single brand-colour CTA band → dark footer. Never place two consecutive dark sections.

## Copy rules (applies to any text edits)
- UK English throughout (colour, organise, etc.)
- No exclamation marks anywhere.
- Forbidden words: *visualisations, emotive, engage, immerse, contact us.*
- Preferred CTAs: *Let's talk · Tell us about your project · Chat to us.*
- AI Labs capability must be woven throughout copy — never siloed into one section.
- Social proof: named client logo row + proof point strip only (no testimonials). Clients: Forshaws, Rippon Homes, Sage Housing, Vistry (property); Breville, Ideal Standard, Geberit, Aqualisa, Croydex, JELD-WEN, Layla Sleep (KBB/product).

## Asset Stack — always load in this order
Every page `<head>` must include these, in order:

```html
<!-- Bootstrap 5 -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<!-- Animate.css -->
<link href="https://cdn.jsdelivr.net/npm/animate.css@4.1.1/animate.min.css" rel="stylesheet">
<!-- Swiper -->
<link href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" rel="stylesheet">
<!-- Google Fonts — Barlow Condensed (all weights) -->
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet">
<!-- Image Foundry global theme CSS (typography, nav, footer) -->
<link href="https://www.imagefoundry.co.uk/wp-content/themes/blankslate/css/if.css" rel="stylesheet">
<!-- Shared layout/nav CSS -->
<link href="../assets/bringing-people-to-life.css" rel="stylesheet">
<!-- Page-specific CSS last -->
<link href="../assets/<page-name>.css" rel="stylesheet">
```

Scripts at bottom of `<body>`:
```html
<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
<script src="../assets/jquery.min.js"></script>
<script src="../assets/if.js"></script>
```

## Typography Rules

**Font family:** `Barlow Condensed` (via Google Fonts) — applies to all text via `if.css` body rule. Never specify a different typeface.

| Element | Size | Weight | Style |
|---------|------|--------|-------|
| Body / p | 18px, line-height 22px, letter-spacing -0.015em | 400 | — |
| h1 | clamp(64px, 10vw, 160px) | 800 | UPPERCASE, letter-spacing -0.03em, line-height 0.88 |
| h2 / section headings | clamp(46px, 5.5vw, 80px) | 800 | UPPERCASE, letter-spacing -1.35px, line-height 0.9 |
| h3 | 28px | 700 | — |
| Eyebrow labels | 13px | 700 | UPPERCASE, letter-spacing 0.28em |
| Tags / pills | 11px | 700 | UPPERCASE, letter-spacing 0.14–0.22em |
| Button text | 22px | 500 | UPPERCASE, letter-spacing -0.015em |

Outline text effect (hollow letters):
```css
-webkit-text-stroke: 2px <color>;
-webkit-text-fill-color: transparent;
```

## Brand Colour Palette

```css
--pink:       #a60064   /* primary CTA, accents */
--blue:       #006680   /* secondary accents, tags */
--yellow:     #ecaa00   /* highlights, featured sections */
--off-white:  #F6F6F6   /* light section backgrounds */
--light-grey: #DBDBDB   /* borders, dividers */
--mid-grey:   #B7B7B7   /* muted text, labels */
--near-black: #212529   /* body text on light backgrounds */
```

Use `var(--pink)` etc. — never hardcode the hex values in new CSS.

## Layout System

- **Horizontal padding:** always `var(--px)` — never hardcode px values for side padding.
  - Desktop: `clamp(48px, 6vw, 112px)` (set in `:root`)
  - Scales down automatically at each breakpoint via media queries in the page CSS.
- **Section vertical padding:** `clamp(64px, 8vw, 100px)` for major sections; `clamp(32px, 4vw, 48px)` for strip/divider sections.
- **Grid gaps:** `3px` (not `gap: 1rem`). Borders between cells use `1px solid var(--light-grey)`.
- **Breakpoints:**
  - `≥1600px` — large desktop
  - `≤1199px` — laptop
  - `≤991px` — tablet landscape (single-column stack)
  - `≤767px` — tablet portrait
  - `≤559px` — mobile
  - `≤399px` — small phone

## Image Placement Rules

- All images use `object-fit: cover` and fill their container (`width: 100%; height: 100%`).
- Hover zoom: `transform: scale(1.04)` with `transition: transform 0.8s ease` on the `<img>`.
- Wrap the `<img>` in a container with `overflow: hidden; position: relative`.
- Image panels paired with text panels always use a CSS Grid split (e.g. `1fr 1fr` or `3fr 2fr`) — never use Bootstrap columns for these splits.
- On tablet (`≤991px`): image panels collapse to `aspect-ratio: 16/9` and stack above the text (`order: -1`).
- Image captions: absolutely positioned inside the image container, bottom-left, using `.gi-tag` or `.mf-caption` pattern (black or pink bar, white 11px uppercase text).

## Section & Component Patterns

### Hero
```html
<section class="hero">
  <div class="hero-bg" style="background-image: url(...)"></div>
  <div class="hero-content">
    <p class="hero-eyebrow">Eyebrow Label</p>
    <h1 class="hero-h1">Headline</h1>
    <p class="hero-sub">Subheading text with pink left border.</p>
    <div class="hero-cta">
      <a href="#" class="hero-btn-primary">Primary CTA</a>
      <a href="#" class="hero-btn-outline">Secondary CTA</a>
    </div>
  </div>
  <a href="#next" class="hero-chevron">↓</a>
</section>
```

### Eyebrow Labels
Always use a small-caps label above section headings:
```html
<span class="section-eyebrow">Section Label</span>
```
The `::before` pseudo-element adds a coloured rule automatically. Do **not** add eyebrow labels inside `<h2>` tags — keep them as separate `<span>` or `<p>` elements above the heading.

### Buttons / CTAs
Buttons have a right-arrow line via `::after` pseudo-element. Standard padding: `1rem 7rem 1rem 1rem`. On mobile (`≤559px`) buttons go full-width with centred text and the arrow is hidden.

### Cards / Method Rows
- Use border-top colour accents (4px) to distinguish cards — rotate through `--pink`, `--blue`, `--yellow`, `--near-black`.
- Card hover: `background: var(--off-white)`.

### Trust Strip
Animated marquee of client logos. Logos: `filter: brightness(0)` (all black), max-height 32px.

### Forms
- Labels: 11px uppercase, `color: rgba(255,255,255,0.65)` (on pink background).
- Inputs: borderless except bottom border `rgba(255,255,255,0.3)`, focus brightens to `#fff`.
- Submit button: same style as `.cta-btn`.

## Nav & Footer
Nav and footer are loaded from `bringing-people-to-life.css` + `if.js`. Use the existing `.site-header`, `.sf`, `.nav-overlay` markup structure from any existing page. Never recreate the nav from scratch.

## Nav & Footer — important notes
Nav and footer markup is driven by `if.js` (which reads `.site-header` / `.sf` / `.nav-overlay` structure) and styled by `bringing-people-to-life.css`. `if.js` also handles the `body { opacity: 0 }` fade-in on load — if `if.js` fails to load the page will be invisible. Never recreate nav from scratch; copy it from an existing page.

## Do Not
- Do not use Bootstrap grid classes (`col-md-6` etc.) for the main content layout — use CSS Grid defined in the page CSS.
- Do not use `margin: auto` centering for full-bleed sections — sections are full-width by default.
- Do not use `font-family` declarations — `if.css` sets Barlow Condensed globally.
- Do not add inline `style` attributes for colours or fonts — use the CSS custom properties.
- Do not create new breakpoints — use only the six defined above.
- Do not load Bootstrap JS — it is not used.
- Do not place two consecutive dark-background sections (the most common brand mistake).
