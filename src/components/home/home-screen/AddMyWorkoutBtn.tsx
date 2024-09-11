"use client";

import { createMyWorkoutAction } from "@/app/my-workouts/actions";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
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
  const { toast } = useToast();

  const { mutate, isPending } = useMutation({
    mutationKey: ["createMyWorkout"],
    mutationFn: async () => createMyWorkoutAction(workout),
    onSuccess: () => {
      toast({
        title: "Workout Created",
        description: `${workout.title} Workout added to My Workouts`,
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  return (
    <Button className="w-full" onClick={() => mutate()} disabled={isPending}>
      {isPending ? "Adding..." : "Add to My Workouts"}
    </Button>
  );
};
export default AddMyWorkoutBtn;
