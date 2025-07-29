import type { GatsbyConfig } from 'gatsby';

// PASO 1: AÑADE ESTAS LÍNEAS AL INICIO
import dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
// ----------------------------------------

import https from 'https';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `juan-dev-portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'juan-dev-portfolio',
        short_name: 'Portfolio',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#000000',
        display: 'standalone',
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-svgr',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        // Ahora sí, esta variable tendrá valor
        apiURL: process.env.STRAPI_API_URL,
        collectionTypes: ['project'],
        singleTypes: [],
        accessToken: process.env.STRAPI_TOKEN,
        // Y mantenemos la solución para el problema de SSL
        axiosConfig: {
          httpsAgent: new https.Agent({
            rejectUnauthorized: false,
          }),
        },
      },
    },
  ],
};

export default config;