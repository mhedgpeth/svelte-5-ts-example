// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginSvelte from "eslint-plugin-svelte";
import svelteConfig from "./svelte.config.js";
import tsParser from "@typescript-eslint/parser";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  ...eslintPluginSvelte.configs["flat/recommended"],
  {
    // for all files
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    // for svelte files
    files: ["**/*.svelte", "**/*.svelte.ts"],
    languageOptions: {
      parserOptions: {
        // Specify the `svelte.config.js`.
        svelteConfig,
        parser: {
          ts: tsParser,
          js: "espree",
          typescript: tsParser,
        },
        extraFileExtensions: [".svelte"],
      },
    },
  },
);
