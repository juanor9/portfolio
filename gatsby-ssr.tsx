import * as React from "react"
import type { GatsbySSR } from "gatsby"

export const onRenderBody: GatsbySSR["onRenderBody"] = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preconnect"
      href="https://fonts.googleapis.com"
      key="preconnect-googleapis"
    />,
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
      key="preconnect-gstatic"
    />,
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Questrial&display=swap"
      rel="stylesheet"
      key="google-fonts"
    />,
  ])
}
