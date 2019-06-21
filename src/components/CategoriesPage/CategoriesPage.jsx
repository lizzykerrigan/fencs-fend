import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CategoryCard from "../CardComponents/CategoryCard";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const styles = theme => ({
  root: {
    marginTop: "20px",
    flexGrow: 1
  }
});

class CategoriesPage extends React.Component {
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
                  categories {
                    slug
                    description
                    img_url
                  }
                }
              `}
            >
              {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;

                return data.categories.map(category => (
                  <CategoryCard category={category} />
                ));
              }}
            </Query>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(CategoriesPage);
