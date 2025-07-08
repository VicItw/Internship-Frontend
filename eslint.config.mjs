import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"
import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import { error } from "console"


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
      "@stylistic"
    ],
    rules: {
      "no-extra-semi": "error",
      "semi" : ["error", "never", { "beforeStatementContinuationChars": "always"}],
      "arrow-parens" : ["error", "as-needed"],
      "arrow-spacing": ["error", { "before": true, "after": true }],
      "indent": ["error", 2],
      "comma-dangle": ["error", "never"],
      "@typescript-eslint/no-explicit-any": "error",

      "@stylistic/type-annotation-spacing": "error",
      "@stylistic/jsx-equals-spacing": ['error', "never"],
<<<<<<< HEAD
      "space-infix-ops": "error"
=======
      // "space-infix-ops": "error"
>>>>>>> responsive_implementation
    }
  })
]

export default eslintConfig


// module.exports = {
//   "parser": "@typescript-eslint/parser",
//   "plugins": ["@typescript-eslint"],
//   "rules": {
//     "@typescript-eslint/type-annotation-spacing": [
//         "error",
//         {
//             "before": true,
//             "after": true,
//         },
//     ],
//   }
// }
