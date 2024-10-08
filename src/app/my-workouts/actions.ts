"use server";

import prisma from "@/db/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Workout } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// TODO: check no duplicate of the hard coded workouts in the database

export const createMyWorkoutAction = async ({
  title,
  description,
  exercises,
  pr,
  minutes,
  seconds,
}: Partial<Workout>) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  // check if the workout already exists
  const existingWorkout = await prisma.workout.findFirst({
    where: {
      userId: user.id,
      title,
    },
  });

  // if the workout already exists, return an error
  if (existingWorkout) {
    // return { success: false, error: "Workout already exists" };
    throw new Error("Workout already exists in My Workouts");
  }

  // else, create the workout

  const workout = await prisma.workout.create({
    data: {
      title: title ?? "",
      description: description ?? "",
      exercises,
      minutes,
      pr,
      seconds,
      userId: user.id,
    },
  });

  revalidatePath("/my-workouts");
  redirect("/my-workouts");

  return { success: true, workout };
};

export const updateMyWorkoutAction = async ({
  pr,
  id,
}: {
  pr: number;
  id?: string;
}) => {
  const workout = await prisma.workout.update({
    where: { id },
    data: {
      pr,
    },
  });

  revalidatePath("/my-workouts");
  revalidatePath("/my-programs");

  return { success: true, workout };
};

export const getMyWorkoutsAction = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const workouts = await prisma.workout.findMany({
    where: { userId: user.id },
    orderBy: { title: "desc" },
  });

  return workouts;
};
