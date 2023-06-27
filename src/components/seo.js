import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Seo = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `);

  return (
    <>
      <title>
        {data.site.siteMetadata.title} | {title}
      </title>
      <meta
        name="description"
        content="I'm Juan Orjuela, a passionate front-end web developer specializing in the MERN stack. Offering full-stack development and UI/UX design services."
      />
      <meta
        name="keywords"
        content="web developer, front-end, MERN stack, full-stack development, UI/UX design, responsibility, creativity, graphic design, JavaScript, TypeScript, MongoDB, Express, React, Node"
      />
      <meta name="author" content="Juan Orjuela" />
      <meta name="language" content="en" />
      <meta name="robots" content="index, follow" />
      <meta name="robots" content="all" />
      <link rel="canonical" href={data.site.siteMetadata.siteUrl} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;0,900;1,300;1,400;1,600&display=swap"
        rel="stylesheet"
      />
    </>
  );
};

export default Seo;
