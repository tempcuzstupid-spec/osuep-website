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
├── index.html      # Page markup
├── styles.css      # Design system + section styles
├── main.js         # Mobile nav, reveal-on-scroll, smooth-scroll
└── README.md
```

## Local preview

```bash
# any static server works; e.g.:
python3 -m http.server 8080
# then open http://localhost:8080
```

## Deploy

This repo is configured for manual deploys from the Render side after each push.

## Classification

Confidential — Internal Use Only.