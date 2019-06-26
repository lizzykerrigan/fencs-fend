import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header/Header";
import CategoriesPage from "./components/CategoriesPage/CategoriesPage";
import { Router } from "@reach/router";
import AboutPage from "./components/AboutPage/AboutPage";
import HomePage from "./components/HomePage/HomePage";
import SignUp from "./components/SignUp/SignUp";
import SingleImagePage from "./components/imagePage/SingleImagePage";
import Profile from "./components/Profile/Profile";
import UploadModel from "./components/UploadModel/UploadModel";

export default class App extends Component {
  state = {
    loggedInUser: localStorage.getItem("loggedInUser") || null
  };

  loginUser = username => {
    this.setState({ loggedInUser: username });
    localStorage.setItem("loggedInUser", username);
  };

  logoutUser = e => {
    e.preventDefault();
    this.setState({ loggedInUser: null });
    localStorage.removeItem("loggedInUser");
  };

  render() {
    return (
      <div>
        {/* <ModelCard /> */}
        <Header
          client={this.props.client}
          loginUser={this.loginUser}
          loggedInUser={this.state.loggedInUser}
          logoutUser={this.logoutUser}
        />
        <Router>
          <HomePage path="/" />
          <CategoriesPage path="/categories" />
          <SingleImagePage
            client={this.props.client}
            path="/images/:image_id"
          />
          <AboutPage path="/about_us" />
          <SignUp path="/sign_up" loginUser={this.loginUser} />
          <Profile path="/:username" loggedInUser={this.state.loggedInUser} />
          <UploadModel path="/upload_model" />
        </Router>
      </div>
    );
  }
}
