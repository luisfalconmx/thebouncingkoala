module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0070f3',
          secondary: '#ff4081',
          tertiary: '#f50057'
        },
        state: {
          success: '#4caf50',
          warning: '#ffc107',
          error: '#f44336',
          info: '#2196f3'
        }
      }
    }
  },
  plugins: []
}
