/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'main-bg-color': '#02172F',
      'text-gray-color': '#ffffff',
      'cyan-500': '#00ffff',
      'blue-500': '#0000ff',
      'dark-gray': '#63666a',
      'active-red': '#aa4a44',
      'bg-black': '#000000',
      transparent: 'transparent',
      'from-c': '#2525259c',
      'to-c': '#111111',
      'bg-c': '#06202A',
      'bg-a': '#2525259c',
      'light-gray': '#C0BCBC',
      'green': '#097F2E',
      'med-gray': '#CFCBCB',
      'from-gray': '#2b2b2d',
      'divider-gray': '#464646' 
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'] 
      },
      width: {
        '640': '640px',
        '25': '25rem'
      },
      height: {
        '360': '360px',
        '25': '25rem',
        '600': '600px'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
