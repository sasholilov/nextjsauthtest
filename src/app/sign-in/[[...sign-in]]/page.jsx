import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
  return (
    <div>
      <div className="center">
        <SignIn />
      </div>
    </div>
  );
};

export default SignInPage;
