import Link from "next/link";
import "./header.css";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export const Header = async () => {
  const user = await currentUser();
  return (
    <header>
      <div className="container">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        {!user && (
          <>
            <Link href="sign-up">Sign Up</Link>
            <Link href="sign-in">Sign In</Link>
          </>
        )}

        <UserButton />
      </div>
    </header>
  );
};
