import { defineParser, fork, word } from 'parsebuddy';
import { startOfDay, subDays, addDays } from 'date-fns';
import { getNow } from '../../common';

// parser that takes input like 3am or 3pm - it will return number from 1 to 24 (if it's pm it just adds 12 to parsed number)
export const specificDate = defineParser<{}, Date>(
  function(options, emit) {
    const now = getNow();

    return fork({
      children: [
        // first we expect number between 1-12
        word({ text: 'now' }, () => emit(now)),
        word({ text: 'today' }, () => emit(startOfDay(now))),
        word({ text: 'tomorrow' }, () => emit(startOfDay(addDays(now, 1)))),
        word({ text: 'yesterday' }, () => emit(startOfDay(subDays(now, 1)))),
        word({ text: 'just now' }, () => emit(now)),
      ],
    });
  },
  { name: 'specificDate' },
);
