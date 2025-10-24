
# Up in Telluride — static site

A lightweight, SEO‑friendly, mobile‑responsive site you can deploy anywhere (GitHub Pages, Netlify, Cloudflare Pages, S3).

## Structure
- `/` Home
- `/stories/` Index of stories
- `/stories/*.html` Example articles
- `/about/` About page
- `/contact/` Subscribe/contact form (Netlify‑compatible). Update to your ESP or use Formspree.
- `/privacy.html` Privacy
- `/sitemap.xml`, `/robots.txt`

## Customize
- Replace images in `assets/images/` with real photos (keep file names or update paths in HTML/CSS).
- Update copy in `index.html`, `/stories/*`, `/about/`.
- Search for `BASE_URL` to set your canonical domain (optionally replaced at runtime by JS).

## Forms
- The forms are configured with Netlify attributes out of the box. If you host elsewhere, 
  swap the `<form action>` to your provider or use Formspree: https://formspree.io/ .

## Deploy
- **GitHub Pages**: Push this folder to a repo → Settings → Pages → Deploy from `/` on `main`.
- **Netlify**: Drag‑and‑drop this folder onto Netlify or connect your repo.
- **Cloudflare Pages**: Create a project, point to the repo, build not required (static).

## License
- Content is yours. Code under MIT.

## Last updated
- 2025-10-24
