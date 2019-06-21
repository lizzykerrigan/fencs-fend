import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header/Header";
import CategoriesPage from "./components/CategoriesPage/CategoriesPage";
import { Router } from "@reach/router";
import AboutPage from "./components/AboutPage/AboutPage";
import HomePage from "./components/HomePage/HomePage";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <HomePage path="/" />
          <CategoriesPage path="/categories" />
          <AboutPage path="/about_us" />
        </Router>
      </div>
    );
  }
}
