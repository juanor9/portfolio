import * as React from "react";
import Layout from "../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";
import { faFilePdf, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  home__section,
  home__hero,
  home__heroText,
  home__heroIntro,
  home__heroLinkList,
  home__contentContainer,
  home__skillList,
} from "./index.module.scss";

const IndexPage = () => {
  return (
    <Layout>
      <section className={`${home__section} ${home__hero}`}>
        <div className={home__heroText}>
          <p className={home__heroIntro}>
            Hi, I'm Juan Camilo Orjuela, web developer
          </p>
          <ul className={home__heroLinkList}>
            <li>
              <a href="https://github.com/juanor9" target="_blank" rel="noreferrer">
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
              <a href="https://www.behance.net/juan_o" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faBehance} /></a>
              
            </li>
            <li>
              <FontAwesomeIcon icon={faFilePdf} />
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
            </li>
          </ul>
        </div>
        <div></div>
      </section>
      <div className={home__contentContainer}>
        <section className={home__section}>
          <h2>My Skills</h2>
          <ul className={home__skillList}>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>Python</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SASS</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Gatsby</li>
            <li>Django</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>GraphQL</li>
            <li>SQLite</li>
            <li>Wordpress</li>
          </ul>
        </section>
        <section className={home__section}>
          <h2>Projects</h2>
        </section>
        <section className={home__section}>
          <h2>Contact</h2>
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
