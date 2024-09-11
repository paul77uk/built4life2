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

type Workout = {
  id: number;
  title: string;
  description: string;
  exercises: string[];
  pr?: number;
  minutes?: number;
  seconds?: number;
};

const Workout = ({
  workout,
  isSubscribed,
}: {
  workout: Workout;
  isSubscribed: boolean;
}) => {
  return (
    <Card className="w-[292px] flex flex-col">
      <CardHeader>
        <CardTitle>{workout.title}</CardTitle>
        <CardDescription>{workout.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col justify-between">
        {workout.exercises.map((exercise) => (
          <div key={exercise}>
            <p>{exercise}</p>
          </div>
        ))}
      </CardContent>
      <CardFooter className="flex-1 items-end">
        {isSubscribed ? (
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
export default Workout;
