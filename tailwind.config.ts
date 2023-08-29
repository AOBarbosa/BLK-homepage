import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './node_modules/flowbite-react/**/*.{js,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        '1440': '90rem',
        mobile: '40rem',
        'home-text': '2.125rem',
        card: '16.875rem',
        presentation: '37.5625rem',
      },

      height: {
        '698': '43.625rem',
        '70': '4.375rem',
        services: '68.5rem',
        card: '26.59044rem',
        presentation: '7.8125rem',
        contatos: '60.63425rem',
        info: '45rem',
      },

      gap: {
        contatos: '30rem',
      },

      margin: {
        '75px': '75px',
      },

      fontFamily: {
        sans: 'var(--font-lato)',
      },

      fontSize: {
        '2.5xl': '1.625rem',
      },

      padding: {
        'home-text': '26rem',
      },

      colors: {
        blue: {
          850: '#002F5D',
          'left-gradient': '#ECECEC',
          'right-gradient': '#355675',
        },

        green: {
          450: '#5B9599',
          350: '#B9B9B9',
          info: '#D9D9D9',
        },
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        contato: "url('/img/contato-bg.png')",
        home: "url('/img/Hero.png')",
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
export default config
