import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import withFirebase from "../hoc/withFirebase";
import * as ROUTES from "../constants/routes";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import classes from "./SignInPage.module.scss";

const SignInPage = () => (
  <Grid
    container
    className={classes.container}
    direction="column"
    justify="center"
    alignItems="center"
  >
    <Typography variant="h2">כניסה למערכת מרכז למידה</Typography>
    <SignInForm />
  </Grid>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(() => {
        this.setState({ error: "אחד הפרטים שהוזנו שגוי" });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email">כתובת אימייל</InputLabel>
          <Input
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="אימייל"
            autoComplete="email"
            autoFocus
          />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="password">סיסמה</InputLabel>
          <Input
            name="password"
            value={password}
            onChange={this.onChange}
            type="password"
            autoComplete="current-password"
            placeholder="סיסמה"
          />
        </FormControl>
        <Button type="submit" fullWidth variant="contained" color="primary">
          התחבר
        </Button>

        {error && (
          <Typography variant="body1" color="error">
            אחד הפרטים שהוזנו שגוי
          </Typography>
        )}
      </form>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase
)(SignInFormBase);

export default SignInPage;
