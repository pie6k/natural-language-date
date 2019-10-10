import { createGrammar, ParsingBranch } from 'parsebuddy';
import { naturalDate, resultDateHolder } from './grammar';

interface Options {
  nowGetter?: () => Date;
}

export function createDateParser(options: Options) {
  const enGrammer = createGrammar({
    parser: naturalDate(
      { language: 'en', nowGetter: options.nowGetter },
      (date) => {
        console.log('got it');
        return date;
      },
    ),
  });

  async function parseDate(input: string) {
    const results = await enGrammer.parseAll(input);

    const ebe = new ParsingBranch({ input: '' });

    const p = naturalDate(
      { language: 'en', nowGetter: options.nowGetter },
      (date) => {
        console.log('got it');
        return date;
      },
    );

    const re = p(ebe);

    console.log({ re });

    return results.map((result) => {
      const date = result.getData(resultDateHolder);
      const matchedInput = result.getMatchedInput();

      console.log({ date, matchedInput });

      return {
        date,
        matchedInput,
      };
    });
  }

  return parseDate;
}

export default createDateParser;
