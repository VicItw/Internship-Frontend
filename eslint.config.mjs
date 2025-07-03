import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript'],
    rules: {
      "no-extra-semi": "error",
      "semi" : ["error", "never", { "beforeStatementContinuationChars": "always"}],
      "arrow-parens" : ["error", "as-needed"],
      "arrow-spacing": ["error", { "before": true, "after": true }],
      "indent": ["error", 2],
      "comma-dangle": ["error", "never"]
    }
  }),
]

export default eslintConfig;
//this is a test
