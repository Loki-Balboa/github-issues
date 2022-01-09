import { createGlobalStyle, css } from "styled-components";

import RobotoWoff2 from "./fonts/roboto-v29-latin-500.woff2";
import RobotoWoff from "./fonts/roboto-v29-latin-500.woff";

export const GlobalStyle = createGlobalStyle`${css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Roboto";
    font-weight: 500;
  }

  @font-face {
    font-family: "Roboto";
    font-weight: 500;
    src: url(${RobotoWoff2}) format("woff2"), url(${RobotoWoff}) format("woff");
  }
`}
`;
