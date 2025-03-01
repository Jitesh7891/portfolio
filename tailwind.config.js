/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mycolor: {
          DEFAULT: "#3b82f6", // Blue as the primary color
          dark: "#1d4ed8",    // Darker blue for hover states
          light: "#60a5fa",   // Lighter blue for accents
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        secondary: {
          DEFAULT: "#6366f1", // Indigo as a complementary color
          dark: "#4f46e5",
          light: "#818cf8",
        },
        dark: {
          DEFAULT: "#111827", // Dark background (replacing gray-900)
          light: "#1f2937",   // Lighter dark (replacing gray-800) 
          lighter: "#374151", // Even lighter (replacing gray-700)
        },
      },
      gradients: {
        'hero': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};