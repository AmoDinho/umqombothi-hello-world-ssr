const withTM = require("next-transpile-modules");
const withCSS = require("@zeit/next-css");

module.exports = withCSS(
  withTM({
    transpileModules: ["umqombothi-component-library"]
  })
);
