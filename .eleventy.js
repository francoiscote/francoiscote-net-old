// Plugins
const eleventySass = require("eleventy-sass");
const pluginRss = require("@11ty/eleventy-plugin-rss");

// Filters
const dateFilter = require("./src/filters/date-filter.js");
const w3DateFilter = require("./src/filters/w3-date-filter.js");

module.exports = (config) => {
  // Add Plugins
  config.addPlugin(eleventySass);
  config.addPlugin(pluginRss);

  // Add Filters
  config.addFilter("dateFilter", dateFilter);
  config.addFilter("w3DateFilter", w3DateFilter);

  config.addPassthroughCopy("src/images");

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
