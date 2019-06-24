import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { Link } from "@reach/router";
import { Card, CardContent, Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const AdapterLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} />
));

const useStyles = makeStyles(theme => ({
  profilePic: { height: 200 },
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
            console.log(data);
            const user = data.users[0];
            return (
              <Card className={classes.card}>
                <CardContent>
                  <Card className={classes.picContainer}>
                    <img
                      src={user.avatar}
                      alt="Profile"
                      className={classes.profilePic}
                    />
                  </Card>
                </CardContent>
                <CardContent>
                  <Grid>
                    <Typography variant="h5">{user.fullname}</Typography>
                    <Typography> {user.date_joined}</Typography>
                    <Typography> {user.email_address}</Typography>
                    <Typography> {user.rating}</Typography>
                    <Typography> {user.username}</Typography>
                  </Grid>
                </CardContent>
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
