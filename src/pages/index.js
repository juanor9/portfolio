import * as React from "react";
import HomeLayout from "../components/homeLayout";
import ContactForm from "../components/ContactForm";
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
} from "./index.module.scss";
import Seo from "../components/seo";

const IndexPage = ({ data }) => {
  return (
    <HomeLayout>
      <section className={`${home__section} ${home__hero}`}>
        <div className={home__heroText}>
          <p className={home__heroIntro}>
            Hi, I'm Juan Camilo Orjuela, web developer.
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
            Web Developer, specializing in front-end and passionate about
            creativity and design 🎨. I thrive on creating captivating web
            experiences and collaborating with a team 🤝. Ready to craft new web
            experiences! 💻✨
          </p>
        </div>
        <div>
          <StaticImage
            layout="constrained"
            alt="Web developer illustration"
            src="../images/portfolio-hero.svg"
            placeholder="rgba(180, 180, 180, 0.7)"
            title="Homepage hero image"
          />
        </div>
      </section>
      <div className={home__contentContainer}>
        <section className={home__section}>
          <h2>My Skills</h2>
          <article className={home__skills}>
            <div className={home__skillsPicture}>
              <StaticImage
                alt="Juan Camilo Orjuela"
                src="https://res.cloudinary.com/dzevguevc/image/upload/q_100,r_1000/v1684179459/IMG_4997_chhb5r.png"
                placeholder="#fff"
                title="Juan Camilo Orjuela"
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
                  Building Technological Connections: My Passion as Web
                  Developer
                </h3>
                <p>
                  Imagine a world where technology becomes a transformative
                  experience. As a web developer, I dive into this captivating
                  world. My focus on front-end development and my ability to
                  merge aesthetics and functionality elevate every project. But
                  beyond my technical skills, my motivation lies in being part
                  of a collaborative team where we overcome challenges and bring
                  innovative ideas to life. I am always ready to learn and adapt
                  to the latest trends, seeking personal growth in an
                  environment that values creativity and positive impact on
                  people's lives.
                </p>
                <Link to="/about" className={home__buttons}>
                  More about me
                </Link>
              </article>
            </div>
          </article>
        </section>
        <section className={home__section}>
          <h2>Projects</h2>
          <article className={home__projectsContainer}>
            {data.allMdx.nodes.map((node) => {
              const image = getImage(node.frontmatter.main_image);
              return (
                <article key={node.id} className={home__projectsCard}>
                  <div>
                    <h3>{node.frontmatter.title}</h3>
                    <GatsbyImage image={image} alt={node.frontmatter.title} title={node.frontmatter.title} />
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
                        Know more
                      </Link>
                      {node.frontmatter.link ? (
                        <a
                          className={home__projectsButtons}
                          href={node.frontmatter.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live demo
                        </a>
                      ) : null}

                      <a
                        className={home__projectsButtons}
                        href={node.frontmatter.github_link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub repository
                      </a>
                    </p>
                    <p>Posted: {node.frontmatter.date}</p>
                  </div>
                </article>
              );
            })}
          </article>
        </section>
        <section className={home__section}>
          <h2>Contact</h2>
          <div className={home__contact}>
            <article>
              <StaticImage
                className={home__contactImage}
                layout="constrained"
                alt="Coffee cup"
                src="../images/coffee.svg"
                title="coffee cup"
              />
              <p>
                Reach out to me and let's chat! Looking forward to connecting
                with you. 😊
              </p>
              <a
                href="mailto: orjuela9@gmail.com"
                target="_blank"
                rel="noreferrer"
                className={home__buttons}
              >
                Send me an email
              </a>
            </article>
            <article>
              <p>Or... you could just use this form to start a conversation.</p>
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
    allMdx(
      sort: { frontmatter: { date: DESC } }
      limit: 4
      filter: { frontmatter: { lang: { eq: "en" } } }
    ) {
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

export const Head = () => (
  <>
    <Seo title="Home Page" />
    <html lang="en" />
  </>
);
