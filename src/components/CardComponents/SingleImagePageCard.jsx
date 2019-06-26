import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import ModelCard from "../3dModel/3dModelCard";

const useStyles = makeStyles(theme => ({
  voted: {
    color: red[500]
  },
  card: {
    padding: 15,
    marginTop: 50,
    width: "80%",
    marginLeft: "8%",
    backgroundColor: "whitesmoke"
  },
  likes: {
    marginBottom: 0,
    marginLeft: 5
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

const SingleImagePageCard = props => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [background, setBackground] = React.useState(
    "https://i.imgur.com/8J6rlJZ.jpg"
  );
  const {
    title,
    price,
    description,
    posted_by,
    date_uploaded,
    likes,
    category
  } = props.image;

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <div className={classes.cardWrapper}>
      <Card className={classes.card}>
        <CardHeader
          avatar={<Avatar aria-label="Recipe" className={classes.avatar} />}
          action={
            <Button>
              <Typography>Contact Designer</Typography>
            </Button>
          }
          title={title}
          subheader={date_uploaded}
        />
        <ModelCard background={background} image={props.image} />
        <CardContent>
          <div>
            <Typography>Themes:</Typography>
            <Button
              onClick={() => setBackground("https://i.imgur.com/8J6rlJZ.jpg")}
            >
              <Typography>NC Lecture Room</Typography>
            </Button>
            <Button
              onClick={() => setBackground("https://i.imgur.com/fcpVySI.jpg")}
            >
              <Typography>NC Workspace</Typography>
            </Button>
            <Button
              onClick={() => setBackground("https://i.imgur.com/m4mMb0F.jpg")}
            >
              <Typography>Print Works</Typography>
            </Button>
            <Button
              onClick={() => setBackground("https://i.imgur.com/pOLHVOz.jpg")}
            >
              <Typography>Print Works Inside</Typography>
            </Button>
            <Button
              className={classes.themeButton}
              onClick={() => setBackground("")}
            >
              <Typography>Pilcrow</Typography>
            </Button>
          </div>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            className={props.voteChange === 1 && classes.voted}
            onClick={() => {
              props.vote(props.id, 1);
            }}
            aria-label="Add to favorites"
          >
            <FavoriteIcon />
          </IconButton>
          <Typography className={classes.likes} paragraph>
            {likes + props.voteChange}
          </Typography>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              <i class="fab fa-sketch fa-2x" /> {posted_by}
            </Typography>
            <Typography paragraph>
              <i class="far fa-money-bill-alt fa-2x " /> .£{price}
            </Typography>
            <Typography paragraph>
              <i class="far fa-flag fa-2x" />.{category}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <div style={{ height: 200 }} />
      <div />
    </div>
  );
};

export default SingleImagePageCard;
