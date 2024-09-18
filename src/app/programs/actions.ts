"use server";

import { programs } from "@/data/programs";
import { workouts } from "@/data/workouts";
import prisma from "@/db/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Program, Workout } from "@prisma/client";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createMyProgramAction = async ({
  // title,
  // days,
  // workouts,
  program1,
}: {
  program1: Partial<Program>;
}) =>
  // & {
  //   days: Partial<Day>[];
  //   workouts: Partial<Workout>[];
  // }
  {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    const existingWorkouts = await prisma.workout.findMany({
      where: {
        userId: user.id,
      },
    });

    programs.forEach(async (program) => {
      if (program.title === program1.title) {
        const programDB = await prisma.program.create({
          data: {
            title: program.title ?? "",
            userId: user.id,
          },
        });
        program.days.forEach(async (day) => {
          const dayDB = await prisma.day.create({
            data: {
              title: day.title ?? "",
              programId: programDB.id,
            },
          });
          day.workouts.forEach(async (workout) => {
            // if (!existingWorkouts.find((w) => w.title === workout.title)) {
            await prisma.day.update({
              include: {
                workouts: true,
              },
              where: { id: dayDB.id },
              data: {
                workouts: {
                  connectOrCreate: {
                    where: {
                      title: workout.title ?? "",
                    },
                    create: {
                      title: workout.title ?? "",
                      description: workout.description ?? "",
                      exercises: workout.exercises,
                      pr: workout.pr,
                      minutes: workout.minutes,
                      seconds: workout.seconds,
                      userId: user.id,
                    },
                  },
                },
              },
            });
            // }
            // else {
            //   await prisma.day.update({
            //     include: {
            //       workouts: true,
            //     },
            //     where: { id: dayDB.id },
            //     data: {
            //       workouts: {
            //         connect: {
            //           title: workout.title ?? "",
            //         },
            //       },
            //     },
            //   });
            // }
          });
        });
      }
    });

    // workouts.forEach(async (workout) => {
    //   if (!existingWorkouts.find((w) => w.title === workout.title)) {
    //     await prisma.workout.create({
    //       data: {
    //         title: workout.title ?? "",
    //         description: workout.description ?? "",
    //         exercises: workout.exercises,
    //         minutes: workout.minutes,
    //         seconds: workout.seconds,
    //         userId: user.id,
    //       },
    //     });
    //   }
    // });

    // const programs = await prisma.program.create({
    //   include: {
    //     days: true,
    //   },
    //   data: {
    //     title: title ?? "",
    //     userId: user.id,
    //     days: {
    //       createMany: {
    //         data: days.map((day) => ({
    //           title: day.title ?? "",
    //         })),
    //       },
    //     },
    //   },
    // });

    revalidatePath("/my-programs");
    redirect("/my-programs");

    return { success: true };
  };
