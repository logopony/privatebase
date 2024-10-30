import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cityLights from "./city-lights.json";

export default defineConfig({
  integrations: [tailwind()],
  markdown: {
    shikiConfig: {
      theme: {
        name: "city-lights",
        type: "dark",
        settings: cityLights.tokenColors,
      }
    }
  }
});
