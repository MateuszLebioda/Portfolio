import React from "react";
import AvatarPage from "../../components/views/avatarPage/avatarPage";
import Layout from "../../components/wrappers/Layout";
import { notTranslationSiteData } from "../../data/string-data";

const Error = ({ pageContext }) => {
  return (
    <Layout {...pageContext}>
      <AvatarPage
        header="Ups.. Coś poszło nie tak"
        message={
          <>
            <div>
              Nie udało się nawiązać kontaktu. Spróbuj ponownie później lub
              napisz do mnie bezpośrednio na
            </div>
            <div className="mt-3">{notTranslationSiteData.email}</div>
          </>
        }
      />
    </Layout>
  );
};

export default Error;

export const Head = props => {
  return <title>{"Mateusz Lebioda"}</title>;
};
