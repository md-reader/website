import type { Config } from 'tailwindcss'
// import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        hero: {
          '50': '#f2f5fc',
          '100': '#e2e8f7',
          '200': '#cbd7f2',
          '300': '#a8bde8',
          '400': '#7e9bdc',
          '500': '#607cd2',
          '600': '#4b61c5',
          '700': '#4150b4',
          '800': '#3a4393',
          '900': '#333b75',
          '950': '#232648',
        },
      },
    },
  },
}
