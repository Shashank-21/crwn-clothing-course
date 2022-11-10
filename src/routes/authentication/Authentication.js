import React from "react";
import "./authentication.styles.scss";

import SignUp from "../../components/sign-up/SignUp";
import SignIn from "../../components/sign-in/SignIn";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
