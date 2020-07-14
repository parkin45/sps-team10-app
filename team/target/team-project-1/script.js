const jikanjs  = require('jikanjs'); // Uses per default the API version 3


function handleErrors(response) {//in case etch malfunctions
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

function randomizeAnime(){
//retrieve list of anime from api somehow
// const genres = jikanjs.loadGenre(anime).//theoretically will load genres
// console.log(genres);

const msgList =
        ['demon slayer',
            'my hero academia',
            'fruits basket',
            'soul eater',
            'konosuba',
            'the disastarous life of saiki k',
            '¯\_(ツ)_/¯'];

const msg = msgList[Math.floor(Math.random() * msgList.length)];
    const msgContainer = document.getElementById('random-container');
    createListElement(msg);
    msgContainer.innerText = msg;
    console.log(msg);
}
/** I just laid the framwork and made this function the onclick for the 'click me' randomize button ---Nikita */

/** Creates an <li> element containing text. */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}
/** added this bc it might help lol ---Nikita */