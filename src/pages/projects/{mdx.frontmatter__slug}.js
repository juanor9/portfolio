import * as React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Project = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.main_image);
  console.log("🚀 ~ file: {mdx.frontmatter__slug}.js:8 ~ Project ~ image:", image)
  console.log(data);
  console.log(children)
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <h2>{data.mdx.frontmatter.title}</h2>
      <p>{data.mdx.frontmatter.date}</p>

      <GatsbyImage image={image} alt={data.mdx.frontmatter.title} />
      {children}
    </Layout>
  );
};
export const query = graphql`
  query ($id: String) {
  mdx(id: {eq: $id}) {
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

export const Head = () => <title>Home Page</title>;

export default Project;