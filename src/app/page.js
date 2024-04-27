import { SignOutButton, SignedIn } from "@clerk/nextjs";

console.log("ste");

export default async function Home() {
  return (
    <div>
      <h1>Home</h1>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </div>
  );
}
