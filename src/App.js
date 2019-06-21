import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header/Header";
import CategoriesPage from "./components/CategoriesPage/CategoriesPage";
import { Router } from "@reach/router";
import AboutPage from "./components/AboutPage/AboutPage";
import HomePage from "./components/HomePage/HomePage";

export default class App extends Component {
  state = {
    loggedInUser: null
  };

  loginUser = username => {
    this.setState({ loggedInUser: username });
  };

  render() {
    return (
      <div>
        <Header client={this.props.client} loginUser={this.loginUser} />
        <Router>
          <HomePage path="/" />
          <CategoriesPage path="/categories" />
          <AboutPage path="/about_us" />
        </Router>
      </div>
    );
  }
}
