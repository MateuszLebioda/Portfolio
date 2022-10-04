import { createSlice } from "@reduxjs/toolkit";
import { languages } from "./languages";
import { navigate } from "gatsby";

const languageOrder = [languages.PL, languages.EN];

const getInitialLanguage = () => {
  if (typeof window !== "undefined") {
    const path = window.location.pathname.split("/").filter(x => x !== "");
    if (languageOrder.includes(path[0])) {
      return languageOrder.find(lang => lang === path[0]);
    }
  }
  return languages.PL;
};

const counterSlice = createSlice({
  name: "language",
  initialState: {
    value: getInitialLanguage(),
  },
  reducers: {
    changeLanguage: state => {
      const index = languageOrder.findIndex(l => l === state.value);
      if (index + 1 === languageOrder.length || index < 0) {
        const path = window.location.pathname
          .split("/")
          .filter(x => x !== "")
          .filter((x, index) => index !== 0)
          .join("/");
        navigate(`/${path}`);
        state.value = languageOrder[0];
      } else {
        state.value = languageOrder[index + 1];
        const pathName = window.location.pathname;
        navigate(
          `/${languageOrder[index + 1]}${
            pathName === "/" ? "" : window.location.pathname
          }`
        );
      }
    },
  },
});

export const { changeLanguage } = counterSlice.actions;
export default counterSlice.reducer;
