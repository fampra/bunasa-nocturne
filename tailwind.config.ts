import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#9b87f5",
          hover: "#7E69AB",
        },
        secondary: {
          DEFAULT: "#1A1F2C",
          hover: "#232931",
        },
        accent: {
          DEFAULT: "#D6BCFA",
          hover: "#C4A3F8",
        },
        card: {
          DEFAULT: "rgba(26, 31, 44, 0.8)",
          hover: "rgba(26, 31, 44, 0.9)",
        },
      },
      keyframes: {
        "cursor-animate": {
          "0%": {
            transform: "scale(1)",
            opacity: "0.5",
          },
          "100%": {
            transform: "scale(0)",
            opacity: "0",
          },
        },
      },
      animation: {
        "cursor-animate": "cursor-animate 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;