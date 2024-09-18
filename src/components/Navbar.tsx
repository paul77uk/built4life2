import Link from "next/link";

import { Rubik_Dirt } from "next/font/google";
import { cn } from "@/lib/utils";

import UserButton from "./UserButton";

const font = Rubik_Dirt({ weight: "400", preload: false });

const Nav = async () => {
  return (
    <div className="">
      <nav className=" bg-black">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex gap-3">
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <span
                className={cn(
                  font.className,
                  "sm:ms-0 gap-2 self-center text-2xl sm:text-3xl lg:text-4xl whitespace-nowrap text-white"
                )}
              >
                BUILT<span className="text-[#DF0000]">4</span>LIFE
              </span>
            </Link>
          </div>

          <UserButton />
        </div>
      </nav>
    </div>
  );
};

export default Nav;
