/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [
    require('@tailwindcss/forms'),

  ],
  theme: {
    fontFamily: {
      'inter': ['Inter', 'sans-serif']
    },

    backgroundImage: {
      'hero': "url('/public/hero-bg.png')",
      'vegetable': "url('/public/vegetable.png')",
      'fruits': "url('/public/fruits.png')"

    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        'hero-green': '#358d5d',
        'hero-gray': '#5B431B',
        'video': '#A9A5A5',
        'faq':'#D8D2D2',
        "fruits-gray": '#797575'
      }
    },
  },
}

