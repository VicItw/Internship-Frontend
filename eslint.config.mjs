import stylistic from '@stylistic/eslint-plugin'
import eslintPlugin from '@typescript-eslint/eslint-plugin'


export default [
  {
    plugins: {
      '@stylistic': stylistic,
      eslintPlugin
    },
    rules: {
      "no-extra-semi": "error",
      "semi" : ["error", "never", { "beforeStatementContinuationChars": "always"}],
      "arrow-parens" : ["error", "as-needed"],
      "arrow-spacing": ["error", { "before": true, "after": true }],
      "indent": ["error", 2],
      "comma-dangle": ["error", "never"],
      // "@typescript-eslint/no-explicit-any": "error",

      "@stylistic/type-annotation-spacing": "error",
      "@stylistic/jsx-equals-spacing": ['error', "never"],
      "space-infix-ops": "error"
    }
  }
]
