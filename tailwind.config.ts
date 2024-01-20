import type { Config } from 'tailwindcss';

const colors = {
  blue: 'hsla(232, 92%, 35%, 1)',
  'blue-light': 'hsla(232, 48%, 50%, 1)',
  'blue-lighter': 'hsla(231, 46%, 65%, 1)',
  'blue-lightest': 'hsla(230, 42%, 80%, 1)',
  white: 'hsla(210, 9%, 96%, 1)',
  'gray-light': 'hsla(231, 8%, 85%, 1)',
  gray: 'hsla(231, 8%, 49%, 1)',
  'gray-dark': 'hsla(229, 12%, 27%, 1)',
  black: 'hsla(240, 11%, 7%, 1)',
  yellow: 'hsla(40, 93%, 64%, 1)',
  red: 'hsla(339, 90%, 43%, 1)',
  purple: 'hsla(263, 100%, 43%, 1)',
  green: 'hsla(119, 91%, 31%, 1)',
};

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      ...colors,
    },
    fontSize: {
      xs: '0.8rem',
      sm: '1rem',
      md: '1.25rem',
      lg: '1.563rem',
      xl: '1.953rem',
      '2xl': '2.441rem',
      '3xl': '3.052rem',
      '4xl': '3.815rem',
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        jprdy: {
          primary: colors.blue,
          secondary: colors['blue-light'],
          accent: colors.yellow,
          neutral: colors.black,
          'base-100': colors.white,
          info: colors.purple,
          success: colors.green,
          warning: colors.yellow,
          error: colors.red,
        },
      },
    ],
    darkTheme: 'jprdy',
  },
  plugins: [require('daisyui')],
};
export default config;
