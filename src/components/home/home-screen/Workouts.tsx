import WorkoutSkeleton from "@/components/skeletons/WorkoutSkeleton";
import { Button } from "@/components/ui/button";

import { UnlockKeyhole } from "lucide-react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import WorkoutScreen from "./WorkoutScreen";
import { workouts } from "@/data/workouts";

const Workouts = async () => {
  const isSubscribed = true;
  const isLoading = false;
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  return (
    <div >
      {!isSubscribed ||
        (!isUserAuthenticated && (
          <div className="p-4 flex justify-center">
            <Button className="flex gap-2">
              <UnlockKeyhole />
              Subscribe to Save Workout Progress
            </Button>
          </div>
        ))}

      <div>
        {isLoading ? (
          <div className="flex flex-wrap gap-8  justify-center m-5">
            {[...Array(12)].map((_, i) => (
              <WorkoutSkeleton isSubscribed={isSubscribed} key={i} />
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap gap-8 justify-center m-5">
            {workouts.map((workout) => (
              <WorkoutScreen
                isSubscribed={isSubscribed}
                isUserAuthenticated={isUserAuthenticated}
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
