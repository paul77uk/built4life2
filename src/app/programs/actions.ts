"use server";

import { programs } from "@/data/programs";
import { workouts } from "@/data/workouts";
import prisma from "@/db/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Program, Workout } from "@prisma/client";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// TODO: check no duplicate of the hard coded programs in the database

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

    const existingPrograms = await prisma.program.findMany({
      where: {
        userId: user.id,
      },
    });

    const currentProgram = programs.find(
      (program) => program.title === program1.title
    );

    programs.forEach(async (program) => {});

    if (existingPrograms.some((program) => program.title === program1.title)) {
      throw new Error("Program already exists in My Programs");
    }
    
    await prisma.program.create({
      data: {
        title: currentProgram?.title ?? "",
        userId: user.id,
        days: {
          create: currentProgram?.days.map((day) => ({
            title: day.title,
            workouts: {
              create: day.workouts.map((workout, index) => ({
                order: index,
                workout: {
                  connectOrCreate: {
                    where: { title: workout.title },
                    create: {
                      title: workout.title,
                      description: workout.description ?? "",
                      exercises: workout.exercises,
                      pr: workout.pr,
                      minutes: workout.minutes,
                      seconds: workout.seconds,
                      userId: user.id,
                    },
                  },
                },
              })),
            },
          })),
        },
      },
    });

    // programs.forEach(async (program) => {
    //   if (program.title === program1.title) {
    //     const programDB = await prisma.program.create({
    //       data: {
    //         title: program.title ?? "",
    //         userId: user.id,
    //       },
    //     });
    //     program.days.forEach(async (day) => {
    //       const dayDB = await prisma.day.create({
    //         data: {
    //           title: day.title ?? "",
    //           programId: programDB.id,
    //         },
    //       });

    //       day.workouts.forEach(async (workout, index) => {
    //         await prisma.day.update({
    //           include: {
    //             workouts: {
    //               include: { workout: true },
    //             },
    //           },
    //           where: { id: dayDB.id },
    //           data: {
    //             workouts: {
    //               create: [
    //                 {
    //                   order: index,
    //                   workout: {
    //                     connectOrCreate: {
    //                       where: { title: workout.title },
    //                       create: {
    //                         title: workout.title,
    //                         description: workout.description,
    //                         exercises: workout.exercises,
    //                         pr: workout.pr,
    //                         minutes: workout.minutes,
    //                         seconds: workout.seconds,
    //                         userId: user.id,
    //                       },
    //                     },
    //                   },
    //                 },
    //               ],
    //             },
    //           },
    //         });
    //       });
    //     });
    //   }
    // });

    revalidatePath("/my-programs");
    redirect("/my-programs");

    return { success: true };
  };
