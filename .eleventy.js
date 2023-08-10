const eleventySass = require("eleventy-sass");

module.exports = (config) => {
  config.addPlugin(eleventySass);

  config.addPassthroughCopy("images");

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
