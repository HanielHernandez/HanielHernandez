module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    "prettier"
  ],
  "plugins": [
    "prettier"
  ],
  rules: {
    'prettier/prettier': [
      'error'],
    'vue/require-default-prop': 0,
    'vue/html-indent': ['error', 4],
    'vue/singleline-html-element-content-newline': 0,
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'generator-star-spacing': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}