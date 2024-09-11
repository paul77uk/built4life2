import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import Navbar from "./Navbar";
import SubNav from "./SubNav";

const BaseLayout = async ({ children }: { children: ReactNode }) => {
  // any page that uses this layout will require the user to be authenticated
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    return redirect("/"); // Redirect to the home page if the user is not authenticated
  }

  return (
    <div>
      <div>
        <Navbar />
        <SubNav />
      </div>
      {children}
    </div>
  );
};
export default BaseLayout;
