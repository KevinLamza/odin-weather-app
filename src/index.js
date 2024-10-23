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

async function newRequest(city) {
  try {
    const response = await fetch(
      'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' +
        city +
        '?key=CQ78E2P96ZCAAKF2DTK6F4FU3',
      { mode: 'cors' },
    );
    const data = await response.json();
    console.log(data);
    processData(data);
  } catch (error) {
    alert(error);
  }
}

newRequest('Istanbul');
