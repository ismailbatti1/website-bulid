---
name: Industrial Luxury Export Portal
colors:
  surface: '#101417'
  surface-dim: '#101417'
  surface-bright: '#363a3d'
  surface-container-lowest: '#0b0f11'
  surface-container-low: '#191c1f'
  surface-container: '#1d2023'
  surface-container-high: '#272a2d'
  surface-container-highest: '#323538'
  on-surface: '#e0e2e6'
  on-surface-variant: '#c5c6cc'
  inverse-surface: '#e0e2e6'
  inverse-on-surface: '#2d3134'
  outline: '#8f9196'
  outline-variant: '#44474b'
  surface-tint: '#bec7d6'
  primary: '#bec7d6'
  on-primary: '#28313c'
  primary-container: '#1f2833'
  on-primary-container: '#868f9d'
  inverse-primary: '#565f6c'
  secondary: '#e9c176'
  on-secondary: '#412d00'
  secondary-container: '#604403'
  on-secondary-container: '#dab36a'
  tertiary: '#c7c6cb'
  on-tertiary: '#2f3035'
  tertiary-container: '#26272b'
  on-tertiary-container: '#8e8e93'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dae3f2'
  primary-fixed-dim: '#bec7d6'
  on-primary-fixed: '#131c27'
  on-primary-fixed-variant: '#3e4753'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#e3e2e8'
  tertiary-fixed-dim: '#c7c6cb'
  on-tertiary-fixed: '#1a1b20'
  on-tertiary-fixed-variant: '#46464b'
  background: '#101417'
  on-background: '#e0e2e6'
  surface-variant: '#323538'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  display-md:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  display-md-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 30px
    letterSpacing: 0em
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 26px
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0.01em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.12em
  spec-code:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 3rem
  margin-sm: 1.25rem
  space-2xs: 0.125rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
  space-3xl: 6rem
---

## Brand & Style

This design system targets international luxury apparel labels, enterprise procurement directors, and bespoke fashion houses sourcing industrial-scale leather goods and performance garments. The visual tone balances monolithic structural authority with haute-couture craftsmanship.

Drawing heavily from the Swiss International Style and architectural brutalism, the interface relies on rigorous modular grids, pure geometric alignment, absolute sharp edges (0px border-radius), and disciplined density. It eschews generic SaaS tropes, frivolous floating dropshadows, and neon tech accents in favor of tactile permanence, deep obsidian field depths, rich graphite structural surfaces, and metallic tan micro-details reminiscent of stamped brass hardware and raw vegetable-tanned leather edges.

The aesthetic communicates unyielding manufacturing precision, massive supply chain reliability, and uncompromising material provenance.

## Colors

The color architecture is built strictly for high-contrast, low-fatigue industrial and enterprise B2B environments using a layered dark mode hierarchy:

- **Primary Canvas & Field Backgrounds (`#0B0C10`):** Obsidian black canvas serving as the baseline ground.
- **Structural Surfaces & Tonal Containers (`#1F2833`):** Rich industrial graphite used for cards, sidebars, data matrices, and elevated utility bars.
- **Sub-surfaces & Hover States (`#293442` / `#161D26`):** Precision stepping for high-density spec sheets and table rows.
- **Accent & Craftsmanship Indicator (`#C5A059`):** Burnished artisan bronze/tan, used sparingly for active filters, verification seals, precision KPI indicators, and active workflow states.
- **Typography & Technical Wireframes (`#F8F9FA` / `#E5E7EB`):** Bone and raw linen tones delivering crisp readability without the piercing glare of pure `#FFFFFF`.
- **Muted Structural Dividers (`#2A3644`):** Crisp, razor-thin lines defining boundaries and technical grids.

## Typography

The typographical framework enforces strict functional clarity and editorial distinction:

- **Hanken Grotesk** governs all primary displays, headlines, section anchors, and operational labels. Set with tight tracking on hero titles, it delivers an imposing architectural stance, while all-caps labels provide technical ledger-style precision.
- **Inter** commands all narrative descriptions, transactional body copy, technical data tables, and spec sheets. Its micro-grotesque apertures ensure immediate legibility across enterprise-grade BOM (Bill of Materials) records and container freight logs.
- High-level technical metadata, manufacturing IDs, GSM metrics, and leather tannery batch numbers utilize uppercase `label-caps` or monoline `spec-code` to emulate industrial routing paperwork.

