import { IoPersonSharp } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

const UserButton = () => {
  return (
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
  );
};
export default UserButton;
