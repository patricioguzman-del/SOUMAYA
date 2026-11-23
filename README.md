# Soumaya · Private real estate, Ibiza

Website for Soumaya, independent property advisor in Ibiza. Built on the AUBA Ibiza codebase (Astro, static, Vercel),
restyled after Soumaya's brand board: ivory, stone, taupe, olive and ink; Cormorant Garamond and Manrope.
English, Spanish and French.

## Pages
Positioning: Soumaya is a one-person personal property advisor (mostly a buyer's agent; also sells; sources holiday rentals per client). Fees are never mentioned on the site.

Home (three doors) · Buy · Sell · Holiday rentals · Properties (+ one page per home) · Ibiza Perspective (+ six areas) · About · Start your search (contact) · Legal notice, Privacy, Cookies.
The letter form carries a short search brief that changes with the intent (src/data/brief.ts).

## Listings come from AUBA
AUBA is the only place listings are edited. `scripts/sync-auba.mjs` runs before every build and copies:
- every **public** listing (off-market homes stay on AUBA, behind its password),
- their photographs, the façade photograph each home is known by, and which area each home is in.

It removes the advisor field, renames references `AUBA-004` → `SM-004`, and **stops the build** if a listing mentions AUBA.
Synced files (`src/data/auba/`, `public/images/`) are not committed.

Where it reads AUBA from: `AUBA_SOURCE_DIR`, or `../auba-ibiza/website` next to this folder, or GitHub with
`AUBA_GITHUB_TOKEN` (what Vercel uses). See `.env.example`.

**Keeping both sites in step:** a change on AUBA appears here at Soumaya's next build. To rebuild automatically,
create a Deploy Hook in this Vercel project and call it from AUBA (a GitHub Action on push to `main`, or a second
Deploy Hook step in AUBA's Vercel project).

## French for listings
AUBA writes listings in English and Spanish. French versions live in `src/data/fr/<reference>.json`:
`{"sourceHash": "<fingerprint of the English>", "copy": { …same fields as "en"… }}`.
If AUBA changes the English, the fingerprint no longer matches and that home shows in English (with a short note)
until the French is updated. `npm run sync` lists which homes are missing or out of date.

## Placeholders to replace before launch
- `src/data/brand.ts`: email, phone, WhatsApp, domain (also `site` in `astro.config.mjs`).
- `public/media/soumaya-portrait-*` and `soumaya-interior-*`: concept images cropped from the brand board, **not Soumaya**.
- The company details in `src/data/legal.ts`.
- Ibiza Perspective texts (`src/data/ibiza.ts`) are AUBA's, copied as a starting point: rewrite in her words.

## Run
```sh
npm install
npm run dev      # syncs from AUBA, then http://127.0.0.1:4321/en/
npm test
npm run build
```
