// components/ProgramTable.tsx
import { useMemo } from "react";
import { programData, allPercents } from "../data/program.js";
import { WeekSection } from "./WeekSection.js";
import { useProgramState } from "../hooks/useProgramState.js";
import type { Percent } from "../types.js";

export function ProgramTable() {
  const { state, toggleCell, incrementSet, resetCell, setCurrentSession } =
    useProgramState();

  // Создаём ключ для принудительного обновления при изменении target1RM
  const key = useMemo(() => {
    return `table-${state.target1RM || "null"}`;
  }, [state.target1RM]);

  const getCellKey = (week: number, session: "I" | "II", percent: Percent) => {
    return `week-${week}-session-${session}-${percent}`;
  };

  const getCellState = (
    week: number,
    session: "I" | "II",
    percent: Percent,
  ) => {
    const key = getCellKey(week, session, percent);
    const weekData = programData.find((w) => w.week === week);
    const workout = weekData?.workouts.find((w) => w.session === session);
    const cell = workout?.cells[percent] || null;

    return {
      cell,
      completed: state.completedCells.has(key),
      completedSets: state.completedSets[key] || 0,
    };
  };

  return (
    <div className="program-table" key={key}>
      {programData.map((week) => (
        <WeekSection
          key={week.week}
          week={week}
          percents={allPercents}
          target1RM={state.target1RM}
          isCurrent={week.week === state.currentWeek}
          state={state} // ✅ ПЕРЕДАЕМ state
          getCellKey={getCellKey}
          getCellState={getCellState}
          onToggleCell={toggleCell}
          onIncrementSet={incrementSet}
          onResetCell={resetCell}
          onSelectSession={setCurrentSession}
          selectedSession={state.currentSession}
        />
      ))}
    </div>
  );
}
