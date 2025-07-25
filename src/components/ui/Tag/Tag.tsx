import * as React from "react";
import { Link } from "gatsby";
import clsx from "clsx";
import "./Tag.scss"

interface TagProps {
  _isLink: boolean,
  link?: string,
  children?: React.ReactNode,
  text?: string
}

const Tag = (
  {
    _isLink,
    link, 
    children, 
    text
  }: TagProps
) => {


  if (_isLink) {
    return (
      <li className="tag">
        <Link to={link || "/"} className="tag__link">
          {children}
          {text}
        </Link>
      </li>
    )
  }

  return (
    <li className="tag">
      {children}
          {text}
    </li>
  )
}

export default Tag;