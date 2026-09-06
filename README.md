# Udoka Dandave — Portfolio

My personal portfolio site: **[dandaveudoka.com.ng](https://dandaveudoka.com.ng)**

Full stack software engineer (aka **Dandy**) based in Enugu, Nigeria — full name **Udoka Dandave Chibuzor** (the Dandave comes from Daniel David). Building web apps, mobile apps, and robust backend systems with React, Next.js, Node.js, Laravel, and React Native.

## Pages

| Route | What's there |
|---|---|
| `/` | Hero, featured projects, client testimonials |
| `/work` | Full project archive with category filters |
| `/about` | Bio and the tech toolkit |
| `/resume` | Experience, education, downloadable CV |
| `/contact` | Contact form (straight to my inbox) + direct lines |

## Tech

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS 4**
- **lucide-react** icons
- Contact form → **Zoho Mail** via SMTP (nodemailer) with honeypot + rate limiting
- SEO: per-page metadata, canonical URLs, JSON-LD (Person / WebSite / ProfilePage), Open Graph + Twitter cards, sitemap & robots

## Getting started

The app lives in the `portfolio/` folder:

```bash
cd portfolio
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

For the contact form to send, create `portfolio/.env.local`:

```
ZOHO_USER=hello@dandaveudoka.com.ng
ZOHO_PASS=<your Zoho app password>
```

(Get the app password from Zoho Mail → Settings → Security → App Passwords. Never commit this file.)

## Contact

I'm open to freelance work, collaborations, and full-time remote roles.

- **Email:** [hello@dandaveudoka.com.ng](mailto:hello@dandaveudoka.com.ng)
- **Phone / WhatsApp:** [+234 810 339 3608](https://api.whatsapp.com/send?phone=2348103393608&text=Hello%20Dandy%2C%20I%20got%20your%20contact%20from%20your%20portfolio%20and%20would%20like%20to%20connect.)
- **GitHub:** [Davetechinnovation](https://github.com/Davetechinnovation)
- **LinkedIn:** [udoka-dandave](https://linkedin.com/in/udoka-dandave)
- **Twitter / X:** [@Davetechinnov](https://x.com/Davetechinnov)
- **Instagram:** [davetech_innovation](https://www.instagram.com/davetech_innovation/)
