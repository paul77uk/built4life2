import prisma from "@/db/prisma";
import MyWorkout from "./MyWorkout";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const MyWorkoutsPage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const workouts = await prisma.workout.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: 'asc' },
  });

  return (
    <div className="flex flex-wrap gap-5 my-5 justify-center">
      {workouts.map((workout) => (
        <MyWorkout key={workout.id} workout={workout} />
      ))}
    </div>
  );
};
export default MyWorkoutsPage;
