# Kai Coral – Personal Website

A personal website and portfolio built with [Astro](https://astro.build). Four pages: Home, Portfolio, About, and Contact. Mobile-first, fast, and easy to update.

## Prerequisites

- **Node.js** 18+ (recommend 20 or 22)
- **npm** (comes with Node)

## Run locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the dev server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:4321](http://localhost:4321) in your browser.

## Build for production

```bash
npm run build
```

Preview the built site:

```bash
npm run preview
```

## Deploy

### Netlify (recommended)

1. Push this project to a Git repo (GitHub, GitLab, or Bitbucket).
2. Sign in at [netlify.com](https://www.netlify.com) and click **Add new site** → **Import an existing project**.
3. Connect your repo. Netlify will detect Astro.
4. Build settings (usually auto-filled):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy**. Your site will get a URL like `https://random-name.netlify.app`.
6. **Contact form:** In Netlify’s dashboard, go to **Site configuration** → **Forms**. Form submissions from the Contact page will appear there once the site is deployed.
7. **Custom domain:** In **Domain management**, add your own domain and follow the DNS steps.

### Vercel

1. Push the project to a Git repo.
2. Go to [vercel.com](https://vercel.com), **Add New** → **Project**, and import the repo.
3. Leave the default build command and output directory (`dist` for Astro).
4. Deploy. For the contact form, use a serverless function or a third-party form service (e.g. Formspree) instead of Netlify Forms.

### Set your site URL (for social sharing)

Before or after deploy, set your real URL in `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://yourdomain.com',  // change this
  // ...
});
```

Replace `https://example.com` with your live URL so Open Graph and canonical links work correctly.

## Adding or editing portfolio items

Portfolio entries live in **`src/data/portfolio.json`**. Each item looks like this:

```json
{
  "id": "unique-id",
  "title": "Title of the piece",
  "description": "Short description.",
  "url": "https://link-to-video-or-post",
  "platform": "Instagram",
  "thumbnail": "",
  "featured": false
}
```

- **title** – Shown on the card.
- **description** – Short line under the title.
- **url** – Link to the real post (Instagram, TikTok, YouTube, etc.).
- **platform** – Label (e.g. Instagram, TikTok, YouTube).
- **thumbnail** – Optional. Image URL (e.g. `/images/thumb1.jpg` if you put the file in `public/images/`) or leave `""` for the placeholder.
- **featured** – Optional; you can use this later to highlight items on the homepage.

To add a new piece: copy an existing block in `portfolio.json`, change the fields, and save. The Portfolio page will update after the next build or refresh in dev.

## Replacing placeholder content

- **About page:** Edit `src/pages/about.astro` – bio text and social links. To use a real photo, add an image to `public/` (e.g. `public/me.jpg`) and replace the placeholder div with `<img src="/me.jpg" alt="Kai Coral" />`.
- **Contact page:** Edit `src/pages/contact.astro` – replace `hello@example.com` and the Instagram link with your email and profiles.
- **Home hero:** Edit `src/pages/index.astro` – the `Hero` component receives `title`, `tagline`, and `intro`; you can change them there or in `src/components/Hero.astro`.

## Project structure

```
src/
  layouts/Layout.astro   # Shared layout (nav, footer, meta)
  pages/                 # One file per page (index, about, portfolio, contact)
  components/            # Nav, Hero, Footer, PortfolioCard
  data/portfolio.json    # Portfolio entries
  styles/global.css      # Global styles
public/                  # Static assets (favicon, images)
```

## License

Private. All rights reserved.
