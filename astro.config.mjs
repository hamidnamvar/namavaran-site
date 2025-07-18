import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://hamidnamvar.github.io/namavaran-site/',
  base: '/namavaran-site/',
  trailingSlash: 'always',   // مهم برای GitHub Pages
  output: 'static',
  prefetch: true,
  build: {
    assets: 'namavaran-site', // مهم برای مسیر درست assets در GitHub Pages
  },
  integrations: [
    tailwind(),
    sitemap(),
    icon({
      include: {
        ph: [
          "star-duotone",
          "lightning-duotone",
          "globe-duotone",
          "users-duotone",
          "buildings-duotone",
          "briefcase-duotone",
          "check-circle-duotone",
          "x-circle-duotone",
          "code-duotone",
          "puzzle-piece-duotone",
          "brain-duotone",
          "shield-check-duotone",
          "linkedin-logo-duotone",
          "twitter-logo-duotone",
          "github-logo-duotone",
          "currency-dollar-duotone",
          "arrow-left-duotone",
          "arrow-right",
          "file-search",
          "layout-duotone",
          "calendar-duotone",
          "clock-duotone",
          "link-duotone",
          "check-square-duotone",
          "credit-card-duotone",
          "paint-brush-duotone",
          "chart-line-duotone",
          "google-logo-duotone",
          "lock-key-duotone",
          "certificate-duotone",
          "lifebuoy-duotone",
          "handshake-duotone"
        ]
      }
    }),
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});
