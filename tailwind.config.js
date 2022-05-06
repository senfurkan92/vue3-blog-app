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
      colors: {
        'sun-red': '#E63946',
        'sun-white': '#F1FAEE',
        'sun-turqi': '#A8DADC',
        'sun-blue': '#457B9D',
        'sun-navy': '#1D3557',
        'mid-red': '#FE5F55',
        'mid-white': '#F7F7FF',
        'mid-turqi': '#BDD5EA',
        'mid-blue': '#577399',
        'mid-navy': '#495867',
        'moon-1': '#F2E9E4',
        'moon-2': '#C9ADA7',
        'moon-3': '#9A8C98',
        'moon-4': '#4A4E69',
        'moon-5': '#22223B',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
