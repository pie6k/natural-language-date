import { createDateParser } from '../../src';
import {
  isEqual,
  isSameDay,
  getHours,
  getMinutes,
  getSeconds,
  differenceInYears,
  differenceInDays,
  differenceInMinutes,
  differenceInSeconds,
  differenceInMonths,
  differenceInHours,
  differenceInMilliseconds,
  differenceInCalendarDays,
  setYear,
  startOfYear,
  getDay,
  differenceInCalendarWeeks,
  getMilliseconds,
} from 'date-fns';

type DateChecker = (result: Date, now: Date) => boolean;

export function getNow() {
  return startOfYear(setYear(new Date(), 2018));
  return new Date(2019, 0, 0, 0, 0, 0, 0);
}

const parseDateRaw = createDateParser({ nowGetter: getNow });

export async function parseDate(input: string) {
  return parseDateRaw(input);
}

type SingleParseSuite = [string, DateChecker | Date];

export function createParsingSuite(name: string, cases: SingleParseSuite[]) {
  describe(`is able to parse: ${name}`, () => {
    for (const [input, checker] of cases) {
      it(`will parse input: ${input}`, async () => {
        await expectInputDate(input, checker);
      });
    }
  });
}

export async function expectInputDate(
  input: string,
  checker: DateChecker | Date,
) {
  const [firstResult] = await parseDate(input);

  const now = getNow();

  expect(firstResult).toBeTruthy();

  if (checker instanceof Date) {
    expect(now).toEqual(checker);
    return;
  }

  const checkerResult = checker(firstResult.date, now);

  if (!checkerResult) {
    console.warn(`Failed: ${input}, Result: ${firstResult.date}, Now: ${now}`);
  }

  expect(checkerResult).toBe(true);
}

export async function expectIncorrectInput(input: string) {
  const results = await parseDate(input);

  expect(results.length).toBe(0);
}

export function testWithDateGetter(
  dayGetter: (now: Date) => Date,
  checkType: 'exact' | 'sameDay' = 'sameDay',
): DateChecker {
  return function checkDate(result, now) {
    const targetDay = dayGetter(now);

    if (checkType === 'exact') {
      return isEqual(targetDay, result);
    }

    if (checkType === 'sameDay') {
      return isSameDay(targetDay, result);
    }

    return false;
  };
}

export function testTimeWithDateGetter(
  dayGetter: (now: Date) => Date,
  { hour, minute, second }: { hour: number; minute?: number; second?: number },
): DateChecker {
  return function checkDate(result, now) {
    const targetDate = dayGetter(now);

    if (!isSameDay(targetDate, result)) {
      return false;
    }

    if (hour !== undefined && getHours(result) !== hour) {
      return false;
    }

    if (minute !== undefined && getMinutes(result) !== minute) {
      return false;
    }

    if (second !== undefined && getSeconds(result) !== second) {
      return false;
    }

    return true;
  };
}

export function testGetWeekdayInRelativeMonth(
  monthOffset: number,
  weekday: number,
  weekdayOfMonth: number,
): DateChecker {
  return function checkDate(result, now) {
    return false;
  };
}

export function testRelativeDateSameDay(
  yearOffset: number = 0,
  monthsOffset: number = 0,
  daysOffset: number = 0,
): DateChecker {
  return function checkDate(result) {
    return false;
  };
}

interface TimeConfig {
  hour?: number;
  minute?: number;
  second?: number;
  ms?: number;
}

function isDateMatchingTime(
  result: Date,
  { hour, minute, second, ms }: TimeConfig,
) {
  if (typeof hour === 'number' && getHours(result) !== hour) {
    return false;
  }

  if (typeof minute === 'number' && getMinutes(result) !== minute) {
    return false;
  }

  if (typeof second === 'number' && getSeconds(result) !== second) {
    return false;
  }

  if (typeof ms === 'number' && getMilliseconds(result) !== ms) {
    return false;
  }

  return true;
}

export function testRelativeWeekday(
  weekDay: number,
  weeksOffset?: number,
  hour?: number,
  minute?: number,
  second?: number,
  ms?: number,
): DateChecker {
  return function checkDate(result, now) {
    const resultWeekday = getDay(result);

    if (resultWeekday !== weekDay) {
      return false;
    }

    if (
      weeksOffset !== undefined &&
      differenceInCalendarWeeks(result, now) !== weeksOffset
    ) {
      return false;
    }

    return isDateMatchingTime(result, { hour, minute, second, ms });
  };
}

export function testRelativeDate(
  yearOffset: number = 0,
  monthsOffset?: number,
  daysOffset?: number,
  hour?: number,
  minute?: number,
  second?: number,
  ms?: number,
): DateChecker {
  return function checkDate(result, now) {
    if (differenceInYears(result, now) !== yearOffset) {
      return false;
    }

    if (
      typeof monthsOffset === 'number' &&
      differenceInMonths(result, now) !== monthsOffset
    ) {
      return false;
    }

    if (
      typeof daysOffset === 'number' &&
      differenceInCalendarDays(result, now) !== daysOffset
    ) {
      return false;
    }

    if (typeof hour === 'number' && differenceInHours(result, now) !== hour) {
      return false;
    }

    if (
      typeof minute === 'number' &&
      differenceInMinutes(result, now) !== minute
    ) {
      return false;
    }

    if (
      typeof second === 'number' &&
      differenceInSeconds(result, now) !== second
    ) {
      return false;
    }

    if (
      typeof ms === 'number' &&
      differenceInMilliseconds(result, now) !== ms
    ) {
      return false;
    }

    return true;
  };
}

export function testWeekday(
  weekday: number = 0,
  weekOffset?: number,
  hour?: number,
  minute?: number,
  second?: number,
  ms?: number,
): DateChecker {
  return function checkDate(result) {
    return false;
  };
}

export function testSameDay(date: Date): DateChecker {
  return function checkDate(result) {
    return isSameDay(date, result);
  };
}
