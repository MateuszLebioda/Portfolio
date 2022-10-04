import React from "react";
import AvatarPage from "../components/views/avatarPage/avatarPage";
import Layout from "../components/wrappers/Layout";
import { projectData } from "../data/complex-data";
import { translate } from "../utils/translator";

const Projects = () => {
  return (
    <Layout>
      <AvatarPage
        header={translate(projectData, "noContent")}
        message={translate(projectData, "soFarNoProjects")}
      />
    </Layout>
  );
};

export default Projects;
