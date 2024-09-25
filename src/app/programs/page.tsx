import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import MyPrograms from "./MyPrograms";
import prisma from "@/db/prisma";

const Page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  let isSubscribed = false;
  if (isUserAuthenticated) {
    const dbUser = await prisma.user.findUnique({
      where: {
        id: user.id,
      },
    });
    isSubscribed = dbUser?.isSubscribed ?? false;
  }
  return <MyPrograms isSubscribed={isSubscribed} />;
};
export default Page;
