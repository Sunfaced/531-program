import type { Percent } from '../types.js';

// Округление ВВЕРХ до ближайшего кратного step
export function roundToPlateUp(weight: number, step: number = 2.5): number {
  return Math.ceil(weight / step) * step;
}

export function weightAtPercent(target1RM: number, percent: Percent): number {
  if (!target1RM || target1RM <= 0) return 0;
  return roundToPlateUp(target1RM * (percent / 100));
}

export function formatWeight(weight: number): string {
  if (weight === 0) return '—';
  // Убираем .0 для целых чисел
  if (Number.isInteger(weight)) {
    return weight.toString();
  }
  return weight.toFixed(1);
}