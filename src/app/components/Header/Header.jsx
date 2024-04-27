import Link from "next/link";
import "./styles.css";
import { currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

export const Header = async () => {
  return (
    <header>
      <div className="container">
        <Link href="sign-up">Sign Up</Link>
        <Link href="sign-in">Sign In</Link>
        <UserButton />
      </div>
    </header>
  );
};
