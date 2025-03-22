export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: "#1e40af",
          secondary: "#9333ea",
          background: "#212529",
          text: "#1f2937",
        },
      },
      fontFamily: {
        agrandir: ["Agrandir", "sans-serif"],
      },
    },
    plugins: [require('tailwind-scrollbar-hide')],
  };
  