import * as React from "react";
import { Link } from "gatsby";
import { header, 
  header__navbar,
  header__homeLink,
 } from "./layout.module.scss";

const HomeLayout = ({ children }) => {
  return (
    <div>
       <header className={header}>
        <div>
          <h1><Link to="/" className={header__homeLink}>Juan Camilo Orjuela</Link></h1>
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
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
{children}
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
              <Link to="/blog">Blog</Link>
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

export default HomeLayout;
