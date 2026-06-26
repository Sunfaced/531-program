import type { Workout, Percent } from "../types.js";
import { WorkoutCell } from "./WorkoutCell.js";

interface WorkoutRowProps {
  session: "I" | "II";
  workout: Workout;
  percents: Percent[];
  target1RM: number | null;
  getCellKey: (percent: Percent) => string;
  getCellState: (percent: Percent) => {
    cell: any;
    completed: boolean;
    completedSets: number;
  };
  onToggleCell: (percent: Percent) => void;
  onIncrementSet: (percent: Percent, maxSets: number) => void;
  onResetCell: (percent: Percent) => void;
}

export function WorkoutRow({
  session,
  workout,
  percents,
  target1RM,
  getCellKey,
  getCellState,
  onIncrementSet,
  onResetCell,
}: WorkoutRowProps) {
  return (
    <div className="workout-row">
      <div className="session-label">{session}</div>
      {percents.map((percent) => {
        const cellData = workout.cells[percent];
        const state = getCellState(percent);

        return (
          <div key={percent} className="cell-wrapper">
            {cellData ? (
              <WorkoutCell
                percent={percent}
                cell={cellData}
                target1RM={target1RM}
                cellKey={getCellKey(percent)}
                completedSets={state.completedSets}
                onIncrementSet={(max) => onIncrementSet(percent, max)}
                onReset={() => onResetCell(percent)}
              />
            ) : (
              <div className="workout-cell empty">—</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
