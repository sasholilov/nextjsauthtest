import { SignIn } from "@clerk/nextjs";
import React from "react";

const Page = () => {
  return (
    <div>
      <div className="center">
        <SignIn />
      </div>
    </div>
  );
};

export default Page;
