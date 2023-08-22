import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        '1440': '90rem',
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
        },
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'presentation-image': "url('/img/image-1.png')",
      },
    },
  },
  plugins: [],
}
export default config
