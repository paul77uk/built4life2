import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";
import AddMyWorkoutBtn from "./AddMyWorkoutBtn";
import { Workout } from "@prisma/client";

const WorkoutScreen = ({
  workout,
  isSubscribed,
}: // isUserAuthenticated,
{
  workout: Partial<Workout>;
  isSubscribed: boolean;
  // isUserAuthenticated: boolean;
}) => {
  return (
    <Card className="w-[292px] flex flex-col">
      <CardHeader>
        <CardTitle>{workout.title}</CardTitle>
        <CardDescription>{workout.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col justify-between">
        {workout.exercises && (
          <div>
            {workout.exercises.map((exercise) => (
              <div key={exercise}>
                <p>{exercise}</p>
              </div>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex-1 items-end">
        {isSubscribed ? (
          // && isUserAuthenticated
          <AddMyWorkoutBtn workout={workout} />
        ) : (
          <Button disabled className="flex gap-2 w-full">
            <LockKeyhole /> <div>Add to My Workouts</div>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
export default WorkoutScreen;
