import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header/Header";
import CategoriesPage from "./components/CategoriesPage/CategoriesPage";
import { Router } from "@reach/router";
import AboutPage from "./components/AboutPage/AboutPage";
import ModelCard from "./components/3dModel/3dModelCard";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ModelCard />
        <Router>
          <CategoriesPage path="/categories" />
          <AboutPage path="/about_us" />
        </Router>
      </div>
    );
  }
}
