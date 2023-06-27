/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Juan Orjuela Web Developer Portfolio`,
    siteUrl: `https://www.juan-dev.co/`,
    description: `Juan Camilo Orjuela web developer portfolio`
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.juan-dev.co/',
        sitemap: 'https://www.juan-dev.co/sitemap-0.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
    },
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
      },
    },
    // {
    //   resolve: 'gatsby-plugin-i18n',
    //   options: {
    //     langKeyDefault: 'en',
    //     useLangKeyLayout: false,
    //     prefixDefault: false,
    //     pagesPaths: [`${__dirname}/src/pages`, `${__dirname}/projects`],
    //   },
    // },
    
  ],
};
