import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import classes from "./LandingPage.module.scss";
import SignInButton from "../components/SignInButton";

const LandingPage = () => {
  return (
    <Grid
      container
      className={classes.container}
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Typography variant="h2">ברוכים הבאים למערכת מרכז למידה</Typography>
      <Typography variant="h1">מתנ"ס דורה</Typography>
      <SignInButton />
    </Grid>
  );
};

export default LandingPage;
