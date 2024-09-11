"use server";

import prisma from "@/db/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";

type MyWorkout = {
  title: string;
  description: string;
  exercises: string[];
  pr?: number;
  minutes?: number;
  seconds?: number;
};

export const createMyWorkoutAction = async ({
  title,
  description,
  exercises,
  pr,
  minutes,
  seconds,
}: MyWorkout) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const workout = await prisma.workout.create({
    data: {
      title,
      description,
      exercises,
      minutes,
      pr,
      seconds,
      userId: user.id,
    },
  })

  revalidatePath("/my-workouts");

  return { success: true, workout };
};
