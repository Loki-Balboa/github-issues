import React, { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../../../config/style/GlobalStyle";
import { theme } from "../../../config/style/theme";

const Providers: FunctionComponent = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default Providers;
