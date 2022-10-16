module.exports = {
  pages: [
    {
      path: "/",
      component: "src/auto-pages/index.js",
      head: "",
    },
    {
      path: "/about-me",
      component: "src/auto-pages/about-me.js",
    },
    {
      path: "/projects",
      component: "src/auto-pages/projects.js",
    },
    {
      path: "/time-line",
      component: "src/auto-pages/time-line.js",
    },
    {
      path: "/contact/me",
      component: "src/auto-pages/contact/me.js",
    },
    {
      path: "/contact/error",
      component: "src/auto-pages/contact/error.js",
    },
    {
      path: "/contact/success",
      component: "src/auto-pages/contact/success.js",
    },
    {
      path: "/404",
      component: "src/auto-pages/404.js",
    },
  ],
};
