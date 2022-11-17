import React from "react";
import { AuthenticationContainer } from "./authentication.styles.js";

import SignUp from "../../components/sign-up/SignUp";
import SignIn from "../../components/sign-in/SignIn";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignIn />
      <SignUp />
    </AuthenticationContainer>
  );
};

export default Authentication;
