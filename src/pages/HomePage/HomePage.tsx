import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import HomeHero from "../../components/HomeHero/HomeHero"
import Skills from "../../components/Skills/Skills"
import { useProjects } from "../../hooks/useProjects";
import ProjectList from "../../components/ProjectsHome/ProjectsHome"
import "./HomePage.scss"

const HomePage: React.FC<PageProps> = () => {

  const projects = useProjects();
  
  return (
    <>
      <main className="home-page">
        <HomeHero />
        <section className="home-page__content">
          <Skills />
          <ProjectList projects={projects} />
          <div>
            <article>
              <h3>Sobre mí</h3>
            </article>
            <article>
              <h3>Contacto</h3>
            </article>
          </div>
        </section>
      </main>
      <footer className="home-page__footer">
        Footer
      </footer>
      <button
        type="button"
        className="home-page__scroll-button"
      >
        ↓
      </button>
    </>
  )
}

export default HomePage

export const Head: HeadFC = () => <title>Juan Camilo Orjuela | Front-end Developer</title>
