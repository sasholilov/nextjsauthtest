import { SignUp } from "@clerk/nextjs";
import React from "react";

export const Page = () => {
  return (
    <div>
      <div className="center">
        <SignUp />
      </div>
    </div>
  );
};

export default Page;
