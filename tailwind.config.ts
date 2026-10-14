import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-serif)", "Newsreader", "Instrument Serif", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: {
          orange: "#ff7a45",
          orangeHover: "#ff8c5c",
          peach: "#fba584",
          peachLight: "#fed7c7",
          glow: "rgba(255, 122, 69, 0.18)",
        },
        surface: {
          dark: "#0b0c0e",
          card: "#121418",
          cardHover: "#171a20",
          cardActive: "#1b1e26",
          border: "#20242d",
          borderLight: "rgba(255, 255, 255, 0.08)",
          subtle: "#0e1014",
        },
      },
      boxShadow: {
        glow: "0 0 35px -5px rgba(255, 122, 69, 0.3)",
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
export default config;
