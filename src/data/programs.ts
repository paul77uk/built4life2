import { workouts } from "./workouts";

export const programs = [
  {
    title: "BFL 1.0",
    days: [
      {
        title: "Day 1",
        workouts: [
          workouts[10],
          workouts[41],
          workouts[42],
          workouts[14],
          workouts[43],
          // workouts[17],
        ],
      },
      {
        title: "Day 2",
        workouts: [
          workouts[16],
          workouts[18],
          workouts[19],
          workouts[20],
          workouts[22],
          workouts[21],
        ],
      },
      {
        title: "Day 3",
        workouts: [
          workouts[25],
          workouts[26],
          workouts[27],
          workouts[28],
          workouts[29],
          workouts[30],
          workouts[31],
          workouts[32],
        ],
      },
      {
        title: "Day 4",
        workouts: [workouts[4]],
      },
      {
        title: "Day 5",
        workouts: [
          workouts[23],
          workouts[33],
          workouts[34],
          workouts[35],
          workouts[36],
          workouts[37],
          workouts[39],
          workouts[40],
        ],
      },
      {
        title: "Day 6",
        workouts: [workouts[38]],
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
        workouts: [workouts[15], workouts[26], workouts[1]],
      },
    ],
  },
];
