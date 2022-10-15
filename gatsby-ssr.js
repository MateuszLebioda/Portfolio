const React = require("react");
const { default: Layout } = require("./src/components/wrappers/Layout");

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props.pageContext}>{element}</Layout>;
};
