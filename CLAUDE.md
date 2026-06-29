# CLAUDE.md

Ghid pentru sesiunile Claude Code care lucrează la acest proiect.

## Ce este proiectul

Redesign al site-ului de prezentare **Dreams of the Future** (https://dotf.ro/) —
o firmă de consultanță boutique. Reconstruim site-ul de la zero, păstrând
conținutul și structura, dar cu o execuție vizuală nouă, premium.

Firma operează pe două direcții:
- **Industry Focus** — supply chain & operations management, consultanță, training
- **Peak Performance Focus** — coaching executiv și longevity / well-being

## Stadiu actual

> Faza: **CONSTRUIT (v1)** — site funcțional în `site/`, generat cu skill-ul
> `build-premium-website`. Rulează cu `cd site && npm run dev` (port 5173/5174).

Conținut director:
- `site/` — aplicația Vite + React (sursa principală: `site/src/App.jsx`)
- `screencapture-dotf-ro-2026-06-29-15_12_55.png` — captură a site-ului actual (referință)
- `CLAUDE.md`, `CERINTE.md` — documentație

### De confirmat cu clientul (placeholder în v1)
- Statistici din secțiunea About (18+ ani, 100% bespoke, 40+ clienți) — placeholder.
- Hero: imagine Unsplash „rețea/future" + SVG neural auriu (nu ilustrația originală cu creier).
- Imaginile din secțiunea Process (Unsplash) și textele rafinate.
- Țintă formular contact (acum mock: idle→sending→sent).

## Decizii luate

- **Tehnologie:** React 19 + Vite + Tailwind + GSAP, generat prin skill-ul
  `build-premium-website` (vezi `.claude/skills/build-premium-website/`).
  (Inițial discutasem Next.js — schimbat la Vite pentru a folosi skill-ul.)
- **Direcție vizuală:** Modern premium — fundal navy profund, accente aurii/neon
  subtile, tipografie elegantă, mult spațiu alb, animații fine la scroll.
- **Build via skill:** la pornire se rulează `/build-premium-website`. Avem deja
  conținutul în CERINTE.md, deci faza de intake va fi scurtă.

## Convenții (de respectat când începem build-ul)

- Limba conținutului site-ului: **engleză** (ca pe site-ul actual).
- Comunicarea cu utilizatorul: **română**.
- Nu porni build-ul / scaffold-ul fără confirmarea utilizatorului.

## Date de contact (din site-ul actual)

- Email: liviu.bidian@dotf.ro
- Telefon: +40 747 292 878
