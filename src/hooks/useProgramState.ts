// hooks/useProgramState.ts
import { useState, useCallback, useEffect } from "react";
import type { AppState, Percent } from "../types.js";
import { loadState, saveState } from "../lib/storage.js";

export function useProgramState() {
  const [state, setState] = useState<AppState>(() => {
    const loaded = loadState();
    if (loaded.target1RM === null && loaded.completedCells.size > 0) {
      return {
        ...loaded,
        completedCells: new Set<string>(),
        completedSets: {},
      };
    }
    return loaded;
  });

  // ✅ АВТО-СОХРАНЕНИЕ (оставляем)
  useEffect(() => {
    saveState(state);
  }, [state]);

  // ✅ ДОПОЛНИТЕЛЬНОЕ СОХРАНЕНИЕ ПРИ ИЗМЕНЕНИИ 1ПМ
  const setTarget1RM = useCallback((value: number | null) => {
    setState((prev) => {
      const newState: AppState = {
        target1RM: value,
        completedCells: new Set<string>(),
        completedSets: {},
        currentWeek: prev.currentWeek,
        currentSession: prev.currentSession,
      };
      // ✅ СИНХРОННОЕ СОХРАНЕНИЕ
      saveState(newState);
      return newState;
    });
  }, []);

  const setCurrentWeek = useCallback((week: number) => {
    setState((prev) => {
      const newState = { ...prev, currentWeek: week };
      saveState(newState); // ✅ СИНХРОННО
      return newState;
    });
  }, []);

  const setCurrentSession = useCallback((session: "I" | "II" | null) => {
    setState((prev) => {
      const newState = { ...prev, currentSession: session };
      saveState(newState); // ✅ СИНХРОННО
      return newState;
    });
  }, []);

  const getCellKey = useCallback(
    (week: number, session: "I" | "II", percent: Percent): string => {
      return `week-${week}-session-${session}-${percent}`;
    },
    [],
  );

  const incrementSet = useCallback(
    (week: number, session: "I" | "II", percent: Percent, maxSets: number) => {
      const cellKey = getCellKey(week, session, percent);
      setState((prev) => {
        const current = prev.completedSets[cellKey] || 0;
        const next = Math.min(current + 1, maxSets);
        const newSets = { ...prev.completedSets, [cellKey]: next };
        const newCompleted = new Set<string>(prev.completedCells);

        if (next === maxSets) {
          newCompleted.add(cellKey);
        } else {
          newCompleted.delete(cellKey);
        }

        const newState = {
          ...prev,
          completedCells: newCompleted,
          completedSets: newSets,
        };

        // ✅ СИНХРОННОЕ СОХРАНЕНИЕ
        saveState(newState);
        return newState;
      });
    },
    [getCellKey],
  );

  const resetCell = useCallback(
    (week: number, session: "I" | "II", percent: Percent) => {
      const cellKey = getCellKey(week, session, percent);
      setState((prev) => {
        const newCompleted = new Set<string>(prev.completedCells);
        newCompleted.delete(cellKey);
        const newSets = { ...prev.completedSets };
        delete newSets[cellKey];
        const newState = {
          ...prev,
          completedCells: newCompleted,
          completedSets: newSets,
        };

        // ✅ СИНХРОННОЕ СОХРАНЕНИЕ
        saveState(newState);
        return newState;
      });
    },
    [getCellKey],
  );

  const toggleCell = useCallback(
    (week: number, session: "I" | "II", percent: Percent) => {
      const cellKey = getCellKey(week, session, percent);
      setState((prev) => {
        const newCompleted = new Set<string>(prev.completedCells);
        const newSets = { ...prev.completedSets };

        if (newCompleted.has(cellKey)) {
          newCompleted.delete(cellKey);
          delete newSets[cellKey];
        } else {
          newCompleted.add(cellKey);
          if (!newSets[cellKey]) {
            newSets[cellKey] = 1;
          }
        }

        const newState = {
          ...prev,
          completedCells: newCompleted,
          completedSets: newSets,
        };

        // ✅ СИНХРОННОЕ СОХРАНЕНИЕ
        saveState(newState);
        return newState;
      });
    },
    [getCellKey],
  );

  const resetAll = useCallback(() => {
    setState((prev) => {
      const newState = {
        ...prev,
        completedCells: new Set<string>(),
        completedSets: {},
      };
      saveState(newState); // ✅ СИНХРОННО
      return newState;
    });
  }, []);

  return {
    state,
    setTarget1RM,
    setCurrentWeek,
    setCurrentSession,
    toggleCell,
    incrementSet,
    resetCell,
    resetAll,
  };
}
