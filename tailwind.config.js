module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#8B5CF6',
        secondary: '#FD70EB',
        night: {
          50: '#1B1B30',
          100: '#121127'
        }
      },
      boxShadow: {
        soft: '0px 20px 50px rgba(18, 17, 39, 0.08)'
      }
    }
  },
  darkMode: 'class',
  plugins: []
}
