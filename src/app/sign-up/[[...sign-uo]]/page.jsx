import { SignUp } from "@clerk/nextjs";
import React from "react";

export const Page = () => {
  return (
    <div className="center">
      <SignUp />
    </div>
  );
};

export default Page;
