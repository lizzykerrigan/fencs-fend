import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "@reach/router";

const AdapterLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} />
));

const useStyles = makeStyles({
  card: {
    width: "23%",
    boxShadow: "none",
    margin: 2
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
  },
  contactButton: {
    "&:hover": {
      backgroundColor: "#f57c00"
    }
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const { user } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {user.username}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Location: {user.location}
        </Typography>
        <Typography variant="body2" component="p">
          This user is offering printing services!
          <br />
          Contact the user for more information.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          className={classes.contactButton}
          size="small"
          component={AdapterLink}
          to={`/contact/${user.username}`}
        >
          Contact User
        </Button>
      </CardActions>
    </Card>
  );
}
