/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/main.tsx",
    "./src/components/keys.tsx",
    "./src/components/display.tsx",
    "./src/components/author.tsx",
    "./src/components/title.tsx",
    "./src/layout/screen.tsx"
  ],
  theme: {
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

