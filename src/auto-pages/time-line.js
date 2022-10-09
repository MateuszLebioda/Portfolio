import React from "react";
import TimeLine from "../components/views/timeLine/timeLine";
import Layout from "../components/wrappers/Layout";

const TimeLinePage = ({ pageContext }) => {
  return (
    <Layout {...pageContext}>
      <TimeLine />
    </Layout>
  );
};

export default TimeLinePage;
