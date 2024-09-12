import { IoPersonSharp } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogIn, LogOut } from "lucide-react";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "./ui/button";

const UserButton = async () => {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  return (
    <>
      {isUserAuthenticated ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <IoPersonSharp className="text-white h-6 w-6" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-[4rem] me-5">
            <DropdownMenuItem>
              <LogoutLink className="flex gap-2 font-medium justify-center items-center">
                <LogOut size={16} />
                Logout
              </LogoutLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <LoginLink>
          <Button className="flex gap-2 bg-[#DF0000] hover:bg-[#DF2222]">
            <LogIn size={16} />
            Login
          </Button>
        </LoginLink>
      )}
    </>
  );
};
export default UserButton;
