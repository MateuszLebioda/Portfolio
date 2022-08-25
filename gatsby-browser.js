const React = require("react");
const Layout = require("./src/components/wrappers/Layout").default;

exports.wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
