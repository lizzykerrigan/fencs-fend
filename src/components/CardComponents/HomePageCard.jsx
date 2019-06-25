import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "@reach/router";

const AdapterLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} />
));

const useStyles = makeStyles({
  header: {
    textTransform: "capitalize"
  },
  card: {
    width: 300,
    marginLeft: 10,
    marginBottom: 20
  },
  media: {
    height: 300
  }
});

export default function HomePageCard(props) {
  const classes = useStyles();

  return (
    <Card
      className={classes.card}
      component={AdapterLink}
      to={`/images/${props.image.image_id}`}
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image.thumbnail_url}
          title={props.image.display_name}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.header}
          >
            {props.image.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.image.likes} likes
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View Image
        </Button>
      </CardActions>
    </Card>
  );
}
