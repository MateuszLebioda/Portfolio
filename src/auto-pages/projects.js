import React from "react";
import AvatarPage from "../components/views/avatar/avatarView";
import { Seo } from "../components/wrappers/seo";
import { translate } from "../language/languageUtils";

const Projects = ({ pageContext }) => {
  return (
    <AvatarPage
      header={translate("noContentYet", pageContext.lang)}
      message={translate("noProjectsYet", pageContext.lang)}
    />
  );
};

export const Head = () => <Seo />;

export default Projects;
