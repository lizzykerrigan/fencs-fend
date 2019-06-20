import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header/Header";
import CategoriesPage from "./components/CategoriesPage/CategoriesPage";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <CategoriesPage />
      </div>
    );
  }
}
