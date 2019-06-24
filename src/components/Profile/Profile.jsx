import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { Link } from "@reach/router";
import {
  Card,
  CardContent,
  Button,
  Grid,
  Typography,
  Divider
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import format from "date-fns/format";
import Rating from "react-rating";
import HomePageCard from "../CardComponents/HomePageCard";

const AdapterLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} />
));

const useStyles = makeStyles(theme => ({
  profilePic: { height: 200 },
  username: { textTransform: "capitalize" },
  picContainer: { width: 205, padding: 20 },
  card: {
    width: "90%",
    marginLeft: "5%",
    marginTop: "20px",
    marginBottom: "30px"
  },
  imagesCard: {
    width: "90%",
    marginLeft: "5%",
    marginTop: "20px",
    marginBottom: "30px",
    padding: 20
  }
}));

const Profile = props => {
  const classes = useStyles();

  return (
    <div>
      {props.loggedInUser ? (
        <Query
          query={gql`
  {
    users(where: {username: {_eq: "${props.loggedInUser}"}}) {
        fullname
        avatar
        date_joined
        designer_tag
        email_address
        location
        owns_printer
        rating
        username
    }
  }
`}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error</p>;
            const user = data.users[0];
            return (
              <Card className={classes.card}>
                <Grid container spacing={3}>
                  <Grid item md={3} sm={9}>
                    <CardContent>
                      <Card className={classes.picContainer}>
                        <img
                          src={user.avatar}
                          alt="Profile"
                          className={classes.profilePic}
                        />
                        <Rating initialRating={user.rating} readonly />
                      </Card>
                    </CardContent>
                  </Grid>
                  <Grid className={classes.details} item md={9} sm={11}>
                    <CardContent>
                      <Grid>
                        <Typography className={classes.username} variant="h5">
                          {user.username}
                        </Typography>
                        <br />
                        <Divider variant="middle" />
                        <br />
                        <Typography>
                          {" "}
                          {`Created on: ${format(
                            user.date_joined,
                            "Do MMMM YYYY"
                          )}`}
                        </Typography>
                        <br />
                        <Typography>
                          {" "}
                          {`Email: ${user.email_address}`}
                        </Typography>
                        <br />
                        <Typography> {`Fullname: ${user.fullname}`}</Typography>
                      </Grid>
                    </CardContent>
                  </Grid>
                </Grid>
                <Card className={classes.imagesCard}>
                  <CardContent>
                    <Typography variant="h4" className={classes.username}>{`${
                      user.username
                    }'s Designs`}</Typography>
                    <br />
                    <Query
                      query={gql`
                      {
                        images(where: {posted_by: {_eq: "${user.username}"}}) {
                            title
                    display_name
                    thumbnail_url
                    likes
                        }
                      }
                      `}
                    >
                      {({ loading, error, data }) => {
                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>Error :(</p>;

                        return data.images.map(image => (
                          <HomePageCard image={image} />
                        ));
                      }}
                    </Query>
                  </CardContent>
                </Card>
              </Card>
            );
          }}
        </Query>
      ) : (
        <Button component={AdapterLink} to="/sign_up">
          Sign Up
        </Button>
      )}
    </div>
  );
};

export default Profile;