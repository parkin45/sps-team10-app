


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

//temp list of anime
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

//a test for jikan. should list all ngnl episodes upon clicking a random anime

const jikanjs  = require('jikanjs'); // Uses per default the API version 3
module.exports = jikan;

    jikanjs.loadAnime(19815, 'episodes').then((response) => {
    response.episodes.forEach(element => {
        console.log(`${element.episode_id}: ${element.title} - ${element.title_romanji} - ${element.title_japanese}`);
    })
}).catch((err) => {
    console.error(err); // in case a error happens
});
}
/** I just laid the framwork and made this function the onclick for the 'click me' randomize button ---Nikita */

/** Creates an <li> element containing text. */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}
/** added this bc it might help lol ---Nikita */