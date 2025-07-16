import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"
import js from '@eslint/js'
<<<<<<< HEAD

=======
import stylistic from '@stylistic/eslint-plugin'
import { error } from "console"
>>>>>>> cadb2876461526b3dcc334ee8ef4a8465ab7ce9a


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
<<<<<<< HEAD
=======
      "@stylistic"
>>>>>>> cadb2876461526b3dcc334ee8ef4a8465ab7ce9a
    ],
    rules: {
      "no-extra-semi": "error",
      "semi" : ["error", "never", { "beforeStatementContinuationChars": "always"}],
      "arrow-parens" : ["error", "as-needed"],
      "arrow-spacing": ["error", { "before": true, "after": true }],
      "indent": ["error", 2],
      "comma-dangle": ["error", "never"],
<<<<<<< HEAD
=======
      "@typescript-eslint/no-explicit-any": "error",

      "@stylistic/type-annotation-spacing": "error",
      "@stylistic/jsx-equals-spacing": ['error', "never"],
<<<<<<< HEAD
      "space-infix-ops": "error"
=======
      // "space-infix-ops": "error"
>>>>>>> responsive_implementation
>>>>>>> cadb2876461526b3dcc334ee8ef4a8465ab7ce9a
    }
  })
]

export default eslintConfig

<<<<<<< HEAD
=======

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
>>>>>>> cadb2876461526b3dcc334ee8ef4a8465ab7ce9a
