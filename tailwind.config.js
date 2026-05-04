/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        neurion: {
          green: "#38B26D",
          cyan: "#30C7D9",
          graphite: "#1F252B",
          surface: "#F7F9FA",
        },
      },
      boxShadow: {
        soft: "0 24px 70px -40px rgba(31, 37, 43, 0.45)",
      },
    },
  },
  plugins: [],
};
