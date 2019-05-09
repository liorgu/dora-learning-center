import React from "react";
import withAuthorization from "../hoc/withAuthorization";
import Typography from "@material-ui/core/Typography";

const HomePage = () => {
  return <Typography variant="h2">כל הכבוד, הצלחת!</Typography>;
};

export default withAuthorization(HomePage);
