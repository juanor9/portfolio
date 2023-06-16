import * as React from "react";
import Layout from "../../../components/es/layout";
import { graphql } from "gatsby";
import { post__date, project } from "../project.module.scss";

const Project = ({ data, children }) => {
  console.log("🚀 ~ file: {mdx.frontmatter__slug}.js:7 ~ Project ~ data:", data)
  return (
    <Layout pageTitle={data.mdx.frontmatter.title} className={project}>
      <h2>{data.mdx.frontmatter.title}</h2>
      <p className={post__date}>Fecha: {data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  );
};
export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        skills
        date
        lang
        main_image {
          childrenImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head = () => <title>Home Page</title>;

export default Project;
