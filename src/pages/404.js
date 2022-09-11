import { graphql } from "gatsby";
import React from "react";
import AvatarPage from "../components/views/avatarPage/avatarPage";
import Layout from "../components/wrappers/Layout";

const NotFound = () => {
  return (
    <Layout>
      <AvatarPage header="404" message="Nie udało się odnaleźć strony" />
    </Layout>
  );
};

export default NotFound;

export const Head = ({ data }) => {
  return <title>{data.site.siteMetadata.title}</title>;
};

export const query = graphql`
  {
    site: site {
      siteMetadata {
        title
      }
    }
  }
`;
