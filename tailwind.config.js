module.exports = {
  purge: ["index.html"],
  theme: {
    extend: {
      boxShadow: {
        card: "0px 15px 30px rgba(131, 166, 210, 0.5);",
      },
      fontFamily: {
        body: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "08125": "0.8125rem",
        "09375": "0.9375rem",
      },
      spacing: {
        "175": "1.75rem",
        "1875": "1.875rem",
        "475": "4.75rem",
        "525": "5.25rem",
      },
      width: {
        "21875": "21.875rem",
      },
    },
    colors: {
      red: "hsl(0, 78%, 62%)",
      cyan: "hsl(180, 62%, 55%)",
      orange: "hsl(34, 97%, 64%)",
      blue: "hsl(212, 86%, 64%)",
      "very-dark-blue": "hsl(234, 12%, 34%)",
      "grayish-blue": "hsl(229, 6%, 66%)",
      "very-light-gray": "hsl(0, 0%, 98%)",
      white: "#ffffff",
      concrete: "#f2f2f2",
    },
  },
  variants: {},
  plugins: [],
};
