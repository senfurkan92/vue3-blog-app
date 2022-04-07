module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        navbar: 'max-content auto max-content',
      },
    },
  },
  plugins: [],
  darkMode: 'media',
};
