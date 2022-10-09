import React from "react";
import AvatarPage from "../components/views/avatarPage/avatarPage";
import Layout from "../components/wrappers/Layout";
import {
  getNextLanguage,
  getPathWithoutLanguage,
  translate,
} from "../language/languageUtils";

const NotFoundPage = props => {
  return (
    <Layout
      lang={props.language}
      nextLang={getNextLanguage(props.language)}
      pagePath={getPathWithoutLanguage(props.pathName)}
    >
      <AvatarPage
        header="404"
        message={translate("pageNotFoundHeder", props.language)}
      />
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => {
  return <title>404</title>;
};
