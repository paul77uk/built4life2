"use client";

import { createMyWorkoutAction } from "@/app/my-workouts/actions";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";

type Workout = {
  id: number;
  title: string;
  description: string;
  exercises: string[];
  pr?: number;
  minutes?: number;
  seconds?: number;
};

const AddMyWorkoutBtn = ({ workout }: { workout: Workout }) => {
  const { mutate, isPending } = useMutation({
    mutationKey: ["createMyWorkout"],
    mutationFn: async () => createMyWorkoutAction(workout),
    onSuccess: () => {
      alert(`${workout.title} Workout added to My Workouts`);
    },
    onError: (error) => {
      alert(error.message);
    },
  });

  return (
    <Button className="w-full" onClick={() => mutate()} disabled={isPending}>
      {isPending ? "Adding..." : "Add to My Workouts"}
    </Button>
  );
};
export default AddMyWorkoutBtn;
