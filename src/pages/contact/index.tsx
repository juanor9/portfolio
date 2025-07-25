import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
// import HomeHero from "../../components/HomeHero/HomeHero"
// import "./HomePage.scss"

const Contact: React.FC<PageProps> = () => {
  return (
    <>
      <h2>Contacto</h2>
    </>
  )
}

export default Contact;

export const Head: HeadFC = () => <title>Juan Camilo Orjuela | Contacto</title>;
