import nextConfig from "eslint-config-next/core-web-vitals";
import prettierConfig from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  ...nextConfig,
  prettierConfig,
  { ignores: [".next/**", "out/**", "node_modules/**"] },
];

export default eslintConfig;
