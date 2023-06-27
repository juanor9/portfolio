import * as React from "react";
import Layout from "../../components/layout";
// import Seo from '../../components/seo'
import {
  Link,
  graphql,
} from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  project__card,
  project__cardContainer,
  project__cardLeft,
  project__cardRight,
  project__cardSkills,
  project__cardButton,
} from "./index.module.scss";
import Seo from "../../components/seo";

const ProjectsPage = ({ data }) => {
  return (
    <Layout>
      <h2>Projects</h2>
      <p>
        Welcome to my Projects Page! Here, you'll find a collection of my web
        development projects. I've got some exciting stuff to show you. So,
        buckle up and let's dive into the world of digital awesomeness!
      </p>
      <section className={project__cardContainer}>
        {data.allMdx.nodes.map((node) => {
          const image = getImage(node.frontmatter.main_image);
          return (
            <article key={node.id} className={project__card}>
              <div className={project__cardLeft}>
                <GatsbyImage image={image} alt={node.frontmatter.title} />
                <h3>{node.frontmatter.title}</h3>
                <Link to={node.frontmatter.slug} className={project__cardButton}>Know more</Link>
              </div>
              <div className={project__cardRight}>
                {node.frontmatter.skills ? (
                  <ul className={project__cardSkills}>
                    {node.frontmatter.skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                ) : null}
                <p>{node.frontmatter.short_intro}</p>
                <p>Posted: {node.frontmatter.date}</p>
              </div>
            </article>
          );
        })}
      </section>
    </Layout>
  );
};
export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        id
        frontmatter {
          date(formatString: "DD, MMMM, YYYY")
          link
          main_image {
            childImageSharp {
              gatsbyImageData
            }
          }
          short_intro
          skills
          slug
          title
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Projects" />

export default ProjectsPage;
