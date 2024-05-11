export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      screens: {
        Mobile : "375px",
        Tablet : "900px",
        Desktop: "1440px",
      },
      
      colors: {
        "white": "hsl(0, 0%, 100%)",
        "grey": "hsl(0, 0%, 20%)",
        "dark-grey": "hsl(0, 0%, 12%)",
        "off-black": "hsl(0, 0%, 8%)",
        "green" : " #D8AE7E"
      },
      fontFamily: {
        'inter-sans': ['Inter', 'sans-serif'],
      },
      

      
    },
  },
  plugins: [],
};