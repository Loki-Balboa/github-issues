import { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { GlobalStyle } from "../../../config/style/GlobalStyle";
import { theme } from "../../../config/style/theme";

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

const Providers: FunctionComponent = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
    <ReactQueryDevtools />
  </QueryClientProvider>
);

export default Providers;
