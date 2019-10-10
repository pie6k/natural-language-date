import {
  expectInputDate,
  testGetWeekdayInRelativeMonth,
  getNow,
  testRelativeDateSameDay,
  testWeekday,
  testRelativeDate,
  expectIncorrectInput,
  testWithDateGetter,
  testTimeWithDateGetter,
  createParsingSuite,
  testRelativeWeekday,
} from './utils';
import {
  isFriday,
  endOfWeek,
  endOfMonth,
  addMonths,
  endOfYear,
  addYears,
  setMonth,
  setDate,
  addWeeks,
  subDays,
  startOfWeek,
  subYears,
  endOfDay,
  startOfDay,
  subMonths,
  addDays,
  isToday,
} from 'date-fns';

const now = getNow();

describe('weekdays', () => {
  createParsingSuite('specific dates', [
    ['now', testRelativeDate(0, 0, 0)],
    ['today', testRelativeDate(0, 0, 0)],
    ['tomorrow', testRelativeDate(0, 0, 1)],
    ['yesterday', testRelativeDate(0, 0, -1)],
  ]);

  createParsingSuite('weekdays', [
    // ['friday', testRelativeWeekday(5, 0)],
    ['next friday', testRelativeWeekday(5, 1)],
  ]);
  // it('should parse weekdays', async () => {
  //   await expectInputDate('now', (result) => isFriday(result));
  //   await expectInputDate('today', (result) => isFriday(result));

  //   expect(2).toBe(3);
  //   expectInputDate('next friday', (result) => isFriday(result));
  //   expectInputDate('friday', (result) => isFriday(result));
  //   expectInputDate('this friday', (result) => isFriday(result));
  //   expectInputDate('next week', (result) => isFriday(result));
  //   expectInputDate('the 15th', (result) => isFriday(result));
  //   expectInputDate('in 30 minutes', (result) => isFriday(result));
  //   expectInputDate('in half a year', (result) => isFriday(result));
  //   expectInputDate('in half month', (result) => isFriday(result));
  //   expectInputDate('an hour from now', (result) => isFriday(result));
  //   expectInputDate('in 3 days', (result) => isFriday(result));
  //   expectInputDate('in three days', (result) => isFriday(result));
  //   expectInputDate('6:30pm in three days', (result) => isFriday(result));

  //   expectInputDate('the 4th of July', (result) => false);
  //   expectInputDate('next week Thursday', (result) => false);
  //   expectInputDate('the end of February', (result) => false);
  //   expectInputDate('two weeks from today', (result) => false);
  //   expectInputDate('the end of next week', (result) => false);
  //   expectInputDate('next Saturday at 10am', (result) => false);
  //   expectInputDate('the first day of 2013', (result) => false);
  //   expectInputDate('four days after Monday', (result) => false);
  //   expectInputDate('March 15th of next year', (result) => false);
  //   expectInputDate('two days after tomorrow', (result) => false);
  //   expectInputDate('the last day of February', (result) => false);
  //   expectInputDate('Sunday, January 15th', (result) => false);
  //   expectInputDate('Sunday, January 15th 2020', (result) => false);
  //   expectInputDate('the beginning of this month', (result) => false);
  //   expectInputDate('the beginning of next month', (result) => false);
  //   expectInputDate('the 2nd Tuesday of November', (result) => false);

  //   expectInputDate(
  //     'the 1st Sunday of last month',
  //     testGetWeekdayInRelativeMonth(-1, 0, 0),
  //   );
  //   expectInputDate(
  //     'the 1st Monday of last month',
  //     testGetWeekdayInRelativeMonth(-1, 1, 0),
  //   );
  //   expectInputDate(
  //     'the 1st Tuesday of last month',
  //     testGetWeekdayInRelativeMonth(-1, 2, 0),
  //   );
  //   expectInputDate(
  //     'the 1st Wednesday of last month',
  //     testGetWeekdayInRelativeMonth(-1, 3, 0),
  //   );
  //   expectInputDate(
  //     'the 1st Thursday of last month',
  //     testGetWeekdayInRelativeMonth(-1, 4, 0),
  //   );
  //   expectInputDate(
  //     'the 1st Friday of last month',
  //     testGetWeekdayInRelativeMonth(-1, 5, 0),
  //   );
  //   expectInputDate(
  //     'the 1st Saturday of last month',
  //     testGetWeekdayInRelativeMonth(-1, 6, 0),
  //   );

  //   expectInputDate(
  //     'the 1st Sunday of next month',
  //     testGetWeekdayInRelativeMonth(1, 0, 0),
  //   );
  //   expectInputDate(
  //     'the 1st Monday of next month',
  //     testGetWeekdayInRelativeMonth(1, 1, 0),
  //   );
  //   expectInputDate(
  //     'the 1st Tuesday of next month',
  //     testGetWeekdayInRelativeMonth(1, 2, 0),
  //   );
  //   expectInputDate(
  //     'the 1st Wednesday of next month',
  //     testGetWeekdayInRelativeMonth(1, 3, 0),
  //   );
  //   expectInputDate(
  //     'the 1st Thursday of next month',
  //     testGetWeekdayInRelativeMonth(1, 4, 0),
  //   );
  //   expectInputDate(
  //     'the 1st Friday of next month',
  //     testGetWeekdayInRelativeMonth(1, 5, 0),
  //   );
  //   expectInputDate(
  //     'the 1st Saturday of next month',
  //     testGetWeekdayInRelativeMonth(1, 6, 0),
  //   );

  //   expectInputDate(
  //     'the 1st Friday of last month',
  //     testGetWeekdayInRelativeMonth(-1, 5, 0),
  //   );
  //   expectInputDate(
  //     'the 2nd Friday of last month',
  //     testGetWeekdayInRelativeMonth(-1, 5, 1),
  //   );
  //   expectInputDate(
  //     'the 3rd Friday of last month',
  //     testGetWeekdayInRelativeMonth(-1, 5, 2),
  //   );
  //   expectInputDate(
  //     'the 4th Friday of last month',
  //     testGetWeekdayInRelativeMonth(-1, 5, 3),
  //   );

  //   expectInputDate(
  //     'the 1st Friday of next month',
  //     testGetWeekdayInRelativeMonth(1, 5, 0),
  //   );
  //   expectInputDate(
  //     'the 2nd Friday of next month',
  //     testGetWeekdayInRelativeMonth(1, 5, 1),
  //   );
  //   expectInputDate(
  //     'the 3rd Friday of next month',
  //     testGetWeekdayInRelativeMonth(1, 5, 2),
  //   );
  //   expectInputDate(
  //     'the 4th Friday of next month',
  //     testGetWeekdayInRelativeMonth(1, 5, 3),
  //   );

  //   expectInputDate('now', getNow());
  //   expectInputDate('Now', getNow());
  //   expectInputDate('Just now', getNow());
  //   expectInputDate('today', testRelativeDateSameDay(0, 0, 0));
  //   expectInputDate('Today', testRelativeDateSameDay(0, 0, 0));

  //   expectInputDate(
  //     '4pm',
  //     new Date(now.getFullYear(), now.getMonth(), now.getDate(), 16),
  //   );
  //   expectInputDate(
  //     'today at 4pm',
  //     new Date(now.getFullYear(), now.getMonth(), now.getDate(), 16),
  //   );
  //   expectInputDate(
  //     'today at 4 pm',
  //     new Date(now.getFullYear(), now.getMonth(), now.getDate(), 16),
  //   );
  //   expectInputDate(
  //     '4pm today',
  //     new Date(now.getFullYear(), now.getMonth(), now.getDate(), 16),
  //   );
  //   expectInputDate('8am Saturday', testWeekday(6, 0, 8));
  //   expectInputDate('8am on Saturday', testWeekday(6, 0, 8));

  //   expectInputDate('yesterday', testRelativeDateSameDay(0, 0, -1));
  //   expectInputDate('Yesterday', testRelativeDateSameDay(0, 0, -1));
  //   expectInputDate('tomorrow', testRelativeDateSameDay(0, 0, 1));
  //   expectInputDate('Tomorrow', testRelativeDateSameDay(0, 0, 1));

  //   expectInputDate(
  //     'Two days before yesterday',
  //     testRelativeDateSameDay(0, 0, -3),
  //   );
  //   expectInputDate('Two days before today', testRelativeDateSameDay(0, 0, -2));
  //   expectInputDate(
  //     'The day before yesterday',
  //     testRelativeDateSameDay(0, 0, -2),
  //   );
  //   expectInputDate(
  //     'One day before yesterday',
  //     testRelativeDateSameDay(0, 0, -2),
  //   );
  //   expectInputDate('The day after tomorrow', testRelativeDateSameDay(0, 0, 2));
  //   expectInputDate('One day after tomorrow', testRelativeDateSameDay(0, 0, 2));
  //   expectInputDate('Two days after today', testRelativeDateSameDay(0, 0, 2));
  //   expectInputDate('Two days from today', testRelativeDateSameDay(0, 0, 2));
  //   expectInputDate(
  //     'Two days after tomorrow',
  //     testRelativeDateSameDay(0, 0, 3),
  //   );
  //   expectInputDate(
  //     'tWo dAyS after toMoRRoW',
  //     testRelativeDateSameDay(0, 0, 3),
  //   );
  //   expectInputDate('2 days after tomorrow', testRelativeDateSameDay(0, 0, 3));
  //   expectInputDate('2 day after tomorrow', testRelativeDateSameDay(0, 0, 3));
  //   expectInputDate(
  //     '18 days after tomorrow',
  //     testRelativeDateSameDay(0, 0, 19),
  //   );
  //   expectInputDate('18 day after tomorrow', testRelativeDateSameDay(0, 0, 19));

  //   expectInputDate('2 years ago', testRelativeDate(-2));
  //   expectInputDate('2 months ago', testRelativeDate(0, -2));
  //   expectInputDate('2 weeks ago', testRelativeDate(0, 0, -14));
  //   expectInputDate('2 days ago', testRelativeDate(0, 0, -2));
  //   expectInputDate('2 hours ago', testRelativeDate(0, 0, 0, -2));
  //   expectInputDate('2 minutes ago', testRelativeDate(0, 0, 0, 0, -2));
  //   expectInputDate('2 seconds ago', testRelativeDate(0, 0, 0, 0, 0, -2));
  //   expectInputDate(
  //     '2 milliseconds ago',
  //     testRelativeDate(0, 0, 0, 0, 0, 0, -2),
  //   );
  //   expectInputDate('a second ago', testRelativeDate(0, 0, 0, 0, 0, -1));

  //   expectInputDate('2 years from now', testRelativeDate(2));
  //   expectInputDate('2 months from now', testRelativeDate(0, 2));
  //   expectInputDate('2 weeks from now', testRelativeDate(0, 0, 14));
  //   expectInputDate('2 days from now', testRelativeDate(0, 0, 2));
  //   expectInputDate('2 hours from now', testRelativeDate(0, 0, 0, 2));
  //   expectInputDate('2 minutes from now', testRelativeDate(0, 0, 0, 0, 2));
  //   expectInputDate('2 seconds from now', testRelativeDate(0, 0, 0, 0, 0, 2));
  //   expectInputDate(
  //     '2 milliseconds from now',
  //     testRelativeDate(0, 0, 0, 0, 0, 0, 2),
  //   );

  //   expectInputDate('2 years later', testRelativeDate(2));
  //   expectInputDate('2 months later', testRelativeDate(0, 2));
  //   expectInputDate('2 weeks later', testRelativeDate(0, 0, 14));
  //   expectInputDate('2 days later', testRelativeDate(0, 0, 2));
  //   expectInputDate('2 hours later', testRelativeDate(0, 0, 0, 2));
  //   expectInputDate('2 minutes later', testRelativeDate(0, 0, 0, 0, 2));
  //   expectInputDate('2 seconds later', testRelativeDate(0, 0, 0, 0, 0, 2));
  //   expectInputDate(
  //     '2 milliseconds later',
  //     testRelativeDate(0, 0, 0, 0, 0, 0, 2),
  //   );

  //   // Article trouble
  //   expectInputDate('an hour ago', testRelativeDate(0, 0, 0, -1));
  //   expectInputDate('an hour from now', testRelativeDate(0, 0, 0, 1));

  //   expectInputDate('Monday', testWeekday(1));
  //   expectInputDate('The day after Monday', testWeekday(2));
  //   expectInputDate('The day before Monday', testWeekday(0));
  //   expectInputDate('2 days after monday', testWeekday(3));
  //   expectInputDate('2 days before monday', testWeekday(6, -1));
  //   expectInputDate('2 weeks after monday', testWeekday(1, 2));

  //   expectInputDate('Next Monday', testWeekday(1, 1));
  //   expectInputDate('next week monday', testWeekday(1, 1));
  //   expectInputDate('Next friDay', testWeekday(5, 1));
  //   expectInputDate('next week thursday', testWeekday(4, 1));

  //   expectInputDate('last Monday', testWeekday(1, -1));
  //   expectInputDate('last week monday', testWeekday(1, -1));
  //   expectInputDate('last friDay', testWeekday(5, -1));
  //   expectInputDate('last week thursday', testWeekday(4, -1));
  //   expectInputDate('last Monday at 4pm', testWeekday(1, -1, 16));

  //   expectInputDate('this Monday', testWeekday(1));
  //   expectInputDate('this week monday', testWeekday(1));
  //   expectInputDate('this friDay', testWeekday(5));
  //   expectInputDate('this week thursday', testWeekday(4));

  //   expectInputDate('Monday of last week', testWeekday(1, -1));
  //   expectInputDate('saturday of next week', testWeekday(6, 1));
  //   expectInputDate('Monday last week', testWeekday(1, -1));
  //   expectInputDate('saturday next week', testWeekday(6, 1));

  //   expectInputDate('Monday of this week', testWeekday(1));
  //   expectInputDate('saturday of this week', testWeekday(6));
  //   expectInputDate('Monday this week', testWeekday(1));
  //   expectInputDate('saturday this week', testWeekday(6));

  //   expectInputDate('Tue of last week', testWeekday(2, -1));

  //   expectInputDate('Next week', testRelativeDate(0, 0, 7));
  //   expectInputDate('Last week', testRelativeDate(0, 0, -7));
  //   expectInputDate('Next month', testRelativeDate(0, 1));
  //   expectInputDate('Next year', testRelativeDate(1));
  //   expectInputDate('this year', testRelativeDate(0));

  //   expectInputDate('beginning of the week', testWeekday(0));
  //   expectInputDate('beginning of this week', testWeekday(0));
  //   expectInputDate('beginning of next week', testWeekday(0, 1));
  //   expectInputDate('the beginning of next week', testWeekday(0, 1));
  //   expectInputDate('end of this week', testWeekday(6, 0, 23, 59, 59, 999));

  //   expectInputDate(
  //     'beginning of the week',
  //     testWithDateGetter((now) => startOfWeek(now)),
  //   );
  //   expectInputDate(
  //     'end of this week',
  //     testWithDateGetter((now) => endOfWeek(now)),
  //   );

  //   expectInputDate('end of day Friday', testWeekday(5, 0, 23, 59, 59, 999));

  //   expectInputDate('beginning of the month', testRelativeDateSameDay(0, 0));
  //   expectInputDate('beginning of this month', testRelativeDateSameDay(0, 0));
  //   expectInputDate('beginning of next month', testRelativeDateSameDay(0, 1));

  //   expectInputDate(
  //     'the beginning of next month',
  //     testRelativeDateSameDay(0, 1),
  //   );
  //   expectInputDate(
  //     'the end of next month',
  //     testWithDateGetter((now) => endOfMonth(addMonths(now, 1))),
  //   );
  //   expectInputDate(
  //     'the end of the month',
  //     testWithDateGetter((now) => endOfMonth(now)),
  //   );

  //   expectInputDate('the beginning of the year', testRelativeDateSameDay(0));
  //   expectInputDate('the beginning of this year', testRelativeDateSameDay(0));
  //   expectInputDate('the beginning of next year', testRelativeDateSameDay(1));
  //   expectInputDate('the beginning of last year', testRelativeDateSameDay(-1));

  //   expectInputDate(
  //     'the end of the year',
  //     new Date(now.getFullYear(), 11, 31, 23, 59, 59, 999),
  //   );
  //   expectInputDate(
  //     'the end of this year',
  //     new Date(now.getFullYear(), 11, 31, 23, 59, 59, 999),
  //   );

  //   // TODO: why not more simple?
  //   expectInputDate(
  //     'the end of next year',
  //     testWithDateGetter((now) => endOfYear(addYears(now, 1))),
  //   );
  //   expectInputDate(
  //     'the end of last year',
  //     testWithDateGetter((now) => endOfYear(subYears(now, 1))),
  //   );

  //   // Without articles
  //   expectInputDate('beginning of year', new Date(now.getFullYear(), 0, 1));
  //   expectInputDate(
  //     'beginning of month',
  //     new Date(now.getFullYear(), now.getMonth(), 1),
  //   );
  //   expectInputDate('beginning of week', testWeekday(0));
  //   expectInputDate(
  //     'beginning of day',
  //     new Date(now.getFullYear(), now.getMonth(), now.getDate()),
  //   );

  //   expectInputDate(
  //     'end of year',
  //     new Date(now.getFullYear(), 11, 31, 23, 59, 59, 999),
  //   );
  //   expectInputDate(
  //     'end of month',
  //     testWithDateGetter((now) => endOfMonth(now), 'exact'),
  //   );
  //   expectInputDate(
  //     'end of week',
  //     testWithDateGetter((now) => endOfWeek(now), 'exact'),
  //   );
  //   expectInputDate(
  //     'end of day',
  //     testWithDateGetter((now) => endOfDay(now), 'exact'),
  //   );

  //   expectInputDate(
  //     'the beginning of the day',
  //     testRelativeDateSameDay(0, 0, 0),
  //   );

  //   expectInputDate(
  //     'end of March',
  //     new Date(now.getFullYear(), 2, 31, 23, 59, 59, 999),
  //   );
  //   expectInputDate('beginning of March', new Date(now.getFullYear(), 2));
  //   expectInputDate('the first day of March', new Date(now.getFullYear(), 2));
  //   expectInputDate(
  //     'the last day of March',
  //     new Date(now.getFullYear(), 2, 31),
  //   );

  //   expectInputDate('the last day of March 2010', new Date(2010, 2, 31));
  //   expectInputDate('the last day of March, 2012', new Date(2012, 2, 31));
  //   expectInputDate(
  //     'end of march, 2005',
  //     new Date(2005, 2, 31, 23, 59, 59, 999),
  //   );

  //   expectInputDate(
  //     'the end of next February',
  //     testWithDateGetter((now) => endOfMonth(setMonth(addYears(now, 1), 1))),
  //   );

  //   expectInputDate('beginning of 1998', new Date(1998, 0));
  //   expectInputDate('end of 1998', new Date(1998, 11, 31, 23, 59, 59, 999));
  //   expectInputDate('the first day of 1998', new Date(1998, 0));
  //   expectInputDate('the last day of 1998', new Date(1998, 11, 31));

  //   expectInputDate(
  //     'The 15th of last month',
  //     new Date(now.getFullYear(), now.getMonth() - 1, 15),
  //   );
  //   expectInputDate(
  //     'January 30th of last year',
  //     new Date(now.getFullYear() - 1, 0, 30),
  //   );
  //   expectInputDate('January of last year', new Date(now.getFullYear() - 1, 0));

  //   expectInputDate('First day of may', new Date(now.getFullYear(), 4, 1));
  //   expectInputDate('Last day of may', new Date(now.getFullYear(), 4, 31));
  //   expectInputDate(
  //     'Last day of next month',
  //     testWithDateGetter((now) => startOfDay(endOfMonth(addMonths(now, 1)))),
  //   );
  //   expectInputDate(
  //     'Last day of november',
  //     new Date(now.getFullYear(), 10, 30),
  //   );

  //   expectInputDate(
  //     'the first day of next January',
  //     new Date(now.getFullYear() + 1, 0, 1),
  //   );

  //   expectInputDate('Next week', testRelativeDate(0, 0, 7));

  //   expectIncorrectInput('foo of next week');
  //   expectInputDate('Thursday of next week', testWeekday(4, 1));
  //   expectInputDate('Thursday of next week, 3:30pm', testWeekday(4, 1, 15, 30));

  //   expectInputDate('the 1st Tuesday of June, 2012', new Date(2012, 5, 5));
  //   expectInputDate('the 2nd Tuesday of June, 2012', new Date(2012, 5, 12));

  //   expectInputDate('the 1st Tuesday of November, 2012', new Date(2012, 10, 6));
  //   expectInputDate(
  //     'the 2nd Tuesday of November, 2012',
  //     new Date(2012, 10, 13),
  //   );
  //   expectInputDate(
  //     'the 3rd Tuesday of November, 2012',
  //     new Date(2012, 10, 20),
  //   );
  //   expectInputDate(
  //     'the 4th Tuesday of November, 2012',
  //     new Date(2012, 10, 27),
  //   );
  //   expectInputDate('the 5th Tuesday of November, 2012', new Date(2012, 11, 4));
  //   expectInputDate(
  //     'the 6th Tuesday of November, 2012',
  //     new Date(2012, 11, 11),
  //   );

  //   expectInputDate('the 1st Friday of February, 2012', new Date(2012, 1, 3));
  //   expectInputDate('the 2nd Friday of February, 2012', new Date(2012, 1, 10));
  //   expectInputDate('the 3rd Friday of February, 2012', new Date(2012, 1, 17));
  //   expectInputDate('the 4th Friday of February, 2012', new Date(2012, 1, 24));
  //   expectInputDate('the 5th Friday of February, 2012', new Date(2012, 2, 2));
  //   expectInputDate('the 6th Friday of February, 2012', new Date(2012, 2, 9));

  //   expectInputDate(
  //     'the 15th of last month',
  //     testWithDateGetter((now) => setDate(subMonths(now, 1), 15)),
  //   );
  //   expectInputDate(
  //     'the 15th of last month at 2:30pm',
  //     testTimeWithDateGetter((now) => setDate(subMonths(now, 1), 15), {
  //       hour: 14,
  //       minute: 30,
  //     }),
  //   );
  // });

  // it('should parse relative', () => {
  //   expectInputDate('in 60 seconds', testRelativeDate(0, 0, 0, 0, 1));
  //   expectInputDate('in 45 minutes', testRelativeDate(0, 0, 0, 0, 45));
  //   expectInputDate('in 5 hours', testRelativeDate(0, 0, 0, 5));
  //   expectInputDate('in 5 days', testRelativeDate(0, 0, 5));
  //   expectInputDate('in 5 weeks', testRelativeDate(0, 0, 35));
  //   expectInputDate('in 5 months', testRelativeDate(0, 5));
  //   expectInputDate('in 5 years', testRelativeDate(5));
  // });

  // it('a', () => {
  //   expectInputDate(
  //     '5:00am in a month',
  //     testTimeWithDateGetter((now) => addMonths(now, 1), { hour: 5 }),
  //   );
  //   expectInputDate(
  //     '5am in a month',
  //     testTimeWithDateGetter((now) => addMonths(now, 1), { hour: 5 }),
  //   );
  //   expectInputDate(
  //     '21:00 in 2 weeks',
  //     testTimeWithDateGetter((now) => addWeeks(now, 2), { hour: 21 }),
  //   );
  //   expectInputDate(
  //     '6:30pm in 1 day',
  //     testTimeWithDateGetter((now) => addDays(now, 1), {
  //       hour: 18,
  //       minute: 30,
  //     }),
  //   );
  //   expectInputDate(
  //     '6:30pm in 3 days',
  //     testTimeWithDateGetter((now) => addDays(now, 3), {
  //       hour: 18,
  //       minute: 30,
  //     }),
  //   );
  //   expectInputDate(
  //     '6:30pm 2 days ago',
  //     testTimeWithDateGetter((now) => subDays(now, 2), {
  //       hour: 18,
  //       minute: 30,
  //     }),
  //   );
  //   expectInputDate(
  //     '5:01am in a month',
  //     testTimeWithDateGetter((now) => addMonths(now, 1), {
  //       hour: 5,
  //       minute: 1,
  //     }),
  //   );

  //   expectIncorrectInput('6:30pm in -3 days');
  //   expectIncorrectInput('5:30am in an hour');
  //   expectIncorrectInput('5am in a minute');

  //   expectInputDate(
  //     'beginning of yesterday',
  //     testWithDateGetter((now) => startOfDay(subDays(now, 1)), 'exact'),
  //   );
  //   expectInputDate(
  //     'end of yesterday',
  //     testWithDateGetter((now) => endOfDay(subDays(now, 1)), 'exact'),
  //   );
  //   expectInputDate(
  //     'beginning of today',
  //     testWithDateGetter((now) => startOfDay(now), 'exact'),
  //   );
  //   expectInputDate(
  //     'end of today',
  //     testWithDateGetter((now) => endOfDay(now), 'exact'),
  //   );
  //   expectInputDate(
  //     'beginning of tomorrow',
  //     testWithDateGetter((now) => startOfDay(addDays(now, 1)), 'exact'),
  //   );

  //   expectInputDate(
  //     'end of tomorrow',
  //     testWithDateGetter((now) => endOfDay(addDays(now, 1)), 'exact'),
  //   );

  //   // Issue #431 "ten minutes ago"
  //   expectInputDate('ten minutes ago', testRelativeDate(0, 0, 0, 0, -10));
  //   expectInputDate('ten minutes from now', testRelativeDate(0, 0, 0, 0, 10));

  //   // Issue #509 "a/p" for "am/pm"
  //   expectInputDate(
  //     'yesterday at 3p',
  //     new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 15),
  //   );
  //   expectInputDate(
  //     'yesterday at 3a',
  //     new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 3),
  //   );
  //   expectInputDate(
  //     'yesterday at 3:00p',
  //     new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 15),
  //   );
  //   expectInputDate(
  //     'yesterday at 3:00a',
  //     new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 3),
  //   );

  //   // Issue #455 "a.m./p.m."
  //   expectInputDate(
  //     '3a.m.',
  //     new Date(now.getFullYear(), now.getMonth(), now.getDate(), 3),
  //   );
  //   expectInputDate(
  //     '3p.m.',
  //     new Date(now.getFullYear(), now.getMonth(), now.getDate(), 15),
  //   );
  //   expectInputDate(
  //     '3 a.m.',
  //     new Date(now.getFullYear(), now.getMonth(), now.getDate(), 3),
  //   );
  //   expectInputDate(
  //     '3 p.m.',
  //     new Date(now.getFullYear(), now.getMonth(), now.getDate(), 15),
  //   );

  //   // Issue #453 "tomorrow at noon"
  //   expectInputDate(
  //     'noon',
  //     new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12),
  //   );
  //   expectInputDate(
  //     'tomorrow at noon',
  //     new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 12),
  //   );

  //   expectInputDate('Monday at noon', testWeekday(1, 0, 12));
  //   expectInputDate('next Saturday at noon', testWeekday(6, 1, 12));
  //   expectInputDate('last Tuesday at noon', testWeekday(2, -1, 12));
  //   expectInputDate('Monday at midnight', testWeekday(2, 0));
  //   expectInputDate('next Saturday at midnight', testWeekday(7, 1));
  //   expectInputDate('last Tuesday at midnight', testWeekday(3, -1));

  //   expectInputDate('midnight', testRelativeDateSameDay(0, 0, 1));
  //   expectInputDate('midnight tonight', testRelativeDateSameDay(0, 0, 1));
  //   expectInputDate('tomorrow at midnight', testRelativeDateSameDay(0, 0, 2));

  //   expectInputDate('midnight Tuesday', testWeekday(3, 0));
  //   expectInputDate('midnight on Tuesday', testWeekday(3, 0));

  //   // Issue #455
  //   expectInputDate('a week from Tuesday', testWeekday(2, 1));
  //   expectInputDate('week from Tuesday', testWeekday(2, 1));
  //   expectInputDate(
  //     'first of the month',
  //     new Date(now.getFullYear(), now.getMonth()),
  //   );

  //   expectInputDate('the first Friday of February, 2012', new Date(2012, 1, 3));
  //   expectInputDate(
  //     'the second Friday of February, 2012',
  //     new Date(2012, 1, 10),
  //   );
  //   expectInputDate(
  //     'the third Friday of February, 2012',
  //     new Date(2012, 1, 17),
  //   );
  //   expectInputDate(
  //     'the fourth Friday of February, 2012',
  //     new Date(2012, 1, 24),
  //   );
  //   expectInputDate('the fifth Friday of February, 2012', new Date(2012, 2, 2));
  //   expectInputDate('the sixth Friday of February, 2012', new Date(2012, 2, 9));

  //   expectInputDate(
  //     'the 3rd Tuesday in November, 2012',
  //     new Date(2012, 10, 20),
  //   );

  //   expectInputDate('the second Sunday in June, 2016', new Date(2016, 5, 12));
  //   expectInputDate('the second Monday in June, 2016', new Date(2016, 5, 13));
  //   expectInputDate('the second Tuesday in June, 2016', new Date(2016, 5, 14));
  //   expectInputDate('the second Wednesday in June, 2016', new Date(2016, 5, 8));
  //   expectInputDate('the second Thursday in June, 2016', new Date(2016, 5, 9));
  //   expectInputDate('the second Friday in June, 2016', new Date(2016, 5, 10));
  //   expectInputDate('the second Saturday in June, 2016', new Date(2016, 5, 11));

  //   expectInputDate(
  //     'the last Sunday in November, 2012',
  //     new Date(2012, 10, 25),
  //   );
  //   expectInputDate(
  //     'the last Monday in November, 2012',
  //     new Date(2012, 10, 26),
  //   );
  //   expectInputDate(
  //     'the last Tuesday in November, 2012',
  //     new Date(2012, 10, 27),
  //   );
  //   expectInputDate(
  //     'the last Wednesday in November, 2012',
  //     new Date(2012, 10, 28),
  //   );
  //   expectInputDate(
  //     'the last Thursday in November, 2012',
  //     new Date(2012, 10, 29),
  //   );
  //   expectInputDate(
  //     'the last Friday in November, 2012',
  //     new Date(2012, 10, 30),
  //   );
  //   expectInputDate(
  //     'the last Saturday in November, 2012',
  //     new Date(2012, 10, 24),
  //   );

  //   expectInputDate('next weekend', testWeekday(6, 1));
  //   expectInputDate(
  //     'the second weekend of August, 2011',
  //     new Date(2011, 7, 13),
  //   );
  //   expectInputDate('the last weekend of January, 1985', new Date(1985, 0, 26));

  //   // Issue #455 Allowing "half" for hours years, and days

  //   expectInputDate('half hour ago', testRelativeDate(0, 0, 0, 0, -30));
  //   expectInputDate('half an hour ago', testRelativeDate(0, 0, 0, 0, -30));
  //   expectInputDate('a half hour ago', testRelativeDate(0, 0, 0, 0, -30));

  //   expectInputDate('half hour from now', testRelativeDate(0, 0, 0, 0, 30));
  //   expectInputDate('half an hour from now', testRelativeDate(0, 0, 0, 0, 30));
  //   expectInputDate('a half hour from now', testRelativeDate(0, 0, 0, 0, 30));

  //   expectInputDate('in half an hour', testRelativeDate(0, 0, 0, 0, 30));
  //   expectInputDate('in a half hour', testRelativeDate(0, 0, 0, 0, 30));

  //   expectInputDate('half year ago', testRelativeDate(0, -6));
  //   expectInputDate('half a year ago', testRelativeDate(0, -6));

  //   expectInputDate('half a day ago', testRelativeDate(0, 0, 0, -12));

  //   expectIncorrectInput('half a week ago');
  //   expectIncorrectInput('half a month ago');
  // });

  // it('b', () => {
  //   expectInputDate('the first of January', new Date(now.getFullYear(), 0, 1));
  //   expectInputDate('the second of January', new Date(now.getFullYear(), 0, 2));
  //   expectInputDate('the third of January', new Date(now.getFullYear(), 0, 3));
  //   expectInputDate('the fourth of January', new Date(now.getFullYear(), 0, 4));
  //   expectInputDate('the fifth of January', new Date(now.getFullYear(), 0, 5));
  //   expectInputDate('the sixth of January', new Date(now.getFullYear(), 0, 6));
  //   expectInputDate(
  //     'the seventh of January',
  //     new Date(now.getFullYear(), 0, 7),
  //   );
  //   expectInputDate('the eighth of January', new Date(now.getFullYear(), 0, 8));
  //   expectInputDate('the ninth of January', new Date(now.getFullYear(), 0, 9));
  //   expectInputDate('the tenth of January', new Date(now.getFullYear(), 0, 10));

  //   expectInputDate('the fifth of January', new Date(now.getFullYear(), 0, 5));
  //   expectInputDate('the fifth of February', new Date(now.getFullYear(), 1, 5));
  //   expectInputDate('the fifth of March', new Date(now.getFullYear(), 2, 5));
  //   expectInputDate('the fifth of April', new Date(now.getFullYear(), 3, 5));
  //   expectInputDate('the fifth of May', new Date(now.getFullYear(), 4, 5));
  //   expectInputDate('the fifth of June', new Date(now.getFullYear(), 5, 5));
  //   expectInputDate('the fifth of July', new Date(now.getFullYear(), 6, 5));
  //   expectInputDate('the fifth of August', new Date(now.getFullYear(), 7, 5));
  //   expectInputDate(
  //     'the fifth of September',
  //     new Date(now.getFullYear(), 8, 5),
  //   );
  //   expectInputDate('the fifth of October', new Date(now.getFullYear(), 9, 5));
  //   expectInputDate(
  //     'the fifth of November',
  //     new Date(now.getFullYear(), 10, 5),
  //   );
  //   expectInputDate(
  //     'the fifth of December',
  //     new Date(now.getFullYear(), 11, 5),
  //   );

  //   expectInputDate('one day ago', testRelativeDate(0, 0, -1));
  //   expectInputDate('two days ago', testRelativeDate(0, 0, -2));
  //   expectInputDate('three days ago', testRelativeDate(0, 0, -3));
  //   expectInputDate('four days ago', testRelativeDate(0, 0, -4));
  //   expectInputDate('five days ago', testRelativeDate(0, 0, -5));
  //   expectInputDate('six days ago', testRelativeDate(0, 0, -6));
  //   expectInputDate('seven days ago', testRelativeDate(0, 0, -7));
  //   expectInputDate('eight days ago', testRelativeDate(0, 0, -8));
  //   expectInputDate('nine days ago', testRelativeDate(0, 0, -9));
  //   expectInputDate('ten days ago', testRelativeDate(0, 0, -10));

  //   expectInputDate('one day from now', testRelativeDate(0, 0, 1));
  //   expectInputDate('two days from now', testRelativeDate(0, 0, 2));
  //   expectInputDate('three days from now', testRelativeDate(0, 0, 3));
  //   expectInputDate('four days from now', testRelativeDate(0, 0, 4));
  //   expectInputDate('five days from now', testRelativeDate(0, 0, 5));
  //   expectInputDate('six days from now', testRelativeDate(0, 0, 6));
  //   expectInputDate('seven days from now', testRelativeDate(0, 0, 7));
  //   expectInputDate('eight days from now', testRelativeDate(0, 0, 8));
  //   expectInputDate('nine days from now', testRelativeDate(0, 0, 9));
  //   expectInputDate('ten days from now', testRelativeDate(0, 0, 10));
  // });

  // it('c', () => {
  //   // Issue #98: System time set to January 31st
  //   // expectInputDate('2011-09-01T05:00:00Z',  getUTCDate(2011, 8, 1, 5));

  //   // Issue #152 times should be allowed in front
  //   expectInputDate('3:45 2012-3-15', new Date(2012, 2, 15, 3, 45));
  //   expectInputDate('3:45pm 2012-3-15', new Date(2012, 2, 15, 15, 45));
  //   expectInputDate('3:45pm 3/15/2012', new Date(2012, 2, 15, 15, 45));
  //   expectInputDate('3:45pm 3/4/2012', new Date(2012, 3, 3, 15, 45));

  //   expectInputDate('0 January', new Date(now.getFullYear() - 1, 11, 31));
  //   expectInputDate('1 January', new Date(now.getFullYear(), 0, 1));
  //   expectInputDate('01 January', new Date(now.getFullYear(), 0, 1));
  //   expectInputDate('15 January', new Date(now.getFullYear(), 0, 15));
  //   expectInputDate('31 January', new Date(now.getFullYear(), 0, 31));

  //   expectInputDate('1 Jan', new Date(now.getFullYear(), 0, 1));
  //   expectInputDate('01 Jan', new Date(now.getFullYear(), 0, 1));
  //   expectInputDate('15 Jan', new Date(now.getFullYear(), 0, 15));
  //   expectInputDate('31 Jan', new Date(now.getFullYear(), 0, 31));

  //   expectInputDate('0 July', new Date(now.getFullYear(), 5, 30));
  //   expectInputDate('1 July', new Date(now.getFullYear(), 6, 1));
  //   expectInputDate('01 July', new Date(now.getFullYear(), 6, 1));
  //   expectInputDate('15 July', new Date(now.getFullYear(), 6, 15));
  //   expectInputDate('31 July', new Date(now.getFullYear(), 6, 31));
  //   expectInputDate('32 July', new Date(now.getFullYear(), 7, 1));

  //   expectInputDate('1 Dec', new Date(now.getFullYear(), 11, 1));
  //   expectInputDate('01 Dec', new Date(now.getFullYear(), 11, 1));
  //   expectInputDate('15 Dec', new Date(now.getFullYear(), 11, 15));
  //   expectInputDate('31 Dec', new Date(now.getFullYear(), 11, 31));

  //   expectInputDate('1 December', new Date(now.getFullYear(), 11, 1));
  //   expectInputDate('01 December', new Date(now.getFullYear(), 11, 1));
  //   expectInputDate('15 December', new Date(now.getFullYear(), 11, 15));
  //   expectInputDate('31 December', new Date(now.getFullYear(), 11, 31));
  //   expectInputDate('32 December', new Date(now.getFullYear() + 1, 0, 1));

  //   expectInputDate('1 January 3pm', new Date(now.getFullYear(), 0, 1, 15));
  //   expectInputDate(
  //     '1 January 3:45pm',
  //     new Date(now.getFullYear(), 0, 1, 15, 45),
  //   );

  //   expectInputDate("'87", new Date(1987, 0));
  //   expectInputDate("May '87", new Date(1987, 4));
  //   expectInputDate("14 May '87", new Date(1987, 4, 14));
  // });

  // it('e', () => {
  //   expectInputDate(
  //     '6234 milliseconds ago',
  //     testRelativeDate(0, 0, 0, 0, 0, -6),
  //   );
  //   expectInputDate('6 seconds ago', testRelativeDate(0, 0, 0, 0, 0, -6));
  //   expectInputDate('360 seconds ago', testRelativeDate(0, 0, 0, 0, -6));
  //   expectInputDate('360 minutes ago', testRelativeDate(0, 0, 0, 6));
  //   expectInputDate('340 days ago', testRelativeDate(0, -11));
  //   expectInputDate('360 days ago', testRelativeDate(0, -11));
  //   expectInputDate('360 weeks ago', testRelativeDate(-6));
  //   expectInputDate('360 months ago', testRelativeDate(-30));
  //   expectInputDate('360 years ago', testRelativeDate(-360));
  //   expectInputDate('12 months ago', testRelativeDate(-1));
  //   // expectInputDate('360 hours ago', '2 weeks ago');

  //   expectInputDate(
  //     '6234 milliseconds from now',
  //     testRelativeDate(0, 0, 0, 0, 0, 6),
  //   );
  //   expectInputDate('361 seconds from now', testRelativeDate(0, 0, 0, 0, 0, 6));
  //   expectInputDate('361 minutes from now', testRelativeDate(0, 0, 0, 0, 6));
  //   expectInputDate('340 days from now', testRelativeDate(0, 11));
  //   expectInputDate('360 days from now', testRelativeDate(0, -11));
  //   expectInputDate('360 weeks from now', testRelativeDate(6));
  //   expectInputDate('360 months from now', testRelativeDate(30));
  //   expectInputDate('360 years from now', testRelativeDate(360));
  //   expectInputDate('13 months from now', testRelativeDate(1));
  //   // expectInputDate('360 hours from now', '2 weeks from now');
  // });
});
