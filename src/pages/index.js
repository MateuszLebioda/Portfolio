import { graphql } from "gatsby";
import React from "react";
import Preview from "../components/views/preview/preview";

const IndexPage = () => {
  return (
    <>
      <Preview />
    </>
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
