import { workouts } from "./workouts";

export const programs = [
  {
    title: "BFL 1.0",
    days: [
      {
        title: "Day 1",
        workouts: [
          workouts[10],
          workouts[11],
          workouts[12],
          workouts[14],
          workouts[15],
          workouts[17],
        ],
      },
      {
        title: "Day 2",
        workouts: [
          workouts[16],
          workouts[18],
          workouts[19],
          workouts[20],
          workouts[21],
          workouts[22],
          workouts[23],
          workouts[24],
        ],
      },
      {
        title: "Day 3",
        workouts: [workouts[0]],
      },
      {
        title: "Day 4",
        workouts: [workouts[4]],
      },
      {
        title: "Day 5",
        workouts: [workouts[25]],
      },
    ],
  },
  {
    title: "BFL 2.0",
    days: [
      {
        title: "Day 1",
        workouts: [workouts[15]],
      },
    ],
  },
  {
    title: "Building The Monolith",
    days: [
      {
        title: "Day 1",
        workouts: [workouts[15], workouts[26]],
      },
    ],
  },
];
