import { defineConfig } from 'astro/config';

// On GitHub Actions, this automatically sets the GitHub Pages URL and base path.
// If the repo is username.github.io, the website is served at the root.
// For any other repo (such as engineering-portfolio), it's served at /repo-name/.
const repository = process.env.GITHUB_REPOSITORY;
const [owner, repo] = repository ? repository.split('/') : ['', ''];
const isUserSite = repo?.toLowerCase() === `${owner}.github.io`.toLowerCase();

export default defineConfig({
  site: repository ? `https://${owner}.github.io` : 'http://localhost:4321',
  base: repository && !isUserSite ? `/${repo}` : '/',
});
