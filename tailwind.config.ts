import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx,cjs}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        reddit: {
          Dark: '#030303',
          Grey: '#1A1A1B',
          Grey_tint: '#141414',
          Dark_Grey: '#272729',
          hover: '#acaeb0',
          Dark_Tint: '#818384'
        },
        reddit_Border: {
          DEFAULT: '#343536'
        }
      },
      borderWidth: {
        1: '1px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
