import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "@reach/router";
import LoginBox from "../Login/LoginBox";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const AdapterLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} />
));

const styles = theme => ({
  loggedIn: {
    marginTop: 11,
    marginRight: 10
  },
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  grow: {
    minHeight: 100,
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    transition: "0.4s",
    display: "block",
    fontSize: "5vw",
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  },

  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "flex"
  },
  // logo: {
  //   paddingLeft: "30px"
  // },
  darkHeader: {
    backgroundColor: "black",
    color: "white"
  },
  navbar: {
    transition: "0.2s",
    position: "fixed"
  },
  navbarScroll: {
    transition: "0.2s",
    position: "fixed",
    backgroundColor: "white",
    boxShadow: "none",
    border: 10,
    borderBottom: "1px solid rgb(0, 0, 0)"
  },
  titleScroll: {
    transition: "0.2s",
    display: "block",
    fontSize: "5vw",
    color: "#000000",
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  },
  menuButtonScroll: {
    marginRight: theme.spacing(2),
    color: "#000000",
    transition: "0.4s",
    "&:hover": {
      backgroundColor: "#f57c00"
    }
  },
  logoutScoll: {
    transition: "0.4s",
    "&:hover": {
      backgroundColor: "#f57c00"
    }
  },
  loggedInScroll: {
    marginTop: 11,
    marginRight: 10,
    color: "Black"
  },
  profileButtonScroll: {
    color: "Black"
  }
});

class Header extends Component {
  state = {
    left: false,
    isScrolled: null
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillMount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = e => {
    const top = window.scrollY < 100;
    this.setState({ isScrolled: top });
  };

  render() {
    const { classes } = this.props;

    const toggleDrawer = (side, open) => event => {
      if (
        event &&
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
      this.setState({ ...this.state, [side]: open });
    };

    const sideList = side => (
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(side, false)}
        onKeyDown={toggleDrawer(side, false)}
      >
        <List>
          <ListItem button component={AdapterLink} to="/" key="home">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            button
            component={AdapterLink}
            to="/categories"
            key="categories"
          >
            <ListItemText primary="Categories" />
          </ListItem>
          <ListItem button component={AdapterLink} to="/sign_up" key="sign_up">
            <ListItemText primary="Sign Up" />
          </ListItem>
          <ListItem
            button
            component={AdapterLink}
            to="/upload_model"
            key="upload_model"
          >
            <ListItemText primary="Upload a 3D Model" />
          </ListItem>
          <ListItem button component={AdapterLink} to="/profile" key="profile">
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem
            button
            component={AdapterLink}
            to="/about_us"
            key="about_us"
          >
            <ListItemText primary="About Us" />
          </ListItem>
          <FormControlLabel
            control={
              <Switch
                checked={this.props.darkMode}
                onChange={this.props.changePalette}
                value="dark"
              />
            }
            labelPlacement="start"
            label="Dark Mode"
          />
        </List>
      </div>
    );

    return (
      <div className={classes.grow}>
        <AppBar
          className={[
            this.state.isScrolled === false
              ? classes.navbar
              : classes.navbarScroll,
            this.props.darkMode === true
              ? classes.darkHeader
              : classes.lightHeader
          ].join(" ")}
          position="static"
        >
          <SwipeableDrawer
            open={this.state.left}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {sideList("left")}
          </SwipeableDrawer>
          <Toolbar>
            <IconButton
              edge="start"
              className={
                this.state.isScrolled === false
                  ? classes.menuButton
                  : classes.menuButtonScroll
              }
              color="inherit"
              aria-label="Open drawer"
              onClick={toggleDrawer("left", true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              className={
                this.state.isScrolled === false
                  ? classes.title
                  : classes.titleScroll
              }
              variant="h6"
              noWrap
            >
              3D
            </Typography>
            <img
              src="../../splashscreen.png"
              alt="3D PI Logo"
              height="80px"
              className={classes.logo}
            />
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              {!this.props.loggedInUser && (
                <LoginBox
                  client={this.props.client}
                  loginUser={this.props.loginUser}
                />
              )}
              {this.props.loggedInUser && (
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="stretch"
                >
                  <Typography
                    className={
                      this.state.isScrolled === false
                        ? classes.loggedIn
                        : classes.loggedInScroll
                    }
                  >
                    Logged in as:
                    <strong> {`${this.props.loggedInUser}`}</strong>
                  </Typography>
                  <Button onClick={this.props.logoutUser}>
                    <Typography>Logout</Typography>
                  </Button>
                  <IconButton
                    component={AdapterLink}
                    to={`/${this.props.loggedInUser}`}
                    edge="end"
                    aria-label="Account of current user"
                    color="inherit"
                    className={
                      this.state.isScrolled === false
                        ? classes.profileButton
                        : classes.profileButtonScroll
                    }
                  >
                    <AccountCircle />
                  </IconButton>
                </Grid>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
