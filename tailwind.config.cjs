module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,html}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6C5CE7',
        accent: '#00BFA6',
        soft: '#F6F7FB'
      },
      borderRadius: {
        xl: '18px',
        '2xl': '24px'
      },
      boxShadow: {
        soft: '0 8px 30px rgba(17, 24, 39, 0.08)'
      },
      animation: {
        float: 'float 6s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      }
    }
  },
  plugins: []
}
