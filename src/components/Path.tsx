"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LinkType = {
  label: string;
  path: string;
};

const Path = ({
  link,
  isUserAuthenticated,
  isSubscribed,
}: {
  link: LinkType;
  isUserAuthenticated: boolean;
  isSubscribed: boolean;
}) => {
  const pathname = usePathname();
  return (
    <Link
      key={link.path}
      className={cn(
        "flex gap-2 items-center p-3 text-white hover:text-[#DF0000]",

        pathname === link.path && "bg-[#DF0000] hover:text-white",

        link.path === "/my-workouts" && !isSubscribed && "hidden",

        link.path === "/my-workouts" && !isUserAuthenticated && "hidden",

        link.path === "/my-programs" && !isSubscribed && "hidden",

        link.path === "/my-programs" && !isUserAuthenticated && "hidden",

        link.path === "/history" && !isSubscribed && "hidden",

        link.path === "/history" && !isUserAuthenticated && "hidden",

        
      )}
      href={link.path}
    >
      {link.label}
    </Link>
  );
};
export default Path;
