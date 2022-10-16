module.exports = {
  siteMetadata: {
    title: `Mateusz Lebioda`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/icon/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "background",
        path: `${__dirname}/src/assets/images/background`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "logo",
        path: `${__dirname}/src/assets/images/logo`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "icon",
        path: `${__dirname}/src/assets/images/icon`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "timeLine",
        path: `${__dirname}/src/assets/images/timeLine`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "logoTech",
        path: `${__dirname}/src/assets/images/logoTech`,
      },
    },
  ],
};
