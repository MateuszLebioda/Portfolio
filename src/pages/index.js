import { graphql } from "gatsby";
import React from "react";
import Preview from "../components/views/preview/preview";
import TimeLine from "../components/views/timeLine/timeLine";
import Layout from "../components/wrappers/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <Preview />
      <TimeLine />
    </Layout>
  );
};

export default IndexPage;

export const Head = ({ data }) => <title>{data.site.siteMetadata.title}</title>;

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
