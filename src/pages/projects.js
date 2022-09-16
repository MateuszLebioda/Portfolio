import React from "react";
import AvatarPage from "../components/views/avatarPage/avatarPage";
import Layout from "../components/wrappers/Layout";

const Projects = () => {
  return (
    <Layout>
      <AvatarPage
        header="Brak zawartości"
        message="Jak na razie nie mam projektów którymi mógłbym się pochwalić 😔"
      />
    </Layout>
  );
};

export default Projects;
