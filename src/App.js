import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header/Header";
import CategoriesPage from "./components/CategoriesPage/CategoriesPage";
import { Router } from "@reach/router";
import AboutPage from "./components/AboutPage/AboutPage";
import HomePage from "./components/HomePage/HomePage";
import SignUp from "./components/SignUp/SignUp";
import Profile from "./components/Profile/Profile";

export default class App extends Component {
  state = {
    loggedInUser: localStorage.getItem("loggedInUser") || null
  };

  loginUser = username => {
    this.setState({ loggedInUser: username });
    localStorage.setItem("loggedInUser", username);
  };

  render() {
    return (
      <div>
        <Header
          client={this.props.client}
          loginUser={this.loginUser}
          loggedInUser={this.state.loggedInUser}
        />
        <Router>
          <HomePage path="/" />
          <CategoriesPage path="/categories" />
          <AboutPage path="/about_us" />
          <SignUp path="/sign_up" loginUser={this.loginUser} />
          <Profile path="/:username" loggedInUser={this.state.loggedInUser} />
        </Router>
      </div>
    );
  }
}
