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
import Email from "@material-ui/icons/Email";
import Person from "@material-ui/icons/Person";
import AccessTime from "@material-ui/icons/AccessTime";
import Create from "@material-ui/icons/Create";
import Print from "@material-ui/icons/Print";

const AdapterLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} />
));

const useStyles = makeStyles(theme => ({
  profilePic: { height: 200, align: "centre" },
  username: {
    textTransform: "capitalize",
    textDecoration: "underline",
    width: "40%",
    marginLeft: "auto",
    marginRight: "auto"
  },
  picContainer: {
    width: "16.8%",
    padding: 20,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 80,
    alignContent: "space around"
  },
  card: {
    width: "90%",
    marginLeft: "5%",
    marginTop: "80px",
    marginBottom: "30px"
  },
  imagesCard: {
    width: "85%",

    marginTop: 10,
    marginLeft: "5%",
    marginBottom: "30px",
    marginRight: "5%",
    padding: 20
  },
  userInfo: {
    width: "40%",
    margin: 20,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 80
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
            if (error) return <h1>{error.message}</h1>;
            const user = data.users[0];
            return (
              <>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Card className={classes.picContainer}>
                      <img
                        src={user.avatar}
                        alt="Profile"
                        className={classes.profilePic}
                      />
                      <Rating initialRating={user.rating} readonly />
                    </Card>
                  </Grid>

                  <Grid className={classes.details} item xs={12}>
                    <CardContent>
                      <Grid className={classes.userInfo}>
                        <Typography className={classes.username} variant="h5">
                          {user.username}{" "}
                          {user.owns_printer === true && <Print />}
                          {user.designer_tag === true && <Create />}
                        </Typography>

                        <br />
                        <Divider variant="middle" />
                        <br />
                        <AccessTime className={classes.icon} />
                        <Typography>
                          {" "}
                          {`${format(user.date_joined, "Do MMMM YYYY")}`}
                        </Typography>
                        <br />
                        <Email className={classes.icon} />
                        <Typography> {` ${user.email_address}`}</Typography>
                        <br />
                        <Person className={classes.icon} />
                        <Typography> {` ${user.fullname}`}</Typography>
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
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Grid container justify="center" spacing={2}>
                          <Query
                            query={gql`
                      {
                        images(where: {posted_by: {_eq: "${user.username}"}}) {
                            title
                    display_name
                    thumbnail_url
                    likes
                    image_id
                        }
                      }
                      `}
                          >
                            {({ loading, error, data }) => {
                              if (loading) return <p>Loading...</p>;
                              if (error) return <h1>{error.message}</h1>;

                              return data.images.map((image, i) => (
                                <HomePageCard
                                  key={`userimage${i}`}
                                  image={image}
                                />
                              ));
                            }}
                          </Query>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </>
            );
          }}
        </Query>
      ) : (
        <Typography>Please Sign Up</Typography>
      )}
    </div>
  );
};

export default Profile;
