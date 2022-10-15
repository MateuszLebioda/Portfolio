const { languages, defaultLanguage } = require("./src/language/languages");
const path = require("path");
const { pages } = require("./pages");
const { getNextLanguage } = require("./src/language/languageUtils");

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  Object.values(languages).forEach(lang => {
    pages.forEach(p => {
      const match =
        p.path === "/404" && lang !== defaultLanguage ? `/${lang}/*` : null;
      createPage({
        matchPath: match,
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
