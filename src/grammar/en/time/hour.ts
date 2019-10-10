import {
  defineParser,
  sequence,
  number,
  fork,
  literal,
  optional,
} from 'parsebuddy';

interface TimeInfo {
  hour: number;
  minute: number;
}

type AmPm = 'am' | 'pm';
const ampm = defineParser<{}, AmPm>(
  function(options, emit) {
    return fork({
      placeholder: 'am/pm',
      children: [
        literal({ text: 'am' }, (text) => emit(text as AmPm)),
        literal({ text: 'pm' }, (text) => emit(text as AmPm)),
      ],
    });
  },
  { name: 'amHour' },
);

const ampmHour = defineParser<{}, TimeInfo>(
  function(options, emit) {
    let ampmString: AmPm = 'am';
    let ampmHour: number;
    let minute = 0;
    return sequence({
      onMatch() {
        const finalHour = ampmString === 'am' ? ampmHour : ampmHour + 12;

        emit({ hour: finalHour, minute });
      },
      children: [
        number({ min: 1, max: 12, placeholder: '1-12' }, (n) => (ampmHour = n)),
        optional({
          children: [
            literal({ text: '' }),
            number(
              { min: 1, max: 59, placeholder: '1-59' },
              (n) => (minute = n),
            ),
          ],
        }),
        optional({
          children: [ampm({}, (ampmResult) => (ampmString = ampmResult))],
        }),
      ],
    });
  },
  { name: 'ampmHour' },
);

const fullHour = defineParser<{}, TimeInfo>(
  function(options, emit) {
    let hour: number;
    let minute = 0;
    return sequence({
      onMatch() {
        emit({ hour, minute });
      },
      children: [
        number({ min: 1, max: 23, placeholder: '1-12' }, (n) => (hour = n)),
        literal({ text: '' }),
        number({ min: 1, max: 59, placeholder: '1-59' }, (n) => (minute = n)),
      ],
    });
  },
  { name: 'fullHour' },
);

export const hour = defineParser<{}, TimeInfo>(
  function(options, emit) {
    return fork({
      children: [fullHour({}, emit), ampmHour({}, emit)],
    });
  },
  { name: 'hour' },
);
