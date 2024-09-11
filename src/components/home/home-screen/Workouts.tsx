import WorkoutSkeleton from "@/components/skeletons/WorkoutSkeleton";
import { Button } from "@/components/ui/button";

import { UnlockKeyhole } from "lucide-react";
import Workout from "./Workout";

const Workouts = () => {
  const isSubscribed = true;
  const isLoading = false;

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
    },
    {
      id: 3,
      title: "BFL BodyWeight 2",
      description: "AMRAP in 20 minutes",
      exercises: ["8 Dips", "2 Pull Ups", "10 Lunges"],
    },
    {
      id: 4,
      title: "BFL C&P EMOM",
      description: "EMOM for 7 minutes",
      exercises: ["10 Clean & Press (28kg)"],
    },
    {
      id: 5,
      title: "BFL BodyWeight 3",
      description: "AMRAP in 20 minutes",
      exercises: ["10 Pushups", "10 Inverted Rows", "10 Lunges"],
    },
    {
      id: 6,
      title: "Grace",
      description: "For Time",
      exercises: ["30 Clean & Jerks (61kg)"],
    },
    {
      id: 7,
      title: "EMOM Squats",
      description: "EMOM for 10 minutes",
      exercises: ["15 BW Squats"],
    },
    {
      id: 8,
      title: "OZ",
      description: "For Time",
      exercises: ["100 Squat Clean Thrusters (40kg/ 20kg)"],
    },
  ];

  return (
    <div>
      {!isSubscribed && (
        <div className="p-4 flex justify-center">
          <Button className="flex gap-2">
            <UnlockKeyhole />
            Subscribe to Save Workout Progress
          </Button>
        </div>
      )}

      <div>
        {isLoading ? (
          <div className="flex flex-wrap gap-8 justify-center m-5">
            {[...Array(12)].map((_, i) => (
              <WorkoutSkeleton isSubscribed={isSubscribed} key={i} />
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap gap-8 justify-center  m-5">
            {workouts.map((workout) => (
              <Workout
                isSubscribed={isSubscribed}
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
