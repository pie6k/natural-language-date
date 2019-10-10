import { defineParser, fork, createDataHolder } from 'parsebuddy';
import {} from 'date-fns';
import { date } from './date';

export const en = date;

export const en2 = defineParser<{}, Date>(
  function(options, emit) {
    return date({}, emit);
    return fork({
      children: [date({}, emit)],
    });
  },
  { name: 'en' },
);
