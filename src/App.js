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
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

const THEME = createMuiTheme({
  palette: {
    list: ["primary", "secondary", "error"],
    primary: {
      id: 0,
      main: "#f46524",
      light: "#63ccff",
      textColor: "#000000",
      backgroundColor: "#ffffff"
    },
    secondary: {
      id: 1,
      main: "#f46524",
      light: "#ff5983",
      textColor: "#ffffff",
      backgroundColor: "#000000"
    },
    error: {
      id: 2,
      main: "#bb002f",
      light: "#f9fbe7"
    }
  },
  typography: {
    fontFamily: [
      "IBM Plex Sans",
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

export default class App extends Component {
  state = {
    loggedInUser: localStorage.getItem("loggedInUser") || null,
    activePaletteId: 0,
    darkMode: false
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

  get activePaletteName() {
    return THEME.palette.list[this.state.activePaletteId];
  }

  get activePalette() {
    return THEME.palette[this.activePaletteName];
  }

  changePalette = e => {
    this.setState(prevState => {
      if (prevState.darkMode) {
        return {
          activePaletteId: THEME.palette.primary.id,
          darkMode: false
        };
      } else {
        return {
          activePaletteId: THEME.palette.secondary.id,
          darkMode: true
        };
      }
    });
  };

  render() {
    console.log(this.activePalette);
    return (
      <MuiThemeProvider theme={THEME}>
        <div
          style={{
            backgroundColor: this.activePalette.backgroundColor,
            color: this.activePalette.textColor
          }}
        >
          {/* <ModelCard /> */}
          <Header
            client={this.props.client}
            loginUser={this.loginUser}
            loggedInUser={this.state.loggedInUser}
            logoutUser={this.logoutUser}
            changePalette={this.changePalette}
            darkMode={this.state.darkMode}
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
      </MuiThemeProvider>
    );
  }
}
