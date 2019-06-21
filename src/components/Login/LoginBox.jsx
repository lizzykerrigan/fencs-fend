import React from "react";
import { TextField } from "@material-ui/core";

class LoginBox extends React.Component {
  state = {
    userIput: "",
    err: null
  };

  storeUserInput = event => {
    this.setState({ userInput: event.target.value });
  };
  render() {
    const { classes } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup className={classes.form}>
          <div>
            <TextField
              id="login"
              label={this.state.err ? "Invalid user !" : "Username"}
              onChange={this.storeUserInput}
              helperText="fraserkemp"
              variant="outlined"
            />
          </div>
          <Button type="submit">
            <Typography>Login</Typography>
          </Button>
        </FormGroup>
      </form>
    );
  }
}

export default LoginBox;
