/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  experimental: {
    jit: false,
  },
  theme: {
    extend: {
      colors: {
        primary: "#0B4141",
        secondary: "#FF5C39",
        "primary-dark": "#072727",
        "white-73": "#CED9D9",
        "gray": "#898685",
        "dark-green-25": "#C8CCCC",
        "dark-green-75": "#FF9D88",
        "gray-200": "#E5E7EB",
        "green-slate-800": "#122B2B",
        "green-slate-400": "#3C6767",
        "purple-900": "#512D6D",
        "teal-950": "#122B2B",
        "bone-200": "#FAF5F0",
        "yellow-75": "#F8E08E",
        "pink-150": "#FFDBD7",
        "pink-750": "#AC003E",
        "purple-150": "#F4E0F7",
        "blue-150": "#C3D7EE",
        "blue-750": "#152953",
        "sky-500": "#9ADBE8",
        "neutral-100": "#F5F5F5",
        "neutral-800": "#262626",
        "neutral-500": "#737373",
        "greenslate-700": "#415555",
        "greenslate-500": "#718080",
        "emerald-200": "#9DB3B3",
        "dark-green": "#003E3E",
        "black-700": "#212529",
        // "box-shadow": "0px 2px 2px 0px rgba(0, 0, 0, 0.06)"
        "sky-85": "#EBF8FA",
        "greenslate-250": "#D0D5D5",
        "emerald-75": "#487171",
        emerald: "#0B4141",
        "neutral-400": "#A3A3A3",
      },
      fontSize: {
        "4.5xl": "40px",
        xsm: "14px",
      },
      lineHeight: {
        4.5: "18px",
      },
      maxWidth: {
        "2.5xl": "720px",
        "900": "900px",
        "232": "232px",
      },
      minHeight: {
        'sm': '222px',
      },
      padding: {
        8.5: "34px",
      },
      height: {
        '394': '394px',
      },
      fontFamily: {
        inter: ["'Inter'", "sans-serif"],
        "mabry-pro": ["'Mabry Pro'", "sans-serif"],
        "tiempos-text": ["'Tiempos Text'"],
      },
    }
  },
  plugins: [],
};
