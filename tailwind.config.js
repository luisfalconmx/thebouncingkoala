module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('@thebouncingkoala/tailwindcss-preset-env')],
  theme: {
    extend: {}
  },
  darkMode: 'class',
  plugins: []
}
