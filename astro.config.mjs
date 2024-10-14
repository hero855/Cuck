import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";
import scope from "astro-scope";

// https://astro.build/config
export default defineConfig({
  integrations: [
    scope(),
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
});
