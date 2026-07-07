# One Stop Uniforms Enterprise Platform — Foundation Site

**Volume I · Enterprise Foundation & Governance**

A static website that presents the constitutional foundation of the One Stop Uniforms Enterprise Platform (OSUEP) — the principles, standards, governance, and business rules that every future volume inherits.

## Stack

- Pure HTML, CSS, vanilla JavaScript
- Zero build step, zero dependencies
- Self-contained (Google Fonts via CDN; SVG inline; favicon as data URI)

## Files

```
.
├── index.html      # Page markup (canonical source)
├── styles.css      # Design system + section styles
├── main.js         # Mobile nav, reveal-on-scroll, smooth-scroll
├── public/         # Render deploy mirror (must mirror root files)
└── README.md
```

## Local preview

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## Deploy

Manual deploys from Render side after each push.
Render service ID: `srv-d96gnsok1i2s73fucb50`
URL: https://osuep-website.onrender.com

### Workflow for edits

1. Edit files at the **repo root** (`index.html`, `styles.css`, `main.js`)
2. Mirror to `public/` before pushing:
   ```bash
   cp index.html styles.css main.js public/
   ```
3. Commit on a dated branch (`YYYY-MM-DD__<note>`), push, merge to main
4. Trigger Render deploy from this session or the Render dashboard

## Classification

Confidential — Internal Use Only.