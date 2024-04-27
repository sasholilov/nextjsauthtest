import { SignOutButton, SignedIn } from "@clerk/nextjs";

export const Home = async () => {
  return (
    <div>
      <h1>Home</h1>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </div>
  );
};

export default Home;
