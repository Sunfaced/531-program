import type { AppState } from '../types.js';

const STORAGE_KEY = '531_program_state';

export const defaultState: AppState = {
  target1RM: null,
  completedCells: new Set(),
  completedSets: {},
  currentWeek: 1,
  currentSession: 'I'
};

export function loadState(): AppState {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      const completedCells: Set<string> = new Set(parsed.completedCells || []);
      
      const state = {
        target1RM: parsed.target1RM ?? null,
        completedCells: completedCells,
        completedSets: parsed.completedSets || {},
        currentWeek: parsed.currentWeek || 1,
        currentSession: parsed.currentSession || 'I'
      };
      
      if (state.target1RM === null && state.completedCells.size > 0) {
        return { ...defaultState };
      }
      
      return state;
    }
  } catch (e) {
    console.error('Failed to load state:', e);
  }
  return { ...defaultState };
}

export function saveState(state: AppState): void {
  try {
    const toStore = {
      target1RM: state.target1RM,
      completedCells: Array.from(state.completedCells),
      completedSets: state.completedSets,
      currentWeek: state.currentWeek,
      currentSession: state.currentSession
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toStore));
  } catch (e) {
    console.error('Failed to save state:', e);
  }
}

export function clearAllData(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error('Failed to clear data:', e);
  }
}