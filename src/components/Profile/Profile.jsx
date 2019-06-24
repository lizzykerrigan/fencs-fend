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
    marginTop: "20px"
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
                  <Grid item md={3} sm={12}>
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
                  <Grid className={classes.details} item md={12} sm={11}>
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
