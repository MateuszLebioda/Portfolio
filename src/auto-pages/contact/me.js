import React from "react";
import ContactMe from "../../components/views/contactMe";
import Layout from "../../components/wrappers/Layout";

const ContactMePage = ({ pageContext }) => (
  <Layout {...pageContext}>
    <ContactMe />
  </Layout>
);

export const Head = props => {
  return <title>{"Mateusz Lebioda"}</title>;
};

export default ContactMePage;
