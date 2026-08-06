import { defineConfig } from 'vite';

// Relative base so the built assets resolve correctly whether the app is
// served from a GitHub Pages project subpath (e.g. /rcms-demo-app/) or root.
export default defineConfig({
  base: './',
});
