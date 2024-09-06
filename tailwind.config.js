import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';


export default {
  content: ['./index.html', './src/**/*.{html,jsx,js}'],
  theme: {
    extend: {
      ffontFamily: {
        sans: ['Roboto','sans-serif'],
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
    },
  },
  plugins: [forms, typography],
};
