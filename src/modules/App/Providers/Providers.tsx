import { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { GlobalStyle } from "../../../config/style/GlobalStyle";
import { theme } from "../../../config/style/theme";

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GITHUB_API_URL,
});

const authLink = setContext((_, { headers }) => {
  const token = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const Providers: FunctionComponent = ({ children }) => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  </ApolloProvider>
);

export default Providers;
