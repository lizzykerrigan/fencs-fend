import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import HomePageCard from "../CardComponents/HomePageCard";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const styles = theme => ({
  root: {
    marginTop: "20px",
    flexGrow: 1
  }
});

class HomePage extends React.Component {
  //const [spacing] = React.useState(3);

  componentDidMount() {}

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            <Query
              query={gql`
                {
                  images {
                    image_id
                    title
                    price
                    description
                    posted_by
                    date_uploaded
                    display_name
                    thumbnail_url
                    obj_image_url
                    likes
                    category
                  }
                }
              `}
            >
              {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;

                return data.images.map(image => <HomePageCard image={image} />);
              }}
            </Query>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(HomePage);
