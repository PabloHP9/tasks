import js from "@eslint/js";
import globals from "globals";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js, prettier: prettierPlugin },
    extends: ["js/recommended", prettierConfig],
    languageOptions: {
      globals: {
        ...globals.webdriverio,
        ...globals.chai,
        ...globals.mocha,
        ...globals.browser,
        ...globals.dom,
        $: "readonly",
        browser: "readonly",
        allure: "readonly",
        Backbone: "readonly",
        jQuery: "readonly",
      },
    },
  },
]);
