/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    colors: {
      'yellow': '#fef08a',
      'white': '#ffffff',
      'slate': '#374151',
      'gray': '#94a3b8',
      'lightblue': '#7dd3fc',
      'midblue': '#0ea5e9',
      'darkblue': '#0c4a6e',
      'black': '#000000',
      'cayn': '#06b6d4',
      'blue': '#3b82f6',
    },
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        }
      },
      animation: {
        typing: "typing 3s steps(20) infinite alternate, blink .7s infinite"
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)"
        ]
      }
    },
  },
  plugins: [
  ],
}

