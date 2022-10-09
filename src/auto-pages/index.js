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

export default IndexPage;
