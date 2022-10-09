import React from "react";
import Preview from "../components/views/preview/preview";
import Layout from "../components/wrappers/Layout";

const IndexPage = ({ pageContext }) => {
  return (
    <Layout {...pageContext}>
      <Preview />
    </Layout>
  );
};

export const Head = props => {
  return <title>{"Mateusz Lebioda"}</title>;
};

export default IndexPage;
