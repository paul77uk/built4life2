import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import Path from "./Path";

export default async function SubNav() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const isAdmin = process.env.ADMIN_EMAIL === user.email;
  const isSubscribed = true;

  const links = [
    {
      label: "Workouts",
      path: "/",
    },

    {
      label: "My Workouts",
      path: "/my-workouts",
    },
    {
      label: "Create Workout",
      path: "/create",
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
            isAdmin={isAdmin}
            isSubscribed={isSubscribed}
          />
        ))}
      </ul>
    </nav>
  );
}
