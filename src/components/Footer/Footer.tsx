import * as React from "react";
import "./Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__section">
            <h3 className="footer__title">Juan Camilo Orjuela</h3>
            <p className="footer__subtitle">Frontend Developer</p>
          </div>
          
          <div className="footer__section">
            <h4 className="footer__heading">Connect</h4>
            <ul className="footer__links">
              <li>
                <a 
                  href="https://github.com/juanor9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/in/juan-camilo-orjuela" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="mailto:hello@juancamiloorjuela.dev" 
                  className="footer__link"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__section">
            <h4 className="footer__heading">Resources</h4>
            <ul className="footer__links">
              <li>
                <a href="/projects" className="footer__link">Projects</a>
              </li>
              <li>
                <a href="/contact" className="footer__link">Contact</a>
              </li>
              <li>
                <a 
                  href="/juan-camilo-orjuela-frontend-dev_cv.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Juan Camilo Orjuela. Built with React & Gatsby.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;