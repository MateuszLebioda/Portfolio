import React from "react";
import { useSiteMetadata } from "../../hook/useSiteMetadata";

export const Seo = ({ title, children }) => {
  const { title: defaultTitle } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
  };

  return (
    <>
      <title>{seo.title}</title>
      {children}
    </>
  );
};
