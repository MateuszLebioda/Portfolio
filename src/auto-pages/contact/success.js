import { graphql } from "gatsby";
import React from "react";
import AvatarPage from "../../components/views/avatarPage/avatarPage";
import Layout from "../../components/wrappers/Layout";

const ContactSuccess = () => {
  return (
    <Layout>
      <AvatarPage
        header="Dzięki za kontakt"
        message="Odezwę się najszybciej jak się da"
      />
    </Layout>
  );
};

export default ContactSuccess;

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
