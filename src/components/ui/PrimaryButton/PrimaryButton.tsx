import * as React from "react";
import { Link } from "gatsby";
import clsx from "clsx";
import "./PrimaryButton.scss"

interface PrimaryButtonProps {
  children?: React.ReactNode;
  to?: string;
  text?: string;
  _isLink: boolean;
  _isFullWidth?: boolean
  _isDisabled?: boolean
}

const PrimaryButton = (
  {
    children,
    to,
    text,
    _isLink,
    _isFullWidth,
    _isDisabled
  }: PrimaryButtonProps
) => {

  const buttonClasses = clsx("primary-button", {
    fullwidth: _isFullWidth,
    disabled: _isDisabled
  });

  if (_isLink) {
    return (
      <Link to={to || "/"} className={buttonClasses}>
        {children}
        {text}
      </Link>
    )
  }
  return (
    <button type="button" className={buttonClasses}>
      {children}
      {text}
    </button>
  )
}

export default PrimaryButton;