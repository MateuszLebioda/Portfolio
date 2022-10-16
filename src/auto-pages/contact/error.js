import React from "react";
import { useContext } from "react";
import AvatarPage from "../../components/views/avatar/avatarView";
import { Seo } from "../../components/wrappers/seo";
import { LanguageContext } from "../../language/languageContext";
import { translate } from "../../language/languageUtils";
import { notTranslationSiteData } from "../../language/string-translation-data";

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

export const Head = () => <Seo />;

export default Error;
