# Triple Technologies website

Static site built with Astro. No client framework; about 60 lines of vanilla JS.

    npm install
    npm run dev       # local development
    npm run build     # outputs to dist/
    npm run preview

## Before launch
- Add real contact details and/or a form endpoint in `src/data/site.ts`. Empty channels are hidden; the form needs an email or endpoint to work.
- Set `SITE_URL` in Vercel (your production URL) to enable canonical and Open Graph absolute URLs.

## Deploy
Import the repo in Vercel. Framework preset: Astro. Build command `npm run build`, output `dist`.

## Editing content
The English page is available at `/` and the Amharic page at `/am/`; the header language link switches between them. English service, reason and process content lives in `src/data/site.ts`. Amharic content and shared interface translations live in `src/data/locales.ts`. Have a fluent Amharic speaker review the translations before launch. Design tokens are in `src/styles/global.css`.
