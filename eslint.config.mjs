import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"
import js from '@eslint/js'



const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended
})

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript',"eslint:recommended", "plugin:@typescript-eslint/recommended"],
    parser: "@typescript-eslint/parser",
    
    plugins: [
      "@typescript-eslint",
    ],
    rules: {
      "no-extra-semi": "error",
      "semi" : ["error", "never", { "beforeStatementContinuationChars": "always"}],
      "arrow-parens" : ["error", "as-needed"],
      "arrow-spacing": ["error", { "before": true, "after": true }],
      "indent": ["error", 2],
      "comma-dangle": ["error", "never"],
    }
  })
]

export default eslintConfig

