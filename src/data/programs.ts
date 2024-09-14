import { workouts } from "./workouts";

export const programs = [
  {
    title: "BFL 1.0",
    days: [
      {
        title: "Day 1",
        exercises: [
          workouts[10],
          workouts[11],
          workouts[12],
          workouts[14],
          workouts[15],
        ],
      },
      {
        title: "Day 2",
        exercises: [workouts[16]],
      },
    ],
  },
  {
    title: "BFL 2.0",
    days: [
      {
        title: "Day 1",
        exercises: [workouts[15]],
      },
    ],
  },
  {
    title: "Building The Monolith",
    days: [
      {
        title: "Day 1",
        exercises: [workouts[15]],
      },
    ],
  },
];
