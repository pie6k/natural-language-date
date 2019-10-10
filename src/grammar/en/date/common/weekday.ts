import { defineParser, word, fork } from 'parsebuddy';

export const weekday = defineParser<{}, number>(
  function(options, emit) {
    return fork({
      placeholder: 'weekday',
      children: [
        // word({ text: 'sunday' }, () => {
        //   emit(0);
        // }),
        // word({ text: 'sun' }, () => {
        //   emit(0);
        // }),
        // word({ text: 'monday' }, () => {
        //   emit(1);
        // }),
        // word({ text: 'mon' }, () => {
        //   emit(1);
        // }),
        // word({ text: 'tuesday' }, () => {
        //   emit(2);
        // }),
        // word({ text: 'tue' }, () => {
        //   emit(2);
        // }),
        // word({ text: 'wednesday' }, () => {
        //   emit(3);
        // }),
        // word({ text: 'wed' }, () => {
        //   emit(3);
        // }),
        // word({ text: 'thursday' }, () => {
        //   emit(4);
        // }),
        // word({ text: 'thu' }, () => {
        //   emit(4);
        // }),
        word({ text: 'friday' }, () => {
          emit(5);
        }),
        // word({ text: 'fri' }, () => {
        //   emit(5);
        // }),
        // word({ text: 'saturday' }, () => {
        //   emit(6);
        // }),
        word({ text: 'sat' }, () => {
          emit(6);
        }),
      ],
    });
  },
  { name: 'weekday' },
);
