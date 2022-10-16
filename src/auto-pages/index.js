import React from "react";
import Preview from "../components/views/preview/preview";
import { Seo } from "../components/wrappers/seo";

const IndexPage = () => {
  return <Preview social jobs />;
};

export const Head = () => <Seo />;

export default IndexPage;
