/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff009d',
        vPrimary: { 50: '#ffe3f1', 600: '#ff009d' },
        secondary: '#f5be41',
        vSecondary: { 50: '#fffbeb', 600: '#f5be41' },
        tertiary: '#c8a4f9',
        vTertiary: { 50: 'f2e6ff', 600: '#c8a4f9' },
        cwhite: '#fceee7',
        cblack: '#081c24',
      },
      screens: {
        mobile: '360px', // @media (min-width: 360px)
        foldable: '523px', // @media (min-width: 523px)
        tablet: '768px', // @media (min-width: 768px)
        desktop: '1200px', // @media (min-width: 1000px)

        'under-mobile': { max: '359px' }, // @media (max-width: 359px)
        'under-foldable': { max: '522px' }, // @media (max-width: 522px)
        'under-tablet': { max: '767px' }, // @media (max-width: 767px)
        'under-desktop': { max: '1199px' }, // @media (max-width: 999px)
      },
    },
  },
  plugins: [],
}
