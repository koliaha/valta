/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#66BC54',
        green:'#66BC54',
        secondary:'#F0F9EE',
        black:'black',
        white:'white',
        orange:'#FE973C',
        blue:'#073580',
        red:"#FB4B00",
        'pet':{
          'light_orange':"#FFF5EC",
          'light_green':"#F0F9EE",
          'light_gray':"#E7EBF3",
          'light_blue':"#CCD4FF",
          'dark_green':"#E0F2DD",
          'dark_orange':"#FFEAE1",
        }
      },
    },
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1408px",
      },
    },
    spacing: {
      1: "8px",
      2: "12px",
      3: "16px",
      4: "24px",
      5: "32px",
      6: "48px",
    },
    borderRadius: {
      sm: "8px",
      lg: "12px",
      large: "14px",
    },
  },
  plugins: [],
};
