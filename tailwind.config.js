/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    colors: {
      black: '#191A19',
      grey: '#0F0F0F',
      white: '#f8fafc',
      darkgreen: '#1E5128',
      green: '#4E9F3D',
      lightgreen: '#D8E9A8'

    }
  },
  plugins: [],
}