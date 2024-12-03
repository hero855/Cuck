/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
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
      fontFamily: {
        courier: "'Courier New', monospace",
        space: "'Space Mono', monospace",
        inconsolata: "'Inconsolata', monospace;",
        heroEn: "Agrumato, Roboto",
        heroRu: "'Fantasy'",
        ruslan: "'Ruslan Display'"
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      maskImage: {
        "coolity1": "linear-gradient(black,transparent,black),linear-gradient(to_right,black,transparent,black),radial-gradient(ellipse_at_20%_70%,black_0%,transparent_20% ),radial-gradient(ellipse_at_70%_20%,black_0%,transparent_20%),radial-gradient(ellipse_at_50%_50%,black_0%,transparent_20%),radial-gradient(ellipse_at_20%_10%,black_0%,transparent_20%)",
      },
      backgroundImage: {
        "coolity": "linear-gradient(black, transparent, black), linear-gradient(to right, black, transparent, black), radial-gradient( ellipse at 20% 70%, black 0%,transparent 20% ), radial-gradient( ellipse at 70% 20%, black 0%, transparent 20% ), radial-gradient( ellipse at 50% 50%, black 0%, transparent 20% ), radial-gradient( ellipse at 20% 10%, black 0%, transparent 20% )",
      }
    },
  },
  plugins: [require("tailwindcss-animate"), require('tailwind-container-break-out')],
}