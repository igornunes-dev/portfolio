

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Open Sans"'],
      handwriting: ["Caveat"],
      headling: ["Poppins"],
    },
    extend: {
      keyframes: {
        'wiggle': {
          '0%': { transform: 'translateX(-500px)' },
          '100%': { transform: 'translateX(250px)' },
        },
      },
      animation: {
        'wiggle' : 'wiggle 8s linear infinite',

      }
    },
  },
  plugins: [],
}

