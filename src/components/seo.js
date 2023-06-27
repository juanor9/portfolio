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
      {/* <link rel="canonical" href={siteUrl} /> */}
    </>
  );
};

export default Seo;
