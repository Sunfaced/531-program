// components/WorkoutCell.tsx
import { useState, useRef } from "react";
import type { WorkoutCell as WorkoutCellType, Percent } from "../types.js";
import { weightAtPercent, formatWeight } from "../lib/weights.js";

interface WorkoutCellProps {
  percent: Percent;
  cell: WorkoutCellType;
  target1RM: number | null;
  cellKey: string;
  completedSets: number;
  onIncrementSet: (maxSets: number) => void;
  onReset: () => void;
}

export function WorkoutCell({
  percent,
  cell,
  target1RM,
  completedSets,
  onIncrementSet,
  onReset,
}: WorkoutCellProps) {
  const [showReset, setShowReset] = useState(false);
  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  if (!cell) {
    return <div className="workout-cell empty">—</div>;
  }

  const weight = target1RM ? weightAtPercent(target1RM, percent) : 0;
  const totalSets = cell.sets;
  const progress = Math.min(completedSets, totalSets);
  const isComplete = progress === totalSets;

  const handleTouchStart = () => {
    longPressTimer.current = setTimeout(() => {
      setShowReset(true);
      if (navigator.vibrate) {
        navigator.vibrate(10);
      }
    }, 500);
  };

  const handleTouchEnd = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
  };

  const handleClick = () => {
    if (showReset) {
      onReset();
      setShowReset(false);
    } else {
      if (isComplete) {
        onReset();
      } else {
        onIncrementSet(totalSets);
      }
    }
  };

  const handleSetClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    if (index < progress) {
      onReset();
      for (let i = 0; i < index; i++) {
        onIncrementSet(totalSets);
      }
    } else {
      onIncrementSet(totalSets);
    }
  };

  const setIndicators = [];
  for (let i = 0; i < totalSets; i++) {
    const isDone = i < progress;
    setIndicators.push(
      <span
        key={i}
        className={`set-indicator ${isDone ? "done" : "pending"}`}
        onClick={(e) => handleSetClick(e, i)}
        onTouchStart={(e) => e.stopPropagation()}
      >
        {isDone ? "●" : "○"}
      </span>,
    );
  }

  return (
    <div
      className={`workout-cell ${isComplete ? "complete" : ""} ${progress > 0 && !isComplete ? "partial" : ""}`}
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseUp={handleTouchEnd}
      onMouseLeave={handleTouchEnd}
      role="button"
      tabIndex={0}
      aria-pressed={isComplete}
    >
      <div className="cell-content">
        <div className="cell-label">
          {totalSets}×{cell.reps}
        </div>
        {target1RM && weight > 0 && (
          <div className="cell-weight">{formatWeight(weight)} кг</div>
        )}
        <div className="set-indicators">{setIndicators}</div>
        {showReset && (
          <div
            className="reset-overlay"
            onClick={(e) => {
              e.stopPropagation();
              onReset();
              setShowReset(false);
            }}
          >
            ✕
          </div>
        )}
      </div>
    </div>
  );
}
