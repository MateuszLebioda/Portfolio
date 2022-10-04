import { graphql } from "gatsby";
import React from "react";
import AvatarPage from "../components/views/avatarPage/avatarPage";
import Layout from "../components/wrappers/Layout";
import { notFound } from "../data/complex-data";
import { translate } from "../utils/translator";

const NotFound = () => {
  return (
    <Layout>
      <AvatarPage header="404" message={translate(notFound, "value")} />
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
