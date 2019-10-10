import { defineParser, sequence, number, fork, literal } from 'parsebuddy';

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

export const ordinalNumber = defineParser<{ min: number; max: number }, number>(
  function({ min, max }, emit) {
    let matchedNumber: number;
    let minute: number;

    return sequence({
      onMatch: () => {
        // if it's pm - emit parsed number + 12
        emit(matchedNumber);
      },
      children: [
        number(
          { min, max, onlyInteger: true },
          (number) => (matchedNumber = number),
        ),
        fork({
          children: [
            literal({
              text: 'st',
              isEnabled: () => getOrdinalSuffix(matchedNumber) === 'st',
            }),
            literal({
              text: 'nd',
              isEnabled: () => getOrdinalSuffix(matchedNumber) === 'nd',
            }),
            literal({
              text: 'rd',
              isEnabled: () => getOrdinalSuffix(matchedNumber) === 'rd',
            }),
            literal({
              text: 'th',
              isEnabled: () => getOrdinalSuffix(matchedNumber) === 'th',
            }),
          ],
        }),
      ],
    });
  },
  { name: 'ordinalNumber' },
);
