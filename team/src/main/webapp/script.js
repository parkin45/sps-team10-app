
// const jikanjs  = require(['jikanjs']); // Uses per default the API version 3
// module.exports = jikan;

function handleErrors(response) {//in case etch malfunctions
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

function randomizeAnime() {
    //retrieve list of anime from api somehow
    // const genres = jikanjs.loadGenre(anime).//theoretically will load genres
    // console.log(genres);

    //temp list of anime
    // const msgList =
    //     ['demon slayer',
    //         'my hero academia',
    //         'fruits basket',
    //         'soul eater',
    //         'konosuba',
    //         'the disastarous life of saiki k',
    //         '¯\_(ツ)_/¯'];

    // const msg = msgList[Math.floor(Math.random() * msgList.length)];
    // const msgContainer = document.getElementById('random-container');
    // createListElement(msg);
    // msgContainer.innerText = msg;
    // console.log(msg);

    //a test for jikan.
    const msgList = [];
    // var request = new XMLHttpRequest();
    // request.open('GET', 'https://api.jikan.moe/v3/genre/anime/6/1', true);

    fetch('https://api.jikan.moe/v3/genre/anime/6/1').then(handleErrors).then(response => response.text())//fetch from data
        .then(text => {
            parsed = JSON.parse(text);
            listing = parsed.anime;
            // var names = listing.map(function(item) {
            //                                     return item['title'];
            // });
            listing.forEach(function(obj) { console.log(typeof obj.title); 
                                            msgList.push(obj.title);
            });
            // msgList.concat(obj.title);
            // });
        }
        );
    console.log("Message list: ");
    // console.log(typeof msgList.title);
    console.log(msgList);
    // console.log(msgList.length);
    // var randomNumber = Math.floor(Math.random()*msgList.length);
    // console.log(randomNumber);
    // console.log("==end Message list==");
    // const msg = msgList[Math.floor(Math.random() * msgList.length)];
    // console.log("message: ");

    // console.log(Math.floor(Math.random() * msgList.length));//always returns 0
    // console.log(msgList[7]);//returns undefined

    // console.log("== end message ==");
    // const msgContainer = document.getElementById('random-container');
    // createListElement(msg);
    // msgContainer.innerText = msg;
    // console.log(msg);

    // if (typeof this.response !== 'undefined') {
    // var data = JSON.parse(this.response);
    // data.forEach((anime) => { // Log each movie's title
    //     console.log(anime.title)
    // });
    // }
    // else{
    //     console.log("data undefined, listing anyway");
    //     console.log(this.response);
    // }

}
/** I just laid the framwork and made this function the onclick for the 'click me' randomize button ---Nikita */

/** Creates an <li> element containing text. */
function createListElement(text) {
    const liElement = document.createElement('li');
    liElement.innerText = text;
    return liElement;
}
/** added this bc it might help lol ---Nikita */