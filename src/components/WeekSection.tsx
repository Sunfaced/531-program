// components/WeekSection.tsx
import { useState, useEffect, useMemo } from "react";
import type { Week, Percent, AppState } from "../types.js";
import { WorkoutRow } from "./WorkoutRow.js";
import { PercentHeader } from "./PercentHeader.js";

interface WeekSectionProps {
  week: Week;
  percents: Percent[];
  target1RM: number | null;
  isCurrent: boolean;
  state: AppState; // ✅ ДОБАВЛЯЕМ state в пропсы
  getCellKey: (week: number, session: "I" | "II", percent: Percent) => string;
  getCellState: (
    week: number,
    session: "I" | "II",
    percent: Percent,
  ) => {
    cell: any;
    completed: boolean;
    completedSets: number;
  };
  onToggleCell: (week: number, session: "I" | "II", percent: Percent) => void;
  onIncrementSet: (
    week: number,
    session: "I" | "II",
    percent: Percent,
    maxSets: number,
  ) => void;
  onResetCell: (week: number, session: "I" | "II", percent: Percent) => void;
  onSelectSession: (session: "I" | "II" | null) => void;
  selectedSession: "I" | "II" | null;
}

export function WeekSection({
  week,
  percents,
  target1RM,
  isCurrent,
  state, // ✅ ПОЛУЧАЕМ state
  getCellKey,
  getCellState,
  onToggleCell,
  onIncrementSet,
  onResetCell,
  onSelectSession,
  selectedSession,
}: WeekSectionProps) {
  const [expanded, setExpanded] = useState(isCurrent);

  useEffect(() => {
    if (isCurrent) {
      setExpanded(true);
    }
  }, [isCurrent]);

  // ✅ ИСПОЛЬЗУЕМ useMemo ДЛЯ ПЕРЕСЧЕТА ПРОГРЕССА
  const progress = useMemo(() => {
    let total = 0;
    let done = 0;
    
    week.workouts.forEach((workout) => {
      const cells = Object.keys(workout.cells);
      cells.forEach((p) => {
        const percent = parseInt(p) as Percent;
        const key = getCellKey(week.week, workout.session, percent);
        // ✅ ИСПОЛЬЗУЕМ state ИЗ ПРОПСОВ
        if (state.completedCells.has(key)) {
          done++;
        }
        total++;
      });
    });
    
    return total > 0 ? `${done}/${total}` : "0/0";
  }, [week, state.completedCells, getCellKey]); // ✅ ЗАВИСИМ ОТ state.completedCells

  if (week.isCompetition) {
    return (
      <div className="week-section competition">
        <div className="week-header" onClick={() => setExpanded(!expanded)}>
          <span className="week-number">Неделя {week.week}</span>
          <span className="week-label">🏆 ПРОХОДКА</span>
          <span className="expand-icon">{expanded ? "▼" : "▶"}</span>
        </div>
        {expanded && (
          <div className="week-content">
            <div className="competition-message">
              <p>💪 Соревновательная неделя!</p>
              <p>Проверьте свой 1ПМ на соревнованиях.</p>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`week-section ${expanded ? "expanded" : ""}`}>
      <div className="week-header" onClick={() => setExpanded(!expanded)}>
        <span className="week-number">Неделя {week.week}</span>
        <span className="week-progress">{progress}</span>
        <span className="expand-icon">{expanded ? "▼" : "▶"}</span>
      </div>
      {expanded && (
        <div className="week-content">
          <div className="session-selector">
            <button
              className={`session-btn ${selectedSession === "I" ? "active" : ""}`}
              onClick={() => onSelectSession("I")}
            >
              Тренировка I
            </button>
            <button
              className={`session-btn ${selectedSession === "II" ? "active" : ""}`}
              onClick={() => onSelectSession("II")}
            >
              Тренировка II
            </button>
            <button
              className={`session-btn ${selectedSession === null ? "active" : ""}`}
              onClick={() => onSelectSession(null)}
            >
              Все
            </button>
          </div>

          <div className="table-scroll">
            <div className="table-header">
              <div className="session-label">Тр-ка</div>
              {percents.map((percent) => (
                <div key={percent} className="header-cell">
                  <PercentHeader percent={percent} target1RM={target1RM} />
                </div>
              ))}
            </div>

            {week.workouts
              .filter(
                (w) =>
                  selectedSession === null || w.session === selectedSession,
              )
              .map((workout) => (
                <WorkoutRow
                  key={workout.session}
                  session={workout.session}
                  workout={workout}
                  percents={percents}
                  target1RM={target1RM}
                  getCellKey={(percent) =>
                    getCellKey(week.week, workout.session, percent)
                  }
                  getCellState={(percent) =>
                    getCellState(week.week, workout.session, percent)
                  }
                  onToggleCell={(percent) =>
                    onToggleCell(week.week, workout.session, percent)
                  }
                  onIncrementSet={(percent, max) =>
                    onIncrementSet(week.week, workout.session, percent, max)
                  }
                  onResetCell={(percent) =>
                    onResetCell(week.week, workout.session, percent)
                  }
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}