import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import HomeHero from "../../components/Home/HomeHero/HomeHero"
import Skills from "../../components/Home/Skills/Skills"
import { useProjects } from "../../hooks/useProjects";
import ProjectsHome from "../../components/Home/ProjectsHome/ProjectsHome"
import About from "../../components/Home/About/About";
import "./HomePage.scss"
import Contact from "../../components/Home/Contact/Contact";
import Footer from "../../components/Footer/Footer";

const HomePage: React.FC<PageProps> = () => {

  const projects = useProjects();
  
  return (
    <>
      <main className="home-page">
        <HomeHero />
        <section className="home-page__content">
          <Skills />
          <ProjectsHome projects={projects} />
          <div className="home-page__about-contact">
            <About />
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
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
