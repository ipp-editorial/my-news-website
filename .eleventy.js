const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  // Markdown setup
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  });

  eleventyConfig.setLibrary("md", markdownLibrary);

  // Passthrough copy
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy({ "Public/images": "images" });

  // Persian date filter
  eleventyConfig.addFilter("readableDate", d =>
    new Date(d).toLocaleDateString("fa-IR", {
      year: "numeric",
      month: "long",
      day: "numeric"
    })
  );

  // Collection for posts inside src/news/
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/news/*.md");
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    },
    pathPrefix: "/my-news-website/"
  };
};
