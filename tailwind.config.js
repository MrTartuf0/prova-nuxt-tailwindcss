module.exports = {
  mode: 'jit',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./components/*.vue",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'port-sans': ['"Port Lligat Sans"' , 'sans-serif']
      },
      lineHeight: {
        'description-line-height': '27.2px',
      },
      colors: {
        mainBackground: '#f8f5ed',
        white: '#ffffff',
        search: '#e5dabd',
        heart: '#fe48481a',
        star: '#f3e6d3',
        review: '#e2eae1',
        black: '#000000',
        aquamarine: '#58867b',
        mattBlack: '#111111',
        scrollingbar: '#E5DABD',
        scrollthumb: '#927A3A',
      },
    },
  },
  plugins: [],
}
