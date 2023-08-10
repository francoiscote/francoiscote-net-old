const eleventySass = require("eleventy-sass");

// Filters
const dateFilter = require("./src/filters/date-filter.js");
const w3DateFilter = require("./src/filters/w3-date-filter.js");

module.exports = (config) => {
  // Add Filters
  config.addFilter("dateFilter", dateFilter);
  config.addFilter("w3DateFilter", w3DateFilter);

  // Add Plugins
  config.addPlugin(eleventySass);

  config.addPassthroughCopy("images");

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
