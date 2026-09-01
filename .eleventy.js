const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  let markdownLibrary = markdownIt({ html: true, breaks: true, linkify: true });
  eleventyConfig.setLibrary("md", markdownLibrary);

  // کپی کامل پوشه admin و تصاویر به خروجی نهایی
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy({ "public/images": "images" });

  eleventyConfig.addFilter("readableDate", d =>
    new Date(d).toLocaleDateString("fa-IR", { year: "numeric", month: "long", day: "numeric" })
  );
eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/news/*.md");
});

 return {
    dir: {
      input: "src",
      output: "_site"
    },
    pathPrefix: "/my-news-website/"
  };
};
