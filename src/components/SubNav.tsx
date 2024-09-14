import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import Path from "./Path";

export default async function SubNav() {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  const isSubscribed = true;

  const links = [
    {
      label: "Workouts",
      path: "/",
    },
    {
      label: "Programs",
      path: "/programs",
    },

    {
      label: "My Workouts",
      path: "/my-workouts",
    },
    {
      label: "History",
      path: "/history",
    },
  ];

  return (
    <nav className=" bg-[#333333] w-full">
      <ul className="flex flex-wrap w-full justify-center text-xs uppercase font-semibold">
        {links.map((link) => (
          <Path
            key={link.path}
            link={link}
            isSubscribed={isSubscribed}
            isUserAuthenticated={isUserAuthenticated}
          />
        ))}
      </ul>
    </nav>
  );
}
