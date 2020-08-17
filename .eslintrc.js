module.exports = {
  plugins: ['prettier'],
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/vue'
  ],
  rules: {
    'no-console': 'off',
    'no-param-reassign': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prettier/prettier': 'error'
  }
}
