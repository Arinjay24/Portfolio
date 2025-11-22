Implementation Notes

- Stack: React + Vite + TailwindCSS for fast dev and small bundle.
- Fonts: Inter + Poppins from Google Fonts for a premium, modern look.
- Design choices:
  - Soft gradients: used in header accents and hero blob.
  - Rounded cards: 18-24px radius to match Canva-like softness.
  - Shadows: subtle `shadow-soft` for floating cards.
  - Animations: small `float` keyframe used for the decorative blob.
- Accessibility: use semantic headings, buttons, and a form with clear placeholders. Contrast is aimed to be good with dark text on light backgrounds.

How to customize

- Replace `src/assets/profile-blob.svg` with your profile artwork or photo and update `Hero` and `About` image srcs.
- Update contact email in `src/components/Contact.jsx`.
- Add project screenshots to `src/components/Projects.jsx` and link to real repos.

Optimizations

- Optimize images before adding (use WebP / optimized PNG/JPG).
- Add Lighthouse checks and a small `robots.txt` when publishing.
