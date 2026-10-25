import { defineConfig } from "vite-plus";

export default defineConfig({
  // Mirrors the previous .prettierrc (Prettier defaults + trailing commas).
  fmt: {
    printWidth: 80,
    trailingComma: "all",
    sortPackageJson: false,
    ignorePatterns: ["dist/**", "CHANGELOG.md", ".tegami/**", "renovate.json"],
  },
  lint: {
    ignorePatterns: ["dist/**"],
  },
  // Library build of the CLI; index.js (the `bin`) imports dist/index.js.
  pack: {
    entry: ["src/index.ts"],
    format: "esm",
    platform: "node",
    sourcemap: true,
    dts: false,
    // Keep the published file name dist/index.js.
    fixedExtension: false,
  },
});
