import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import inject from "@rollup/plugin-inject";

// https://vite.dev/guide/build.html#multi-page-app
// Setting rewrite rule for index.html when path has trailing slash or don't have it
// https://stackoverflow.com/questions/79348016/vue-router-returns-a-404-on-refresh-of-a-vite-mpa-app

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        bestsellery: resolve(__dirname, 'bestsellery/index.html'),
        nowosci: resolve(__dirname, 'nowosci/index.html'),
        promocje: resolve(__dirname, 'promocje/index.html'),
      },
    },
  },
  server: {
    proxy: {
      '^/([a-zA-Z0-9_-]+)/?$': {
        rewrite: (path) => path.replace(/^\/([a-zA-Z0-9_-]+)\/?$/, '/$1/index.html'),
        target: 'http://localhost:5173',
      },
    },
  },
  preview: {
    proxy: {
      '^/([a-zA-Z0-9_-]+)/?$': {
        rewrite: (path) => path.replace(/^\/([a-zA-Z0-9_-]+)\/?$/, '/$1/index.html'),
        target: 'http://localhost:4173',
      },
    }
  },
  plugins: [
    inject({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
  optimizeDeps: {
      include: ["jquery"],
  },
  css: {
     preprocessorOptions: {
        scss: {
          silenceDeprecations: [
            'import',
            'mixed-decls',
            'color-functions',
            'global-builtin',
          ],
        },
     },
  },
});