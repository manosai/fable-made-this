# Design System

## Overview

Fable Made This is a light, image-led gallery with a launch-page hero, a prioritized artifact grid, synthesis, and a quieter deeper-browsing trail. The visual system should feel like a curated exhibition catalog for AI-made artifacts: tactile, readable, confident, and slightly strange.

## Color

Existing palette:

- Background: warm off-white / parchment tones
- Ink: dark brown-black
- Muted text: brown neutrals
- Accent: terracotta
- Secondary accents: rose, blue, green

Direction:

- Keep a light theme, but avoid generic beige sameness by using stronger contrast, sharper editorial structure, and more deliberate accent placement.
- Use warm neutrals as support, not as the only visual idea.
- Media should carry most of the color load in the gallery.

## Typography

Current stack uses a system sans-serif fallback with heavy display weights. Headings are large and compressed; body copy is generous and readable.

Direction:

- Reduce over-tight letter spacing in large display type.
- Use balanced wrapping for headings and pretty wrapping for prose.
- Keep body line lengths below 75ch.
- Avoid repeated tiny uppercase section labels as the main organizing device.

## Layout

Key structures:

- Full-height hero with copy and artifact preview mosaic.
- Sticky controls for search, category, and sort.
- Responsive paginated artifact grid for the strongest visual examples.
- Synthesis section beneath the gallery.
- Compact source trail lower on the page for deeper browsing.

Direction:

- The visual gallery should remain the primary experience.
- Avoid monotonous identical-card rhythm by varying card spans and media emphasis on larger screens.
- Give the hero one dominant visual idea rather than a generic landing-page split.
- Keep synthesis readable but secondary to browsing, and keep the archive visually quieter than the main gallery.

## Components

### Hero

Should quickly communicate: “a short Fable window produced complete artifacts.” The preview mosaic should feel like evidence, not decoration.

### Artifact Card

Media-first and clickable. The card should surface title, creator, and quick rationale without hiding the artifact or requiring hover to understand why it matters.

### Source Lead

Compact, text-led, and clearly secondary. Source-trail cards should preserve research coverage without pretending to be visual artifacts.

### Controls

Should help browsing without feeling like app chrome. They should be compact, readable, and usable on mobile.

### Synthesis

Should read as analysis after browsing, not as a wall of text before the gallery.

## Motion

Motion should feel smooth and purposeful: subtle load choreography, card hover depth, and ripple-like feedback are appropriate. Avoid bounce or excessive scroll-triggered animation. Always respect `prefers-reduced-motion`.

## Accessibility

Maintain clear focus states, AA contrast, readable mobile typography, descriptive control labels, and reliable keyboard navigation.
