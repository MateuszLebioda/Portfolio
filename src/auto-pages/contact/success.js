import React from "react";
import { useContext } from "react";
import AvatarPage from "../../components/views/avatar/avatarView";
import { Seo } from "../../components/wrappers/seo";
import { LanguageContext } from "../../language/languageContext";
import { translate } from "../../language/languageUtils";

const ContactSuccess = () => {
  const { language } = useContext(LanguageContext);

  return (
    <AvatarPage
      header={translate("thanksForContact", language)}
      message={translate("IllGetBack", language)}
    />
  );
};

export const Head = () => <Seo />;

export default ContactSuccess;
