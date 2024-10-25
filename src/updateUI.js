import {
  handleImg,
  convertFahrenheitToCelsius,
  getLocalTime,
} from './utilities';
import { DOM } from './fetchDOM';

export function updateUI(processedData, unit) {
  // clear first previous UI
  while (DOM.current.firstChild) {
    DOM.current.removeChild(DOM.current.firstChild);
  }
  while (DOM.weeklyForecast.firstChild) {
    DOM.weeklyForecast.removeChild(DOM.weeklyForecast.firstChild);
  }
  while (DOM.hourlyForecastDay0.firstChild) {
    DOM.hourlyForecastDay0.removeChild(DOM.hourlyForecastDay0.firstChild);
  }
  while (DOM.hourlyForecastDay1.firstChild) {
    DOM.hourlyForecastDay1.removeChild(DOM.hourlyForecastDay1.firstChild);
  }
  while (DOM.hourlyForecastDay2.firstChild) {
    DOM.hourlyForecastDay2.removeChild(DOM.hourlyForecastDay2.firstChild);
  }

  // current forecast
  let pCity = document.createElement('p');
  pCity.textContent = processedData.address;

  let pTimezone = document.createElement('p');
  pTimezone.textContent = processedData.timezone;

  let pCurrentTime = document.createElement('p');
  pCurrentTime.textContent = getLocalTime(processedData.tzoffset);

  let pLatitude = document.createElement('p');
  pLatitude.textContent = `Latitude: ${processedData.latitude}`;

  let pLongitude = document.createElement('p');
  pLongitude.textContent = `Longitude: ${processedData.latitude}`;

  let pCurrentTemp = document.createElement('p');
  pCurrentTemp.textContent = `${convertFahrenheitToCelsius(processedData.currentTemperature, unit)}${unit}`;

  let pCurrentCondition = document.createElement('p');
  pCurrentCondition.textContent = `${processedData.currentCondition}`;

  let imgCurrent = document.createElement('img');
  handleImg(imgCurrent, processedData.currentIcon);

  DOM.current.appendChild(pCity);
  DOM.current.appendChild(pTimezone);
  DOM.current.appendChild(pCurrentTime);
  DOM.current.appendChild(pLatitude);
  DOM.current.appendChild(pLongitude);
  DOM.current.appendChild(pCurrentTemp);
  DOM.current.appendChild(pCurrentCondition);
  DOM.current.appendChild(imgCurrent);

  // weekdays forecast
  for (let i = 0; i < 7; i++) {
    // set the div
    let div = document.createElement('div');
    div.setAttribute('class', 'dayShort');
    div.setAttribute('id', `day${i}Short`);

    // create the condition paragraph
    let pCondition = document.createElement('p');
    pCondition.textContent = processedData.condition[i];
    pCondition.setAttribute('class', 'pCondition');

    // create the icon
    let img = document.createElement('img');
    handleImg(img, processedData.icon[i]);

    // create the temperature paragraph
    let pTemperature = document.createElement('p');
    pTemperature.textContent = `T: ${convertFahrenheitToCelsius(processedData.temperature[i], unit)}${unit}`;

    // create the humidity paragraph
    let pHumidity = document.createElement('p');
    pHumidity.textContent = `H: ${processedData.humidity[i]}%`;

    // create the feelslike paragraph
    let pFeelslike = document.createElement('p');
    pFeelslike.textContent = `Feels like: ${convertFahrenheitToCelsius(processedData.feelslike[i], unit)}${unit}`;

    div.appendChild(pCondition);
    div.appendChild(img);
    div.appendChild(pTemperature);
    div.appendChild(pHumidity);
    div.appendChild(pFeelslike);
    DOM.weeklyForecast.appendChild(div);
  }
  // hourly forecast
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 24; j++) {
      let numStr;
      if (j < 10) {
        numStr = '0' + j;
      } else {
        numStr = j;
      }

      // create the containing div (hourlyForecast)
      let div = document.createElement('div');
      div.setAttribute('class', 'hour');
      div.setAttribute('id', `day${j}hour${numStr}`);

      // create the icon
      let img = document.createElement('img');
      handleImg(img, processedData.iconHours[i * 23 + j]);

      // create div hourContent
      let subDiv = document.createElement('div');
      subDiv.setAttribute('class', 'hourContent');

      // create the time paragraph
      let pTime = document.createElement('p');
      pTime.textContent = `${numStr}:00`;
      pTime.setAttribute('class', 'hourContentTime');

      // create temperature paragraph
      let pTemp = document.createElement('p');
      pTemp.textContent = `${convertFahrenheitToCelsius(processedData.temperatureHours[i * 23 + j], unit)}${unit}`;

      // create feelslike paragraph
      let pFeelslike = document.createElement('p');
      pFeelslike.textContent = `${convertFahrenheitToCelsius(processedData.temperatureHours[i * 23 + j], unit)}${unit}`;

      // create condition paragraph
      let pCondition = document.createElement('p');
      pCondition.textContent = `${processedData.conditionHours[i * 23 + j]}`;

      div.appendChild(img);
      div.appendChild(subDiv);
      subDiv.appendChild(pTime);
      subDiv.appendChild(pTemp);
      subDiv.appendChild(pFeelslike);
      subDiv.appendChild(pCondition);

      if (i === 0) DOM.hourlyForecastDay0.appendChild(div);
      if (i === 1) DOM.hourlyForecastDay1.appendChild(div);
      if (i === 2) DOM.hourlyForecastDay2.appendChild(div);
    }
  }
}
