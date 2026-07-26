\# Shape My Home — Website Build Brief



> Give this file to your AI IDE (Antigravity) with the prompt:

> "Build me this full website exactly as specified below. Use semantic HTML5, CSS3, and vanilla JS + GSAP (via CDN). Make it a single multi-section site, mobile-first, fully responsive, SEO-optimized, and production-ready."



\---



\## 1. Brand Overview



\- \*\*Company Name:\*\* Shape My Home

\- \*\*Industry:\*\* Architecture \& Interior Design Studio

\- \*\*Design Reference:\*\* Nordic / Scandinavian architecture studio aesthetic — calm, minimal, lots of whitespace, muted earthy tones, large editorial typography, high-quality imagery-led layout, generous negative space, subtle motion instead of loud color.

\- \*\*Logo:\*\* Already available (assume file `logo.svg` / `logo.png` in `/assets/`). Use it in the navbar (light and dark variants if only one is provided, generate a simple inverted version via CSS filter).

\- \*\*Designer / Studio Lead:\*\* Saurabh

\- \*\*Contact Numbers:\*\* +91 95576 40770, +91 87508 15486

\- \*\*Tone of voice:\*\* Confident, minimal, warm, professional — not salesy. Think "we design spaces that feel like they were always meant to be there."



\---



\## 2. Design Language (Nordic Studio Style)



\- \*\*Color Palette:\*\*

&#x20; - Background: Off-white / warm bone (`#F5F3EF` or `#FAF8F5`)

&#x20; - Primary text: Near-black charcoal (`#1C1B19`)

&#x20; - Accent: Muted terracotta or clay (`#B5674C`) OR sage green (`#7C8B6F`) — pick one as the single accent color, used sparingly (buttons, underlines, hover states)

&#x20; - Secondary neutral: Warm grey (`#8A857C`)

&#x20; - Dark section background (for contrast sections): Deep charcoal (`#171614`) with off-white text

\- \*\*Typography:\*\*

&#x20; - Headings: A serif or high-contrast display font (e.g. "Fraunces", "Instrument Serif", or "Playfair Display") — large, editorial, lots of letter-spacing on small caps labels

&#x20; - Body: A clean grotesk sans-serif (e.g. "Inter", "General Sans", "Neue Montreal" alternative via Google Fonts like "Manrope")

&#x20; - Use oversized hero type (clamp-based fluid typography), small uppercase tracked labels above section headings (e.g. "01 — SERVICES")

\- \*\*Layout Principles:\*\*

&#x20; - Minimal structure, generous padding (min 80–120px section padding on desktop, 48–64px on mobile)

&#x20; - Grid-based image + text pairings, asymmetric layouts

&#x20; - Thin 1px hairline dividers instead of heavy borders/shadows

&#x20; - No clutter — one clear focal point per section



\---



\## 3. Tech Stack



\- HTML5 + CSS3 (CSS Grid + Flexbox, CSS custom properties for theme tokens)

\- Vanilla JavaScript (no framework needed — keep it lightweight and fast)

\- \*\*GSAP\*\* (via CDN) + \*\*ScrollTrigger\*\* plugin

\- Fully responsive: \*\*mobile-first\*\*, breakpoints at 480px / 768px / 1024px / 1440px

\- Semantic HTML for SEO (proper `<header>`, `<main>`, `<section>`, `<footer>`, heading hierarchy h1→h3)

\- Lightweight — optimize images (WebP), lazy-load below-the-fold images

\- No paid dependencies — everything via free CDNs (Google Fonts, GSAP CDN, no paid stock photo needed; use placeholder image blocks with clear labels for now, e.g. `/assets/img/hero.jpg` placeholder comments so Saurabh can drop in real photos later)



\---



\## 4. GSAP Animation Requirements



\### a) Section Reveal (on scroll, every major section)

\- Use `ScrollTrigger` with `gsap.from()`:

&#x20; - Fade in (`opacity: 0 → 1`)

&#x20; - Slide up (`y: 60 → 0`)

&#x20; - Stagger child elements (heading → subtext → image) by \~0.15s

