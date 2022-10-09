import React from "react";
import AvatarPage from "../components/views/avatarPage/avatarPage";
import Layout from "../components/wrappers/Layout";
import { translate } from "../language/languageUtils";

const Projects = ({ pageContext }) => {
  return (
    <Layout {...pageContext}>
      <AvatarPage
        header={translate("noContentYet", pageContext.lang)}
        message={translate("noProjectsYet", pageContext.lang)}
      />
    </Layout>
  );
};

export const Head = props => {
  return <title>{"Mateusz Lebioda"}</title>;
};
export default Projects;
