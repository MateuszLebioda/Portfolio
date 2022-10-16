import React from "react";
import AvatarPage from "../components/views/avatar/avatarView";
import { translate } from "../language/languageUtils";

const Projects = ({ pageContext }) => {
  return (
    <AvatarPage
      header={translate("noContentYet", pageContext.lang)}
      message={translate("noProjectsYet", pageContext.lang)}
    />
  );
};

export default Projects;
