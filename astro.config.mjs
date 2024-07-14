import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  /* devToolbar: {
    enabled: false
  }, */
  integrations: [tailwind(), vue(/* {
    appEntrypoint: '/src/pages/_app.ts'
  } */), react()]
});