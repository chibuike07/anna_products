const nextPlugin = require("@next/eslint-plugin-next");
const tsParser = require("@typescript-eslint/parser");

const nextCoreWebVitals = nextPlugin.configs["core-web-vitals"];

module.exports = [
  {
    ignores: ["**/.next/**", "**/out/**", "**/node_modules/**"],
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: nextCoreWebVitals.plugins,
    rules: nextCoreWebVitals.rules,
  },
];
