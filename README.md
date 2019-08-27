# Hello World For Umqombothi

This repo serves as a poc for using Pimp My Book's Umqombothi-component-library with Next.JS

Key thing to note is that in your `next.config.js`, you've got to export the `next-transpile-modules` with Umqombothi to allow Next to read the CSS and JSX.

EXAMPLE:

```

const withTM = require("next-transpile-modules");
const withCSS = require("@zeit/next-css");

module.exports = withCSS(
  withTM({
    transpileModules: ["umqombothi-component-library"]
  })
);

```
