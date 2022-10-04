import { defaultLanguage } from "../redux/language/languages";
import store from "../redux/store";

export const getLink = link => {
  const {
    language: { value },
  } = store.getState();

  if (value === defaultLanguage) {
    return link;
  } else {
    return `/${value}${link === "/" ? "" : link}`;
  }
};
