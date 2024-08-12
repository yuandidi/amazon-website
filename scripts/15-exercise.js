import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

const now = dayjs();

const date1 = now.add(5, 'days');
const dateString1 = date1.format('MMMM D');
console.log(dateString1);

const date2 = now.add(1, 'months');
const dateString2 = date2.format('MMMM D');
console.log(dateString2);

const date3 = now.subtract(1, 'months');
const dateString3 = date3.format('MMMM D');
console.log(dateString3);

const dateString4 = now.format('dddd');
console.log(dateString4);

console.log(isWeekend(now));

const date5 = now.subtract(1, 'days');
console.log(isWeekend(date5));

function isWeekend(date) {
  return date.format('dddd') === 'Saturday' || date.format('dddd') === 'Sunday';
}