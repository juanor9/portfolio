import * as React from "react";
import { Link } from "gatsby";
import {
  header,
  header__homeLink,
  header__navbar,
  contentContainer,
  contentContainer__content,
} from "../layout.module.scss";

const Layout = ({ children }) => {
  const esPath ="/es"
  return (
    <div>
      <header className={header}>
        <div>
          <h1>
            <Link to={`${esPath}/`} className={header__homeLink}>
              Juan Camilo Orjuela
            </Link>
          </h1>
        </div>
        <nav>
          <ul className={header__navbar}>
            <li>
              <Link to={`${esPath}/about`}>Sobre mí</Link>
            </li>
            <li>
              <Link to={`${esPath}/projects`}>Proyectos</Link>
            </li>
            <li>
              <Link to={`${esPath}/contact`}>Contacto</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={contentContainer}>
        <div className={contentContainer__content}>{children}</div>
      </main>
      <footer>
        <section>
          <p>
            <b>Juan Camilo Orjuela</b>
          </p>
          <p>© 2023, Desarrollado y diseñado por Juan Camilo Orjuela</p>
        </section>
        <section>
          <p>Links</p>
          <ul>
          <li>
              <Link to={`${esPath}/about`}>Sobre mí</Link>
            </li>
            <li>
              <Link  to={`${esPath}/projects`}>Proyectos</Link>
            </li>
            <li>
              <Link to={`${esPath}/contact`}>Contacto</Link>
            </li>
          </ul>
        </section>
        <section>
          <p>Social Media</p>
          <ul>
            <li>
              <Link to="/">GitHub</Link>
            </li>
            <li>
              <Link to="/">Linkedin</Link>
            </li>
            <li>
              <Link to="/">Behance</Link>
            </li>
          </ul>
        </section>
      </footer>
    </div>
  );
};

export default Layout;
