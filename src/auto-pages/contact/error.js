import { graphql } from "gatsby";
import React from "react";
import AvatarPage from "../../components/views/avatarPage/avatarPage";
import Layout from "../../components/wrappers/Layout";
import footerData from "../../data/footer-data";

const Error = () => {
  return (
    <Layout>
      <AvatarPage
        header="Ups.. Coś poszło nie tak"
        message={
          <>
            <div>
              Nie udało się nawiązać kontaktu. Spróbuj ponownie później lub
              napisz do mnie bezpośrednio na
            </div>
            <div className="mt-3">{footerData.contact.email}</div>
          </>
        }
      />
    </Layout>
  );
};

export default Error;

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
