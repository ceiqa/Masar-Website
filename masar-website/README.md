# مسار — Masar website

Bilingual (Arabic / English) website for Masar Educational Services.

## Run locally

```bash
npm install
npm start
```

Open http://localhost:3000 (add `?lang=en` to open in English).

## Structure

```
server.js              Express static server
public/
  index.html           Page markup (all text in data-ar / data-en pairs)
  styles.css           Brand tokens at the top (navy, orange, cream, paper)
  script.js            Content data + interactions
  assets/              Hero photo and logos (standard + light version for dark backgrounds)
  blog/                Put blog post pages here
```

## Things to update before launch

- **WhatsApp number**: `WA_NUMBER` at the top of `public/script.js`, and the floating button link and the number shown in the Contact section of `index.html` (all placeholders: +20 10 000 0000).
- **Email**: Contact section of `index.html`.

## Adding a blog post

1. Create the post page, e.g. `public/blog/admission-guide.html`.
2. In `public/script.js`, find `POSTS` and either edit an existing entry or add a new one:

```js
{
  cat: 'admissions',              // admissions | documents | life (or add a category to BLOG_CATEGORIES)
  url: 'blog/admission-guide.html',
  date: '2026-10-05',
  minutes: 6,
  ar: { title: '...', excerpt: '...' },
  en: { title: '...', excerpt: '...' }
}
```

Posts with `url: null` show as "Coming soon".

## Adding a review

In `public/script.js`, find `REVIEWS`. The four entries there are **samples** (they show a "Sample" tag on the page) — replace them with real testimonials, with the student's permission, and delete `sample: true`:

```js
{
  track: 'bachelor',          // bachelor | postgrad | certs
  country: 'kw',              // any id from ORIGINS or MORE_COUNTRIES
  rating: 5,                  // 1–5 stars
  ar: { name: 'أحمد م.', text: '...' },
  en: { name: 'Ahmed M.', text: '...' }
}
```

## Editing content

- Countries in the hero picker: `ORIGINS` in `script.js` (Gulf countries first, then "Another country").
- Extra countries in the contact form: `MORE_COUNTRIES`.
- Program track details (boarding pass): `TRACKS`.

## Deploying on Vercel

Everything the site needs is in `public/`, so Vercel can serve it as a static site: set the Output Directory to `public` and leave the build command empty. `server.js` is only needed for local runs or a Node host.