## Layout & Spacing

The layout is anchored by a strict 12-column architectural grid on desktop (`1440px+`), scaling to 8 columns on tablet and 4 columns on mobile:

- **Layout Structure:** Screen borders and major content modules are bounded by fixed hairline structural dividers rather than arbitrary gutters. Columns lock into continuous technical ribbons.
- **Rhythm & Cadence:** Built around a modular 4px base increment. Data matrices use tight, dense internal padding (`space-xs` and `space-sm`), while promotional manufacturing showcases and lookbooks employ expansive macro-spacing (`space-2xl` and `space-3xl`) to establish high-end editorial gravitas.
- **Responsive Adaptations:** On small viewports, tables collapse into vertical split-ledger units separated by horizontal keylines. Outer section margins compress from `margin` (`3rem`) to `margin-sm` (`1.25rem`) without altering component internal structural zero-radius margins.

## Elevation & Depth

This design system deliberately rejects blurred, rounded ambient drop shadows in favor of **structural containment, surface value stepping, and hairline architectural boundaries**:

- **Layer 0 (Canvas):** `#0B0C10` baseline ground for global layout wrappers.
- **Layer 1 (Modular Surfaces & Panels):** `#1F2833` fills for data tables, catalog frames, and sidebars, bound by a continuous `1px solid #2A3644` edge.
- **Layer 2 (Overlays & Technical Drawers):** Elevated inspection flyouts and modal drawers adopt `#161D26` with an active `1px solid #C5A059` border on key structural edges (e.g., top or left highlight).
- **Physical Depth:** Depth is established exclusively via contrast: inset dark fields for data inputs against lighter graphite card surfaces, or hairline highlights using `#C5A059` for focused or active objects.

## Shapes

The shape grammar is absolute and unyielding:

- **Border Radius:** `0px` universally across all primitives: buttons, text fields, cards, tooltips, tags, dropdown menus, and modal dialogs.
- **Architectural Edges:** Sharp, geometric corners reinforce physical fabrication, laser-cut leather templates, loom tension, and structural blueprinting.
- **Dividers:** 1px horizontal and vertical technical rules slice modules cleanly, preventing loose visual float.

## Components

### Buttons & CTAs
- **Primary:** Background `#C5A059`, text `#0B0C10`, font `Hanken Grotesk` 700 uppercase (`label-caps`), 0px border radius, padding `12px 24px`. Hover triggers an instantaneous shift to `#D4AF37` with an inset `1px solid #FFFFFF`.
- **Secondary / Technical:** Background transparent, border `1px solid #2A3644`, text `#E5E7EB`. Hover shifts background to `#1F2833` and border to `#C5A059`.
- **Action Grouping:** Joined segmented button groups with shared 1px borders, simulating hardware toggles.

### Cards & Spec Modules
- **Construction:** Structured as interlocking structural boxes with `1px solid #2A3644` perimeter lines and `#1F2833` fill.
- **Header Badging:** Integrated top status strip showing batch run, minimum order quantity (MOQ), or origin accreditation code in monospace tracking.
- **Hover State:** Hairline border transition from `#2A3644` to `#C5A059` with zero positional displacement or shadow movement.

### Data Grids & Spec Sheets
- **High-Density Tables:** Alternating rows using `#0B0C10` and `#131920`. Hairline grid borders between cells.
- **Numeric Alignment:** Right-aligned data points for GSM weight, hide thickness (oz/mm), tensile rating, and export container capacity using tabular numerals.

### Form Inputs & Selectors
- **Input Fields:** Background `#0B0C10`, border `1px solid #2A3644`, text `#F8F9FA`. On focus, border turns `#C5A059` with zero glow. Labels are positioned above as strict, uppercase micro-headers (`label-caps`).
- **Checkboxes & Radios:** Sharp square indicators (0px radius). Unchecked: `1px solid #2A3644`. Checked: filled `#C5A059` with sharp black checkmark glyph or inner square.

### Status Indicators & Chips
- **Chips:** Boxy rectangular badges, `1px solid #2A3644`, background `#161D26`, text `#E5E7EB` in uppercase with generous letter spacing.
- **Compliance / Tier Seals:** Metallic edge accents (`1px solid #C5A059`) for verified certifications (e.g., LWG Gold Rated, ISO 9001, GOTS Organic Cotton).