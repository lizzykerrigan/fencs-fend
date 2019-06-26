import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "typeface-roboto";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { yellow, purple } from "@material-ui/core/colors";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

const client = new ApolloClient({
  uri: "https://fencs-back-end.herokuapp.com/v1/graphql"
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f46524"
    },
    secondary: {
      main: yellow[500]
    },
    error: {
      main: purple[700]
    }
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(",")
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <App client={client} />
    </ApolloProvider>
  </MuiThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
