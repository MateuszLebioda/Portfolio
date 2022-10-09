const { languages, defaultLanguage } = require("./src/language/languages");
const path = require("path");
const { pages } = require("./pages");
const { getNextLanguage } = require("./src/language/languageUtils");

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  Object.values(languages).forEach(lang => {
    pages.forEach(p => {
      createPage({
        path: `${lang !== defaultLanguage ? `/${lang}` : ""}${p.path}`,
        component: path.resolve(p.component),
        context: {
          lang: lang,
          pagePath: p.path,
          nextLang: getNextLanguage(lang),
        },
      });
    });
  });
};

//https://www.gatsbyjs.com/docs/creating-prefixed-404-pages-for-different-languages/
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  // Check if the page is a localized 404
  if (page.path.match(/^\/[a-z]{2}\/404\/$/)) {
    const oldPage = { ...page };

    // Get the language code from the path, and match all paths
    // starting with this code (apart from other valid paths)
    const langCode = page.path.split(`/`)[1];
    page.matchPath = `/${langCode}/*`;

    // Recreate the modified page
    deletePage(oldPage);
    createPage(page);
  }
};
