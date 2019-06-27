import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import icon from "../UploadModel/icon.png";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    width: "85%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "10px",
    marginBottom: "10px"
  },
  teamcard: {
    margin: "1%"
  },
  title: {
    fontSize: 30,
    textAlign: "center"
  },
  pos: {
    marginBottom: 12
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
    <Card className={classes.card}>
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
        <Typography className={classes.pos} color="textSecondary">
          3D PI
        </Typography>
        <br />
        <Typography variant="body2" component="p">
          This is a 3D Print market place where you can find superb, majestic,
          incredible designs to print at home or with one of our suggested
          vendors.
        </Typography>
        <br />
        <br />
        <Typography className={classes.pos} color="textSecondary">
          The Team:
        </Typography>
        <Grid
          container
          justify="space-around"
          className={classes.root}
          spacing={2}
        >
          <Card className={classes.teamcard}>
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
                <Button size="small" color="primary">
                  Elizabeth
                </Button>
              </a>
            </CardActions>
          </Card>{" "}
          <Card className={classes.teamcard}>
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
                <Button size="small" color="primary">
                  Fraser
                </Button>
              </a>
            </CardActions>
          </Card>
          <Card className={classes.teamcard}>
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
                <Button size="small" color="primary">
                  Nick
                </Button>
              </a>
            </CardActions>
          </Card>
          <Card className={classes.teamcard}>
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
                <Button size="small" color="primary">
                  Shiva
                </Button>
              </a>
            </CardActions>
          </Card>
          <Card className={classes.teamcard}>
            <Avatar
              className={classes.avatar}
              src="https://dl.dropboxusercontent.com/s/uyslasfpy6msv80/Charles.jpg?dl=0"
            />
            <CardActions>
              <a href="https://github.com/cpbattrick">
                <Button size="small" color="primary">
                  Charles
                </Button>
              </a>
            </CardActions>
          </Card>
        </Grid>
        <br />
      </CardContent>
      <Divider variant="middle" />
      <br />
      <Grid container justify="center" className={classes.root}>
        <Card className={classes.teamcard}>
          <Avatar className={classes.avatar} src={icon} />
          <CardActions>
            <a
              href="https://github.com/lizzykerrigan/fencs-front-end"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="small" color="primary">
                Git
              </Button>
            </a>
          </CardActions>
        </Card>
      </Grid>
    </Card>
  );
}

// Battrick, Fraser Kemp, Elizabeth Kerrigan, Nick Etherington,
//   Shiva Heydaribeni
