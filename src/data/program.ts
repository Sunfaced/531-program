import type { Week, Percent } from "../types.js";

export const programData: Week[] = [
  // Неделя 1
  {
    week: 1,
    workouts: [
      {
        session: "I",
        cells: {
          60: { sets: 1, reps: 5 },
          65: { sets: 1, reps: 5 },
          70: { sets: 1, reps: 5 },
          75: { sets: 3, reps: 4 },
        },
      },
      {
        session: "II",
        cells: {
          60: { sets: 1, reps: 5 },
          65: { sets: 1, reps: 5 },
          70: { sets: 2, reps: 5 },
        },
      },
    ],
  },
  // Неделя 2
  {
    week: 2,
    workouts: [
      {
        session: "I",
        cells: {
          60: { sets: 1, reps: 5 },
          65: { sets: 1, reps: 5 },
          70: { sets: 1, reps: 5 },
          75: { sets: 2, reps: 4 },
          80: { sets: 2, reps: 3 },
        },
      },
      {
        session: "II",
        cells: {
          60: { sets: 1, reps: 5 },
          65: { sets: 1, reps: 5 },
          70: { sets: 1, reps: 5 },
          75: { sets: 2, reps: 4 },
        },
      },
    ],
  },
  // Неделя 3
  {
    week: 3,
    workouts: [
      {
        session: "I",
        cells: {
          60: { sets: 1, reps: 5 },
          65: { sets: 1, reps: 5 },
          70: { sets: 1, reps: 5 },
          75: { sets: 1, reps: 4 },
          80: { sets: 1, reps: 3 },
          85: { sets: 3, reps: 2 },
        },
      },
      {
        session: "II",
        cells: {
          60: { sets: 1, reps: 5 },
          65: { sets: 1, reps: 5 },
          70: { sets: 3, reps: 5 },
        },
      },
    ],
  },
  // Неделя 4
  {
    week: 4,
    workouts: [
      {
        session: "I",
        cells: {
          60: { sets: 1, reps: 5 },
          65: { sets: 1, reps: 5 },
          70: { sets: 3, reps: 3 },
          75: { sets: 1, reps: 3 },
          80: { sets: 3, reps: 3 },
        },
      },
      {
        session: "II",
        cells: {
          60: { sets: 1, reps: 5 },
          65: { sets: 2, reps: 5 },
          70: { sets: 1, reps: 4 },
          75: { sets: 3, reps: 4 },
        },
      },
    ],
  },
  // Неделя 5
  {
    week: 5,
    workouts: [
      {
        session: "I",
        cells: {
          60: { sets: 1, reps: 5 },
          65: { sets: 1, reps: 5 },
          70: { sets: 1, reps: 4 },
          75: { sets: 1, reps: 4 },
          80: { sets: 2, reps: 3 },
          85: { sets: 3, reps: 2 },
        },
      },
      {
        session: "II",
        cells: {
          65: { sets: 2, reps: 4 },
          70: { sets: 4, reps: 4 },
          75: { sets: 3, reps: 4 },
        },
      },
    ],
  },
  // Неделя 6
  {
    week: 6,
    workouts: [
      {
        session: "I",
        cells: {
          60: { sets: 1, reps: 5 },
          65: { sets: 1, reps: 5 },
          70: { sets: 1, reps: 4 },
          75: { sets: 1, reps: 4 },
          80: { sets: 3, reps: 3 },
        },
      },
      {
        session: "II",
        cells: {
          60: { sets: 1, reps: 5 },
          65: { sets: 1, reps: 5 },
          70: { sets: 3, reps: 5 },
        },
      },
    ],
  },
  // Неделя 7
  {
    week: 7,
    workouts: [
      {
        session: "I",
        cells: {
          60: { sets: 1, reps: 5 },
          65: { sets: 1, reps: 5 },
          70: { sets: 1, reps: 4 },
          75: { sets: 1, reps: 4 },
          80: { sets: 1, reps: 3 },
          85: { sets: 3, reps: 2 },
        },
      },
      {
        session: "II",
        cells: {
          60: { sets: 1, reps: 5 },
          65: { sets: 1, reps: 5 },
          70: { sets: 1, reps: 4 },
          75: { sets: 3, reps: 4 },
        },
      },
    ],
  },
  // Неделя 8
  {
    week: 8,
    workouts: [
      {
        session: "I",
        cells: {
          60: { sets: 1, reps: 5 },
          65: { sets: 1, reps: 5 },
          70: { sets: 1, reps: 4 },
          75: { sets: 1, reps: 4 },
          80: { sets: 3, reps: 3 },
        },
      },
      {
        session: "II",
        cells: {
          60: { sets: 1, reps: 5 },
          65: { sets: 1, reps: 5 },
          70: { sets: 3, reps: 5 },
        },
      },
    ],
  },
  // Неделя 9
  {
    week: 9,
    workouts: [
      {
        session: "I",
        cells: {
          60: { sets: 1, reps: 5 },
          65: { sets: 2, reps: 5 },
          70: { sets: 2, reps: 4 },
          75: { sets: 2, reps: 3 },
          80: { sets: 2, reps: 3 },
          85: { sets: 2, reps: 2 },
          90: { sets: 3, reps: 1 },
        },
      },
      {
        session: "II",
        cells: {
          60: { sets: 1, reps: 5 },
          65: { sets: 1, reps: 5 },
          70: { sets: 1, reps: 5 },
          75: { sets: 1, reps: 4 },
          80: { sets: 1, reps: 3 },
          85: { sets: 2, reps: 2 },
        },
      },
    ],
  },
  // Неделя 10
  {
    week: 10,
    workouts: [
      {
        session: "I",
        cells: {
          60: { sets: 1, reps: 5 },
          65: { sets: 1, reps: 5 },
          70: { sets: 1, reps: 4 },
          75: { sets: 1, reps: 4 },
          80: { sets: 2, reps: 3 },
          85: { sets: 3, reps: 2 },
        },
      },
      {
        session: "II",
        cells: {
          60: { sets: 1, reps: 5 },
          65: { sets: 1, reps: 5 },
          70: { sets: 1, reps: 5 },
          75: { sets: 1, reps: 4 },
          80: { sets: 3, reps: 3 },
        },
      },
    ],
  },
  // Неделя 11
  {
    week: 11,
    workouts: [
      {
        session: "I",
        cells: {
          60: { sets: 1, reps: 5 },
          65: { sets: 1, reps: 5 },
          70: { sets: 2, reps: 4 },
          75: { sets: 1, reps: 4 },
          80: { sets: 1, reps: 3 },
          85: { sets: 2, reps: 2 },
          90: { sets: 3, reps: 1 },
        },
      },
      {
        session: "II",
        cells: {
          60: { sets: 1, reps: 5 },
          65: { sets: 1, reps: 5 },
          70: { sets: 2, reps: 5 },
          75: { sets: 2, reps: 4 },
          80: { sets: 2, reps: 3 },
          85: { sets: 2, reps: 2 },
          90: { sets: 2, reps: 1 },
        },
      },
    ],
  },
  // Неделя 12
  {
    week: 12,
    workouts: [
      {
        session: "I",
        cells: {
          60: { sets: 1, reps: 5 },
          65: { sets: 1, reps: 5 },
          70: { sets: 1, reps: 5 },
          75: { sets: 1, reps: 4 },
          80: { sets: 1, reps: 3 },
          85: { sets: 1, reps: 2 },
          90: { sets: 3, reps: 1 },
        },
      },
      {
        session: "II",
        cells: {
          60: { sets: 1, reps: 5 },
          65: { sets: 1, reps: 5 },
          70: { sets: 1, reps: 5 },
          75: { sets: 1, reps: 4 },
          80: { sets: 1, reps: 3 },
          85: { sets: 3, reps: 2 },
        },
      },
    ],
  },
  // Неделя 13
  {
    week: 13,
    workouts: [
      {
        session: "I",
        cells: {
          60: { sets: 1, reps: 5 },
          65: { sets: 1, reps: 5 },
          70: { sets: 1, reps: 5 },
          75: { sets: 1, reps: 4 },
          80: { sets: 1, reps: 3 },
          85: { sets: 1, reps: 2 },
          90: { sets: 2, reps: 1 },
          95: { sets: 1, reps: 1 },
        },
      },
      {
        session: "II",
        cells: {
          60: { sets: 1, reps: 5 },
          65: { sets: 1, reps: 5 },
          70: { sets: 1, reps: 5 },
          75: { sets: 1, reps: 4 },
          80: { sets: 1, reps: 3 },
          85: { sets: 1, reps: 2 },
          90: { sets: 3, reps: 1 },
        },
      },
    ],
  },
  // Неделя 14
  {
    week: 14,
    workouts: [
      {
        session: "I",
        cells: {
          60: { sets: 1, reps: 5 },
          65: { sets: 1, reps: 5 },
          70: { sets: 1, reps: 5 },
          75: { sets: 1, reps: 4 },
          80: { sets: 1, reps: 3 },
          85: { sets: 2, reps: 2 },
          90: { sets: 3, reps: 1 },
        },
      },
      {
        session: "II",
        cells: {
          60: { sets: 1, reps: 5 },
          65: { sets: 1, reps: 5 },
          70: { sets: 1, reps: 5 },
          75: { sets: 1, reps: 4 },
          80: { sets: 3, reps: 3 },
        },
      },
    ],
  },
  // Неделя 15
  {
    week: 15,
    workouts: [
      {
        session: "I",
        cells: {
          60: { sets: 1, reps: 5 },
          65: { sets: 1, reps: 5 },
          70: { sets: 1, reps: 5 },
          75: { sets: 1, reps: 4 },
          80: { sets: 1, reps: 3 },
          85: { sets: 1, reps: 2 },
          90: { sets: 2, reps: 1 },
          97.5: { sets: 1, reps: 1 },
        },
      },
      {
        session: "II",
        cells: {
          60: { sets: 1, reps: 5 },
          65: { sets: 1, reps: 5 },
          70: { sets: 1, reps: 5 },
          75: { sets: 1, reps: 4 },
          80: { sets: 1, reps: 3 },
          85: { sets: 2, reps: 2 },
        },
      },
    ],
  },
  // Неделя 16
  {
    week: 16,
    workouts: [
      {
        session: "I",
        cells: {
          60: { sets: 1, reps: 5 },
          65: { sets: 1, reps: 5 },
          70: { sets: 1, reps: 5 },
          75: { sets: 1, reps: 4 },
          80: { sets: 1, reps: 3 },
          85: { sets: 3, reps: 2 },
        },
      },
      {
        session: "II",
        cells: {
          60: { sets: 1, reps: 5 },
          65: { sets: 1, reps: 5 },
          70: { sets: 1, reps: 5 },
          75: { sets: 1, reps: 4 },
          80: { sets: 1, reps: 3 },
        },
      },
    ],
  },
  // Неделя 17 - ПРОХОДКА
  {
    week: 17,
    isCompetition: true,
    workouts: [
      { session: "I", cells: {} },
      { session: "II", cells: {} },
    ],
  },
];

export const allPercents: Percent[] = [60, 65, 70, 75, 80, 85, 90, 95, 97.5];
