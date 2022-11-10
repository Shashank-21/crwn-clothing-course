import React from "react";
import "./authentication.styles.scss";

import SignUp from "../../sign-up/SignUp";
import SignIn from "../../sign-in/SignIn";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
