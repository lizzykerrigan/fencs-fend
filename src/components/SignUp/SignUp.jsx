import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/styles";
import Container from "@material-ui/core/Container";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const adduser = gql`
  mutation SignUp(
    $email_address: String!
    $fullname: String!
    $location: String!
    $username: String!
    $owns_printer: Boolean!
    $designer_tag: Boolean!
  ) {
    insert_users(
      email_address: $email_address
      fullname: $fullname
      location: $location
      username: $username
      owns_printer: $owns_printer
      designer_tag: $designer_tag
    ) {
      returning {
        avatar
        date_joined
        designer_tag
        email_address
        fullname
        location
        owns_printer
        rating
      }
    }
  }
`;

class SignUp extends React.Component {
  state = {
    userFullnameInput: "",
    userEmailInput: "",
    usernameInput: "",
    loacationInput: "",
    has3Dprinter: false,
    is3Ddesigner: false
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({ [target.name]: value });
  };

  //  handleSubmit = event => {};

  render() {
    const { classes } = this.props;

    return (
      <Mutation mutation={adduser}>
        {(SignUp, { data }) => (
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <form
                className={classes.form}
                noValidate
                onSubmit={e => {
                  e.preventDefault();
                  SignUp({
                    variables: {
                      email_address: this.state.userEmailInput,
                      fullname: this.state.userFullnameInput,
                      location: this.state.loacationInput,
                      username: this.state.usernameInput,
                      owns_printer: this.state.has3Dprinter,
                      designer_tag: this.state.is3Ddesigner
                    }
                  });
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="fname"
                      name="userFullnameInput"
                      variant="outlined"
                      required
                      fullWidth
                      id="fullname"
                      label="Full Name"
                      autoFocus
                      onChange={this.handleInputChange}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="userEmailInput"
                      autoComplete="email"
                      onChange={this.handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="usernameInput"
                      label="Username"
                      id="username"
                      onChange={this.handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="loacationInput"
                      label="Location"
                      id="location"
                      onChange={this.handleInputChange}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.has3Dprinter}
                          color="primary"
                          onChange={this.handleInputChange}
                        />
                      }
                      label="I have a 3D printer and want to provide printing services to others."
                      name="has3Dprinter"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.is3Ddesigner}
                          color="primary"
                          onChange={this.handleInputChange}
                        />
                      }
                      label="I am a 3D designer and want to sell images"
                      name="is3Ddesigner"
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign Up
                </Button>
              </form>
            </div>
          </Container>
        )}
      </Mutation>
    );
  }
}

export default withStyles(useStyles)(SignUp);
