module.exports = {
  plugins: ['vue', 'prettier'],
  extends: [
    'plugin:vue/strongly-recommended',
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended'
  ],
  rules: {
    'no-console': 'off',
    'no-param-reassign': 'off',
    'prettier/prettier': 'error',
    'vue/no-v-for-template-key': 'off',
    'vue/no-v-for-template-key-on-child': 'off',
    'vue/no-v-html': 'off'
  },
  ignorePatterns: ['buildModules', 'libs']
}
