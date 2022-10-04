import { defaultLanguage } from "../redux/language/languages";
import store from "../redux/store";

export const translate = (translationObject, key) => {
  const {
    language: { value },
  } = store.getState();

  if (translationObject !== 1) {
    if (value === defaultLanguage) {
      return translationObject[key];
    } else {
      return translationObject?.translation[value][key];
    }
  }
};
