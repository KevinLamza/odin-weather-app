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
    const processedData = processData(rawData);
    console.log(processedData);
    updateUI();
  } catch (error) {
    alert(error);
  }
}

function updateUI() {
  // weekdays forecast
  for (let i = 0; i < 7; i++) {
    // set the div
    let div = document.createElement('div');
    div.setAttribute('class', 'dayShort');
    div.setAttribute('id', `day${i}Short`);

    // create the content
    let pCondition = document.createElement('p');

    // append everything
  }
  // hourly forecast
}

const DOM = fetchDOM();
newRequest('Istanbul');
