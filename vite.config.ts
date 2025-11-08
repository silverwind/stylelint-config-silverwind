import {defineConfig} from "vite";
import {nodeLib} from "vite-config-silverwind";

export default defineConfig(nodeLib({
  url: import.meta.url,
  build: {
    target: "node22",
    rollupOptions: {
      external: [
        "postcss-sass",
        "postcss-scss",
        "postcss-less",
        "postcss-styl",
        "sugarss",
      ]
    }
  },
  dtsExcludes: [
    "build.js",
    "eslintrc.cjs",
    "globals.js",
    "test.ts",
    "test2.ts",
  ],
}));
