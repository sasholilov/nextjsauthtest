import { SignOutButton, SignedIn } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

console.log(SignedIn);

const DashboardPage = async () => {
  const user = await currentUser();
  console.log(user);
  return (
    <div>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
      <h2>Dashboard Page</h2>
    </div>
  );
};

export default DashboardPage;
