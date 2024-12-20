export const DOM = fetchDOM();

function fetchDOM() {
  const convertUnitButton = document.getElementById('convertUnitButton');
  const submitButton = document.getElementById('submitButton');
  const search = document.getElementById('search');

  const current = document.querySelector('.current');
  const weeklyForecast = document.querySelector('.weeklyForecast');
  const hourlyForecastDay0 = document.querySelector('#hourlyForecastDay0');
  const hourlyForecastDay1 = document.querySelector('#hourlyForecastDay1');
  const hourlyForecastDay2 = document.querySelector('#hourlyForecastDay2');

  return {
    submitButton,
    search,
    convertUnitButton,
    current,
    weeklyForecast,
    hourlyForecastDay0,
    hourlyForecastDay1,
    hourlyForecastDay2,
  };

  // const day0Short = document.getElementById('day0Short');
  // const day1Short = document.getElementById('day1Short');
  // const day2Short = document.getElementById('day2Short');
  // const day3Short = document.getElementById('day3Short');
  // const day4Short = document.getElementById('day4Short');
  // const day5Short = document.getElementById('day5Short');
  // const day6Short = document.getElementById('day6Short');

  // const day0hour00 = document.getElementById('day0hour00');
  // const day0hour01 = document.getElementById('day0hour01');
  // const day0hour02 = document.getElementById('day0hour02');
  // const day0hour03 = document.getElementById('day0hour03');
  // const day0hour04 = document.getElementById('day0hour04');
  // const day0hour05 = document.getElementById('day0hour05');
  // const day0hour06 = document.getElementById('day0hour06');
  // const day0hour07 = document.getElementById('day0hour07');
  // const day0hour08 = document.getElementById('day0hour08');
  // const day0hour09 = document.getElementById('day0hour09');
  // const day0hour10 = document.getElementById('day0hour10');
  // const day0hour11 = document.getElementById('day0hour11');
  // const day0hour12 = document.getElementById('day0hour12');
  // const day0hour13 = document.getElementById('day0hour13');
  // const day0hour14 = document.getElementById('day0hour14');
  // const day0hour15 = document.getElementById('day0hour15');
  // const day0hour16 = document.getElementById('day0hour16');
  // const day0hour17 = document.getElementById('day0hour17');
  // const day0hour18 = document.getElementById('day0hour18');
  // const day0hour19 = document.getElementById('day0hour19');
  // const day0hour20 = document.getElementById('day0hour20');
  // const day0hour21 = document.getElementById('day0hour21');
  // const day0hour22 = document.getElementById('day0hour22');
  // const day0hour23 = document.getElementById('day0hour23');

  // const day1hour00 = document.getElementById('day1hour00');
  // const day1hour01 = document.getElementById('day1hour01');
  // const day1hour02 = document.getElementById('day1hour02');
  // const day1hour03 = document.getElementById('day1hour03');
  // const day1hour04 = document.getElementById('day1hour04');
  // const day1hour05 = document.getElementById('day1hour05');
  // const day1hour06 = document.getElementById('day1hour06');
  // const day1hour07 = document.getElementById('day1hour07');
  // const day1hour08 = document.getElementById('day1hour08');
  // const day1hour09 = document.getElementById('day1hour09');
  // const day1hour10 = document.getElementById('day1hour10');
  // const day1hour11 = document.getElementById('day1hour11');
  // const day1hour12 = document.getElementById('day1hour12');
  // const day1hour13 = document.getElementById('day1hour13');
  // const day1hour14 = document.getElementById('day1hour14');
  // const day1hour15 = document.getElementById('day1hour15');
  // const day1hour16 = document.getElementById('day1hour16');
  // const day1hour17 = document.getElementById('day1hour17');
  // const day1hour18 = document.getElementById('day1hour18');
  // const day1hour19 = document.getElementById('day1hour19');
  // const day1hour20 = document.getElementById('day1hour20');
  // const day1hour21 = document.getElementById('day1hour21');
  // const day1hour22 = document.getElementById('day1hour22');
  // const day1hour23 = document.getElementById('day1hour23');

  // const day2hour00 = document.getElementById('day2hour00');
  // const day2hour01 = document.getElementById('day2hour01');
  // const day2hour02 = document.getElementById('day2hour02');
  // const day2hour03 = document.getElementById('day2hour03');
  // const day2hour04 = document.getElementById('day2hour04');
  // const day2hour05 = document.getElementById('day2hour05');
  // const day2hour06 = document.getElementById('day2hour06');
  // const day2hour07 = document.getElementById('day2hour07');
  // const day2hour08 = document.getElementById('day2hour08');
  // const day2hour09 = document.getElementById('day2hour09');
  // const day2hour10 = document.getElementById('day2hour10');
  // const day2hour11 = document.getElementById('day2hour11');
  // const day2hour12 = document.getElementById('day2hour12');
  // const day2hour13 = document.getElementById('day2hour13');
  // const day2hour14 = document.getElementById('day2hour14');
  // const day2hour15 = document.getElementById('day2hour15');
  // const day2hour16 = document.getElementById('day2hour16');
  // const day2hour17 = document.getElementById('day2hour17');
  // const day2hour18 = document.getElementById('day2hour18');
  // const day2hour19 = document.getElementById('day2hour19');
  // const day2hour20 = document.getElementById('day2hour20');
  // const day2hour21 = document.getElementById('day2hour21');
  // const day2hour22 = document.getElementById('day2hour22');
  // const day2hour23 = document.getElementById('day2hour23');

  // return {
  //   convertUnitButton,
  //   current,
  //   day0Short,
  //   day1Short,
  //   day2Short,
  //   day3Short,
  //   day4Short,
  //   day5Short,
  //   day6Short,
  //   day0hour00,
  //   day0hour01,
  //   day0hour02,
  //   day0hour03,
  //   day0hour04,
  //   day0hour05,
  //   day0hour06,
  //   day0hour07,
  //   day0hour08,
  //   day0hour09,
  //   day0hour10,
  //   day0hour11,
  //   day0hour12,
  //   day0hour13,
  //   day0hour14,
  //   day0hour15,
  //   day0hour16,
  //   day0hour17,
  //   day0hour18,
  //   day0hour19,
  //   day0hour20,
  //   day0hour21,
  //   day0hour22,
  //   day0hour23,
  //   day1hour00,
  //   day1hour01,
  //   day1hour02,
  //   day1hour03,
  //   day1hour04,
  //   day1hour05,
  //   day1hour06,
  //   day1hour07,
  //   day1hour08,
  //   day1hour09,
  //   day1hour10,
  //   day1hour11,
  //   day1hour12,
  //   day1hour13,
  //   day1hour14,
  //   day1hour15,
  //   day1hour16,
  //   day1hour17,
  //   day1hour18,
  //   day1hour19,
  //   day1hour20,
  //   day1hour21,
  //   day1hour22,
  //   day1hour23,
  //   day2hour00,
  //   day2hour01,
  //   day2hour02,
  //   day2hour03,
  //   day2hour04,
  //   day2hour05,
  //   day2hour06,
  //   day2hour07,
  //   day2hour08,
  //   day2hour09,
  //   day2hour10,
  //   day2hour11,
  //   day2hour12,
  //   day2hour13,
  //   day2hour14,
  //   day2hour15,
  //   day2hour16,
  //   day2hour17,
  //   day2hour18,
  //   day2hour19,
  //   day2hour20,
  //   day2hour21,
  //   day2hour22,
  //   day2hour23,
  // };
}
