import * as React from "react";
import PrimaryButton from "../ui/PrimaryButton/PrimaryButton";
import "./HomeHero.scss"

const HomeHero = () => {
  return (
    <section className="home-hero">
      <div className="home-hero__image">
        <picture className="home-hero__picture">
          <img src="" alt="" />
        </picture>
      </div>
      <div className="home-hero__content">
        <h1 className="home-hero__title">Juan Camilo Orjuela</h1>
        <h2 className="home-hero__subtitle">Front-end Developer</h2>
        <p className="home-hero__description">Desarrollador Front-End enfocado en accesibilidad, diseño limpio y código mantenible.</p>
        <ul className="home-hero__links">
          <li className="home-hero__link">
            <PrimaryButton text="Ver proyectos" to="/projects" _isLink={true} />
            </li>
          <li className="home-hero__link">
            <PrimaryButton text="Contactarme" to="/contact" _isLink={true}></PrimaryButton>
            </li>
          <li className="home-hero__link">
            <PrimaryButton text="Descargar mi CV" to="/cv" _isLink={true}></PrimaryButton>
            </li>
        </ul>
      </div>
    </section>
  )
}

export default HomeHero