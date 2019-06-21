import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    width: 345,
  },
  media: {
    height: 140
  }
});

export default function CategoryCard(props) {
  const classes = useStyles();
  console.log(props.category.img_url);
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.category.img_url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{ textTransform: 'capitalize' }}>
            {props.category.slug}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.category.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View Images
        </Button>
      </CardActions>
    </Card>
  );
}
