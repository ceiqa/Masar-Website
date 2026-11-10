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

Each post has two pages: Arabic (the main one) at `public/blog/<slug>.html`, served at `/blog/<slug>`, and English at `public/en/blog/<slug>.html`, served at `/en/blog/<slug>`. Copy `public/blog/saudi-masters-phd-egypt.html` and its English twin as the template: they carry the canonical and hreflang links to each other, link-preview tags and `BlogPosting` details for Google. Put the cover in `public/assets/blog/` as `<slug>.jpg` (1600×900) and `<slug>-og.jpg` (1200×630). External links open in a new tab with `rel="noopener noreferrer"`.

1. Create both post pages.
2. In `public/script.js`, add an entry at the top of `POSTS`:

```js
{
  cat: 'admissions',              // admissions | documents | life (or add a category to BLOG_CATEGORIES)
  date: '2026-10-05',
  minutes: 6,
  ar: { url: '/blog/admission-guide', title: '...', excerpt: '...' },
  en: { url: '/en/blog/admission-guide', title: '...', excerpt: '...' }
}
```

3. Add both URLs to `public/sitemap.xml`, following the existing entries.

Posts with no `url` show as "Coming soon". Category filters only appear once a category has a post.

## Adding a review

The Reviews section is hidden for now. To show it, set `SHOW_REVIEWS = true` at the top of `public/script.js` after adding real reviews.

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

Vercel runs `server.js` (Express): it serves `public/` and answers unknown addresses with `public/404.html` and a real 404 status, so search engines don't index stray URLs as copies of the home page.

## SEO files

- `public/robots.txt` points search engines to the sitemap.
- `public/sitemap.xml` lists the pages to index. Add a `<url>` for each blog post once the Blog section is switched on.
- Link previews (WhatsApp, TikTok, etc.) use `public/assets/og-image.jpg` (1200×630) and the `og:` tags in the `<head>` of `index.html`.
- Business details for Google are in the `application/ld+json` block in the same `<head>`.
