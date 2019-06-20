import "./App.css";
import React, { Component } from "react";
import Header from "./components/header/Header";
import CategoryCard from "./components/CardComponents/CategoryCard";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <CategoryCard />
      </div>
    );
  }
}
