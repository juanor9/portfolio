import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import HomeHero from "../../components/HomeHero/HomeHero"
import "./HomePage.scss"

const HomePage: React.FC<PageProps> = () => {
  return (
    <main className="home-page">
      <HomeHero />
    </main>
  )
}

export default HomePage

export const Head: HeadFC = () => <title>Juan Camilo Orjuela | Front-end Developer</title>
