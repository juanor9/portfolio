import * as React from "react";
import PrimaryButton from "../ui/PrimaryButton/PrimaryButton";
import StackButtons from "../StackButtons/StackButtons";
import "./HomeHero.scss"

const HomeHero = () => {
  return (
    <section className="home-hero" id="home-hero">
      <div className="home-hero__container">
        <div className="home-hero__image">
          <picture className="home-hero__picture">
            <img src="/hero-banner-01.svg" alt="" />
          </picture>
        </div>
        <div className="home-hero__content">
          <h1 className="home-hero__title">Juan Camilo Orjuela</h1>
          <h2 className="home-hero__subtitle">Front-end Developer</h2>
          <StackButtons />
          <p className="home-hero__description">Desarrollador Front-End enfocado en accesibilidad, diseño limpio y código sostenible.</p>
          <ul className="home-hero__links">
            <li className="home-hero__link">
              <PrimaryButton text="Ver proyectos" to="/projects" _isLink={true} />
            </li>
            <li className="home-hero__link">
              <PrimaryButton text="Contactarme" to="/contact" _isLink={true} />
            </li>
            <li className="home-hero__link--fullwidth">
              <a
                href="/juan-camilo-orjuela-frontend-dev_cv.pdf"
                className="primary-button"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                Descargar mi CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default HomeHero