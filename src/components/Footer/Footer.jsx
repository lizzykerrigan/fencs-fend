import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary">
      <i class="fas fa-code" />
      Built with "<i class="fas fa-heart" />"
      <Link
        color="inherit"
        href="https://northcoders.com/?utm_term=%2Bnorthcoders&utm_campaign=Competitors+No-Share+%5BUK%5D+TOS+%232&utm_source=adwords&utm_medium=ppc&hsa_acc=5738903014&hsa_net=adwords&hsa_cam=1071342944&hsa_ad=355082350702&hsa_kw=%2Bnorthcoders&hsa_grp=56540279470&hsa_mt=b&hsa_ver=3&hsa_src=g&hsa_tgt=kwd-399588805362&gclid=CjwKCAjwr8zoBRA0EiwANmvpYAtrY0UggilOcbZJ_z8lrubfQfSx8KDBJQkWLveMFHKmQ6E8tzPVPxoCu18QAvD_BwE"
      >
        at Northcoders
      </Link>
      <i class="far fa-copyright" />
    </Typography>
  );
}
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  },
  footer: {
    borderTop: "1px hidden rgb(0, 0, 0)",
    padding: theme.spacing(2),
    marginTop: "auto",
    backgroundColor: "#e0e0e0",
    textAlign: "center",
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%"
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <MadeWithLove />
      </Container>
    </footer>
  );
};

export default Footer;
