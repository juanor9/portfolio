/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `projects`,
        path: `${__dirname}/projects`,
      }
    },
    // {
    //   resolve: `gatsby-plugin-i18n`,
    //   options: {
    //     langKeyDefault: "en",
    //     langKeyForNull: "en",
    //     prefixDefault: false,
    //     useLangKeyLayout: false,
    //     pagesPaths: ["/src/pages"],
    //   },
    // },
  ],
};
