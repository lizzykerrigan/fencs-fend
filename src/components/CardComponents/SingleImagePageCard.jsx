import React from "react";
import SimpleCard from "../CardComponents/usersCard";
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
import { gql } from "apollo-boost";
import Grid from "@material-ui/core/Grid";
import { Query } from "react-apollo";
import { Link } from "@reach/router";
import icon from "../UploadModel/icon.png";

const AdapterLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} />
));

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
    backgroundColor: theme.palette.secondary.main
  },
  contactDesigner: {
    "&:hover": {
      backgroundColor: "#f57c00"
    }
  },
  themeBtn: {
    "&:hover": {
      backgroundColor: "#f57c00",
      transition: "0.4s",
      color: "white"
    }
  },
  themeDesc: {
    marginLeft: 6
  },
  printS: {
    marginLeft: 20,
    marginBottom: 15
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
          avatar={
            <Avatar className={classes.avatar} img src={icon} alt="logo" />
          }
          action={
            <Button
              className={classes.contactDesigner}
              component={AdapterLink}
              to={`/contact/${posted_by}`}
            >
              <Typography>Contact Designer</Typography>
            </Button>
          }
          title={title}
          subheader={date_uploaded}
        />
        <ModelCard background={background} image={props.image} />
        <CardContent>
          <div>
            <Typography className={classes.themeDesc}>Themes:</Typography>
            <Button
              className={classes.themeBtn}
              onClick={() => setBackground("https://i.imgur.com/8J6rlJZ.jpg")}
            >
              <Typography>NC Lecture Room</Typography>
            </Button>
            <Button
              className={classes.themeBtn}
              onClick={() => setBackground("https://i.imgur.com/fcpVySI.jpg")}
            >
              <Typography>NC Workspace</Typography>
            </Button>
            <Button
              className={classes.themeBtn}
              onClick={() => setBackground("https://i.imgur.com/m4mMb0F.jpg")}
            >
              <Typography>Print Works</Typography>
            </Button>
            <Button
              className={classes.themeBtn}
              onClick={() => setBackground("https://i.imgur.com/Uyyv1fo.jpg")}
            >
              <Typography>Print Works Inside</Typography>
            </Button>
            <Button
              className={classes.themeButton}
              onClick={() => setBackground("https://i.imgur.com/D17D5Oi.jpg")}
            >
              <Typography>Pilcrow</Typography>
            </Button>
          </div>
          <Typography className={classes.themeDesc}>
            Description: {description}
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
              <strong>Designer:</strong> {posted_by}
            </Typography>
            <Typography paragraph>
              <strong>3D Design price:</strong> £{price}
            </Typography>
            <Typography paragraph>
              <strong>Category: </strong>
              {category}
            </Typography>
            <Typography className={classes.printS}>
              <strong>Printing Services:</strong>
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Grid container justify="center" spacing={2}>
                  <Query
                    query={gql`
                      {
                        users(where: { owns_printer: { _eq: true } }) {
                          username
                          location
                          rating
                          owns_printer
                          date_joined
                        }
                      }
                    `}
                  >
                    {({ loading, error, data }) => {
                      if (loading) return <p>Loading...</p>;
                      if (error) return <h1>{error.message}</h1>;

                      return data.users.map(user => <SimpleCard user={user} />);
                    }}
                  </Query>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Collapse>
      </Card>
      <div style={{ height: 200 }} />
      <div />
    </div>
  );
};

export default SingleImagePageCard;
