module.exports = {
  theme: {
    // compatible with @nuxtjs/color-mode
    darkSelector: '.dark-mode'
  },
  variants: {
    backgroundColor: [
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd'
    ],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
    textColor: ['dark', 'dark-hover', 'dark-active']
  },
  plugins: [require('tailwindcss-dark-mode')()],
  purge: {
    content(contentDefaults) {
      return contentDefaults.map((file) => file.replace('.js', '.ts'))
    },
    options: {
      whitelist: ['dark-mode']
    }
  }
}
