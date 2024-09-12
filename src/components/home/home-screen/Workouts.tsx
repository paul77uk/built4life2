import WorkoutSkeleton from "@/components/skeletons/WorkoutSkeleton";
import { Button } from "@/components/ui/button";

import { UnlockKeyhole } from "lucide-react";
import Workout from "./Workout";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Workouts = async () => {
  const isSubscribed = true;
  const isLoading = false;
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  const workouts = [
    {
      id: 1,
      title: "BFL Triple Threat",
      description: "AMRAP in 20 minutes",
      exercises: [
        "3 Clean & Press (44kg)",
        "3 Squats (44kg)",
        "4 Farmers Walk (44kg)",
      ],
      pr: 0,
      minutes: 20,
      seconds: 0,
    },
    {
      id: 2,
      title: "BFL BodyWeight",
      description: "AMRAP in 20 minutes",
      exercises: ["10 Pushups", "10 Curls (17kg)", "10 Lunges"],
      pr: 0,
      minutes: 20,
      seconds: 0,
    },
    {
      id: 3,
      title: "BFL BodyWeight 2",
      description: "AMRAP in 20 minutes",
      exercises: ["8 Dips", "2 Pull Ups", "10 Lunges"],
      pr: 0,
      minutes: 20,
      seconds: 0,
    },
    {
      id: 4,
      title: "BFL C&P EMOM",
      description: "EMOM for 7 minutes",
      exercises: ["10 Clean & Press (28kg)"],
      minutes: 7,
      seconds: 0,
    },
    {
      id: 5,
      title: "BFL BodyWeight 3",
      description: "AMRAP in 20 minutes",
      exercises: ["10 Pushups", "8 Inverted Rows", "10 Lunges"],
      pr: 0,
      minutes: 20,
      seconds: 0,
    },
    {
      id: 6,
      title: "Grace",
      description: "For Time",
      exercises: ["30 Clean & Jerks (61kg)"],
      pr: 0,
      minutes: 0,
      seconds: 0,
    },
    {
      id: 7,
      title: "EMOM Squats",
      description: "EMOM for 10 minutes",
      exercises: ["15 BW Squats"],
      minutes: 10,
      seconds: 0,
    },
    {
      id: 8,
      title: "OZ",
      description: "For Time",
      exercises: ["100 Squat Clean Thrusters (40kg/ 20kg)"],
      minutes: 0,
      seconds: 0,
    },
    {
      id: 9,
      title: "Advanced DB Squat for Reps",
      description: "AMRAP",
      exercises: ["100 Squats (100lb/ 45kg)"],
      pr: 0,
    },
    {
      id: 10,
      title: "Beginners DB Squat for Reps",
      description: "AMRAP",
      exercises: ["50 Squats (50lb/ 25kg)"],
      pr: 0,
    },
  ];

  return (
    <div>
      {!isSubscribed || !isUserAuthenticated && (
        <div className="p-4 flex justify-center">
          <Button className="flex gap-2">
            <UnlockKeyhole />
            Subscribe to Save Workout Progress
          </Button>
        </div>
      )}

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
              <Workout
                isSubscribed={isSubscribed}
                isUserAuthenticated={isUserAuthenticated}
                key={workout.id}
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
