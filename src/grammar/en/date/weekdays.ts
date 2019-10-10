import { defineParser, fork, word, sequence, number } from 'parsebuddy';
import { weekday, offsetShift } from './common';
import { getWeekdayDate } from './utils';
import { getNow } from '../../common';

export const shiftedWeekday = defineParser<{}, Date>(
  function(options, emit) {
    const now = getNow();

    console.log('shit');

    let shift = 0;

    return sequence({
      children: [
        offsetShift({}, (offset) => (shift = offset)),
        weekday({}, (weekdayNumber) => {
          emit(getWeekdayDate(weekdayNumber, shift, now));
        }),
      ],
    });
  },
  { name: 'weekdays' },
);

export const shiftedByWeeksWeekday = defineParser<{}, Date>(
  function(options, emit) {
    const now = getNow();

    let weekdayNumber: number;
    let weeksOffset: number;

    return sequence({
      children: [
        weekday({}, (n) => {
          weekdayNumber = n;
        }),
        word({ text: 'in' }),
        number({ min: 2, max: 100 }, (n) => (weeksOffset = n)),
        word({ text: 'weeks' }, () => {
          emit(getWeekdayDate(weekdayNumber, weeksOffset, now));
        }),
      ],
    });
  },
  { name: 'shiftedByWeeksWeekday' },
);

export const weekdays = shiftedWeekday;
// parser that takes input like 3am or 3pm - it will return number from 1 to 24 (if it's pm it just adds 12 to parsed number)
export const weekdays2 = defineParser<{}, Date>(
  function(options, emit) {
    const now = getNow();

    return fork({
      children: [
        // weekday({}, (weekdayNumber) => {
        //   emit(getWeekdayDate(weekdayNumber, 0, now));
        // }),
        // shiftedByWeeksWeekday({}, emit),
        shiftedWeekday({}, (date) => {
          console.log('ayayayayay', date);
          emit(date);
        }),
      ],
    });
  },
  { name: 'weekdays' },
);
