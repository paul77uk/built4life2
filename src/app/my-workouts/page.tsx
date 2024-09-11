import BaseLayout from "@/components/BaseLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import TotalRepsBtn from "./TotalRepsBtn";

import { Button } from "@/components/ui/button";
import { FaPause, FaPlay, FaStop } from "react-icons/fa";
import prisma from "@/db/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const workouts = await prisma.workout.findMany({
    where: { userId: user.id },
  });

  return (
    <BaseLayout>
      <div className="flex flex-wrap gap-5 my-5 justify-center">
        {workouts.map((workout) => (
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
                    <TotalRepsBtn />
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
        ))}
      </div>
    </BaseLayout>
  );
};
export default Page;
