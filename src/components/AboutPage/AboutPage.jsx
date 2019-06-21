import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "@reach/router";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "20px"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          About us
        </Typography>
        <Typography className={classes.poss} color="textSecondary">
          3D PI
        </Typography>
        <Typography variant="body2" component="p">
          This is a 3D Print market place where you can find superb, majestic,
          incredible designs to print at home or with one of our suggested
          vendours.
          <br />
          The Team:
          <br />
          <a href="https://github.com/cpbattrick">Charles</a>
          <br />
          <a href="https://github.com/NEJEtherington">Nick</a>
          <br />
          <a href="https://github.com/lizzykerrigan">Elizabeth</a>
          <br />
          <a href="https://github.com/FraserKemp">Fraser</a>
          <br />
          <a href="https://github.com/SH-H-B">Shiva</a>
        </Typography>
      </CardContent>
      <CardActions>
        <a
          href="https://github.com/lizzykerrigan/fencs-front-end"
          target="_blank"
        >
          <Button>Git</Button>
        </a>
      </CardActions>
    </Card>
  );
}

// Battrick, Fraser Kemp, Elizabeth Kerrigan, Nick Etherington,
//   Shiva Heydaribeni
