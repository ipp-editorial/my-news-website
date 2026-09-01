const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  let markdownLibrary = markdownIt({ html: true, breaks: true, linkify: true });
  eleventyConfig.setLibrary("md", markdownLibrary);

  eleventyConfig.addPassthroughCopy({ "public/images": "images" });
  eleventyConfig.addPassthroughCopy("src/admin/config.yml");

  eleventyConfig.addFilter("readableDate", d => 
    new Date(d).toLocaleDateString("fa-IR", { year: "numeric", month: "long", day: "numeric" })
  );

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
