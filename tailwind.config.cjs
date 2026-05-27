// tailwind.config.cjs
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream:   '#f5f4f0',
        ink:     '#0a0a0a',
        muted:   '#888888',
        border:  '#e0deda',
        dark:    '#111111',
        'dark-2':'#1a1a1a',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans:  ['Inter', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['10px', { lineHeight: '1.4', letterSpacing: '0.12em' }],
        xs:    ['12px', { lineHeight: '1.5' }],
        sm:    ['13px', { lineHeight: '1.6' }],
        base:  ['15px', { lineHeight: '1.7' }],
        lg:    ['18px', { lineHeight: '1.6' }],
        xl:    ['22px', { lineHeight: '1.4' }],
        '2xl': ['28px', { lineHeight: '1.3' }],
        '3xl': ['36px', { lineHeight: '1.2' }],
        '4xl': ['48px', { lineHeight: '1.1' }],
        '5xl': ['60px', { lineHeight: '1.05' }],
        '6xl': ['72px', { lineHeight: '1' }],
        '7xl': ['90px', { lineHeight: '0.95' }],
      },
      spacing: {
        px: '1px',
        18: '72px',
        22: '88px',
        26: '104px',
        30: '120px',
      },
      maxWidth: {
        site:   '1280px',
        prose:  '640px',
        narrow: '480px',
      },
    },
  },
  plugins: [],
};
