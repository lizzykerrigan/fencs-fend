import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "30px"
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
          incredible 3D-printed images.
          <br />
          <br />
          <br />
          Our team :
          <CardActions>
            <a
              href="https://github.com/cpbattrick"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i class="fab fa-github" />
              <Button>Charles</Button>
            </a>
            <br />
            <a
              href="https://github.com/NEJEtherington"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i class="fab fa-github" />
              <Button>Nick</Button>
            </a>
            <br />
            <a
              href="https://github.com/lizzykerrigan"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i class="fab fa-github" />
              <Button>Elizabeth</Button>
            </a>
            <br />
            <a
              href="https://github.com/FraserKemp"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i class="fab fa-github" />
              <Button>Fraser</Button>
            </a>
            <br />
            <a
              href="https://github.com/SH-H-B"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i class="fab fa-github" />
              <Button>Shiva</Button>
            </a>
          </CardActions>
        </Typography>
      </CardContent>
    </Card>
  );
}

// Battrick, Fraser Kemp, Elizabeth Kerrigan, Nick Etherington,
//   Shiva Heydaribeni
