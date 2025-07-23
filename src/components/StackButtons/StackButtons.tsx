import * as React from "react";
import { Link } from "gatsby";
import clsx from "clsx";
import "./StackButtons.scss";
import { ReactComponent as ReactLogo } from "../../icons/react-logo.svg";
import { ReactComponent as TypeScriptLogo } from "../../icons/typescript-logo.svg";
import { ReactComponent as SassLogo } from "../../icons/sass-logo.svg";
import { ReactComponent as A11yLogo } from "../../icons/accessibility-logo.svg";
import { ReactComponent as GraphQlLogo } from "../../icons/graphql-logo.svg";

const StackButtons = () => {
  return (
    <ul 
    className="stack-buttons"
    aria-label="Stack tecnológico"
    >
      <li 
      className="stack-buttons__item"
      aria-label="React"
      >
        <Link to="/projects" className="stack-buttons__link">
          <ReactLogo className="stack-buttons__icon" />
        </Link>
      </li>
      <li 
      className="stack-buttons__item"
      aria-label="TypeScript"
      >
        <Link to="/projects" className="stack-buttons__link">
          <TypeScriptLogo className="stack-buttons__icon" />
        </Link>
      </li>
      <li 
      className="stack-buttons__item"
      aria-label="Sass"
      >
        <Link to="/projects" className="stack-buttons__link">
          <SassLogo className="stack-buttons__icon" />
        </Link>
      </li>
      <li 
      className="stack-buttons__item"
      aria-label="Accesibilidad (WCAG 2.2)"
      >
        <Link to="/projects" className="stack-buttons__link">
          <A11yLogo className="stack-buttons__icon" />
        </Link>
      </li>
      <li 
      className="stack-buttons__item"
      aria-label="GraphQL"
      >
        <Link to="/projects" className="stack-buttons__link">
          <GraphQlLogo className="stack-buttons__icon" />
        </Link>
      </li>
    </ul>
  )
}

export default StackButtons;