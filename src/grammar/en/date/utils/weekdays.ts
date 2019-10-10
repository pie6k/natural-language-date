import {
  getDay,
  addWeeks,
  startOfDay,
  setDate,
  getDate,
  isSameWeek,
  addHours,
} from 'date-fns';

export function getWeekdayDate(
  weekday: number,
  weeksOffset = 0,
  now = new Date(),
) {
  const nowClone = new Date(now.getTime());

  nowClone.setDate(nowClone.getDate() + ((weekday + (7 - now.getDay())) % 7));
  const dayOfMont = getDate(now);

  console.log(
    'get weekday',
    { now, dayOfMont, nowClone },
    addHours(nowClone, 2),
  );

  if (weeksOffset === 0) {
    return nowClone;
  }

  if (isSameWeek(now, nowClone)) {
    return addWeeks(nowClone, weeksOffset);
  }

  return addWeeks(nowClone, weeksOffset - 1);
}
