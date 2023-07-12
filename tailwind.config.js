/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        rainbow: {
          '0%': { color: '#f56565' },       // Red
          '20%': { color: '#f6ad55' },      // Orange
          '40%': { color: '#fde047' },      // Yellow
          '60%': { color: '#68d391' },      // Green
          '80%': { color: '#4fd1c5' },      // Cyan
          '100%': { color: '#b794f4' },     // Purple
        },
        "slide-up": {
          "0%": {
            opacity: "1",
            transform: "translateY(0)",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(-100%)",
          },
        },
      },
      animation: {
        wiggle: 'wiggle 2s ease-in-out infinite',
        'rainbow-gradient': 'rainbow 6s linear infinite',
        "slide-up": "slide-up 1s forwards",
      }
    },
  },
  plugins: [],
}

