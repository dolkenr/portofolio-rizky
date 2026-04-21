import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; // atau import tailwind dari '@astrojs/tailwind'

export default defineConfig({
  // ...
  vite: {
    plugins: [
      // @ts-ignore
      tailwindcss()
    ],
  },
});