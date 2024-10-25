import imgClearDay from './assets/clear-day.png';
import imgClearNight from './assets/clear-night.png';
import imgCloudyDay from './assets/cloudy-day.png';
import imgCloudyNight from './assets/cloudy-night.png';
import imgPartlyCloudyNight from './assets/partly-cloudy-night.png';
import imgPartlyCloudyDay from './assets/partly-cloudy-day.png';
import imgCloudy from './assets/cloudy.png';
import imgRain from './assets/rain.png';

export function handleImg(img, path) {
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
  } else if (path === 'cloudy') {
    img.src = imgCloudy;
  } else if (path === 'rain') {
    img.src = imgRain;
  }
}

export function convertFahrenheitToCelsius(temp, unit) {
  if (unit === '°F') return temp.toFixed(0);
  if (unit === '°C') {
    let celsius = (temp - 32) / 1.8;
    celsius = celsius.toFixed(0);
    return celsius;
  }
}

export function getLocalTime(h) {
  // const date = new Date();
  // console.log(date);
  // const nowUTC = Date.UTC(date.getUTCHours(), date.getUTCMinutes());
  // console.log(nowUTC);
  // const localTime = nowUTC.addHours(h);
  // return localTime;
  const now = new Date();
  const utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
  const localTime = new Date(utc.getTime() + h * 60 * 60000);
  let minutes;
  if (localTime.getMinutes() < 10) minutes = '0' + localTime.getMinutes();
  else minutes = localTime.getMinutes();
  return `${localTime.getHours()}:${minutes}`;
}
