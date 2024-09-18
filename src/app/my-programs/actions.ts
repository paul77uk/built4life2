"use server";

import prisma from "@/db/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const getMyProgramsAction = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const programs = await prisma.program.findMany({
    where: { userId: user.id },
    include: {
      days: {
        include: {
          workouts: true,
        },
      },
    },
  });

  return programs;
};
