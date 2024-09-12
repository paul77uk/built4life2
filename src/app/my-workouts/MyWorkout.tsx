'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { FaPause, FaPlay, FaStop } from "react-icons/fa";
import { useState } from "react";
import { Plus } from "lucide-react";

type Workout = {
  id: string;
  title: string;
  description: string;
  exercises: string[];
  pr: number | null;
  minutes: number | null;
  seconds: number | null;
  createdAt: Date;
  updatedAt: Date;
};

const MyWorkout = ({ workout }: { workout: Workout }) => {
  const [totalReps, setTotalReps] = useState(0);
  return (
    <Card key={workout.id} className="w-[292px] flex flex-col">
      <CardHeader className="text-center">
        <CardTitle>{workout.title}</CardTitle>
        <CardDescription>{workout.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col justify-between flex-1 gap-4">
        <div className="mx-auto">
          {workout.exercises.map((exercise) => (
            <div key={exercise}>
              <p>{exercise}</p>
            </div>
          ))}
        </div>

        {workout.pr !== null ? (
          <div className="grid grid-cols-2 items-center text-center mx-8">
            <div>{workout.pr}</div>
            <div className="mx-auto">
              <div className="flex gap-1">
                <Button
                  className="rounded-full px-2.5 m-2.5"
                  onClick={() => setTotalReps(totalReps + 1)}
                >
                  <div>
                    {totalReps === 0 ? (
                      <Plus size={18} />
                    ) : (
                      <div className="px-1.5">{totalReps}</div>
                    )}
                  </div>
                </Button>
              </div>
            </div>
            <div className="text-xs text-gray-500">PR</div>
            <div className="text-xs text-gray-500">Total Reps</div>
          </div>
        ) : null}

        {workout.minutes !== null && (
          <div className="flex flex-col justify-end h-full">
            <div className="text-center text-6xl font-semibold text-gray-700 m-3">
              <div>
                {workout.minutes}:{workout.seconds}0
              </div>
            </div>
            <div>
              <Card>
                <div className="flex items-center justify-evenly py-3">
                  <Button>
                    <FaPlay />
                  </Button>
                  <Button>
                    <FaPause />
                  </Button>
                  <Button>
                    <FaStop />
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        )}

        <div>
          <Button className="w-full">Save Result</Button>
        </div>
      </CardContent>
    </Card>
  );
};
export default MyWorkout;
