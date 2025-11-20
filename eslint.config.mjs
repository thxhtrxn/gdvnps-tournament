// eslint.config.js
import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import solid from "eslint-plugin-solid/configs/typescript";
import tsParser from "@typescript-eslint/parser";
import globals from "globals";

export default defineConfig([
  {
    ignores: ["node_modules/", "public/", "pnpm-lock.yaml", ".output/", ".tanstack/", ".vinxi/"],
  },
  js.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    ...solid,
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        project: "tsconfig.json",
      },
    },
  },
]);
