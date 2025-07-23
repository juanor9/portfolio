import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import HomeHero from "../../components/HomeHero/HomeHero"
import "./HomePage.scss"

const HomePage: React.FC<PageProps> = () => {
  return (
    <> 
    <button 
    type="button" 
    className="home-page__scroll-button"
    >
      ↓
    </button>
    <main className="home-page">
      <HomeHero />
      <section className="home-page__content">
        <article>Skills</article>
        <article>Projects</article>
        <article>Sobre mí</article>
        <article>Contacto</article>
      </section>
    </main>
    <footer className="home-page__footer">
      Footer
    </footer>
    </>
  )
}

export default HomePage

export const Head: HeadFC = () => <title>Juan Camilo Orjuela | Front-end Developer</title>
