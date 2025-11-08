import {defineConfig} from "vite";
import {nodeLib} from "vite-config-silverwind";

export default defineConfig(nodeLib({
  url: import.meta.url,
  build: {
    target: "node22",
  },
  dtsExcludes: [
    "build.js",
    "eslintrc.cjs",
    "globals.js",
    "test.ts",
    "test2.ts",
  ],
}));
