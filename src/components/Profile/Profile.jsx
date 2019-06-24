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
            return (
              <Card className={classes.card}>
                <CardContent>
                  <img
                    src={data.users[0].avatar}
                    alt="Profile"
                    className={classes.profilePic}
                  />
                </CardContent>
                <CardContent>
                  <Grid>
                    <Typography> </Typography>
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
