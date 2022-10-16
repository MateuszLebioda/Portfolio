import React from "react";
import { useContext } from "react";
import AvatarPage from "../components/views/avatar/avatarView";
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

export default NotFoundPage;
