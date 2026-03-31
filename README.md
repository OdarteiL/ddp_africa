# DPP.africa

Website for **DPP.africa** — Digital Product Passport compliance services for African manufacturers and exporters targeting the EU market.

## About

DPP.africa helps African businesses meet EU Digital Product Passport (DPP) requirements under the Ecodesign for Sustainable Products Regulation (ESPR, EU 2024/1781). The first mandatory deadline is February 2027 for batteries and EV products.

## Structure

```
/
├── index.html              # Homepage
├── style.css               # Homepage styles
├── main.js                 # Homepage JS (slideshow, parallax, counters)
├── detail.css              # Shared styles for all detail pages
├── detail.js               # Shared JS for all detail pages
├── services/
│   ├── readiness-assessment.html
│   ├── dpp-platform.html
│   ├── managed-data.html
│   ├── regulatory-intelligence.html
│   └── training.html
├── sectors/
│   ├── batteries.html
│   ├── textiles.html
│   ├── electronics.html
│   ├── furniture.html
│   ├── chemicals.html
│   └── construction.html
└── vercel.json
```

## Deployment

### Vercel (recommended)

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. No build configuration needed — static HTML site
4. Deploy

### Local development

Open `index.html` directly in a browser, or use any static file server:

```bash
npx serve .
# or
python3 -m http.server 3000
```

## Tech Stack

- Pure HTML, CSS, JavaScript — no framework, no build step
- Images from [Unsplash](https://unsplash.com) (free to use)
- Fonts from Google Fonts (Inter + Playfair Display)

## License

© 2026 DPP.africa. All rights reserved.
