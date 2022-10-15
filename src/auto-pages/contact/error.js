import React from "react";
import { useContext } from "react";
import AvatarPage from "../../components/views/avatarPage/avatarPage";
import { notTranslationSiteData } from "../../data/string-data";
import { LanguageContext } from "../../language/languageContext";
import { translate } from "../../language/languageUtils";

const Error = () => {
  const { language } = useContext(LanguageContext);

  return (
    <AvatarPage
      header={translate("oops", language)}
      message={
        <>
          <div>{translate("failedContact", language)}</div>
          <div className="mt-3">{notTranslationSiteData.email}</div>
        </>
      }
    />
  );
};

export default Error;
