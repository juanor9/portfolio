import * as React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import { post__date, project } from "./project.module.scss";
import Seo from "../../components/seo";

const Project = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title} className={project}>
      <h2>{data.mdx.frontmatter.title}</h2>
      <p className={post__date}>Posted on: {data.mdx.frontmatter.date}</p>
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
        main_image {
          childrenImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head = ({ data }) => <Seo title={`${data.mdx.frontmatter.title}`} />

export default Project;
