import {
  defineParser,
  sequence,
  number,
  fork,
  literal,
  word,
} from 'parsebuddy';

interface TimeData {
  hour: number;
  minute: number;
  second: number;
}

function getOrdinalSuffix(i: number) {
  const tenRest = i % 10;
  const hundredRest = i % 100;

  if (tenRest == 1 && hundredRest != 11) {
    return 'st';
  }
  if (tenRest == 2 && hundredRest != 12) {
    return 'nd';
  }
  if (tenRest == 3 && hundredRest != 13) {
    return 'rd';
  }
  return 'th';
}

// export const offsetShift =

export const offsetShift = defineParser<{}, number>(
  function(_, emit) {
    return word({ text: 'next' }, () => emit(1));
    return fork({
      children: [
        word({ text: 'next' }, () => emit(1)),
        word({ text: 'previous' }, () => emit(-1)),
        word({ text: 'this' }, () => emit(0)),
        // sequence({
        //   children: [word({ text: 'in' }), number({ min: 1, max: 100 }, emit)],
        // }),
      ],
    });
  },
  { name: 'offsetShift' },
);
