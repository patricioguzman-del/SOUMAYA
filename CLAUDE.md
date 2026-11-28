# Solera website (Soumaya)

The website of **Solera**, a one-person property advisory in Ibiza, at **solera-ibiza.com**. **Soumaya** is the advisor: the site speaks in her voice ("I"). Languages: English, Spanish, French.

## Who you're working with

Patricio Guzman runs this project. He is not a developer or designer: explain results in plain words, keep replies short and scannable, and never ask him to run commands. He decides; Soumaya approves anything in her voice.

## How changes go live

- Pushing to `main` publishes the site: Vercel project "soumaya" builds from this repo.
- Before every push: `npm test` and `npm run build` must pass (0 errors). The test "the company details are filled in" is a known TODO until the legal details arrive.
- Check layout changes at phone width (390px) and desktop (1280px), in all three languages. Look for overflow and squeezed text.
- Commit messages say in plain words what changed for visitors.

## Where things are

- All interface and page text, EN/ES/FR: `src/data/ui.ts` (JSON inside; keep the 1-space JSON formatting).
- Names, email, phone, domain: `src/data/brand.ts` (`agency` = Solera, `name` = Soumaya, `wordmark`, `email` = soumaya@solera-ibiza.com).
- Island guide (six areas): `src/data/ibiza.ts`. Legal and privacy: `src/data/legal.ts`. Homepage images: `src/data/homepage.ts`.
- Styles: `src/styles/site.css` (later rules at the end override earlier ones). Pages: `src/pages/[lang]/[...slug].astro`, routes in `src/lib/routes.ts`, redirects in `vercel.json`.
- Listings are synced at build time from the AUBA repo (`scripts/sync-auba.mjs`; Vercel uses `AUBA_GITHUB_TOKEN`, set for Production only, so branch previews fail to build). Don't edit `src/data/auba/`.

## Rules that must not be broken

- **Her bio** (`aboutBio` in every language) is her own words: never rewrite it.
- **No fees or commission** anywhere on the site.
- **Never mention AUBA** on the site, even though the listings come from it.
- **Her portrait** appears only in "Meet Soumaya" and on About, never in the homepage hero.
- **Clients are international:** never single out nationalities. No presentations in Arabic (she speaks it; the site isn't in it).
- **Nothing in bold.** All text is regular weight; only the SOLERA | IBIZA wordmark keeps its weight.
- Don't invent claims about what she does. Confirmed: she checks every rental villa in person, drives clients to viewings, helps renters if something breaks, keeps sellers informed, introduces builders/gardeners/plumbers after a sale, studied law, and many buyers first came for a holiday.
- She has no rental inventory: holiday villas are sourced for each client.

## Voice

Warm, calm, personal, never salesy. She takes the client by the hand. Avoid agency language: "exclusive", "finest", "luxury", "secure the deal", "my network". Say **home / casa / maison**, not property / propiedad / bien (except in legal text). One person: "my selection", never "our".

- **English:** "Let's find your home in Ibiza, together." Eyebrow "Bespoke property advice".
- **Spanish:** "tú", neutral Spanish that reads well in Latin America (no "vosotros/sois", "niñera" not "canguro"). ¿ and ¡ always, « » for quotes, "Hola, Soumaya:".
- **French:** "vous". Non-breaking space before : ; ? ! and inside « » (a scan of the built French pages must find none missing). Curly apostrophe ’. Gender-neutral by wording ("au courant", not "informé").
- Write each language as a native would; never translate word for word.

## Site structure

- Menu: Homes for sale · Holiday rentals · How I work · Ibiza · About, plus "Speak with Soumaya".
- How I work has two parts, `#buying` and `#selling`; old /buy/ and /sell/ redirect there.
- Homepage: hero (a selected home, not her photo) → three doors → Meet Soumaya → selected homes → island band → "Let's start with a coffee."
- Fonts: Cormorant Garamond (headings) and Manrope (text). A switch to EB Garamond is under consideration; don't change fonts without asking.

## Still pending

- Connect solera-ibiza.com to Vercel (domain + DNS).
- Direct email delivery with Resend (built, switched off; the form opens the visitor's email app for now).
- Legal company details; French texts for the listings; one line per selected home on why she chose it.
- Logo: options "IBIZA small underneath" and "Ibiza in italic" were shown on 27 Nov; not decided.
