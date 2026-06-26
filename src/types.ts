export type Percent = 60 | 65 | 70 | 75 | 80 | 85 | 90 | 95 | 97.5;

export type WorkoutCell = {
  sets: number;
  reps: number;
} | null;

export type Workout = {
  session: "I" | "II";
  cells: Partial<Record<Percent, WorkoutCell>>;
};

export type Week = {
  week: number;
  workouts: [Workout, Workout];
  isCompetition?: boolean;
};

export type AppState = {
  target1RM: number | null;
  completedCells: Set<string>;
  completedSets: Record<string, number>;
  currentWeek: number;
  currentSession: "I" | "II" | null;
};
