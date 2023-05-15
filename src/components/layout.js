import * as React from "react";
import { header, header__navbar } from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <header className={header}>
        <div>
          <h1>Juan Camilo Orjuela</h1>
        </div>
        <nav>
          <ul className={header__navbar}>
            <li>About</li>
            <li>Projects</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <section>
          <p><b>Juan Camilo Orjuela</b></p>
          <p>© 2023, Built and designed by Juan Camilo Orjuela</p>
        </section>
        <section>
          <p>Links</p>
          <ul>
            <li>About</li>
            <li>Projects</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </section>
      </footer>
    </div>
  );
};

export default Layout;
