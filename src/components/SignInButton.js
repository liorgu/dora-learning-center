import React from "react";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import * as ROUTES from "../constants/routes";

const SignInButton = ({ history }) => {
  const onClick = () => {
    history.push(ROUTES.SIGN_IN);
  };

  return <Button onClick={onClick}>כניסה</Button>;
};

export default withRouter(SignInButton);
