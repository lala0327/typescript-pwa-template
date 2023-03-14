module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:vue/vue3-essential',
    '@vue/standard',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020
  },
  rules: {
    // 這邊可以自訂規則
    'no-alert': 'off',
    'no-console': 'off',
    'no-new': 'off',
    'vue/multi-word-component-names': 'off',
    quotes: 'off',
    semi: 'off',
    'comma-dangle': 'off',
    'space-before-function-paren': 0,
    '@typescript-eslint/no-inferrable-types': 'off',
    "@typescript-eslint/no-explicit-any": ["off"],
    "func-call-spacing": "off"
  }
}
