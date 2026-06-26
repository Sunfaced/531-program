# 🏋️ 5/3/1 Тренировочная программа

[![PWA](https://img.shields.io/badge/PWA-Installable-blue)](https://sunfaced.github.io/531-program/)
[![React](https://img.shields.io/badge/React-18-61dafb)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6)](https://www.typescriptlang.org/)

PWA-приложение для тренировок по методике **5/3/1** (Wendler). Отслеживайте прогресс, фиксируйте подходы и повышайте свой 1ПМ!

## 🌐 Демо

**https://sunfaced.github.io/531-program/**

## 📱 Возможности

- ✅ Программа на 17 недель с соревновательной неделей
- ✅ Расчет рабочих весов от целевого 1ПМ
- ✅ Автоматическое округление весов до 2.5 кг
- ✅ Отметка выполненных подходов и сетов
- ✅ Долгое нажатие для сброса прогресса
- ✅ Сохранение прогресса в LocalStorage
- ✅ PWA - установка на телефон
- ✅ Оффлайн-режим
- ✅ Тактильная обратная связь (вибрация)

## 🚀 Быстрый старт

```bash
# Клонирование
git clone https://github.com/Sunfaced/531-program.git
cd 531-program

# Установка зависимостей
npm install

# Запуск разработки
npm run dev

# Сборка
npm run build

# Деплой на GitHub Pages
npm run deploy
🛠️ Технологии
React 18 — UI

TypeScript — типизация

Vite — сборка

PWA — установка на мобильные устройства

LocalStorage — сохранение данных

📊 Структура данных
typescript
interface AppState {
  target1RM: number | null;        // Целевой 1ПМ
  completedCells: Set<string>;     // Выполненные ячейки
  completedSets: Record<string, number>; // Выполненные подходы
  currentWeek: number;              // Текущая неделя
  currentSession: 'I' | 'II' | null; // Текущая тренировка
}
📱 Установка PWA
Android (Chrome)
Откройте ссылку

Нажмите "Добавить на главный экран"

Нажмите "Установить"

iOS (Safari)
Откройте ссылку

Нажмите "Поделиться" → "На экран «Домой»"

Нажмите "Добавить"

🗂️ Структура проекта
text
src/
├── components/
│   ├── ProgramTable.tsx      # Таблица программы
│   ├── WeekSection.tsx       # Секция недели
│   ├── WorkoutRow.tsx        # Строка тренировки
│   ├── WorkoutCell.tsx       # Ячейка упражнения
│   ├── PercentHeader.tsx     # Заголовок с процентами
│   └── TargetInput.tsx       # Ввод 1ПМ
├── hooks/
│   └── useProgramState.ts    # Хук состояния
├── lib/
│   ├── storage.ts            # Работа с LocalStorage
│   └── weights.ts            # Расчет весов
├── data/
│   └── program.ts            # Данные программы
├── types.ts                  # TypeScript типы
├── App.tsx                   # Главный компонент
└── main.tsx                  # Точка входа
🏋️ Методика 5/3/1
Программа включает 17 недель тренировок:

Недели 1-16: Основные тренировки с прогрессией

Неделя 17: Соревновательная неделя (проверка 1ПМ)

Каждая тренировка содержит подходы с разными процентами от 1ПМ.

📝 Разработка
bash
# Режим разработки с hot reload
npm run dev

# Проверка типов
npm run typecheck

# Сборка проекта
npm run build

# Предпросмотр сборки
npm run preview
📦 Деплой
GitHub Pages
bash
npm run deploy
Netlify / Vercel
bash
npm run build
# Затем загрузите папку dist на платформу
🔒 Лицензия
MIT © Sunfaced

🙏 Благодарности
Jim Wendler — создатель методики 5/3/1

React — библиотека для UI

💪 Сила — это не только мышцы, это дисциплина и последовательность!
