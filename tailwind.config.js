/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: ["class"],
  theme: {
    extend: {
      fontSize: {
        "size-20": "20px"
      },
      width: {
        "calc": "calc(100% - 50px)"
      },
      height: {
        "calc":"calc(100vh - 95px)"
      },
      colors:{
        'dark': '#23252B',
        'back-page':'#15171E',
        'back-buy':'#6cdb00'
      },

      backgroundImage: {
  'download':"url('/image/image/background.webp')"
}
    },
  },
  plugins: [require("daisyui")],
}

