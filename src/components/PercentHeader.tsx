import type { Percent } from "../types.js";
import { weightAtPercent, formatWeight } from "../lib/weights.js";

interface PercentHeaderProps {
  percent: Percent;
  target1RM: number | null;
}

export function PercentHeader({ percent, target1RM }: PercentHeaderProps) {
  // Если нет 1ПМ - показываем только процент
  if (!target1RM || target1RM <= 0) {
    return (
      <div className="percent-header">
        <div className="percent">{percent}%</div>
      </div>
    );
  }

  const weight = weightAtPercent(target1RM, percent);

  return (
    <div className="percent-header">
      <div className="percent">{percent}%</div>
      <div className="weight">{formatWeight(weight)} кг</div>
    </div>
  );
}