&#x20; - Trigger point: `start: "top 80%"`, play once (`toggleActions: "play none none none"`)



\### b) Horizontal Scroll Section (Services Showcase)

\- Apply to the \*\*Services section\*\* (all 12 services displayed as horizontally scrolling cards)

\- Pin the section vertically while scrolling horizontally through service cards using `ScrollTrigger` + `gsap.to(container, { xPercent: ... , scrollTrigger: { pin: true, scrub: 1 } })`

\- Each card: large number label (01–12), service name, short one-line description, subtle hover state (image zoom or accent underline)

\- On mobile: gracefully degrade to a normal swipeable horizontal scroll (touch scroll, no pinning) since ScrollTrigger pinning is jank-prone on small screens — use native `overflow-x: scroll` with `scroll-snap` instead, or a lighter GSAP draggable/scrub if performance allows



\### c) Additional nice-to-have micro animations (optional, keep tasteful/minimal):

\- Navbar: subtle shrink/blur-background on scroll

\- Hero heading: split-text letter/word reveal on page load

\- Image reveal with a clip-path "curtain" wipe effect as images enter viewport

\- Smooth scroll behavior (Lenis or CSS `scroll-behavior: smooth` — Lenis preferred if easy to integrate, else skip to keep it lightweight)



\---



\## 5. Site Structure / Sections



\### 1. Navbar (sticky)

\- Logo (left)

\- Nav links: Home, Services, About, Process, Contact

\- Phone number visible on desktop nav (click-to-call), hamburger menu on mobile

\- CTA button: "Get a Consultation"



\### 2. Hero Section

\- Full viewport height

\- Large editorial headline, e.g. \*\*"We Shape Spaces That Feel Like Home"\*\*

\- Subheading: one line about the studio's philosophy

\- Background: full-bleed architectural/interior image (placeholder)

\- CTA button: "Explore Our Work" or "Book a Free Consultation"

\- Small scroll-down indicator (animated)



\### 3. About / Intro Section

\- Short studio intro (2–3 sentences) introducing Shape My Home and Saurabh as the designer/founder

\- Small stat row (optional): e.g. "12 Services", "X+ Projects", "100% Custom Designs"

\- Split layout: text left, image right (or reverse) with the section-reveal animation



\### 4. Services Section (horizontal scroll — the centerpiece)

List all 12 services as individual cards, numbered 01–12:



1\. \*\*Decor\*\* — Curated interior styling that brings character to every corner.

2\. \*\*Floor Plan\*\* — Smart, functional layouts tailored to how you live.

3\. \*\*Floor Layout\*\* — Space planning that balances flow, light, and purpose.

4\. \*\*Interior Design\*\* — End-to-end design solutions for homes and offices.

5\. \*\*Interior Architect\*\* — Structural + aesthetic planning under one roof.

6\. \*\*Renovation\*\* — Transforming existing spaces without starting from scratch.

7\. \*\*Civil Work\*\* — Reliable construction and structural execution.

8\. \*\*Front Elevation\*\* — Striking exteriors that make the right first impression.

9\. \*\*Furniture Design\*\* — Custom furniture crafted to fit your space and style.

10\. \*\*Bathroom Design\*\* — Functional, spa-like bathroom spaces.

11\. \*\*Vastu\*\* — Designs aligned with Vastu principles for harmony and balance.

12\. \*\*Modular Kitchen\*\* — Efficient, modern kitchens built around your workflow.



\*(Feel free to let the AI IDE lightly rewrite these one-liners to match brand tone, but keep the meaning.)\*



\### 5. Process Section

\- Simple 3–4 step process (e.g. Consultation → Design → Execution → Handover)

\- Horizontal timeline or numbered vertical steps, section-reveal animation



\### 6. Featured Work / Gallery (placeholder section)

\- Grid of project images (placeholders) with hover reveal of project name/category

\- This can be a simple masonry or 2–3 column grid — keep minimal, no need for complex animation here beyond reveal-on-scroll



\### 7. Testimonials (optional, simple)

