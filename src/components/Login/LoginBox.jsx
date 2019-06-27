import React from "react";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FormGroup from "@material-ui/core/FormGroup";
import { withStyles } from "@material-ui/styles";
import { gql } from "apollo-boost";

const styles = theme => ({
  form: {
    display: "inline-flex",
    flexDirection: "row",
    justifyContent: "baseline"
  },
  column: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    marginLeft: "1rem",
    maxWidth: "60px",
    "&:hover": {
      backgroundColor: "#f57c00"
    }
  },
  textField: {
    display: "flex",
    flexDirection: "column",
    flex: 1
  },
  container: {
    padding: "10px",
    marginLeft: "20px"
  }
});

class LoginBox extends React.Component {
  state = {
    userIput: "",
    err: null
  };
  handleSubmit = event => {
    event.preventDefault();
    const { userInput } = this.state;
    this.props.client
      .query({
        query: gql`
          {
            users(where:{username:{_eq:"${userInput}"}}){
              username
            }
            
          }
        `
      })
      .then(user => {
        if (user.data.users.length === 0) {
          return Promise.reject({ err: "User not found" });
        } else {
          console.log(user.data.users[0].username);
          this.props.loginUser(user.data.users[0].username);
          this.setState({ err: null });
        }
      })
      .catch(err => {
        this.setState({ err });
      });
  };

  storeUserInput = event => {
    this.setState({ userInput: event.target.value });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <form onSubmit={this.handleSubmit}>
          <FormGroup className={classes.form}>
            <div>
              <TextField
                error={!!this.state.err}
                id="login"
                label={this.state.err ? "Invalid User !" : "Input Username"}
                onChange={this.storeUserInput}
                helperText="fraser"
                variant="outlined"
                className={classes.textField}
              />
            </div>
            <Button type="submit" className={classes.column}>
              <Typography>Login</Typography>
            </Button>
          </FormGroup>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(LoginBox);
