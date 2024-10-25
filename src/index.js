// Because of webpack, CSS rules need to be imported here and not in the .html file
import './styles.css';

// Just to have a template for the file importing
import { greeting } from './greeting.js';
console.log(greeting);

// Another webpack check
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

// ---------------------- START YOUR CODE BELOW HERE

import { processData } from './processData.js';
import { fetchDOM } from './fetchDOM.js';
// import { updateUI } from './updateUI.js';
import imgClearDay from './assets/clear-day.png';
import imgClearNight from './assets/clear-night.png';
import imgCloudyDay from './assets/cloudy-day.png';
import imgCloudyNight from './assets/cloudy-night.png';
import imgPartlyCloudyNight from './assets/partly-cloudy-night.png';
import imgPartlyCloudyDay from './assets/partly-cloudy-day.png';
import imgRain from './assets/rain.png';

console.log(imgRain);

let processedData = {};
let unit = '°F'; // or '°C'

async function newRequest(city) {
  try {
    const serverResponse = await fetch(
      'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' +
        city +
        '?key=CQ78E2P96ZCAAKF2DTK6F4FU3',
      { mode: 'cors' },
    );
    const rawData = await serverResponse.json();
    //console.log(rawData);
    processedData = processData(rawData);
    console.log(processedData);
    updateUI(processedData);
  } catch (error) {
    alert(error);
  }
}

function updateUI(processedData) {
  // current forecast
  let pCity = document.createElement('p');
  pCity.textContent = processedData.address;

  let pTimezone = document.createElement('p');
  pTimezone.textContent = processedData.timezone;

  let pCurrentTime = document.createElement('p');
  pCurrentTime.textContent = getLocalTime();

  let pLatitude = document.createElement('p');
  pLatitude.textContent = `Latitude: ${processedData.latitude}`;

  let pLongitude = document.createElement('p');
  pLongitude.textContent = `Longitude: ${processedData.latitude}`;

  let pCurrentTemp = document.createElement('p');
  pCurrentTemp.textContent = `${convertFahrenheitToCelsius(processedData.currentTemperature)}${unit}`;

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
    pTemperature.textContent = `T: ${convertFahrenheitToCelsius(processedData.temperature[i])}${unit}`;

    // create the humidity paragraph
    let pHumidity = document.createElement('p');
    pHumidity.textContent = `H: ${processedData.humidity[i]}%`;

    // create the feelslike paragraph
    let pFeelslike = document.createElement('p');
    pFeelslike.textContent = `Feels like: ${convertFahrenheitToCelsius(processedData.feelslike[i])}${unit}`;

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
      pTemp.textContent = `${convertFahrenheitToCelsius(processedData.temperatureHours[i * 23 + j])}${unit}`;

      // create feelslike paragraph
      let pFeelslike = document.createElement('p');
      pFeelslike.textContent = `${convertFahrenheitToCelsius(processedData.temperatureHours[i * 23 + j])}${unit}`;

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

function handleImg(img, path) {
  if (path === 'clear-day') {
    img.src = imgClearDay;
  } else if (path === 'clear-night') {
    img.src = imgClearNight;
  } else if (path === 'cloudy-day') {
    img.src = imgCloudyDay;
  } else if (path === 'cloudy-night') {
    img.src = imgCloudyNight;
  } else if (path === 'partly-cloudy-day') {
    img.src = imgPartlyCloudyDay;
  } else if (path === 'partly-cloudy-night') {
    img.src = imgPartlyCloudyNight;
  } else if (path === 'rain') {
    img.src = imgRain;
  }
}

function convertFahrenheitToCelsius(temp) {
  if (unit === '°F') return temp.toFixed(0);
  if (unit === '°C') {
    let celsius = (temp - 32) / 1.8;
    celsius = celsius.toFixed(0);
    return celsius;
  }
}

function getLocalTime() {
  // const date = new Date();
  // console.log(date);
  // const nowUTC = Date.UTC(date.getUTCHours(), date.getUTCMinutes());
  // console.log(nowUTC);
  // const localTime = nowUTC.addHours(h);
  // return localTime;
  const now = new Date();
  const utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
  const localTime = new Date(
    utc.getTime() + processedData.tzoffset * 60 * 60000,
  );
  return `${localTime.getHours()}:${localTime.getMinutes()}`;
}

const DOM = fetchDOM();
newRequest('Istanbul');
