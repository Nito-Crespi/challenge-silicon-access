/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-text': '#F2F2F2',
        'secondary-text': '#040707',
        'primary-sa': '#00B8FF',
        'secondary-sa': '#006BF2',
        'primary-cip': '#F36F21',
        'eigengrau': '#16161d',
      },
      fontFamily: {
        'mono': ['Roboto Mono', 'monospace'],
        // 'inconsolata': ['Inconsolata', 'monospace'],
      }
    },
  },
  plugins: [],
};
