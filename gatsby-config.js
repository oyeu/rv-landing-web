module.exports = {
  siteMetadata: {
    title: "RV landing frontend",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "rv-staffing-landing",
        dataset: "",
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
