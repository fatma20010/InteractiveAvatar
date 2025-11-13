/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      colors: {
        // Customize these colors to match your brand
        // Usage: bg-background, text-foreground, bg-primary, etc.
        background: '#000000', // Main background color (black)
        foreground: '#ffffff', // Main text color (white)
        primary: {
          DEFAULT: '#7559FF', // Primary button/accent color
          hover: '#634BDC', // Hover state
          light: '#8A73FF', // Light variant
        },
        secondary: {
          DEFAULT: '#3f3f46', // Secondary elements (zinc-700)
          light: '#52525b', // Light variant (zinc-600)
          dark: '#27272a', // Dark variant (zinc-800)
        },
        border: '#3f3f46', // Border color (zinc-700)
        card: {
          DEFAULT: '#18181b', // Card background (zinc-900)
          border: '#3f3f46', // Card border (zinc-700)
        },
        accent: {
          DEFAULT: '#0ea5e9', // Accent color (sky-500)
        },
      },
    },
  },
  darkMode: "class",
}
