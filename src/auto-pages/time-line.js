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

export const Head = props => {
  return <title>{"Mateusz Lebioda"}</title>;
};
export default TimeLinePage;
