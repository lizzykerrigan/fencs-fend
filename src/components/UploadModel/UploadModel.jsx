import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import icon from "./icon.png";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";
import { navigate } from "@reach/router";
import { withStyles } from "@material-ui/styles";
import Swal from "sweetalert2";

const styles = theme => ({
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
    width: "100%",
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});

const UPLOADMODEL = gql`
  mutation insert_images($newImage: [images_insert_input!]!) {
    insert_images(objects: $newImage) {
      returning {
        title
        date_uploaded
      }
    }
  }
`;

class UploadModel extends React.Component {
  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <Mutation mutation={UPLOADMODEL}>
        {(insert_images, { loading, error, data }) => (
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar} img src={icon} alt="logo" />
              <Typography component="h1" variant="h5">
                Upload a 3D Model
              </Typography>
              <form
                className={classes.form}
                noValidate
                onSubmit={e => {
                  e.preventDefault();
                  const newImage = {
                    title: this.state.title,
                    description: this.state.description,
                    display_name: this.state.display_name,
                    posted_by: this.props.loggedInUser,
                    price: this.state.price,
                    thumbnail_url: this.state.thumbnail_url,
                    obj_image_url: this.state.obj_img_url,
                    format: this.state.format,
                    category: this.state.category
                  };
                  insert_images({
                    variables: { newImage }
                  }).then(data => {
                    Swal.fire({
                      type: "success",
                      title: "Your image has been successfully uploaded!",
                      showConfirmButton: false,
                      timer: 3200
                    });
                    navigate("/");
                  });
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      name="title"
                      variant="outlined"
                      required
                      fullWidth
                      id="title"
                      label="Title"
                      autoFocus
                      onChange={this.handleInput}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="description"
                      label="Description"
                      name="description"
                      onChange={this.handleInput}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="display_name"
                      label="Display Name"
                      name="display_name"
                      onChange={this.handleInput}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="price"
                      label="Price"
                      id="price"
                      onChange={this.handleInput}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="thumbnail_url"
                      label="Thumbnail URL"
                      id="thumbnail_url"
                      onChange={this.handleInput}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="obj_img_url"
                      label="Model URL"
                      id="obj_img_url"
                      onChange={this.handleInput}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="format"
                      label="Format"
                      id="format"
                      onChange={this.handleInput}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="category"
                      label="Category"
                      id="category"
                      onChange={this.handleInput}
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
                  Upload!
                </Button>
              </form>
            </div>
          </Container>
        )}
      </Mutation>
    );
  }
}

export default withStyles(styles)(UploadModel);
