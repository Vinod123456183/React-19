// import { defineConfig } from "vite";
// import tailwindcss from "@tailwindcss/vite";

// export default defineConfig({
//   plugins: [tailwindcss()],
// });

import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  css: {
    postcss: "./postcss.config.mjs",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
