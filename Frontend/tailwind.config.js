export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        secondary: 'var(--color-secondary)',
        text: 'var(--color-text)',
        disabled: 'var(--color-disabled)',
      },
      spacing: {
        test: '123px', // <--- Add this line
      },
    },
  },
  plugins: [],
}
