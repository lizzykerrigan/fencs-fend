import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "@reach/router";
import LoginBox from "../Login/LoginBox";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const AdapterLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} />
));

const useStyles = makeStyles(theme => ({
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
    display: "block"
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
  }
}));

const Header = props => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [side]: open });
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
        <ListItem button component={AdapterLink} to="/profile" key="profile">
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button component={AdapterLink} to="/about_us" key="about_us">
          <ListItemText primary="About Us" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <SwipeableDrawer
          open={state.left}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {sideList("left")}
        </SwipeableDrawer>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Open drawer"
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            3D PI
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {!props.loggedInUser && (
              <LoginBox client={props.client} loginUser={props.loginUser} />
            )}
            {props.loggedInUser && (
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="stretch"
              >
                <Typography className={classes.loggedIn}>
                  Logged in as:<strong> {`${props.loggedInUser}`}</strong>
                </Typography>
                <Button onClick={props.logoutUser}>
                  <Typography>Logout</Typography>
                </Button>
                <IconButton
                  component={AdapterLink}
                  to={`/${props.loggedInUser}`}
                  edge="end"
                  aria-label="Account of current user"
                  color="inherit"
                  className={classes.profileButton}
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
};

export default Header;
