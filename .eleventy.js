const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const { minify } = require("html-minifier-terser");
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Filtro "date" para formatação
  eleventyConfig.addFilter("date", function (dateObj, format = "yyyy-LL-dd") {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(format);
  });
  
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Copia estática de pastas (não processadas)
  eleventyConfig.addPassthroughCopy("materials");
  eleventyConfig.addPassthroughCopy("prompts");
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy("src/manifest.webmanifest");
  eleventyConfig.addWatchTarget("src/assets");

  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      return minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
    }
    return content;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_includes"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
