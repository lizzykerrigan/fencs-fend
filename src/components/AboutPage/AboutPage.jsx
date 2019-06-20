import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
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
          Charles Battrick, Fraser Kemp, Elizabeth Kerrigan, Nick Etherington,
          Shiva Heydaribeni
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
