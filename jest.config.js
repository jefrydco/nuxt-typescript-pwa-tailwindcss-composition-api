module.exports = {
  preset: 'ts-jest',
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/tests/unit/setup/index.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  transform: {
    // process `*.vue` files with `vue-jest`
    '.*\\.(vue)$': 'vue-jest',
    // process js with `ts-jest`
    '^.+\\.js$': 'ts-jest',
    // Stub non js file
    '.+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$':
      'jest-transform-stub'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '**/components/**/*.{ts,vue}',
    '**/layouts/**/*.{ts,vue}',
    '**/pages/**/*.{ts,vue}',
    '!**/node_modules/**',
    '!**/coverage/**'
  ],
  coverageDirectory: '<rootDir>/tests/unit/coverage',
  snapshotSerializers: ['jest-serializer-vue'],
  transformIgnorePatterns: [
    'node_modules/(?!vee-validate/dist/rules|@nuxtjs/composition-api)'
  ],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tests/unit/tsconfig.json'
    }
  }
}
