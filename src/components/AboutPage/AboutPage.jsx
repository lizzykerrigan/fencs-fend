import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import icon from "../UploadModel/icon.png";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    width: "85%",
    marginLeft: "auto",
    marginRight: "auto",
    // marginTop: "30px",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 50%)",
    marginTop: "10px",
    marginBottom: "10px"
  },
  teamcard: {
    margin: "2%",
    minWidth: "40%",
    maxWidth: "40%"
  },
  title: {
    fontSize: 25,
    textAlign: "center"
  },
  pos: {
    marginBottom: 12
  },
  description: {
    fontSize: 18,
    textAlign: "center"
  },
  root: {
    background: "#424242",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0% 10% 0% 10%",
    marginBottom: "1%"
  },
  center: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "40%"
  },
  avatar: {
    height: 80,
    width: 80,
    margin: 20
  },
  media: {
    // height: 420
    width: "100%",
    height: "auto"
  }
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Typography className={classes.title} variant="h5" component="h2">
          About us
        </Typography>
        <br />
        <Card className={classes.card}>
          {/* <CardMedia
            className={classes.media}
            image="https://dl.dropboxusercontent.com/s/feujoz5a23ed9cw/Graduations%2028-06%20Group%202%20Landscape.jpg?dl=0"
            title="Team Shot"
          /> */}
          <img
            className={classes.media}
            src="https://dl.dropboxusercontent.com/s/feujoz5a23ed9cw/Graduations%2028-06%20Group%202%20Landscape.jpg?dl=0"
            alt="Team Shot"
          />
        </Card>
        <br />
        <Divider variant="middle" />
        <br />
        <Typography className={classes.title} variant="h6" noWrap>
          <img src="../../icon.png" alt="3D Logo" height="80px" />
          3D PI
        </Typography>
        <br />
        <Typography
          variant="body2"
          component="p"
          className={classes.description}
        >
          3DPI is an e-commerce site, linking 3D image designers with owners of
          3D printers and consumers looking to purchase superb, majestic,
          incredible 3D-printed images. Our team :
          <br />
          <br />
          <br />
        </Typography>
        <Grid container justify="space-around" spacing={2}>
          <Card className={classes.teamcard}>
            <Grid container justify="center" spacing={2}>
              <Avatar
                className={classes.avatar}
                src="https://dl.dropboxusercontent.com/s/o1wih5p45xg830s/elizabeth.jpeg?dl=0"
              />
              <CardActions>
                <a
                  href="https://github.com/lizzykerrigan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className={classes.root}>
                    {" "}
                    <i className="fab fa-github fa-fw" />
                    Elizabeth
                  </Button>
                </a>
              </CardActions>
            </Grid>
          </Card>{" "}
          <Card className={classes.teamcard}>
            <Grid container justify="center" spacing={2}>
              <Avatar
                className={classes.avatar}
                src="https://dl.dropboxusercontent.com/s/muj8rkanyb43jfa/fraser.jpg?dl=0"
              />
              <CardActions>
                <a
                  href="https://github.com/FraserKemp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className={classes.root}>
                    {" "}
                    <i className="fab fa-github fa-fw" />
                    Fraser
                  </Button>
                </a>
              </CardActions>
            </Grid>
          </Card>
          <Card className={classes.teamcard}>
            <Grid container justify="center" spacing={2}>
              <Avatar
                className={classes.avatar}
                src="https://dl.dropboxusercontent.com/s/v5kzhqo1u7dm250/Nick.jpg?dl=0"
              />
              <CardActions>
                <a
                  href="https://github.com/NEJEtherington"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className={classes.root}>
                    {" "}
                    <i className="fab fa-github fa-fw" />
                    Nick
                  </Button>
                </a>
              </CardActions>
            </Grid>
          </Card>
          <Card className={classes.teamcard}>
            <Grid container justify="center" spacing={2}>
              <Avatar
                className={classes.avatar}
                src="https://dl.dropboxusercontent.com/s/37ttfsl8e8v2nas/Shiva.jpg?dl=0"
              />
              <CardActions>
                <a
                  href="https://github.com/SH-H-B"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className={classes.root}>
                    {" "}
                    <i className="fab fa-github fa-fw" />
                    Shiva
                  </Button>
                </a>
              </CardActions>
            </Grid>
          </Card>
          <Card className={classes.teamcard}>
            <Grid container justify="center" spacing={2}>
              <Avatar
                className={classes.avatar}
                src="https://dl.dropboxusercontent.com/s/uyslasfpy6msv80/Charles.jpg?dl=0"
              />
              <CardActions>
                <a href="https://github.com/cpbattrick">
                  <Button className={classes.root}>
                    {" "}
                    <i className="fab fa-github fa-fw" />
                    Charles
                  </Button>
                </a>
              </CardActions>
            </Grid>
          </Card>
        </Grid>
        <br />
      </CardContent>
      <Divider variant="middle" />
      <br />
      <Grid container justify="center">
        <Card className={classes.teamcard}>
          <Grid container justify="center" spacing={2}>
            <Avatar className={classes.avatar} src={icon} />
            <CardActions>
              <a
                href="https://github.com/lizzykerrigan/fencs-front-end"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className={classes.root}>
                  {" "}
                  <i className="fab fa-github fa-flip-vertical fa-2x" />
                  github repo
                </Button>
              </a>
            </CardActions>
          </Grid>
        </Card>
      </Grid>
    </Card>
  );
}
