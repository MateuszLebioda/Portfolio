import React from "react";
import { createContext } from "react";

export const LanguageContext = createContext();

const LanguageContextProvider = props => {
  return (
    <LanguageContext.Provider
      value={{
        language: props.lang,
        pagePath: props.pagePath,
        nextLanguage: props.nextLang,
      }}
    >
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;