\- 2–3 short client quotes in a clean minimal carousel or static grid



\### 8. Contact / CTA Section

\- Bold closing headline: e.g. \*\*"Let's Shape Your Home Together"\*\*

\- Contact details:

&#x20; - Designer: \*\*Saurabh\*\*

&#x20; - Phone: \*\*+91 95576 40770\*\* / \*\*+91 87508 15486\*\* (both click-to-call links)

&#x20; - Simple contact form: Name, Phone, Message (no backend needed yet — just front-end form, can wire up later with Formspree/EmailJS free tier)

\- Map embed placeholder (optional)



\### 9. Footer

\- Logo + tagline

\- Quick nav links

\- Contact info repeated

\- Social icons (Instagram, Facebook, Pinterest — placeholder links)

\- Copyright line



\---



\## 6. SEO Requirements



\- Proper `<title>`: "Shape My Home | Architecture \& Interior Design Studio"

\- Meta description summarizing services and location (add city/region if known)

\- Open Graph + Twitter meta tags for social sharing (use logo as OG image placeholder)

\- One `<h1>` per page (hero headline), proper `<h2>`/`<h3>` hierarchy per section

\- Descriptive `alt` text on all images (mention service/context, e.g. `alt="Modular kitchen design by Shape My Home"`)

\- Semantic HTML structure (`<nav>`, `<main>`, `<section id="services">`, `<footer>`)

\- Fast load: lazy-load images, minify CSS/JS, defer non-critical scripts

\- Add a `sitemap.xml` and `robots.txt` stub

\- Use descriptive URL anchors/IDs for each section (`#services`, `#about`, `#contact`) for internal linking and future SEO



\---



\## 7. File Structure (suggested)



```

shape-my-home/

├── index.html

├── /assets

│   ├── /css

│   │   └── style.css

│   ├── /js

│   │   └── main.js

│   ├── /img

│   │   ├── logo.svg

│   │   ├── hero.jpg

│   │   ├── services/ (12 placeholder images)

│   │   └── gallery/

├── robots.txt

├── sitemap.xml

└── README.md

```



\---



\## 8. Build Instructions for the AI IDE



1\. Build a single-page site (`index.html`) with all sections above, in order.

2\. Use CSS custom properties for the color palette and spacing scale so theme is easy to tweak later.

3\. Implement mobile-first CSS — write base styles for mobile, then use `min-width` media queries to scale up to tablet/desktop.

4\. Load GSAP + ScrollTrigger from CDN:

&#x20;  ```html

&#x20;  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>

&#x20;  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>

&#x20;  ```

5\. Implement the section-reveal animation as a reusable function applied to every `<section>` via a shared class (e.g. `.reveal`).

6\. Implement the horizontal-scroll pinned services section on desktop/tablet; fall back to native scroll-snap on mobile (`window.innerWidth < 768` check, or a matchMedia-based GSAP context).

7\. Keep total custom JS minimal and commented so Saurabh (non-technical) can find where to swap images/text later.

8\. Use placeholder image blocks with clear filenames/comments (`<!-- Replace with real hero image -->`) since real photography isn't available yet.

9\. Make sure the site works with zero build tools — plain HTML/CSS/JS that opens directly or via a simple local server, no npm required, so it stays free to host (can be deployed free on GitHub Pages / Netlify / Vercel free tier).



\---



\## 9. Notes on Zero-Budget Execution



\- No paid stock photos needed — use free sources like \*\*Unsplash\*\* or \*\*Pexels\*\* for placeholder architecture/interior images (mention this to Antigravity so it fetches royalty-free placeholder image URLs).

\- No paid fonts — everything from \*\*Google Fonts\*\* (free).

\- No paid animation library — GSAP core + ScrollTrigger are free for this use case.

\- Hosting: deploy free via \*\*GitHub Pages\*\*, \*\*Netlify\*\*, or \*\*Vercel\*\* (all have generous free tiers for static sites).

\- Contact form: can go live immediately using \*\*Formspree free tier\*\* (no backend/server cost) once ready.

