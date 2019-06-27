import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "typeface-roboto";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

const client = new ApolloClient({
  uri: "https://fencs-back-end.herokuapp.com/v1/graphql"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App client={client} />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
