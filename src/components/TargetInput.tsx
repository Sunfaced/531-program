// components/TargetInput.tsx
import { useState, useEffect } from "react";

interface TargetInputProps {
  value: number | null;
  onChange: (value: number | null) => void;
}

export function TargetInput({ value, onChange }: TargetInputProps) {
  const [inputValue, setInputValue] = useState(value?.toString() || "");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (value !== null) {
      setInputValue(value.toString());
    }
  }, [value]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const num = parseFloat(inputValue.replace(",", "."));

    if (isNaN(num) || num <= 0) {
      setError("Введите положительное число");
      return;
    }

    const rounded = Math.round(num / 2.5) * 2.5;

    if (rounded !== parseFloat(inputValue.replace(",", "."))) {
      setError(`Вес округлён до ${rounded} кг (ближайшее кратное 2.5)`);
    } else {
      setError(null);
    }

    // ✅ СОХРАНЯЕМ В LOCALSTORAGE СРАЗУ
    onChange(rounded);
    
    // ✅ ДОПОЛНИТЕЛЬНОЕ СОХРАНЕНИЕ ДЛЯ ГАРАНТИИ
    try {
      const existing = localStorage.getItem('531_program_state');
      if (existing) {
        const parsed = JSON.parse(existing);
        parsed.target1RM = rounded;
        // Очищаем прогресс при смене 1ПМ
        parsed.completedCells = [];
        parsed.completedSets = {};
        localStorage.setItem('531_program_state', JSON.stringify(parsed));
      }
    } catch (e) {
      console.error('Failed to save target:', e);
    }
    
    setInputValue(rounded.toString());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputValue(val);
    if (error) setError(null);
  };

  const handleReset = () => {
    onChange(null);
    setInputValue("");
    setError(null);
    
    // ✅ ОЧИЩАЕМ LOCALSTORAGE ПРИ СБРОСЕ
    try {
      const existing = localStorage.getItem('531_program_state');
      if (existing) {
        const parsed = JSON.parse(existing);
        parsed.target1RM = null;
        localStorage.setItem('531_program_state', JSON.stringify(parsed));
      }
    } catch (e) {
      console.error('Failed to reset target:', e);
    }
  };

  return (
    <div className="target-input">
      <h2>🎯 Целевой 1ПМ</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          inputMode="decimal"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Например: 135, 137.5, 140"
          className={error ? "error" : ""}
        />
        <button type="submit">Установить</button>
        {value && (
          <button type="button" className="reset-btn" onClick={handleReset}>
            ✕
          </button>
        )}
      </form>

      {error && <div className="error-message">{error}</div>}

      {value && !error && (
        <div className="current-weight">
          <p>
            Текущий 1ПМ: <strong>{value} кг</strong>
          </p>
          <p className="hint">Все рабочие веса округляются вверх до 2.5 кг</p>
        </div>
      )}
    </div>
  );
}