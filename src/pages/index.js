import * as React from "react";
import HomeLayout from "../components/homeLayout";
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";
import { faFilePdf, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  home__section,
  home__contentContainer,
  home__hero,
  home__heroText,
  home__heroIntro,
  home__heroCopy,
  home__heroLinkList,
  home__skills,
  home__skillsPicture,
  home__skillsList
} from "./index.module.scss";

const IndexPage = ({data}) => {
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
              <Link to="/contact">
                <FontAwesomeIcon icon={faEnvelope} />
              </Link>
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
              <h3>Building Technological Connections: My Passion as Web Developer</h3>
              <p>Imagine a world where technology becomes a transformative experience. As a web developer, I dive into this captivating world. My focus on front-end development and my ability to merge aesthetics and functionality elevate every project. But beyond my technical skills, my motivation lies in being part of a collaborative team where we overcome challenges and bring innovative ideas to life. I am always ready to learn and adapt to the latest trends, seeking personal growth in an environment that values creativity and positive impact on people's lives.</p>
              <Link to="/about">More about me</Link>
              </article>
              
            </div>
          </article>
        </section>
        <section className={home__section}>
          <h2>Projects</h2>
          <article>
          {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>{node.excerpt}</p>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      }
          </article>
        </section>
        <section className={home__section}>
          <h2>Contact</h2>
        </section>
      </div>
    </HomeLayout>
  );
};

export const query = graphql`
query {
  allMdx(sort: {frontmatter: {date: DESC}}) {
    nodes {
      excerpt
      id
      frontmatter {
        date
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        slug
        title
      }
    }
  }
}
`

export default IndexPage;

export const Head = () => <title>Home Page</title>;
