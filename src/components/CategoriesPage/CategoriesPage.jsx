import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CategoryCard from "../CardComponents/CategoryCard";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "20px",
    flexGrow: 1
  }
}));

export default function CategoriesPage() {
  const [spacing] = React.useState(3);
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(value => (
            <Grid key={value} item>
              <CategoryCard />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
