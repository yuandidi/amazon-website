import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

function isWeekend(date) {
  const dayOFWeek = date.format('dddd');
  return dayOFWeek === 'Saturday' || dayOFWeek === 'Sunday';
}

export function calculateDeliveryDate(deliveryOption) {
  let remainingDays = deliveryOption.deliveryDays;
  let deliveryDate = dayjs();

  while (remainingDays > 0) {
    deliveryDate = deliveryDate.add(1, 'days');
    if(!isWeekend(deliveryDate)) {
      remainingDays--;
    }
  }

  const dateString = deliveryDate.format('dddd, MMMM D');
}