import * as React from "react";
import Layout from "../../../components/layout";
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
} from "../index.module.scss";

const ProjectsPage = ({ data }) => {
  return (
    <Layout>
      <h2>Proyectos</h2>
      <p>
      Bienvenido a mi página de proyectos. Aquí, encontrarás una colección de mis
        proyectos de desarrollo web. Tengo algunas cosas emocionantes que mostrarte. Así que,
        ¡abróchate el cinturón y vamos a sumergirnos en el mundo de la maravilla digital!
      </p>
      <section className={project__cardContainer}>
        {data.allMdx.nodes.map((node) => {
          const image = getImage(node.frontmatter.main_image);
          return (
            <article key={node.id} className={project__card}>
              <div className={project__cardLeft}>
                <GatsbyImage image={image} alt={node.frontmatter.title} />
                <h3>{node.frontmatter.title}</h3>
                <Link to={node.frontmatter.slug} className={project__cardButton}>Más información</Link>
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
                <p>Fecha: {node.frontmatter.date}</p>
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

export const Head = () => <title>Home Page</title>;

export default ProjectsPage;
