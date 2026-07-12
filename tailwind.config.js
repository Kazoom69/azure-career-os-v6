/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deep: { navy: "#0a192f", void: "#020617" },
        surface: { DEFAULT: "#0F172A", card: "#0d1b2a", light: "#1E293B" },
        cyan: { DEFAULT: "#00d4aa", electric: "#38BDF8", teal: "#64ffda" },
        indigo: { DEFAULT: "#4b0082", accent: "#6366F1" },
        hologram: { purple: "#6d4aff" },
        space: { white: "#e6f1ff", slate: "#94A3B8" },
      },
      backgroundImage: {
        "gradient-hologram": "linear-gradient(135deg, #6d4aff, #00d4aa)",
        "gradient-hero": "linear-gradient(180deg, #0a192f 0%, #060d1a 100%)",
      },
    },
  },
  plugins: [],
};
