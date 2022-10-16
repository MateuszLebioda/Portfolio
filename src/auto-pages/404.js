import React from "react";
import { useContext } from "react";
import AvatarPage from "../components/views/avatar/avatarView";
import { Seo } from "../components/wrappers/seo";
import { LanguageContext } from "../language/languageContext";
import { translate } from "../language/languageUtils";

const NotFoundPage = () => {
  const { language } = useContext(LanguageContext);
  return (
    <AvatarPage
      header="404"
      message={translate("pageNotFoundHeder", language)}
    />
  );
};

export const Head = () => <Seo title="404" />;

export default NotFoundPage;
