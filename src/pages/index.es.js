import * as React from "react"
import Layout from "../components/layout"
import {
  home__section,
  home__hero,
} from './index.module.scss'

const IndexPage = () => {
  return (
    <Layout>
      <section className={`${home__section} ${home__hero}`}>
        <p>Hola, soy Juan Camilo Orjuela, desarrollador web</p>
        <div>
          <ul>
            <li>
              Github
            </li>
            <li>
              Linkedin
            </li>
            <li>
              Behance
            </li>
            <li>
              CV
            </li>
            <li>
              Contact
            </li>
          </ul>
        </div>
      </section>
      <section className={home__section}>
        <h2>My Skills</h2>
        <ul>
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
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
