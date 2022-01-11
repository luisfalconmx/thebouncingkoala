const TKB = require('@thebouncingkoala/tailwindcss-preset-env')

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [TKB],
  theme: {
    extend: {}
  },
  darkMode: 'class',
  plugins: []
}
