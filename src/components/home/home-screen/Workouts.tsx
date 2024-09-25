import WorkoutSkeleton from "@/components/skeletons/WorkoutSkeleton";
import { Button } from "@/components/ui/button";

import { UnlockKeyhole } from "lucide-react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import WorkoutScreen from "./WorkoutScreen";
import { workouts } from "@/data/workouts";
import Link from "next/link";
import prisma from "@/db/prisma";

const Workouts = async () => {
  const isLoading = false;
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

  return (
    <div>
      {!isSubscribed && (
        <div className="p-4 flex justify-center">
          <Link href={"pricing"}>
            <Button className="flex gap-2">
              <UnlockKeyhole />
              Subscribe to Save Workout Progress
            </Button>
          </Link>
        </div>
      )}

      <div>
        {isLoading ? (
          <div className="flex flex-wrap gap-8  justify-center m-5">
            {[...Array(12)].map((_, i) => (
              <WorkoutSkeleton isSubscribed={isSubscribed || false} key={i} />
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap gap-8 justify-center m-5">
            {workouts.map((workout) => (
              <WorkoutScreen
                isSubscribed={isSubscribed}
                // isUserAuthenticated={isUserAuthenticated}
                key={workout.title}
                workout={workout}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Workouts;
