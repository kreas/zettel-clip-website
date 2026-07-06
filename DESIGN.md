## Overview

Hemingway is a second brain for people who write to think. The visual system — **Ink & Brass** — reads as a literary print artifact: typewriter, whiskey, and a well-bound notebook. The base canvas is **cream book-paper** (`{colors.canvas}` — #f7f2e8) holding **ink near-black** (`{colors.ink}` — #141210) for display and body. The single brand voltage is **Brass** (`{colors.primary}` — #b8863b) reserved for primary CTA accents, eyebrows, numbering, and small wordmark details — used scarcely, like gold foil on a book spine.

Type runs a **didone serif** (Bodoni Moda) for all display headings — weight 400, all-caps, tight tracking, high stroke contrast. Everything small and functional (eyebrows, labels, nav, captions, body-small) runs **JetBrains Mono**, evoking typewriter output. Running body text uses the sans (CursorGothic/Inter) for readability.

The page rhythm alternates **cream bands and full-bleed ink bands** (`{colors.ink-band}` — #141210). Depth comes exclusively from hairlines and the cream/ink contrast — no shadows, no gradients, square corners. Engraving-style line illustrations (thin ink strokes, radiating hairlines, occasional brass highlight) are the only decorative element.

**Key Characteristics:**

- Cream book-paper canvas (#f7f2e8), never white. Ink is warm near-black (#141210).
- Single accent: `{colors.primary}` (Brass #b8863b). Used scarcely — eyebrows, numbers, hairline accents on CTAs.
- Display is didone serif, ALL CAPS, weight 400 — never bold, never sans.
- Monospace (JetBrains Mono) carries every label, eyebrow, nav link, and caption.
- Square corners everywhere. This is print, not software.
- Hairline-only depth; no drop shadows, no gradients.
- Full-bleed ink bands alternate with cream sections for page rhythm.
- Giant cropped serif wordmark ("HEMINGWAY") bleeding off band edges is the brand signature.

## Colors

### Brand & Accent

- **Brass** (`{colors.primary}` — #b8863b): Eyebrows, section numbers, CTA hairline accents, footer column headers, wordmark details. Used scarcely.
- **Brass Active** (`{colors.primary-active}` — #9c7130): Press/hover state.

### Surface

- **Canvas** (`{colors.canvas}` — #f7f2e8): Cream book-paper page floor.
- **Canvas Soft** (`{colors.canvas-soft}` — #faf6ee): Mockup pane background, subtle inset panels.
- **Surface Card** (`{colors.surface-card}` — #fffdf8): Card surface — slight lift against the cream canvas.
- **Surface Strong** (`{colors.surface-strong}` — #ece4d2): Badges, tag chips.
- **Ink Band** (`{colors.ink-band}` — #141210): Full-bleed dark sections (showcase band, footer). Same value as ink text.

### Hairlines

- **Hairline** (`{colors.hairline}` — #e0d8c4): 1px divider on cream.
- **Hairline Soft** (`{colors.hairline-soft}` — #eae3d2): Lighter divider.
- **Hairline Strong** (`{colors.hairline-strong}` — #c4b998): Stronger panel outline.
- **Hairline On Ink** (`{colors.hairline-on-ink}` — #35322c): 1px divider inside ink bands.

### Text

- **Ink** (`{colors.ink}` — #141210): Display, body emphasis. Warm near-black.
- **Body** (`{colors.body}` — #4a463f): Default running-text.
- **Muted** (`{colors.muted}` — #7d776b): Sub-titles, secondary labels.
- **Muted Soft** (`{colors.muted-soft}` — #a39c8c): Disabled text.
- **On Ink** (`{colors.on-ink}` — #f7f2e8): Cream text on ink bands.
- **On Primary** (`{colors.on-primary}` — #fffdf8): Text on brass fills (rare).

### Semantic

- **Success** (`{colors.semantic-success}` — #2d6a4f): Confirmation indicators.
- **Error** (`{colors.semantic-error}` — #9b2c2c): Validation errors.

## Typography

### Font Families

- **Display serif:** Bodoni Moda (Google Fonts) — didone, high stroke contrast. Weight 400 only. Applied ALL CAPS with tight tracking.
- **Body sans:** CursorGothic (licensed; substitute Inter). Running body copy only.
- **Mono:** JetBrains Mono — eyebrows, labels, nav, captions, buttons, code, small body.

### Hierarchy

| Token                       | Family       | Size | Weight | Line Height | Letter Spacing | Case     | Use                                             |
| --------------------------- | ------------ | ---- | ------ | ----------- | -------------- | -------- | ----------------------------------------------- |
| `{typography.display-mega}` | Serif        | 72px | 400    | 1.05        | -0.72px        | UPPER    | Homepage hero h1                                |
| `{typography.display-lg}`   | Serif        | 40px | 400    | 1.15        | -0.4px         | UPPER    | Section heads                                   |
| `{typography.display-md}`   | Serif        | 28px | 400    | 1.2         | -0.28px        | UPPER    | Card titles                                     |
| `{typography.display-sm}`   | Serif        | 22px | 400    | 1.25        | -0.11px        | UPPER    | Small card titles                               |
| `{typography.quote}`        | Serif italic | 32px | 400    | 1.35        | 0              | Sentence | Pull quotes                                     |
| `{typography.body-md}`      | Sans         | 16px | 400    | 1.6         | 0              | Sentence | Default body                                    |
| `{typography.body-sm}`      | Sans         | 14px | 400    | 1.5         | 0              | Sentence | Footer body                                     |
| `{typography.mono-body}`    | Mono         | 13px | 400    | 1.6         | 0              | Sentence | Card descriptions, captions                     |
| `{typography.eyebrow}`      | Mono         | 12px | 500    | 1.4         | 1.44px         | UPPER    | Eyebrows, section labels ("THE METHOD — 01/03") |
| `{typography.nav-link}`     | Mono         | 12px | 500    | 1.4         | 1.2px          | UPPER    | Top-nav links                                   |
| `{typography.button}`       | Mono         | 13px | 500    | 1.0         | 0.65px         | UPPER    | CTA labels                                      |
| `{typography.number}`       | Mono         | 12px | 500    | 1.4         | 0.6px          | UPPER    | Brass step/feature numbers ("01", "#1 CAPTURE") |

### Principles

- **Display is serif, ALL CAPS, weight 400.** Never bold, never sans, never sentence-case.
- **Mono carries all functional smallness.** If it's a label, eyebrow, nav item, caption, or button — it's JetBrains Mono, usually uppercase with wide tracking.
- **Italic serif is reserved for pull quotes.**
- **Wide positive tracking on mono uppercase; tight negative tracking on serif display.**

## Layout

### Spacing System

- **Base unit:** 4px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.base}` 16px · `{spacing.md}` 20px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px.
- **Section padding:** 96px vertical — generous print pacing.

### Grid & Container

- Max content width: ~1200px.
- Feature/method grid: 3-up at desktop, hairline-separated cells (shared 1px borders, no gaps).
- Steps row: 3 columns divided by vertical hairlines.
- Footer: 4 link columns plus brand column.

### Whitespace Philosophy

Magazine/book pacing. Sections breathe at 96px. Grids are tight and hairline-divided (0 gap — cells share borders like a printed table). The giant cropped wordmark at the page foot is deliberate excess balancing the restraint above.

## Elevation & Depth

**Hairline-only depth.** No drop shadows, no gradients, no elevation tiers.

| Level           | Treatment                         | Use                                            |
| --------------- | --------------------------------- | ---------------------------------------------- |
| Flat (canvas)   | `{colors.canvas}` (#f7f2e8)       | Body bands                                     |
| Ink band        | `{colors.ink-band}` (#141210)     | Showcase band, footer                          |
| Card            | `{colors.surface-card}` (#fffdf8) | Content cards                                  |
| Hairline border | 1px `{colors.hairline}`           | Grid cell borders, dividers                    |
| Brass hairline  | 1px `{colors.primary}`            | App-mockup frame on ink, CTA top-border accent |

### Decorative Depth

- **Engraving illustrations**: thin single-weight ink line art (typewriter, marlin, open book, connected-dot constellations) with radiating hairlines; occasional brass stroke highlight. On ink bands the linework inverts to cream.
- **Inverted grid cell**: one cell of the method grid flips to ink-on-cream inverse (ink background, cream serif title, brass number) for rhythm.

## Shapes

### Border Radius Scale

| Token            | Value  | Use                                          |
| ---------------- | ------ | -------------------------------------------- |
| `{rounded.none}` | 0px    | Everything: buttons, cards, inputs, images   |
| `{rounded.full}` | 9999px | Avatars and the round letterpress stamp only |

Square corners are a hard rule — this is a print system. The shadcn radius variable is set to 0.

## Components

### Top Navigation

**`top-nav`** — Background `{colors.canvas}`, bottom 1px `{colors.hairline}`. Height 64px. Mono uppercase links (`{typography.nav-link}`) left and right; **serif wordmark "HEMINGWAY" centered** in `{typography.display-sm}`. Right-most item is the CTA link "JOIN →" in `{colors.ink}` with brass hover.

### Buttons

**`button-primary`** — Rectangular ink block. Background `{colors.ink}`, text `{colors.on-ink}` in `{typography.button}` (mono uppercase), padding 14px × 24px, height 44px, `{rounded.none}`, with a 1px `{colors.primary}` top border (the brass hairline accent). Hover: background #2a2620.

**`button-secondary`** — Cream outline. Background transparent, text `{colors.ink}`, 1px `{colors.hairline-strong}` border, same shape.

**`button-on-ink`** — For ink bands. Background `{colors.canvas}`, text `{colors.ink}`, brass top hairline.

**`button-text`** — Inline mono uppercase link with brass underline on hover.

### Hero

**`hero-band`** — Background `{colors.canvas}`. Brass mono eyebrow ("NOTES • IDEAS • CONNECTIONS"), then serif ALL-CAPS display headline in `{typography.display-mega}`, stacked lines. Sans body subhead, then `button-primary` + `button-text`. Optional engraving illustration right-aligned on desktop.

### Method Grid (signature)

**`method-grid`** — 3×2 grid of cells sharing 1px `{colors.hairline}` borders (gap 0). Section eyebrow above: "THE METHOD — 01/03" in brass mono.

**`method-cell`** — Background `{colors.canvas}`, padding 32px. Contents: brass mono number ("#1 CAPTURE"), serif ALL-CAPS title in `{typography.display-sm}`, small engraving spot illustration, two lines of `{typography.mono-body}` in `{colors.body}`.

**`method-cell-inverted`** — One cell flips: background `{colors.ink-band}`, serif title `{colors.on-ink}`, number stays brass. Exactly one per grid.

### Showcase Band

**`showcase-band`** — Full-bleed background `{colors.ink-band}`, 96px padding. Brass mono eyebrow, cream serif ALL-CAPS headline (`{typography.display-lg}`), then centered app-mockup card.

**`app-mockup-card`** — Cream app screenshot card on the ink band. Background `{colors.canvas-soft}`, 1px `{colors.primary}` border (brass hairline frame), `{rounded.none}`, no padding. Internal panes: mono sidebar note list, serif note title over sans body, thin-line graph pane (dots + hairline edges).

### Steps Row

**`steps-row`** — 3 columns on `{colors.canvas}` divided by vertical 1px `{colors.hairline}`. Each: brass mono number ("01"), serif ALL-CAPS title ("WRITE" / "LINK" / "REMEMBER") in `{typography.display-md}`, mono description, small engraving spot illustration.

### Quote CTA

**`quote-cta`** — Background `{colors.canvas}`, centered. Serif italic pull quote in `{typography.quote}`, brass mono attribution ("— THE HEMINGWAY METHOD"), then a single `button-primary`. 96px vertical padding.

### Footer

**`footer`** — Full-bleed `{colors.ink-band}`. Four link columns: brass mono uppercase column headers, cream mono links (`{colors.on-ink}` at 70% opacity, full on hover). Optional round letterpress stamp mark (thin cream linework, `{rounded.full}`).

**`footer-wordmark`** — Giant cropped serif wordmark "HEMINGWAY" in `{colors.on-ink}`, sized to viewport width (~13vw), bottom-cropped by the page edge (negative bottom margin / overflow hidden). The brand signature.

### Forms

**`text-input`** — Background `{colors.surface-card}`, text `{colors.ink}`, 1px `{colors.hairline-strong}` border, `{rounded.none}`, padding 12px × 16px, height 44px. Focus: border `{colors.ink}`.

## Do's and Don'ts

### Do

- Reserve `{colors.primary}` (Brass) for eyebrows, numbers, hairline accents, and small details. It is gold foil, not paint.
- Set all display type in the didone serif, ALL CAPS, weight 400.
- Use JetBrains Mono for every label, eyebrow, nav link, caption, and button.
- Keep corners square. Radius 0 everywhere except avatars/stamps.
- Alternate cream and ink bands for page rhythm.
- Use hairline-divided grids with shared borders (gap 0), like a printed table.
- Keep engraving illustrations single-weight thin linework — ink on cream, cream on ink.

### Don't

- Don't fill large areas with brass. No brass buttons, no brass bands.
- Don't use bold display weights or sans-serif headlines.
- Don't add drop shadows or gradients. Hairlines + cream/ink contrast carry all depth.
- Don't round corners on buttons, cards, or inputs.
- Don't use pure white (#ffffff) or pure black (#000000) surfaces.
- Don't set body paragraphs in the display serif — it's for headlines and quotes only.

## Responsive Behavior

### Breakpoints

| Name    | Width       | Key Changes                                                                                                                                     |
| ------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Mobile  | < 640px     | Hero h1 72→36px; method grid 1-up (stacked, hairlines between rows); steps row stacks; nav collapses to wordmark + JOIN; footer wordmark ~18vw. |
| Tablet  | 640–1024px  | Hero h1 52px; method grid 2-up; steps row remains 3-up.                                                                                         |
| Desktop | 1024–1280px | Full 72px hero; method grid 3-up.                                                                                                               |
| Wide    | > 1280px    | Content caps at 1200px; ink bands remain full-bleed.                                                                                            |

### Touch Targets

- Primary CTA at 44px height — WCAG AAA.

### Collapsing Strategy

- Centered nav wordmark stays centered at all sizes; secondary links hide on mobile.
- Method grid: 3-up → 2-up → 1-up, always hairline-divided with no gaps.
- Footer wordmark scales with viewport width and stays cropped at the bottom edge.

## Iteration Guide

1. Focus on a single component at a time.
2. Everything is `{rounded.none}`. Resist rounding.
3. Serif = display + quotes. Mono = labels + small text. Sans = running body. Never swap roles.
4. Use `{token.refs}` everywhere — never inline hex.
5. Brass stays scarce: if a section has more than two brass elements visible, remove one.
6. Grid cells share hairline borders (border collapse pattern), never gap-separated cards.
7. One inverted ink cell per method grid, no more.

## Known Gaps

- CursorGothic is a licensed typeface; Inter is the substitute for body sans.
- Engraving illustrations are placeholder SVG line art until commissioned artwork exists.
- Animation timings (band reveals, wordmark entrance) out of scope.
- Dark mode is intentionally undefined — the ink bands are the only dark surfaces.
