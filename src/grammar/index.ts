import { en } from './en';
import { defineParser, fork, createDataHolder } from 'parsebuddy';
import { nowContext } from './common';
import { weekdays } from './en/date/weekdays';

export const resultDateHolder = createDataHolder({
  init: () => new Date(),
  clone: (old) => {
    console.log('clone', old);
    return new Date(old.getTime());
  },
});

type SupportedLanguage = 'en';

interface NaturalDateParserOptions {
  language: SupportedLanguage;
  nowGetter?: () => Date;
}

export const naturalDate = defineParser<NaturalDateParserOptions, Date>(
  function({ language, nowGetter = () => new Date() }, emit) {
    if (nowGetter) {
      nowContext.set(nowGetter);
    }

    return weekdays({}, (date) => {
      resultDateHolder.set(date);
      emit(date);
    });

    let data: Date;

    function saveDate(date: Date) {
      data = date;
      console.log('saving date', date);
      emit(date);
      resultDateHolder.set(date);
    }

    return fork({
      onMatch() {
        console.trace('eb');
        // resultDateHolder.set(data);
      },
      children: [en({ isEnabled: language === 'en' }, saveDate)],
    });
  },
  { name: 'naturalDate' },
);
