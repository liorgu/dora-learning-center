import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import Firebase from "./utils/firebase";
import FirebaseContext from "./context/firebaseContext";

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
