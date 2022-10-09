import React from "react";
import AvatarPage from "../../components/views/avatarPage/avatarPage";
import Layout from "../../components/wrappers/Layout";

const ContactSuccess = ({ pageContext }) => {
  return (
    <Layout {...pageContext}>
      <AvatarPage
        header="Dzięki za kontakt"
        message="Odezwę się najszybciej jak się da"
      />
    </Layout>
  );
};

export default ContactSuccess;

export const Head = props => {
  return <title>{"Mateusz Lebioda"}</title>;
};
