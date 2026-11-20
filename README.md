# Nima Momeni — Engineering Portfolio

Minimal Astro site featuring two documented Better Way Lighting engineering projects:
- Automated LED Tape Test Gantry
- Quick-Connect LED Decoder Test Fixtures

The site deliberately has no GitHub social link, and only links to LinkedIn.
The QR code linking to the historical internal usage guide is redacted in the public image.

## Preview on your computer

1. Install the current Node.js LTS (https://nodejs.org/).
2. Extract this folder and open it in VS Code.
3. From the project root (the folder containing `package.json`), run `npm install` and then `npm run dev`.
4. Open the local address printed by Astro.

## Publish for $0 with GitHub Pages

1. Create a GitHub account if needed, then make a **public** repository named **engineering-portfolio** (or any other name). You do not need to feature GitHub on the website.
2. Upload **all contents of this project folder**, including `.github/workflows/deploy.yml`, to the repository root. When uploading in GitHub's browser interface, check that the `.github` workflow directory was included. GitHub Desktop is an alternative.
3. In the repository, select **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. The provided workflow runs automatically on pushes to `main`. Check the **Actions** tab for the build and deployment status.
5. Your site will be at `https://YOUR-USERNAME.github.io/engineering-portfolio/` if your repo is named `engineering-portfolio`.
6. Alternatively create a repo named **YOUR-USERNAME.github.io** to host it at `https://YOUR-USERNAME.github.io/` directly.

`astro.config.mjs` automatically determines the correct URL and repository subpath on GitHub Actions, so no manual editing is needed for these two repo naming conventions. If you later use a custom domain, update that setting accordingly.

## Edit content

- `src/data/site.ts` — your name, summary, LinkedIn, and the project listing
- `src/components/GantryCaseStudy.astro` — gantry case study
- `src/components/DecoderFixtureCaseStudy.astro` — decoder fixture case study
- `src/pages/about.astro` — About section
- `src/styles/global.css` — colours and layout
- `public/images/` — site photography

**Before publishing:** Review employer-owned photos/CAD for sharing permission and confirm the project descriptions. The `email` value in `src/data/site.ts` is a placeholder but is not currently displayed in the site.

Official guides:
- https://docs.astro.build/en/guides/deploy/github/
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
