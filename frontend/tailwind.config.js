// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "nav-gradient-dark":
          "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 10%, rgba(30, 30, 30, 0.8) 30%, rgba(37, 37, 38, 0.8) 70%, rgba(124, 58, 237, 0.2) 90%)",
        "output-gradient-dark": "linear-gradient(135deg, #1E1E1E, #252526)",
        "ai-gradient-dark":
          " linear-gradient(200deg, rgba(171, 171, 171,0.05) 0%, rgba(171, 171, 171,0.05) 23%,rgba(90, 90, 90,0.05) 23%, rgba(90, 90, 90,0.05) 48%,rgba(65, 65, 65,0.05) 48%, rgba(65, 65, 65,0.05) 61%,rgba(232, 232, 232,0.05) 61%, rgba(232, 232, 232,0.05) 100%),linear-gradient(126deg, rgba(194, 194, 194,0.05) 0%, rgba(194, 194, 194,0.05) 11%,rgba(127, 127, 127,0.05) 11%, rgba(127, 127, 127,0.05) 33%,rgba(117, 117, 117,0.05) 33%, rgba(117, 117, 117,0.05) 99%,rgba(248, 248, 248,0.05) 99%, rgba(248, 248, 248,0.05) 100%),linear-gradient(144deg, rgba(64, 64, 64,0.05) 0%, rgba(64, 64, 64,0.05) 33%,rgba(211, 211, 211,0.05) 33%, rgba(211, 211, 211,0.05) 50%,rgba(53, 53, 53,0.05) 50%, rgba(53, 53, 53,0.05) 75%,rgba(144, 144, 144,0.05) 75%, rgba(144, 144, 144,0.05) 100%),linear-gradient(329deg, hsl(148,0%,0%),hsl(148,0%,0%));",
        "nav-gradient-light":
          "linear-gradient(135deg, rgba(124, 58, 237, 0.2) 10%, rgba(240, 240, 240, 0.6) 30%, rgba(240, 240, 240, 0.6) 70%, rgba(59, 130, 246, 0.2) 90%)",
        "ai-gradient-light":
          " linear-gradient(90deg, rgb(68, 144, 190),rgb(251, 254, 241))",
        "output-gradient-light":
          "linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.95) 20%, rgba(255, 255, 255, 0.9) 40%, rgba(255, 255, 255, 0.85) 60%, rgba(255, 255, 255, 0.8) 80%, rgba(255, 255, 255, 0.75) 100%)",
        "botnav-gradient-light":
          "linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(240, 240, 240, 0.6) 50%, rgba(240, 240, 240, 0.4) 80%, rgba(240, 240, 240, 0) 100%)",
        "web-gradient-dark":
          "linear-gradient(135deg, rgba(124, 58, 237, 0.2) 10%, rgba(30, 30, 30, 0.8) 30%, rgba(37, 37, 38, 0.8) 70%, rgba(59, 130, 246, 0.2) 90%)",
        "web-gradient-light":
          "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 10%, rgba(240, 240, 240, 0.6) 30%, rgba(240, 240, 240, 0.6) 70%, rgba(124, 58, 237, 0.2) 90%)",
      },
      fontFamily: {
        title: `"IBM Plex Mono", monospace`,
      },
      
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["wireframe", "halloween", "dark"],
  },
};
