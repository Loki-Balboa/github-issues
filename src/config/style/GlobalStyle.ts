import { createGlobalStyle, css } from "styled-components";

import RobotoWoff2 from "./fonts/roboto-condensed-v19-latin-regular.woff2";
import RobotoWoff from "./fonts/roboto-condensed-v19-latin-regular.woff";

export const GlobalStyle = createGlobalStyle`${css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Roboto Condensed";
  }

  @font-face {
    font-family: "Roboto Condensed";
    src: url(${RobotoWoff2}) format("woff2"), url(${RobotoWoff}) format("woff");
  }
`}
`;
