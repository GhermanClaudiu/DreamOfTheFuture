# Cerințe — Redesign dotf.ro (Dreams of the Future)

Document de lucru. Sursa adevărului pentru ce construim. Status: **în definire**.

---

## 1. Obiectiv

Refacerea designului site-ului de prezentare https://dotf.ro/ — păstrăm conținutul
și structura logică, dar ridicăm execuția vizuală la nivel de **boutique premium**.

- **Tehnologie:** React 19 + Vite + Tailwind + GSAP (via skill `build-premium-website`)
- **Stil:** modern premium — navy profund + accente aurii, aerisit, animații fine
- **Limba site-ului:** engleză

---

## 2. Structura paginii (one-page + secțiuni)

Navigație: `About Us` · `Services` · `Contact` · `Blog`

1. **Header** — logo "DREAMS OF THE FUTURE" + meniu
2. **Hero** — titlu + subtitlu + CTA + ilustrație
3. **About Us** (bloc navy)
4. **Our Services** — Industry Focus + Peak Performance Focus
5. **Contact Us** — formular
6. **Footer** — logo, quick links, contact, hartă, copyright

---

## 3. Conținut existent (extras din captură — de validat/rescris)

### 3.1 Hero
- **Titlu:** Boutique Centre For Accelerated Development
- **Subtitlu:** We help you improve your business performance, optimize your
  processes, and enhance your skills and competencies.
- **CTA:** EXPLORE

### 3.2 About Us
- **Eyebrow:** WHO ARE WE?
- **Titlu:** About Us
- **Text:** We are Dreams of the Future, a boutique consultancy business serving
  exquisite clientele in both industrial and private domains. We specialize in
  supply chain and operations management and training, as well as coaching and
  longevity. We help you improve your business performance, optimize your
  processes, and enhance your skills and competencies. We also help you achieve
  your personal goals, dreams, and well-being. We use advanced concepts, proven
  models, and effective methods to deliver high-quality results and value.

### 3.3 Our Services

**INDUSTRY FOCUS**

| Card | Bullet-uri |
|------|-----------|
| **Consultancy Services** | Business Transformation · Peak efficiency strategies · Cost efficiency mastery · Enhancing Project Portfolio Value |
| **Interim Management** | End-to-End Supply Chain · Business Transformation · Lean Operations · Supplier synergies and collaboration · Strategic Roadmap |
| **Task Force Management** | Crisis leadership · Customer centric focus · Supplier command · Operational performance recovery · Efficient stock practices · Seamless communication |
| **Supply Chain Training** | ASCM / CPIM Certification · Elevating Supply Chain Performance · Internal Material Flow Enhancement · Inventory Management Mastery |

**PEAK PERFORMANCE FOCUS**

| Card | Bullet-uri |
|------|-----------|
| **Coaching** | Executive Leadership Coaching and Mentoring · Visionary Business Growth · Influential Leadership Communication · Harmonizing Team Dynamics · Results-Driven Leadership |
| **Longevity tools** | Personalized Longevity (biological age reversal roadmap & epigenetics insights) · Genetic Wellness Testing (nutrition, sports, beauty) · Alternative Healing Wisdom (alternative well-being solutions) · Mind-Body Balance (audiovisual nourishment) |

Fiecare card are buton **More**.

### 3.4 Contact Us
- **Eyebrow:** GET IN TOUCH BY FILLING UP THE FORM
- **Câmpuri:** Your Name · Telephone · Your Email · Message
- **Buton:** SUBMIT

### 3.5 Footer
- **Tagline:** We help you improve your business performance, optimize your
  processes, and enhance your skills.
- **Quick Links:** About Us · Services · Contact · Blog
- **Get In Touch:** Email: liviu.bidian@dotf.ro · Phone: +40 747 292 878
- **Hartă:** locație Google Maps
- **Copyright:** © Dreams of the Future 2023 | Powered by Clooj.ro

---

## 4. Întrebări deschise (de clarificat cu clientul)

- [ ] Păstrăm exact textele de mai sus sau le rescriem/îmbunătățim?
- [ ] Logo: refolosim cel actual (simbol + wordmark) sau facem unul nou?
- [ ] Ilustrația din hero (cele două capete cu creier neon) — o păstrăm, o
      regenerăm sau mergem pe alt vizual?
- [ ] Pagina **Blog** — există conținut real sau e doar link în meniu?
- [ ] Butoanele **More** de la servicii — duc la pagini dedicate sau sunt
      doar decorative/expand?
- [ ] Formularul de contact — unde trimite? (email, serviciu form, backend?)
- [ ] Limbi: doar engleză sau și română?
- [ ] Domeniu/hosting de producție și unde se face deploy.
- [ ] Aspecte legale: pagină Privacy / GDPR, cookie banner?

---

## 5. Cerințe ne-funcționale (propunere)

- **Responsive** complet (mobil, tabletă, desktop).
- **Performanță:** scor Lighthouse bun, imagini optimizate.
- **SEO:** meta tags, Open Graph, titluri semantice.
- **Accesibilitate:** contrast, focus states, alt text, navigare la tastatură.
- **Animații** discrete la scroll (fără să afecteze performanța).

---

## 6. Inventar de assets necesare

- [ ] Logo (SVG ideal)
- [ ] Ilustrație hero
- [ ] Iconițe pentru carduri de servicii
- [ ] Coordonate / embed hartă
- [ ] Fonturi (alegere tipografie premium)
- [ ] Paletă de culori finală (navy + auriu — de fixat valorile hex)
