import { SignUp } from "@clerk/nextjs";
import React from "react";

function Page() {
  return (
    <div>
      <div className="center">
        <h2>Sign Up</h2>
        <SignUp />
      </div>
    </div>
  );
}

export default Page;
