import { defineParser, fork } from 'parsebuddy';
import { specificDate } from './specific';
import { weekdays } from './weekdays';

export const date = weekdays;

// parser that takes input like 3am or 3pm - it will return number from 1 to 24 (if it's pm it just adds 12 to parsed number)
export const date2 = defineParser<{}, Date>(
  function(options, emit) {
    return fork({
      children: [
        // first we expect number between 1-12
        // specificDate({}, emit),
        weekdays({}, emit),
      ],
    });
  },
  { name: 'date' },
);
