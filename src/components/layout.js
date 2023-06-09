import * as React from "react";
import { Link } from "gatsby";
import {
  header,
  header__homeLink,
  header__navbar,
  contentContainer,
  contentContainer__content,
} from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <header className={header}>
        <div>
          <h1>
            <Link to="/" className={header__homeLink}>
              Juan Camilo Orjuela
            </Link>
          </h1>
        </div>
        <nav>
          <ul className={header__navbar}>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
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
          <p>© 2023, Built and designed by Juan Camilo Orjuela</p>
        </section>
        <section>
          <p>Links</p>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </section>
        <section>
          <p>Social Media</p>
          <ul>
            <li>
              <a
                href="https://github.com/juanor9"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/juan-orjuela/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://www.behance.net/juan_o"
                target="_blank"
                rel="noreferrer"
              >
                Behance
              </a>
            </li>
          </ul>
        </section>
      </footer>
    </div>
  );
};

export default Layout;
