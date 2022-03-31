module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '2xl': '20px 35px 60px 10px rgba(0, 0, 0, 0.3)',
      }
    }
  },
  plugins: [],
}