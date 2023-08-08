const { complexTranslationSiteData } = require("./string-translation-data");
const { defaultLanguage, languagesOrder } = require("./languages");

const translate = (key, language = defaultLanguage) => {
  if (language === defaultLanguage) {
    return complexTranslationSiteData[key];
  } else {
    return complexTranslationSiteData?.translation[language][key];
  }
};

const generateLink = (link, linkLanguage) => {
  if (linkLanguage === defaultLanguage) {
    return link;
  } else {
    return `/${linkLanguage}${link === "/" ? "" : link}`;
  }
};

const getNextLanguage = (language) => {
  let currentLangIndex = languagesOrder.findIndex((l) => l === language);
  if (currentLangIndex + 1 >= languagesOrder.length) {
    currentLangIndex = 0;
  } else {
    currentLangIndex++;
  }
  return languagesOrder[currentLangIndex];
};

const getPathWithoutLanguage = (path) => {
  const pathArray = path.split("/").filter((p, i) => i !== 0);
  if (languagesOrder.includes(pathArray[0])) {
    pathArray.shift();
  }
  return `/${pathArray.join("/")}`;
};

module.exports = {
  translate,
  generateLink,
  getNextLanguage,
  getPathWithoutLanguage,
};
