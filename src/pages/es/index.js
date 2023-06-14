import * as React from "react";
import HomeLayout from "../../components/es/homeLayout";
import ContactForm from "../../components/ContactForm";
import { Link, graphql } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";
import { faFilePdf, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  home__section,
  home__buttons,
  home__contentContainer,
  home__hero,
  home__heroText,
  home__heroIntro,
  home__heroCopy,
  home__heroLinkList,
  home__skills,
  home__skillsPicture,
  home__skillsList,
  home__projectsContainer,
  home__projectsCard,
  home__projectsSkills,
  home__projectsButtonsContainer,
  home__projectsButtons,
  home__contact,
  home__contactImage,
} from "../index.module.scss";

const IndexPage = ({ data }) => {
  return (
    <HomeLayout>
      <section className={`${home__section} ${home__hero}`}>
        <div className={home__heroText}>
          <p className={home__heroIntro}>
            Hola, soy Juan Camilo Orjuela, desarrollador web.
          </p>
          <ul className={home__heroLinkList}>
            <li>
              <a
                href="https://github.com/juanor9"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/juan-orjuela/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a
                href="https://www.behance.net/juan_o"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faBehance} />
              </a>
            </li>
            <li>
              <a
                href="https://res.cloudinary.com/dzevguevc/image/upload/v1684151725/Juan_Camilo_Orjuela_en_j342cs.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFilePdf} />
              </a>
            </li>
            <li>
              <a
                href="mailto: orjuela9@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
          </ul>
          <p className={home__heroCopy}>
            Desarrollador web, especializado en front-end y apasionado de la
            creatividad y el diseño 🎨. Me encanta crear experiencias web
            cautivadoras y colaborar con un equipo 🤝. ¡Listo para crear nuevas
            experiencias web! 💻✨
          </p>
        </div>
        <div>
          <StaticImage
            layout="constrained"
            alt="Web developer illustration"
            src="../../images/portfolio-hero.svg"
            placeholder="rgba(180, 180, 180, 0.7)"
          />
        </div>
      </section>
      <div className={home__contentContainer}>
        <section className={home__section}>
          <h2>Habilidades</h2>
          <article className={home__skills}>
            <div className={home__skillsPicture}>
              <StaticImage
                alt="Juan Camilo Orjuela"
                src="https://res.cloudinary.com/dzevguevc/image/upload/q_100,r_1000/v1684179459/IMG_4997_chhb5r.png"
                placeholder="#fff"
              />
            </div>
            <div>
              <ul className={home__skillsList}>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>Python</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>SASS</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Redux Toolkit</li>
                <li>auth0</li>
                <li>Gatsby</li>
                <li>Django</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>GraphQL</li>
                <li>SQLite</li>
                <li>Wordpress</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>Jira</li>
                <li>Scrum</li>
              </ul>
              <article>
                <h3>
                  Construir conexiones tecnológicas: Mi pasión como
                  desarrollador web
                </h3>
                <p>
                  Imagina un mundo en el que la tecnología se convierte en una
                  experiencia transformadora. Como desarrollador web, me sumerjo
                  en este cautivador mundo. Mi enfoque en el desarrollo
                  front-end y mi habilidad para fusionar estética y
                  funcionalidad elevan cada proyecto a un nuevo nivel. Pero más
                  allá de mis habilidades técnicas, mi motivación reside en
                  formar parte de un equipo colaborativo en el que superemos
                  retos y demos vida a ideas innovadoras. Siempre estoy
                  dispuesto a aprender y adaptarme a las últimas tendencias,
                  buscando el crecimiento personal en un entorno que valora la
                  creatividad y el impacto positivo en la vida de las personas.
                </p>
                <Link to="/about" className={home__buttons}>
                Más sobre mí
                </Link>
              </article>
            </div>
          </article>
        </section>
        <section className={home__section}>
          <h2>Proyectos</h2>
          <article className={home__projectsContainer}>
            {data.allMdx.nodes.map((node) => {
              const image = getImage(node.frontmatter.main_image);
              return (
                <article key={node.id} className={home__projectsCard}>
                  <div>
                    <h3>{node.frontmatter.title}</h3>
                    <GatsbyImage image={image} alt={node.frontmatter.title} />
                    {node.frontmatter.skills ? (
                      <ul className={home__projectsSkills}>
                        {node.frontmatter.skills.map((skill, index) => (
                          <li key={index}>{skill}</li>
                        ))}
                      </ul>
                    ) : null}
                    <p>{node.frontmatter.short_intro}</p>
                  </div>
                  <div>
                    <p className={home__projectsButtonsContainer}>
                      <Link
                        to={`/projects/${node.frontmatter.slug}`}
                        className={home__projectsButtons}
                      >
                        Más información
                      </Link>
                      <a
                        className={home__projectsButtons}
                        href={node.frontmatter.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live demo
                      </a>{" "}
                      <a
                        className={home__projectsButtons}
                        href={node.frontmatter.github_link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Repositorio de GitHub
                      </a>
                    </p>
                    <p>Fecha: {node.frontmatter.date}</p>
                  </div>
                </article>
              );
            })}
          </article>
        </section>
        <section className={home__section}>
          <h2>Contacto</h2>
          <div className={home__contact}>
            <article>
              <StaticImage
                className={home__contactImage}
                layout="constrained"
                alt="Coffee cup"
                src="../../images/coffee.svg"
              />
              <p>
              Ponte en contacto y charlemos. Estoy deseando conectar
                contigo. 😊
              </p>
              <a
                href="mailto: orjuela9@gmail.com"
                target="_blank"
                rel="noreferrer"
                className={home__buttons}
              >
                Envíame un correo electrónico
              </a>
            </article>
            <article>
              <p>O... puedes utilizar este formulario para iniciar una conversación.</p>
              <ContactForm />
            </article>
          </div>
        </section>
      </div>
    </HomeLayout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }, limit: 4) {
      nodes {
        id
        frontmatter {
          date(formatString: "DD, MMMM, YYYY")
          github_link
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

export default IndexPage;

export const Head = () => <title>Inicio</title>;
