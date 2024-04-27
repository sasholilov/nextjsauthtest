import Link from "next/link";
import "./styles.css";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <Link href="sign-up">Sign Up</Link>
        <Link href="sign-in">Sign In</Link>
      </div>
    </header>
  );
};
