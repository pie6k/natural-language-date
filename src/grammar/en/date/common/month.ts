import { defineParser, literal, fork } from 'parsebuddy';

export const month = defineParser<{}, number>(
  function(options, emit) {
    return fork({
      placeholder: 'month',
      children: [
        literal({ text: 'january' }, () => {
          emit(0);
        }),
        literal({ text: 'jan' }, () => {
          emit(0);
        }),
        literal({ text: 'february' }, () => {
          emit(1);
        }),
        literal({ text: 'feb' }, () => {
          emit(1);
        }),
        literal({ text: 'march' }, () => {
          emit(2);
        }),
        literal({ text: 'mar' }, () => {
          emit(2);
        }),
        literal({ text: 'april' }, () => {
          emit(3);
        }),
        literal({ text: 'apr' }, () => {
          emit(3);
        }),
        literal({ text: 'may' }, () => {
          emit(4);
        }),
        literal({ text: 'june' }, () => {
          emit(5);
        }),
        literal({ text: 'jun' }, () => {
          emit(5);
        }),
        literal({ text: 'july' }, () => {
          emit(6);
        }),
        literal({ text: 'jul' }, () => {
          emit(6);
        }),
        literal({ text: 'august' }, () => {
          emit(7);
        }),
        literal({ text: 'aug' }, () => {
          emit(7);
        }),
        literal({ text: 'september' }, () => {
          emit(8);
        }),
        literal({ text: 'sep' }, () => {
          emit(8);
        }),
        literal({ text: 'october' }, () => {
          emit(9);
        }),
        literal({ text: 'oct' }, () => {
          emit(9);
        }),
        literal({ text: 'november' }, () => {
          emit(10);
        }),
        literal({ text: 'nov' }, () => {
          emit(10);
        }),
        literal({ text: 'december' }, () => {
          emit(11);
        }),
        literal({ text: 'dec' }, () => {
          emit(11);
        }),
      ],
    });
  },
  { name: 'month' },
);
