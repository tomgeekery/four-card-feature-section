const cssnano = require("cssnano");

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    // Minify CSS if in production environment.
    process.env.NODE_ENV === "production" ? cssnano : "",
  ],
};
