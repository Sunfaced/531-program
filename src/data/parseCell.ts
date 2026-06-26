import type { WorkoutCell } from "../types.js";

export function parseCell(value: string | number): WorkoutCell {
  if (value === null || value === undefined || value === "") return null;

  const str = String(value).trim();
  if (str === "") return null;

  const match = str.match(/^(\d+)\s*[\*×]\s*(\d+)$/);
  if (match) {
    return { sets: parseInt(match[1], 10), reps: parseInt(match[2], 10) };
  }

  const num = parseInt(str, 10);
  if (!isNaN(num) && num > 0) {
    return { sets: 1, reps: num };
  }

  return null;
}
