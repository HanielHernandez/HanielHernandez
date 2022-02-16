module.exports = {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true

  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/prettier'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2018,
    requireConfigFile: false // This will prevent Babel from looking for a config file you possibly don’t have or need.
  },
  plugins: ['vue'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
        singleQuote: true,
        semi: false,
        trailingComma: 'none'
      }
    ],
    'generator-star-spacing': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
