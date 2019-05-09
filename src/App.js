import React, { useLayoutEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
  jssPreset
} from "@material-ui/core/styles";
import { create } from "jss";
import rtl from "jss-rtl";
import JssProvider from "react-jss/lib/JssProvider";

import LandingPage from "./pages/LandingPage";
import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";

import * as ROUTES from "./constants/routes";
import withAuthentication from "./hoc/withAuthentication";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const generateClassName = createGenerateClassName();
const theme = createMuiTheme({
  direction: "rtl",
  typography: {
    useNextVariants: true
  }
});

const App = () => {
  useLayoutEffect(() => {
    document.body.dir = "rtl";
  }, []);

  return (
    <JssProvider jss={jss} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme}>
        <div dir="rtl">
          <Router>
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          </Router>
        </div>
      </MuiThemeProvider>
    </JssProvider>
  );
};

export default withAuthentication(App);
