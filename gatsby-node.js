const {
  languages,
  defaultLanguage,
} = require("./src/redux/language/languages");
const path = require("path");
const { pages } = require("./pages");

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  Object.values(languages).forEach(lang => {
    pages.forEach(p => {
      createPage({
        path: `${lang !== defaultLanguage ? `/${lang}` : ""}${p.path}`,
        component: path.resolve(p.component),
      });
    });
  });
};
